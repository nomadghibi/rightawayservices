import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { services } from '@/content/services'
import { serviceAreas } from '@/content/serviceAreas'
import { faqs } from '@/content/faqs'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTABand } from '@/components/sections/CTABand'
import { America250Celebration } from '@/components/sections/America250Celebration'
import { PageHeroImage } from '@/components/sections/PageHeroImage'
import { TrustBadges } from '@/components/ui/TrustBadges'
import { SchemaScript } from '@/components/seo/SchemaScript'
import { buildFAQSchema } from '@/lib/schema/faq'
import {
  localIntentFaqs,
  priorityAreaSlugs,
} from '@/content/localSeo'
import { pageImages } from '@/content/pageMedia'

export const metadata: Metadata = buildMetadata({
  title: 'Handyman Palm Bay FL',
  description:
    'Need a handyman in Palm Bay or Melbourne, FL? Right Away Services LLC handles home repairs, drywall, painting, fans, and maintenance.',
  path: '/',
})

const featuredServiceSlugs = [
  'handyman-services',
  'drywall-repair',
  'painting-services',
  'ceiling-fan-installation',
  'home-repairs',
  'property-maintenance',
]
const featuredServices = services.filter((service) => featuredServiceSlugs.includes(service.slug))
const homeFaqs = [...faqs.slice(0, 4), localIntentFaqs[0], localIntentFaqs[2]]
const priorityAreas = serviceAreas.filter((area) => priorityAreaSlugs.includes(area.slug))

const whyChooseUs = [
  {
    icon: '⭐',
    title: '5.0 Stars — 37 Reviews',
    description: 'Rated 5.0 stars on HomeAdvisor across 37 verified reviews. Our reputation is built one job at a time.',
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
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.08fr_0.92fr] items-center">
          <div className="max-w-3xl">
            <America250Celebration />
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Palm Bay · Melbourne · Space Coast, FL
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Handyman Services in Palm Bay &amp; Melbourne, FL
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed mb-8 max-w-2xl">
              Need a handyman in Palm Bay or Melbourne, FL? From small home repairs to installations and rental property
              punch lists, Right Away Services LLC helps homeowners and property managers across Palm Bay,
              Melbourne, and surrounding communities get things done quickly and professionally.
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
          <PageHeroImage
            {...pageImages.home}
            priority
            caption="Local handyman service"
          />
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
            {featuredServices.map((service) => (
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

      {/* Local coverage */}
      <section className="py-16 px-4 bg-off-white">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1fr_1.1fr] items-center">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Local to the Space Coast</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Your Handyman in Palm Bay, Melbourne, and Brevard County
            </h2>
            <p className="text-slate-gray leading-relaxed mb-6">
              Based in Palm Bay, we help homeowners, landlords, and property managers with drywall repair,
              painting, ceiling fan installation, home repairs, and maintenance throughout the Space Coast.
            </p>
            <Link href="/service-areas" className="text-service-blue font-semibold hover:underline">
              Explore all service areas →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {priorityAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-service-blue transition-colors"
              >
                <span className="font-semibold text-navy group-hover:text-service-blue transition-colors">
                  {area.name}, {area.state}
                </span>
                <span className="block text-sm text-slate-gray mt-1">Local handyman services →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
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
