import type { Service } from '@/content/services'
import type { ServiceArea } from '@/content/serviceAreas'
import { siteConfig } from '@/lib/seo/metadata'

const businessId = `${siteConfig.url}/#localbusiness`

export function buildServiceAreaSchema(area: ServiceArea, services: Service[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/service-areas/${area.slug}#handyman-service-area`,
    name: `Handyman Services in ${area.name}, ${area.state}`,
    description: area.shortDescription,
    serviceType: 'Handyman Services',
    category: 'Handyman and home repair services',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': businessId,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phoneE164,
    },
    areaServed: {
      '@type': 'City',
      name: `${area.name}, ${area.state}`,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: area.county,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Home repair services in ${area.name}, ${area.state}`,
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.shortDescription,
          url: `${siteConfig.url}/services/${service.slug}`,
        },
      })),
    },
    url: `${siteConfig.url}/service-areas/${area.slug}`,
  }
}
