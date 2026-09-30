"""
Daily SIF NAV fetch job.

Pulls the live bulk NAV file from AMFI, parses it, and upserts the rows into
data/history.csv (a long-format table that accumulates one day's worth of
NAVs every time this runs). Designed to be run once a day by GitHub Actions
(see .github/workflows/daily-fetch.yml) but works fine run by hand too.

Idempotent: re-running for a date that's already stored just overwrites that
date's rows instead of duplicating them, so a re-run or a retry after a
failure is always safe.
"""
import csv
import os
import sys
import urllib.request

sys.path.insert(0, os.path.dirname(__file__))
from parse_sif import parse_latest_nav  # noqa: E402

SOURCE_URL = "https://portal.amfiindia.com/spages/SIF_NAVAll.txt"
HISTORY_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "history.csv")
FIELDNAMES = [
    "date", "scheme_code", "scheme_name", "provider", "category",
    "plan", "option", "nav", "isin_growth", "isin_reinvest",
]


def fetch_source(url: str = SOURCE_URL) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8", errors="replace")


def load_history(path: str) -> dict:
    """Return {(date, scheme_code): row} for existing history, if any."""
    existing = {}
    if os.path.exists(path):
        with open(path, newline="", encoding="utf-8") as f:
            for row in csv.DictReader(f):
                existing[(row["date"], row["scheme_code"])] = row
    return existing


def save_history(path: str, rows_by_key: dict):
    rows = sorted(rows_by_key.values(), key=lambda r: (r["date"], r["scheme_code"]))
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
        writer.writeheader()
        writer.writerows(rows)


def heal_blank_plan_option(rows_by_key: dict) -> int:
    """AMFI sometimes ships a scheme with blank Plan/Option columns and a
    stripped-down name (seen for all iSIF schemes from 09-Sep-2026). The name
    heuristic then labels BOTH the Direct and Regular codes as
    Regular/Unknown, which the site filters out - so those funds silently
    froze on the site. Scheme codes are stable, so reuse the last properly
    labelled plan/option (and fuller name) seen for the same code. Runs over
    the whole history, so it also repairs rows already stored."""
    known = {}
    for (d, code), r in sorted(rows_by_key.items()):
        if r.get("option") and r["option"] != "Unknown":
            known[code] = (r["plan"], r["option"], r["scheme_name"])
    fixed = 0
    for r in rows_by_key.values():
        if r.get("option") in ("", "Unknown") and r["scheme_code"] in known:
            r["plan"], r["option"], r["scheme_name"] = known[r["scheme_code"]]
            fixed += 1
    if fixed:
        print(f"Healed plan/option on {fixed} row(s) with blank AMFI columns")
    return fixed


def run(text: str | None = None) -> int:
    text = text if text is not None else fetch_source()
    parsed = parse_latest_nav(text)
    if not parsed:
        raise SystemExit("Parsed zero rows — AMFI's format may have changed, check manually.")

    existing = load_history(HISTORY_PATH)
    for r in parsed:
        key = (r["date"], r["scheme_code"])
        existing[key] = {k: (r.get(k) or "") for k in FIELDNAMES}

    heal_blank_plan_option(existing)

    save_history(HISTORY_PATH, existing)
    dates = sorted(set(k[0] for k in existing))
    print(f"History now has {len(existing)} rows across {len(dates)} date(s); "
          f"latest date: {dates[-1] if dates else 'none'}")
    return len(parsed)


if __name__ == "__main__":
    run()
