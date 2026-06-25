# Novapod Website

Marketing site for **Novapod** — document reconciliation AI that runs inside your infrastructure. Built with **Next.js (App Router)**, **Tailwind CSS v4**, and TypeScript.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
src/
  app/                 # Routes (App Router)
    page.tsx           # Home
    how-it-works/
    use-cases/
    discovery-sprint/
    about/
    contact/
    blog/              # Blog index + [slug] post pages
  components/          # UI + section components
  lib/
    site.ts            # Nav, brand, contact config
    content.tsx        # Shared page content (use cases, pillars, FAQs)
    blog.ts            # Reads markdown posts from /content/blog
content/
  blog/                # Markdown blog posts (see below)
```

## Design system

- **Theme:** a trust-forward blue palette (`brand-*`) on a cool slate neutral scale (`ink-*`), defined in `src/app/globals.css` via Tailwind v4 `@theme`.
- **Type:** `Sora` for display headings, `Inter` for body (loaded with `next/font`).
- Tune colors in one place: the `@theme` block in `globals.css`.

## SEO

SEO is wired in via Next.js metadata conventions:

- **Sitemap** — [src/app/sitemap.ts](src/app/sitemap.ts) generates `/sitemap.xml`
  from the static routes plus every blog post (with real `lastmod` dates).
- **Robots** — [src/app/robots.ts](src/app/robots.ts) generates `/robots.txt`
  (allows all, disallows `/api/`, points at the sitemap).
- **Canonical URLs** on every page; **per-page** titles & descriptions.
- **Open Graph image** — a branded 1200×630 card generated at build time by
  [src/app/opengraph-image.tsx](src/app/opengraph-image.tsx).
- **Structured data (JSON-LD)** — `Organization` + `WebSite` site-wide,
  `Service` + `FAQPage` on the home page, `BlogPosting` on each article.
- **Robots directives** (`index, follow`, large image previews for Googlebot).

Set `NEXT_PUBLIC_SITE_URL` to your production origin so all of the above resolve
to absolute URLs (see `.env.example`).

### Submitting to Google

1. Deploy with `NEXT_PUBLIC_SITE_URL` set to the live domain.
2. Add the property in [Google Search Console](https://search.google.com/search-console)
   and verify ownership (DNS record or the HTML-tag method).
3. Under **Sitemaps**, submit `sitemap.xml`.
4. Use **URL Inspection → Request indexing** for the homepage to speed up the
   first crawl. Validate rich results with the
   [Rich Results Test](https://search.google.com/test/rich-results).

## Adding a blog post

The blog is file-based — **no CMS**. To publish, drop a Markdown file into `content/blog/`. The filename becomes the URL slug (`content/blog/my-post.md` → `/blog/my-post`).

Each post needs frontmatter:

```markdown
---
title: "Your Post Title"
description: "One or two sentences shown on cards and in search/social previews."
date: "2026-06-22"        # YYYY-MM-DD — controls sort order
author: "Novapod Team"
category: "Compliance"     # shown as a badge
tags: ["reconciliation", "security"]
---

Your content in **Markdown**. GitHub-flavored Markdown is supported
(tables, task lists, etc.). Headings get anchor links automatically.
```

Reading time and date formatting are computed automatically. Posts are sorted newest-first. See the two example posts in `content/blog/` for reference.

> Tip: ask Claude to generate a new post file directly into `content/blog/` following the frontmatter schema above.

## Contact form

The contact form ([src/components/ContactForm.tsx](src/components/ContactForm.tsx))
POSTs to a Next.js Route Handler at [src/app/api/contact/route.ts](src/app/api/contact/route.ts),
which emails the submission to **vikram@novapod.ai** through **Gmail** (via Nodemailer).

### Setup

1. Create a Gmail **app password** (requires 2-Step Verification on the account):
   - Enable 2FA: <https://myaccount.google.com/security>
   - Generate one: <https://myaccount.google.com/apppasswords>

2. Copy `.env.example` to `.env.local` and fill it in:

   ```bash
   cp .env.example .env.local
   ```

   | Variable | Purpose |
   | --- | --- |
   | `GMAIL_USER` | The Gmail address that sends the mail |
   | `GMAIL_APP_PASSWORD` | The 16-char app password (spaces are stripped) |
   | `CONTACT_TO` | Recipient (defaults to `vikram@novapod.ai`) |
   | `CONTACT_FROM` | Optional. Defaults to `Novapod Website <GMAIL_USER>` |

   > Gmail only sends as the authenticated account (or a verified
   > "Send mail as" alias), so `CONTACT_FROM` must match `GMAIL_USER` or such an
   > alias. The submitter's address is set as `Reply-To`, so replies go to them.

3. Restart `npm run dev` so the new env vars are picked up.

If Gmail isn't configured, the API responds with a clear error and logs a hint to
the server console; the form shows a friendly failure message.

### Behavior & hardening

- Server-side validation of required fields and email format (returns `422` with
  field errors on bad input).
- A hidden honeypot field silently absorbs bot submissions.
- The submitter's address is set as `Reply-To`, so you can reply directly from
  your inbox.
