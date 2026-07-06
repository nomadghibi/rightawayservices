import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { serviceAreas } from '@/content/serviceAreas'
import { highIntentHandymanLinks, priorityAreaSlugs } from '@/content/localSeo'
import { pageImages } from '@/content/pageMedia'
import { AreaCard } from '@/components/ui/AreaCard'
import { CTABand } from '@/components/sections/CTABand'
import { PageHeroImage } from '@/components/sections/PageHeroImage'
import { SchemaScript } from '@/components/seo/SchemaScript'
import { buildBreadcrumbSchema } from '@/lib/schema/breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: `Handyman Service Areas on Florida's Space Coast | ${siteConfig.name}`,
  description:
    'Right Away Services LLC serves Palm Bay, Melbourne, Rockledge, Viera, Satellite Beach, and surrounding Brevard County communities. View all service areas.',
  path: '/service-areas',
})

const priorityAreas = serviceAreas.filter((area) => priorityAreaSlugs.includes(area.slug))

export default function ServiceAreasPage() {
  return (
    <>
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
        ])}
      />

      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
          <nav aria-label="Breadcrumb" className="text-sm text-blue-300 mb-4">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Service Areas</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Handyman Services Across the Space Coast</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Right Away Services LLC serves homeowners, landlords, and property managers throughout Brevard County,
            Florida. Click your community below to learn more about our services in your area.
          </p>
          </div>
          <PageHeroImage {...pageImages.serviceAreas} priority caption="Local coverage across Brevard County" />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceAreas.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Local Handyman Coverage for Brevard County Homes
            </h2>
            <p className="text-slate-gray leading-relaxed">
              Right Away Services LLC serves the local handyman searches that matter most across the Space Coast:
              home repairs, drywall repair, ceiling fan installation, fixture installation, property maintenance,
              and punch-list work for homeowners, landlords, and property managers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-navy mb-4">Most requested cities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {priorityAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}`}
                    className="text-service-blue font-medium hover:underline"
                  >
                    Handyman in {area.name}, {area.state}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-navy mb-4">Popular handyman services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highIntentHandymanLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="text-service-blue font-medium hover:underline">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Don&rsquo;t See Your Community?</h2>
          <p className="text-slate-gray leading-relaxed mb-6">
            We may still be able to help. Our service area covers much of southern and central Brevard County.
            Give us a call or send us a message and we&rsquo;ll let you know if we cover your area.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call to Confirm Your Area
          </a>
        </div>
      </section>

      <CTABand />
    </>
  )
}
