import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { services } from '@/content/services'
import { serviceAreas } from '@/content/serviceAreas'
import { faqs } from '@/content/faqs'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { AreaCard } from '@/components/ui/AreaCard'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTABand } from '@/components/sections/CTABand'
import { TrustBadges } from '@/components/ui/TrustBadges'
import { SchemaScript } from '@/components/seo/SchemaScript'
import { buildFAQSchema } from '@/lib/schema/faq'

export const metadata: Metadata = buildMetadata({
  title: `Handyman Services in Palm Bay & Melbourne, FL | ${siteConfig.name}`,
  description:
    'Right Away Services LLC provides reliable handyman and home repair services in Palm Bay, Melbourne, and nearby Space Coast communities. Call today for fast, professional service.',
  path: '/',
})

const homeFaqs = faqs.slice(0, 6)

const whyChooseUs = [
  {
    icon: '⭐',
    title: '5.0 Stars — 37 Reviews',
    description: 'Rated 5.0 stars on Angi across 37 verified reviews. Our reputation is built one job at a time.',
  },
  {
    icon: '🛡️',
    title: 'Licensed & Insured',
    description: 'Right Away Services LLC is a licensed and insured company. You can hire with confidence.',
  },
  {
    icon: '🔨',
    title: '26 Years of Experience',
    description: 'Over two decades of hands-on experience means we\'ve handled jobs of every size and complexity.',
  },
  {
    icon: '✅',
    title: 'Free Estimates & Warranties',
    description: 'We offer free estimates on every project and stand behind our work with a warranty.',
  },
]

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={buildFAQSchema(homeFaqs)} />

      {/* Hero */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Palm Bay · Melbourne · Space Coast, FL
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Reliable Handyman Services for the Space Coast
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed mb-8 max-w-2xl">
              From small home repairs to installations and rental property punch lists, Right Away Services LLC
              helps homeowners and property managers across Palm Bay, Melbourne, and surrounding communities get
              things done quickly and professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded-lg text-lg border-2 border-white text-white hover:bg-white hover:text-navy transition-colors"
              >
                Request Free Estimate
              </Link>
            </div>
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Handyman Services We Provide</h2>
            <p className="text-slate-gray max-w-2xl mx-auto">
              From quick repairs to ongoing property maintenance, we handle the jobs that keep your home in
              good shape. Serving Palm Bay, Melbourne, and the Space Coast.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="text-service-blue font-semibold hover:underline"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              Why Space Coast Homeowners Choose Right Away Services
            </h2>
            <p className="text-slate-gray max-w-xl mx-auto">
              Reliable, professional, and genuinely local — that&rsquo;s what we bring to every job.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-slate-gray text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA mid-page */}
      <section className="py-12 px-4 bg-service-blue text-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-1">Have a repair that needs attention?</h2>
            <p className="text-blue-200 text-sm">We make it easy — call or request an estimate online.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={siteConfig.phoneHref}
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Serving the Space Coast</h2>
            <p className="text-slate-gray max-w-2xl mx-auto">
              Right Away Services LLC provides handyman and home repair services throughout Brevard County,
              including these communities and more.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/service-areas" className="text-service-blue font-semibold hover:underline">
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQSection
        faqs={homeFaqs}
        heading="Common Questions from Space Coast Homeowners"
        subtext="Not sure if we handle your job or your area? Here are answers to questions we hear often."
      />

      <CTABand />
    </>
  )
}
