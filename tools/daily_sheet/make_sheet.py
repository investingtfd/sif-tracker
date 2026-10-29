"""Builds the one-page daily SIF sheet (PNG) and the X / LinkedIn captions from site/*.json.
Run from the repo root:  python3 tools/daily_sheet/make_sheet.py
Needs: playwright (chromium), and `npm install` inside tools/daily_sheet (fonts)."""
import asyncio, json, pathlib, datetime, re

ROOT = pathlib.Path(__file__).resolve().parents[2]
TOOL = ROOT / 'tools' / 'daily_sheet'
A = TOOL / 'assets'; OUT = ROOT / 'site' / 'daily'; OUT.mkdir(parents=True, exist_ok=True)
NM = TOOL / 'node_modules' / '@fontsource'; L = str(ROOT / 'site')
d = json.load(open(ROOT / 'site' / 'data.json')); F = json.load(open(ROOT / 'site' / 'facts.json'))['funds']

LOGO = {'SUMMIT SIF': 'logo-summit-sif.png', 'SUMMIT SIF': 'logo-summit-sif.png', 'Altiva SIF': 'logo-altiva-sif.svg', 'Magnum SIF': 'logo-magnum-sif.png', 'qsif SIF': 'logo-quant.png', 'iSIF SIF': 'logo-icici-prudential.png', 'Titanium SIF': 'logo-titanium-sif.webp', 'RedHex SIF': 'logo-hsbc.svg', 'Prism SIF': 'logo-jio-blackrock.svg', 'Platinum SIF': 'logo-platinum-sif.svg', 'Arudha SIF': 'logo-bandhan.png', 'Apex SIF': 'logo-apex-sif.jpg', 'Infinity SIF': 'logo-kotak.svg', 'Sapphire SIF': 'logo-sapphire-sif.png', 'Diviniti SIF': 'logo-iti.png', 'WSIF': 'logo-the-wealth-company.svg', 'DynaSIF SIF': 'logo-360-one.svg', 'Arthaya SIF': 'logo-union.png', 'Mahindra Manulife Mutual Fund': 'logo-mahindra-manulife.svg'}
BRAND = {'Altiva SIF': 'Altiva', 'Magnum SIF': 'Magnum', 'qsif SIF': 'qsif', 'iSIF SIF': 'iSIF', 'Titanium SIF': 'Titanium', 'RedHex SIF': 'RedHex', 'Prism SIF': 'Prism', 'Platinum SIF': 'Platinum', 'Arudha SIF': 'Arudha', 'Apex SIF': 'Apex', 'Infinity SIF': 'Infinity', 'Sapphire SIF': 'Sapphire', 'Diviniti SIF': 'Diviniti', 'WSIF': 'WSIF', 'DynaSIF SIF': 'DynaSIF', 'Arthaya SIF': 'Arthaya', 'SUMMIT SIF': 'Summit', 'Mahindra Manulife Mutual Fund': 'MSIF'}

def cat(c):
    c = c.lower()
    if 'asset allocator' in c: return 'Active Asset Allocator'
    if 'ex-top 100' in c: return 'Equity Ex-Top 100'
    if 'sector' in c: return 'Sector Rotation'
    if 'hybrid' in c: return 'Hybrid'
    return 'Equity'

def on_or_before(sr, date):
    v = [x for x in sr if x[0] <= date]; return v[-1] if v else None
def minus_months(dt, m):
    y, mo = dt.year, dt.month - m
    while mo <= 0: mo += 12; y -= 1
    import calendar
    return datetime.date(y, mo, min(dt.day, calendar.monthrange(y, mo)[1]))

rows = {}
asof = None
for s in d['schemes']:
    if s['plan'] != 'Regular' or 'growth' not in s['option'].lower(): continue
    sr = [(x['date'], x['nav']) for x in s['series']]
    last = datetime.date.fromisoformat(sr[-1][0]); asof = max(asof or last, last)
    ret = lambda ref: (sr[-1][1] / ref[1] - 1) * 100
    r = {}
    r['1D'] = ret(sr[-2]) if len(sr) > 1 else None
    for k, delta in (('1W', datetime.timedelta(days=7)),):
        ref = on_or_before(sr, (last - delta).isoformat()); r[k] = ret(ref) if ref else None
    for k, m in (('1M', 1), ('3M', 3), ('6M', 6)):
        ref = on_or_before(sr, minus_months(last, m).isoformat()); r[k] = ret(ref) if ref else None
    r['SI'] = ret(sr[0]) if len(sr) > 1 else None
    import math, statistics as _st
    if len(sr) >= 61:
        _r = [sr[i][1] / sr[i-1][1] - 1 for i in range(1, len(sr))]; _sd = _st.pstdev(_r) * math.sqrt(252)
        r['sharpe'] = (_st.mean(_r) * 252 - 0.065) / _sd if _sd > 0 else None; r['sd'] = _sd * 100
    else: r['sharpe'] = None; r['sd'] = None
    _p = on_or_before(sr, (last - datetime.timedelta(days=7)).isoformat()); _q = on_or_before(sr, (last - datetime.timedelta(days=14)).isoformat())
    r['prev1w'] = (_p[1] / _q[1] - 1) * 100 if (_p and _q and _p[0] != _q[0] and _q[0] <= (last - datetime.timedelta(days=12)).isoformat()) else None
    r['nav'] = sr[-1][1]; r['inc'] = datetime.date.fromisoformat(sr[0][0])
    r['last'] = last; r['days'] = (last - datetime.date.fromisoformat(sr[0][0])).days
    fa = F.get(s['scheme_code'], {})
    r['asof'] = fa.get('as_of'); r['aum'] = fa.get('net_assets_cr'); r['risk'] = fa.get('risk_band')
    r['ul'] = fa.get('unhedged_long'); r['us'] = fa.get('unhedged_short'); r['uc'] = fa.get('unhedged_count')
    if s['provider'] == 'Apex SIF' and (fa.get('as_of') or '') <= '2026-09-30': r['ul'] = r['us'] = r['uc'] = None  # held back until Apex's October portfolio is loaded
    nm = s['scheme_name']
    kind = cat(s['category'])
    short = {'Hybrid': 'Hybrid L/S', 'Equity': 'Equity L/S', 'Equity Ex-Top 100': 'Ex-Top 100 L/S', 'Active Asset Allocator': 'Asset Allocator', 'Sector Rotation': 'Sector Rotation'}[kind]
    r['name'] = f"{BRAND.get(s['provider'], s['provider'])} {short}"; r['prov'] = s['provider']; r['code'] = s['scheme_code']
    rows.setdefault(kind, []).append(r)
for k in rows: rows[k].sort(key=lambda r: -(r['aum'] or -1 if r['aum'] is not None else -1) if r['aum'] is not None else 1e9 * 0 + 1)
for k in rows: rows[k].sort(key=lambda r: (r['sharpe'] is None, -(r['sharpe'] if r['sharpe'] is not None else 0), -(r['1W'] if r['1W'] is not None else -99)))
allr = [r for v in rows.values() for r in v]
for r in allr:
    if r['last'] < asof: r['stale'] = True; r['1D'] = None
n1 = sum(1 for r in allr if r['1D'] is not None)
# ---- completeness gate: build only when EVERY fund has the latest NAV date, and only once per date ----
import sys, os
missing = sorted(r['name'] + ' (' + r['last'].isoformat() + ')' for r in allr if r['last'] < asof)
_prev = None
try: _prev = json.load(open(ROOT / 'site' / 'daily' / 'meta.json')).get('nav_date')
except Exception: pass
_ready = (not missing) and _prev != asof.isoformat()
_why = 'ready' if _ready else ('already built for ' + asof.isoformat() if not missing else 'waiting for NAVs: ' + '; '.join(missing))
print('GATE:', _why)
(ROOT / 'site' / 'daily').mkdir(parents=True, exist_ok=True)
json.dump({'nav_date': asof.isoformat(), 'funds': len(allr), 'missing': missing, 'checked_utc': datetime.datetime.now(datetime.timezone.utc).replace(tzinfo=None).isoformat(timespec='minutes') + 'Z'}, open(ROOT / 'site' / 'daily' / 'status.json', 'w'))
if os.environ.get('GITHUB_OUTPUT'): open(os.environ['GITHUB_OUTPUT'], 'a').write('ready=' + ('true' if _ready else 'false') + '\n')
if '--check' in sys.argv or not _ready: sys.exit(0)
from playwright.async_api import async_playwright
up = sum(1 for r in allr if (r['1D'] or 0) > 0); dn = sum(1 for r in allr if (r['1D'] or 0) < 0)
best = max((r for r in allr if r['1D'] is not None), key=lambda r: r['1D']); worst = min((r for r in allr if r['1D'] is not None), key=lambda r: r['1D'])
DATE = asof.strftime('%d %b %Y').lstrip('0')
print(DATE, {k: len(v) for k, v in rows.items()}, 'up', up, 'down', dn, best['name'], round(best['1D'], 2), worst['name'], round(worst['1D'], 2))

IX = json.load(open(ROOT / 'site' / 'indices.json'))['indices']
def ixrow(k):
    sr = [(a, b) for a, b in IX[k]['series']]; last = datetime.date.fromisoformat(sr[-1][0]); r = {}
    f = lambda ref: (sr[-1][1] / ref[1] - 1) * 100
    r['1D'] = f(sr[-2]); ref = on_or_before(sr, (last - datetime.timedelta(days=7)).isoformat()); r['1W'] = f(ref)
    for kk, m in (('1M', 1), ('3M', 3), ('6M', 6)): r[kk] = f(on_or_before(sr, minus_months(last, m).isoformat()))
    r['nav'] = sr[-1][1]; r['name'] = IX[k]['name']; r['d'] = last; return r
IXR = [ixrow('nifty50'), ixrow('nifty500')]

INK, PAPER, CARD, GRN, RED, MU, LINE = '#14221e', '#f6f2e8', '#ffffff', '#1f6f5c', '#b6452c', '#5a6a65', '#e4dcc6'
def tint(v, col):
    a = min(abs(v) / 4, 1) * .22 + .05
    return f"rgba({'31,111,92' if col == 'g' else '182,69,44'},{a:.2f})"
def pc(v, w, hi=False):
    if v is None: return f"<div class='c' style='width:{w}px;color:{MU}'>–</div>"
    z = round(v, 1) == 0
    col = MU if z else GRN if v > 0 else RED
    bg = 'transparent' if z else tint(v, 'g' if v > 0 else 'r')
    return f"<div class='c' style='width:{w}px;color:{col};background:{bg};font-weight:{'700' if hi else '600'}'>{'' if z else '+' if v > 0 else '−'}{abs(v):.1f}</div>"
def lgo(prov):
    f = LOGO.get(prov)
    if not f: return "<div style='width:52px'></div>"
    bg = '#1b3a78' if 'magnum' in f else '#fff'
    return f"<div style='width:44px;height:26px;margin-right:8px;border-radius:6px;border:1px solid {LINE};background:{bg};display:flex;align-items:center;justify-content:center;padding:2px 4px'><img src='file://{L}/{f}' style='max-height:20px;max-width:36px;object-fit:contain'></div>"
RB = {1: '#2e8a5a', 2: '#8aae3a', 3: '#d9a22b', 4: '#d9772b', 5: '#b6452c'}
def rd(r, rank):
    pass
def rk(v):
    if v is None: return f"<div class='c' style='width:44px;color:{MU}'>–</div>"
    return f"<div style='width:44px;display:flex;justify-content:center'><span style='background:{RB[v]};color:#fff;font:600 13px Geist Mono;border-radius:999px;padding:2px 9px'>L{v}</span></div>"
def un(r):
    if r['uc'] is None: return f"<div class='c' style='width:98px;color:{MU}'>–</div>"
    if (r['ul'] or 0) == 0 and (r['us'] or 0) == 0: return f"<div class='c' style='width:98px;color:{MU}'>none</div>"
    return f"<div class='c' style='width:98px;font-size:15px'><span style='color:{GRN}'>▲{r['ul'] or 0:.1f}</span> <span style='color:{RED}'>▼{r['us'] or 0:.1f}</span></div>"
def age(r):
    return r['inc'].strftime('%d %b %y').lstrip('0')
COLS = [('INCEPTION', 78), ('RISK', 44), ('NAV ₹', 66), ('1D', 56), ('1W', 60), ('1M', 56), ('3M', 56), ('6M', 56), ('SINCE START', 72), ('ANNUAL-ISED', 78), ('SD %', 56), ('UNHEDGED %', 98), ('PORTFOLIO', 76), ('AUM ₹CR', 68)]
HEAD = f"<div class='th'><div style='width:44px'>RANK</div><div style='width:52px'></div><div style='width:122px'>FUND</div>" + ''.join(f"<div class='hc' style='width:{w}px;{'color:#fff;background:'+GRN+';' if t=='1W' else ''}'>{t}</div>" for t, w in COLS) + "</div>"
TITLE = {'Equity Ex-Top 100': 'Equity Ex-Top 100 Long-Short', 'Equity': 'Equity Long-Short', 'Sector Rotation': 'Sector Rotation Long-Short', 'Hybrid': 'Hybrid Long-Short', 'Active Asset Allocator': 'Active Asset Allocator Long-Short'}
AMC = {'Altiva SIF': 'Edelweiss', 'Magnum SIF': 'SBI', 'qsif SIF': 'Quant', 'iSIF SIF': 'ICICI Pru', 'Titanium SIF': 'Tata', 'RedHex SIF': 'HSBC', 'Prism SIF': 'Jio BlackRock', 'Platinum SIF': 'Mirae Asset', 'Arudha SIF': 'Bandhan', 'Apex SIF': 'Aditya Birla SL', 'Infinity SIF': 'Kotak', 'Sapphire SIF': 'Franklin', 'Diviniti SIF': 'ITI', 'WSIF': 'Wealth Co.', 'DynaSIF SIF': '360 ONE', 'Arthaya SIF': 'Union', 'SUMMIT SIF': 'Invesco', 'Mahindra Manulife Mutual Fund': 'Mahindra Manulife'}

def rnk(r):
    n = r.get('rk')
    if not n: return f"<div class='c' style='width:44px;font-size:14px;color:#b9b2a0'>NR</div>"
    bg = {1: '#d4a72c', 2: '#9aa5a0', 3: '#b9774a'}.get(n, 'transparent'); fg = '#fff' if n <= 3 else INK
    return f"<div style='width:44px;display:flex;justify-content:center'><span style='width:28px;height:28px;border-radius:50%;background:{bg};color:{fg};font:700 15px Geist Mono;display:flex;align-items:center;justify-content:center'>{n}</span></div>"
def d1(r):
    if r.get('stale'): return f"<div class='c' style='width:56px;color:{MU}'>†</div>"
    return pc(r['1D'], 56)
STALE = [r for r in allr if r.get('stale')]
STALE_NOTE = (' † 1D not shown: ' + str(len(STALE)) + ' fund(s) had not published a ' + DATE + ' NAV yet, so their other columns use the previous NAV.') if STALE else ''
def pf(r):
    return datetime.date.fromisoformat(r['asof']).strftime('%d %b').lstrip('0') if r.get('asof') else '–'
def sdc(r):
    v = r.get('sd')
    if v is None: return f"<div class='c' style='width:56px;color:{MU};font-size:13px'>NR</div>"
    return f"<div class='c' style='width:56px'>{v:.1f}</div>"
def dl(r):
    v = r.get('sharpe')
    if v is None: return f"<div class='c' style='width:56px;color:{MU};font-size:13px'>NR</div>"
    return f"<div class='c' style='width:56px;color:{GRN if v > 0 else RED}'>{'' if v > 0 else '−'}{abs(v):.2f}</div>"
for kind, its in rows.items():
    k = 0
    for r in its:
        if r['sharpe'] is not None and len(its) > 1: k += 1; r['rk'] = k
body = ''
for kind in ['Equity Ex-Top 100', 'Equity', 'Sector Rotation', 'Hybrid', 'Active Asset Allocator']:
    its = rows.get(kind, [])
    body += f"<div class='gh'><span>{TITLE[kind]}</span><span class='gn'>{len(its)} fund{'s' if len(its)!=1 else ''}</span></div>"
    for r in its:
        brand = r['name'].rsplit(' ', 2)[0] if False else BRAND.get(r['prov'], r['prov'])
        body += f"<div class='row'>{rnk(r)}{lgo(r['prov'])}<div style='width:122px;line-height:1.1'><b>{brand}</b><div class='amc'>{AMC.get(r['prov'], '')}</div></div><div class='c' style='width:78px;color:{MU};font-size:13px'>{age(r)}</div>{rk(r['risk'])}<div class='c' style='width:66px'>{r['nav']:,.2f}</div>{d1(r)}{pc(r['1W'],60,True)}{pc(r['1M'],56)}{pc(r['3M'],56)}{pc(r['6M'],56)}{pc(r['SI'],72)}{pc(((1+r['SI']/100)**(365/r['days'])-1)*100 if (r['days']>=30 and r['SI'] is not None) else None,78)}{sdc(r)}{un(r)}<div class='c' style='width:76px;color:{MU};font-size:13px'>{pf(r)}</div><div class='c' style='width:68px'>{f"{r['aum']:,.0f}" if r['aum'] is not None else '–'}</div></div>"
body += f"<div class='gh' style='background:#3b4a46'><span>Benchmark indices (price index, to {IXR[0]['d'].strftime('%d %b').lstrip('0')})</span><span class='gn'>for reference</span></div>"
for x in IXR:
    body += f"<div class='row'><div style='width:44px'></div><div style='width:52px'></div><div style='width:122px'><b>{x['name']}</b></div><div class='c' style='width:78px;color:{MU}'>–</div><div style='width:44px'></div><div class='c' style='width:66px'>{x['nav']:,.0f}</div>{pc(x['1D'],56)}{pc(x['1W'],60,True)}{pc(x['1M'],56)}{pc(x['3M'],56)}{pc(x['6M'],56)}<div class='c' style='width:72px;color:{MU}'>–</div><div style='width:78px'></div><div style='width:56px'></div><div style='width:98px'></div><div style='width:76px'></div><div style='width:68px'></div></div>"

srt = sorted([r for r in allr if r['1D'] is not None], key=lambda r: -r['1D'])
def chip(r, g):
    c = GRN if r['1D'] > 0.005 else RED if r['1D'] < -0.005 else MU
    return f"<span style='display:inline-flex;gap:8px;align-items:center;background:#fff;border:1px solid {LINE};border-left:5px solid {c};border-radius:8px;padding:6px 12px;font-size:17px'><b>{r['name'].rsplit(' ',2)[0] if False else BRAND.get(r['prov'], r['prov'])} {r['name'].split(' ',1)[1].replace(' L/S','')}</b><span style='font:600 17px Geist Mono;color:{c}'>{'+' if r['1D']>0 else '−'}{abs(r['1D']):.2f}%</span></span>"
STRIP = f"<div style='margin-top:14px;display:flex;gap:10px;align-items:center'><span style='width:120px;font:600 13px Geist Mono;letter-spacing:.1em;color:{GRN}'>TOP 3 TODAY</span>{''.join(chip(r, True) for r in srt[:3])}</div><div style='margin-top:8px;display:flex;gap:10px;align-items:center'><span style='width:120px;font:600 13px Geist Mono;letter-spacing:.1em;color:{MU}'>WEAKEST 3</span>{''.join(chip(r, False) for r in srt[-3:])}</div>"
FONTS = open('/dev/null').read() + f"""
@font-face{{font-family:Fraunces;font-weight:900;src:url('file://{NM}/fraunces/files/fraunces-latin-900-normal.woff2')}}
@font-face{{font-family:Geist;font-weight:400;src:url('file://{NM}/geist/files/geist-latin-400-normal.woff2')}}
@font-face{{font-family:Geist;font-weight:500;src:url('file://{NM}/geist/files/geist-latin-500-normal.woff2')}}
@font-face{{font-family:Geist;font-weight:600;src:url('file://{NM}/geist/files/geist-latin-600-normal.woff2')}}
@font-face{{font-family:Geist;font-weight:700;src:url('file://{NM}/geist/files/geist-latin-700-normal.woff2')}}
@font-face{{font-family:'Geist Mono';font-weight:500;src:url('file://{NM}/geist-mono/files/geist-mono-latin-500-normal.woff2')}}
@font-face{{font-family:'Geist Mono';font-weight:600;src:url('file://{NM}/geist-mono/files/geist-mono-latin-600-normal.woff2')}}
*{{box-sizing:border-box;margin:0;padding:0}}
body{{width:1200px;background:{PAPER};color:{INK};font-family:Geist,'Noto Color Emoji',sans-serif;padding:34px 28px 28px}}
.th{{display:flex;align-items:center;height:34px;font:600 12px 'Geist Mono';letter-spacing:.07em;color:{MU};border-bottom:2px solid {INK}}}
.hc{{text-align:center;height:34px;display:flex;align-items:center;justify-content:center}}
.gh{{display:flex;justify-content:space-between;align-items:center;height:34px;padding:0 12px;margin-top:8px;background:{GRN};color:#fff;font:700 17px Geist;border-radius:6px}}
.gn{{font:600 13px 'Geist Mono';background:rgba(255,255,255,.18);padding:2px 10px;border-radius:999px}}
.row{{display:flex;align-items:center;height:36px;border-bottom:1px solid {LINE}}}
.row b{{font-size:18px;font-weight:700}} .amc{{font-size:12.5px;color:{MU};margin-top:1px}}
.c{{text-align:center;font:600 16px 'Geist Mono';height:36px;display:flex;align-items:center;justify-content:center}}
"""
html = f"""<html><head><meta charset='utf-8'><style>{FONTS}</style></head><body>
<div style='display:flex;justify-content:space-between;align-items:flex-end'>
<div><div style='font:600 15px "Geist Mono";letter-spacing:.14em;color:{GRN}'>SIF TRACKER · DAILY SHEET</div>
<div style='font:900 60px/1.02 Fraunces;letter-spacing:-.015em;margin-top:6px'>Every SIF, one page</div>
<div style='font-size:19px;color:{MU};margin-top:8px'>{len(allr)} Specialised Investment Funds · Regular plan, Growth · ranked by Sharpe ratio within each strategy (higher = more return per unit of risk) · returns in %</div></div>
<div style='text-align:right'><div style='font:500 14px "Geist Mono";color:{MU};letter-spacing:.1em'>NAV AS ON</div><div style='font:900 40px Fraunces'>{DATE}</div>
<div style='margin-top:8px;font:600 17px "Geist Mono";background:{GRN};color:#fff;padding:8px 16px;border-radius:999px;display:inline-block'>{up} of {n1} up today</div></div></div>
<div style='margin-top:12px;font-size:15px;color:{MU}'><span style='color:{GRN};font-weight:700'>+ gain</span> / <span style='color:{RED};font-weight:700'>− loss</span> · "–" fund too new for the period · Risk L1 (lowest) to L5 · Unhedged: <span style='color:{GRN}'>▲ long</span> <span style='color:{RED}'>▼ short</span> derivatives with no matching stock, % of fund</div>
{STRIP}<div style='margin-top:14px;background:{CARD};border:1px solid {LINE};border-radius:12px;padding:10px 14px 14px'>{HEAD}{body}</div>
<div style='margin-top:14px;display:flex;justify-content:space-between;align-items:center;background:{GRN};color:#fff;border-radius:12px;padding:14px 20px'>
<div style='font:600 22px Geist'>Fund pages, portfolios and charts for every SIF</div><div style='font:600 22px "Geist Mono"'>investingtfd.com/sif-tracker</div></div>
<div style='margin-top:16px;display:flex;align-items:center;justify-content:space-between'>
<div style='display:flex;align-items:center;gap:16px'><img src='file://{A}/avatar_sq.jpg' style='width:72px;height:72px;border-radius:50%;object-fit:cover;border:3px solid {GRN}'><div><div style='font-weight:700;font-size:24px'>Ashish Jain · ARN-294841</div><div style='font-size:17px;color:{MU}'>AMFI Registered MFD &amp; SIF Distributor · Delhi NCR · WhatsApp +351 932 196 874</div></div></div>
<img src='file://{A}/logo.png' style='height:52px'></div>
<div style='margin-top:14px;font-size:13px;line-height:1.4;color:{MU}'>Returns are NAV change (1D vs previous NAV; 1W 7 days; 1M, 3M, 6M calendar months). Since start is absolute return. Rank is by Sharpe ratio within each strategy (daily NAVs since the first NAV, 6.5% assumed risk-free rate); funds with fewer than 60 NAV days are not ranked (NR), and short histories can move sharply. SD is the annualised standard deviation of daily returns since the first NAV (how much the NAV moves up and down; lower is steadier), shown from 60 NAV days. Annualised is CAGR since the first NAV, shown from 30 days of history as on the SIF Tracker; for funds under a year it is a projection, not a lived year, and can swing a lot. Risk band and unhedged data are from each fund's latest portfolio disclosure (portfolio month shown). Indices are price indices, not total return; hybrid funds have their own benchmarks, so no index is drawn against them. Educational only, not investment advice. Specialised Investment Fund investments are subject to market risks. Read all scheme related documents carefully. Past performance may not be sustained. Source: AMFI NAVs, AMC portfolio disclosures, NSE.{STALE_NOTE}</div>
</body></html>"""

# ---------------- captions ----------------
REG = "Ashish Jain | ARN-294841"
LI_REG = "Ashish Jain | ARN-294841 | AMFI Registered Mutual Fund & SIF Distributor, Delhi NCR"
EDU = "Educational only, not advice."
LI_DISC = "Educational only, not investment advice. Mutual fund and SIF investments are subject to market risks. Read all scheme related documents carefully. Past performance may not be sustained."
LINK = "https://investingtfd.com/sif-tracker"
sg = lambda v: ('+' if v > 0 else '−' if v < 0 else '') + f"{abs(v):.1f}%"
headline = f"NAV as on {DATE}: {up} of {len(allr)} SIFs up on the day. Best: {best['name'].replace(' L/S', '')} {sg(best['1D'])}. Weakest: {worst['name'].replace(' L/S', '')} {sg(worst['1D'])}."
cap_x = f"""{REG}

SIF daily sheet, NAV as on {DATE}: {up} of {n1} up. Best {best['name'].replace(' L/S', '')} {sg(best['1D'])}, weakest {worst['name'].replace(' L/S', '')} {sg(worst['1D'])}.

Live tracker: {LINK}

{EDU}

#SIF #InvestingTFD"""
cap_li = f"""{LI_REG}

📊 SIF daily sheet. {headline}

▪️ 1D, 1W, 1M, 3M, 6M and since start
▪️ Risk-adjusted (Sharpe) rank and SD (volatility) within each strategy
▪️ Risk band and unhedged derivative flag
Full tracker with fund pages: {LINK}

{LI_DISC}

💬 Message us to talk through your portfolio.

#SIF #SpecialisedInvestmentFund #InvestingTFD"""
(OUT / 'caption_x.txt').write_text(cap_x); (OUT / 'caption_li.txt').write_text(cap_li)
json.dump({'nav_date': asof.isoformat(), 'up': up, 'n': n1, 'built_utc': datetime.datetime.now(datetime.timezone.utc).replace(tzinfo=None).isoformat(timespec='minutes') + 'Z', 'x_chars': len(cap_x)}, open(OUT / 'meta.json', 'w'))
async def main():
    async with async_playwright() as p:
        br = await p.chromium.launch(); pg = await br.new_page(viewport={'width': 1200, 'height': 1600}, device_scale_factor=1.5)
        f = OUT / '_sheet.html'; f.write_text(html); await pg.goto(f'file://{f}'); await pg.wait_for_timeout(900)
        await pg.screenshot(path=str(OUT / 'sheet.png'), full_page=True); await br.close(); f.unlink()
asyncio.run(main())
