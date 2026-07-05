import { siteConfig } from '@/lib/seo/metadata'
import type { Service } from '@/content/services'
import { serviceAreas } from '@/content/serviceAreas'

const businessId = `${siteConfig.url}/#localbusiness`

function buildAreaServed() {
  return serviceAreas.map((area) => ({
    '@type': 'City',
    name: `${area.name}, ${area.state}`,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: area.county,
    },
  }))
}

export function buildServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services/${service.slug}#service`,
    name: service.name,
    description: service.shortDescription,
    serviceType: service.name,
    category: 'Handyman and home repair services',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': businessId,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phoneE164,
    },
    areaServed: buildAreaServed(),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 27.9872,
        longitude: -80.6567,
      },
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      url: `${siteConfig.url}/contact`,
    },
    url: `${siteConfig.url}/services/${service.slug}`,
  }
}
