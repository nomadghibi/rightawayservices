import type { Metadata } from 'next'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { services } from '@/content/services'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = buildMetadata({
  title: `Handyman Services in Palm Bay & Melbourne, FL | ${siteConfig.name}`,
  description:
    'Browse all handyman and home repair services offered by Right Away Services LLC across Palm Bay, Melbourne, and Florida\'s Space Coast.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
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

      {/* About our service area */}
      <section className="py-12 px-4 bg-off-white">
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
