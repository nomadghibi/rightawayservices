import type { MetadataRoute } from 'next'
import { services } from '@/content/services'
import { serviceAreas } from '@/content/serviceAreas'
import { indexableBlogPosts } from '@/content/blogPosts'
import { publishedProjects } from '@/content/projects'
import { siteConfig } from '@/lib/seo/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const contentLastModified = new Date('2026-07-19')

  const corePages: MetadataRoute.Sitemap = [
    { url: base, lastModified: contentLastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services`, lastModified: contentLastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/service-areas`, lastModified: contentLastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: contentLastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: contentLastModified, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/faq`, lastModified: contentLastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: contentLastModified, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: contentLastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const areaPages: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `${base}/service-areas/${area.slug}`,
    lastModified: contentLastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = indexableBlogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  const projectPages: MetadataRoute.Sitemap = publishedProjects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(project.date ?? '2026-07-19'),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...corePages, ...servicePages, ...areaPages, ...blogPages, ...projectPages]
}
