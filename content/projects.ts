export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  slug: string
  title: string
  status: 'draft' | 'published'
  serviceSlug: string
  areaSlug: string
  date?: string
  summary: string
  workPerformed: string[]
  images: ProjectImage[]
  metaTitle: string
  metaDescription: string
}

// Duplicate this record only after receiving verified project details and original photos.
export const projects: Project[] = [
  {
    slug: 'project-page-template',
    title: 'Project Page Template',
    status: 'draft',
    serviceSlug: 'handyman-services',
    areaSlug: 'palm-bay-fl',
    summary:
      'This unpublished template shows the information needed for a future project page. It is not a completed customer project or testimonial.',
    workPerformed: [
      'Replace this item with verified work performed',
      'Add the actual service scope without unsupported claims',
      'Include the customer-approved city and project date',
    ],
    images: [],
    metaTitle: 'Draft Project Page Template | Right Away Services LLC',
    metaDescription:
      'Internal noindex template for adding verified Right Away Services LLC project pages with service, city, work details, and original images.',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export const publishedProjects = projects.filter((project) => project.status === 'published')
