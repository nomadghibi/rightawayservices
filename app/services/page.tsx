import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { services } from '@/content/services'
import { serviceAreas } from '@/content/serviceAreas'
import { highIntentHandymanLinks, priorityAreaSlugs } from '@/content/localSeo'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { CTABand } from '@/components/sections/CTABand'
import { SchemaScript } from '@/components/seo/SchemaScript'
import { buildBreadcrumbSchema } from '@/lib/schema/breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: `Handyman Services in Palm Bay & Melbourne, FL | ${siteConfig.name}`,
  description:
    'Browse all handyman and home repair services offered by Right Away Services LLC across Palm Bay, Melbourne, and Florida\'s Space Coast.',
  path: '/services',
})

const priorityAreas = serviceAreas.filter((area) => priorityAreaSlugs.includes(area.slug))

export default function ServicesPage() {
  return (
    <>
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ])}
      />

      {/* Header */}
      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-300 mb-4">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Services</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Handyman Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Right Away Services LLC provides professional handyman and home repair services throughout Palm Bay,
            Melbourne, and the Space Coast. Select a service below to learn more.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Local Handyman Services by Need and Location
            </h2>
            <p className="text-slate-gray leading-relaxed">
              Right Away Services LLC targets the home repair searches that matter across Brevard County: local
              handyman services, drywall repair, fixture installation, ceiling fan installation, rental property
              maintenance, and punch-list work in Palm Bay, Melbourne, West Melbourne, Rockledge, Viera, and
              nearby communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-navy mb-4">Common local repair searches we serve</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highIntentHandymanLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="text-service-blue font-medium hover:underline">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-navy mb-4">Core handyman service cities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {priorityAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}`}
                    className="text-service-blue font-medium hover:underline"
                  >
                    {area.name}, {area.state} handyman services
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About our service area */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Serving Palm Bay, Melbourne &amp; the Space Coast</h2>
          <p className="text-slate-gray leading-relaxed">
            All of our services are available throughout Brevard County&rsquo;s southern and central communities,
            including Palm Bay, Melbourne, West Melbourne, Rockledge, Viera, Suntree, and the barrier island
            communities. See our{' '}
            <a href="/service-areas" className="text-service-blue hover:underline">service areas</a>{' '}
            page for a full list.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  )
}
