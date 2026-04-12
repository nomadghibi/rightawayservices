import Link from 'next/link'
import { siteConfig } from '@/lib/seo/metadata'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-md">
        <div className="text-6xl font-bold text-navy mb-4">404</div>
        <h1 className="text-2xl font-bold text-charcoal mb-3">Page Not Found</h1>
        <p className="text-slate-gray mb-8">
          We couldn&rsquo;t find the page you were looking for. It may have moved or the URL may be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-navy hover:bg-navy-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
