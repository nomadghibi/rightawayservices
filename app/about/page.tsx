import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { CTABand } from '@/components/sections/CTABand'
import { PageHeroImage } from '@/components/sections/PageHeroImage'
import { TrustBadgesLight } from '@/components/ui/TrustBadges'
import { pageImages } from '@/content/pageMedia'

export const metadata: Metadata = buildMetadata({
  title: `About Right Away Services LLC | Local Handyman in Palm Bay & Melbourne, FL`,
  description:
    'Right Away Services LLC is a locally owned handyman company serving Palm Bay, Melbourne, and the Space Coast. Learn about our mission, our approach, and why local homeowners trust us.',
  path: '/about',
})

const values = [
  {
    title: 'Show Up On Time',
    description:
      'Your time matters. We confirm appointments, arrive when we say we will, and let you know if anything changes.',
  },
  {
    title: 'Communicate Clearly',
    description:
      'Before we start any work, we explain what we\'re doing and why. No surprises — just straightforward information so you can make informed decisions.',
  },
  {
    title: 'Do The Work Right',
    description:
      'We take pride in doing each job correctly the first time. Sloppy work means callbacks and unhappy customers — neither of which we want.',
  },
  {
    title: 'Be Honest About Scope',
    description:
      'If a job falls outside our expertise or requires a licensed specialist, we\'ll tell you upfront rather than take it on and do it poorly.',
  },
  {
    title: 'Respect Your Property',
    description:
      'We work cleanly, protect your floors and surfaces, and leave your home the way we found it — except for the part we came to fix.',
  },
  {
    title: 'Keep Prices Fair',
    description:
      'We give honest estimates and stick to them. No bait-and-switch pricing or add-ons you didn\'t ask for.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
          <nav aria-label="Breadcrumb" className="text-sm text-blue-300 mb-4">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">About</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Right Away Services LLC</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            A locally owned handyman company built on responsiveness, honest work, and respect for the homeowners
            and property managers we serve across Florida&rsquo;s Space Coast.
          </p>
          </div>
          <PageHeroImage {...pageImages.about} priority caption="Local, licensed, and insured" />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Our Story</h2>
                <p className="text-slate-gray leading-relaxed mb-4">
                  Right Away Services LLC is a licensed and insured company based in Palm Bay, FL. Founded and led
                  by Jamel — known to most customers as Mel — we bring over 26 years of hands-on experience to
                  every project we take on, regardless of size, scale, or budget.
                </p>
                <p className="text-slate-gray leading-relaxed mb-4">
                  We believe homeowners deserve a contractor who shows up when they say they will, communicates
                  honestly, and delivers quality work every time. Whether it&rsquo;s a single repair, a full
                  punch list, or a large painting and renovation project, we treat every job with the same level
                  of care and professionalism.
                </p>
                <p className="text-slate-gray leading-relaxed">
                  We&rsquo;re based in Palm Bay and serve homeowners, landlords, and property managers throughout
                  Brevard County. With a 5.0-star rating across 37 reviews, our reputation speaks for itself.
                  When you call Right Away Services, you&rsquo;re calling a local business that stands behind its work.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Who We Work With</h2>
                <ul className="space-y-3 text-slate-gray">
                  {[
                    'Homeowners in Palm Bay, Melbourne, and surrounding communities',
                    'Busy professionals who need work done without the hassle',
                    'Landlords and property managers with rental units',
                    'Seniors who need reliable, respectful assistance',
                    'Real estate agents needing pre-sale repairs',
                    'Airbnb hosts and short-term rental operators',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-off-white rounded-xl p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-navy mb-6">Our Service Promise</h2>
                <div className="space-y-5">
                  {values.map((value, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-charcoal mb-1">{value.title}</h3>
                      <p className="text-slate-gray text-sm leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-off-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Locally Serving the Space Coast</h2>
          <p className="text-slate-gray leading-relaxed mb-6">
            Right Away Services LLC serves communities throughout southern and central Brevard County — from Palm
            Bay and Melbourne to the barrier island communities and inland neighborhoods of Rockledge, Viera, and
            Suntree. We&rsquo;re your neighbors, and we&rsquo;re here when you need us.
          </p>
          <TrustBadgesLight className="justify-center mb-8" />
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
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
