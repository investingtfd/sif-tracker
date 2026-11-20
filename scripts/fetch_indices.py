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
    "nifty100": ("NIFTY 100", "Top 100 large-cap index", ["^CNX100"]),
    "nifty500": ("NIFTY 500", "Broad market index", ["^CRSLDX"]),
    "midsmall400": ("NIFTY MidSmallcap 400", "Mid & small-cap index", ["NIFTYMIDSML400.NS"]),
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


NSE_NAMES = {"midsmall400": "NIFTY MIDSMALLCAP 400"}  # key -> niftyindices.com index name
NSE_HOME = "https://www.niftyindices.com/reports/historical-data"
NSE_URL = "https://www.niftyindices.com/BackPage/getHistoricaldatatabletoString"
MONTHS = {m: i + 1 for i, m in enumerate("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split())}


def fetch_nse(index_name: str, days: int = 740):
    """Official NSE index history (niftyindices.com). Used for indices Yahoo lacks history for."""
    import http.cookiejar
    jar = http.cookiejar.CookieJar()
    op = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))
    hdr = {"User-Agent": "Mozilla/5.0"}
    op.open(urllib.request.Request(NSE_HOME, headers=hdr), timeout=30).read()
    series, end = {}, datetime.now(IST).date()
    stop = end - timedelta(days=days)
    while end > stop:
        start = end - timedelta(days=180)
        f = lambda d: d.strftime("%d-%b-%Y")
        body = json.dumps({"cinfo": json.dumps({"name": index_name, "startDate": f(start),
                                                "endDate": f(end), "indexName": index_name})}).encode()
        req = urllib.request.Request(NSE_URL, data=body, method="POST", headers={
            **hdr, "Content-Type": "application/json; charset=UTF-8",
            "X-Requested-With": "XMLHttpRequest", "Referer": NSE_HOME})
        raw = op.open(req, timeout=60).read().decode("utf-8")
        rows = json.loads(raw)
        if isinstance(rows, str):
            rows = json.loads(rows)
        for r in rows:
            dd, mm, yy = r["HistoricalDate"].split()
            series[f"{yy}-{MONTHS[mm]:02d}-{int(dd):02d}"] = round(float(r["CLOSE"]), 2)
        end = start - timedelta(days=1)
    return sorted(series.items())


SEED_DIR = os.path.join(os.path.dirname(__file__), "..", "data")


def previous():
    try:
        with open(OUT_PATH, encoding="utf-8") as f:
            prev = json.load(f).get("indices", {})
    except Exception:  # noqa: BLE001
        prev = {}
    # One-off seed history (NSE) for indices whose Yahoo ticker has no history.
    for key in NSE_NAMES:
        seed = os.path.join(SEED_DIR, f"{key}_seed.json")
        if key not in prev and os.path.exists(seed):
            name, sub, _ = INDICES[key]
            with open(seed, encoding="utf-8") as f:
                prev[key] = {"name": name, "sub": sub, "symbol": "NSE:" + NSE_NAMES[key], "series": json.load(f)}
    return prev


def run():
    out = {}
    prev = previous()
    for key, nse_name in NSE_NAMES.items():
        try:
            series = fetch_nse(nse_name)
            if len(series) > 20:
                name, sub, symbols = INDICES[key]
                out[key] = {"name": name, "sub": sub, "symbol": "NSE:" + nse_name, "series": series}
                print(f"{name}: {len(series)} points from NSE, latest {series[-1]}")
        except Exception as e:  # noqa: BLE001
            print(f"{key} via NSE failed: {e}")
    for key, (name, sub, symbols) in INDICES.items():
        if key in out:
            continue
        for sym in symbols:
            try:
                series = fetch_symbol(sym)
                if len(series) > 20 or (key in NSE_NAMES and series):
                    out[key] = {"name": name, "sub": sub, "symbol": sym, "series": series}
                    print(f"{name}: {len(series)} points, latest {series[-1]}")
                    break
            except Exception as e:  # noqa: BLE001 - best effort
                print(f"{name} via {sym} failed: {e}")
    # Yahoo only has a single day for the MidSmallcap 400 ticker: if NSE failed, extend the
    # previous series with Yahoo's latest point instead of replacing it with a 1-point series.
    for key, v in list(out.items()):
        if len(v["series"]) < 20 and key in prev:
            merged = dict(map(tuple, prev[key]["series"])); merged.update(dict(map(tuple, v["series"])))
            v = dict(prev[key]); v["series"] = sorted(merged.items()); out[key] = v
    for key, v in prev.items():
        out.setdefault(key, v)  # never drop an index because one source failed
    if not out:
        raise SystemExit("No index data fetched; keeping the previous indices.json")
    payload = {"generated_at": datetime.now(IST).isoformat(timespec="minutes"), "indices": out}
    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump(payload, f, separators=(",", ":"))


if __name__ == "__main__":
    run()
