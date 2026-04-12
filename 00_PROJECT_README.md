# Right Away Services LLC — Website Documentation Pack

This pack is designed so you can hand a clear, implementation-ready brief to Claude Code and build a **localized, SEO-focused handyman website** for:

- **Business:** Right Away Services LLC
- **Domain:** `rightawayservices.com`
- **Primary market:** Palm Bay, Melbourne, and surrounding Space Coast communities
- **Primary goal:** Generate inbound calls, form leads, and Google local visibility

## Recommended stack

Because this project is highly SEO-driven, the recommended stack is:

- **Next.js 14+ (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Static-first pages with selective server rendering if needed**
- **Schema markup**
- **Programmatic metadata + sitemap generation**

## What is in this pack

1. `01_PRD.md` — product requirements document
2. `02_CONTEXT_ENGINEERING.md` — full implementation context for AI coding
3. `03_CLAUDE.md` — project memory file for Claude Code
4. `04_CLAUDE_CODE_MASTER_PROMPT.md` — master prompt to bootstrap the build
5. `05_INFORMATION_ARCHITECTURE.md` — sitemap, pages, navigation, URL strategy
6. `06_LOCAL_SEO_STRATEGY.md` — localized SEO plan for Space Coast
7. `07_KEYWORD_MAP.md` — keyword clusters and page mapping
8. `08_CONTENT_BRIEF_AND_COPY_GUIDE.md` — tone, conversion copy, content rules
9. `09_TECHNICAL_ARCHITECTURE.md` — code architecture and technical decisions
10. `10_DESIGN_SYSTEM.md` — visual direction and UI system
11. `11_SCHEMA_AND_METADATA_PLAN.md` — structured data and metadata requirements
12. `12_IMPLEMENTATION_PLAN.md` — phased build plan
13. `13_ASSETS_AND_BUSINESS_INFO_CHECKLIST.md` — inputs still needed from the client
14. `14_BLOG_STRATEGY.md` — ongoing SEO content strategy

## Build outcome

The target website should:

- look professional and trustworthy
- rank locally for handyman and home repair queries
- convert mobile users into calls and estimate requests
- support long-term SEO growth through service pages, area pages, and blog content
- be easy to extend without breaking the core marketing site

## Core site assumptions

This pack assumes Right Away Services LLC is a handyman / home services company offering some combination of:

- general handyman work
- home repairs
- drywall repair
- painting touch-ups
- door and window repairs
- fixture installation
- ceiling fan / light fixture replacement
- furniture assembly
- punch-list work
- rental / property maintenance help

If the actual service list differs, update the service pages and keyword map before development starts.

## Recommended repo structure

```txt
rightawayservices/
├─ app/
│  ├─ page.tsx
│  ├─ layout.tsx
│  ├─ services/
│  ├─ service-areas/
│  ├─ about/
│  ├─ contact/
│  ├─ blog/
│  ├─ faq/
│  ├─ privacy-policy/
│  ├─ terms/
│  ├─ sitemap.ts
│  └─ robots.ts
├─ components/
├─ content/
│  ├─ services/
│  ├─ service-areas/
│  ├─ faqs/
│  └─ blog/
├─ lib/
│  ├─ seo/
│  ├─ schema/
│  └─ utils/
├─ public/
│  ├─ images/
│  ├─ logos/
│  └─ icons/
├─ docs/
└─ package.json
```

## Success criteria

- Lighthouse SEO score: **95+**
- Fast mobile experience
- Unique metadata for every page
- Unique copy for service and city pages
- Strong local trust signals
- Clear click-to-call and estimate-request CTAs
- Proper schema markup and sitemap
