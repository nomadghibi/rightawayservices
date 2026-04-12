import { siteConfig } from '@/lib/seo/metadata'

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
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
    openingHoursSpecification: [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    ].map((day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day,
      opens: '08:00',
      closes: '20:00',
    })),
    areaServed: [
      { '@type': 'City', name: 'Palm Bay', containedIn: 'Brevard County, FL' },
      { '@type': 'City', name: 'Melbourne', containedIn: 'Brevard County, FL' },
      { '@type': 'City', name: 'West Melbourne', containedIn: 'Brevard County, FL' },
      { '@type': 'City', name: 'Malabar', containedIn: 'Brevard County, FL' },
      { '@type': 'City', name: 'Grant-Valkaria', containedIn: 'Brevard County, FL' },
      { '@type': 'City', name: 'Indialantic', containedIn: 'Brevard County, FL' },
      { '@type': 'City', name: 'Melbourne Beach', containedIn: 'Brevard County, FL' },
      { '@type': 'City', name: 'Satellite Beach', containedIn: 'Brevard County, FL' },
      { '@type': 'City', name: 'Indian Harbour Beach', containedIn: 'Brevard County, FL' },
      { '@type': 'City', name: 'Rockledge', containedIn: 'Brevard County, FL' },
      { '@type': 'City', name: 'Viera', containedIn: 'Brevard County, FL' },
      { '@type': 'City', name: 'Suntree', containedIn: 'Brevard County, FL' },
    ],
    serviceType: [
      'Handyman Services',
      'Home Repairs',
      'Drywall Repair',
      'Interior Painting',
      'Door and Window Repairs',
      'Fixture Installation',
      'Ceiling Fan Installation',
      'Furniture Assembly',
      'Property Maintenance',
    ],
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card',
  }
}
