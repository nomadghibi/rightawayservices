# Context Engineering — Right Away Services LLC Website

This document gives Claude Code the context needed to design and build the full site correctly.

## 1. Mission

Build a professional handyman website for **Right Away Services LLC** that is aggressively optimized for local SEO in Florida’s Space Coast, especially **Palm Bay** and **Melbourne**, while maintaining strong UX, performance, and clean code quality.

## 2. What success looks like

The site should:

- feel like a real local business, not a generic template
- rank for handyman + city and home repair + city searches
- drive phone calls and quote requests
- make mobile users take action quickly
- be easy to extend with more services and more city pages later

## 3. Business model assumptions

Right Away Services LLC is a handyman / home services business.

The site is intended to market and sell local services, not digital products or ecommerce.

Primary lead generation mechanisms:
- phone call
- estimate form
- optional SMS link
- optional email inquiry

## 4. User intent assumptions

Main user intents:
- “I need a handyman near me”
- “I need someone to fix something in my house”
- “I need a reliable local handyman in Palm Bay / Melbourne”
- “I need quick help for a repair or installation”
- “I want a quote before hiring”

## 5. Important implementation rules

### Rule 1 — SEO is not an afterthought
The architecture must support SEO from the start:
- semantic HTML
- metadata API usage
- page-specific schema
- internal link structure
- content model for services and city pages
- sitemap and robots

### Rule 2 — No duplicate city pages
Every area page must include unique:
- intro copy
- local references
- customer pain points
- CTA wording
- FAQ entries
- internal links

### Rule 3 — Mobile conversion first
Most local service traffic will be mobile-first.
Prioritize:
- sticky call CTA
- thumb-friendly buttons
- compressed hero section
- short contact forms
- prominent trust elements

### Rule 4 — Fast performance
Avoid bloated animations, huge images, or overbuilt UI.
The site should feel polished but lightweight.

### Rule 5 — Components must be reusable
Create reusable primitives for:
- Section headers
- CTA blocks
- Service cards
- Area cards
- FAQ accordions
- Review/testimonial cards
- Trust badges
- Local SEO content sections

## 6. Technical assumptions

Recommended stack:
- Next.js 14 App Router
- TypeScript strict mode
- Tailwind CSS
- Content stored in TS/MDX or typed content collections
- Static generation for service and area pages where possible

## 7. Required page templates

Claude Code should create reusable templates for:

1. Home page
2. Service overview page
3. Single service page
4. Service areas overview page
5. Single service area page
6. About page
7. Contact page
8. FAQ page
9. Blog index page
10. Blog article page
11. Legal page template

## 8. Home page section order

Recommended home page order:

1. Header
2. Hero
3. Trust strip
4. Core services
5. Why choose us
6. Service areas
7. Featured jobs / before-after
8. Testimonials
9. FAQ
10. Final CTA
11. Footer

## 9. Tone and voice

Tone should be:
- confident
- practical
- straightforward
- local
- trustworthy
- clean, not hype-heavy

Avoid:
- corporate fluff
- vague claims
- excessive adjectives
- spammy keyword repetition

## 10. Local SEO logic

The website should build topical and geographic relevance through:

- service pages
- area pages
- service-area crosslinks
- blog content tied to homeowner questions
- location references in headings and FAQs
- structured data
- consistent NAP and contact details

## 11. Content object model

Each service page should ideally include:

```ts
type ServicePage = {
  slug: string
  serviceName: string
  shortDescription: string
  heroTitle: string
  heroSubtitle: string
  intro: string
  problemsSolved: string[]
  serviceIncludes: string[]
  whyChooseUs: string[]
  faqs: { question: string; answer: string }[]
  relatedAreas: string[]
  metadata: {
    title: string
    description: string
  }
}
```

Each area page should ideally include:

```ts
type AreaPage = {
  slug: string
  city: string
  state: string
  heroTitle: string
  heroSubtitle: string
  intro: string
  localContext: string
  featuredServices: string[]
  reasonsToChooseUs: string[]
  faqs: { question: string; answer: string }[]
  nearbyAreas: string[]
  metadata: {
    title: string
    description: string
  }
}
```

## 12. Required deliverables Claude Code should produce

- working Next.js website
- reusable component library
- typed content model for services and cities
- metadata setup
- schema utilities
- sitemap and robots
- clean responsive UI
- starter content
- deployment-ready repo

## 13. Constraints

- do not over-engineer
- do not add unnecessary dependencies
- do not use a giant CMS unless requested
- do not use duplicate placeholder copy across service area pages
- do not sacrifice page speed for visual gimmicks

## 14. Deployment recommendation

Deploy on **Vercel** with:
- connected custom domain
- analytics enabled
- image optimization
- Search Console verification
- environment variables only if forms or integrations require them

## 15. Final quality bar

The finished site should look credible enough that a real Florida homeowner would trust the company and feel comfortable calling immediately.
