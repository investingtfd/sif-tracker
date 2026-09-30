"""
Daily benchmark index fetch (best-effort).

Pulls daily closing levels for a few Indian benchmark indices from Yahoo
Finance's public chart endpoint and writes site/indices.json, which the SIF
Tracker page uses for the benchmark rows in the monthly-returns heatmap and
the Compare tool. Any index that fails to download is simply skipped; if all
fail, the previous indices.json is left untouched so the site never breaks.
"""
import json
import os
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone

OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "site", "indices.json")
IST = timezone(timedelta(hours=5, minutes=30))

# key -> (display name, subtitle, Yahoo symbol candidates in order of preference)
INDICES = {
    "nifty50": ("NIFTY 50", "Large-cap index", ["^NSEI"]),
    "nifty500": ("NIFTY 500", "Broad market index", ["^CRSLDX"]),
    "midsmall400": ("NIFTY MidSmallcap 400", "Mid & small-cap index", ["NIFTY_MIDSML_400.NS", "^NIFMDSML400"]),
}


def fetch_symbol(symbol: str):
    url = ("https://query1.finance.yahoo.com/v8/finance/chart/"
           + urllib.parse.quote(symbol, safe="") + "?range=2y&interval=1d")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    result = data["chart"]["result"][0]
    stamps = result.get("timestamp") or []
    closes = result["indicators"]["quote"][0].get("close") or []
    series = {}
    for ts, c in zip(stamps, closes):
        if c is None:
            continue
        d = datetime.fromtimestamp(ts, IST).date().isoformat()
        series[d] = round(float(c), 2)
    return sorted(series.items())


def run():
    out = {}
    for key, (name, sub, symbols) in INDICES.items():
        for sym in symbols:
            try:
                series = fetch_symbol(sym)
                if len(series) > 20:
                    out[key] = {"name": name, "sub": sub, "symbol": sym, "series": series}
                    print(f"{name}: {len(series)} points, latest {series[-1]}")
                    break
            except Exception as e:  # noqa: BLE001 - best effort
                print(f"{name} via {sym} failed: {e}")
    if not out:
        raise SystemExit("No index data fetched; keeping the previous indices.json")
    payload = {"generated_at": datetime.now(IST).isoformat(timespec="minutes"), "indices": out}
    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump(payload, f, separators=(",", ":"))


if __name__ == "__main__":
    run()
