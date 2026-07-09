import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, getBlogPostBySlug, formatDate } from '@/content/blogPosts'
import { services } from '@/content/services'
import { serviceAreas } from '@/content/serviceAreas'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { buildBreadcrumbSchema } from '@/lib/schema/breadcrumbs'
import { SchemaScript } from '@/components/seo/SchemaScript'
import { CTABand } from '@/components/sections/CTABand'
import { PageHeroImage } from '@/components/sections/PageHeroImage'
import { pageImages } from '@/content/pageMedia'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const relatedServicePages = services.filter((s) => post.relatedServices.includes(s.slug))
  const relatedAreaPages = serviceAreas.filter((a) => post.relatedAreas.includes(a.slug))

  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ])

  return (
    <>
      <SchemaScript schema={breadcrumbs} />

      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
          <nav aria-label="Breadcrumb" className="text-sm text-blue-300 mb-4">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Article</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-blue-300 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <time className="text-blue-300 text-sm" dateTime={post.date}>
            Published {formatDate(post.date)}
          </time>
          </div>
          <PageHeroImage {...pageImages.blog} priority caption={post.category} />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <p className="text-lg text-slate-gray leading-relaxed mb-8 font-medium border-l-4 border-service-blue pl-4">
                {post.excerpt}
              </p>

              <div className="prose-local">
                {post.content.map((section, index) => {
                  if (section.type === 'paragraph') {
                    return (
                      <p key={index} className="text-slate-gray leading-relaxed mb-5">
                        {section.text}
                      </p>
                    )
                  }
                  if (section.type === 'heading') {
                    return (
                      <h2 key={index} className="text-xl font-bold text-navy mt-8 mb-3">
                        {section.text}
                      </h2>
                    )
                  }
                  if (section.type === 'list' && section.items) {
                    return (
                      <ul key={index} className="space-y-2 mb-5">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-gray">
                            <span className="w-1.5 h-1.5 bg-service-blue rounded-full flex-shrink-0 mt-2" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  if (section.type === 'cta') {
                    return (
                      <div key={index} className="bg-off-white border border-gray-200 rounded-xl p-6 my-8">
                        <p className="text-charcoal font-medium mb-4">{section.text}</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href={siteConfig.phoneHref}
                            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                          >
                            Call {siteConfig.phone}
                          </a>
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                          >
                            Request Free Estimate
                          </Link>
                        </div>
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-navy text-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Need a Handyman?</h3>
                <p className="text-blue-200 text-sm mb-5">
                  Right Away Services LLC serves Palm Bay, Melbourne, and the Space Coast.
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="block text-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 rounded-lg transition-colors mb-3"
                >
                  {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="block text-center border border-white text-white hover:bg-white hover:text-navy font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  Request Estimate
                </Link>
              </div>

              {relatedServicePages.length > 0 && (
                <div className="bg-off-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-semibold text-navy mb-3">Related Services</h3>
                  <ul className="space-y-2">
                    {relatedServicePages.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-service-blue text-sm hover:underline"
                        >
                          {service.name} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedAreaPages.length > 0 && (
                <div className="bg-off-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-semibold text-navy mb-3">Related Service Areas</h3>
                  <ul className="space-y-2">
                    {relatedAreaPages.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/service-areas/${area.slug}`}
                          className="text-service-blue text-sm hover:underline"
                        >
                          Handyman services in {area.name}, {area.state} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-off-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-navy mb-2">More Articles</h3>
                <ul className="space-y-3">
                  {blogPosts
                    .filter((p) => p.slug !== post.slug)
                    .map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="text-sm text-service-blue hover:underline leading-snug block"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
