import Link from 'next/link'
import { siteConfig } from '@/lib/seo/metadata'

interface CTABandProps {
  heading?: string
  subtext?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  dark?: boolean
}

export function CTABand({
  heading = 'Ready to Get Your Home Repairs Done?',
  subtext = 'Call Right Away Services LLC or request a free estimate. We serve Palm Bay, Melbourne, and the surrounding Space Coast.',
  primaryLabel = 'Call Now',
  primaryHref = siteConfig.phoneHref,
  secondaryLabel = 'Request Free Estimate',
  secondaryHref = '/contact',
  dark = true,
}: CTABandProps) {
  return (
    <section className={`py-16 px-4 ${dark ? 'bg-navy' : 'bg-off-white'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${dark ? 'text-white' : 'text-navy'}`}>
          {heading}
        </h2>
        <p className={`text-base sm:text-lg mb-8 max-w-2xl mx-auto ${dark ? 'text-blue-200' : 'text-slate-gray'}`}>
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {primaryLabel}
          </a>
          <Link
            href={secondaryHref}
            className={`inline-flex items-center justify-center font-semibold px-8 py-4 rounded-lg text-lg transition-colors border-2 ${
              dark
                ? 'border-white text-white hover:bg-white hover:text-navy'
                : 'border-navy text-navy hover:bg-navy hover:text-white'
            }`}
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
