import { siteConfig } from '@/lib/seo/metadata'
import type { Service } from '@/content/services'

export function buildServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.shortDescription,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 27.9872,
        longitude: -80.6567,
      },
    },
    url: `${siteConfig.url}/services/${service.slug}`,
  }
}
