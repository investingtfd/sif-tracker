"""
Parser for AMFI's SIF NAV text exports.

Handles two real formats seen from https://portal.amfiindia.com/spages/SIF_NAVAll.txt
and the equivalent per-scheme historical download:

  1. "Latest NAV" bulk format (all schemes, one date):
     Scheme Code;ISIN Div Payout/ISIN Growth;ISIN Div Reinvestment;Scheme Name;Net Asset Value;Date
     with category/provider names as bare header lines interspersed (AMFI's classic
     NAVAll.txt convention). A header line followed by another header line is a
     CATEGORY (fund type / strategy); a header line followed by a data line is a
     PROVIDER (the SIF sponsor, e.g. "Altiva SIF").

  2. "Historical NAV" per-scheme format: 3 header lines (category, provider, full
     scheme name) then a column header row, then daily data rows.

Plan (Direct/Regular) and Option (Growth/IDCW) aren't always in separate columns
in what AMFI actually serves (they're often folded into the scheme name string),
so we extract them heuristically from the name rather than assuming a fixed
column layout.
"""
import re
from datetime import datetime


def _extract_plan(name: str) -> str:
    low = name.lower()
    if "direct" in low:
        return "Direct"
    # AMFI convention: a scheme name that doesn't call out "Direct" is the
    # Regular plan by omission (there is no ambiguous third option for SIFs).
    return "Regular"


def _extract_option(name: str) -> str:
    low = name.lower()
    if "idcw" in low or "dividend" in low or "income distribution" in low:
        return "IDCW"
    if "growth" in low:
        return "Growth"
    return "Unknown"


def _parse_date(s: str):
    s = s.strip()
    for fmt in ("%d-%b-%Y", "%d-%B-%Y", "%Y-%m-%d"):
        try:
            return datetime.strptime(s, fmt).date().isoformat()
        except ValueError:
            continue
    return None


def parse_latest_nav(text: str) -> list[dict]:
    """Parse the bulk 'Latest NAV' export into one row per scheme/plan/option."""
    lines = [ln.strip() for ln in text.splitlines()]
    # drop fully blank lines but keep an index so we can peek ahead
    non_blank = [ln for ln in lines if ln != ""]

    rows = []
    current_category = None
    current_provider = None

    i = 0
    n = len(non_blank)
    while i < n:
        line = non_blank[i]

        # Skip the literal column-header row.
        if line.lower().startswith("scheme code") or line.lower().startswith("sif code"):
            i += 1
            continue

        if ";" in line:
            parts = [p.strip() for p in line.split(";")]
            if len(parts) < 5:
                i += 1
                continue
            code = parts[0]
            isin_growth = parts[1] if parts[1] not in ("", "-") else None
            isin_reinvest = parts[2] if parts[2] not in ("", "-") else None
            name = parts[3]
            nav_raw = parts[-2]
            date_raw = parts[-1]
            try:
                nav = float(nav_raw)
            except ValueError:
                i += 1
                continue
            rows.append({
                "scheme_code": code,
                "isin_growth": isin_growth,
                "isin_reinvest": isin_reinvest,
                "scheme_name": name,
                "plan": _extract_plan(name),
                "option": _extract_option(name),
                "nav": nav,
                "date": _parse_date(date_raw),
                "category": current_category,
                "provider": current_provider,
            })
        else:
            # Header line: category if the *next* non-blank line is also a
            # header, provider if the next line is data.
            nxt = non_blank[i + 1] if i + 1 < n else ""
            if ";" in nxt:
                current_provider = line
            else:
                current_category = line
        i += 1

    return rows


def parse_historical_nav(text: str, scheme_name_hint: str | None = None) -> list[dict]:
    """Parse a per-scheme historical NAV export into one row per date."""
    lines = [ln.strip() for ln in text.splitlines() if ln.strip() != ""]
    rows = []
    header_idx = None
    header_fields = None
    for idx, line in enumerate(lines):
        if ";" in line and "date" in line.lower() and "net asset value" in line.lower():
            header_idx = idx
            header_fields = [f.strip().lower() for f in line.split(";")]
            break

    provider = lines[0] if header_idx and header_idx >= 1 else None
    scheme_name = lines[header_idx - 1] if header_idx and header_idx >= 1 else scheme_name_hint

    if header_fields is None:
        return rows

    nav_i = header_fields.index("net asset value") if "net asset value" in header_fields else 0
    date_i = header_fields.index("date") if "date" in header_fields else None
    plan_i = header_fields.index("plan") if "plan" in header_fields else None
    option_i = header_fields.index("option") if "option" in header_fields else None

    for line in lines[header_idx + 1:]:
        parts = [p.strip() for p in line.split(";")]
        if len(parts) <= nav_i:
            continue
        try:
            nav = float(parts[nav_i])
        except ValueError:
            continue
        date_raw = parts[date_i] if date_i is not None and date_i < len(parts) else None
        plan = parts[plan_i] if plan_i is not None and plan_i < len(parts) else _extract_plan(scheme_name or "")
        option = parts[option_i] if option_i is not None and option_i < len(parts) else _extract_option(scheme_name or "")
        rows.append({
            "scheme_name": scheme_name,
            "provider": provider,
            "plan": plan,
            "option": option,
            "nav": nav,
            "date": _parse_date(date_raw) if date_raw else None,
        })
    return rows


def parse_provider_history_dump(text: str) -> list[dict]:
    """Parse a per-provider historical NAV export (AMFI's
    SIF_DownloadNAVHistoryReport.aspx?mf=<id>&frmdt=...&todt=... endpoint).

    Format: 8-column rows -
      Scheme Code;NAV Name;Plan;Option;ISIN Div Payout/ISIN Growth;
      ISIN Div Reinvestment;Net Asset Value;Date
    with bare category/provider header lines interspersed exactly like
    parse_latest_nav's classic NAVAll.txt convention (a header line followed
    by another header line is a CATEGORY; a header line followed by a data
    line is a PROVIDER). Plan/Option are explicit columns here, so no
    heuristic extraction is needed. One provider file can contain multiple
    category blocks (e.g. both an Equity Long-Short and a Hybrid Long-Short
    section) and the provider header can repeat once per block.
    """
    lines = [ln.strip() for ln in text.splitlines()]
    non_blank = [ln for ln in lines if ln != ""]

    rows = []
    current_category = None
    current_provider = None

    i = 0
    n = len(non_blank)
    while i < n:
        line = non_blank[i]

        if line.lower().startswith("scheme code"):
            i += 1
            continue

        if ";" in line:
            parts = [p.strip() for p in line.split(";")]
            if len(parts) < 8:
                i += 1
                continue
            code, name, plan, option, isin_growth, isin_reinvest, nav_raw, date_raw = parts[:8]
            try:
                nav = float(nav_raw)
            except ValueError:
                i += 1
                continue
            if nav <= 0:
                # AMFI source data artifact: a 0.0000 placeholder row for an
                # option that hadn't declared a NAV yet (e.g. a fresh IDCW
                # sub-option). Not a real data point - drop it.
                i += 1
                continue
            # Normalize "Direct Plan"/"Regular Plan" -> "Direct"/"Regular";
            # fall back to name-based heuristic when the column is blank.
            plan_clean = re.sub(r"\s*plan$", "", plan, flags=re.IGNORECASE).strip()
            rows.append({
                "scheme_code": code,
                "scheme_name": name,
                "plan": plan_clean or _extract_plan(name),
                "option": option or _extract_option(name),
                "isin_growth": isin_growth or None,
                "isin_reinvest": isin_reinvest or None,
                "nav": nav,
                "date": _parse_date(date_raw),
                "category": current_category,
                "provider": current_provider,
            })
        else:
            nxt = non_blank[i + 1] if i + 1 < n else ""
            if ";" in nxt:
                current_provider = line
            else:
                current_category = line
        i += 1

    return rows


if __name__ == "__main__":
    import json
    import sys

    path = sys.argv[1] if len(sys.argv) > 1 else "data/sample_latest_nav.txt"
    with open(path, encoding="utf-8") as f:
        text = f.read()
    parsed = parse_latest_nav(text)
    print(f"Parsed {len(parsed)} scheme rows")
    print(json.dumps(parsed[:5], indent=2))
    categories = sorted(set(r["category"] for r in parsed))
    providers = sorted(set(r["provider"] for r in parsed))
    print(f"\n{len(categories)} categories, {len(providers)} providers")
    for c in categories:
        print(" -", c)
