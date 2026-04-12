import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { faqs } from '@/content/faqs'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { CTABand } from '@/components/sections/CTABand'
import { SchemaScript } from '@/components/seo/SchemaScript'
import { buildFAQSchema } from '@/lib/schema/faq'
import { buildBreadcrumbSchema } from '@/lib/schema/breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: `Handyman FAQ — Palm Bay & Melbourne, FL | ${siteConfig.name}`,
  description:
    'Common questions about handyman services from Right Away Services LLC — what we do, where we work, how estimates work, and more.',
  path: '/faq',
})

export default function FAQPage() {
  return (
    <>
      <SchemaScript schema={buildFAQSchema(faqs)} />
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' },
        ])}
      />

      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-300 mb-4">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">FAQ</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Answers to common questions about handyman services, pricing, service areas, and how Right Away
            Services LLC works.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-12 px-4 bg-off-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold text-navy mb-3">Still Have Questions?</h2>
          <p className="text-slate-gray mb-6">
            We&rsquo;re happy to answer any questions you have before scheduling service. Call us directly or
            send a message.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Call {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
