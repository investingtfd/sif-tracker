"""
Monthly fund-facts fetch for Altiva SIF (Edelweiss Mutual Fund).

Edelweiss publishes one monthly portfolio workbook covering every Altiva
strategy (one sheet per fund) on:
    https://www.edelweissmf.com/altivasif/statutory/portfolio-of-schemes
The file name carries an upload timestamp, and the page builds its file list
from an encrypted feed, so the link can't be derived or scraped with a plain
HTTP request. This script therefore opens the page in headless Chromium
(Playwright), steps the Year/Month dropdowns back from the newest month until
it finds a workbook, downloads it and parses it with openpyxl.

Writes/merges site/facts.json, keyed by the tracker's scheme_code (SIF-xx),
Regular Plan only. Funds that fail a sanity check are left untouched, so last
month's figures stay in place. Never raises: the workflow step is also
continue-on-error.
"""
import datetime as dt
import io
import json
import os
import re
import sys

HERE = os.path.dirname(__file__)
OUT_PATH = os.path.join(HERE, "..", "site", "facts.json")
DATA_PATH = os.path.join(HERE, "..", "site", "data.json")
PAGE = "https://www.edelweissmf.com/altivasif/statutory/portfolio-of-schemes"
PROVIDER = "Altiva SIF"
LINK_RE = r"/Files/SIF/Statutory/Portfolio[^\"']*\.xlsx?$"

# Sub-section label -> short label shown on the tracker. First match wins.
ALLOC_LABELS = [
    (r"real estate", "REITs"),
    (r"infrastructure investment", "InvITs"),
    (r"future", "Futures"),
    (r"option", "Options"),
    (r"commodity deriv", "Commodity derivatives"),
    (r"treasury", "Treasury bills"),
    (r"certificate of deposit", "Certificates of deposit"),
    (r"commercial paper", "Commercial paper"),
    (r"bill rediscount", "Bills rediscounted"),
    (r"government", "Government securities"),
    (r"securitised", "Securitised debt"),
    (r"gold", "Gold"),
    (r"silver", "Silver"),
    (r"mutual fund", "Mutual fund units"),
    (r"treps|reverse repo", "TREPS"),
]
SECTION_LABELS = [
    (r"^equity", "Equity"),
    (r"^foreign", "Overseas"),
    (r"^derivatives", "Derivatives"),
    (r"^debt", "Bonds"),
    (r"^money market", "Money market"),
    (r"^commod", "Commodities"),
    (r"^others", "Others"),
    (r"^treps", "TREPS"),
]


def norm(name):
    """'Altiva Equity Ex- Top 100 Long - Short Fund - Regular...' -> 'altivaequityextop100longshort'"""
    n = re.split(r"\bfund\b", name, flags=re.I)[0]
    return re.sub(r"[^a-z0-9]", "", n.lower())


def num(v):
    if isinstance(v, (int, float)):
        return float(v)
    if isinstance(v, str):
        try:
            return float(v.replace(",", "").strip())
        except ValueError:
            return None
    return None


def label_for(section, sub):
    s = (sub or "").lower()
    for pat, lab in ALLOC_LABELS:
        if re.search(pat, s) or (not sub and re.search(pat, (section or "").lower())):
            return lab
    sec = (section or "").lower()
    for pat, lab in SECTION_LABELS:
        if re.search(pat, sec):
            if lab == "Equity" and "unlisted" in s:
                return "Unlisted equity"
            if lab == "Bonds" and ("privately" in s or "unlisted" in s):
                return "Unlisted bonds"
            return lab
    return (sub or section or "Other").strip()


def parse_sheet(ws):
    rows = [[c for c in r] for r in ws.iter_rows(values_only=True)]
    text = lambda r: [str(c).strip() for c in r if c is not None and str(c).strip() != ""]
    title = next((t[0] for t in map(text, rows) if t and "PORTFOLIO STATEMENT" in t[0].upper()), "")
    m = re.search(r"PORTFOLIO STATEMENT OF (.+?) AS ON (.+)$", title, flags=re.I)
    if not m:
        return None
    name, as_of_raw = m.group(1).strip(), m.group(2).strip()
    as_of = None
    for fmt in ("%B %d, %Y", "%d %B %Y", "%d-%b-%Y", "%d/%m/%Y", "%B %d,%Y"):
        try:
            as_of = dt.datetime.strptime(as_of_raw.replace("  ", " "), fmt).date().isoformat()
            break
        except ValueError:
            pass

    # column positions from the header row
    hdr_i = next((i for i, r in enumerate(rows) if any(isinstance(c, str) and "name of the instrument" in c.lower() for c in r)), None)
    if hdr_i is None:
        return None
    hdr = [str(c).lower() if c is not None else "" for c in rows[hdr_i]]
    col = lambda key: next((i for i, h in enumerate(hdr) if key in h), None)
    c_name, c_isin, c_ind, c_val, c_pct = col("name of the instrument"), col("isin"), col("rating"), col("market"), col("% to net")
    if None in (c_name, c_val, c_pct):
        return None

    out = {"name": name.title().replace("Altiva", "Altiva"), "as_of": as_of or as_of_raw, "allocation": [], "top_equity": [], "top_debt": [], "top_shorts": []}
    section = sub = None
    holdings = []  # (section, sub, name, industry, pct)
    end_i = len(rows)
    for i in range(hdr_i + 1, len(rows)):
        r = rows[i]
        first = str(r[c_name]).strip() if r[c_name] is not None else ""
        if not first:
            continue
        low = first.lower()
        pct, val = num(r[c_pct]), num(r[c_val])
        if low.startswith("grand total"):
            out["net_assets_cr"] = round(val / 100.0, 2) if val else None
            out["_total_pct"] = pct
            end_i = i
            break
        if low.startswith("sub total"):
            if pct:
                out["allocation"].append([label_for(section, sub), round(pct * 100, 2)])
            continue
        if low == "total":
            sub = None
            continue
        if low.startswith("accrued interest") or low.startswith("net receivable") or low.startswith("cash"):
            if pct:
                out["allocation"].append(["Cash and other", round(pct * 100, 2)])
            continue
        if pct is None and val is None:
            # a header line: top-level section or a sub-section
            if re.match(r"^\(?[a-z]\)", low) or low in ("treasury bills", "certificate of deposit", "commercial paper", "bill rediscounting", "government securities", "investment in mutual fund", "international  mutual fund units", "international mutual fund units"):
                sub = first
            else:
                section, sub = first, None
            continue
        if pct is not None:
            ind = str(r[c_ind]).strip() if c_ind is not None and r[c_ind] is not None else ""
            holdings.append((section or "", sub or "", first, ind, pct))

    # merge duplicate allocation labels
    merged = {}
    for lab, p in out["allocation"]:
        merged[lab] = round(merged.get(lab, 0) + p, 2)
    out["allocation"] = sorted(([k, v] for k, v in merged.items() if abs(v) >= 0.01), key=lambda x: -x[1])

    is_eq = lambda h: h[0].lower().startswith("equity") and "real estate" not in h[1].lower()
    is_debt = lambda h: h[0].lower().startswith(("debt", "money market"))
    is_fut = lambda h: h[0].lower().startswith("derivatives") and "future" in h[1].lower()
    top = lambda hs, n, rev=True: [[h[2], h[3], round(h[4] * 100, 2)] for h in sorted(hs, key=lambda h: h[4], reverse=rev)[:n]]
    out["top_equity"] = top([h for h in holdings if is_eq(h)], 10)
    out["top_debt"] = top([h for h in holdings if is_debt(h)], 5)
    out["top_shorts"] = top([h for h in holdings if is_fut(h) and h[4] < 0], 5, rev=False)
    eq = sum(h[4] for h in holdings if is_eq(h))
    der = sum(h[4] for h in holdings if h[0].lower().startswith("derivatives"))
    out["equity_gross_pct"] = round(eq * 100, 2)
    out["equity_net_pct"] = round((eq + der) * 100, 2)
    out["holdings_count"] = len(holdings)

    # notes block after the grand total
    dates, prev_risk_hdr = [], False
    for i in range(end_i, len(rows)):
        for c in rows[i]:
            if isinstance(c, (dt.datetime, dt.date)):
                dates.append(c.date() if isinstance(c, dt.datetime) else c)
            elif isinstance(c, (int, float)) and 40000 < c < 60000 and float(c).is_integer():
                dates.append(dt.date(1899, 12, 30) + dt.timedelta(days=int(c)))
        t = text(rows[i])
        if not t:
            continue
        if prev_risk_hdr and not re.search(r"risk band level", " ".join(t).lower()):
            out["benchmark"] = t[-1]
        prev_risk_hdr = "risk-band" in " ".join(t).lower().replace(" ", "") or "riskband" in " ".join(t).lower().replace(" ", "").replace("-", "") and "level" not in " ".join(t).lower()
        j = " | ".join(t)
        low = j.lower()
        if low.startswith("regular plan - growth"):
            nums = [num(x) for x in t[1:] if num(x) is not None]
            if nums and "nav_regular_growth" not in out:
                out["nav_regular_growth"] = round(nums[-1], 4)
        elif "portfolio turnover" in low:
            nums = [num(x) for x in t[1:] if num(x) is not None]
            if nums:
                out["turnover_ratio"] = round(nums[-1], 2)
        elif "total gross exposure to derivative" in low:
            nums = [num(x) for x in t[1:] if num(x) is not None]
            if nums:
                out["derivative_gross_exposure_cr"] = round(nums[-1] / 100.0, 2)
        elif re.search(r"risk band level\s*\d", low):
            lv = re.findall(r"risk band level\s*(\d)", low)
            if lv and "risk_band" not in out:
                out["risk_band"] = int(lv[0])  # first cell = the scheme, second = its benchmark
                if len(lv) > 1:
                    out["benchmark_risk_band"] = int(lv[1])
    if not as_of and dates:
        out["as_of"] = max(dates).isoformat()
    return out


def sane(f):
    tp = f.pop("_total_pct", None)
    return bool(
        f.get("net_assets_cr") and f["net_assets_cr"] > 0
        and f.get("risk_band") in (1, 2, 3, 4, 5)
        and tp is not None and 0.95 <= tp <= 1.05
        and f.get("holdings_count", 0) >= 5
    )


def find_workbooks():
    """Returns (list of (url, bytes), label) for the newest month that has files."""
    from playwright.sync_api import sync_playwright

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(user_agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36")
        page.goto(PAGE, wait_until="domcontentloaded", timeout=90000)
        page.wait_for_function("document.querySelectorAll('mat-select').length >= 3", timeout=90000)
        page.wait_for_timeout(3000)

        def links():
            return page.evaluate("(re) => [...new Set([...document.querySelectorAll('a[href]')].map(a => a.href).filter(h => new RegExp(re, 'i').test(h)))]", LINK_RE)

        def options(idx):
            page.locator("mat-select").nth(idx).click()
            page.wait_for_selector("mat-option", timeout=15000)
            page.wait_for_timeout(400)
            return page.locator("mat-option")

        def pick(idx, i):
            opts = options(idx)
            label = opts.nth(i).inner_text().strip()
            opts.nth(i).click()
            page.wait_for_timeout(2500)
            return label

        opts = options(1)
        years = [o.strip() for o in opts.all_inner_texts()]
        page.keyboard.press("Escape")
        page.wait_for_timeout(300)
        year_order = sorted(range(len(years)), key=lambda i: years[i], reverse=True)
        for yi in year_order:
            pick(1, yi)
            opts = options(2)
            n = opts.count()
            page.keyboard.press("Escape")
            page.wait_for_timeout(300)
            for mi in range(n - 1, -1, -1):
                month = pick(2, mi)
                found = links()
                if found:
                    files = []
                    for u in found:
                        resp = page.request.get(u, timeout=90000)
                        if resp.ok:
                            files.append((u, resp.body()))
                    browser.close()
                    return files, f"{month} {years[yi]}"
        browser.close()
    return [], ""


def main():
    try:
        import openpyxl

        files, label = find_workbooks()
        if not files:
            print("Altiva: no workbook found, leaving facts.json untouched")
            return
        codes = {}
        with open(DATA_PATH, encoding="utf-8") as fh:
            for s in json.load(fh).get("schemes", []):
                if s.get("provider") == PROVIDER and s.get("plan") == "Regular":
                    codes[norm(s["scheme_name"])] = s["scheme_code"]
        try:
            with open(OUT_PATH, encoding="utf-8") as fh:
                facts = json.load(fh)
        except (OSError, ValueError):
            facts = {"funds": {}}
        facts.setdefault("funds", {})
        updated = 0
        for url, body in files:
            wb = openpyxl.load_workbook(io.BytesIO(body), data_only=True, read_only=True)
            for ws in wb.worksheets:
                f = parse_sheet(ws)
                if not f:
                    continue
                code = codes.get(norm(f["name"]))
                if not code:
                    print(f"Altiva: no tracker scheme matches '{f['name']}', skipped")
                    continue
                if not sane(f):
                    print(f"Altiva: {f['name']} failed the sanity check, keeping previous values")
                    continue
                f["source_url"] = url
                f["source"] = "Edelweiss Mutual Fund monthly portfolio disclosure"
                facts["funds"][code] = f
                updated += 1
                print(f"Altiva: {code} {f['name']} as of {f['as_of']} - band {f['risk_band']}, net assets Rs {f['net_assets_cr']} cr")
        if updated:
            facts["updated_at"] = dt.datetime.utcnow().isoformat() + "Z"
            with open(OUT_PATH, "w", encoding="utf-8") as fh:
                json.dump(facts, fh, ensure_ascii=False, indent=1)
            print(f"Altiva: wrote {updated} fund(s) from {label}")
    except Exception as e:  # never break the workflow
        print(f"Altiva fetch failed: {e!r}", file=sys.stderr)


if __name__ == "__main__":
    main()
