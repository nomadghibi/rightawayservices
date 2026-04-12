import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { serviceAreas, getServiceAreaBySlug, getNearbyAreas } from '@/content/serviceAreas'
import { services } from '@/content/services'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { buildFAQSchema } from '@/lib/schema/faq'
import { buildBreadcrumbSchema } from '@/lib/schema/breadcrumbs'
import { SchemaScript } from '@/components/seo/SchemaScript'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { AreaCard } from '@/components/ui/AreaCard'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTABand } from '@/components/sections/CTABand'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getServiceAreaBySlug(params.slug)
  if (!area) return {}
  return buildMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/service-areas/${area.slug}`,
  })
}

export default function ServiceAreaPage({ params }: Props) {
  const area = getServiceAreaBySlug(params.slug)
  if (!area) notFound()

  const areaServices = services.filter((s) => area.relatedServices.includes(s.slug))
  const nearbyAreas = getNearbyAreas(area.nearbyAreas)

  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
    { name: `${area.name}, ${area.state}`, url: `/service-areas/${area.slug}` },
  ])

  return (
    <>
      <SchemaScript schema={buildFAQSchema(area.faqs)} />
      <SchemaScript schema={breadcrumbs} />

      {/* Hero */}
      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-300 mb-4">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/service-areas" className="hover:text-white">Service Areas</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">{area.name}, {area.state}</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Handyman Services in {area.name}, {area.state}
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mb-6">{area.shortDescription}</p>
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
      </section>

      {/* Local intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-navy mb-4">
                  Serving Homeowners and Landlords in {area.name}
                </h2>
                <p className="text-slate-gray leading-relaxed">{area.localIntro}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy mb-4">
                  Common Repair &amp; Maintenance Needs in {area.name}
                </h2>
                <ul className="space-y-3">
                  {area.typicalNeeds.map((need, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-gray">
                      <svg className="w-5 h-5 text-service-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {need}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-slate-gray leading-relaxed">{area.localContext}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-navy text-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Need a Handyman in {area.name}?
                </h3>
                <p className="text-blue-200 text-sm mb-5">
                  Right Away Services LLC serves {area.name} and surrounding {area.county} communities.
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

              {nearbyAreas.length > 0 && (
                <div className="bg-off-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-semibold text-navy mb-3">Nearby Service Areas</h3>
                  <ul className="space-y-2">
                    {nearbyAreas.map((nearby) => (
                      <li key={nearby.slug}>
                        <Link
                          href={`/service-areas/${nearby.slug}`}
                          className="text-service-blue text-sm hover:underline"
                        >
                          {nearby.name}, {nearby.state} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services for this area */}
      {areaServices.length > 0 && (
        <section className="py-16 px-4 bg-off-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-3">
              Services We Offer in {area.name}
            </h2>
            <p className="text-slate-gray mb-8">
              Right Away Services LLC provides these services to {area.name} residents and property owners.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {areaServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection
        faqs={area.faqs}
        heading={`Handyman Services in ${area.name} — FAQ`}
      />

      {/* Nearby areas */}
      {nearbyAreas.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-6">Nearby Communities We Also Serve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {nearbyAreas.map((nearby) => (
                <AreaCard key={nearby.slug} area={nearby} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        heading={`Ready for Reliable Handyman Service in ${area.name}?`}
        subtext={`Right Away Services LLC serves ${area.name} homeowners and property managers. Call today or request your free estimate online.`}
      />
    </>
  )
}
