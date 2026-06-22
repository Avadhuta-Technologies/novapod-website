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

`src/components/ContactForm.tsx` currently simulates submission on the client.
Wire the `handleSubmit` function to your endpoint (or a service like Formspree /
a Next.js route handler) to receive real enquiries.
