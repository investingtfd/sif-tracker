"""
Monthly SIF AUM fetch job.

AMFI publishes a monthly "SIF Monthly" report (category-level, NOT per
scheme) at a stable URL pattern:
    https://portal.amfiindia.com/spages/sif_am{mon}{yyyy}repo.xls
e.g. sif_amaug2026repo.xls for the August 2026 report. It ships with a
release lag of a few days after month-end. AMFI's site sometimes serves this
as a real binary .xls and sometimes as an HTML table saved with an .xls
extension (both are common on Indian financial-portal exports) - this
script handles either.

There is no AMFI feed that gives per-scheme SIF AUM - this is deliberately
category-level only (Equity Long-Short, Equity Ex-Top 100, Sector Rotation,
Active Asset Allocator, Hybrid Long-Short, plus a Grand Total row), matching
what AMFI itself discloses. Writes data/aum.json.

Designed to run once a day alongside the NAV fetch (see
.github/workflows/daily-fetch.yml) - cheap to re-check daily since the
report itself only changes once a month. Never raises: a missing/unparsable
report just leaves data/aum.json untouched, so a hiccup here can't take down
the daily NAV publish (the workflow also sets continue-on-error on this step
as a second layer of protection).
"""
import datetime as dt
import io
import json
import os
import re
import sys
import urllib.request

OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "aum.json")
URL_TMPL = "https://portal.amfiindia.com/spages/sif_am{mon}{year}repo.xls"
MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

# Maps AMFI's report row labels (wording/case drifts month to month) to the
# same short category keys the dashboard already uses (see
# build_site_data.py / shortCategory() in site/index.html), so the two stay
# directly comparable. Order matters: more specific matchers first.
CATEGORY_MATCHERS = [
    ("Active Asset Allocator", "Active Asset Allocator Long-Short"),
    ("Equity Ex-Top 100", "Equity Ex-Top 100 Long-Short"),
    ("Equity Ex Top 100", "Equity Ex-Top 100 Long-Short"),
    ("Sector Rotation", "Sector Rotation Long-Short"),
    ("Hybrid Long-Short", "Hybrid Long-Short"),
    ("Hybrid Long Short", "Hybrid Long-Short"),
    ("Hybrid", "Hybrid Long-Short"),  # fallback if AMFI drops "Long-Short"
    ("Equity Long-Short", "Equity Long-Short"),
    ("Equity Long Short", "Equity Long-Short"),
]


def _candidate_urls(today: dt.date):
    """Try this month, then walk backward. AMFI publishes with a lag and the
    exact publish day moves around, so probing beats hardcoding an offset."""
    y, m = today.year, today.month
    for back in range(0, 4):
        mm = m - back
        yy = y
        while mm <= 0:
            mm += 12
            yy -= 1
        yield URL_TMPL.format(mon=MONTHS[mm - 1], year=yy), f"{MONTHS[mm - 1]}{yy}"


def _fetch(url: str):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            if resp.status != 200:
                return None
            return resp.read()
    except Exception:
        return None


def _match_category(label: str):
    low = label.lower()
    for needle, key in CATEGORY_MATCHERS:
        if needle.lower() in low:
            return key
    return None


def _parse_number(cell):
    if cell is None:
        return None
    s = str(cell).replace(",", "").strip()
    if s in ("", "-", "—", "nan", "None"):
        return None
    try:
        return float(s)
    except ValueError:
        return None


def _extract_as_of_date(text: str):
    # AMFI phrases the AUM column header as e.g. "Net AUM as on 31-Aug-2026 (Rs. in Crore)"
    m = re.search(r"as on\s+(\d{1,2}-[A-Za-z]{3,9}-\d{4})", text, re.IGNORECASE)
    if not m:
        return None
    for fmt in ("%d-%b-%Y", "%d-%B-%Y"):
        try:
            return dt.datetime.strptime(m.group(1), fmt).date().isoformat()
        except ValueError:
            continue
    return None


def _parse_table(rows, full_text: str):
    """rows: list of row-lists (already flattened to strings/None). Finds
    the header row to figure out which column is Net AUM / Average AUM /
    No. of Schemes, then reads one row per matched category plus Grand
    Total - label-based, not fixed cell coordinates, so small formatting
    drift from month to month doesn't break it."""
    header_idx = None
    for i, row in enumerate(rows):
        joined = " ".join(str(c) for c in row if c is not None).lower()
        if "net aum" in joined and ("scheme" in joined or "folio" in joined):
            header_idx = i
            break
    if header_idx is None:
        return None

    header = [str(c or "").strip().lower() for c in rows[header_idx]]

    def find_col(*needles):
        for i, h in enumerate(header):
            if all(n in h for n in needles):
                return i
        return None

    col_schemes = find_col("no", "scheme") if find_col("no", "scheme") is not None else find_col("scheme")
    col_net_aum = find_col("net aum")
    col_avg_aum = find_col("average net aum") if find_col("average net aum") is not None else find_col("average", "aum")
    if col_net_aum is None:
        return None

    categories = {}
    grand_total = None
    for row in rows[header_idx + 1:]:
        if not row or all(c in (None, "") for c in row):
            continue
        label = str(row[0] or "").strip()
        if not label:
            continue
        net_aum = _parse_number(row[col_net_aum]) if col_net_aum < len(row) else None
        avg_aum = _parse_number(row[col_avg_aum]) if col_avg_aum is not None and col_avg_aum < len(row) else None
        schemes = _parse_number(row[col_schemes]) if col_schemes is not None and col_schemes < len(row) else None

        if "grand total" in label.lower():
            grand_total = {"net_aum_cr": net_aum, "avg_aum_cr": avg_aum, "schemes": schemes}
            continue

        key = _match_category(label)
        if key and net_aum is not None:
            categories[key] = {"net_aum_cr": net_aum, "avg_aum_cr": avg_aum, "schemes": schemes}

    if not categories and grand_total is None:
        return None

    return {"as_of": _extract_as_of_date(full_text), "categories": categories, "grand_total": grand_total}


def _rows_from_html(content: bytes):
    """Handles the common case of an Indian financial portal serving an HTML
    table with a .xls extension."""
    try:
        import pandas as pd
    except ImportError:
        return None
    try:
        tables = pd.read_html(io.BytesIO(content))
    except Exception:
        return None
    text = content.decode("utf-8", errors="ignore")
    for t in tables:
        rows = [t.columns.tolist()] + t.astype(object).where(t.notna(), None).values.tolist()
        rows = [[("" if c is None else str(c)) for c in row] for row in rows]
        parsed = _parse_table(rows, text)
        if parsed:
            return parsed
    return None


def _rows_from_xls(content: bytes):
    """Handles a genuine binary (BIFF) .xls file."""
    try:
        import xlrd
    except ImportError:
        return None
    try:
        book = xlrd.open_workbook(file_contents=content)
    except Exception:
        return None
    sheet = book.sheet_by_index(0)
    rows = [[sheet.cell_value(r, c) for c in range(sheet.ncols)] for r in range(sheet.nrows)]
    text = "\n".join(" ".join(str(c) for c in row) for row in rows)
    return _parse_table(rows, text)


def run() -> int:
    today = dt.date.today()
    for url, tag in _candidate_urls(today):
        content = _fetch(url)
        if not content:
            continue
        parsed = _rows_from_html(content) or _rows_from_xls(content)
        if not parsed:
            print(f"Found a report at {url} but couldn't parse it - format may have changed.")
            continue

        payload = {
            "source_url": url,
            "report_month": tag,
            "as_of": parsed["as_of"],
            "fetched_at": dt.datetime.utcnow().isoformat() + "Z",
            "categories": parsed["categories"],
            "grand_total": parsed["grand_total"],
        }
        os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
        with open(OUT_PATH, "w", encoding="utf-8") as f:
            json.dump(payload, f, indent=2)
        print(f"Wrote AUM data for {tag} from {url} -> {OUT_PATH}")
        return 0

    print("No fetchable/parsable SIF monthly AUM report found in the last 4 months - "
          "leaving data/aum.json untouched.")
    return 0  # best-effort: never fail the job over this


if __name__ == "__main__":
    sys.exit(run())
