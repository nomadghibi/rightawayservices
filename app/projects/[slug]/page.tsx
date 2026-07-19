import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/content/projects'
import { getServiceBySlug } from '@/content/services'
import { getServiceAreaBySlug } from '@/content/serviceAreas'
import { buildMetadata, siteConfig } from '@/lib/seo/metadata'
import { buildBreadcrumbSchema } from '@/lib/schema/breadcrumbs'
import { buildProjectSchema } from '@/lib/schema/project'
import { SchemaScript } from '@/components/seo/SchemaScript'
import { CTABand } from '@/components/sections/CTABand'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}

  return buildMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/projects/${project.slug}`,
    noIndex: project.status !== 'published',
  })
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const service = getServiceBySlug(project.serviceSlug)
  const area = getServiceAreaBySlug(project.areaSlug)
  if (!service || !area) notFound()

  return (
    <>
      {project.status === 'published' ? <SchemaScript schema={buildProjectSchema(project)} /> : null}
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: project.title, url: `/projects/${project.slug}` },
        ])}
      />

      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-300 mb-4">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">{project.title}</li>
            </ol>
          </nav>
          {project.status === 'draft' ? (
            <p className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
              Draft example - not completed customer work
            </p>
          ) : null}
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-blue-200 text-lg">{project.summary}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid gap-10 lg:grid-cols-[1.5fr_0.5fr]">
          <article>
            <h2 className="text-2xl font-bold text-navy mb-5">Work Performed</h2>
            <ul className="space-y-3 mb-10">
              {project.workPerformed.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-gray">
                  <span className="w-1.5 h-1.5 bg-service-blue rounded-full flex-shrink-0 mt-2" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {project.images.length ? (
              <div className="grid gap-5 sm:grid-cols-2">
                {project.images.map((image) => (
                  <Image key={image.src} src={image.src} alt={image.alt} width={800} height={600} className="rounded-xl" />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-gray-300 bg-off-white p-6 text-sm text-slate-gray">
                Add original, customer-approved project images and descriptive alt text before publishing.
              </div>
            )}
          </article>

          <aside className="space-y-4">
            <Link href={`/services/${service.slug}`} className="block rounded-lg border border-gray-200 p-4 text-service-blue font-semibold hover:border-service-blue">
              Related service: {service.name}
            </Link>
            <Link href={`/service-areas/${area.slug}`} className="block rounded-lg border border-gray-200 p-4 text-service-blue font-semibold hover:border-service-blue">
              Service area: {area.name}, {area.state}
            </Link>
            <a href={siteConfig.phoneHref} className="block rounded-lg bg-accent p-4 text-center text-white font-semibold hover:bg-accent-dark">
              Call {siteConfig.phone}
            </a>
          </aside>
        </div>
      </section>

      <CTABand />
    </>
  )
}
