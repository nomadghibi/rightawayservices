import type { Metadata } from 'next'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { serviceAreas } from '@/content/serviceAreas'
import { AreaCard } from '@/components/ui/AreaCard'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = buildMetadata({
  title: `Handyman Service Areas on Florida's Space Coast | ${siteConfig.name}`,
  description:
    'Right Away Services LLC serves Palm Bay, Melbourne, Rockledge, Viera, Satellite Beach, and surrounding Brevard County communities. View all service areas.',
  path: '/service-areas',
})

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
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

      <section className="py-12 px-4 bg-off-white">
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
