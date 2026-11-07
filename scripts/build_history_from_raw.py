"""
Rebuild data/history.csv from scratch using the full "since inception"
historical dumps in data/raw/provider_*.txt (one file per SIF provider,
fetched from AMFI's SIF_DownloadNAVHistoryReport.aspx, split into _partN
files for providers whose dump exceeded a single fetch).

This supersedes the earlier partial history.csv (which only had 09-Sep-2026
for most schemes plus ~23 days for one Altiva scheme) with real per-scheme
history since each fund's actual inception date.
"""
import csv
import glob
import os
import re
import sys

sys.path.insert(0, os.path.dirname(__file__))
from parse_sif import parse_provider_history_dump

RAW_DIR = os.path.join(os.path.dirname(__file__), "..", "data", "raw")
HISTORY_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "history.csv")

FIELDNAMES = [
    "date", "scheme_code", "scheme_name", "provider", "category",
    "plan", "option", "nav", "isin_growth", "isin_reinvest",
]


def group_files():
    """Group raw files by provider id, so multi-part dumps (qsif) merge
    into one logical provider before parsing."""
    files = sorted(glob.glob(os.path.join(RAW_DIR, "provider_*.txt")))
    groups = {}
    for path in files:
        base = os.path.basename(path)
        m = re.match(r"provider_(\d+)_([a-zA-Z0-9]+)(?:_part(\d+))?\.txt", base)
        if not m:
            print(f"WARNING: unrecognized filename {base}, skipping")
            continue
        provider_id, name = m.group(1), m.group(2)
        key = f"{provider_id}_{name}"
        groups.setdefault(key, []).append(path)
    return groups


def main():
    groups = group_files()
    rows_by_key = {}  # (date, scheme_code) -> row
    total_parsed = 0
    per_provider_counts = {}

    for key, paths in sorted(groups.items()):
        provider_rows = 0
        for path in sorted(paths):
            with open(path, encoding="utf-8") as f:
                text = f.read()
            parsed = parse_provider_history_dump(text)
            for r in parsed:
                if not r["date"]:
                    continue
                dedupe_key = (r["date"], r["scheme_code"])
                rows_by_key[dedupe_key] = {
                    "date": r["date"],
                    "scheme_code": r["scheme_code"],
                    "scheme_name": r["scheme_name"],
                    "provider": r["provider"],
                    "category": r["category"],
                    "plan": r["plan"],
                    "option": r["option"],
                    "nav": r["nav"],
                    "isin_growth": r["isin_growth"] or "",
                    "isin_reinvest": r["isin_reinvest"] or "",
                }
            provider_rows += len(parsed)
        per_provider_counts[key] = provider_rows
        total_parsed += provider_rows

    print(f"Parsed {total_parsed} raw rows across {len(groups)} providers")
    for key, count in sorted(per_provider_counts.items()):
        print(f"  {key}: {count} rows")

    final_rows = sorted(
        rows_by_key.values(),
        key=lambda r: (r["scheme_code"], r["date"]),
    )

    with open(HISTORY_PATH, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
        writer.writeheader()
        writer.writerows(final_rows)

    dates = sorted(set(r["date"] for r in final_rows))
    schemes = sorted(set(r["scheme_code"] for r in final_rows))
    providers = sorted(set(r["provider"] for r in final_rows))
    print(f"\nWrote {len(final_rows)} rows to {HISTORY_PATH}")
    print(f"{len(schemes)} distinct schemes, {len(providers)} providers, "
          f"{len(dates)} distinct dates ({dates[0]} to {dates[-1]})")


if __name__ == "__main__":
    main()
