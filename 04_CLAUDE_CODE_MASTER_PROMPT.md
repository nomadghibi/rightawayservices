# Claude Code Master Prompt — Right Away Services LLC Website

Use this prompt in Claude Code as the main build instruction.

---

You are a senior full-stack engineer and local SEO website architect.

Build a production-ready marketing website for **Right Away Services LLC**, a local handyman / home services company serving Florida’s Space Coast.

## Goal
Create a clean, modern, highly localized website for `rightawayservices.com` designed to generate phone calls and estimate requests, with especially strong SEO targeting for:

- Palm Bay, FL
- Melbourne, FL
- West Melbourne, FL
- nearby Space Coast communities

## Core outcome
The site must look trustworthy, load fast, convert mobile visitors, and support strong local SEO for handyman and home repair searches.

## Tech stack
Use:
- Next.js 14+ App Router
- TypeScript
- Tailwind CSS

Prefer:
- modular architecture
- reusable components
- minimal dependencies
- strongly typed content objects
- SEO-first implementation

## Required pages
Create:
- Home
- About
- Services overview
- multiple individual service pages
- Service Areas overview
- multiple individual service area pages
- Contact / Request Estimate
- FAQ
- Blog index
- 3 starter blog posts
- Privacy Policy
- Terms of Service

## Core services to scaffold
Start with these service pages:
- handyman services
- home repairs
- drywall repair
- interior painting touch-ups
- door and window repairs
- fixture installation
- ceiling fan installation
- furniture assembly
- property maintenance

## Service area pages to scaffold
Create initial area pages for:
- Palm Bay, FL
- Melbourne, FL
- West Melbourne, FL
- Malabar, FL
- Grant-Valkaria, FL
- Indialantic, FL
- Melbourne Beach, FL
- Satellite Beach, FL
- Indian Harbour Beach, FL
- Rockledge, FL
- Viera, FL
- Suntree, FL

## SEO requirements
Implement:
- page-specific metadata
- unique title and meta description for every page
- structured data utilities
- LocalBusiness schema
- FAQ schema where relevant
- breadcrumb schema if useful
- dynamic sitemap
- robots configuration
- canonical handling
- internal links between related services and service areas
- keyword-conscious headings and body copy without stuffing

## Content rules
- write natural, human-sounding content
- avoid generic agency fluff
- avoid duplicate service area copy
- make every city page feel locally relevant
- use conversion-focused CTAs
- make copy homeowner-friendly and practical

## UX requirements
- sticky header
- prominent phone CTA
- short estimate form
- testimonial cards
- service cards
- local area cards
- FAQ accordion
- trust badges
- final CTA sections on every main page

## Design direction
Create a modern local-service website aesthetic:
- professional
- clean
- trustworthy
- strong whitespace
- readable typography
- high-contrast CTAs
- visually credible for a handyman business

## Architecture requirements
Set up:
- `/app`
- `/components`
- `/content`
- `/lib/seo`
- `/lib/schema`
- `/public/images`
- clear reusable page sections
- typed content files for services and cities

## Additional implementation requirements
- image optimization
- semantic HTML
- accessible buttons and forms
- good mobile responsiveness
- footer with local service references
- contact info placeholders that are easy to update

## Important constraints
- do not overcomplicate
- do not add CMS unless needed
- do not create duplicate thin pages
- do not break type safety
- do not use unnecessary animations
- optimize for speed and maintainability

## Final deliverables
Produce:
1. full working codebase
2. starter localized content
3. reusable components
4. SEO setup
5. schema setup
6. deployment-ready structure
7. brief README with setup steps

At the end, provide:
- file tree
- setup instructions
- list of pages created
- list of components created
- list of SEO features implemented
