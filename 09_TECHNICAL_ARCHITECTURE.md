# Technical Architecture — Right Away Services LLC Website

## Recommended stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- MDX or typed TS content files
- Vercel deployment

## Why this stack

This project is local SEO-heavy, so we want:
- strong metadata support
- fast page rendering
- flexible static generation
- maintainable code
- easy future expansion

Next.js is the best fit because it supports:
- metadata API
- structured routing
- static page generation
- image optimization
- sitemap and robots generation
- strong performance when used correctly

## App structure

```txt
app/
  layout.tsx
  page.tsx
  about/page.tsx
  services/page.tsx
  services/[slug]/page.tsx
  service-areas/page.tsx
  service-areas/[slug]/page.tsx
  contact/page.tsx
  faq/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  privacy-policy/page.tsx
  terms/page.tsx
  sitemap.ts
  robots.ts
```

## Component structure

```txt
components/
  layout/
  navigation/
  sections/
  cards/
  forms/
  seo/
  ui/
```

## Content structure

```txt
content/
  services.ts
  serviceAreas.ts
  faqs.ts
  blogPosts.ts
```

## SEO utilities

```txt
lib/
  seo/
    metadata.ts
    pageMetadata.ts
  schema/
    localBusiness.ts
    faq.ts
    breadcrumbs.ts
    service.ts
```

## Metadata approach

Use page-level metadata generation with:
- title
- description
- canonical
- open graph
- twitter metadata where useful

## Content rendering approach

### Preferred
Typed content objects stored in TS files

Benefits:
- easy for Claude Code to scaffold
- no CMS complexity
- fast iteration
- easy static generation

### Optional later
MDX blog content if editorial volume increases

## Forms

### Simple version
- standard contact / estimate form
- fields:
  - name
  - phone
  - email
  - city
  - service needed
  - message

### Submission options
- Formspree
- Resend + server action
- email forwarding handler
- custom API route

Choose the simplest reliable implementation first.

## Performance rules

- optimize images
- prefer static assets
- avoid heavy animation libraries unless truly needed
- keep client components limited
- do not load large UI frameworks unnecessarily

## Accessibility rules

- semantic headings
- form labels
- keyboard-accessible nav
- sufficient contrast
- alt text on images
- focus states on interactive elements

## Analytics setup

Recommended:
- Google Analytics 4
- Google Search Console
- optional Microsoft Clarity

## Deployment steps

1. push repo to GitHub
2. deploy to Vercel
3. connect custom domain
4. add analytics
5. submit sitemap to Search Console
6. verify indexing
