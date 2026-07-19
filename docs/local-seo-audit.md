# Local SEO Audit

Audit date: 2026-07-19

## Baseline

- Framework: Next.js 14 App Router with static generation.
- Content sources: `content/services.ts`, `content/serviceAreas.ts`, `content/blogPosts.ts`, and `content/localSeo.ts`.
- Metadata: centralized through `lib/seo/metadata.ts`.
- Structured data: reusable LocalBusiness, WebSite, Service, FAQPage, BreadcrumbList, BlogPosting, and ItemList builders.
- Discovery: generated `app/sitemap.ts` and `app/robots.ts`.
- Baseline validation: `npm run lint` passed and `npm run build` passed with 52 generated routes.

## Findings and Actions

| Requirement | Existing status | Evidence or file path | Action taken | Remaining recommendation |
| --- | --- | --- | --- | --- |
| Service pages | Partially complete | `content/services.ts`, `app/services/[slug]/page.tsx` | Preserved 12 pages; added rental-property and vacation-rental maintenance; added process and scope sections | Verify regulated service claims for bathroom, fence, and roof work |
| Door, drywall, fan, painting, fixtures, furniture | Complete with scope gap | Existing service records in `content/services.ts` | Added explicit fan and fixture handyman-scope limitations | Add original project photos when available |
| Property/building/home maintenance | Partially complete | `/services/property-maintenance` | Expanded audiences to residential managers, Realtors, HOA and condo communities; removed unsupported response-time and code-compliance wording | Confirm whether commercial building work is actually offered before creating a separate page |
| Rental repairs and turnover | Missing as a focused commercial page | Only broad property-maintenance content existed | Added `/services/rental-property-maintenance` | Add verified landlord examples and photos later |
| Vacation rental maintenance | Missing | Satellite Beach mentioned rentals but had no focused service | Added `/services/vacation-rental-maintenance` | Confirm scheduling expectations with the business before adding stronger turnaround language |
| Location pages | Partially complete | 12 records in `content/serviceAreas.ts` | Added Cocoa and Cocoa Beach; strengthened Satellite Beach and Rockledge with distinct property/use-case content | Add verified neighborhood and project evidence rather than generic expansion |
| Palm Bay and Melbourne | Complete | `/service-areas/palm-bay-fl`, `/service-areas/melbourne-fl` | Preserved existing authoritative pages | Continue improving from Search Console queries and real project evidence |
| Satellite Beach | Partially complete | `/service-areas/satellite-beach-fl` | Added vacation-rental, condo, coastal maintenance, property types, FAQs, and service links | Highest priority for original photos and a verified case study |
| Rockledge | Partially complete | `/service-areas/rockledge-fl` | Added rental/property use cases, property types, FAQ, and maintenance linking | Add verified Rockledge project evidence |
| Cocoa and Cocoa Beach | Missing | No existing records or routes | Added one authoritative page per city | Monitor impressions before adding more supporting content |
| City-and-service pages | Missing, but not safely supportable | No route or unique project dataset | Intentionally not created to avoid doorway pages | Create only after verified local projects, photos, and city-specific scope exist |
| Project/case-study system | Missing | No content model or route | Added `content/projects.ts`, project schema, and noindex draft route template | Replace template fields with verified data before setting `status: published` |
| Internal linking | Partially complete | Service/location/blog related links and footer | Added new service/location relationships and deliberate footer priorities | Add project links once verified projects are published |
| Metadata and canonicals | Complete | `lib/seo/metadata.ts` and dynamic page metadata | New routes use unique titles, descriptions, canonicals, OG and Twitter metadata | Review Search Console CTR before rewriting established titles |
| Headings and initial HTML | Complete | App Router pages are statically generated | Preserved server-rendered H1/H2 content | Periodically inspect production HTML after deployment |
| LocalBusiness schema | Complete but fact-sensitive | `lib/schema/localBusiness.ts`, visible footer NAP/hours | Preserved consistent repository-backed business facts | Owner must confirm address, hours, licensing, insurance, payment methods, coordinates, and GBP match exactly |
| Service schema | Technically incomplete | `lib/schema/service.ts` had incomplete GeoCircle and inventory availability | Removed incomplete GeoCircle and unsupported `InStock` offer | Validate deployed pages in Rich Results Test |
| Sitemap | Technically incorrect | Most entries used `new Date()` on every build | Added stable content modification date; excluded redirected article and drafts | Update dates only when content materially changes |
| Blog duplication | Conflicting | Two highly overlapping Florida humidity articles | Redirected the older URL to the stronger article and removed it from listings/sitemap | Review other pre-sale articles for query cannibalization using Search Console data |
| Robots and noindex | Complete | `app/robots.ts`, `buildMetadata` | Draft project uses `noindex`; legal utility pages remain noindex | Verify production response after deployment |
| Images and Core Web Vitals | Partially complete | Next Image and optimized shared assets | Preserved image optimization and dimensions | Replace repeated generated heroes with original service/project photos |
| Conversion paths | Complete | Header, service/location heroes, CTAs, phone links, contact form | New templates retain top and bottom CTAs and tap-to-call | Track calls and form completions with privacy-conscious analytics |

## Duplicate and Risk Notes

- The redirected humidity article was the clearest content duplicate.
- City-name spelling/query variants should continue resolving to one city page; no variant pages were created.
- Existing bathroom remodeling, fence installation, and roof leak content may describe regulated work. Legal scope and licensing must be confirmed before expanding those pages or advertising those services more prominently.
- Existing ratings, address, hours, licensed/insured status, years of experience, and warranties were already visible in the repository. They were not newly invented, but the owner remains responsible for confirming accuracy.
