import Link from 'next/link'
import type { ServiceArea } from '@/content/serviceAreas'

interface AreaCardProps {
  area: ServiceArea
}

export function AreaCard({ area }: AreaCardProps) {
  return (
    <Link
      href={`/service-areas/${area.slug}`}
      className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-service-blue hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-charcoal group-hover:text-navy">
            {area.name}, {area.state}
          </h3>
          <p className="text-slate-gray text-sm mt-1">{area.county}</p>
        </div>
        <span className="text-service-blue text-sm font-medium group-hover:underline whitespace-nowrap ml-2">
          View →
        </span>
      </div>
    </Link>
  )
}
