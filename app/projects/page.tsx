import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CTABand } from '@/components/sections/CTABand'
import { SchemaScript } from '@/components/seo/SchemaScript'
import { publishedProjects } from '@/content/projects'
import { getServiceBySlug } from '@/content/services'
import { getServiceAreaBySlug } from '@/content/serviceAreas'
import { buildBreadcrumbSchema } from '@/lib/schema/breadcrumbs'
import { buildItemListSchema } from '@/lib/schema/itemList'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'

export const metadata: Metadata = buildMetadata({
  title: `Before & After Handyman Projects | ${siteConfig.name}`,
  description:
    'See realistic before-and-after handyman project examples for painting, drywall repair, driveway cleaning, and bathroom remodeling in Palm Bay, Melbourne, and nearby Brevard County areas.',
  path: '/projects',
})

export default function ProjectsPage() {
  return (
    <>
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Before & After Projects', url: '/projects' },
        ])}
      />
      <SchemaScript
        schema={buildItemListSchema(
          'Right Away Services before and after project examples',
          publishedProjects.map((project) => ({
            name: project.title,
            url: `/projects/${project.slug}`,
            description: project.summary,
          })),
        )}
      />

      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-300 mb-4">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Projects</li>
            </ol>
          </nav>
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Before &amp; After Work Examples
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Handyman Project Examples in Palm Bay &amp; Melbourne, FL
          </h1>
          <p className="text-blue-200 text-lg max-w-3xl">
            See examples of the kind of painting, drywall repair, exterior cleaning, bathroom remodeling, and home
            repair work Right Away Services LLC handles across the Space Coast.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {publishedProjects.map((project) => {
              const service = getServiceBySlug(project.serviceSlug)
              const area = getServiceAreaBySlug(project.areaSlug)
              const image = project.images[0]

              return (
                <article key={project.slug} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                  {image ? (
                    <Link href={`/projects/${project.slug}`} className="block">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={900}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </Link>
                  ) : null}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 text-xs font-semibold mb-3">
                      {service ? (
                        <span className="rounded-full bg-service-blue/10 px-3 py-1 text-service-blue">
                          {service.name}
                        </span>
                      ) : null}
                      {area ? (
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">
                          {area.name}, {area.state}
                        </span>
                      ) : null}
                    </div>
                    <h2 className="text-xl font-bold text-navy mb-3">
                      <Link href={`/projects/${project.slug}`} className="hover:underline">
                        {project.title}
                      </Link>
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-gray mb-5">{project.summary}</p>
                    <Link href={`/projects/${project.slug}`} className="text-service-blue text-sm font-semibold hover:underline">
                      View project details →
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
