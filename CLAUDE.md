# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for **Check Driving School** (Richmond, BC). Nuxt 3 SSR/static site deployed at `checkdrive.ca`. No backend — `server/` contains only a tsconfig, and there are no API routes or tests.

## Commands

```bash
npm run dev        # dev server on http://localhost:3000
npm run build      # SSR production build
npm run generate   # static site generation (used for deployment)
npm run preview    # preview the production build
```

There is no lint, typecheck, or test script configured. `postinstall` runs `nuxt prepare` automatically.

Node version: `package.json` engines field pins **Node 24.x**, but `.nvmrc` says `22`. These are inconsistent — recent commit history (`31e6891`) moved to 24 while `.nvmrc` was left behind. Prefer Node 24 for parity with CI/Vercel.

Site URL override: `NUXT_PUBLIC_SITE_URL` env var (defaults to `https://checkdrive.ca/`) — consumed by `nuxt-simple-sitemap` and `@nuxtjs/robots`.

## Architecture

Standard Nuxt 3 file-based routing. Four pages under `pages/`: `index` (home with greeting + pricing), `about`, `program`, `policy`. `app.vue` wraps every page with `<Navbar />` + `<NuxtPage />`. Nav links are hardcoded in `components/navBar.vue` — update there when adding a page.

**Programs & pricing content** lives in `pages/pricing.vue` as a typed `programs` array (tier, title, price, features, optional tip/savings/payment options) rendered through `components/programPackageCard.vue`. Add-ons and payment/important notes are inline in the page. Price changes = edit this file.

**Policy page content** lives in `pages/policy.vue` as a typed `policies: PolicyItem[]` array (title, paragraphs, bullets, optional subsections) rendered through `components/policyCard.vue`. Edit the array to change policy text.

## Styling

Tailwind CSS + Preline UI (interactive components like collapsible nav) + daisyUI is listed as a devDependency but not wired into `tailwind.config.js` plugins. Preline's JS is loaded via `nuxt.config.ts` `app.head.script` from `/assets/preline/preline.js` (served from `public/assets/preline/`). Tailwind's `content` globs cover `components/`, `pages/`, `layouts/`, `plugins/`, `app.vue`, and `nuxt.config.ts`.
