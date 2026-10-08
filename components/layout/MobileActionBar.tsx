import Link from 'next/link'
import { siteConfig } from '@/lib/seo/metadata'

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-navy/95 p-3 shadow-[0_-8px_24px_rgba(15,23,42,0.2)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
        <a
          href={siteConfig.phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-3 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call Now
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/50 px-3 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white hover:text-navy"
        >
          Free Estimate
        </Link>
      </div>
    </div>
  )
}
