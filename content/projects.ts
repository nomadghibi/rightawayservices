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
  imageNote?: string
  metaTitle: string
  metaDescription: string
}

export const projects: Project[] = [
  {
    slug: 'exterior-stucco-repair-painting-pressure-washing-palm-bay-fl',
    title: 'Exterior Stucco Repair, Painting & Pressure Washing in Palm Bay, FL',
    status: 'published',
    serviceSlug: 'painting-services',
    areaSlug: 'palm-bay-fl',
    date: '2026-09-11',
    summary:
      'A real exterior project showing pressure washing, stucco crack repair, and fresh paint for exterior walls, the garage door, front door, back door, sidewalk, and pool patio areas on a Palm Bay home.',
    workPerformed: [
      'Pressure washed exterior surfaces, sidewalk, patio, and prep areas before painting',
      'Repaired visible cracks and damaged spots in the stucco before finish coating',
      'Painted exterior stucco walls for a cleaner, more consistent curb appeal finish',
      'Painted the garage door, front door, and back door to match the updated exterior',
      'Refreshed pool patio and screened patio wall areas after surface preparation',
      'Cleaned work areas and checked edges, trim lines, and door finishes before completion',
    ],
    images: [
      {
        src: '/images/projects/exterior-stucco-painting-palm-bay-fl/front-exterior-stucco-paint-v2.jpg',
        alt: 'Palm Bay FL home exterior after stucco repair and fresh exterior wall painting',
      },
      {
        src: '/images/projects/exterior-stucco-painting-palm-bay-fl/sidewalk-pressure-washing-after-v2.jpg',
        alt: 'Freshly pressure washed and painted sidewalk in front of a Palm Bay FL home',
      },
      {
        src: '/images/projects/exterior-stucco-painting-palm-bay-fl/pool-patio-exterior-paint-v2.jpg',
        alt: 'Pool patio exterior walls after pressure washing and painting in Palm Bay FL',
      },
      {
        src: '/images/projects/exterior-stucco-painting-palm-bay-fl/side-wall-stucco-paint-v2.jpg',
        alt: 'Side stucco wall after crack repair and exterior painting on a Palm Bay FL home',
      },
      {
        src: '/images/projects/exterior-stucco-painting-palm-bay-fl/back-patio-wall-paint-v2.jpg',
        alt: 'Back patio wall and sliding door area after exterior painting and repairs',
      },
      {
        src: '/images/projects/exterior-stucco-painting-palm-bay-fl/stucco-crack-repair-paint-v2.jpg',
        alt: 'Stucco wall repair and exterior paint finish near pool equipment',
      },
      {
        src: '/images/projects/exterior-stucco-painting-palm-bay-fl/back-door-exterior-paint-v2.jpg',
        alt: 'Back door and exterior stucco wall after painting and repair work',
      },
    ],
    imageNote:
      'These are real project photos provided for the exterior pressure washing, stucco repair, and painting work shown on this page.',
    metaTitle: 'Exterior Stucco Repair & Painting Palm Bay FL | Right Away Services LLC',
    metaDescription:
      'See a Palm Bay, FL exterior project with pressure washing, stucco crack repair, exterior wall painting, garage door painting, front door painting, and back door painting.',
  },
  {
    slug: 'interior-painting-refresh-palm-bay-fl',
    title: 'Interior Painting Refresh in Palm Bay, FL',
    status: 'published',
    serviceSlug: 'painting-services',
    areaSlug: 'palm-bay-fl',
    date: '2026-09-05',
    summary:
      'A realistic before-and-after example of a Palm Bay interior painting refresh, showing how scuffed walls, patch marks, and worn trim can be cleaned up with careful prep and fresh paint.',
    workPerformed: [
      'Reviewed visible wall wear, patch marks, and trim condition before painting',
      'Prepared the wall surface for a cleaner paint finish',
      'Painted the main wall in a neutral color suited for a Florida living space',
      'Freshened trim lines for a cleaner finished look',
      'Left the room ready for normal use after cleanup',
    ],
    images: [
      {
        src: '/images/projects/interior-painting-palm-bay-before-after.png',
        alt: 'Before and after interior painting refresh in a Palm Bay FL living room',
      },
    ],
    metaTitle: 'Interior Painting Palm Bay FL Before and After | Right Away Services LLC',
    metaDescription:
      'See a realistic interior painting before-and-after example for Palm Bay, FL homes from Right Away Services LLC.',
  },
  {
    slug: 'driveway-cleaning-melbourne-fl',
    title: 'Driveway Cleaning in Melbourne, FL',
    status: 'published',
    serviceSlug: 'property-maintenance',
    areaSlug: 'melbourne-fl',
    date: '2026-09-05',
    summary:
      'A Melbourne driveway cleaning example showing how mildew staining, tire marks, and Florida weather buildup can affect curb appeal before routine exterior maintenance.',
    workPerformed: [
      'Reviewed driveway staining, leaf debris, and traffic marks',
      'Cleared loose debris from the driveway surface',
      'Cleaned the concrete surface to improve curb appeal',
      'Checked edges and walkway transitions for a consistent finished appearance',
      'Completed exterior cleanup around the work area',
    ],
    images: [
      {
        src: '/images/projects/driveway-cleaning-melbourne-before-after.png',
        alt: 'Before and after driveway cleaning for a Melbourne FL home',
      },
    ],
    metaTitle: 'Driveway Cleaning Melbourne FL Before and After | Right Away Services LLC',
    metaDescription:
      'See a realistic driveway cleaning before-and-after example for Melbourne, FL homes from Right Away Services LLC.',
  },
  {
    slug: 'small-bathroom-remodel-west-melbourne-fl',
    title: 'Small Bathroom Remodel in West Melbourne, FL',
    status: 'published',
    serviceSlug: 'bathroom-remodeling',
    areaSlug: 'west-melbourne-fl',
    date: '2026-09-05',
    summary:
      'A West Melbourne bathroom refresh example showing a dated vanity area updated with cleaner finishes, modern fixtures, fresh paint, and a brighter overall look.',
    workPerformed: [
      'Reviewed the existing vanity, wall condition, mirror, lighting, and fixtures',
      'Updated the vanity area with a cleaner modern finish',
      'Installed refreshed bathroom fixtures and hardware',
      'Improved wall finish and paint around the vanity area',
      'Completed caulking and cleanup for a finished bathroom refresh',
    ],
    images: [
      {
        src: '/images/projects/bathroom-remodel-west-melbourne-before-after.png',
        alt: 'Before and after small bathroom remodel in West Melbourne FL',
      },
    ],
    metaTitle: 'Bathroom Remodeling West Melbourne FL Before and After | Right Away Services LLC',
    metaDescription:
      'See a realistic small bathroom remodeling before-and-after example for West Melbourne, FL homes from Right Away Services LLC.',
  },
  {
    slug: 'drywall-repair-palm-bay-fl-before-after',
    title: 'Drywall Repair in Palm Bay, FL',
    status: 'published',
    serviceSlug: 'drywall-repair',
    areaSlug: 'palm-bay-fl',
    date: '2026-09-05',
    summary:
      'A Palm Bay drywall repair example showing holes, scuffs, and rough patch areas restored to a clean, paint-ready wall surface.',
    workPerformed: [
      'Assessed holes and surface damage from removed hardware',
      'Patched damaged drywall areas and prepared the wall surface',
      'Blended the repaired areas into the surrounding wall texture',
      'Finished the wall with a clean neutral appearance',
      'Cleaned the work area after the repair was complete',
    ],
    images: [
      {
        src: '/images/projects/drywall-repair-palm-bay-before-after.png',
        alt: 'Before and after drywall repair for a Palm Bay FL home',
      },
    ],
    metaTitle: 'Drywall Repair Palm Bay FL Before and After | Right Away Services LLC',
    metaDescription:
      'See a realistic drywall repair before-and-after example for Palm Bay, FL homes from Right Away Services LLC.',
  },
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
