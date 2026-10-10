# SIF Tracker daily run log

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
