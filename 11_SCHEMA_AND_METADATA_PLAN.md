# Schema and Metadata Plan — Right Away Services LLC

## Metadata rules

Every indexable page must have:
- unique title
- unique meta description
- canonical URL
- Open Graph basics
- strong localized relevance where appropriate

## Homepage metadata example

### Title
`Handyman Services in Palm Bay & Melbourne, FL | Right Away Services LLC`

### Description
`Right Away Services LLC provides reliable handyman and home repair services in Palm Bay, Melbourne, and nearby Space Coast communities. Call today for fast, professional service.`

## Service page metadata formula

`[Service Name] in Palm Bay & Melbourne, FL | Right Away Services LLC`

Example:
`Drywall Repair in Palm Bay & Melbourne, FL | Right Away Services LLC`

## Area page metadata formula

`Handyman Services in [City], FL | Right Away Services LLC`

Example:
`Handyman Services in Palm Bay, FL | Right Away Services LLC`

## Blog metadata formula

`[Article Topic] | Right Away Services LLC`

Add city references only when naturally relevant.

## Required schema types

### 1. LocalBusiness
Include:
- business name
- URL
- phone
- service area
- address if public
- opening hours if available
- logo
- image
- sameAs if social profiles exist

### 2. Service
Use on service pages to describe:
- service name
- provider
- area served

### 3. FAQPage
Use on pages with visible FAQ content.

### 4. BreadcrumbList
Use on service pages, area pages, and blog posts.

### 5. WebSite
Use on root site layout if useful.

## Service area representation

Use `areaServed` in schema with relevant local cities where appropriate.

## Important notes

- only mark up content that is visibly present on the page
- do not use deceptive schema
- keep schema consistent with real business details
- update placeholders before launch

## Technical implementation guidance

Create helper functions such as:
- `buildLocalBusinessSchema()`
- `buildServiceSchema(service)`
- `buildFAQSchema(faqs)`
- `buildBreadcrumbSchema(items)`

## Sitemap requirements

Include:
- homepage
- all core pages
- all service pages
- all area pages
- all blog posts

## Robots requirements

Allow crawling of public pages.
Block:
- admin routes if any
- preview/test routes if any

## Canonical rules

Choose one canonical site version.
Preferred:
- `https://rightawayservices.com`
