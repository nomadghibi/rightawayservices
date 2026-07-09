import { siteConfig } from '@/lib/seo/metadata'

const badges = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    label: 'Licensed & Insured',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    label: '5.0 Stars — 37 Reviews on Angi',
    href: siteConfig.reviewProfiles.angi,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: '26 Years of Experience',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Serving Space Coast, FL',
  },
]

interface TrustBadgesProps {
  className?: string
}

export function TrustBadges({ className = '' }: TrustBadgesProps) {
  return (
    <div className={`flex flex-wrap gap-4 justify-center sm:justify-start ${className}`}>
      {badges.map((badge, index) => (
        badge.href ? (
          <a
            key={index}
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white transition-colors hover:bg-white/20"
          >
            <span className="text-accent">{badge.icon}</span>
            <span>{badge.label}</span>
          </a>
        ) : (
          <div
            key={index}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white"
          >
            <span className="text-accent">{badge.icon}</span>
            <span>{badge.label}</span>
          </div>
        )
      ))}
    </div>
  )
}

export function TrustBadgesLight({ className = '' }: TrustBadgesProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {badges.map((badge, index) => (
        badge.href ? (
          <a
            key={index}
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-off-white border border-gray-200 rounded-full px-4 py-2 text-sm text-charcoal transition-colors hover:border-service-blue hover:text-service-blue"
          >
            <span className="text-service-blue">{badge.icon}</span>
            <span>{badge.label}</span>
          </a>
        ) : (
          <div
            key={index}
            className="flex items-center gap-2 bg-off-white border border-gray-200 rounded-full px-4 py-2 text-sm text-charcoal"
          >
            <span className="text-service-blue">{badge.icon}</span>
            <span>{badge.label}</span>
          </div>
        )
      ))}
    </div>
  )
}
