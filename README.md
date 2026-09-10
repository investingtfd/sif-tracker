# SIF Tracker — for investingtfd.com

A daily-updating dashboard of India's Specialised Investment Fund (SIF) NAVs,
sourced directly from AMFI, meant to be embedded into a page on
investingtfd.com via a Custom HTML block (confirmed working on your WordPress.com
Personal plan).

## What's in this folder

- `scripts/parse_sif.py` — parses AMFI's SIF NAV text formats: the daily bulk
  file, and the per-provider historical export (`SIF_DownloadNAVHistoryReport.aspx`)
  used for the since-inception backfill below.
- `scripts/fetch_daily.py` — downloads the live NAV file from AMFI and upserts it
  into `data/history.csv`. Safe to re-run; never duplicates a date.
- `scripts/build_history_from_raw.py` — one-time backfill script: rebuilds
  `data/history.csv` from the 17 per-provider historical dumps in `data/raw/`
  (one file per SIF sponsor, fetched since each fund's actual inception date).
  You shouldn't need to re-run this — it's here for reference/re-backfill if
  ever needed.
- `scripts/build_site_data.py` — turns `data/history.csv` into `site/data.json`,
  which the dashboard reads. Filters to **Regular Plan only** (as an MFD you
  only earn commission on Regular Plan) — Direct Plan NAVs stay in
  `history.csv` at no extra cost, in case that scope ever changes.
- `data/history.csv` — the accumulated NAV history: real data for all 121 SIF
  schemes (63 Regular + 58 Direct), since each scheme's actual inception date
  (earliest: 08-Oct-2025), through 09-Sep-2026 — 232 distinct trading days.
  Every day going forward is added automatically by the daily job.
- `data/raw/` — the raw per-provider historical dumps the backfill was built
  from (kept for reference/audit; not needed for the site to run).
- `site/index.html` + `site/data.json` — the dashboard itself. Self-contained,
  no build step, no external dependencies. Shows the 63 Regular Plan schemes.
- `.github/workflows/daily-fetch.yml` — the automation: runs once a day, pulls
  fresh NAV data, rebuilds `data.json`, commits it back to the repo. Vercel
  picks up that commit and redeploys automatically.

## One thing to verify on first run

I couldn't test whether AMFI's server will actually respond to a GitHub
Actions runner (their IPs aren't Indian, similar to why the full amfiindia.com
website was geo-blocked for your browser). The raw data file worked from my
own tooling without a VPN, which is a good sign, but that's a different
network path than GitHub's. **The first time the workflow runs, check the
Actions tab to confirm it succeeded** — if AMFI blocks it, the fix is running
the fetch step through a proxy or a small always-on box in India instead,
which is a quick change to `daily-fetch.yml`, not a redesign.

## Setup steps (yours to do — account creation can't be done on your behalf)

1. **Create a GitHub account** at github.com if you don't have one already.
2. **Create a new repository** (e.g. `sif-tracker`), and push this folder's
   contents to it — or tell me once you have the empty repo and I'll prepare
   exact git commands for you to run.
3. **Create a Vercel account** at vercel.com — sign up with your GitHub
   account, it's a one-click OAuth link, no separate password.
4. In Vercel, **"Add New Project"** → import the `sif-tracker` GitHub repo →
   set **Root Directory** to `site` → deploy. No build command needed, it's a
   static site. Vercel gives you a URL like `sif-tracker.vercel.app`.
5. Back on investingtfd.com: add a new page, insert a **Custom HTML** block
   (confirmed available on your plan), and paste:
   ```html
   <iframe src="https://sif-tracker.vercel.app" style="width:100%; height:900px; border:none;" title="SIF NAV Tracker"></iframe>
   ```
6. Preview the page (not Publish) and confirm it looks right, then publish
   when you're happy with it.

## What's still open / decisions for you

- **Compliance wording**: the footer disclaimer is a first draft (ARN
  disclosure, "not investment advice," past-performance language). Worth a
  look before this goes live on a client-facing site under your ARN.
- **What "deep analysis" actually means here**: right now this is NAV +
  1-day change + since-tracked change + an indexed comparison chart, backed
  by full since-inception history for every scheme. That's already more than
  a plain NAV table, but if you want risk-adjusted comparisons, category
  benchmarks, or drawdown stats, that's the next layer to design — tell me
  which one matters most to your clients and we build that next.
