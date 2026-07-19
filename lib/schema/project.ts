import type { Project } from '@/content/projects'
import { siteConfig } from '@/lib/seo/metadata'

export function buildProjectSchema(project: Project) {
  const url = `${siteConfig.url}/projects/${project.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#project`,
    headline: project.title,
    description: project.summary,
    mainEntityOfPage: url,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(project.date ? { datePublished: project.date, dateModified: project.date } : {}),
    ...(project.images.length ? { image: project.images.map((image) => `${siteConfig.url}${image.src}`) } : {}),
  }
}
