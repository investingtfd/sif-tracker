# SIF Tracker daily run log

## 2026-11-13 16:30 Lisbon time (catch-up: WordPress page, Ashish authorised)
Result: tracker page edited (WordPress page 896) and facts.json committed.

**Updates found and made**

- WordPress SIF Tracker page: added "?" help text for Covered calls, Arbitrage, Cash and others, Others, Relative value trades and Debt profile; added a Debt profile block (credit-rating pie plus yield, modified duration and average maturity) to the Portfolio snapshot for any fund with credit_quality or debt_quants in facts.json. Edit made at Ashish's request on 13 Nov 2026; the previous page content is in the WordPress revision history.
- Infinity SIF-146: "Others" renamed "Cash and others".

**Updates available but not made, or only partly made**

None new.

## 2026-11-13 11:30 Lisbon time (catch-up: Infinity split follows the AMC's own printed buckets)
Result: 1 fund updated (Infinity SIF-146 split). facts.json committed.

**Updates found and made**

- Infinity SIF-146: split now shows the AMC's own allocation table as printed (Fixed income 45.25, Covered calls 23.22, Arbitrage 10.05, Others 8.59, Special situations 3.99, Other derivative strategies 3.65, REITs 2.85, InvITs 2.41; adds to 100.01). Replaces the earlier netted split (Fixed income 62.71, Arbitrage and covered calls 28.07) at Ashish's request; this overrides the Step 3f layout for SIF-146 only. Strategy overview buckets re-mapped to the same lines.

**Updates available but not made, or only partly made**

None new.

## 2026-11-13 11:05 Lisbon time (catch-up: Kotak October factsheet supplied by Ashish)
Result: 1 fund updated (Infinity SIF-146). facts.json committed.

**Updates found and made**

- Infinity SIF-146: key details, debt quality (YTM 7.40%, modified duration 1.07 yrs), rating mix, strategy overview ("How it works") and exposure card written from the October factsheet (31 Oct 2026, size Rs 3,841.14 cr). Top shorts replaced with the October arbitrage futures; turnover 194.14%; equity gross 37.26%, open equity 3.99%.

**Updates available but not made, or only partly made**

- SIF-146 stays factsheet_only: holdings count, sectors, allocation and unhedged card are still from the 30 Sep workbook (October Excel not out). The factsheet states no average exposure figures ("no factsheet exposure figures").
- top_debt (issuer list) is not in the factsheet; kept as it was.
- No returns: fund started 6 July 2026, none published.
- Split left unchanged: it already equals the AMC's classification after netting (arbitrage 10.05 + covered calls 23.22 - 5.20 short futures = 28.07; debt 45.25 + triparty and net current assets 17.46 = 62.71).

## 2026-11-13 10:15 Lisbon time (catch-up: key details)
Result: 1 fund updated (strategy overview). facts.json committed.

**Updates found and made**

- Altiva SIF-122: "How this fund works" written from the October fund note (objective, bottom-up mid/small-cap approach, short exposure limit 25%, market-cap and sector mix). The note publishes no named strategy buckets and no returns table, so two buckets only (equity, cash); returns still pending.

**Updates available but not made, or only partly made**

None new; see the 09:40 entry above.

## 2026-11-13 09:40 Lisbon time (full sweep of AMCs below target, plus key-details pass)
Result: 1 fund updated (key details only). facts.json committed.

**Updates found and made**

- RedHex SIF-128: key details, debt quality, strategy overview and exposure written from the October factsheet (data as on 31 Oct 2026, size Rs 1,780.56 cr).

**Updates available but not made, or only partly made**

- Platinum SIF-136: newest Mirae factsheet is still "October 2026" (30 Sep data); key details wait for the 31 Oct one.
- Summit SIF-150: newest Invesco factsheet is September; key details wait for October.
- Altiva SIF-122: already has key details from the October fund note; the note has no returns table or strategy buckets yet (fund launched 8 June 2026).
- RedHex SIF-128: credit-quality mix and top-10 returns not written (factsheet gives rating mix only as links; no returns yet, fund under 6 months). Factsheet InvITs 9.6% differs from the workbook's 14.08%: split left as the workbook has it.
- Arthaya SIF-114: browser pane refused unionmf.com.
- Kotak SIF-146: not re-opened this pass.
- About 20 other funds still have no key details; they follow at four per run, as each AMC's October factsheet appears.

### Data completeness
Up to date: 24 of 39 SIF funds (62%) have data as on 31 Oct 2026
of which 18 from the full Excel portfolio and 6 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| SIF-105, SIF-111 | WSIF | 30 Sep 2026 | AMC has not published yet (newest Excel 30 Sep) |
| SIF-29, SIF-102 | Titanium (Tata) | 30 Sep 2026 | AMC has not published yet (Excel and factsheet 30 Sep) |
| SIF-55, SIF-87, SIF-143 | DynaSIF (360 ONE) | 30 Sep 2026 | AMC has not published yet (Excel Sep, factsheet 30 Sep) |
| SIF-96 | Sapphire (Franklin) | 30 Sep 2026 | AMC has not published yet (Excel 30 Sep) |
| SIF-40 | Arudha | 30 Sep 2026 | AMC has not published yet (Excel and factsheet Sep) |
| SIF-114 | Arthaya (Union) | 30 Sep 2026 | site would not open in the browser pane |
| SIF-169, SIF-174, SIF-183, SIF-190 | NAV feed funds | not in tracker yet | new funds, first portfolio not out / AMC site not identified |

### Fails and fixes

| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Site would not open | Arthaya SIF-114 (Union MF) | browser pane refused unionmf.com | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane |
| 2 | Not re-checked | Kotak SIF-146 | loader error on October factsheet known from 12 Nov | Will retry automatically next run |
| 3 | No entry | SIF-169, 174, 183, 190 | first portfolios not out or AMC not identified | Will retry automatically next run |
| 4 | Key details waiting | Platinum SIF-136, Summit SIF-150 | October factsheet not out | Will retry automatically next run |
| 5 | Mismatch | RedHex SIF-128 | factsheet InvITs 9.6% vs workbook 14.08% | Will retry automatically next run (compare with November data) |

### AMC by AMC

| AMC | Funds | Data as on | Done | Page opened | Newest Excel | Newest factsheet | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| WSIF | 105, 111 | 30 Sep | 🟥 0% | yes | 30 Sep | none | nothing new | none |
| Titanium (Tata) | 29, 102 | 30 Sep | 🟥 0% | yes (API) | 30 Sep | 30 Sep | nothing new | none |
| DynaSIF (360 ONE) | 55, 87, 143 | 30 Sep | 🟥 0% | yes | Sep | 30 Sep | nothing new | none |
| Sapphire (Franklin) | 96 | 30 Sep | 🟥 0% | yes | 30 Sep | not checked | nothing new | none |
| Arudha | 40, 62 | 30 Sep / 31 Oct | 🟧 50% | yes | 30 Sep | Sep | nothing new | none |
| Infinity (Kotak) | 146 | 31 Oct | 🟧 50% | not re-opened | not checked | Oct (loaded) | not re-checked | none |
| Arthaya (Union) | 114 | 30 Sep | 🟥 0% | blocked | unknown | unknown | skipped: site refused | none |
| quant | 3, 7, 25, 93, 117 | 31 Oct (factsheet) | 🟧 50% | yes | 30 Sep (next Nov) | Oct (loaded) | nothing new | none |
| Altiva | 11, 122, 161 | 31 Oct | 🟩 100% | yes (factsheets) | 31 Oct | 31 Oct | nothing new to load | none |
| HSBC (RedHex) | 128 | 31 Oct | 🟩 100% | yes | 31 Oct | 31 Oct | key details from factsheet | key details added |
| Platinum (Mirae) | 136 | 31 Oct | 🟩 100% | yes | 31 Oct | 30 Sep | nothing new | none |
| Summit (Invesco) | 150, 177 | 31 Oct | 🟩 100% | yes (factsheets) | 31 Oct | Sep | nothing new | none |
| Others (Prism, SBI, iSIF, Apex, ITI) | rest | 31 Oct | 🟩 100% | not re-opened, already at target month | | | nothing new | none |

Industry AUM (AMFI): as on 2026-10-31
Strategy-split check (Step 3g): not done this pass.
Key-details check (Step 3h): written RedHex SIF-128; SIF-122 already complete; SIF-136 and SIF-150 waiting for their October factsheet; others not yet reached.
Factsheet display check (Step 3i): not done this pass.

### Funds changed

| Fund | Source | as_of | Size | Risk band | Unhedged | Other fields changed |
|---|---|---|---|---|---|---|
| SIF-128 RedHex Hybrid | Factsheet Oct 2026 | 2026-10-31 (unchanged) | 1,780.56 (unchanged) | 2 (unchanged) | unchanged | key details written/updated: scheme_details, debt_quants, strategy_overview, exposure |

## 2026-11-12 11:58 Lisbon time (full sweep, partial: 360 ONE, quant and Arthaya blocked)
Result: nothing changed. facts.json not committed (no newer data found).

**Updates found and made**

None

**Updates available but not made, or only partly made**

- 360 ONE (SIF-55, 87, 143): site returns Cloudflare "Attention Required" (403); not read.
- quant (SIF-3, 7, 25, 93, 117): browser pane refused qsif.com; November workbook (if out) not checked.
- Arthaya SIF-114: browser pane refused unionmf.com.
- Kotak SIF-146: loader still fails on the October factsheet (REIT table); entry stays on the 31 Oct factsheet load. October workbook is not out yet (newest is IHLSsept.xlsx, 30 Sep).
- Step 3e/3g/3h/3i sweeps and backfills not run this pass.

### Data completeness
Up to date: 24 of 39 SIF funds (62%) have data as on 31 Oct 2026
of which 18 from the full Excel portfolio and 6 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| SIF-105, SIF-111 | WSIF | 30 Sep 2026 | AMC has not published yet (newest Excel 30 Sep, published every two months) |
| SIF-29, SIF-102 | Titanium (Tata) | 30 Sep 2026 | AMC has not published yet (Excel and factsheet 30 Sep) |
| SIF-55, SIF-87, SIF-143 | DynaSIF (360 ONE) | 30 Sep 2026 | page blocked by Cloudflare |
| SIF-96 | Sapphire (Franklin) | 30 Sep 2026 | AMC has not published yet (Excel and factsheet 30 Sep) |
| SIF-40 | Arudha | 30 Sep 2026 | AMC has not published yet (Excel 30 Sep, factsheet Sep) |
| SIF-114 | Arthaya (Union) | 30 Sep 2026 | site would not open in the browser pane |
| SIF-169, SIF-174, SIF-183, SIF-190 | Titanium (Tata) and others in NAV feed | not in tracker yet | new funds, first portfolio not out / AMC site not identified |

### Fails and fixes

| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Page blocked | DynaSIF 360 ONE | Cloudflare "Attention Required" (403) | Will retry automatically next run |
| 2 | Site would not open | quant SIF-3/7/25/93/117 | browser pane refused qsif.com | Will retry automatically next run |
| 3 | Site would not open | Arthaya SIF-114 (Union MF) | browser pane refused unionmf.com | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane; if it loads there, the next run reads it |
| 4 | Loader error | Kotak SIF-146 | factsheet REIT rows add to 12.66, heading says 5.26 | Will retry automatically next run (loader needs a fix for the October summary table) |
| 5 | Four NAV-feed funds have no entry | SIF-169, 174, 183, 190 | first portfolios not out or AMC not identified | Will retry automatically next run |

### AMC by AMC

| AMC | Funds | Data as on | Done | Page opened | Newest Excel | Newest factsheet | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| WSIF | 105, 111 | 30 Sep | 🟥 0% | yes | 30 Sep | none | nothing new | none |
| Titanium (Tata) | 29, 102 | 30 Sep | 🟥 0% | yes (API) | 30 Sep | 30 Sep | nothing new | none |
| DynaSIF (360 ONE) | 55, 87, 143 | 30 Sep | 🟥 0% | blocked | unknown | unknown | skipped: Cloudflare | none |
| Sapphire (Franklin) | 96 | 30 Sep | 🟥 0% | yes | 30 Sep | 30 Sep | nothing new | none |
| Arudha | 40, 62 | 30 Sep / 31 Oct | 🟧 50% | yes | 30 Sep | Sep | nothing new | none |
| Infinity (Kotak) | 146 | 31 Oct | 🟧 50% | yes | 30 Sep | Oct (loaded) | skipped: loader error, Oct Excel not out | none |
| Arthaya (Union) | 114 | 30 Sep | 🟥 0% | blocked | unknown | unknown | skipped: site refused | none |
| quant | 3, 7, 25, 93, 117 | 31 Oct (factsheet) | 🟧 50% | blocked | unknown | Oct (loaded) | skipped: site refused | none |
| Others (Altiva, HSBC, Summit, ITI, Mirae, Prism, SBI, iSIF, Apex) | rest | 31 Oct | 🟩 100% | not re-opened, already at target month | | | nothing new | none |

Industry AUM (AMFI): as on 2026-10-31
Strategy-split check (Step 3g): not done this pass.
Key-details check (Step 3h): not done this pass.
Factsheet display check (Step 3i): not done this pass.

## 2026-11-12 07:56 Lisbon time (partial sweep)
Result: nothing changed. facts.json not committed (no newer data found).

**Updates found and made**

None

**Updates available but not made, or only partly made**

- Kotak SIF-146: loader error on the October factsheet (REIT summary table); entry stays on the 31 Oct factsheet load. Oct workbook not checked.
- quant (SIF-3, 7, 25, 93, 117): site would not open in the browser pane; Oct workbook (if out) not checked.
- Not done this run: Step 3e/3g/3h/3i sweeps, backfills, and the other AMCs already at the target month (not re-opened).

### Data completeness
Up to date: 24 of 39 SIF funds (62%) have data as on 31 Oct 2026
of which 18 from the full Excel portfolio and 6 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| SIF-105, SIF-111 | WSIF | 30 Sep 2026 | AMC has not published yet (newest Excel 30 Sep) |
| SIF-29, SIF-102 | Titanium (Tata) | 30 Sep 2026 | AMC has not published yet (newest Excel and factsheet 30 Sep) |
| SIF-55, SIF-87, SIF-143 | DynaSIF (360 ONE) | 30 Sep 2026 | page blocked by Cloudflare |
| SIF-96 | Sapphire (Franklin) | 30 Sep 2026 | AMC has not published yet (newest Excel and factsheet 30 Sep) |
| SIF-40 | Arudha | 30 Sep 2026 | AMC has not published yet (newest Excel 30 Sep, factsheet Sep) |
| SIF-114 | Arthaya (Union) | 30 Sep 2026 | site would not open in the browser pane |
| SIF-169, SIF-174, SIF-183, SIF-190 | Titanium (Tata) and others in NAV feed | not in tracker yet | new funds, first portfolio not checked/out yet |

### Fails and fixes

| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Page blocked | DynaSIF 360 ONE | Cloudflare "Attention Required" (403) | Will retry automatically next run |
| 2 | Site would not open | quant SIF-3/7/25/93/117 | browser pane refused qsif.com | Will retry automatically next run |
| 3 | Site would not open | Arthaya SIF-114 (Union MF) | browser pane refused unionmf.com | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane; if it loads there, the next run reads it |
| 4 | Loader error | Kotak SIF-146 | factsheet reit rows add to 12.66, heading says 5.26 | Will retry automatically next run (loader needs a fix for the October summary table) |
| 5 | Four funds in NAV feed have no entry | SIF-169, 174, 183, 190 | first portfolios not checked this run | Will retry automatically next run |

### AMC by AMC

| AMC | Funds | Data as on | Done | Page opened | Newest Excel | Newest factsheet | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| WSIF | 105, 111 | 30 Sep | 🟥 0% | yes | 30 Sep | none | nothing new | none |
| Titanium (Tata) | 29, 102 | 30 Sep | 🟥 0% | yes (API) | 30 Sep | 30 Sep | nothing new | none |
| DynaSIF (360 ONE) | 55, 87, 143 | 30 Sep | 🟥 0% | blocked | unknown | unknown | skipped: Cloudflare | none |
| Sapphire (Franklin) | 96 | 30 Sep | 🟥 0% | yes | 30 Sep | 30 Sep | nothing new | none |
| Arudha | 40, 62 | 30 Sep / 31 Oct | 🟧 50% | yes | 30 Sep | Sep | nothing new | none |
| Infinity (Kotak) | 146 | 31 Oct | 🟧 50% | yes | not checked | Oct | skipped: loader error | none |
| Arthaya (Union) | 114 | 30 Sep | 🟥 0% | blocked | unknown | unknown | skipped: site refused | none |
| quant | 3, 7, 25, 93, 117 | 31 Oct (factsheet) | 🟧 50% | blocked | unknown | Oct | skipped: site refused | none |
| Others (Altiva, HSBC, Summit, ITI, Mirae, Prism, SBI, iSIF, Apex) | rest | 31 Oct | 🟩 100% | not re-opened, already at target month | | | nothing new | none |

Industry AUM (AMFI): not checked this run.
Strategy-split check (Step 3g): not done this run.
Key-details check (Step 3h): not done this run.


## 2026-11-11 16:30 Lisbon time (full sweep, partial; refreshed)
Result: 8 funds updated to 31 Oct 2026 and 1 new fund added. facts.json committed and verified (35 entries, no risk band lost, no "Mutual fund units" line).

**Updates found and made**

- Altiva Equity Ex-Top 100 SIF-122: Excel, 31 Oct, Rs 1,580.51 cr. No derivatives. Key details written.
- Altiva Equity SIF-161: Excel, 31 Oct, Rs 508.47 cr. Unhedged long 13.20 (AMC 13.21), covered calls not counted. Key details, AMC-style split and strategy overview written.
- Altiva Hybrid SIF-11: Excel replaces factsheet, 31 Oct, Rs 12,221.34 cr; AMC-style split and key details kept.
- Summit Equity SIF-150: Excel, 31 Oct, Rs 417.08 cr. No derivatives.
- Diviniti SIF-21: Excel, 31 Oct, Rs 224.70 cr. Unhedged long 2.50 (AMC 2.49).
- Platinum SIF-136: Excel, 31 Oct, Rs 399.07 cr. Unhedged long 4.00 (AMC 4.00). Split Equity strategies / Fixed income / Arbitrage (workbook only).
- Infinity Kotak SIF-146: factsheet, 31 Oct, Rs 3,841.14 cr (factsheet only). Fixed: the October factsheet added a summary table whose REIT row broke the reader; handled in-session. Split: Fixed income 62.71, Arbitrage and covered calls 28.07, REITs 2.85, InvITs 2.41, Special situations 3.99. Unhedged card shows "Updating" (workbook still 30 Sep).
- NEW fund Summit Active Asset Allocator SIF-177: Excel, 31 Oct, Rs 204.78 cr, 100% Fixed income (TREPS, CD and Invesco India Liquid Fund 9.77%). Caveat added: launched 30 Oct and still being deployed from NFO proceeds. Risk band not stated in the workbook.

**Updates available but not made, or only partly made**

- Platinum SIF-136: October factsheet not read; collar and special-situations split pending.
- Key details (Step 3h): only 2 of 4 allowed backfills done (SIF-122, SIF-161). Franklin, Tata, Mirae, Invesco, ITI and iSIF factsheets not read.
- Kotak SIF-146: key details not yet written; Excel for Oct not out.
- Arthaya SIF-114: page not opened.
- Old split labels (Equity (unhedged), Arbitrage) remain on SIF-13, 29, 34, 35, 55, 102, 114, 117, 124, 126.
- Not re-opened (already at target): HSBC, Apex, SBI, iSIF, quant, Prism. Step 3e/3g/3i sweeps and the live-page display check were not done.

### Data completeness
Up to date: 24 of 38 SIF funds (63%) have data as on 31 Oct 2026
of which 18 from the full Excel portfolio and 6 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| SIF-105, SIF-111 | WSIF | 30 Sep 2026 | AMC has not published yet |
| SIF-29, SIF-102 | Titanium (Tata) | 30 Sep 2026 | AMC has not published yet |
| SIF-55, SIF-87, SIF-143 | DynaSIF (360 ONE) | 30 Sep 2026 | Excel every two months; Oct factsheet not out |
| SIF-96 | Sapphire (Franklin) | 30 Sep 2026 | AMC has not published yet |
| SIF-40, SIF-62 | Arudha | 30 Sep 2026 | AMC has not published yet |
| SIF-114 | Arthaya (Union) | 30 Sep 2026 | page not opened this run |
| SIF-169 | Titanium (Tata) | not in tracker yet | new fund, first portfolio not out yet |
| SIF-174 MSIF Equity Long-Short | unknown | not in tracker yet | new fund, AMC not identified |
| SIF-183 Eminence Hybrid Long Short | unknown | not in tracker yet | new AMC, site not found yet |

### Fails and fixes

| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Arthaya not opened | SIF-114 | Not tried | Will retry automatically next run |
| 2 | New funds without AMC | SIF-174, SIF-183 | AMC sites not identified | Will retry automatically next run |
| 3 | Key details backfill incomplete | many funds | Only 2 of 4 backfills done | Will retry automatically next run |
| 4 | Kotak reader fix lives only in the session | Kotak | adapters.js not edited (only facts.json and run log are authorised) | Needs Ashish: say yes to let the run add the page-2 summary-table filter to adapters.js |
| 5 | Run not a complete sweep | several AMCs | See list above | Will retry automatically next run |

### AMC by AMC

| AMC | Funds | Data as on | Done | Page opened | Newest Excel | Newest factsheet | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva (Edelweiss) | 3 | 31 Oct | 🟩 100% | yes | 31 Oct | 31 Oct | loaded from Excel | 50% -> 100% |
| RedHex (HSBC) | 1 | 31 Oct | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| WSIF | 2 | 30 Sep | 🟥 0% | yes | 30 Sep | none | nothing new | none |
| Titanium (Tata) | 2 | 30 Sep | 🟥 0% | yes (API) | 30 Sep | 30 Sep | nothing new | none |
| Platinum (Mirae) | 1 | 31 Oct | 🟩 100% | yes | 31 Oct | not read | loaded from Excel | 0% -> 100% |
| Sapphire (Franklin) | 1 | 30 Sep | 🟥 0% | yes | 30 Sep | not checked | nothing new | none |
| DynaSIF (360 ONE) | 3 | 30 Sep | 🟥 0% | yes | 30 Sep | 30 Sep | nothing new | none |
| Summit (Invesco) | 2 | 31 Oct | 🟩 100% | yes | 31 Oct | not read | loaded from Excel; SIF-177 added | 0% -> 100% |
| qsif (quant) | 5 | 31 Oct | 🟧 50% | not re-opened, already at target month | - | - | nothing new | none |
| Prism (Jio) | 1 | 31 Oct | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| Diviniti (ITI) | 1 | 31 Oct | 🟩 100% | yes | 31 Oct | not found | loaded from Excel | 0% -> 100% |
| Magnum (SBI) | 2 | 31 Oct | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| iSIF (ICICI Pru) | 4 | 31 Oct | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| Apex (ABSL) | 3 | 31 Oct | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| Arudha (Bandhan) | 2 | 30 Sep | 🟥 0% | yes | 30 Sep | none found | nothing new | none |
| Infinity (Kotak) | 1 | 31 Oct | 🟧 50% | yes | 30 Sep | 31 Oct | loaded from factsheet | 0% -> 50% |
| Arthaya (Union) | 1 | 30 Sep | 🟥 0% | not opened | - | - | skipped: not tried | none |

Industry AUM (AMFI): not checked this run.
Strategy-split check (Step 3g): Altiva Equity SIF-161 states net equity / derivatives and other strategy / cash; adopted. Altiva Ex-Top 100 states no bucket split. Others not checked.
Key-details check (Step 3h): written SIF-122, SIF-161; SIF-11 kept; Kotak and Summit SIF-177 pending a factsheet read.

### Funds changed

| Fund | Source | as_of before -> after | Size (Rs cr) | Risk band | Unhedged long/short | Other |
|---|---|---|---|---|---|---|
| SIF-122 | Excel | 30 Sep -> 31 Oct | 1,534.97 -> 1,580.51 | 5 -> 5 | 0/0 -> 0/0 | no-derivatives note, key details |
| SIF-161 | Excel | 30 Sep -> 31 Oct | 376.64 -> 508.47 | 3 -> 3 (not re-read) | 6.66/0 -> 13.20/0 | AMC strategy split, key details, overview |
| SIF-11 | Excel | 31 Oct factsheet -> Excel | 12,248 -> 12,221.34 | 1 -> 1 | kept | factsheet flags removed |
| SIF-150 | Excel | 30 Sep -> 31 Oct | 375.61 -> 417.08 | 5 -> 5 | 0/0 | no-derivatives note |
| SIF-21 | Excel | 30 Sep -> 31 Oct | 246.02 -> 224.70 | 5 -> 5 | 12.35/0 -> 2.50/0 | none |
| SIF-136 | Excel | 30 Sep -> 31 Oct | 385.37 -> 399.07 | 1 -> 1 | 3.11/0 -> 4.00/0 | split relabelled |
| SIF-146 | Factsheet | 30 Sep -> 31 Oct | 2,994.62 -> 3,841.14 | 1 -> 1 | frozen (Updating) | AMC-style split, stale sections, factsheet_only |
| SIF-177 | Excel | new fund -> 31 Oct | - -> 204.78 | - -> blank | 0/0 | NFO deployment caveat |

### Report card (current vs previous)

| | Previous (9 Nov) | Now (11 Nov) |
|---|---|---|
| Funds up to date (31 Oct) | 17 of 37 (46%) | 24 of 38 (63%) |
| From full Excel | 11 | 18 |
| From factsheet only | 6 | 6 |
| Funds behind (30 Sep) | 18 | 10 |
| Funds missing from tracker | 2 | 3 |
| Funds with key details | 6 | 8 |

## 2026-11-09 12:58 Lisbon time (catch-up)
Result: 4 funds updated (iSIF SIF-34, SIF-35, SIF-124, SIF-126). facts.json committed and verified (34 entries, no risk band lost, no "Mutual fund units" line).

**Updates found and made**

- iSIF Equity Ex-Top 100 SIF-34: Excel, 31 Oct 2026, Rs 2,650.34 cr. No unhedged positions.
- iSIF Hybrid SIF-35: Excel, 31 Oct 2026, Rs 1,667.06 cr. Unhedged long 1.54, short 0.
- iSIF Active Asset Allocator SIF-124: Excel, 31 Oct 2026, Rs 1,236.78 cr. Unhedged long 6.42, short 3.91 (includes a gold spread, noted on the card).
- iSIF Equity SIF-126: Excel, 31 Oct 2026, Rs 910.24 cr. Unhedged long 1.24, short 0.

**Updates available but not made, or only partly made**

- iSIF key details (Step 3h) still carry the earlier blocks; October iSIF factsheet not read in this pass. Will retry on the next full run.
- Other AMCs with funds below 31 Oct were not re-opened in this catch-up pass (only iSIF, Arudha and Kotak); the next firing will cover them.

### Data completeness
Up to date: 17 of 37 SIF funds (46%) have data as on 31 Oct 2026
of which 11 from the full Excel portfolio and 6 from the factsheet only (full portfolio still to come)

### AMC by AMC (catch-up: AMCs checked)

| AMC | Funds | Data as on | Done | Page opened | Newest Excel | Newest factsheet | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| iSIF (ICICI Pru) | 4 | 31 Oct 2026 | 🟩 100% | yes | 31 Oct 2026 | not read | loaded from Excel | 0% -> 100% |
| Arudha | 2 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | none seen | nothing new | none |
| Kotak | 1 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 (IHLSsept.xlsx) | Sep 2026 | nothing new | none |

other AMCs: unchanged since the earlier run today

Hedge review (Step 3d) agreed with the loader on all four (long within 0.5, short not above loader).


## 2026-11-09 10:30 Lisbon time (full sweep)
Result: 4 funds updated (Apex SIF-80, SBI SIF-13 and SIF-157, Prism SIF-138). facts.json committed together with this log (34 entries, no risk band lost, no "Mutual fund units" or "REITs and InvITs" line).

**Updates found and made**

- Apex Hybrid SIF-80: Excel, 31 Oct 2026, Rs 614.86 cr (was 353.87). Loaded as asked; AMC-style split applied.
- Magnum Hybrid SIF-13 (SBI): Excel, 31 Oct 2026, Rs 3,994.80 cr.
- Magnum Equity Ex-Top 100 SIF-157 (SBI): Excel, 31 Oct 2026, Rs 1,689.62 cr.
- Prism Hybrid SIF-138: Excel, 31 Oct 2026, Rs 616.59 cr, 206 holdings.

**Updates available but not made, or only partly made**

- Apex SIF-80: the workbook does not total the covered-call and collar share, so Arbitrage and covered calls shows only the futures-hedged 9.24% and Special situations 27.81% includes covered-call stock. Will be refined from the October factsheet when it is out.
- Prism SIF-138: collar, merger arbitrage and special situations are carried at the 30 Sep proportions (October factsheet commentary not out); fixed income is the balance.
- SBI SIF-157: unhedged card re-read by hand later on 9 Nov (see Fix below). SBI Gold ETF 2.81% is shown as its own "Gold ETF" line.
- Key details (Step 3h) for these four funds still carry the September blocks; October factsheets are not out for Apex, Prism or SBI (SBI latest factsheet is September).

### Data completeness
Up to date: 13 of 37 SIF funds (35%) have data as on 31 Oct 2026
of which 7 from the full Excel portfolio and 6 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| SIF-122, SIF-161 | Altiva | 30 Sep 2026 | Oct Excel and factsheet not out (Altiva Oct factsheet covers the Hybrid only) |
| SIF-105, SIF-111 | WSIF | 30 Sep 2026 | Excel published every two months (Sep newest) |
| SIF-102, SIF-29 | Titanium | 30 Sep 2026 | AMC has not published yet |
| SIF-136 | Platinum | 30 Sep 2026 | AMC has not published yet |
| SIF-96 | Sapphire | 30 Sep 2026 | AMC has not published yet |
| SIF-150 | Summit | 30 Sep 2026 | AMC has not published yet |
| SIF-21 | Diviniti | 30 Sep 2026 | AMC has not published yet |
| SIF-34, 35, 124, 126 | iSIF | 30 Sep 2026 | AMC has not published yet |
| SIF-40, SIF-62 | Arudha | 30 Sep 2026 | AMC has not published yet |
| SIF-146 | Kotak | 30 Sep 2026 | AMC has not published yet |
| SIF-55, 87, 143 | DynaSIF | 30 Sep 2026 | Excel every two months; Oct factsheet not out |
| SIF-114 | Arthaya | 30 Sep 2026 | unionmf.com would not open |
| SIF-3, 7, 25, 93, 117 | qsif | factsheet 31 Oct | counted as up to date via factsheet; Excel is every two months (Sep newest, Nov not out) |
| SIF-169, 174, 177 | Titanium, MSIF, Summit | not in tracker yet | new funds, first portfolio not out yet |

### Fails and fixes

| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Site would not open | Arthaya SIF-114 (Union MF) | unionmf.com navigation denied in the browser pane | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane; if it loads there, the next run reads it |
| 2 | Options card not readable | SBI SIF-157 | Adapter warning only; the workbook has no options (all Nil) | Fixed in this run: card written by hand from the workbook: six long stock futures, 11.18% long, 0 short, matching SBI's own total |
| 3 | Split partly estimated | Apex SIF-80, Prism SIF-138 | Strategy buckets not stated in the Excel | Will retry automatically next run (October factsheets) |
| 4 | Key details not refreshed | Apex, SBI, Prism | October factsheets not out | Will retry automatically next run |
| 5 | Step 3h backfill and Step 3i factsheet display check not done | factsheet-only funds | Run limited to workbook sweep | Will retry automatically next run |

### AMC by AMC

| AMC | Funds | Data as on | Done | Page opened | Newest Excel | Newest factsheet | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | 11, 122, 161 | 11: 31 Oct; others 30 Sep | 🟧 50% | yes | Sep 2026 | Oct 2026 (Hybrid only) | nothing new | none |
| RedHex / HSBC | 128 | 31 Oct | 🟩 100% | not re-opened, already at target month | 31 Oct | - | nothing new | none |
| WSIF | 105, 111 | 30 Sep | 🟥 0% | yes | 30 Sep | none | nothing new | none |
| Titanium / Tata | 29, 102 | 30 Sep | 🟥 0% | yes | 30 Sep | Sep | nothing new | none |
| Platinum / Mirae | 136 | 30 Sep | 🟥 0% | yes | 30 Sep | "Oct" file (30 Sep data) | nothing new | none |
| Sapphire / Franklin | 96 | 30 Sep | 🟥 0% | yes | 30 Sep | not checked | nothing new | none |
| DynaSIF / 360 ONE | 55, 87, 143 | 30 Sep | 🟥 0% | yes | Sep 2026 | 30 Sep | nothing new | none |
| Summit / Invesco | 150 | 30 Sep | 🟥 0% | yes | 30 Sep | Sep | nothing new | none |
| qsif | 3, 7, 25, 93, 117 | 31 Oct (factsheet) | 🟧 50% | yes | 30 Sep | Oct file | nothing new | none |
| Prism / Jio BlackRock | 138 | 31 Oct | 🟩 100% | yes | 31 Oct | not out | loaded from Excel | 0% -> 100% |
| Diviniti / ITI | 21 | 30 Sep | 🟥 0% | yes | Sep 2026 | not checked | nothing new | none |
| Magnum / SBI | 13, 157 | 31 Oct | 🟩 100% | yes | 31 Oct | Sep | loaded from Excel (SIF-157 card read by hand) | 0% -> 100% |
| iSIF / ICICI | 34, 35, 124, 126 | 30 Sep | 🟥 0% | yes | Sep 2026 | not checked | nothing new | none |
| Apex / Aditya Birla | 80, 154, 156 | 31 Oct | 🟩 100% | yes | 31 Oct | not out | SIF-80 loaded from Excel | 67% -> 100% |
| Arudha / Bandhan | 40, 62 | 30 Sep | 🟥 0% | yes | 30 Sep | not checked | nothing new | none |
| Infinity / Kotak | 146 | 30 Sep | 🟥 0% | yes | 30 Sep (IHLSsept.xlsx) | not checked | nothing new | none |
| Arthaya / Union MF | 114 | 30 Sep | 🟥 0% | blocked | - | - | skipped: site would not open | none |

Industry AUM (AMFI): not checked this run.
Strategy-split check (Step 3g): not run this sweep except Apex SIF-80 and Prism SIF-138 as described above.
Key-details check (Step 3h): none written today; the four funds loaded keep their September blocks; funds still waiting for a factsheet: Apex, SBI, Prism.
Factsheet display check (Step 3i): not run today.

### Funds changed

| Fund | Source | as_of before -> after | Size before -> after (Rs cr) | Risk band | Unhedged long/short before -> after | Other fields changed |
|---|---|---|---|---|---|---|
| SIF-80 Apex Hybrid | Excel | 2026-09-30 -> 2026-10-31 | 353.87 -> 614.86 | 1 -> 1 | recomputed (long 0.47, short 0) | AMC-style split applied, exposure card updated, Gold none |
| SIF-13 Magnum Hybrid | Excel | 2026-09-30 -> 2026-10-31 | 3981.67 -> 3994.80 | 1 -> 1 | 0/0 -> 0/0 | AMC strategy split (Arbitrage and covered calls) kept |
| SIF-157 Magnum Ex-Top 100 | Excel | 2026-09-30 -> 2026-10-31 | 1598.35 -> 1689.62 | 5 -> 5 | 19.44/0 -> 11.18/0 (six long futures, hand-read) | Gold ETF 2.81% shown as its own line; new "Gold ETF" definition |
| SIF-138 Prism Hybrid | Excel | 2026-09-30 -> 2026-10-31 | 458.54 -> 616.59 | 1 -> 1 | 0/9.98 -> 0/9.18 | split carried at Sep proportions, REITs and InvITs separate |



## 2026-11-08 09:30 Lisbon time
Result: 2 funds updated (Apex SIF-154, SIF-156). facts.json committed and verified (34 entries, no risk band lost, no "Mutual fund units" line).

**Updates found and made**

- Apex Equity SIF-154: Excel, 31 Oct 2026, Rs 149.65 cr.
- Apex Equity Ex-Top 100 SIF-156: Excel, 31 Oct 2026, Rs 278.88 cr.

**Updates available but not made, or only partly made**

- Apex Hybrid SIF-80: 31 Oct workbook is out (Rs 614.86 cr, up from 353.87) but the split moved a lot (unhedged equity 27.8%, was 5.5%); the AMC-style split (Step 3f) needs the October factsheet. Left as 30 Sep. Will retry next run.
- Magnum SIF-13 and SIF-157 (SBI): 31 Oct workbook is out. SIF-13 hedged only 0.52% via futures, so the arbitrage and covered-call split cannot be read from the file; SIF-157 holds SBI Gold ETF 2.81% (not debt or equity) and its options card cannot be read by the adapter. Left as 30 Sep. Will retry next run.
- Prism SIF-138: 31 Oct workbook is out (Rs 616.59 cr, 206 holdings). Strategy split (collar, merger arbitrage) comes from the October factsheet commentary, not out yet. Left as 30 Sep. Will retry next run.
- Key details (Step 3h) for the two Apex funds are not refreshed: the October factsheet is not out; old blocks kept.

### Data completeness
Up to date: 9 of 37 SIF funds (24%) have data as on 31 Oct 2026
of which 3 from the full Excel portfolio and 6 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| SIF-80 | Apex | 30 Sep 2026 | Excel out, needs hand review of split |
| SIF-13, SIF-157 | SBI Magnum | 30 Sep 2026 | Excel out, needs hand review |
| SIF-138 | Prism | 30 Sep 2026 | Excel out, factsheet commentary not out |
| SIF-122, SIF-161 | Altiva | 30 Sep 2026 | AMC has not published October Excel yet |
| SIF-105, SIF-111 | WSIF | 30 Sep 2026 | Excel published every two months |
| SIF-102, SIF-29 | Titanium | 30 Sep 2026 | AMC has not published yet |
| SIF-136 | Platinum | 30 Sep 2026 | AMC has not published yet |
| SIF-96 | Sapphire | 30 Sep 2026 | AMC has not published yet |
| SIF-150 | Summit | 30 Sep 2026 | AMC has not published yet |
| SIF-21 | Diviniti | 30 Sep 2026 | AMC has not published yet |
| SIF-34, 35, 124, 126 | iSIF | 30 Sep 2026 | AMC has not published yet |
| SIF-40, SIF-62 | Arudha | 30 Sep 2026 | AMC has not published yet |
| SIF-146 | Kotak | 30 Sep 2026 | AMC has not published yet |
| SIF-55, 87, 143 | DynaSIF | 30 Sep 2026 | Cloudflare block, not checked |
| SIF-114 | Arthaya | 30 Sep 2026 | unionmf.com would not open |
| SIF-3, 7, 25, 93, 117 | qsif | factsheet 31 Oct | qsif.com would not open, November Excel not checked (they count as up to date via factsheet) |
| SIF-169, 174, 177 | Titanium, MSIF, Summit | not in tracker yet | new funds, first portfolio not out yet |

### Fails and fixes

| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Page would not open | qsif (5 funds) | qsif.com navigation denied in the browser pane | Will retry automatically next run |
| 2 | Page blocked | DynaSIF / 360 ONE (3 funds) | Cloudflare "Attention Required" 403 | Will retry automatically next run |
| 3 | Page would not open | Arthaya SIF-114 (Union MF) | unionmf.com navigation denied | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane |
| 4 | Not loaded | Apex SIF-80 | split needs October factsheet | Will retry automatically next run |
| 5 | Not loaded | SBI SIF-13, SIF-157 | classification and options card need hand review | Will retry automatically next run |
| 6 | Not loaded | Prism SIF-138 | October factsheet commentary not out | Will retry automatically next run |
| 7 | HSBC, AMFI AUM, sweeps | RedHex, aum.json, Step 3c-3h sweeps | not re-checked this run (RedHex already on 31 Oct; time spent on loaders) | Will retry automatically next run |

### AMC by AMC

| AMC | Funds | Data as on | Done | Page opened | Newest Excel | Newest factsheet | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | 3 | 31 Oct (SIF-11 FS), 30 Sep | 🟧 | yes | Sep | not checked | nothing new | none |
| RedHex / HSBC | 1 | 31 Oct | 🟩 | not re-opened, already at target month | 31 Oct | n/a | nothing new | none |
| WSIF | 2 | 30 Sep | 🟥 | yes | 30 Sep | none | nothing new | none |
| Titanium / Tata | 2 | 30 Sep | 🟥 | yes (API) | 30 Sep | 30 Sep | nothing new | none |
| Platinum / Mirae | 1 | 30 Sep | 🟥 | yes | 30 Sep | not checked | nothing new | none |
| Sapphire / Franklin | 1 | 30 Sep | 🟥 | yes | 30 Sep | not checked | nothing new | none |
| DynaSIF / 360 ONE | 3 | 30 Sep | 🟥 | blocked | unknown | unknown | skipped: Cloudflare | none |
| Summit / Invesco | 1 | 30 Sep | 🟥 | yes | 30 Sep | not checked | nothing new | none |
| qsif | 5 | 31 Oct (FS) | 🟧 | blocked | unknown | 31 Oct | skipped: page denied | none |
| Prism / Jio | 1 | 30 Sep | 🟥 | yes | 31 Oct (found) | not checked | skipped: needs factsheet commentary | none |
| Diviniti / ITI | 1 | 30 Sep | 🟥 | yes | 30 Sep | not checked | nothing new | none |
| Magnum / SBI | 2 | 30 Sep | 🟥 | yes | 31 Oct (found) | not checked | skipped: hand review | none |
| iSIF / ICICI | 4 | 30 Sep | 🟥 | yes | 30 Sep | not checked | nothing new | none |
| Apex / Aditya Birla | 3 | 31 Oct (2 funds), 30 Sep | 🟧 | yes | 31 Oct | not checked | loaded SIF-154, SIF-156 from Excel; SIF-80 skipped | 🟥 0% -> 🟧 67% |
| Arudha / Bandhan | 2 | 30 Sep | 🟥 | yes | 30 Sep | up to Jun listed | nothing new | none |
| Infinity / Kotak | 1 | 30 Sep | 🟥 | yes | 30 Sep (IHLSsept.xlsx) | not checked | nothing new | none |
| Arthaya / Union MF | 1 | 30 Sep | 🟥 | blocked | unknown | unknown | skipped: page denied | none |

Industry AUM (AMFI): not checked this run
Strategy-split check (Step 3g): not run this run
Key-details check (Step 3h): not run for the two Apex funds (October factsheet not out); no backfill this run

### Funds changed

| Fund | Source | as_of | Size (Rs cr) | Risk band | Unhedged long/short | Other |
|---|---|---|---|---|---|---|
| SIF-154 Apex Equity | Excel | 2026-09-30 -> 2026-10-31 | 125.31 -> 149.65 | 2 -> 2 | 1.26/17.91 -> 7.22/0 | split now Equity 79.61 / Fixed income 20.39 |
| SIF-156 Apex Equity Ex-Top 100 | Excel | 2026-09-30 -> 2026-10-31 | 250.38 -> 278.88 | 3 -> 3 | 0/37.21 -> 4.63/31.29 | split now Equity 52.51 / Fixed income 47.49 |

## 2026-11-07 08:35 Lisbon time
Result: nothing changed. facts.json not committed (no AMC had a file newer than what is loaded).

**Updates found and made**

None

**Updates available but not made, or only partly made**

- qsif (SIF-3, 7, 25, 93, 117): qsif.com would not open in the browser pane (navigation denied, tried 3 times), so the November Excel could not be checked. These five funds stay on their 31 Oct factsheet data. Will retry next run.
- DynaSIF (360 ONE, SIF-55, 87, 143): Cloudflare "Attention Required" (403), not checked. Will retry next run.
- Arthaya SIF-114 (Union MF): unionmf.com navigation denied. Needs Ashish.
- Altiva SIF-122, SIF-161: Edelweiss month list still ends at Sep (no October Excel). Will retry next run.
- RedHex key details (SIF-128): October factsheet not out (newest is September). Will retry next run.

### Data completeness
Up to date: 7 of 37 SIF funds (19%) have data as on 31 Oct 2026
of which 1 from the full Excel portfolio and 6 from the factsheet only (full portfolio still to come)

Not yet up to date: 30 funds on 30 Sep 2026 plus 3 not in tracker (SIF-169 Titanium Active Asset Allocator, SIF-174 MSIF Equity Long-Short, SIF-177 Summit Active Asset Allocator, all with no first portfolio out yet).

### Fails and fixes

| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Page would not open | qsif SIF-3, 7, 25, 93, 117 | qsif.com navigation denied in the browser pane (3 tries) | Will retry automatically next run |
| 2 | Page blocked | DynaSIF SIF-55, 87, 143 (360 ONE) | Cloudflare "Attention Required" (403) | Will retry automatically next run |
| 3 | Page would not open | Arthaya SIF-114 (Union MF) | unionmf.com navigation denied in the browser pane | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane; if it loads there, the next run reads it |
| 4 | Key details not written | RedHex SIF-128 | October factsheet not published yet | Will retry automatically next run |

### AMC by AMC

| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva (Edelweiss) | 3 | SIF-11 31 Oct (F), others 30 Sep | 🟧 50% (avg) | yes | Sep | Oct (Hybrid only, from earlier run) | nothing new | none |
| RedHex (HSBC) | 1 | 31 Oct | 🟩 100% | yes | 31 Oct 2026 (loaded) | Sep 2026 | nothing new | none |
| WSIF (Wealth Co) | 2 | 30 Sep | 🟥 0% | yes | 30 Sep | none exists | nothing new | none |
| Titanium (Tata) | 2 | 30 Sep | 🟥 0% | yes | 30 Sep | 30 Sep | nothing new | none |
| Platinum (Mirae) | 1 | 30 Sep | 🟥 0% | yes | 30 Sep | "Oct 2026" file = 30 Sep data | nothing new | none |
| Sapphire (Franklin) | 1 | 30 Sep | 🟥 0% | yes | 30 Sep | not opened | nothing new | none |
| DynaSIF (360 ONE) | 3 | 30 Sep | 🟥 0% | blocked | not checked | not checked | skipped: Cloudflare | none |
| Summit (Invesco) | 1 | 30 Sep | 🟥 0% | yes | 30 Sep | Sep | nothing new | none |
| qsif | 5 | 31 Oct (F) | 🟧 50% | blocked | not checked | not checked | skipped: navigation denied | none |
| Prism (Jio BlackRock) | 1 | 30 Sep | 🟥 0% | yes | none for Oct | none for Oct | nothing new | none |
| Diviniti (ITI) | 1 | 30 Sep | 🟥 0% | yes | Sep | Sep | nothing new | none |
| Magnum (SBI) | 2 | 30 Sep | 🟥 0% | yes | 30 Sep | Sep | nothing new | none |
| iSIF (ICICI Pru) | 4 | 30 Sep | 🟥 0% | yes | Sep zip | not opened | nothing new | none |
| Apex (Aditya Birla) | 3 | 30 Sep | 🟥 0% | yes | 30 Sep | "Oct 2026" file = 30 Sep data | nothing new | none |
| Arudha (Bandhan) | 2 | 30 Sep | 🟥 0% | yes | 30 Sep | Sep 2026 | nothing new | none |
| Infinity (Kotak) | 1 | 30 Sep | 🟥 0% | yes | IHLSsept.xlsx (30 Sep) | Sep | nothing new | none |
| Arthaya (Union MF) | 1 | 30 Sep | 🟥 0% | blocked | not checked | not checked | skipped: navigation denied | none |

Industry AUM (AMFI): not checked in this pass
Strategy-split check (Step 3g): not run, no new data
Key-details check (Step 3h): none written; RedHex waiting for its October factsheet
Factsheet display check (Step 3i): not re-run, no commit today

## 2026-11-06 12:00 Lisbon time (catch-up)
Result: 1 fund updated. facts.json committed and verified (34 funds, no risk band lost, no "Mutual fund units" line left).

**Updates found and made**

- RedHex Hybrid Long-Short (SIF-128): HSBC monthly portfolio workbook as on 31 Oct 2026 (published since this morning's run), size Rs 1,780.56 cr (was 1,504), 91 holdings. Split: Fixed income 50.35 (includes 6.48 in HSBC Money Market Fund units), Arbitrage 26.09, InvITs 14.08, REITs 9.48. No unhedged positions (HSBC prints non-hedging futures and options as nil). Risk band kept at 2 (October factsheet not out yet).

**Updates available but not made, or only partly made**

- RedHex key details: the October factsheet is not out (newest is September), so Step 3h was not written for SIF-128. Will retry automatically next run.
- DynaSIF (360 ONE): Cloudflare "Attention Required" page, not checked. Will retry next run.
- Arthaya SIF-114 (Union MF): unionmf.com navigation denied. Needs Ashish.
- Magnum SIF-13, SIF-157 (SBI): page opened but the portfolio links did not render, so not read. Will retry next run.

### Data completeness
Up to date: 7 of 37 SIF funds (19%) have data as on 31 Oct 2026
of which 1 from the full Excel portfolio and 6 from the factsheet only (full portfolio still to come)

Not yet up to date: 30 funds on 30 Sep 2026 plus 3 not in tracker (SIF-169 Titanium Active Asset Allocator, SIF-174 MSIF Equity Long-Short, SIF-177 Summit Active Asset Allocator, all with no first portfolio out yet). For every other AMC no October workbook or factsheet was found in this pass.

### Fails and fixes

| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Page blocked | DynaSIF SIF-55, 87, 143 (360 ONE) | Cloudflare "Attention Required" (403) | Will retry automatically next run |
| 2 | Page would not open | Arthaya SIF-114 (Union MF) | unionmf.com navigation denied in the browser pane | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane; if it loads there, the next run reads it |
| 3 | Links not shown | Magnum SIF-13, SIF-157 (SBI) | sbimf.com opened but no .xlsx links appeared after 4 s | Will retry automatically next run |
| 4 | Key details not written | RedHex SIF-128 | October factsheet not published yet | Will retry automatically next run |

### AMC by AMC (catch-up pass)

| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva (Edelweiss) | 3 | SIF-11 31 Oct (F), others 30 Sep | 🟧 50% (avg) | yes | Sep (month list ends at Sep) | not re-checked | nothing new | none |
| RedHex (HSBC) | 1 | 31 Oct | 🟩 100% | yes | 31 Oct 2026 | Sep 2026 | loaded from Excel | 0% -> 100% |
| WSIF (Wealth Co) | 2 | 30 Sep | 🟥 0% | yes | 30 Sep | none | nothing new | none |
| Titanium (Tata) | 2 | 30 Sep | 🟥 0% | yes | 30 Sep | 30 Sep | nothing new | none |
| Platinum (Mirae) | 1 | 30 Sep | 🟥 0% | yes | 30 Sep | not opened | nothing new | none |
| Sapphire (Franklin) | 1 | 30 Sep | 🟥 0% | yes | 30 Sep | not opened | nothing new | none |
| DynaSIF (360 ONE) | 3 | 30 Sep | 🟥 0% | blocked | not checked | not checked | skipped: Cloudflare | none |
| Summit (Invesco) | 1 | 30 Sep | 🟥 0% | yes | 30 Sep | not opened | nothing new | none |
| Prism (Jio BlackRock) | 1 | 30 Sep | 🟥 0% | yes | none for Oct | not opened | nothing new | none |
| Diviniti (ITI) | 1 | 30 Sep | 🟥 0% | yes | Sep | not opened | nothing new | none |
| Magnum (SBI) | 2 | 30 Sep | 🟥 0% | yes, no links | not read | not read | skipped | none |
| iSIF (ICICI Pru) | 4 | 30 Sep | 🟥 0% | yes | Sep zip | not opened | nothing new | none |
| Apex (Aditya Birla) | 3 | 30 Sep | 🟥 0% | yes | 30 Sep | not opened | nothing new | none |
| Arudha (Bandhan) | 2 | 30 Sep | 🟥 0% | yes | 30 Sep | Sep 2026 file | nothing new | none |
| Infinity (Kotak) | 1 | 30 Sep | 🟥 0% | yes | IHLSsept.xlsx | not opened | nothing new | none |
| Arthaya (Union MF) | 1 | 30 Sep | 🟥 0% | blocked | not checked | not checked | skipped: navigation denied | none |
| other AMCs: unchanged since the earlier run today (qsif not re-opened, already at target month for the funds loaded) | | | | | | | | |

Industry AUM (AMFI): not checked in this pass
Strategy-split check (Step 3g): not run, no other new data
Key-details check (Step 3h): none written; RedHex waiting for its October factsheet

### Funds changed

| Fund | Source | as_of before -> after | Size before -> after (Rs cr) | Risk band | Unhedged long/short | Other fields changed |
|---|---|---|---|---|---|---|
| SIF-128 RedHex Hybrid Long-Short | HSBC Excel | 2026-09-30 -> 2026-10-31 | 1,504 -> 1,780.56 | 2 -> 2 | 0/0 -> 0/0 | split, holdings, top holdings and debt refreshed; HSBC Money Market Fund units moved to Fixed income; no-unhedged note updated (zero since 30 Sep) |

## 2026-11-06 Lisbon time
Result: nothing changed. facts.json not committed (no AMC had a newer file than what is loaded).

**Updates found and made**

None

**Updates available but not made, or only partly made**

- Arthaya SIF-114 (Union MF): site would not open in the browser pane, so no check was possible. Needs Ashish.
- Magnum SIF-13 and SIF-157 (SBI): sbimf.com answered "Request Rejected", so not checked. Will retry next run.

### Data completeness
Up to date: 6 of 37 SIF funds (16%) have data as on 31 Oct 2026
of which 0 from the full Excel portfolio and 6 from the factsheet only (full portfolio still to come)

Not yet up to date (31 funds on 30 Sep 2026 plus 3 not in tracker): every AMC checked today had no October workbook or factsheet yet, apart from the six already loaded (Altiva Hybrid, quant x5).

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| SIF-122, SIF-161 | Altiva | 30 Sep 2026 | October factsheet covers the Hybrid only; Excel not out |
| SIF-136 | Platinum | 30 Sep 2026 | AMC has not published yet |
| SIF-128 | RedHex | 30 Sep 2026 | AMC has not published yet (filtered pages checked) |
| SIF-105, SIF-111 | Wealth Company | 30 Sep 2026 | AMC has not published yet |
| SIF-150 | Summit | 30 Sep 2026 | AMC has not published yet |
| SIF-29, SIF-102 | Titanium | 30 Sep 2026 | AMC has not published yet |
| SIF-55, 87, 143 | DynaSIF | 30 Sep 2026 | Excel published every two months, October factsheet not out yet |
| SIF-96 | Sapphire | 30 Sep 2026 | AMC has not published yet |
| SIF-138 | Prism | 30 Sep 2026 | AMC has not published yet (Oct portfolio and factsheet both empty) |
| SIF-21 | Diviniti | 30 Sep 2026 | AMC has not published yet |
| SIF-13, SIF-157 | Magnum | 30 Sep 2026 | page blocked (Request Rejected) |
| SIF-34, 35, 124, 126 | iSIF | 30 Sep 2026 | AMC has not published yet |
| SIF-80, 154, 156 | Apex | 30 Sep 2026 | AMC has not published yet |
| SIF-40, SIF-62 | Arudha | 30 Sep 2026 | AMC has not published yet |
| SIF-146 | Infinity | 30 Sep 2026 | AMC has not published yet |
| SIF-114 | Arthaya | 30 Sep 2026 | page blocked, needs Ashish |
| SIF-169 Titanium Active Asset Allocator | Tata | not in tracker yet | new fund, first portfolio (31 Oct) not out yet |
| SIF-174 MSIF Equity Long-Short | Mahindra Manulife (new AMC) | not in tracker yet | new fund (NFO closed 30 Sep), first portfolio not out yet; AMC SIF site not found yet |
| SIF-177 Summit Active Asset Allocator | Invesco | not in tracker yet | new fund, first portfolio not out yet |

### Fails and fixes

| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Page would not open | Arthaya SIF-114 (Union MF) | unionmf.com navigation denied in the browser pane | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane; if it loads there, the next run reads it |
| 2 | Page blocked | Magnum SIF-13, SIF-157 (SBI) | sbimf.com returned "Request Rejected" | Will retry automatically next run |
| 3 | Not checked | iSIF, Apex, Arudha, Kotak factsheets | Workbook loaders showed Sep as newest; factsheet lists not separately opened to save time | Will retry automatically next run |

### AMC by AMC

| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva (Edelweiss) | 3 | SIF-11 31 Oct (F), others 30 Sep | 🟧 50% (avg) | yes | Jan-Sep (none for Oct) | Oct (Hybrid only) | nothing new | none |
| RedHex (HSBC) | 1 | 30 Sep | 🟥 0% | yes | 30 Sep | 30 Sep | nothing new | none |
| WSIF (Wealth Co) | 2 | 30 Sep | 🟥 0% | yes | 30 Sep | none | nothing new | none |
| Titanium (Tata) | 2 | 30 Sep | 🟥 0% | yes | 30 Sep | 30 Sep | nothing new | none |
| Platinum (Mirae) | 1 | 30 Sep | 🟥 0% | yes | 30 Sep | not opened | nothing new | none |
| Sapphire (Franklin) | 1 | 30 Sep | 🟥 0% | yes | 30 Sep | not opened | nothing new | none |
| DynaSIF (360 ONE) | 3 | 30 Sep | 🟥 0% | yes | Sep | 30 Sep | nothing new | none |
| Summit (Invesco) | 1 | 30 Sep | 🟥 0% | yes | 30 Sep | not opened | nothing new | none |
| qsif (quant) | 5 | 31 Oct (F) | 🟧 50% | yes (factsheet page) | not re-checked (bi-monthly, next Nov) | Nov 2026 file = 31 Oct data, already loaded | nothing new | none |
| Prism (Jio BlackRock) | 1 | 30 Sep | 🟥 0% | yes | none for Oct | none for Oct | nothing new | none |
| Diviniti (ITI) | 1 | 30 Sep | 🟥 0% | yes | Sep | not opened | nothing new | none |
| Magnum (SBI) | 2 | 30 Sep | 🟥 0% | blocked | not checked | not checked | skipped: Request Rejected | none |
| iSIF (ICICI Pru) | 4 | 30 Sep | 🟥 0% | yes | Sep zip | not opened | nothing new | none |
| Apex (Aditya Birla) | 3 | 30 Sep | 🟥 0% | yes | 30 Sep | not opened | nothing new | none |
| Arudha (Bandhan) | 2 | 30 Sep | 🟥 0% | yes | 30 Sep (both funds now readable) | not opened | nothing new | none |
| Infinity (Kotak) | 1 | 30 Sep | 🟥 0% | yes | IHLSsept.xlsx (30 Sep) | not opened | nothing new | none |
| Arthaya (Union MF) | 1 | 30 Sep | 🟥 0% | blocked | not checked | not checked | skipped: navigation denied | none |

Industry AUM (AMFI): not checked this run
Strategy-split check (Step 3g): not run this run, no new data
Key-details check (Step 3h): no funds written or backfilled this run; the backfill and sweeps were not run because nothing was loaded

## 2026-11-05 (data and design update, asked by Ashish)
Result: quant SIF (SIF-3, 7, 25, 93, 117) now carry risk bands, key details, performance, strategy panels and an October factsheet exposure view. Tracker page bugs fixed. facts.json committed and verified.

**Updates found and made**
- Risk bands read from the October factsheet gauge: SIF-25 3 -> 4, SIF-93 2 -> 3, SIF-3 3, SIF-7 3, SIF-117 3 (unchanged).
- Key details, returns vs benchmark, strategy overview ("How this fund works") and, for SIF-7, debt quality written from the factsheet.
- Factsheet-only display rule: the unhedged derivative position list (30 Sep, positions file) is hidden and replaced by the factsheet's October average long, short and net exposure and beta (fields unhedged_pending + unhedged_factsheet); the equity exposure card uses the same averages (field exposure); tiles Positions, Derivative exposure, Portfolio turnover carry "as on 30 Sep 2026".
- Page fixes (WordPress SIF Tracker page): (1) patchDetailPage crashed on later fund switches because the Category AUM row is removed after first load; (2) Key details extra rows stayed from the first fund viewed; (3) How this fund works stayed from the previous fund when the next had no strategy panel; (4) Fund AUM row did not update. The stale caption now reads "latest monthly file not out yet" (was hard-coded to October).

**Updates available but not made, or only partly made**
- quant expense ratio and NAV are not in the factsheet text, so not written. Monthly returns table and top shorts are not in the factsheet.
- Other AMCs: no October factsheet or workbook yet (see the earlier catch-up entry today).

### Fails and fixes
| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Page would not open | Arthaya SIF-114 | unionmf.com refused in the browser pane | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane |


## 2026-11-05 Lisbon time (catch-up, asked by Ashish)
Result: 5 funds updated (quant SIF, from the factsheet). facts.json committed and verified (34 entries, no risk band lost, no "Mutual fund units" line).

**Updates found and made**
- SIF-3 qsif Equity Long-Short: factsheet as on 31 Oct 2026, size Rs 1,098 cr
- SIF-7 qsif Hybrid Long-Short: factsheet 31 Oct 2026, Rs 843 cr
- SIF-25 qsif Equity Ex-Top 100: factsheet 31 Oct 2026, Rs 1,264 cr
- SIF-93 qsif Active Asset Allocator: factsheet 31 Oct 2026, Rs 1,099 cr
- SIF-117 qsif Sector Rotation: factsheet 31 Oct 2026, Rs 72 cr

**Updates available but not made, or only partly made**
- quant: key details/returns (Step 3h) not written this pass; risk bands kept (shown only as image). Will be done as backfill on later runs.
- ICICI iSIF has October fund notes but no October factsheet yet.

### Data completeness
Up to date: 6 of 37 SIF funds (16%) have data as on 31 Oct 2026
of which 0 from the full Excel portfolio and 6 from the factsheet only (full portfolio still to come)
Not yet up to date: the other 31 funds (28 on 30 Sep 2026; SIF-169, SIF-174, SIF-177 not in tracker yet, no first portfolio published).

### Fails and fixes
| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Page would not open | Arthaya SIF-114 (Union MF) | unionmf.com navigation denied in browser pane | Needs Ashish: open https://www.unionmf.com/arthayasif once in the browser pane |
| 2 | Not checked this pass | Wealth Co, Edelweiss (SIF-122/161), workbook feeds | Pass was factsheet-only; morning run found no October workbooks | Will retry automatically next run |

### AMC by AMC (factsheet check)
| AMC | Newest factsheet | Action |
|---|---|---|
| quant | 31 Oct 2026 | loaded from factsheet (5 funds) |
| HSBC RedHex | Sep 2026 | nothing new |
| 360 ONE | Sep 2026 | nothing new |
| Invesco | Sep 2026 | nothing new |
| Tata | Sep 2026 | nothing new |
| Jio | none for Oct | nothing new |
| SBI | Sep 2026 | nothing new |
| Mirae | "October" file = 30 Sep data | nothing new |
| Franklin | Sep 2026 | nothing new |
| ITI | Sep 2026 | nothing new |
| ICICI | Sep 2026 (Oct notes only) | nothing new |
| Apex | "October" file = 30 Sep data | nothing new |
| Arudha | Sep 2026 | nothing new |
| Kotak | Sep 2026 | nothing new |
| Arthaya | blocked | skipped |
Industry AUM and Step 3g/3h checks: not run in this pass.


## 2026-11-05 08:02 Lisbon time
Result: nothing changed. facts.json was not touched (SIF-11 was already on 31 Oct 2026 from the Altiva October factsheet, loaded by an earlier session; the other 33 tracked funds stay on 30 Sep 2026). Target month is 31 Oct 2026.

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- None found. No October workbook exists at any AMC that could be opened (Altiva month list ends Sep; Jio, Invesco, SBI, ITI, Franklin, Mirae, WSIF, Tata, HSBC, quant, ICICI, Apex, Arudha and Kotak all still show 30 Sep as newest). Altiva published an October factsheet today (05 Nov) but only for the Hybrid fund SIF-11, which is already loaded. Retried automatically on the next firings.

### Data completeness
Up to date: 1 of 37 SIF funds (3%) have data as on 31 Oct 2026 (37 funds in the NAV feed; 34 tracked)
of which 0 from the full Excel portfolio and 1 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| 33 tracked funds (all except SIF-11) | 16 AMCs | 30 Sep 2026 | AMC has not published October yet; DynaSIF (SIF-55, 87, 143) and Arthaya (SIF-114) could not be opened today |
| SIF-169 Titanium Active Asset Allocator Long-Short Fund | Titanium / Tata | not in tracker yet | new fund, first portfolio (31 Oct) not out; Tata API lists nothing for October |
| SIF-174 MSIF Equity Long-Short Fund | Mahindra Manulife | not in tracker yet | new fund and AMC, no portfolio found; its SIF site is still to be located |
| SIF-177 Summit Active Asset Allocator Long-Short Fund | Summit / Invesco | not in tracker yet | new fund (appeared in the NAV feed), Invesco holdings page lists only 30 Sep, 31 Aug, 31 Jul files; first portfolio not out |

### Fails and fixes
| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Site would not open | Arthaya SIF-114 / Union MF | Browser pane refused unionmf.com (navigation denied) | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane; if it loads there, the next run reads it |
| 2 | Page blocked | DynaSIF / 360 ONE (SIF-55, 87, 143) | Cloudflare "Attention Required" 403 on two tries today (it opened fine yesterday) | Will retry automatically next run (no workaround attempted) |
| 3 | Fund not yet loadable | SIF-169 Titanium AAA | First portfolio for 31 Oct not out | Will retry automatically next run |
| 4 | Fund not yet loadable | SIF-174 MSIF Equity Long-Short (Mahindra Manulife) | New fund and AMC, no portfolio, SIF site not found yet | Will retry automatically next run |
| 5 | Fund not yet loadable | SIF-177 Summit Active Asset Allocator (Invesco) | New fund, no portfolio published | Will retry automatically next run |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | SIF-11, 122, 161 | 31 Oct (SIF-11, factsheet), 30 Sep (others) | 🟧 33% | yes | Sep 2026 (month list ends Sep) | Oct 2026, Hybrid fund only (SIF-11 already loaded) | nothing new | none |
| RedHex / HSBC | SIF-128 | 30 Sep 2026 | 🟥 0% | yes (filtered pages) | 30 Sep 2026 | as on Sep 2026 | nothing new | none |
| WSIF / Wealth Company | SIF-105, 111 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | none published | nothing new | none |
| Titanium / Tata | SIF-102, 29 | 30 Sep 2026 | 🟥 0% | yes (CMS API) | 30 Sep 2026 | 30 Sep 2026 | nothing new | none |
| Platinum / Mirae | SIF-136 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | not re-checked today | nothing new | none |
| Sapphire / Franklin | SIF-96 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | not re-checked today | nothing new | none |
| DynaSIF / 360 ONE | SIF-55, 87, 143 | 30 Sep 2026 | 🟥 0% | blocked (Cloudflare) | not checked | not checked | skipped: page blocked | none |
| Summit / Invesco | SIF-150 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | not re-checked today | nothing new | none |
| qsif / quant | SIF-3, 7, 25, 93, 117 | 30 Sep 2026 | 🟥 0% | yes (factsheet page) | Sep 2026 (not re-opened; published every two months) | Oct 2026 file = 30 Sep data | nothing new | none |
| Prism / Jio BlackRock | SIF-138 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 (Oct and Nov selections empty) | not re-checked today | nothing new | none |
| Diviniti / ITI | SIF-21 | 30 Sep 2026 | 🟥 0% | yes | Sep 2026 | not found beyond a generic link | nothing new | none |
| Magnum / SBI | SIF-13, 157 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | Sep 2026 | nothing new | none |
| iSIF / ICICI Prudential | SIF-34, 35, 124, 126 | 30 Sep 2026 | 🟥 0% | yes (loader) | 30 Sep 2026 | not re-checked today | nothing new | none |
| Apex / Aditya Birla | SIF-80, 154, 156 | 30 Sep 2026 | 🟥 0% | yes (loader) | 30 Sep 2026 | not re-checked today | nothing new | none |
| Arudha / Bandhan | SIF-40, 62 | 30 Sep 2026 | 🟥 0% | yes (loader) | 30 Sep 2026 (both funds now readable) | Apr 2026 newest on page | nothing new | none |
| Infinity / Kotak | SIF-146 | 30 Sep 2026 | 🟥 0% | yes (loader) | IHLSsept.xlsx, Sep 2026 | Sep 2026 | nothing new | none |
| Arthaya / Union MF | SIF-114 | 30 Sep 2026 | 🟥 0% | blocked | not checked | not checked | skipped: site would not open | none |

Industry AUM (AMFI): as on 30 Sep 2026 (report for October not due before mid-month)
Strategy-split check (Step 3g): not run today, no fund data changed
Key-details check (Step 3h): nothing written today; no fund loaded. Funds still waiting: all except those that already have scheme_details.

## 2026-11-04 12:12 Lisbon time
Result: nothing changed. facts.json was not touched (all 34 entries stay on 30 Sep 2026; target month is 31 Oct 2026 and none of the 17 AMCs has published October files yet). Full exhaustive pass today: every AMC page was opened and both the Excel list and the factsheet list were checked.

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- None found. No October workbook or factsheet exists at any AMC (typical: workbooks arrive 7-20 days into the month). The next firings retry automatically.

**NAV feed note (Ashish's question)**
- The daily NAV feed (site/data.json) was generated with data up to 3 Nov 2026. 30 funds show 3 Nov. Three funds are still on 2 Nov: qsif SIF-93 (Active Asset Allocator), iSIF SIF-124 (Active Asset Allocator) and Titanium SIF-169 (new fund). That is the AMC or AMFI not having published their 3 Nov NAV yet when the feed ran, not a tracker fault; they catch up in the next daily feed.

### Data completeness
Up to date: 0 of 36 SIF funds (0%) have data as on 31 Oct 2026 (34 of 36 are tracked, all on 30 Sep 2026)
of which 0 from the full Excel portfolio and 0 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| All 34 tracked funds | all 17 AMCs | 30 Sep 2026 | AMC has not published October yet (all pages opened and checked today), except Arthaya SIF-114 whose site is blocked |
| SIF-114 Arthaya Equity Long-Short Fund | Arthaya / Union MF | 30 Sep 2026 | page blocked in the browser pane, October could not be checked |
| SIF-169 Titanium Active Asset Allocator Long-Short Fund | Titanium / Tata | not in tracker yet | new fund, first portfolio (31 Oct) not out yet; Tata API lists nothing for October |
| SIF-174 MSIF Equity Long-Short Fund | Mahindra Manulife (new AMC) | not in tracker yet | new fund (NFO closed about 30 Sep 2026), first portfolio not out yet; AMC site to be located next run |

### Fails and fixes
| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Site would not open | Arthaya SIF-114 / Union MF | Browser pane refused unionmf.com again (navigation denied) | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane; if it loads there, the next run reads it |
| 2 | File links moved | DynaSIF / 360 ONE | Page opened fine today (no Cloudflare), but the files are now on x-docket.360.one (e.g. Dyna_Monthly_Portfolio_Sep_26_*.xls, Dyna_SIF_Factsheet_as_on_September_30_2026_*.pdf), not s3.ap-south-1.amazonaws.com; the old pattern in the run instructions finds nothing | Fixed in this run: read the page with the new x-docket.360.one pattern (newest Excel Sep 2026, newest factsheet 30 Sep 2026). Later runs use the same pattern |
| 3 | Fund not yet loadable | SIF-169 Titanium Active Asset Allocator | New fund, first portfolio for 31 Oct not out | Will retry automatically next run |
| 4 | Fund not yet loadable | SIF-174 MSIF Equity Long-Short (Mahindra Manulife) | New fund and new AMC, no portfolio published yet; its SIF site not found yet | Will retry automatically next run (look for the Mahindra Manulife SIF site / MPOWER SIF downloads once October files are due) |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | SIF-11, 122, 161 | 30 Sep 2026 | 🟥 0% | yes (portfolio and factsheet pages, month list ends Sep) | Sep 2026 | Sep 2026 | nothing new | none |
| RedHex / HSBC | SIF-128 | 30 Sep 2026 | 🟥 0% | yes (filtered pages) | 30 Sep 2026 | as on Sep 2026 | nothing new | none |
| WSIF / Wealth Company | SIF-105, 111 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | none published | nothing new | none |
| Titanium / Tata | SIF-102, 29 | 30 Sep 2026 | 🟥 0% | yes (CMS API) | 30 Sep 2026 | 30 Sep 2026 | nothing new | none |
| Platinum / Mirae | SIF-136 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | file "October 2026" = 30 Sep data | nothing new | none |
| Sapphire / Franklin | SIF-96 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | not re-checked (workbook is the source) | nothing new | none |
| DynaSIF / 360 ONE | SIF-55, 87, 143 | 30 Sep 2026 | 🟥 0% | yes (new x-docket.360.one links) | Sep 2026 (Dyna_Monthly_Portfolio_Sep_26) | 30 Sep 2026 | nothing new | none |
| Summit / Invesco | SIF-150 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | Sep 2026 | nothing new | none |
| qsif / quant | SIF-3, 7, 25, 93, 117 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 (next due Nov) | "October 2026" = 30 Sep data | nothing new | none |
| Prism / Jio BlackRock | SIF-138 | 30 Sep 2026 | 🟥 0% | yes (October selected: empty) | Sep 2026 | Sep 2026 | nothing new | none |
| Diviniti / ITI | SIF-21 | 30 Sep 2026 | 🟥 0% | yes | Sep 2026 | Sep 2026 | nothing new | none |
| Magnum / SBI | SIF-13, 157 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | Sep 2026 | nothing new | none |
| iSIF / ICICI Prudential | SIF-34, 35, 124, 126 | 30 Sep 2026 | 🟥 0% | yes (loader ran) | 30 Sep 2026 | Sep 2026 | nothing new | none |
| Apex / Aditya Birla | SIF-80, 154, 156 | 30 Sep 2026 | 🟥 0% | yes (loader ran) | 30 Sep 2026 | file "October 2026" = 30 Sep data | nothing new | none |
| Arudha / Bandhan | SIF-40, 62 | 30 Sep 2026 | 🟥 0% | yes (loader ran; both funds now read Sep workbooks, the earlier Equity 404 is gone) | 30 Sep 2026 | Sep 2026 | nothing new | none |
| Infinity / Kotak | SIF-146 | 30 Sep 2026 | 🟥 0% | yes (no captcha; loader ran) | IHLSsept.xlsx (30 Sep) | Sep 2026 | nothing new | none |
| Arthaya / Union MF | SIF-114 | 30 Sep 2026 | 🟥 0% | blocked | not checked | not checked | skipped: site refused | none |
| Mahindra Manulife (new AMC) | SIF-174 (not tracked yet) | not in tracker yet | 🟥 0% | not located (web search only) | none yet | none yet | skipped: first portfolio not out | none |

Industry AUM (AMFI): as on 30 Sep 2026
Strategy-split check (Step 3g): not run today (no October data and no split change to apply); sweep found no Mutual fund units lines, no old labels in SIF-11/146/80, no null risk bands. SIF-114 still shows unhedged_pending (no reader yet).

## 2026-11-03 08:40 Lisbon time
Result: nothing changed. facts.json was not touched (all 34 entries stay on 30 Sep 2026; target month is 31 Oct 2026 and no checked AMC has published October yet).

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- None found. October files are not out at the AMCs checked; the next firings retry automatically.

### Data completeness
Up to date: 0 of 36 SIF funds (0%) have data as on 31 Oct 2026 (34 of 36 are tracked, all on 30 Sep 2026)
of which 0 from the full Excel portfolio and 0 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| All 34 tracked funds | all AMCs | 30 Sep 2026 | AMC has not published October yet (checked 11 AMCs, see below); other AMCs not re-opened this run |
| SIF-169 Titanium Active Asset Allocator Long-Short Fund | Titanium / Tata | not in tracker yet | new fund, first portfolio (31 Oct) not out yet |
| SIF-174 MSIF Equity Long-Short Fund | unidentified AMC | not in tracker yet | new fund seen in the NAV feed, no data yet; AMC site to be found next run |

### Fails and fixes
| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Page blocked | DynaSIF / 360 ONE | Cloudflare "Attention Required" page | Will retry automatically next run |
| 2 | Site would not open | Arthaya SIF-114 / Union MF | Browser pane refused unionmf.com | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane |
| 3 | New fund without data | SIF-174 MSIF Equity Long-Short Fund | In the NAV feed, no facts entry, AMC not identified yet | Will retry automatically next run |
| 4 | Not re-opened | Altiva, Franklin, Invesco, quant, Jio, SBI, Mirae, Kotak | Run limited to AMCs most likely to publish first | Will retry automatically next run |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | SIF-11, 122, 161 | 30 Sep 2026 | 🟥 0% | not re-opened | - | - | not checked | none |
| RedHex / HSBC | SIF-128 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | - | nothing new | none |
| WSIF / Wealth Co | SIF-105, 111 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | n/a | nothing new | none |
| Titanium / Tata | SIF-29, 102 | 30 Sep 2026 | 🟥 0% | yes (API) | 30 Sep 2026 | 30 Sep 2026 | nothing new | none |
| Platinum / Mirae | SIF-136 | 30 Sep 2026 | 🟥 0% | not re-opened | - | - | not checked | none |
| Sapphire / Franklin | SIF-96 | 30 Sep 2026 | 🟥 0% | not re-opened | - | - | not checked | none |
| DynaSIF / 360 ONE | SIF-55, 87, 143 | 30 Sep 2026 | 🟥 0% | blocked (Cloudflare) | - | - | skipped: blocked | none |
| Summit / Invesco | SIF-150 | 30 Sep 2026 | 🟥 0% | not re-opened | - | - | not checked | none |
| qsif / quant | SIF-3, 7, 25, 93, 117 | 30 Sep 2026 | 🟥 0% | not re-opened | - | - | not checked | none |
| Prism / Jio BlackRock | SIF-138 | 30 Sep 2026 | 🟥 0% | not re-opened | - | - | not checked | none |
| Diviniti / ITI | SIF-21 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | - | nothing new | none |
| Magnum / SBI | SIF-13, 157 | 30 Sep 2026 | 🟥 0% | not re-opened | - | - | not checked | none |
| iSIF / ICICI Prudential | SIF-34, 35, 124, 126 | 30 Sep 2026 | 🟥 0% | yes (loader) | 30 Sep 2026 | - | nothing new | none |
| Apex / Aditya Birla | SIF-80, 154, 156 | 30 Sep 2026 | 🟥 0% | yes (loader) | 30 Sep 2026 | - | nothing new | none |
| Arudha / Bandhan | SIF-40, 62 | 30 Sep 2026 | 🟥 0% | yes | not read (links listed only) | Aug 2026 newest listed | nothing new seen | none |
| Infinity / Kotak | SIF-146 | 30 Sep 2026 | 🟥 0% | not re-opened | - | - | not checked | none |
| Arthaya / Union MF | SIF-114 | 30 Sep 2026 | 🟥 0% | blocked (navigation failed) | - | - | skipped: site would not open | none |

Industry AUM (AMFI): as on 30 Sep 2026
Strategy-split check (Step 3g): not run today (no new month loaded).

## 2026-11-02 08:00 Lisbon time
Result: nothing changed. facts.json was not touched (all 34 entries stay on 30 Sep 2026; target month is now 31 Oct 2026 and it is only 2 Nov).

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- None. Only Tata (portfolio and factsheet API) and HSBC RedHex (filtered portfolio and factsheet lists) were re-checked today: both newest files are still 30 Sep 2026. The other AMCs were not re-opened this early in the month; they are checked on the later firings.

### Data completeness
Up to date: 0 of 36 SIF funds (0%) have data as on 31 Oct 2026
of which 0 from the full Excel portfolio and 0 from the factsheet only.

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| All 34 tracked funds | all 17 AMCs | 30 Sep 2026 | AMC has not published yet (month just ended) |
| SIF-169 Titanium Active Asset Allocator Long-Short | Tata | not in tracker yet | New fund, first portfolio (31 Oct 2026) not out yet |
| SIF-174 MSIF Equity Long-Short Fund | Mahindra Manulife | not in tracker yet | New AMC (first NAV 26 Oct 2026); first portfolio not out yet |

### Fails and fixes
| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Fund missing from tracker | Mahindra Manulife SIF-174 | New AMC; no portfolio or factsheet found yet | Will retry automatically next run (find its SIF site and add the fund once a file exists) |
| 2 | Fund missing from tracker | Tata SIF-169 | First portfolio is for 31 Oct, Tata API shows nothing newer than 30 Sep | Will retry automatically next run |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | SIF-11, 122, 161 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| RedHex / HSBC | SIF-128 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | 30 Sep 2026 | nothing new | none |
| WSIF / Wealth Company | SIF-105, 111 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| Titanium / Tata | SIF-29, 102 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | 30 Sep 2026 | nothing new | none |
| Platinum / Mirae | SIF-136 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| Sapphire / Franklin | SIF-96 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| DynaSIF / 360 ONE | SIF-55, 87, 143 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| Summit / Invesco | SIF-150 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| qsif / quant | SIF-3, 7, 25, 93, 117 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| Prism / Jio BlackRock | SIF-138 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| Diviniti / ITI | SIF-21 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| Magnum / SBI | SIF-13, 157 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| iSIF / ICICI Pru | SIF-34, 35, 124, 126 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| Apex / Aditya Birla | SIF-80, 154, 156 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| Arudha / Bandhan | SIF-40, 62 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| Infinity / Kotak | SIF-146 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |
| Arthaya / Union | SIF-114 | 30 Sep 2026 | 🟥 0% | not re-opened (1-2 Nov, October files not expected yet) | not checked | not checked | nothing new | none |

Industry AUM (AMFI): as on 30 Sep 2026
Strategy-split check (Step 3g): not run today (nothing loaded; remaining AMCs to be checked on later runs).

## 2026-11-01 09:52 Lisbon time
Result: nothing changed. facts.json was not touched (all 34 entries stay on 30 Sep 2026; the new target month is 31 Oct 2026 and it is 1 Nov, so no AMC can have published October yet).

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- None

### Data completeness
Up to date: 0 of 36 SIF funds (0%) have data as on 31 Oct 2026
of which 0 from the full Excel portfolio and 0 from the factsheet only (all 34 tracked funds are on 30 Sep 2026, one month behind the new target).

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| All 34 tracked funds | all 17 AMCs | 30 Sep 2026 | AMC has not published yet (month just ended) |
| SIF-169 Titanium Active Asset Allocator Long-Short | Tata | not in tracker yet | New fund, first portfolio (31 Oct 2026) not out yet |
| SIF-174 MSIF Equity Long-Short Fund | Mahindra Manulife | not in tracker yet | New AMC seen in the NAV feed (first NAV 26 Oct 2026); first portfolio not out yet, site not looked at yet |

### Fails and fixes
| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Fund missing from tracker | Mahindra Manulife SIF-174 | New AMC; no portfolio or factsheet published yet | Will retry automatically next run (find its SIF site and add the fund once a file exists) |
| 2 | Fund missing from tracker | Tata SIF-169 | First portfolio is for 31 Oct, not out yet | Will retry automatically next run |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | SIF-11, 122, 161 | 30 Sep 2026 | 🟥 0% | not opened (1 Nov, October data cannot be out yet) | - | - | nothing new | none |
| RedHex / HSBC | SIF-128 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | not checked | nothing new | none |
| WSIF / Wealth Company | SIF-105, 111 | 30 Sep 2026 | 🟥 0% | yes | 30 Sep 2026 | none exists | nothing new | none |
| Titanium / Tata | SIF-29, 102 (SIF-169 not in tracker yet) | 30 Sep 2026 | 🟥 0% | yes (API) | 30 Sep 2026 | not checked | nothing new | none |
| Platinum / Mirae | SIF-136 | 30 Sep 2026 | 🟥 0% | not opened (1 Nov, October data cannot be out yet) | - | - | nothing new | none |
| Sapphire / Franklin | SIF-96 | 30 Sep 2026 | 🟥 0% | not opened (1 Nov, October data cannot be out yet) | - | - | nothing new | none |
| DynaSIF / 360 ONE | SIF-55, 87, 143 | 30 Sep 2026 | 🟥 0% | yes | not checked (Excel is bimonthly) | 30 Sep 2026 | nothing new | none |
| Summit / Invesco | SIF-150 | 30 Sep 2026 | 🟥 0% | not opened (1 Nov, October data cannot be out yet) | - | - | nothing new | none |
| qsif / quant | SIF-3, 7, 25, 93, 117 | 30 Sep 2026 | 🟥 0% | not opened (1 Nov, October data cannot be out yet) | - | - | nothing new | none |
| Prism / Jio BlackRock | SIF-138 | 30 Sep 2026 | 🟥 0% | not opened (1 Nov, October data cannot be out yet) | - | - | nothing new | none |
| Diviniti / ITI | SIF-21 | 30 Sep 2026 | 🟥 0% | not opened (1 Nov, October data cannot be out yet) | - | - | nothing new | none |
| Magnum / SBI | SIF-13, 157 | 30 Sep 2026 | 🟥 0% | not opened (1 Nov, October data cannot be out yet) | - | - | nothing new | none |
| iSIF / ICICI Prudential | SIF-34, 35, 124, 126 | 30 Sep 2026 | 🟥 0% | not opened (1 Nov, October data cannot be out yet) | - | - | nothing new | none |
| Apex / Aditya Birla | SIF-80, 154, 156 | 30 Sep 2026 | 🟥 0% | not opened (1 Nov, October data cannot be out yet) | - | - | nothing new | none |
| Arudha / Bandhan | SIF-40, 62 | 30 Sep 2026 | 🟥 0% | not opened (1 Nov, October data cannot be out yet) | - | - | nothing new | none |
| Infinity / Kotak | SIF-146 | 30 Sep 2026 | 🟥 0% | not opened (1 Nov, October data cannot be out yet) | - | - | nothing new | none |
| Arthaya / Union MF | SIF-114 | 30 Sep 2026 | 🟥 0% | not opened (1 Nov, October data cannot be out yet) | - | - | nothing new | none |

Industry AUM (AMFI): as on 30 Sep 2026
Strategy-split check (Step 3g): not run today (no new data month to check).

## 2026-10-30 07:54 Lisbon time
Result: nothing changed. facts.json was not touched (all 34 entries already on 30 Sep 2026, all from the Excel portfolio; no fund below the target month).

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- Titanium Active Asset Allocator SIF-169: first NAV 16 Oct 2026, first portfolio is for 31 Oct 2026, which cannot be out before month end; added automatically once Tata publishes it.
- MSIF Equity Long-Short Fund SIF-174 (Mahindra Manulife, a new AMC): first NAV 26 Oct 2026, no portfolio or factsheet expected yet; will be added automatically once one is published.

### Data completeness
Target date: 30 Sep 2026.
Up to date: 34 of 36 SIF funds (94%) have data as on 30 Sep 2026
of which 34 from the full Excel portfolio and 0 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| SIF-169 Titanium Active Asset Allocator Long-Short Fund | Titanium (Tata) | not in tracker yet | new fund, first portfolio not out yet (due for 31 Oct 2026) |
| SIF-174 MSIF Equity Long-Short Fund | Mahindra Manulife (new AMC) | not in tracker yet | new fund, first portfolio not out yet; new AMC, site not readable yet |

### Fails and fixes
No fails today.

### AMC by AMC
Shortcut used: every AMC with funds in the tracker is already at the target month from the Excel, so no AMC site was re-opened. Arthaya, Kotak and the two new funds below were not re-opened either; nothing in the tracker is below the target month.

| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva (Edelweiss) | 3 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| RedHex (HSBC) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| WSIF (The Wealth Company) | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Titanium (Tata) | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Platinum (Mirae) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Sapphire (Franklin) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| DynaSIF (360 ONE) | 3 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Summit (Invesco) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| qsif (quant) | 5 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Prism (Jio BlackRock) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Diviniti (ITI) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Magnum (SBI) | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| iSIF (ICICI Prudential) | 4 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Apex (Aditya Birla) | 3 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Arudha (Bandhan) | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Infinity (Kotak) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Arthaya (Union) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |

Industry AUM (AMFI): as on 30 Sep 2026 (refreshed 30 Oct 2026)
Strategy-split check (Step 3g): not run today (all AMCs already at the target month; no new data to classify).

## 2026-10-29 07:53 Lisbon time
Result: nothing changed. facts.json was not touched (all 34 entries already on 30 Sep 2026, all from the Excel portfolio; no fund below the target month).

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- Titanium Active Asset Allocator SIF-169: first NAV 16 Oct 2026, first monthly portfolio is for 31 Oct 2026; added automatically once Tata publishes it.
- MSIF Equity Long-Short Fund SIF-174 (Mahindra Manulife, a new AMC): first NAV 26 Oct 2026, no portfolio or factsheet expected yet; will be added automatically once one is published.

### Data completeness
Target date: 30 Sep 2026 (the 31 Oct 2026 portfolios cannot be out before month end).
Up to date: 34 of 36 SIF funds (94%) have data as on 30 Sep 2026
of which 34 from the full Excel portfolio and 0 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| SIF-169 Titanium Active Asset Allocator Long-Short Fund | Titanium (Tata) | not in tracker yet | new fund, first portfolio not out yet (due for 31 Oct 2026) |
| SIF-174 MSIF Equity Long-Short Fund | Mahindra Manulife (new AMC) | not in tracker yet | new fund, first portfolio not out yet; new AMC, site not readable yet |

### Fails and fixes
No fails today.

### AMC by AMC
Shortcut used: every AMC with funds in the tracker is already at the target month from the Excel, so no AMC site was re-opened.

| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva (Edelweiss) | 3 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| RedHex (HSBC) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| WSIF (The Wealth Company) | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Titanium (Tata) | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Platinum (Mirae) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Sapphire (Franklin) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| DynaSIF (360 ONE) | 3 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Summit (Invesco) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| qsif (quant) | 5 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Prism (Jio BlackRock) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Diviniti (ITI) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Magnum (SBI) | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| iSIF (ICICI Prudential) | 4 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Apex (Aditya Birla) | 3 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Arudha (Bandhan) | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Infinity (Kotak) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Arthaya (Union) | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |

Industry AUM (AMFI): as on 30 Sep 2026
Strategy-split check (Step 3g): not run today (all AMCs already at the target month; no new data to classify).

## 2026-10-28 09:00 Lisbon time
Result: nothing changed. facts.json was not touched (all 34 entries already on 30 Sep 2026, all from the Excel portfolio; no fund below the target month).

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- Titanium Active Asset Allocator SIF-169: first NAV 16 Oct 2026, first monthly portfolio is for 31 Oct 2026; added automatically once Tata publishes it.
- MSIF Equity Long-Short Fund SIF-174 (Mahindra Manulife, a new AMC): first NAV 26 Oct 2026, no portfolio or factsheet expected yet; will be added when its first file appears.

### Data completeness
Up to date: 34 of 36 SIF funds (94%) have data as on 30 Sep 2026
of which 34 from the full Excel portfolio and 0 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| Titanium Active Asset Allocator Long-Short Fund (SIF-169) | Titanium / Tata | not in tracker yet | new fund, first portfolio not out yet |
| MSIF Equity Long-Short Fund (SIF-174) | Mahindra Manulife | not in tracker yet | new AMC, no portfolio published yet (first NAV 26 Oct) |

### Fails and fixes
| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Nothing failed | - | - | - |
| 2 | New AMC not yet tracked | Mahindra Manulife, SIF-174 | Launched this week; no files yet | Will retry automatically next run (find its SIF site and add it once a portfolio or factsheet exists) |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | SIF-11, 122, 161 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| RedHex / HSBC | SIF-128 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| WSIF / Wealth Company | SIF-105, 111 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Titanium / Tata | SIF-29, 102 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Platinum / Mirae | SIF-136 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Sapphire / Franklin | SIF-96 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| DynaSIF / 360 ONE | SIF-55, 87, 143 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Summit / Invesco | SIF-150 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| qsif / quant | SIF-3, 7, 25, 93, 117 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Prism / Jio BlackRock | SIF-138 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Diviniti / ITI | SIF-21 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Magnum / SBI | SIF-13, 157 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| iSIF / ICICI Prudential | SIF-34, 35, 124, 126 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Apex / Aditya Birla | SIF-80, 154, 156 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Arudha / Bandhan | SIF-40, 62 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Infinity / Kotak | SIF-146 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Arthaya / Union MF | SIF-114 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Mahindra Manulife | SIF-174 | not in tracker yet | 🟥 0% | not opened (no files expected yet) | - | - | skipped: fund launched 26 Oct | none |

Industry AUM (AMFI): as on 2026-09-30
Strategy-split check (Step 3g): no AMC re-checked this run (all funds at target month, AMCs not re-opened).

## 2026-10-27 09:00 Lisbon time
Result: nothing changed. facts.json was not touched (all 34 entries already on 30 Sep 2026; sweeps for Steps 3c, 3f and 3g found no fixes needed).

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- Titanium Active Asset Allocator SIF-169: first NAV 16 Oct 2026, first monthly portfolio is for 31 Oct 2026; added automatically once Tata publishes it.
- MSIF Equity Long-Short Fund SIF-174 (Mahindra Manulife, a new AMC): first NAV 26 Oct 2026, no portfolio or factsheet yet; will be added when its first file appears.

### Data completeness
Up to date: 34 of 36 SIF funds (94%) have data as on 30 Sep 2026
of which 34 from the full Excel portfolio and 0 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| Titanium Active Asset Allocator Long-Short Fund (SIF-169) | Titanium / Tata | not in tracker yet | new fund, first portfolio not out yet |
| MSIF Equity Long-Short Fund (SIF-174) | Mahindra Manulife | not in tracker yet | new AMC, no portfolio published yet (first NAV 26 Oct) |

### Fails and fixes
| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Nothing failed | - | - | - |
| 2 | New AMC not yet tracked | Mahindra Manulife, SIF-174 | Launched this week; no files yet | Will retry automatically next run (find its SIF site and add it once a portfolio or factsheet exists) |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | SIF-11, 122, 161 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| RedHex / HSBC | SIF-128 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| WSIF / Wealth Company | SIF-105, 111 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Titanium / Tata | SIF-29, 102 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Platinum / Mirae | SIF-136 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Sapphire / Franklin | SIF-96 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| DynaSIF / 360 ONE | SIF-55, 87, 143 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Summit / Invesco | SIF-150 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| qsif / quant | SIF-3, 7, 25, 93, 117 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Prism / Jio BlackRock | SIF-138 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Diviniti / ITI | SIF-21 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Magnum / SBI | SIF-13, 157 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| iSIF / ICICI Prudential | SIF-34, 35, 124, 126 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Apex / Aditya Birla | SIF-80, 154, 156 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Arudha / Bandhan | SIF-40, 62 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Infinity / Kotak | SIF-146 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Arthaya / Union MF | SIF-114 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new (not re-opened) | none |
| Mahindra Manulife | SIF-174 | not in tracker yet | 🟥 0% | not opened (no files expected yet) | - | - | skipped: fund launched 26 Oct | none |

Industry AUM (AMFI): as on 2026-09-30
Strategy-split check (Step 3g): no AMC re-checked this run (all funds at target month, AMCs not re-opened); sweep of facts.json found no Mutual fund units line, no old labels on SIF-11/146/80.

## 2026-10-26 07:55 Lisbon time
Result: nothing changed. facts.json was not touched (all 34 entries already on 30 Sep 2026; sweeps for Steps 3c, 3f and 3g found no fixes needed; no Mutual fund units line anywhere; SIF-11, 146 and 80 carry the AMC-style split).

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- Titanium SIF-169 (new fund, in the NAV feed but not in facts.json): first monthly portfolio is for 31 Oct 2026, so it will be added from November automatically.

### Data completeness
Up to date: 34 of 35 SIF funds (97%) have data as on 30 Sep 2026
of which 34 from the full Excel portfolio and 0 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| SIF-169 Titanium Active Asset Allocator Long-Short Fund | Titanium / Tata | not in tracker yet | new fund, first portfolio not out yet (due for 31 Oct 2026) |

### Fails and fixes
No fails today.

### AMC by AMC
No AMC was re-opened: every fund is already on the target month (30 Sep 2026) loaded from the Excel, and October month-end data cannot have been published on 26 Oct.

| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | SIF-11, 122, 161 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| RedHex / HSBC | SIF-128 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| WSIF / Wealth Company | SIF-105, 111 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| Titanium / Tata | SIF-102, 29 (SIF-169 new) | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| Platinum / Mirae | SIF-136 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| Sapphire / Franklin | SIF-96 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| DynaSIF / 360 ONE | SIF-55, 87, 143 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| Summit / Invesco | SIF-150 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| qsif / quant | SIF-3, 7, 25, 93, 117 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| Prism / Jio BlackRock | SIF-138 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| Diviniti / ITI | SIF-21 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| Magnum / SBI | SIF-13, 157 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| iSIF / ICICI Pru | SIF-34, 35, 124, 126 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| Apex / Aditya Birla | SIF-80, 154, 156 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| Arudha / Bandhan | SIF-40, 62 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| Infinity / Kotak | SIF-146 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |
| Arthaya / Union | SIF-114 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded earlier) | not checked | nothing new | none |

Industry AUM (AMFI): as on 30 Sep 2026
Strategy-split check (Step 3g): not run today; no AMC could have a newer month yet, existing splits unchanged (SIF-13 already labelled Arbitrage and covered calls).

## 2026-10-25 11:54 Lisbon time
Result: nothing changed. facts.json was not touched (all 34 entries already on 30 Sep 2026; sweep found no fixes needed).

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- Arthaya SIF-114: unionmf.com/arthayasif still would not open in the browser pane (tab never loaded), so no official workbook was read. Retried every run.
- Titanium Active Asset Allocator SIF-169: new fund, first portfolio is for 31 Oct 2026; will be added in November.

### Data completeness
Up to date: 34 of 35 SIF funds (97%) have data as on 30 Sep 2026
of which 33 from the full Excel portfolio and 1 from factsheet/third-party sources only (Arthaya SIF-114; full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| Titanium Active Asset Allocator Long-Short Fund (SIF-169) | Tata | not in tracker yet | new fund, first portfolio not out yet (due for 31 Oct 2026) |

### Fails and fixes
| # | What failed | AMC / fund | Why, in plain words | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Site would not open | Arthaya SIF-114 (Union MF) | unionmf.com/arthayasif fails to load in the browser pane (same as 19, 23, 24 Oct) | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane; if it loads there, the next run reads it |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | SIF-11, 122, 161 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| RedHex / HSBC | SIF-128 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| WSIF / Wealth Company | SIF-105, 111 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Titanium / Tata | SIF-102, 29 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Platinum / Mirae | SIF-136 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Sapphire / Franklin | SIF-96 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| DynaSIF / 360 ONE | SIF-55, 87, 143 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Summit / Invesco | SIF-150 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| qsif / quant | SIF-3, 7, 25, 93, 117 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Prism / Jio BlackRock | SIF-138 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Diviniti / ITI | SIF-21 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Magnum / SBI | SIF-13, 157 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| iSIF / ICICI Pru | SIF-34, 35, 124, 126 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Apex / Aditya Birla | SIF-80, 154, 156 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Arudha / Bandhan | SIF-40, 62 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Infinity / Kotak | SIF-146 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Arthaya / Union MF | SIF-114 | 30 Sep 2026 (third-party/factsheet figures) | 🟧 50% | blocked (navigation failed) | not read | not read | skipped: site would not open | none |

Industry AUM (AMFI): as on 2026-09-30
Strategy-split check (Step 3g): not run today, nothing loaded; AMCs still to check (RedHex, Arudha, Apex 154/156, Arthaya, Altiva 122/161) carry over.

## 2026-10-24 10:25 Lisbon time
Result: nothing changed. facts.json was not touched (all 34 entries already on 30 Sep 2026; no sweep fixes needed).

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- Arthaya SIF-114: unionmf.com/arthayasif still would not open in the browser pane, so no official workbook was read. Retried every run.
- Titanium Active Asset Allocator SIF-169: new fund, first portfolio is for 31 Oct 2026; will be added in November.

### Data completeness
Up to date: 34 of 35 SIF funds (97%) have data as on 30 Sep 2026
of which 33 from the full Excel portfolio and 1 from factsheet/third-party sources only (Arthaya SIF-114; full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| Titanium Active Asset Allocator Long-Short Fund (SIF-169) | Tata | not in tracker yet | new fund, first portfolio not out yet (due for 31 Oct 2026) |

### Fails and fixes
| # | What failed | AMC / fund | Why, in plain words | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Site would not open | Arthaya SIF-114 (Union MF) | unionmf.com/arthayasif fails to load in the browser pane (same as 19, 23 Oct) | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane; if it loads there, the next run reads it |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | SIF-11, 122, 161 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| RedHex / HSBC | SIF-128 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| WSIF / Wealth Company | SIF-105, 111 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Titanium / Tata | SIF-102, 29 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Platinum / Mirae | SIF-136 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Sapphire / Franklin | SIF-96 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| DynaSIF / 360 ONE | SIF-55, 87, 143 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Summit / Invesco | SIF-150 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| qsif / quant | SIF-3, 7, 25, 93, 117 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Prism / Jio BlackRock | SIF-138 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Diviniti / ITI | SIF-21 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Magnum / SBI | SIF-13, 157 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| iSIF / ICICI Pru | SIF-34, 35, 124, 126 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Apex / Aditya Birla | SIF-80, 154, 156 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Arudha / Bandhan | SIF-40, 62 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Infinity / Kotak | SIF-146 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Arthaya / Union MF | SIF-114 | 30 Sep 2026 (third-party/factsheet figures) | 🟧 50% | blocked (navigation failed) | not read | not read | skipped: site would not open | none |

Industry AUM (AMFI): as on 2026-09-30
Strategy-split check (Step 3g): not run today, nothing loaded; AMCs still to check (RedHex, Arudha, Apex 154/156, Arthaya, Altiva 122/161) carry over.

## 2026-10-23 07:54 Lisbon time
Result: nothing changed. facts.json was not touched (all 34 entries already on 30 Sep 2026; sweeps found nothing to fix).

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- Arthaya SIF-114: the Union MF site would not open in the browser pane, so the official workbook could not be read. Its figures stay as loaded. It is retried every run.
- Titanium Active Asset Allocator SIF-169: new fund, first NAV 16 Oct 2026, first portfolio is for 31 Oct 2026. Will be added in November.

### Data completeness
Up to date: 34 of 35 SIF funds (97%) have data as on 30 Sep 2026
of which 33 from the full Excel portfolio and 1 from the factsheet / third-party sources only (Arthaya SIF-114; full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| Titanium Active Asset Allocator Long-Short Fund (SIF-169) | Tata | not in tracker yet | new fund, first portfolio not out yet (due for 31 Oct 2026) |

### Fails and fixes
| # | What failed | AMC / fund | Why, in plain words | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Site would not open | Arthaya SIF-114 (Union MF) | unionmf.com/arthayasif fails to load in the browser pane (same as 19 Oct) | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane; if it loads there, the next run reads it |
| 2 | Unhedged card pending | Arthaya SIF-114 | no official workbook read yet, card shows "available soon" | Will retry automatically next run |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva (Edelweiss) | SIF-11, 122, 161 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| RedHex (HSBC) | SIF-128 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| WSIF (Wealth Co) | SIF-105, 111 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Titanium (Tata) | SIF-29, 102 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Platinum (Mirae) | SIF-136 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Sapphire (Franklin) | SIF-96 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| DynaSIF (360 ONE) | SIF-55, 87, 143 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Summit (Invesco) | SIF-150 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| qsif (quant) | SIF-3, 7, 25, 93, 117 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Prism (Jio BlackRock) | SIF-138 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Diviniti (ITI) | SIF-21 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Magnum (SBI) | SIF-13, 157 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| iSIF (ICICI Pru) | SIF-34, 35, 124, 126 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Apex (Aditya Birla) | SIF-80, 154, 156 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Arudha (Bandhan) | SIF-40, 62 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Infinity (Kotak) | SIF-146 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | n/a | nothing new | none |
| Arthaya (Union MF) | SIF-114 | 30 Sep 2026 | 🟧 50% | error (page would not load in the browser pane) | not seen | not seen | skipped: site would not open; fund stays on SIFPrime/SIF360 figures | none |

Industry AUM (AMFI): as on 2026-09-30
Strategy-split check (Step 3g): not run today (no new month published, all AMCs already at the target month); sweep of facts.json found no "Mutual fund units" line, no null risk band, the three hybrids (SIF-11, 146, 80) already in AMC-style split, all splits add to 98-102. Pending checks from 3g(5) remain for the next month's data.

## 2026-10-22 16:16 Lisbon time (catch-up)
Result: 6 funds' splits improved (strategy split work, Step 3g). facts.json committed and verified (34 funds, no risk band lost).

**Updates found and made**
- Platinum Hybrid (SIF-136): Collar strategy 39.09, Fixed income 34.89, Arbitrage 23.76, Special situations 2.26 (Mirae factsheet, 30 Sep 2026).
- Prism Hybrid (SIF-138): Collar strategy 30.8, Fixed income 51.53, Merger arbitrage 9.8, REITs and InvITs 6.37, Special situations 1.5 (Jio factsheet commentary, approximate).
- Magnum Hybrid (SIF-13): label now "Arbitrage and covered calls" (SBI objective).
- RedHex Hybrid (SIF-128): REITs 11.72 and InvITs 14.13 now shown separately (HSBC factsheet).

**Updates available but not made, or only partly made**
- Arthaya (SIF-114): Union MF site would not open in the browser pane; will retry next run.
- Titanium SIF-169: first portfolio is for 31 Oct 2026, not out yet.

### Strategy-split check (Step 3g), 22 Oct 2026
| AMC | Funds | Finding | Action |
|---|---|---|---|
| Mirae | SIF-136 | collar, arbitrage, special situations stated | split changed |
| Jio | SIF-138 | collar 30.8, merger arbitrage 9.8 stated in commentary | split changed |
| SBI | SIF-13 | objective says covered calls and arbitrage; no numeric buckets | label changed |
| HSBC | SIF-128 | debt, equity arbitrage, REITs, InvITs stated | REITs and InvITs split apart |
| Edelweiss | SIF-11, 122, 161 | hybrid matches 38/41/12/5/2; equity funds state no buckets | none |
| Apex | SIF-80, 154, 156 | factsheet covers the hybrid only | none |
| Arudha | SIF-40, 62 | asset class and rating only | none |
| iSIF, Tata, 360 ONE, qsif, ITI | 18 funds | no strategy buckets in factsheet | none |
| Union | SIF-114 | site would not open | retry next run |

### Fails and fixes
| # | What failed | AMC / fund | Why | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Union MF site would not open | Arthaya SIF-114 | Browser pane navigation to unionmf.com is denied | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane; if it loads there, the next run reads it |


## 2026-10-22 11:05 Lisbon time
Result: 3 funds updated (AMC-style split applied). facts.json committed and verified (34 funds, no risk band lost, no "Mutual fund units" line).

**Updates found and made**
- Altiva Hybrid (SIF-11), Infinity Hybrid (SIF-146), Apex Hybrid (SIF-80): split now shown the AMC way, with "Arbitrage and covered calls" and "Special situations" (data as on 30 Sep 2026, Step 3f).

**Updates available but not made, or only partly made**
- Titanium Active Asset Allocator Long-Short Fund (SIF-169): first portfolio is for 31 Oct 2026, not out yet; will be added from November.

### Data completeness
Up to date: 34 of 35 SIF funds (97%) have data as on 30 Sep 2026
of which 34 from the full Excel portfolio and 0 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| Titanium Active Asset Allocator Long-Short (SIF-169) | Titanium / Tata | not in tracker yet | new fund, first portfolio not out yet |

### Fails and fixes
No fails today.

### AMC by AMC
All 17 AMCs: 🟩 100% (all funds on 30 Sep 2026 from the Excel; not re-opened, already at target month). Tata is 🟩 100% for its two funds; SIF-169 is new and has no portfolio yet. Movement today: none, except the hybrid split display for Altiva, Infinity and Apex.
Industry AUM (AMFI): as on 2026-09-30

### Funds changed
| Fund | Source | as_of | Size | Risk band | Unhedged | Other |
|---|---|---|---|---|---|---|
| SIF-11 Altiva Hybrid | Excel (unchanged) | 2026-09-30 | unchanged | unchanged | frozen | AMC-style split applied (38/41/12/5/2/1) |
| SIF-146 Infinity Hybrid | Excel (unchanged) | 2026-09-30 | unchanged | unchanged | frozen | AMC-style split applied |
| SIF-80 Apex Hybrid | Excel (unchanged) | 2026-09-30 | unchanged | unchanged | frozen | AMC-style split applied |

## 2026-10-21 08:50 Lisbon time
Result: nothing changed. facts.json not committed (no fund below the target month; sweep found nothing to fix).

**Updates found and made**
None

**Updates available but not made, or only partly made**
- Titanium Active Asset Allocator Long-Short Fund (SIF-169): first portfolio is for 31 Oct 2026, not out yet; will be added automatically from November.

### Data completeness
Up to date: 34 of 35 SIF funds (97%) have data as on 30 Sep 2026
of which 34 from the full Excel portfolio and 0 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| Titanium Active Asset Allocator Long-Short Fund (SIF-169) | Titanium / Tata | not in tracker yet | new fund, first portfolio not out yet (due 31 Oct 2026) |

### Fails and fixes
| # | What failed | AMC / fund | Why, in plain words | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Arthaya SIF-114 unhedged card still "available soon" (unhedged_pending) | Arthaya / Union MF | Loaded from fallback sources on 20 Oct; the AMC's own workbook was not re-read this run | Will retry automatically next run |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | SIF-11, 122, 161 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| RedHex / HSBC | SIF-128 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| WSIF / Wealth Company | SIF-105, 111 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Titanium / Tata | SIF-29, 102 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Platinum / Mirae | SIF-136 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Sapphire / Franklin | SIF-96 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| DynaSIF / 360 ONE | SIF-55, 87, 143 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Summit / Invesco | SIF-150 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| qsif / quant | SIF-3, 7, 25, 93, 117 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Prism / Jio BlackRock | SIF-138 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Diviniti / ITI | SIF-21 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Magnum / SBI | SIF-13, 157 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| iSIF / ICICI Prudential | SIF-34, 35, 124, 126 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Apex / Aditya Birla | SIF-80, 154, 156 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Arudha / Bandhan | SIF-40, 62 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Infinity / Kotak | SIF-146 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Arthaya / Union MF | SIF-114 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |

Industry AUM (AMFI): as on 2026-09-30

Sweep: no "Mutual fund units" lines, no missing risk bands, no missing zero-derivative notes.

## 2026-10-20 evening Lisbon time (manual)

- Action: SIF-114 Arthaya Equity Long-Short added from Union MF portfolio data via the fallback sources (as of 30 Sep 2026); unhedged derivatives shown as "available soon". Facts now cover 34 of 35 funds (97%).
- Tracker page: NFO cards, AMC logos (stored in repo, automatic by AMC), search bar, No-derivatives marker, Returns snapshot toggle, Previous / Home / Next fund navigation published.

## 2026-10-20 11:12 Lisbon time
Result: 1 fund updated. facts.json committed and verified (33 funds, none lost, no risk band lost).

**Updates found and made**
- Arudha Equity Long-Short Fund (SIF-62): now loaded from the full Excel portfolio, data as on 30 Sep 2026, size Rs 133.38 cr (replaces the factsheet-only figures; holdings 71, split Equity 75.93 / Fixed income 22.23 / REITs and InvITs 1.78, unhedged long 0.78 / short 7.98).

**Updates available but not made, or only partly made**
- Arthaya Equity Long-Short Fund (SIF-114): site would not open in the browser pane, so it is still not in the tracker.
- Titanium Active Asset Allocator Long-Short Fund (SIF-169): first portfolio is for 31 Oct 2026, not out yet.

### Data completeness
Up to date: 33 of 35 SIF funds (94%) have data as on 30 Sep 2026
of which 33 from the full Excel portfolio and 0 from the factsheet only (full portfolio still to come)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| Arthaya Equity Long-Short Fund (SIF-114) | Arthaya / Union MF | not in tracker yet | page blocked: unionmf.com would not open in the browser pane |
| Titanium Active Asset Allocator Long-Short Fund (SIF-169) | Titanium / Tata | not in tracker yet | new fund, first portfolio not out yet (due 31 Oct 2026) |

### Fails and fixes
| # | What failed | AMC / fund | Why, in plain words | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Site would not open | Arthaya SIF (Union MF), SIF-114 | Browser pane refused navigation to unionmf.com | Needs Ashish: open https://www.unionmf.com/arthayasif once in the Claude browser pane; if it loads there, the next run reads it |
| 2 | Hedge cross-check (Step 3e) not repeated for SIF-62 | Arudha SIF-62 | Card comes from the loader (long 0.78, short 7.98, 11 items); the AMC's printed non-hedging total was not compared this run | Will retry automatically next run |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | SIF-11, 122, 161 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| RedHex / HSBC | SIF-128 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| WSIF / Wealth Company | SIF-105, 111 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Titanium / Tata | SIF-102, 29 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Platinum / Mirae | SIF-136 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Sapphire / Franklin | SIF-96 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| DynaSIF / 360 ONE | SIF-55, 87, 143 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Summit / Invesco | SIF-150 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| qsif / quant | SIF-3, 7, 25, 93, 117 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Prism / Jio BlackRock | SIF-138 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Diviniti / ITI | SIF-21 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Magnum / SBI | SIF-13, 157 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| iSIF / ICICI Prudential | SIF-34, 35, 124, 126 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Apex / Aditya Birla | SIF-80, 154, 156 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Infinity / Kotak | SIF-146 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (loaded) | not checked | nothing new | none |
| Arudha / Bandhan | SIF-40, 62 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 (both funds) | not checked | SIF-62 loaded from Excel (replaces factsheet figures); SIF-40 already from Excel | SIF-62: 50% -> 100% |
| Arthaya / Union MF | SIF-114 | not in tracker yet | 🟥 0% | error (browser pane could not open unionmf.com) | n/a | n/a | skipped: site would not open | none |

Industry AUM (AMFI): as on 30 Sep 2026

### Funds changed
| Fund | Source | as_of before -> after | Size before -> after (Rs cr) | Risk band before -> after | Unhedged long/short before -> after | Other fields changed |
|---|---|---|---|---|---|---|
| Arudha Equity Long-Short Fund (SIF-62) | Excel (was factsheet) | 2026-09-30 -> 2026-09-30 | 133.38 -> 133.38 | 5 -> 5 | 0.83/2.68 -> 0.78/7.98 | full holdings (71), split, sectors, shorts; factsheet_only removed |

## 2026-10-19 07:59 Lisbon time
Result: nothing changed. facts.json not committed (no changes).

**Updates found and made**
- None

**Updates available but not made, or only partly made**
- Arudha Equity Long-Short Fund (SIF-62): the 30 Sep 2026 Excel link on Arudha's site still returns a "Page Not Found" page instead of the file. The 30 Sep factsheet figures stay in place; the Excel will be loaded automatically as soon as Arudha fixes the link.

### Data completeness
Up to date: 33 of 33 SIF funds (100%) have data as on 30 Sep 2026
of which 31 from the full Excel portfolio and 2 from the factsheet only (full portfolio still to come)

Not yet up to date: none.

### Fails and fixes
| # | What failed | AMC / fund | Why, in plain words | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Excel portfolio could not be read | Arudha / Arudha Equity Long-Short Fund (SIF-62) | The 30 Sep 2026 monthly file link returns a "Page Not Found" page on Arudha's side (the file is missing, not corrupt); the factsheet figures stay in place | Will retry automatically next run |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | SIF-11, SIF-122, SIF-161 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | – | nothing new | none |
| RedHex / HSBC | SIF-128 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | – | nothing new | none |
| WSIF / The Wealth Company | SIF-105, SIF-111 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | no SIF factsheet | nothing new | none |
| Titanium / Tata | SIF-102, SIF-29 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | – | nothing new | none |
| Platinum / Mirae | SIF-136 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | – | nothing new | none |
| Sapphire / Franklin | SIF-96 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | – | nothing new | none |
| DynaSIF / 360 ONE | SIF-55, SIF-87, SIF-143 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | – | nothing new | none |
| Summit / Invesco | SIF-150 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | – | nothing new | none |
| qsif / quant | SIF-3, SIF-7, SIF-25, SIF-93, SIF-117 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | – | nothing new | none |
| Prism / Jio BlackRock | SIF-138 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | – | nothing new | none |
| Diviniti / ITI | SIF-21 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | – | nothing new | none |
| Magnum / SBI | SIF-13, SIF-157 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | – | nothing new | none |
| iSIF / ICICI Prudential | SIF-34, SIF-35, SIF-124, SIF-126 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | – | nothing new | none |
| Apex / Aditya Birla | SIF-80, SIF-154, SIF-156 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | – | nothing new | none |
| Arudha / Bandhan | SIF-40, SIF-62 | 30 Sep 2026 | 🟧 75% | yes | Hybrid 30 Sep 2026 (read); Equity 30 Sep 2026 link broken (404) | Sep 2026 (30 Sep data) | nothing new; SIF-62 Excel unreadable, factsheet figures kept | none |
| Infinity / Kotak | SIF-146 | 30 Sep 2026 | 🟧 50% | yes | "Portfolio as of september 2026" (read, already applied: IHLSsept.xlsx) | Factsheet September 2026 (30 Sep data) | nothing new | none |

Industry AUM (AMFI): as on 30 Sep 2026

Sweep (Step 3c): no "Mutual fund units" lines, no missing risk bands, all zero-unhedged notes in place; no fixes needed.


## 2026-10-18 10:40 Lisbon time (hedge re-check of every AMC)
Result: 2 funds corrected (Prism SIF-138, Altiva Equity SIF-161) and the shared loader fixed. facts.json and adapters.js committed and verified (33 funds, no band lost, no "Mutual fund units" line).

**Updates found and made**
- Prism Hybrid (SIF-138): unhedged shorts 11.39% -> 10.02%. Its futures are named "X Fut 27-Oct-26", which the loader did not recognise, so 12 hedged shorts (HDFC Bank, Reliance, LIC, Tata Steel and others, 1.37% in total) were counted as unhedged. Now only Ambuja Cements (-7.23) and Indian Hotels (-2.79) shorts remain, which Prism itself lists as non-hedging.
- Altiva Equity (SIF-161): card was "Updating"; now long 6.66% (Nifty futures, listed by Altiva as non-hedging), short 0, no options.

**Updates available but not made, or only partly made**
- Arudha Equity (SIF-62): September Excel link on arudhasif.com returns 404 (file missing, not corrupt); factsheet figures stay in place. Retried every run.

### Data completeness
Up to date: 33 of 33 SIF funds (100%) have data as on 30 Sep 2026
of which 31 from the full Excel portfolio and 2 from the factsheet only (Arudha Equity SIF-62, Kotak SIF-146).

### Fails and fixes
| # | What failed | AMC / fund | Why, in plain words | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Hedged shorts shown as unhedged | Prism SIF-138 | Futures named "X Fut 27-Oct-26"; name matching also missed "Life Insurance Corpora" vs "Corporation Of India" | Fixed in this run: loader strip and name-match rules corrected in adapters.js, card recomputed |
| 2 | Card stuck on "Updating" | Altiva Equity SIF-161 | No reader result was applied to the new fund | Fixed in this run: card written from the workbook's non-hedging section |
| 3 | September Excel not downloadable | Arudha Equity SIF-62 | Link returns 404 Page Not Found | Will retry automatically next run |
| 4 | Old instruction took the first link by name | Invesco SIF-150 | The August file was named sif_portfolio.xls, September is sif_monthly-portfolio-sept-2026.xlsx | Fixed in this run: task now pairs each link with its date label and takes the newest |
| 5 | qsif page refused by the browser pane earlier | qsif (5 funds) | Site was temporarily unreachable; opened fine later | Fixed in this run: read the five September workbooks; retry later in a run if refused again |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | 3 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | not checked | SIF-161 card filled; SIF-11 netted card kept (options book too large to re-derive) | none (cards only) |
| RedHex / HSBC | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | not checked | nothing new | none |
| WSIF / Wealth Company | 2 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | none published | hedge check: matches AMC 2.73 and 2.47 | none |
| Titanium / Tata | 2 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | not checked | hedge check by hand, unchanged | none |
| Platinum / Mirae | 1 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | not checked | hedge check: matches AMC 3.11 | none |
| Sapphire / Franklin | 1 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | not checked | hedge check: matches AMC 2.19 | none |
| DynaSIF / 360 ONE | 3 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | not checked | hedge check: unchanged | none |
| Summit / Invesco | 1 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | not checked | no derivatives, confirmed | none |
| qsif / quant | 5 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | not checked | all five totals match the AMC | none |
| Prism / Jio BlackRock | 1 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | not checked | card corrected | unhedged short 11.39 -> 10.02 |
| Diviniti / ITI | 1 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | not checked | hedge check: matches AMC 12.36 | none |
| Magnum / SBI | 2 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | not checked | hedge check: matches AMC 19.44 and nil | none |
| iSIF / ICICI Prudential | 4 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | not checked | hedge review done earlier today | none |
| Apex / Aditya Birla | 3 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | not checked | re-read workbook by hand: cards agree with AMC sections | none |
| Arudha / Bandhan | 2 | 30 Sep 2026 | SIF-40 🟩 100%, SIF-62 🟧 50% | yes | 30 Sep 2026 (Hybrid), Equity file 404 | not checked | nothing new | none |
| Infinity / Kotak | 1 | 30 Sep 2026 | 🟧 50% | yes | 30 Sep 2026 (read) | 30 Sep 2026 | netted card kept (AMC non-hedging futures 5.05%, options -0.70%) | none |
Industry AUM (AMFI): not checked in this pass.

### Funds changed
| Fund | Source | as_of before -> after | Size before -> after (Rs cr) | Risk band before -> after | Unhedged long/short before -> after | Other fields changed |
|---|---|---|---|---|---|---|
| Prism Hybrid SIF-138 | Excel | 2026-09-30 (same) | same | same | 4.69/11.39 -> 4.69/10.02 | items cut from 14 to 4; note explains AMC's hedging sections |
| Altiva Equity SIF-161 | Excel | 2026-09-30 (same) | same | same | "Updating" -> 6.66/0 | unhedged_pending removed |


## 2026-10-18 08:35 Lisbon time
Result: nothing changed. facts.json was not committed (no fund had newer data).

Updates found and made
- None

Updates available but not made, or only partly made
- Arudha Equity Long-Short (SIF-62): stays on the 30 Sep 2026 factsheet; the 30 Sep Excel is still corrupted on Arudha's side ("not zip"). Will retry automatically next run.

### Data completeness
Up to date: 33 of 33 SIF funds (100%) have data as on 30 Sep 2026
of which 31 from the full Excel portfolio and 2 from the factsheet only (full portfolio still to come)

Not yet up to date: none.

### Fails and fixes
| # | What failed | AMC / fund | Why, in plain words | Resolution (proposed) |
|---|---|---|---|---|
| 1 | Excel would not open | Arudha / Equity Long-Short (SIF-62) | The 30 Sep 2026 portfolio file on Arudha's site is not a valid Excel file (corrupted on their side); factsheet figures stay in place | Will retry automatically next run |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | 3 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | not checked | nothing new | none |
| RedHex / HSBC | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | Sep 2026 (earlier run) | nothing new | none |
| WSIF / Wealth Company | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | none exists | nothing new | none |
| Titanium / Tata | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | not checked | nothing new | none |
| Platinum / Mirae | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | not checked | nothing new | none |
| Sapphire / Franklin | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | not checked | nothing new | none |
| DynaSIF / 360 ONE | 3 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | not checked | nothing new | none |
| Summit / Invesco | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | not checked | nothing new | none |
| qsif / quant | 5 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | not checked | nothing new | none |
| Prism / Jio BlackRock | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | not checked | nothing new | none |
| Diviniti / ITI | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | not checked | nothing new | none |
| Magnum / SBI | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | not checked | nothing new | none |
| iSIF / ICICI Prudential | 4 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | not checked | nothing new | none |
| Apex / Aditya Birla | 3 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 (earlier run) | not checked | nothing new | none |
| Arudha / Bandhan | 2 | 30 Sep 2026 | 🟧 75% | yes | Hybrid 30 Sep 2026 (read, same as loaded); Equity 30 Sep 2026 (corrupted) | Sep 2026 (30 Sep data, already loaded for SIF-62) | nothing new; SIF-62 Excel unreadable | none |
| Infinity / Kotak | 1 | 30 Sep 2026 | 🟧 50% | yes | Portfolio as of September 2026 (read; unhedged card already from IHLSsept.xlsx) | Factsheet September 2026 (30 Sep data, already loaded) | nothing new | none |

Industry AUM (AMFI): as on 30 Sep 2026

Classification sweep (no Mutual fund units lines, no-unhedged notes and streaks): all 33 entries already comply, no fixes needed.


## 2026-10-16 17:10 Lisbon time
Result: 1 fund updated, plus 2 risk bands filled in. facts.json was committed and verified (33 funds, no risk band missing).

Updates found and made
- RedHex Hybrid Long-Short (SIF-128): monthly Excel portfolio, data as on 30 Sep 2026, size Rs 1,504 cr (was Rs 1,072.84 cr on 31 Aug), risk band 2 (unchanged).
- Apex Equity Long-Short (SIF-154): risk band 2 and Apex Equity Ex-Top 100 (SIF-156): risk band 3, both given by Ashish from the prospectus (factsheets do not cover them yet). Apex Hybrid (SIF-80): band 1 and benchmark band 2 confirmed from the factsheet.
- Mutual fund units reclassified (Ashish's rule: no separate "Mutual fund units" bucket; liquid/money market fund units count as Fixed income): RedHex 5.99% (HSBC Money Market Fund), Apex Hybrid 10.02% (ABSL Liquid Fund, plus 0.01% Nifty 50 ETF), Kotak Hybrid 1.19% (Kotak Liquid Fund) moved to Fixed income; qsif Equity 0.51% (units of qsif Sector Rotation Long-Short Fund) moved to Equity.

Updates available but not made, or only partly made
- Arudha Equity (SIF-62): still on the 30 Sep factsheet; the Excel link returns an error page on Arudha's side. Will retry next run.
- None other than Arudha (above). Apex risk bands were supplied by Ashish and applied (see Updates found).

### Data completeness
Up to date: 33 of 33 SIF funds (100%) have data as on 30 Sep 2026
of which 31 from the full Excel portfolio and 2 from the factsheet only (full portfolio still to come)

Not yet up to date: none.

### Fails and fixes
| # | What failed | AMC / fund | Why | Resolution |
|---|---|---|---|---|
| 1 | Missed HSBC September files in the first pass | RedHex / HSBC (SIF-128) | The investor-resources page only lists the newest files when opened with its filter link (Doc=redhex-sif-factsheet); the unfiltered page and the library page showed up to August | Fixed in this run: loaded the 30 Sep Excel. From now on HSBC is read through the filtered links |
| 2 | Excel would not open | Arudha / Equity (SIF-62) | The 30 Sep file link returns an error page | Will retry automatically next run; if still broken in about a week, Needs Ashish: email Arudha SIF to repair the link |
| 3 | Risk band not read | Apex / SIF-154, SIF-156 | Factsheet band is a graphic only and does not yet cover these funds | Fixed in this run: Ashish supplied the bands (2 and 3) from the prospectus. Later factsheets will be used to check them |

### AMC by AMC
| AMC | Funds | Data as on | Done | Page opened | Newest Excel | Newest factsheet | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | 3 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | not checked | nothing new | none |
| RedHex / HSBC | 1 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | Sep 2026 (30 Sep data) | loaded from Excel | 0% -> 100% |
| WSIF / Wealth Company | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | none exists | nothing new | none |
| Titanium / Tata | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | not checked | nothing new | none |
| Platinum / Mirae | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | not checked | nothing new | none |
| Sapphire / Franklin | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | not checked | nothing new | none |
| DynaSIF / 360 ONE | 3 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | not checked | nothing new | none |
| Summit / Invesco | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | not checked | nothing new | none |
| qsif / quant | 5 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | not checked | nothing new | none |
| Prism / Jio BlackRock | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | not checked | nothing new | none |
| Diviniti / ITI | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | not checked | nothing new | none |
| Magnum / SBI | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | not checked | nothing new | none |
| iSIF / ICICI Prudential | 4 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | 30 Sep 2026 | not checked | nothing new | none |
| Apex / Aditya Birla | 3 | 30 Sep 2026 | 🟩 100% | yes | 30 Sep 2026 | 30 Sep 2026 (October file) | nothing new | none |
| Arudha / Bandhan | 2 | 30 Sep 2026 | 🟩 100% (Hybrid) / 🟧 50% (Equity), average 75% | yes | Hybrid 30 Sep 2026; Equity link broken | not re-read | nothing new | none |
| Infinity / Kotak | 1 | 30 Sep 2026 | 🟧 50% | yes | 30 Sep 2026, workbook already applied to the unhedged card | Sep 2026 | nothing new | none |

Industry AUM (AMFI): as on 30 Sep 2026

### Funds changed
| Fund | Source | as_of before -> after | Size before -> after (Rs cr) | Risk band before -> after | Unhedged long/short before -> after | Other fields changed |
|---|---|---|---|---|---|---|
| RedHex Hybrid Long-Short (SIF-128) | HSBC monthly Excel | 2026-08-31 -> 2026-09-30 | 1,072.84 -> 1,504.00 | 2 -> 2 | 0/0 -> 0/0 | holdings 80 -> 90; asset split, top holdings, sectors, derivatives exposure |


## 2026-10-15 11:58 Lisbon time
Result: 2 funds updated. facts.json was committed and verified (33 funds, no risk band lost).

Updates found and made
- Arudha Equity (SIF-62): monthly factsheet, data as on 30 Sep 2026, size Rs 133.38 cr (factsheet only; the Excel link is broken on Arudha's side).
- Magnum Equity Ex-Top 100 (SIF-157): risk band set to 5 (benchmark 3) from SBI's September factsheet; data date unchanged (30 Sep 2026).

Updates available but not made, or only partly made
- Arudha Equity (SIF-62): the 30 Sep 2026 Excel link returns an error page, so asset split, shorts and unhedged figures stay as on 31 Aug 2026. Will retry automatically next run.
- RedHex Hybrid (SIF-128): newest workbook and factsheet are still 31 Aug 2026; September not published yet. Will retry automatically next run.
- Infinity Hybrid (SIF-146, Kotak): stays factsheet only; the September workbook was read for the unhedged card (already applied), but there is no workbook reader for the asset split yet.

### Data completeness
Up to date: 32 of 33 SIF funds (97%) have data as on 30 Sep 2026
of which 30 from the full Excel portfolio and 2 from the factsheet only (full portfolio still to come: Arudha Equity, Infinity Hybrid)

Not yet up to date

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| SIF-128 RedHex Hybrid | RedHex / HSBC | 31 Aug 2026 | AMC has not published September yet |

### Fails and fixes

| # | What failed | AMC / fund | Why, in plain words | Resolution |
|---|---|---|---|---|
| 1 | September Excel could not be read | Arudha / SIF-62 Equity | The 30 Sep 2026 file link returns a small error page, not a workbook (problem on Arudha's side) | Fixed in this run: loaded from the September factsheet instead; will retry the Excel automatically next run |
| 2 | Risk band not read | Apex / SIF-154 Equity, SIF-156 Equity Ex-Top 100 | Apex's factsheet ("October 2026", data as on 30 Sep) only covers the Hybrid fund | Will retry automatically next run |

### AMC by AMC

| AMC | Funds | Data as on | Done | Page opened | Newest Excel found | Newest factsheet found | Action | Movement today |
|---|---|---|---|---|---|---|---|---|
| Altiva / Edelweiss | 3 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| RedHex / HSBC | 1 | 31 Aug 2026 | 🟥 0% | yes | 31 Aug 2026 | 31 Aug 2026 | nothing new | none |
| WSIF / Wealth Company | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | n/a | nothing new | none |
| Titanium / Tata | 2 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| Platinum / Mirae | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| Sapphire / Franklin | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| DynaSIF / 360 ONE | 3 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| Summit / Invesco | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| qsif / quant | 5 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| Prism / Jio BlackRock | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| Diviniti / ITI | 1 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| Magnum / SBI | 2 | 30 Sep 2026 | 🟩 100% | yes (factsheet page) | - | 30 Sep 2026 | risk band for SIF-157 loaded from factsheet | none (risk band added) |
| iSIF / ICICI Prudential | 4 | 30 Sep 2026 | 🟩 100% | not re-opened, already at target month | - | - | nothing new | none |
| Infinity / Kotak | 1 | 30 Sep 2026 (factsheet) | 🟧 50% | yes | Portfolio as of September 2026 (read for unhedged card, already applied) | 30 Sep 2026 | nothing new | none |
| Apex / Aditya Birla | 3 | 30 Sep 2026 | 🟩 100% | yes (factsheet list) | not re-read, already at target month | 30 Sep 2026 ("October 2026") | nothing new; equity risk bands not in factsheet | none |
| Arudha / Bandhan | 2 | 30 Sep 2026 | 🟧 75% | yes | 30 Sep 2026 (Hybrid read; Equity link broken) | 30 Sep 2026 ("September 2026") | SIF-62 loaded from factsheet | 50% -> 75% |

Industry AUM (AMFI): as on 30 Sep 2026

### Funds changed

| Fund | Source | as_of before -> after | Size before -> after (Rs cr) | Risk band before -> after | Unhedged long/short before -> after | Other fields changed |
|---|---|---|---|---|---|---|
| SIF-62 Arudha Equity | Arudha monthly factsheet (Sep 2026) | 31 Aug 2026 -> 30 Sep 2026 | 127.87 -> 133.38 | 5 -> 5 | frozen (as on 31 Aug) | top_equity, factsheet_only = true, split_source |
| SIF-157 Magnum Equity Ex-Top 100 | SBI monthly factsheet (Sep 2026) | 30 Sep 2026 -> 30 Sep 2026 | 1598.35 -> 1598.35 | none -> 5 | unchanged | benchmark_risk_band none -> 3 |


## 2026-10-14 08:30 Lisbon time
Result: nothing changed. facts.json was not committed (33 funds, no fund had anything newer to load).

Updates found and made
- None

Updates available but not made, or only partly made
- Arudha Hybrid (SIF-40) and Arudha Equity (SIF-62): the 30 Sep 2026 monthly files are listed; watch-only, waiting for a manual load.
- RedHex Hybrid (SIF-128): newest workbook and factsheet are still 31 Aug 2026; the September files are not published yet. Retried next run.

### Data completeness
Up to date: 30 of 33 SIF funds (91%) have data as on 30 Sep 2026
of which 29 from the full Excel portfolio and 1 from the factsheet only (full portfolio still to come: Infinity Hybrid, Kotak)

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| SIF-128 RedHex Hybrid | RedHex / HSBC | 31 Aug 2026 | AMC has not published September yet |
| SIF-40 Arudha Hybrid | Arudha / Bandhan | 31 Aug 2026 | Watch-only, 30 Sep file waiting for a manual load |
| SIF-62 Arudha Equity | Arudha / Bandhan | 31 Aug 2026 | Watch-only, 30 Sep file waiting for a manual load |

### Fails and fixes
No fails today. Note: this run only re-checked the AMCs that were not at 30 Sep (RedHex, Arudha) plus Apex; every other AMC was already at the target month, so it was not re-opened.

### AMC by AMC
| AMC | Page opened | Newest Excel found | Newest factsheet found | Loaded before (as_of) | Action |
|---|---|---|---|---|---|
| Altiva / Edelweiss | not re-opened | - | - | 30 Sep 2026 | nothing new (already at target month) |
| RedHex / HSBC | yes | 31 Aug 2026 | Aug 2026 | 31 Aug 2026 | nothing new |
| WSIF / Wealth Company | not re-opened | - | n/a | 30 Sep 2026 | nothing new (already at target month) |
| Titanium / Tata | not re-opened | - | - | 30 Sep 2026 | nothing new (already at target month) |
| Platinum / Mirae | not re-opened | - | - | 30 Sep 2026 | nothing new (already at target month) |
| Sapphire / Franklin | not re-opened | - | - | 30 Sep 2026 | nothing new (already at target month) |
| DynaSIF / 360 ONE | not re-opened | - | - | 30 Sep 2026 | nothing new (already at target month) |
| Summit / Invesco | not re-opened | - | - | 30 Sep 2026 | nothing new (already at target month) |
| qsif / quant | not re-opened | - | - | 30 Sep 2026 | nothing new (already at target month) |
| Prism / Jio BlackRock | not re-opened | - | - | 30 Sep 2026 | nothing new (already at target month) |
| Diviniti / ITI | not re-opened | - | - | 30 Sep 2026 | nothing new (already at target month) |
| Magnum / SBI | not re-opened | - | - | 30 Sep 2026 | nothing new (already at target month) |
| iSIF / ICICI Prudential | not re-opened | - | - | 30 Sep 2026 | nothing new (already at target month) |
| Infinity / Kotak | not re-opened | - | - | 30 Sep 2026 (factsheet) | nothing new (already at target month) |
| Apex / Aditya Birla | yes | 31 Aug 2026 | - | 30 Sep 2026 | nothing new |
| Arudha / Bandhan | yes | 30 Sep 2026 | - | 31 Aug 2026 | new file waiting for a manual load |

Schedule note: Ashish changed the schedule on 14 Oct to 4 runs a day (07:52, 11:52, 15:52, 19:52 Lisbon); once a day's entry is logged, later firings stop. The model change to Sonnet 5.5 could not be applied from inside the run (needs the routine's own settings).


## 2026-10-12 09:00 Lisbon time
Result: nothing changed. facts.json was not committed (no fund had anything newer to load; it still holds 33 funds).

Updates found and made
- None

Updates available but not made, or only partly made
- Arudha Hybrid and Arudha Equity (Bandhan): 30 Sep 2026 monthly files are listed; watch-only, waiting for a manual load.
- DynaSIF (360 ONE): the download page was blocked by Cloudflare again, so it could not be checked; its three funds are already on 30 Sep 2026. Retried next run.
- Infinity Hybrid (Kotak): still factsheet-only (30 Sep 2026); the September portfolio workbook opens but has no reader.
- Altiva Equity Long-Short (SIF-161): unhedged card still shows "Updating"; no reader exists for it yet.
- Magnum Equity Ex-Top 100 (SIF-157): risk band still empty; the newest SBI factsheet is still August and does not cover it. Retried next run.
- RedHex Hybrid (HSBC): September portfolio and factsheet not published yet (newest is 31 Aug 2026). Retried next run.

### Data completeness
Up to date: 30 of 33 SIF funds (91%) have data as on 30 Sep 2026
of which 29 from the full Excel portfolio and 1 from the factsheet only (full portfolio still to come)

Not yet up to date

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| RedHex Hybrid Long-Short | HSBC | 31 Aug 2026 | AMC has not published yet |
| Arudha Hybrid Long-Short | Bandhan | 31 Aug 2026 | Watch-only, file waiting for a manual load |
| Arudha Equity Long-Short | Bandhan | 31 Aug 2026 | Watch-only, file waiting for a manual load |

| AMC | Funds | Up to date | Data as on |
|---|---|---|---|
| Altiva / Edelweiss | 3 | 3 | 30 Sep 2026 |
| RedHex / HSBC | 1 | 0 | 31 Aug 2026 |
| WSIF / The Wealth Company | 2 | 2 | 30 Sep 2026 |
| Titanium / Tata | 2 | 2 | 30 Sep 2026 |
| Platinum / Mirae | 1 | 1 | 30 Sep 2026 |
| Sapphire / Franklin | 1 | 1 | 30 Sep 2026 |
| DynaSIF / 360 ONE | 3 | 3 | 30 Sep 2026 |
| Summit / Invesco | 1 | 1 | 30 Sep 2026 |
| qsif / quant | 5 | 5 | 30 Sep 2026 |
| Prism / Jio BlackRock | 1 | 1 | 30 Sep 2026 |
| Diviniti / ITI | 1 | 1 | 30 Sep 2026 |
| Magnum / SBI | 2 | 2 | 30 Sep 2026 |
| iSIF / ICICI Prudential | 4 | 4 | 30 Sep 2026 |
| Infinity / Kotak | 1 | 1 | 30 Sep 2026 (factsheet) |
| Apex / Aditya Birla | 3 | 3 | 30 Sep 2026 |
| Arudha / Bandhan | 2 | 0 | 31 Aug 2026 |

### Fails and fixes

| # | What failed | AMC / fund | Why, in plain words | Resolution |
|---|---|---|---|---|
| 1 | Page blocked | 360 ONE, all 3 DynaSIF funds | The download page showed a Cloudflare "Attention Required" page, so the file lists could not be read; no workaround was tried. The funds already hold 30 Sep 2026 data | Will retry automatically next run |
| 2 | New file waiting for a manual load | Bandhan, Arudha Hybrid (SIF-40) and Arudha Equity (SIF-62) | Monthly portfolios dated 30 Sep 2026 are listed; these funds are loaded by hand | Needs Ashish: load the two 30-09-2026 Arudha monthly files by hand. |
| 3 | Portfolio workbook readable, no reader | Kotak, Infinity Hybrid (SIF-146) | Kotak's storage no longer refuses the workbook, but nothing can read it yet | Needs Ashish: Kotak's portfolio workbook (Portfolio as of september 2026) can now be read; it needs a reader. |
| 4 | Unhedged card needs a manual re-read | Edelweiss, Altiva Equity Long-Short (SIF-161) | No reader exists yet for this fund; the card shows "Updating" | Needs Ashish: add a reader for SIF-161 (sheet AEEQLS in the Edelweiss workbook). |
| 5 | Risk band not read | SBI, Magnum Equity Ex-Top 100 (SIF-157) | The workbook has no band and the newest SBI factsheet (August) does not cover this fund | Will retry automatically next run |
| 6 | New fund seen, no data yet | Arthaya Equity Long Short Fund (SIF-114) | It is in the daily NAV feed but belongs to an AMC this task has no page for | Needs Ashish: say which AMC site carries the Arthaya SIF portfolio or factsheet. |

### AMC by AMC

| AMC | Page opened | Newest Excel found | Newest factsheet found | Loaded before (as_of) | Action |
|---|---|---|---|---|---|
| Altiva / Edelweiss | yes | 30 Sep 2026 (no October option yet) | not rechecked today (30 Sep 2026 last run; nothing later is possible yet) | 30 Sep 2026 | nothing new |
| RedHex / HSBC | yes | 31 Aug 2026 | 31 Aug 2026 | 31 Aug 2026 | nothing new |
| WSIF / The Wealth Company | yes | 30 Sep 2026 | none (no SIF factsheet) | 30 Sep 2026 | nothing new |
| Titanium / Tata | yes | 30 Sep 2026 | 30 Sep 2026 | 30 Sep 2026 | nothing new |
| Platinum / Mirae | yes | 30 Sep 2026 | 31 Aug 2026 (named "September 2026") | 30 Sep 2026 | nothing new |
| Sapphire / Franklin | yes | 30 Sep 2026 | 31 Aug 2026 | 30 Sep 2026 | nothing new |
| DynaSIF / 360 ONE | blocked (Cloudflare "Attention Required" page) | not seen | not seen | 30 Sep 2026 | skipped: page blocked |
| Summit / Invesco | yes | 30 Sep 2026 | 30 Sep 2026 | 30 Sep 2026 | nothing new |
| qsif / quant | yes | 30 Sep 2026 | not rechecked today ("October 2026" = 30 Sep data last run; nothing later is possible yet) | 30 Sep 2026 | nothing new |
| Prism / Jio BlackRock | yes (factsheet page) | 30 Sep 2026 (as loaded) | 31 Aug 2026 (none for September or October) | 30 Sep 2026 | nothing new |
| Diviniti / ITI | yes | 30 Sep 2026 (September 2026 file) | 31 Aug 2026 | 30 Sep 2026 | nothing new |
| Magnum / SBI | yes | 30 Sep 2026 | 31 Aug 2026 | 30 Sep 2026 | nothing new |
| iSIF / ICICI Prudential | yes | 30 Sep 2026 (September 2026 zip) | none listed | 30 Sep 2026 | nothing new |
| Infinity / Kotak | yes | listed, now opens (September 2026; no reader) | 30 Sep 2026 | 30 Sep 2026 (factsheet) | nothing new |
| Apex / Aditya Birla (watch-only) | yes | 30 Sep 2026 | not checked (watch-only) | 30 Sep 2026 | nothing new |
| Arudha / Bandhan (watch-only) | yes | 30 Sep 2026 | not checked (watch-only) | 31 Aug 2026 | new file waiting for a manual load |


## 2026-10-11 14:41 Lisbon time
Result: nothing changed. facts.json was not committed (no fund had anything newer to load; it still holds 33 funds).

Updates found and made
- None

Updates available but not made, or only partly made
- Arudha Hybrid and Arudha Equity (Bandhan): 30 Sep 2026 monthly files are listed; watch-only, waiting for a manual load.
- DynaSIF (360 ONE): the download page was blocked by Cloudflare today, so it could not be checked; its three funds are already on 30 Sep 2026. Retried next run.
- Infinity Hybrid (Kotak): still factsheet-only; the September portfolio workbook can be opened but has no reader.
- Altiva Equity Long-Short (SIF-161): unhedged card still shows "Updating"; no reader exists for it yet.
- Magnum Equity Ex-Top 100 (SIF-157): risk band still empty; the newest SBI factsheet is August and does not cover it. Retried next run.

### Data completeness
Up to date: 30 of 33 SIF funds (91%) have data as on 30 Sep 2026
of which 29 from the full Excel portfolio and 1 from the factsheet only (full portfolio still to come)

Not yet up to date

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| RedHex Hybrid Long-Short | HSBC | 31 Aug 2026 | AMC has not published yet |
| Arudha Hybrid Long-Short | Bandhan | 31 Aug 2026 | Watch-only, file waiting for a manual load |
| Arudha Equity Long-Short | Bandhan | 31 Aug 2026 | Watch-only, file waiting for a manual load |

| AMC | Funds | Up to date | Data as on |
|---|---|---|---|
| Altiva / Edelweiss | 3 | 3 | 30 Sep 2026 |
| RedHex / HSBC | 1 | 0 | 31 Aug 2026 |
| WSIF / The Wealth Company | 2 | 2 | 30 Sep 2026 |
| Titanium / Tata | 2 | 2 | 30 Sep 2026 |
| Platinum / Mirae | 1 | 1 | 30 Sep 2026 |
| Sapphire / Franklin | 1 | 1 | 30 Sep 2026 |
| DynaSIF / 360 ONE | 3 | 3 | 30 Sep 2026 |
| Summit / Invesco | 1 | 1 | 30 Sep 2026 |
| qsif / quant | 5 | 5 | 30 Sep 2026 |
| Prism / Jio BlackRock | 1 | 1 | 30 Sep 2026 |
| Diviniti / ITI | 1 | 1 | 30 Sep 2026 |
| Magnum / SBI | 2 | 2 | 30 Sep 2026 |
| iSIF / ICICI Prudential | 4 | 4 | 30 Sep 2026 |
| Infinity / Kotak | 1 | 1 | 30 Sep 2026 (factsheet) |
| Apex / Aditya Birla | 3 | 3 | 30 Sep 2026 |
| Arudha / Bandhan | 2 | 0 | 31 Aug 2026 |

### Fails and fixes

| # | What failed | AMC / fund | Why, in plain words | Resolution |
|---|---|---|---|---|
| 1 | Page blocked | 360 ONE, all 3 DynaSIF funds | The download page showed a Cloudflare "Attention Required" page, so the file lists could not be read; no workaround was tried. The funds already hold 30 Sep 2026 data | Will retry automatically next run |
| 2 | New file waiting for a manual load | Bandhan, Arudha Hybrid (SIF-40) and Arudha Equity (SIF-62) | Monthly portfolios dated 30 Sep 2026 are listed; these funds are loaded by hand | Needs Ashish: load the two 30-09-2026 Arudha monthly files by hand. |
| 3 | Portfolio workbook readable, no reader | Kotak, Infinity Hybrid (SIF-146) | Kotak's storage no longer refuses the workbook, but nothing can read it yet | Needs Ashish: Kotak's portfolio workbook (Portfolio as of september 2026) can now be read; it needs a reader. |
| 4 | Unhedged card needs a manual re-read | Edelweiss, Altiva Equity Long-Short (SIF-161) | No reader exists yet for this fund; the card shows "Updating" | Needs Ashish: add a reader for SIF-161 (sheet AEEQLS in the Edelweiss workbook). |
| 5 | Risk band not read | SBI, Magnum Equity Ex-Top 100 (SIF-157) | The workbook has no band and the newest SBI factsheet (August) does not cover this fund | Will retry automatically next run |
| 6 | New fund seen, no data yet | Arthaya Equity Long Short Fund (SIF-114) | It is in the daily NAV feed but belongs to an AMC this task has no page for | Needs Ashish: say which AMC site carries the Arthaya SIF portfolio or factsheet. |

### AMC by AMC

| AMC | Page opened | Newest Excel found | Newest factsheet found | Loaded before (as_of) | Action |
|---|---|---|---|---|---|
| Altiva / Edelweiss | yes | 30 Sep 2026 | 30 Sep 2026 ("Portfolio Update September 2026") | 30 Sep 2026 | nothing new |
| RedHex / HSBC | yes | 31 Aug 2026 | 31 Aug 2026 | 31 Aug 2026 | nothing new |
| WSIF / The Wealth Company | yes | 30 Sep 2026 | none (no SIF factsheet) | 30 Sep 2026 | nothing new |
| Titanium / Tata | yes | 30 Sep 2026 | 30 Sep 2026 | 30 Sep 2026 | nothing new |
| Platinum / Mirae | yes | 30 Sep 2026 | 31 Aug 2026 (named "September 2026") | 30 Sep 2026 | nothing new |
| Sapphire / Franklin | yes | 30 Sep 2026 | 31 Aug 2026 | 30 Sep 2026 | nothing new |
| DynaSIF / 360 ONE | blocked (Cloudflare "Attention Required" page) | not seen | not seen | 30 Sep 2026 | skipped: page blocked |
| Summit / Invesco | yes | 30 Sep 2026 | 30 Sep 2026 | 30 Sep 2026 | nothing new |
| qsif / quant | yes | 30 Sep 2026 | 30 Sep 2026 (named "October 2026") | 30 Sep 2026 | nothing new |
| Prism / Jio BlackRock | yes | 30 Sep 2026 | none listed for September or October | 30 Sep 2026 | nothing new |
| Diviniti / ITI | yes | 30 Sep 2026 (September 2026 file) | 31 Aug 2026 | 30 Sep 2026 | nothing new |
| Magnum / SBI | yes | 30 Sep 2026 | 31 Aug 2026 | 30 Sep 2026 | nothing new |
| iSIF / ICICI Prudential | yes | 30 Sep 2026 | none listed | 30 Sep 2026 | nothing new |
| Infinity / Kotak | yes | listed but refused until recently (September 2026; now opens, no reader) | 30 Sep 2026 | 30 Sep 2026 (factsheet) | nothing new |
| Apex / Aditya Birla (watch-only) | yes | 30 Sep 2026 | not checked (watch-only) | 30 Sep 2026 | nothing new |
| Arudha / Bandhan (watch-only) | yes | 30 Sep 2026 | not checked (watch-only) | 31 Aug 2026 | new file waiting for a manual load |


## 2026-10-10 12:35 Lisbon time
Result: 16 funds updated (15 refreshed from the Excel portfolio, 1 new fund added). facts.json was committed and verified (33 funds).

Updates found and made
- Altiva Hybrid Long-Short (SIF-11): Excel, 30 Sep 2026, Rs 11,230.53 cr (replaces the factsheet load)
- Altiva Equity Ex-Top 100 Long-Short (SIF-122): Excel, 30 Sep 2026, Rs 1,534.97 cr (replaces the factsheet load)
- Altiva Equity Long-Short (SIF-161): NEW FUND, Excel, 30 Sep 2026, Rs 376.64 cr
- WSIF Equity Ex-Top 100 Long-Short (SIF-105): Excel, 30 Sep 2026, Rs 75.94 cr
- WSIF Equity Long-Short (SIF-111): Excel, 30 Sep 2026, Rs 42.21 cr
- DynaSIF Equity Long-Short (SIF-55): Excel, 30 Sep 2026, Rs 403.87 cr
- DynaSIF Active Asset Allocator Long-Short (SIF-87): Excel, 30 Sep 2026, Rs 377.21 cr
- DynaSIF Equity Ex-Top 100 Long-Short (SIF-143): Excel, 30 Sep 2026, Rs 343.17 cr
- Summit Equity Long-Short (SIF-150): Excel, 30 Sep 2026, Rs 375.61 cr
- qsif Equity Long-Short (SIF-3): Excel, 30 Sep 2026, Rs 1,017.78 cr (replaces the factsheet load)
- qsif Hybrid Long-Short (SIF-7): Excel, 30 Sep 2026, Rs 662.65 cr (replaces the factsheet load)
- qsif Equity Ex-Top 100 Long-Short (SIF-25): Excel, 30 Sep 2026, Rs 1,110.08 cr (replaces the factsheet load)
- qsif Active Asset Allocator Long-Short (SIF-93): Excel, 30 Sep 2026, Rs 909.48 cr (replaces the factsheet load)
- qsif Sector Rotation Long-Short (SIF-117): Excel, 30 Sep 2026, Rs 62.09 cr (replaces the factsheet load)
- Diviniti Equity Long-Short (SIF-21): Excel, 30 Sep 2026, Rs 246.02 cr
- Platinum Hybrid Long-Short (SIF-136): Excel, 30 Sep 2026, Rs 385.37 cr

Updates available but not made, or only partly made
- Arudha Hybrid and Arudha Equity (Bandhan): 30 Sep 2026 monthly files are listed; watch-only, waiting for a manual load.
- Altiva Equity Long-Short (SIF-161): added, but its unhedged card shows "Updating" because no reader exists for it yet.
- Infinity Hybrid (Kotak): still factsheet-only; the September portfolio workbook can now be opened but has no reader.
- Magnum Equity Ex-Top 100 (SIF-157): risk band still empty; the newest SBI factsheet is August and does not cover it. Retried next run.

### Data completeness
Up to date: 30 of 33 SIF funds (91%) have data as on 30 Sep 2026
of which 29 from the full Excel portfolio and 1 from the factsheet only (full portfolio still to come)

Not yet up to date

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| RedHex Hybrid Long-Short | HSBC | 31 Aug 2026 | AMC has not published yet |
| Arudha Hybrid Long-Short | Bandhan | 31 Aug 2026 | Watch-only, file waiting for a manual load |
| Arudha Equity Long-Short | Bandhan | 31 Aug 2026 | Watch-only, file waiting for a manual load |

| AMC | Funds | Up to date | Data as on |
|---|---|---|---|
| Altiva / Edelweiss | 3 | 3 | 30 Sep 2026 |
| RedHex / HSBC | 1 | 0 | 31 Aug 2026 |
| WSIF / The Wealth Company | 2 | 2 | 30 Sep 2026 |
| Titanium / Tata | 2 | 2 | 30 Sep 2026 |
| Platinum / Mirae | 1 | 1 | 30 Sep 2026 |
| Sapphire / Franklin | 1 | 1 | 30 Sep 2026 |
| DynaSIF / 360 ONE | 3 | 3 | 30 Sep 2026 |
| Summit / Invesco | 1 | 1 | 30 Sep 2026 |
| qsif / quant | 5 | 5 | 30 Sep 2026 |
| Prism / Jio BlackRock | 1 | 1 | 30 Sep 2026 |
| Diviniti / ITI | 1 | 1 | 30 Sep 2026 |
| Magnum / SBI | 2 | 2 | 30 Sep 2026 |
| iSIF / ICICI Prudential | 4 | 4 | 30 Sep 2026 |
| Infinity / Kotak | 1 | 1 | 30 Sep 2026 (factsheet) |
| Apex / Aditya Birla | 3 | 3 | 30 Sep 2026 |
| Arudha / Bandhan | 2 | 0 | 31 Aug 2026 |

### Fails and fixes

| # | What failed | AMC / fund | Why, in plain words | Resolution |
|---|---|---|---|---|
| 1 | New file waiting for a manual load | Bandhan, Arudha Hybrid (SIF-40) and Arudha Equity (SIF-62) | Monthly portfolios dated 30 Sep 2026 are listed; these funds are loaded by hand | Needs Ashish: load the two 30-09-2026 Arudha monthly files by hand. |
| 2 | Workbook layout changed | 360 ONE, all 3 DynaSIF funds | The September file names its sheets "Equity Long Short", "Asset Allocation" and "Equity Ex Top 100" instead of DS01-DS03 and has a stray code column on the left, so the readers could not find anything | Fixed in this run: the sheets were mapped to DS01-DS03 and the stray column was dropped before reading; all three then read cleanly. Needs Ashish: teach adapters.js the new sheet names if 360 ONE keeps them. |
| 3 | Asset split corrected by hand | 360 ONE, DynaSIF Active Asset Allocator (SIF-87) | The extractor counts REITs and InvITs without "REIT" or "InvIT" in their name as shares (16.93% trusts shown against 36.11% in the workbook; the July file gives the same kind of error) | Fixed in this run: REITs 20.29%, InvITs 15.82%, shares 15.85% taken from the workbook's own rows; split now shows REITs and InvITs 36.11%, unhedged equity 0.01%. Needs Ashish: check this fund's page; its sector list still counts the trusts, and gold sits inside fixed income. |
| 4 | Unhedged card needs a manual re-read | Edelweiss, Altiva Equity Long-Short (SIF-161, new fund) | No reader exists yet for this fund (it holds long futures of about 6.66% of net assets); the card shows "Updating" | Needs Ashish: add a reader for SIF-161 (sheet AEEQLS in the Edelweiss workbook). |
| 5 | Portfolio workbook now readable | Kotak, Infinity Hybrid (SIF-146) | Kotak's storage no longer refuses the workbook | Needs Ashish: Kotak's portfolio workbook (Portfolio as of september 2026) can now be read; it needs a reader. |
| 6 | Risk band not read | SBI, Magnum Equity Ex-Top 100 (SIF-157) | The workbook has no band and the newest SBI factsheet (August) does not cover this fund | Will retry automatically next run |
| 7 | Risk band not read | WSIF (2 funds), qsif (5 funds), Platinum (SIF-136), Diviniti (SIF-21) | The workbooks carry no band; WSIF has no factsheet, the qsif band is a picture, the Mirae factsheet was not read and ITI's newest factsheet is August. Previous bands were kept (WSIF 5/5, qsif 3/3/3/2/3, Platinum 1, Diviniti 5) | Will retry automatically next run |
| 8 | New fund seen, no data yet | Arthaya Equity Long Short Fund (SIF-114) | It is in the daily NAV feed but belongs to an AMC this task has no page for | Needs Ashish: say which AMC site carries the Arthaya SIF portfolio or factsheet. |
| 9 | Run interrupted | All | The link to the computer dropped for a while mid-run, before anything was committed | Fixed in this run: resumed from the saved results and finished. |

### AMC by AMC

| AMC | Page opened | Newest Excel found | Newest factsheet found | Loaded before (as_of) | Action |
|---|---|---|---|---|---|
| Altiva / Edelweiss | yes | 30 Sep 2026 | not looked at today (Excel loaded) | 30 Sep 2026 (factsheet) | loaded from Excel (replaces the factsheet load); new fund added (Altiva Equity Long-Short, SIF-161) |
| RedHex / HSBC | yes | 31 Aug 2026 | 31 Aug 2026 | 31 Aug 2026 | nothing new |
| WSIF / The Wealth Company | yes | 30 Sep 2026 | none (no SIF factsheet) | 31 Jul 2026 | loaded from Excel |
| Titanium / Tata | yes | 30 Sep 2026 | 30 Sep 2026 | 30 Sep 2026 | nothing new |
| Platinum / Mirae | yes | 30 Sep 2026 | 31 Aug 2026 (named "September 2026") | 31 Aug 2026 | loaded from Excel |
| Sapphire / Franklin | yes | 30 Sep 2026 | not looked at today (already on 30 Sep Excel) | 30 Sep 2026 | nothing new |
| DynaSIF / 360 ONE | yes | 30 Sep 2026 | 31 Aug 2026 | 31 Aug 2026 (factsheet) | loaded from Excel (replaces the factsheet load) |
| Summit / Invesco | yes | 30 Sep 2026 | 30 Sep 2026 | 31 Aug 2026 | loaded from Excel; risk band 5 confirmed from the factsheet |
| qsif / quant | yes | 30 Sep 2026 | not looked at today (Excel loaded) | 30 Sep 2026 (factsheet) | loaded from Excel (replaces the factsheet load) |
| Prism / Jio BlackRock | yes | 30 Sep 2026 | not looked at today (already on 30 Sep Excel) | 30 Sep 2026 | nothing new |
| Diviniti / ITI | yes | 30 Sep 2026 | 31 Aug 2026 | 31 Aug 2026 | loaded from Excel |
| Magnum / SBI | yes (factsheet page; portfolio list not re-opened) | 30 Sep 2026 (loaded yesterday) | 31 Aug 2026 | 30 Sep 2026 | nothing new |
| iSIF / ICICI Prudential | yes | 30 Sep 2026 | none listed | 30 Sep 2026 | nothing new |
| Infinity / Kotak | yes | listed but refused until now (September 2026; now opens) | 30 Sep 2026 | 30 Sep 2026 (factsheet) | nothing new |
| Apex / Aditya Birla (watch-only) | yes | 30 Sep 2026 | not checked (watch-only) | 30 Sep 2026 | nothing new |
| Arudha / Bandhan (watch-only) | yes | 30 Sep 2026 | not checked (watch-only) | 31 Aug 2026 | new file waiting for a manual load |

### Funds changed

| Fund | Source | as_of before -> after | Size before -> after (Rs cr) | Risk band before -> after | Unhedged long/short before -> after | Other fields changed |
|---|---|---|---|---|---|---|
| Altiva Hybrid Long-Short (SIF-11) | Excel | 30 Sep 2026 (factsheet) -> 30 Sep 2026 | 11297 -> 11230.53 | 1 -> 1 | 1.62 / 1.42 -> 3.19 / 1.31 | Full holdings, asset split, fixed income and shorts now as on 30 Sep; holdings 284 -> 299; factsheet-only mark removed |
| Altiva Equity Ex-Top 100 Long-Short (SIF-122) | Excel | 30 Sep 2026 (factsheet) -> 30 Sep 2026 | 1548 -> 1534.97 | 5 -> 5 | 0 / 0 -> 0 / 0 | Full holdings and asset split; holdings 46 -> 45; factsheet-only mark removed |
| Altiva Equity Long-Short (SIF-161) | Excel | new fund -> 30 Sep 2026 | new -> 376.64 | none -> 3 | none (card marked "Updating") | New entry: 71 holdings, equity 50.93%, fixed income 49.07% |
| WSIF Equity Ex-Top 100 Long-Short (SIF-105) | Excel | 31 Jul 2026 -> 30 Sep 2026 | 48.45 -> 75.94 | 5 -> 5 (kept) | 1.22 / 0.89 -> 2.47 / 0 | Full holdings and asset split; holdings 55 -> 58 |
| WSIF Equity Long-Short (SIF-111) | Excel | 31 Jul 2026 -> 30 Sep 2026 | 33.73 -> 42.21 | 5 -> 5 (kept) | 3.2 / 0.95 -> 2.73 / 0 | Full holdings and asset split; holdings 55 -> 55 |
| DynaSIF Equity Long-Short (SIF-55) | Excel | 31 Aug 2026 (factsheet) -> 30 Sep 2026 | 407.12 -> 403.87 | 5 -> 5 | 12.81 / 3.63 -> 6.62 / 5.88 | Full holdings, asset split and shorts; holdings 97 -> 80; factsheet-only mark removed |
| DynaSIF Active Asset Allocator Long-Short (SIF-87) | Excel | 31 Aug 2026 (factsheet) -> 30 Sep 2026 | 295.61 -> 377.21 | 2 -> 2 | 6.79 / 0 -> 6.94 / 0 | Full holdings, asset split (corrected, see fail 3) and shorts; holdings 58 -> 75; factsheet-only mark removed |
| DynaSIF Equity Ex-Top 100 Long-Short (SIF-143) | Excel | 31 Aug 2026 (factsheet) -> 30 Sep 2026 | 235.69 -> 343.17 | 5 -> 5 | 0 / 0 -> 0 / 1.89 | Full holdings, asset split and shorts; holdings 54 -> 53; factsheet-only mark removed |
| Summit Equity Long-Short (SIF-150) | Excel | 31 Aug 2026 -> 30 Sep 2026 | 290.94 -> 375.61 | 5 -> 5 | 0 / 0 -> 0 / 0 | Full holdings and asset split; holdings 49 -> 54 |
| qsif Equity Long-Short (SIF-3) | Excel | 30 Sep 2026 (factsheet) -> 30 Sep 2026 | 1018 -> 1017.78 | 3 -> 3 (kept) | 5.81 / 11.83 -> 5.99 / 6.99 | Full holdings, asset split and shorts; holdings 39 -> 41; factsheet-only mark removed |
| qsif Hybrid Long-Short (SIF-7) | Excel | 30 Sep 2026 (factsheet) -> 30 Sep 2026 | 663 -> 662.65 | 3 -> 3 (kept) | 2.5 / 7.94 -> 6.06 / 2.2 | Full holdings, asset split and shorts; holdings 30 -> 33; factsheet-only mark removed |
| qsif Equity Ex-Top 100 Long-Short (SIF-25) | Excel | 30 Sep 2026 (factsheet) -> 30 Sep 2026 | 1110 -> 1110.08 | 3 -> 3 (kept) | 0 / 5.26 -> 14.41 / 7.11 | Full holdings, asset split and shorts; holdings 49 -> 47; factsheet-only mark removed |
| qsif Active Asset Allocator Long-Short (SIF-93) | Excel | 30 Sep 2026 (factsheet) -> 30 Sep 2026 | 909 -> 909.48 | 2 -> 2 (kept) | 0 / 7.56 -> 5.06 / 4.5 | Full holdings, asset split and shorts; holdings 31 -> 38; factsheet-only mark removed |
| qsif Sector Rotation Long-Short (SIF-117) | Excel | 30 Sep 2026 (factsheet) -> 30 Sep 2026 | 62 -> 62.09 | 3 -> 3 (kept) | 0 / 0 -> 9.96 / 0 | Full holdings, asset split and shorts; holdings 25 -> 29; factsheet-only mark removed |
| Diviniti Equity Long-Short (SIF-21) | Excel | 31 Aug 2026 -> 30 Sep 2026 | 291.47 -> 246.02 | 5 -> 5 (kept) | 14.74 / 0 -> 12.35 / 0 | Full holdings and asset split; holdings 58 -> 72 |
| Platinum Hybrid Long-Short (SIF-136) | Excel | 31 Aug 2026 -> 30 Sep 2026 | 369.66 -> 385.37 | 1 -> 1 (kept) | 3.91 / 0.75 -> 3.11 / 0 | Full holdings, asset split and fixed income; holdings 120 -> 114 |


## 2026-10-09 08:30 Lisbon time
Result: 6 funds updated (5 refreshed from the Excel portfolio, 1 new fund added). facts.json was committed and verified (31 funds).

### Data completeness
Up to date: 16 of 31 SIF funds (52%) have data as on 30 Sep 2026
of which 9 from the full Excel portfolio and 7 from the factsheet only (full portfolio still to come)

Not yet up to date

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| Platinum Hybrid Long-Short | Mirae | 31 Aug 2026 | AMC has not published yet |
| RedHex Hybrid Long-Short | HSBC | 31 Aug 2026 | AMC has not published yet |
| WSIF Equity Ex-Top 100 Long-Short | The Wealth Company | 31 Jul 2026 | AMC has not published yet (newest file is still July) |
| WSIF Equity Long-Short | The Wealth Company | 31 Jul 2026 | AMC has not published yet (newest file is still July) |
| Summit Equity Long-Short | Invesco | 31 Aug 2026 | AMC has not published yet |
| DynaSIF Equity Long-Short | 360 ONE | 31 Aug 2026 | AMC has not published yet (no September Excel or factsheet) |
| DynaSIF Active Asset Allocator Long-Short | 360 ONE | 31 Aug 2026 | AMC has not published yet (no September Excel or factsheet) |
| DynaSIF Equity Ex-Top 100 Long-Short | 360 ONE | 31 Aug 2026 | AMC has not published yet (no September Excel or factsheet) |
| Diviniti Equity Long-Short | ITI | 31 Aug 2026 | AMC has not published yet |
| iSIF Equity Ex-Top 100 Long-Short | ICICI Prudential | 31 Aug 2026 | Watch-only, file waiting for a manual load |
| iSIF Hybrid Long-Short | ICICI Prudential | 31 Aug 2026 | Watch-only, file waiting for a manual load |
| iSIF Active Asset Allocator Long-Short | ICICI Prudential | 31 Aug 2026 | Watch-only, file waiting for a manual load |
| iSIF Equity Long-Short | ICICI Prudential | 31 Aug 2026 | Watch-only, file waiting for a manual load |
| Arudha Hybrid Long-Short | Bandhan | 31 Aug 2026 | AMC has not published yet (watch-only) |
| Arudha Equity Long-Short | Bandhan | 31 Aug 2026 | AMC has not published yet (watch-only) |

| AMC | Funds | Up to date | Data as on |
|---|---|---|---|
| Altiva / Edelweiss | 2 | 2 | 30 Sep 2026 (factsheet) |
| RedHex / HSBC | 1 | 0 | 31 Aug 2026 |
| WSIF / The Wealth Company | 2 | 0 | 31 Jul 2026 |
| Titanium / Tata | 2 | 2 | 30 Sep 2026 |
| Platinum / Mirae | 1 | 0 | 31 Aug 2026 |
| Sapphire / Franklin | 1 | 1 | 30 Sep 2026 |
| DynaSIF / 360 ONE | 3 | 0 | 31 Aug 2026 (factsheet) |
| Summit / Invesco | 1 | 0 | 31 Aug 2026 |
| qsif / quant | 5 | 5 | 30 Sep 2026 (factsheet) |
| Prism / Jio BlackRock | 1 | 1 | 30 Sep 2026 |
| Diviniti / ITI | 1 | 0 | 31 Aug 2026 |
| Magnum / SBI | 2 | 2 | 30 Sep 2026 |
| Apex / Aditya Birla | 3 | 3 | 30 Sep 2026 |
| Arudha / Bandhan | 2 | 0 | 31 Aug 2026 |
| iSIF / ICICI Prudential | 4 | 0 | 31 Aug 2026 |

### Fails and fixes

| # | What failed | AMC / fund | Why, in plain words | Resolution |
|---|---|---|---|---|
| 1 | New file waiting for a manual load | ICICI Prudential, all 4 iSIF funds | "iSIF Monthly Portfolio Disclosure September 2026" (30 Sep 2026) is listed; these funds are loaded by hand | Needs Ashish: load the September 2026 iSIF portfolio file by hand. |
| 2 | SIF code not found | SBI, Magnum Equity Ex-Top 100 Long Short Fund (new fund) | Neither the workbook nor the SBI pages state its SIF code, so it was added under the key NEW-SBI-Equity-Ex-Top-100 | Needs Ashish: confirm the SIF code for Magnum Equity Ex-Top 100 Long Short Fund. |
| 3 | Risk band not read | SBI, Magnum Equity Ex-Top 100 Long Short Fund (new fund) | The workbook has no risk band and the newest SBI factsheet (August) does not cover this fund yet | Will retry automatically next run |
| 4 | Unhedged card needs a manual re-read | SBI, Magnum Equity Ex-Top 100 Long Short Fund (new fund) | No reader exists yet for this fund's derivatives (it holds long futures of about 38.9% of net assets); the card shows "Updating" | Needs Ashish: re-read the unhedged card for this fund from the 30 Sep 2026 SBI workbook. |
| 5 | Unhedged card needs a manual re-read | Franklin, Sapphire Equity Long-Short (SIF-96) | No reader exists for this fund; the previous figures (0 / 0) were kept and the card shows "Updating" | Needs Ashish: re-read the unhedged card for SIF-96 from the 30 Sep 2026 Franklin workbook. |
| 6 | Risk band not read | Tata, Titanium Equity (SIF-102) and Titanium Hybrid (SIF-29) | The band in the Tata factsheet is a picture, not text; the previous value (5 for both) was kept | Needs Ashish: check the two bands against the 30 Sep 2026 Titanium factsheet. |

### AMC by AMC

| AMC | Page opened | Newest Excel found | Newest factsheet found | Loaded before (as_of) | Action |
|---|---|---|---|---|---|
| Altiva / Edelweiss | yes | 31 Aug 2026 | 30 Sep 2026 | 30 Sep 2026 (factsheet) | nothing new |
| RedHex / HSBC | yes | 31 Aug 2026 | 31 Aug 2026 | 31 Aug 2026 | nothing new |
| WSIF / The Wealth Company | yes | 31 Jul 2026 | none (no SIF factsheet) | 31 Jul 2026 | nothing new |
| Titanium / Tata | yes | 30 Sep 2026 | 30 Sep 2026 | 30 Sep 2026 (factsheet) | loaded from Excel (replaces the factsheet load) |
| Platinum / Mirae | yes | 31 Aug 2026 | 31 Aug 2026 (named "September 2026") | 31 Aug 2026 | nothing new |
| Sapphire / Franklin | yes | 30 Sep 2026 | 31 Aug 2026 | 31 Aug 2026 (factsheet) | loaded from Excel |
| DynaSIF / 360 ONE | yes | 31 Jul 2026 | 31 Aug 2026 | 31 Aug 2026 (factsheet) | nothing new |
| Summit / Invesco | yes | 31 Aug 2026 | 31 Aug 2026 | 31 Aug 2026 | nothing new |
| qsif / quant | yes | 31 Jul 2026 | 30 Sep 2026 (named "October 2026") | 30 Sep 2026 (factsheet) | nothing new |
| Prism / Jio BlackRock | yes | 30 Sep 2026 | 31 Aug 2026 | 31 Aug 2026 | loaded from Excel |
| Diviniti / ITI | yes | 31 Aug 2026 | 31 Aug 2026 | 31 Aug 2026 | nothing new |
| Magnum / SBI | yes | 30 Sep 2026 | 31 Aug 2026 | 31 Aug 2026 | loaded from Excel; new fund added (Magnum Equity Ex-Top 100 Long Short Fund) |
| Apex / Aditya Birla (watch-only) | yes | 30 Sep 2026 | not checked (watch-only) | 30 Sep 2026 | nothing new |
| Arudha / Bandhan (watch-only) | yes | 31 Aug 2026 | not checked (watch-only) | 31 Aug 2026 | nothing new |
| iSIF / ICICI Prudential (watch-only) | yes | 30 Sep 2026 | not checked (watch-only) | 31 Aug 2026 | new file waiting for a manual load |

### Funds changed

| Fund | Source | as_of before -> after | Size before -> after (Rs cr) | Risk band before -> after | Unhedged long/short before -> after | Other fields changed |
|---|---|---|---|---|---|---|
| Titanium Equity Long-Short (SIF-102) | Excel | 30 Sep 2026 (factsheet) -> 30 Sep 2026 | 343.9 -> 343.89 | 5 -> 5 (kept) | 5.67 / 6.86 -> 6.96 / 4.76 | Full holdings, asset split, fixed income and shorts now as on 30 Sep; holdings 76 -> 93; factsheet-only mark removed |
| Titanium Hybrid Long-Short (SIF-29) | Excel | 30 Sep 2026 (factsheet) -> 30 Sep 2026 | 540.57 -> 540.57 | 5 -> 5 (kept) | 14.74 / 3.82 -> 10.34 / 3.56 | Full holdings, asset split, fixed income and shorts now as on 30 Sep; holdings 93 -> 79; factsheet-only mark removed |
| Sapphire Equity Long-Short (SIF-96) | Excel | 31 Aug 2026 (factsheet) -> 30 Sep 2026 | 216.02 -> 211.03 | 5 -> 5 | frozen (0 / 0) | Full holdings, asset split and sectors; holdings 114 -> 115; factsheet-only mark removed; card marked "Updating" |
| Prism Hybrid Long-Short (SIF-138) | Excel | 31 Aug 2026 -> 30 Sep 2026 | 297.05 -> 458.54 | 1 -> 1 | 9.24 / 4.97 -> 4.69 / 11.39 | Full holdings, asset split, fixed income and shorts; holdings 131 -> 150 |
| Magnum Hybrid Long-Short (SIF-13) | Excel | 31 Aug 2026 -> 30 Sep 2026 | 4001.17 -> 3981.67 | 1 -> 1 | 0 / 0 -> 0 / 0 | Full holdings, asset split and fixed income; holdings 136 -> 135 |
| Magnum Equity Ex-Top 100 Long Short Fund (NEW-SBI-Equity-Ex-Top-100) | Excel | new fund -> 30 Sep 2026 | new -> 1598.35 | none -> not read | none (card marked "Updating") | New entry: 40 holdings, equity 70.45%, fixed income 29.55% |


## 2026-10-08 08:40 Lisbon time
Result: 5 funds updated (all from monthly factsheets). facts.json was committed and verified.

### Data completeness
Up to date: 12 of 30 SIF funds (40%) have data as on 30 Sep 2026
of which 3 from the full Excel portfolio and 9 from the factsheet only (full portfolio still to come)

Not yet up to date

| Fund | AMC | Data as on | Why |
|---|---|---|---|
| Platinum Hybrid Long-Short (SIF-136) | Mirae | 31 Aug 2026 | AMC has not published yet |
| RedHex Hybrid Long-Short (SIF-128) | HSBC | 31 Aug 2026 | AMC has not published yet |
| WSIF Equity Ex-Top 100 Long-Short (SIF-105) | The Wealth Company | 31 Jul 2026 | AMC has not published yet (no August or September Excel, no SIF factsheet) |
| WSIF Equity Long-Short (SIF-111) | The Wealth Company | 31 Jul 2026 | AMC has not published yet (no August or September Excel, no SIF factsheet) |
| Summit Equity Long-Short (SIF-150) | Invesco | 31 Aug 2026 | AMC has not published yet |
| DynaSIF Equity Long-Short (SIF-55) | 360 ONE | 31 Aug 2026 | Excel published every two months, factsheet not out yet |
| DynaSIF Active Asset Allocator Long-Short (SIF-87) | 360 ONE | 31 Aug 2026 | Excel published every two months, factsheet not out yet |
| DynaSIF Equity Ex-Top 100 Long-Short (SIF-143) | 360 ONE | 31 Aug 2026 | Excel published every two months, factsheet not out yet |
| Sapphire Equity Long-Short (SIF-96) | Franklin Templeton | 31 Aug 2026 | AMC has not published yet (moved from July to August in this run) |
| Prism Hybrid Long-Short (SIF-138) | Jio BlackRock | 31 Aug 2026 | AMC has not published yet |
| Diviniti Equity Long-Short (SIF-21) | ITI | 31 Aug 2026 | AMC has not published yet |
| Magnum Hybrid Long-Short (SIF-13) | SBI | 31 Aug 2026 | AMC has not published yet |
| iSIF Equity Ex-Top 100 Long-Short (SIF-34) | ICICI Prudential | 31 Aug 2026 | AMC has not published yet (watch-only) |
| iSIF Hybrid Long-Short (SIF-35) | ICICI Prudential | 31 Aug 2026 | AMC has not published yet (watch-only) |
| iSIF Active Asset Allocator Long-Short (SIF-124) | ICICI Prudential | 31 Aug 2026 | AMC has not published yet (watch-only) |
| iSIF Equity Long-Short (SIF-126) | ICICI Prudential | 31 Aug 2026 | AMC has not published yet (watch-only) |
| Arudha Hybrid Long-Short (SIF-40) | Bandhan | 31 Aug 2026 | AMC has not published yet (watch-only) |
| Arudha Equity Long-Short (SIF-62) | Bandhan | 31 Aug 2026 | AMC has not published yet (watch-only) |

| AMC | Funds | Up to date | Data as on |
|---|---|---|---|
| Altiva / Edelweiss | 2 | 2 | 30 Sep 2026 (factsheet) |
| RedHex / HSBC | 1 | 0 | 31 Aug 2026 |
| WSIF / The Wealth Company | 2 | 0 | 31 Jul 2026 |
| Titanium / Tata | 2 | 2 | 30 Sep 2026 (factsheet) |
| Platinum / Mirae | 1 | 0 | 31 Aug 2026 |
| Sapphire / Franklin Templeton | 1 | 0 | 31 Aug 2026 (factsheet) |
| DynaSIF / 360 ONE | 3 | 0 | 31 Aug 2026 (factsheet) |
| Summit / Invesco | 1 | 0 | 31 Aug 2026 |
| qsif / quant | 5 | 5 | 30 Sep 2026 (factsheet) |
| Prism / Jio BlackRock | 1 | 0 | 31 Aug 2026 |
| Diviniti / ITI | 1 | 0 | 31 Aug 2026 |
| Magnum / SBI | 1 | 0 | 31 Aug 2026 |
| Apex / Aditya Birla | 3 | 3 | 30 Sep 2026 |
| Arudha / Bandhan | 2 | 0 | 31 Aug 2026 |
| iSIF / ICICI Prudential | 4 | 0 | 31 Aug 2026 |

### Fails and fixes

| # | What failed | AMC / fund | Why, in plain words | Resolution |
|---|---|---|---|---|
| 1 | Risk band not read | Edelweiss: SIF-11, SIF-122 | The factsheet shows the band only as a picture, and says it is the band as on 31 Aug 2026. Previous values kept (1 and 5). | Will retry automatically next run (it is read again when the September Excel is loaded) |
| 2 | Risk band not read | Tata: SIF-29, SIF-102 | The factsheet shows the band only as a picture. Previous values kept (5 and 5). | Will retry automatically next run (it is read again when the September Excel is loaded) |
| 3 | Top positions not updated | Tata: SIF-29 | The factsheet lists only the top 10 net equity positions and gives REITs as one total (3.0%), so a top 10 that includes REITs could not be built. Only the fund size was updated; the top positions stay as on 31 Jul 2026 and the card says so. | Will retry automatically next run (fixed when the Excel is loaded) |
| 4 | Two months behind | The Wealth Company: SIF-105, SIF-111 | The newest Excel is still 31 Jul 2026. The AMC has no separate SIF factsheet; its mutual fund factsheet (31 Aug 2026) does not cover the WSIF funds. | Will retry automatically next run |
| 5 | Fund not in the tracker | SBI | The SBI page now lists a second fund, Magnum Equity Ex-Top 100 Long Short Fund, which is not in facts.json. | Needs Ashish: decide whether to add this fund to the tracker. |

Note: for Tata SIF-102 the top positions come from the factsheet table "Top 10 Net Equity Allocation", which is net of futures; the card says so. Mirae names its factsheet "September 2026" but the data inside is as on 31 Aug 2026, so nothing was loaded.

### AMC by AMC

| AMC | Page opened | Newest Excel found | Newest factsheet found | Loaded before (as_of) | Action |
|---|---|---|---|---|---|
| Altiva / Edelweiss | yes | 31 Aug 2026 | 30 Sep 2026 | 31 Aug 2026 | loaded from factsheet |
| RedHex / HSBC | yes | 31 Aug 2026 | 31 Aug 2026 | 31 Aug 2026 | nothing new |
| WSIF / The Wealth Company | yes | 31 Jul 2026 | none for the SIF (mutual fund factsheet 31 Aug 2026 does not cover it) | 31 Jul 2026 | nothing new |
| Titanium / Tata | yes | 31 Jul 2026 | 30 Sep 2026 | 31 Jul 2026 | loaded from factsheet |
| Platinum / Mirae | yes | 31 Aug 2026 | 31 Aug 2026 (file named September 2026) | 31 Aug 2026 | nothing new |
| Sapphire / Franklin Templeton | yes | 31 Jul 2026 | 31 Aug 2026 | 31 Jul 2026 | loaded from factsheet |
| DynaSIF / 360 ONE | yes | 31 Jul 2026 | 31 Aug 2026 | 31 Aug 2026 | nothing new |
| Summit / Invesco | yes | 31 Aug 2026 | 31 Aug 2026 | 31 Aug 2026 | nothing new |
| qsif / quant | yes | 31 Jul 2026 | 30 Sep 2026 (file named October 2026) | 30 Sep 2026 | nothing new |
| Prism / Jio BlackRock | yes | 31 Aug 2026 | 31 Aug 2026 | 31 Aug 2026 | nothing new |
| Diviniti / ITI | yes | 31 Aug 2026 | 31 Aug 2026 | 31 Aug 2026 | nothing new |
| Magnum / SBI | yes | 31 Aug 2026 | 31 Aug 2026 | 31 Aug 2026 | nothing new |
| Apex / Aditya Birla (watch-only) | yes | 30 Sep 2026 | not checked (watch-only) | 30 Sep 2026 | nothing new |
| Arudha / Bandhan (watch-only) | yes | 31 Aug 2026 | not checked (watch-only) | 31 Aug 2026 | nothing new |
| iSIF / ICICI Prudential (watch-only) | yes | 31 Aug 2026 | not checked (watch-only) | 31 Aug 2026 | nothing new |

### Funds changed

| Fund | Source | as_of before -> after | Size before -> after (Rs cr) | Risk band before -> after | Unhedged long/short before -> after, or "frozen" | Other fields changed |
|---|---|---|---|---|---|---|
| Altiva Hybrid Long-Short (SIF-11) | Factsheet | 31 Aug 2026 -> 30 Sep 2026 | 9,267.63 -> 11,297 | 1 -> 1 (not read) | frozen (as on 31 Aug 2026) | top positions, split_source, factsheet_only |
| Altiva Equity Ex-Top 100 Long-Short (SIF-122) | Factsheet | 31 Aug 2026 -> 30 Sep 2026 | 1,366.06 -> 1,548 | 5 -> 5 (not read) | frozen (as on 31 Aug 2026) | top positions, split_source, factsheet_only |
| Titanium Hybrid Long-Short (SIF-29) | Factsheet | 31 Jul 2026 -> 30 Sep 2026 | 587.04 -> 540.57 | 5 -> 5 (not read) | frozen (as on 31 Jul 2026) | split_source, factsheet_only (top positions not changed) |
| Titanium Equity Long-Short (SIF-102) | Factsheet | 31 Jul 2026 -> 30 Sep 2026 | 275.64 -> 343.9 | 5 -> 5 (not read) | frozen (as on 31 Jul 2026) | top positions, split_source, factsheet_only |
| Sapphire Equity Long-Short (SIF-96) | Factsheet | 31 Jul 2026 -> 31 Aug 2026 | 204.5 -> 216.02 | 5 -> 5 (read; benchmark 3) | frozen (as on 31 Jul 2026) | top positions, split_source, factsheet_only |


