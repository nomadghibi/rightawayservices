import { siteConfig } from '@/lib/seo/metadata'
import { services } from '@/content/services'
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

export function buildLocalBusinessSchema() {
  const sameAs = Object.values(siteConfig.social).filter(Boolean)

  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': businessId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phoneE164,
      contactType: 'customer service',
      areaServed: 'US-FL',
      availableLanguage: 'English',
    },
    openingHoursSpecification: [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    ].map((day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day,
      opens: '08:00',
      closes: '20:00',
    })),
    areaServed: buildAreaServed(),
    serviceType: services.map((service) => service.name),
    knowsAbout: [
      'Handyman services',
      'Home repairs',
      'Drywall repair',
      'Ceiling fan installation',
      'Fixture installation',
      'Property maintenance',
      'Bathroom remodeling',
      'Fence installation and repair',
      'Roof leak repair',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Handyman and home repair services',
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
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card',
    ...(sameAs.length > 0 ? { sameAs } : {}),
  }
}
