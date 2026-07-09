import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { EstimateForm } from '@/components/forms/EstimateForm'
import { PageHeroImage } from '@/components/sections/PageHeroImage'
import { pageImages } from '@/content/pageMedia'
import { SchemaScript } from '@/components/seo/SchemaScript'
import { buildBreadcrumbSchema } from '@/lib/schema/breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: `Contact Right Away Services LLC | Request a Free Estimate`,
  description:
    'Contact Right Away Services LLC to request a free estimate or schedule handyman service in Palm Bay, Melbourne, and the Space Coast. Call or fill out our quick form.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ])}
      />

      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
          <nav aria-label="Breadcrumb" className="text-sm text-blue-300 mb-4">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Contact</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Request a Free Estimate</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Ready to get that repair done? Call us directly for the fastest response, or fill out the form
            below and we&rsquo;ll be in touch within one business day.
          </p>
          </div>
          <PageHeroImage {...pageImages.contact} priority caption="Free estimates" />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              <EstimateForm />
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Phone</p>
                      <a href={siteConfig.phoneHref} className="text-service-blue hover:underline text-lg font-semibold">
                        {siteConfig.phone}
                      </a>
                      <p className="text-slate-gray text-sm mt-1">Call for the fastest response</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-service-blue hover:underline">
                        {siteConfig.email}
                      </a>
                      <p className="text-slate-gray text-sm mt-1">We respond within one business day</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Location</p>
                      <p className="text-charcoal">540 Londonderry Circle SE</p>
                      <p className="text-charcoal">Palm Bay, FL 32909</p>
                      <p className="text-slate-gray text-sm mt-1">Serving all of Brevard County, FL</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Hours</p>
                      <p className="text-charcoal">Monday – Sunday</p>
                      <p className="text-charcoal">8:00 AM – 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-off-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-navy mb-3">What Happens After You Contact Us</h3>
                <ol className="space-y-3">
                  {[
                    'We review your request and reach out within one business day',
                    'We ask any clarifying questions to understand your job',
                    'We provide a clear estimate before starting any work',
                    'We schedule a convenient time and show up as agreed',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-gray text-sm">
                      <span className="w-5 h-5 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-off-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-navy mb-2">Serving These Communities</h3>
                <p className="text-slate-gray text-sm">
                  Palm Bay · Melbourne · West Melbourne · Malabar · Grant-Valkaria · Indialantic · Melbourne
                  Beach · Satellite Beach · Indian Harbour Beach · Rockledge · Viera · Suntree
                </p>
                <Link href="/service-areas" className="text-service-blue text-sm mt-2 inline-block hover:underline">
                  See all service areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
