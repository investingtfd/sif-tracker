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
from datetime import date, timedelta

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


def _nav_on_or_before(series_dates, target: date):
    """series_dates: list of (date, nav) sorted ascending. Returns the nav of
    the last entry on or before target, or None if target is before the
    first entry (i.e. not enough history for that lookback window yet)."""
    result = None
    for d, n in series_dates:
        if d <= target:
            result = n
        else:
            break
    return result


def _period_returns(series):
    """series: [{date: 'YYYY-MM-DD', nav: float}] sorted ascending.

    Standard fund-fact-sheet windows: 1M and 3M are point-to-point returns
    looking back ~30/91 calendar days from the latest NAV. Annualised is the
    CAGR since the first tracked date (the scheme's actual inception date,
    since we backfill since-inception history), extrapolated out to a yearly
    rate as soon as a scheme has at least 1 month of history (AJ's call,
    since SIFs are a new category and almost none have a full year of
    history yet) - note this means an early Annualised figure is a
    projection, not a lived year, and can swing a lot as more days land; it
    firms up as history accumulates. 1M/3M return None ('—' in the UI) until
    the tracked history actually reaches that window.
    """
    parsed = [(date.fromisoformat(p["date"]), p["nav"]) for p in series]
    last_date, last_nav = parsed[-1]
    first_date, first_nav = parsed[0]
    days_span = (last_date - first_date).days

    def pct(nav_then):
        if not nav_then:
            return None
        return round((last_nav / nav_then - 1) * 100, 2)

    ret_1m = pct(_nav_on_or_before(parsed, last_date - timedelta(days=30))) if days_span >= 30 else None
    ret_3m = pct(_nav_on_or_before(parsed, last_date - timedelta(days=91))) if days_span >= 91 else None
    if days_span >= 30 and first_nav:
        annualised = round((((last_nav / first_nav) ** (365.0 / days_span)) - 1) * 100, 2)
    else:
        annualised = None

    return {
        "return_1m_pct": ret_1m,
        "return_3m_pct": ret_3m,
        "return_annualised_pct": annualised,
    }


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
        s.update(_period_returns(s["series"]))

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
