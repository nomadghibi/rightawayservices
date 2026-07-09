import type { BlogPost } from '@/content/blogPosts'
import { siteConfig } from '@/lib/seo/metadata'

export function buildBlogPostingSchema(post: BlogPost) {
  const url = `${siteConfig.url}/blog/${post.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/branding/right-away-services-logo.jpg`,
      },
    },
    image: `${siteConfig.url}/images/rightawayservices/blog-hero.jpg`,
    articleSection: post.category,
    inLanguage: 'en-US',
  }
}
