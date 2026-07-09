import { siteConfig } from '@/lib/seo/metadata'

export interface ItemListEntry {
  name: string
  url: string
  description?: string
}

export function buildItemListSchema(name: string, items: ItemListEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${siteConfig.url}${item.url}`,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
    })),
  }
}
