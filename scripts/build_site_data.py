"""
Turns data/history.csv (long format: one row per scheme per date) into
site/data.json, shaped for the dashboard's JS to consume directly with no
processing at load time.

Run this after fetch_daily.py on every scheduled run (see the GitHub Actions
workflow) so the deployed site always ships pre-baked data.
"""
import csv
import json
import os
from collections import defaultdict

HISTORY_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "history.csv")
OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "site", "data.json")

# The dashboard shows Regular Plan / Growth option schemes only:
# - Regular Plan, because Investing TFD as an MFD only earns commission on
#   Regular Plan - Direct Plan is irrelevant to its clients.
# - Growth option only, per AJ's instruction - IDCW is excluded.
# Everything else stays in history.csv at no extra fetch cost, in case scope
# ever changes, but is filtered out here at the display layer.
DISPLAY_PLAN = "Regular"


def _is_growth(option: str) -> bool:
    return "growth" in (option or "").lower()


def build():
    with open(HISTORY_PATH, newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    rows = [r for r in rows if r["plan"] == DISPLAY_PLAN and _is_growth(r["option"])]

    schemes = {}
    for r in rows:
        code = r["scheme_code"]
        if code not in schemes:
            schemes[code] = {
                "scheme_code": code,
                "scheme_name": r["scheme_name"],
                "provider": r["provider"],
                "category": r["category"],
                "plan": r["plan"],
                "option": r["option"],
                "series": [],  # [{date, nav}], sorted ascending
            }
        schemes[code]["series"].append({"date": r["date"], "nav": float(r["nav"])})

    for s in schemes.values():
        s["series"].sort(key=lambda p: p["date"])
        first_nav = s["series"][0]["nav"]
        last_nav = s["series"][-1]["nav"]
        s["latest_date"] = s["series"][-1]["date"]
        s["latest_nav"] = last_nav
        s["change_since_first_pct"] = round((last_nav / first_nav - 1) * 100, 2) if first_nav else None
        if len(s["series"]) >= 2:
            prev_nav = s["series"][-2]["nav"]
            s["change_1d_pct"] = round((last_nav / prev_nav - 1) * 100, 2) if prev_nav else None
        else:
            s["change_1d_pct"] = None

    categories = sorted(set(s["category"] for s in schemes.values()))
    providers = sorted(set(s["provider"] for s in schemes.values()))
    all_dates = sorted(set(p["date"] for s in schemes.values() for p in s["series"]))

    payload = {
        "generated_at_data_date": all_dates[-1] if all_dates else None,
        "categories": categories,
        "providers": providers,
        "schemes": list(schemes.values()),
    }

    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2)

    print(f"Wrote {len(schemes)} schemes, {len(categories)} categories, "
          f"{len(providers)} providers, {len(all_dates)} date(s) -> {OUT_PATH}")


if __name__ == "__main__":
    build()
