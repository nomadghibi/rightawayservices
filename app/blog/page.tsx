import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { blogPosts, formatDate } from '@/content/blogPosts'
import { CTABand } from '@/components/sections/CTABand'
import { PageHeroImage } from '@/components/sections/PageHeroImage'
import { pageImages } from '@/content/pageMedia'
import { SchemaScript } from '@/components/seo/SchemaScript'
import { buildBreadcrumbSchema } from '@/lib/schema/breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: `Handyman & Home Repair Blog — Space Coast, FL | ${siteConfig.name}`,
  description:
    'Home repair tips, Florida maintenance advice, and local homeowner guides from Right Away Services LLC — serving Palm Bay, Melbourne, and the Space Coast.',
  path: '/blog',
})

export default function BlogIndexPage() {
  return (
    <>
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ])}
      />

      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
          <nav aria-label="Breadcrumb" className="text-sm text-blue-300 mb-4">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Blog</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Home Repair &amp; Maintenance Tips</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Practical guides for Space Coast homeowners — from small repairs to Florida-specific maintenance
            advice from Right Away Services LLC.
          </p>
          </div>
          <PageHeroImage {...pageImages.blog} priority caption="Home repair tips and guides" />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-off-white h-36 flex items-center justify-center">
                  <div className="text-5xl">🏠</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-gray mb-3">
                    <span className="bg-service-blue/10 text-service-blue px-2 py-0.5 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-navy mb-2 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-gray text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <time className="text-xs text-slate-gray" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    <Link href={`/blog/${post.slug}`} className="text-service-blue text-sm font-medium hover:underline">
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
