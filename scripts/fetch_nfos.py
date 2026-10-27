#!/usr/bin/env python3
"""Build site/nfos.json: the open and upcoming SIF launches shown on the tracker.

Sources, in order:
  1. SIFPrime NFO page (https://sifprime.com/nfos) - anything listed there is listed here.
  2. data/nfos_manual.json - launches added by hand (e.g. announced on an AMC's own site
     before SIFPrime lists them). Edit that file on GitHub to add or remove one.
  3. AMFI's new fund offer page - used only to mark whether the fund name is listed there.

Safe to re-run. If SIFPrime cannot be read or its layout changed, the previous list is kept.
Launches are dropped automatically after their close date.
"""
import json, re, sys, datetime, html, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "site" / "nfos.json"
PENDING = ROOT / "site" / "pending.json"
DATA = ROOT / "site" / "data.json"
MANUAL = ROOT / "data" / "nfos_manual.json"
UA = {"User-Agent": "Mozilla/5.0 (compatible; sif-tracker-bot; +https://investingtfd.com/sif-tracker)"}
MONTHS = {m: i for i, m in enumerate(
    ["January", "February", "March", "April", "May", "June", "July", "August",
     "September", "October", "November", "December"], 1)}


def get(url):
    req = urllib.request.Request(url, headers=UA)
    return urllib.request.urlopen(req, timeout=40).read().decode("utf-8", "replace")


def to_text(page):
    page = re.sub(r"<script[\s\S]*?</script>", "", page)
    page = page.replace("<!-- -->", "")
    page = re.sub(r"<[^>]+>", "|", page)
    page = html.unescape(page)
    return re.sub(r"\|+", "|", page)


def iso(month, day, year):
    return "%04d-%02d-%02d" % (int(year), MONTHS[month], int(day))


def parse_range(s):
    """'October 14 to October 28, 2026' -> ('2026-10-14', '2026-10-28')"""
    m = re.search(r"([A-Z][a-z]+) (\d{1,2})(?:, (\d{4}))? to ([A-Z][a-z]+) (\d{1,2}), (\d{4})", s)
    if not m or m.group(1) not in MONTHS or m.group(4) not in MONTHS:
        return None, None
    cy = int(m.group(6))
    oy = int(m.group(3)) if m.group(3) else (cy if MONTHS[m.group(1)] <= MONTHS[m.group(4)] else cy - 1)
    return iso(m.group(1), m.group(2), oy), iso(m.group(4), m.group(5), cy)


def from_sifprime():
    text = to_text(get("https://sifprime.com/nfos"))
    out = []
    pat = r"\|(NFO [A-Za-z ]+?)\|([A-Za-z ]*[Ww]indow)\|([^|]+)\|([^|]+)\|([^|]*)\|([^|]*)\|"
    for m in re.finditer(pat, text):
        name, amc, desc, dates = m.group(3).strip(), m.group(4).strip(), m.group(5).strip(), m.group(6)
        op, cl = parse_range(dates)
        out.append({"name": name, "amc": amc, "strategy": "", "open": op, "close": cl,
                    "sources": ["SIFPrime"], "note": ""})
    return out


def amfi_names():
    try:
        return to_text(get("https://www.amfiindia.com/sif/new-fund-offer")).lower()
    except Exception as e:
        print("AMFI page not readable:", e)
        return None


def key(name):
    w = [x for x in re.sub(r"[^a-z0-9 ]", " ", name.lower()).split()
         if x not in ("fund", "sif", "long", "short", "longshort", "hybrid", "equity")]
    return w[0] if w else name.lower()


STOP = {"fund", "sif", "long", "short", "longshort", "plan", "growth", "regular", "direct", "option",
        "mutual", "the", "and", "of", "ex", "top", "100", "-"}


def toks(text):
    return [w for w in re.sub(r"[^a-z0-9 ]", " ", (text or "").lower()).split() if w not in STOP]


def nav_started(it, schemes):
    """True only when ONE scheme in the AMFI-based data.json carries every distinctive word of the fund name.
    (Matching words across all schemes together gave false positives, e.g. Summit Active Asset Allocator
    matched 'summit' from Summit Equity and 'active asset allocator' from Titanium.)"""
    t = toks(it["name"])
    if not t:
        return False
    return any(all(w in sc for w in t) for sc in schemes)


def main():
    today = datetime.date.today().isoformat()
    prev = {}
    if OUT.exists():
        try:
            prev = json.loads(OUT.read_text())
        except Exception:
            prev = {}
    items, ok = [], True
    try:
        items = from_sifprime()
        if not items:
            print("SIFPrime page read but no NFO cards matched; keeping previous list for those.")
            ok = False
    except Exception as e:
        print("SIFPrime not readable:", e)
        ok = False
    if not ok:  # keep what we had from SIFPrime-sourced entries
        items = [i for i in prev.get("items", []) if "SIFPrime" in i.get("sources", [])]
    manual = []
    if MANUAL.exists():
        manual = json.loads(MANUAL.read_text()).get("items", [])
    merged = {}
    for it in items + manual:
        k = key(it["name"])
        if k in merged:
            m = merged[k]
            m["sources"] = sorted(set(m["sources"]) | set(it.get("sources", [])))
            for f in ("amc", "strategy", "open", "close", "note", "url"):
                if it.get(f) and not m.get(f):
                    m[f] = it[f]
        else:
            merged[k] = dict(it)
    amfi = amfi_names()
    first_seen = {key(i["name"]): i.get("first_seen") for i in prev.get("items", [])}
    final, closed = [], []
    for k, it in merged.items():
        if it.get("close") and it["close"] < today:
            closed.append(it)
            continue
        it["amfi"] = None if amfi is None else ((k + " sif") in amfi)
        it["first_seen"] = first_seen.get(k) or today
        final.append(it)
    final.sort(key=lambda i: (i.get("open") or "9999", i["name"]))
    # Closed launches whose fund has no NAV in the AMFI feed yet stay on the tracker as "awaiting first NAV".
    try:
        d = json.loads(DATA.read_text())
        data_text = [(x.get("scheme_name", "") + " " + x.get("provider", "")).lower() for x in d.get("schemes", [])]
    except Exception:
        data_text = None
    pend = []
    old_pend = {}
    if PENDING.exists():
        try:
            old_pend = {key(i["name"]): i for i in json.loads(PENDING.read_text()).get("items", [])}
        except Exception:
            old_pend = {}
    cutoff = (datetime.date.today() - datetime.timedelta(days=120)).isoformat()
    for it in closed + [v for k, v in old_pend.items() if k not in merged]:
        if data_text is None or it.get("close", "") < cutoff or nav_started(it, data_text):
            continue
        pend.append({"name": it["name"], "amc": it.get("amc", ""), "strategy": it.get("strategy", ""),
                     "open": it.get("open"), "close": it.get("close"), "sources": it.get("sources", []),
                     "status": "NFO closed, awaiting first NAV",
                     "first_seen": it.get("first_seen") or today})
    seen = set()
    pend = [p for p in sorted(pend, key=lambda p: p.get("close") or "") if not (key(p["name"]) in seen or seen.add(key(p["name"])))]
    PENDING.write_text(json.dumps({"checked_at": today, "items": pend}, indent=1, ensure_ascii=False) + "\n")
    print("pending.json:", len(pend), "funds awaiting first NAV")
    OUT.write_text(json.dumps({"checked_at": today, "items": final}, indent=1, ensure_ascii=False) + "\n")
    print("nfos.json:", len(final), "launches;", "SIFPrime ok" if ok else "SIFPrime kept from previous")
    return 0


if __name__ == "__main__":
    sys.exit(main())
