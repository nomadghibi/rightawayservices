# Right Away Services LLC — Website

Production-ready local SEO marketing website for **Right Away Services LLC**, a handyman / home services company serving Florida's Space Coast.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Static page generation with programmatic metadata

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Push to GitHub, then deploy to **Vercel**:

1. Import repository into Vercel
2. Set **Framework Preset** to Next.js
3. Connect your `rightawayservices.com` custom domain
4. Deploy

---

## Before Launch Checklist

Update these placeholders in `lib/seo/metadata.ts`:

| Placeholder | What to Replace |
|---|---|
| `(321) 400-0000` | Real phone number |
| `hello@rightawayservices.com` | Real email address |
| `https://rightawayservices.com` | Live domain (already correct if using this domain) |

Set these environment variables for EmailJS:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

The contact form in `components/forms/EstimateForm.tsx` posts directly to the EmailJS API.
Make sure your EmailJS template uses these variables:

- `name`
- `phone`
- `email`
- `city`
- `service`
- `message`
- `reply_to`

Recommended subject:

```text
New Estimate Request from {{name}} - Right Away Services LLC
```

Recommended template body:

```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {{name}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>City:</strong> {{city}}</p>
<p><strong>Service Needed:</strong> {{service}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

Add real photos to `public/images/` and update image references in pages.

---

## Pages Created

| Page | URL | Notes |
|---|---|---|
| Home | `/` | Hero, services, areas, testimonials, FAQ, CTA |
| About | `/about` | Company story, values, who we serve |
| Services Overview | `/services` | Grid of all services |
| Handyman Services | `/services/handyman-services` | — |
| Home Repairs | `/services/home-repairs` | — |
| Drywall Repair | `/services/drywall-repair` | — |
| Interior Painting Touch-Ups | `/services/interior-painting-touchups` | — |
| Door & Window Repairs | `/services/door-and-window-repairs` | — |
| Fixture Installation | `/services/fixture-installation` | — |
| Ceiling Fan Installation | `/services/ceiling-fan-installation` | — |
| Furniture Assembly | `/services/furniture-assembly` | — |
| Property Maintenance | `/services/property-maintenance` | — |
| Service Areas Overview | `/service-areas` | Grid of all areas |
| Palm Bay, FL | `/service-areas/palm-bay-fl` | — |
| Melbourne, FL | `/service-areas/melbourne-fl` | — |
| West Melbourne, FL | `/service-areas/west-melbourne-fl` | — |
| Malabar, FL | `/service-areas/malabar-fl` | — |
| Grant-Valkaria, FL | `/service-areas/grant-valkaria-fl` | — |
| Indialantic, FL | `/service-areas/indialantic-fl` | — |
| Melbourne Beach, FL | `/service-areas/melbourne-beach-fl` | — |
| Satellite Beach, FL | `/service-areas/satellite-beach-fl` | — |
| Indian Harbour Beach, FL | `/service-areas/indian-harbour-beach-fl` | — |
| Rockledge, FL | `/service-areas/rockledge-fl` | — |
| Viera, FL | `/service-areas/viera-fl` | — |
| Suntree, FL | `/service-areas/suntree-fl` | — |
| Contact | `/contact` | Estimate form + contact details |
| FAQ | `/faq` | Accordion FAQ with schema |
| Blog Index | `/blog` | Card grid |
| Blog: Palm Bay Repairs | `/blog/small-home-repairs-palm-bay-shouldnt-ignore` | — |
| Blog: Florida Humidity | `/blog/florida-humidity-drywall-paint-fixture-problems` | — |
| Blog: Pre-Sale Melbourne | `/blog/what-to-fix-before-listing-home-melbourne-fl` | — |
| Privacy Policy | `/privacy-policy` | noIndex |
| Terms of Service | `/terms` | noIndex |
| 404 | — | Custom not-found page |
| Sitemap | `/sitemap.xml` | Auto-generated |
| Robots | `/robots.txt` | Auto-generated |

---

## Components Created

| Component | Path |
|---|---|
| Header | `components/layout/Header.tsx` |
| Footer | `components/layout/Footer.tsx` |
| Button | `components/ui/Button.tsx` |
| ServiceCard | `components/ui/ServiceCard.tsx` |
| AreaCard | `components/ui/AreaCard.tsx` |
| TestimonialCard | `components/ui/TestimonialCard.tsx` |
| FAQAccordion | `components/ui/FAQAccordion.tsx` |
| TrustBadges / TrustBadgesLight | `components/ui/TrustBadges.tsx` |
| CTABand | `components/sections/CTABand.tsx` |
| FAQSection | `components/sections/FAQSection.tsx` |
| Testimonials | `components/sections/Testimonials.tsx` |
| EstimateForm | `components/forms/EstimateForm.tsx` |
| SchemaScript | `components/seo/SchemaScript.tsx` |

---

## SEO Features Implemented

- Unique `<title>` and `<meta description>` for every page
- Canonical URLs on all pages
- Open Graph metadata
- `LocalBusiness` (HomeAndConstructionBusiness) JSON-LD schema in root layout
- `Service` schema on every service page
- `FAQPage` schema on FAQ page, homepage, and service/area pages
- `BreadcrumbList` schema on service, area, and blog pages
- Dynamic `sitemap.xml` (all pages with priorities)
- `robots.txt` with sitemap reference
- Internal linking: services ↔ areas ↔ blog ↔ contact
- Keyword-conscious headings and body copy without stuffing
- Breadcrumb navigation on all sub-pages
- `noIndex` on Privacy Policy and Terms pages

---

## Content Structure

All editable content lives in `content/`:

| File | What it contains |
|---|---|
| `content/services.ts` | 9 service pages with full copy, FAQs, metadata |
| `content/serviceAreas.ts` | 12 city pages with localized copy, FAQs, metadata |
| `content/faqs.ts` | 12 global FAQ items |
| `content/blogPosts.ts` | 3 starter blog posts with structured content |

To add a new service or area, add an entry to the appropriate content file. The dynamic routes (`[slug]`) pick it up automatically.

---

## Design System

Colors defined in `tailwind.config.ts`:

| Token | Hex | Use |
|---|---|---|
| `navy` | `#16324F` | Primary brand, headers, nav |
| `service-blue` | `#245C8F` | Secondary brand, links |
| `accent` | `#F28C28` | CTAs, highlights |
| `charcoal` | `#1F2937` | Body text |
| `off-white` | `#F8FAFC` | Section backgrounds |
| `slate-gray` | `#64748B` | Supporting text |
