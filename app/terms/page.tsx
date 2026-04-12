import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'

export const metadata: Metadata = buildMetadata({
  title: `Terms of Service | ${siteConfig.name}`,
  description: 'Terms of Service for Right Away Services LLC.',
  path: '/terms',
  noIndex: true,
})

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-300 mb-4">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Terms of Service</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-blue-300 text-sm mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8 text-slate-gray leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Acceptance of Terms</h2>
            <p>
              By accessing the website at{' '}
              <a href={siteConfig.url} className="text-service-blue hover:underline">{siteConfig.url}</a>, you
              agree to be bound by these Terms of Service. If you do not agree to these terms, please do not
              use this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Website Use</h2>
            <p>
              This website is provided for informational purposes and to facilitate contact with Right Away
              Services LLC. You agree to use this website lawfully and not to misuse it in any way, including
              but not limited to submitting false information or attempting to disrupt site functionality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Estimate Requests and Service Agreements</h2>
            <p>
              Submitting an estimate request through this website does not constitute a binding service agreement.
              All service work is governed by a separate agreement between Right Away Services LLC and the
              customer, established at the time of service booking.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Content and Accuracy</h2>
            <p>
              We make reasonable efforts to keep content on this website accurate and up-to-date. However, we
              make no warranties about the completeness or accuracy of the information provided. Service
              availability, pricing, and scope are subject to change.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Limitation of Liability</h2>
            <p>
              Right Away Services LLC shall not be liable for any indirect, incidental, or consequential damages
              arising from your use of this website or any information obtained through it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">External Links</h2>
            <p>
              This website may contain links to third-party sites. We are not responsible for the content or
              practices of any linked websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Florida. Any disputes arising from use of
              this website shall be subject to the jurisdiction of courts in Brevard County, Florida.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Continued use of the website
              following any changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Contact</h2>
            <p>
              Questions about these terms? Contact us at{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-service-blue hover:underline">
                {siteConfig.email}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
