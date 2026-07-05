import { siteConfig } from '@/lib/seo/metadata'

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
    },
  }
}
