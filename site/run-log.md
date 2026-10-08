# SIF Tracker daily run log

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

