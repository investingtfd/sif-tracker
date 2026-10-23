#!/usr/bin/env node
/*
 * Sync SIF fund pages to WordPress.
 *
 * Builds one page per fund from site/facts.json + site/data.json (site/pagegen.js),
 * then reconciles with the WordPress pages under the SIF Tracker parent page.
 *
 *   existing page, content changed  -> update the body only (status and Yoast fields untouched)
 *   existing page, content same     -> nothing
 *   fund with no page yet           -> create as DRAFT (never auto-published), report it
 *   page with no fund any more      -> report only (never deleted, never unpublished)
 *
 * Meta title and description are static by design (no NAV or dates), so they never need a refresh.
 * For a brand-new draft, Yoast title and description cannot be written over REST; the report says so.
 *
 * Env: WP_URL (default https://investingtfd.com), WP_USER, WP_APP_PASSWORD (WordPress application password),
 *      DRY_RUN=1 to report without writing, REPORT_FILE for the issue text (written only when attention is needed).
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const PARENT_ID = 896; // /sif-tracker/
const WP = (process.env.WP_URL || 'https://investingtfd.com').replace(/\/$/, '');
const USER = process.env.WP_USER || '';
const PASS = process.env.WP_APP_PASSWORD || '';
const DRY = process.env.DRY_RUN === '1';
const REPORT_FILE = process.env.REPORT_FILE || path.join(ROOT, 'sync-report-issue.md');
const WRAP = (html) => '<!-- wp:html -->' + html + '<!-- /wp:html -->';

function summary(lines) {
  const text = lines.join('\n') + '\n';
  console.log(text);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, text);
}

async function wp(method, route, body) {
  const url = WP + '/wp-json' + route;
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: 'Basic ' + Buffer.from(USER + ':' + PASS).toString('base64'),
      'Content-Type': 'application/json',
      'User-Agent': 'sif-tracker-page-sync',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(method + ' ' + route + ' -> ' + res.status + ' ' + text.slice(0, 160).replace(/\s+/g, ' '));
  return text ? JSON.parse(text) : null;
}

async function listExisting() {
  const out = [];
  for (let page = 1; page < 20; page++) {
    const rows = await wp('GET', '/wp/v2/pages?parent=' + PARENT_ID + '&per_page=100&page=' + page +
      '&status=any&context=edit&_fields=id,slug,status,content');
    out.push(...rows);
    if (rows.length < 100) break;
  }
  return out;
}

function sane(p) {
  const bare = p.html.replace(/<style[\s\S]*?<\/style>|<script[\s\S]*?<\/script>/g, '');
  if (/\bNaN\b|undefined|\bnull\b/.test(bare)) return 'contains NaN/undefined/null';
  if ((p.html.match(/<h1[ >]/g) || []).length !== 1) return 'not exactly one H1';
  if (!/FAQPage/.test(p.html)) return 'FAQ markup missing';
  if (p.html.length < (p.kind === 'amc' ? 3000 : 3000)) return 'page is suspiciously short';
  return null;
}

async function main() {
  if (!USER || !PASS) {
    console.log('::notice::WP_USER / WP_APP_PASSWORD are not set, so page sync is skipped.');
    return 0;
  }
  const facts = JSON.parse(fs.readFileSync(path.join(SITE, 'facts.json'), 'utf8'));
  const data = JSON.parse(fs.readFileSync(path.join(SITE, 'data.json'), 'utf8'));
  const SIFPAGES = require(path.join(SITE, 'pagegen.js'));
  const fundPages = SIFPAGES.build(facts.funds || facts, data);
  const amcPages = SIFPAGES.buildAmc ? SIFPAGES.buildAmc(facts.funds || facts, data) : [];
  const built = fundPages.concat(amcPages);

  // Guard: a broken feed must never rewrite the site.
  if (fundPages.length < 30) {
    summary(['## Page sync stopped', 'Only ' + fundPages.length + ' fund pages were built (expected 30 or more). Nothing was written.']);
    fs.writeFileSync(REPORT_FILE, 'The fund page sync built only ' + fundPages.length + ' fund pages from facts.json and data.json, so it stopped without writing. Please check the daily data.\n');
    return 1;
  }
  const slugs = built.map((p) => p.slug);
  if (new Set(slugs).size !== slugs.length) {
    summary(['## Page sync stopped', 'Duplicate page addresses were generated. Nothing was written.']);
    fs.writeFileSync(REPORT_FILE, 'The fund page sync generated duplicate page addresses, so it stopped without writing.\n');
    return 1;
  }

  const existing = await listExisting();
  const bySlug = new Map(existing.map((e) => [e.slug, e]));

  const updated = [], unchanged = [], created = [], skipped = [], failed = [];
  for (const p of built) {
    const why = sane(p);
    if (why) { skipped.push([p.slug, why]); continue; }
    const content = WRAP(p.html);
    const cur = bySlug.get(p.slug);
    try {
      if (!cur) {
        if (!DRY) {
          await wp('POST', '/wp/v2/pages', {
            title: p.name, slug: p.slug, parent: PARENT_ID, status: 'draft', content,
            meta: { neve_meta_disable_title: 'on' },
          });
        }
        created.push(p);
      } else if ((cur.content && cur.content.raw) !== content) {
        if (!DRY) await wp('POST', '/wp/v2/pages/' + cur.id, { content });
        updated.push(p.slug);
      } else {
        unchanged.push(p.slug);
      }
    } catch (e) {
      failed.push([p.slug, e.message]);
    }
  }
  const builtSlugs = new Set(slugs);
  const orphans = existing.filter((e) => !builtSlugs.has(e.slug)).map((e) => e.slug + ' (' + e.status + ')');

  const lines = [
    '## Fund page sync' + (DRY ? ' (dry run, nothing written)' : ''),
    '',
    '| Result | Count |', '| --- | --- |',
    '| Updated | ' + updated.length + ' |',
    '| Unchanged | ' + unchanged.length + ' |',
    '| New drafts created | ' + created.length + ' |',
    '| Skipped (failed sanity check) | ' + skipped.length + ' |',
    '| Failed | ' + failed.length + ' |',
    '| Pages with no matching fund | ' + orphans.length + ' |',
  ];
  if (updated.length) lines.push('', 'Updated: ' + updated.join(', '));
  if (created.length) lines.push('', 'New drafts: ' + created.map((p) => p.slug).join(', '));
  if (skipped.length) lines.push('', 'Skipped: ' + skipped.map((s) => s[0] + ' (' + s[1] + ')').join('; '));
  if (failed.length) lines.push('', 'Failed: ' + failed.map((f) => f[0] + ': ' + f[1]).join('; '));
  if (orphans.length) lines.push('', 'No matching fund: ' + orphans.join(', '));
  summary(lines);

  // Only raise an issue when a person has something to do.
  const todo = [];
  if (created.length) {
    todo.push('New fund page drafts were created. Each needs its Yoast SEO title and description set and then a review before publishing:');
    created.forEach((p) => todo.push('- `' + p.slug + '`\n  - Title: ' + p.title + '\n  - Description: ' + p.description));
  }
  if (failed.length) todo.push('', 'Some pages failed to sync:', ...failed.map((f) => '- `' + f[0] + '`: ' + f[1]));
  if (skipped.length) todo.push('', 'Some pages were skipped by the sanity check:', ...skipped.map((s) => '- `' + s[0] + '`: ' + s[1]));
  if (orphans.length) todo.push('', 'These pages no longer match a fund in the data (left untouched): ' + orphans.join(', '));
  if (todo.length && !DRY) fs.writeFileSync(REPORT_FILE, todo.join('\n') + '\n');

  return failed.length ? 1 : 0;
}

main().then((code) => process.exit(code), (e) => {
  console.error('::error::' + e.message);
  try { fs.writeFileSync(REPORT_FILE, 'The fund page sync crashed: ' + e.message + '\n'); } catch (_) {}
  process.exit(1);
});
