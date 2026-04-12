import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'

export const metadata: Metadata = buildMetadata({
  title: `Privacy Policy | ${siteConfig.name}`,
  description: 'Privacy Policy for Right Away Services LLC.',
  path: '/privacy-policy',
  noIndex: true,
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-navy text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-300 mb-4">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-blue-300 text-sm mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-slate max-w-none">
          <div className="space-y-8 text-slate-gray leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">Overview</h2>
              <p>
                Right Away Services LLC (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the website at{' '}
                <a href={siteConfig.url} className="text-service-blue hover:underline">{siteConfig.url}</a>. This
                Privacy Policy explains how we collect, use, and protect information submitted through this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">Information We Collect</h2>
              <p>We may collect the following information when you contact us or submit a form:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Your name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Location (city)</li>
                <li>Details about the service you need</li>
              </ul>
              <p className="mt-3">
                We do not collect payment information through this website. Payments are handled separately and
                securely.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">How We Use Your Information</h2>
              <p>We use the information you provide to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Respond to your estimate requests and inquiries</li>
                <li>Schedule and provide handyman services</li>
                <li>Communicate with you about your project</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">Cookies and Analytics</h2>
              <p>
                This website may use analytics tools such as Google Analytics to understand how visitors use the
                site. These tools may collect anonymized data including pages visited, time on site, and general
                location. This data is used only to improve our website and does not identify individual visitors.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">Data Security</h2>
              <p>
                We take reasonable steps to protect the information you submit. However, no website or internet
                transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-service-blue hover:underline">
                  {siteConfig.email}
                </a>{' '}
                or by phone at{' '}
                <a href={siteConfig.phoneHref} className="text-service-blue hover:underline">
                  {siteConfig.phone}
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
