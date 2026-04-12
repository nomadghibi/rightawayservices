import Link from 'next/link'
import type { Service } from '@/content/services'

interface ServiceCardProps {
  service: Service
}

const serviceIcons: Record<string, string> = {
  'handyman-services': '🔧',
  'home-repairs': '🏠',
  'drywall-repair': '🪣',
  'painting-services': '🎨',
  'door-and-window-repairs': '🚪',
  'fixture-installation': '💡',
  'ceiling-fan-installation': '🌀',
  'furniture-assembly': '🪑',
  'property-maintenance': '🔑',
  'bathroom-remodeling': '🚿',
  'fence-installation-and-repair': '🪧',
  'roof-leak-repair': '🏚️',
}

export function ServiceCard({ service }: ServiceCardProps) {
  const icon = serviceIcons[service.slug] ?? '🔧'

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white rounded-xl border border-gray-200 p-6 hover:border-service-blue hover:shadow-md transition-all duration-200"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-charcoal group-hover:text-navy mb-2">
        {service.name}
      </h3>
      <p className="text-slate-gray text-sm leading-relaxed">{service.shortDescription.slice(0, 100)}…</p>
      <span className="mt-4 inline-flex items-center text-service-blue text-sm font-medium group-hover:underline">
        Learn more →
      </span>
    </Link>
  )
}
