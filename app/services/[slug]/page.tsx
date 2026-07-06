import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services, getServiceBySlug, getRelatedServices } from '@/content/services'
import { serviceAreas } from '@/content/serviceAreas'
import { priorityAreaSlugs } from '@/content/localSeo'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { buildServiceSchema } from '@/lib/schema/service'
import { buildFAQSchema } from '@/lib/schema/faq'
import { buildBreadcrumbSchema } from '@/lib/schema/breadcrumbs'
import { SchemaScript } from '@/components/seo/SchemaScript'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTABand } from '@/components/sections/CTABand'
import { PageHeroImage } from '@/components/sections/PageHeroImage'
import { getServiceImage } from '@/content/pageMedia'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  })
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const relatedServices = getRelatedServices(service.relatedServices)
  const priorityAreas = serviceAreas.filter((area) => priorityAreaSlugs.includes(area.slug))
  const heroImage = getServiceImage(service.slug)

  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${service.slug}` },
  ])

  return (
    <>
      <SchemaScript schema={buildServiceSchema(service)} />
      <SchemaScript schema={buildFAQSchema(service.faqs)} />
      <SchemaScript schema={breadcrumbs} />

      {/* Hero */}
      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
          <nav aria-label="Breadcrumb" className="text-sm text-blue-300 mb-4">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">{service.name}</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{service.name}</h1>
          <p className="text-blue-200 text-lg max-w-2xl mb-6">{service.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Request Estimate
            </Link>
          </div>
          </div>
          <PageHeroImage {...heroImage} priority caption={service.name} />
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-xl font-bold text-navy mb-4">About This Service</h2>
                <p className="text-slate-gray leading-relaxed">{service.longDescription}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-4">Common Reasons Customers Call Us</h2>
                <ul className="space-y-3">
                  {service.commonProblems.map((problem, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-gray">
                      <svg className="w-5 h-5 text-service-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-4">What We Can Help With</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.whatWeOffer.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-gray text-sm">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-4">Who This Service Is For</h2>
                <ul className="space-y-2">
                  {service.whoItsFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-gray text-sm">
                      <span className="w-1.5 h-1.5 bg-navy rounded-full flex-shrink-0 mt-1.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-navy text-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Ready to Get Started?</h3>
                <p className="text-blue-200 text-sm mb-5">
                  Call Right Away Services LLC or request a free estimate. We serve Palm Bay, Melbourne, and the
                  surrounding Space Coast.
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="block text-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 rounded-lg transition-colors mb-3"
                >
                  {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="block text-center border border-white text-white hover:bg-white hover:text-navy font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  Request Free Estimate
                </Link>
              </div>

              <div className="bg-off-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-navy mb-3">Service Areas</h3>
                <p className="text-slate-gray text-sm mb-3">
                  We provide {service.name.toLowerCase()} throughout Brevard County including Palm Bay, Melbourne,
                  Rockledge, and the barrier island communities.
                </p>
                <Link href="/service-areas" className="text-service-blue text-sm font-medium hover:underline">
                  View all service areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local service coverage */}
      <section className="py-14 px-4 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">
              {service.name} Across Palm Bay, Melbourne, and Brevard County
            </h2>
            <p className="text-slate-gray leading-relaxed">
              Right Away Services LLC provides {service.name.toLowerCase()} for homeowners, landlords, and property
              managers throughout the Space Coast. Customers call us for local handyman help in Palm Bay, Melbourne,
              West Melbourne, Rockledge, Viera, Suntree, and nearby Brevard County communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-navy mb-4">Find this service near you</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {priorityAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}`}
                    className="text-service-blue font-medium hover:underline"
                  >
                    {service.name} in {area.name}, {area.state}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-navy mb-4">Common local requests</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.whatWeOffer.slice(0, 6).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-gray">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        faqs={service.faqs}
        heading={`${service.name} — Frequently Asked Questions`}
      />

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-8">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        heading={`Need ${service.name} in Palm Bay or Melbourne?`}
        subtext={`Right Away Services LLC handles ${service.name.toLowerCase()} for homeowners and landlords throughout the Space Coast. Call or request your free estimate today.`}
      />
    </>
  )
}
