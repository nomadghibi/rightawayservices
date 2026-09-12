export interface ProjectImage {
  src: string
  alt: string
  phase?: 'before' | 'after'
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
    slug: 'drywall-repair-repipe-melbourne-fl',
    title: 'Drywall Repair After Home Repiping in Melbourne, FL',
    status: 'published',
    serviceSlug: 'drywall-repair',
    areaSlug: 'melbourne-fl',
    date: '2026-09-12',
    summary:
      'A real Melbourne, FL drywall repair project completed after home repiping, including repairs to opened walls, ceilings, corners, and plumbing access areas followed by texture matching and paint-ready finishing.',
    workPerformed: [
      'Reviewed drywall openings and damaged surfaces created during the home repiping work',
      'Repaired wall and ceiling openings around plumbing access points',
      'Rebuilt damaged drywall around the bathroom vanity and other interior areas',
      'Taped, finished, and blended repaired surfaces with the surrounding texture',
      'Prepared repaired areas for a consistent paint-ready finish',
      'Cleaned the work areas after the drywall repairs were completed',
    ],
    images: [
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/bathroom-ceiling-repair-after.jpg',
        alt: 'Repaired textured bathroom ceiling after repiping in Melbourne FL',
        phase: 'after',
      },
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/ceiling-corner-repair-after.jpg',
        alt: 'Finished drywall and ceiling corner repair after repiping in Melbourne FL',
        phase: 'after',
      },
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/wall-patch-after.jpg',
        alt: 'Finished interior wall patch after plumbing repipe work in Melbourne FL',
        phase: 'after',
      },
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/ceiling-edge-repair-after.jpg',
        alt: 'Repaired ceiling edge and textured wall after repiping in Melbourne FL',
        phase: 'after',
      },
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/ceiling-patch-after.jpg',
        alt: 'Completed ceiling patch and paint-ready finish after repiping in Melbourne FL',
        phase: 'after',
      },
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/ceiling-repair-after.jpg',
        alt: 'Finished textured ceiling repair after plumbing access work in Melbourne FL',
        phase: 'after',
      },
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/ceiling-corner-finish-after.jpg',
        alt: 'Completed ceiling corner drywall repair in a Melbourne FL home',
        phase: 'after',
      },
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/ceiling-opening-before.jpg',
        alt: 'Open ceiling access area before drywall repair after repiping in Melbourne FL',
        phase: 'before',
      },
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/wall-opening-before.jpg',
        alt: 'Open wall access area before drywall repair after repiping in Melbourne FL',
        phase: 'before',
      },
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/bathroom-wall-opening-before.jpg',
        alt: 'Bathroom wall opening before drywall repair after repiping in Melbourne FL',
        phase: 'before',
      },
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/ceiling-plumbing-opening-before.jpg',
        alt: 'Ceiling plumbing opening before drywall repair in a Melbourne FL home',
        phase: 'before',
      },
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/ceiling-access-before.jpg',
        alt: 'Ceiling access opening before drywall repair after home repiping in Melbourne FL',
        phase: 'before',
      },
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/wall-plumbing-opening-before.jpg',
        alt: 'Wall plumbing opening before drywall repair after repiping in Melbourne FL',
        phase: 'before',
      },
      {
        src: '/images/projects/drywall-repair-repipe-melbourne-fl/ceiling-cutouts-before.jpg',
        alt: 'Multiple ceiling cutouts before drywall repair after repiping in Melbourne FL',
        phase: 'before',
      },
    ],
    imageNote:
      'These are real project photos provided for the drywall repair work shown on this page. The openings were made during home repiping and were repaired afterward.',
    metaTitle: 'Drywall Repair After Repiping Melbourne FL | Right Away Services LLC',
    metaDescription:
      'See a real Melbourne, FL drywall repair project completed after home repiping, including wall and ceiling openings, texture matching, and paint-ready finishing.',
  },
  {
    slug: 'exterior-stucco-repair-painting-pressure-washing-viera-suntree-fl',
    title: 'Exterior Stucco Repair, Painting & Pressure Washing in Viera/Suntree, FL',
    status: 'published',
    serviceSlug: 'painting-services',
    areaSlug: 'suntree-fl',
    date: '2026-09-11',
    summary:
      'A real exterior project in the Viera/Suntree area showing pressure washing, stucco crack repair, and fresh paint for exterior walls, the garage door, front door, back door, sidewalk, and pool patio areas.',
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
        src: '/images/projects/exterior-stucco-painting-viera-suntree-fl/front-exterior-stucco-paint-v2.jpg',
        alt: 'Viera Suntree FL home exterior after stucco repair and fresh exterior wall painting',
      },
      {
        src: '/images/projects/exterior-stucco-painting-viera-suntree-fl/sidewalk-pressure-washing-after-v2.jpg',
        alt: 'Freshly pressure washed and painted sidewalk in front of a Viera Suntree FL home',
      },
      {
        src: '/images/projects/exterior-stucco-painting-viera-suntree-fl/pool-patio-exterior-paint-v2.jpg',
        alt: 'Pool patio exterior walls after pressure washing and painting in Viera Suntree FL',
      },
      {
        src: '/images/projects/exterior-stucco-painting-viera-suntree-fl/side-wall-stucco-paint-v2.jpg',
        alt: 'Side stucco wall after crack repair and exterior painting on a Viera Suntree FL home',
      },
      {
        src: '/images/projects/exterior-stucco-painting-viera-suntree-fl/back-patio-wall-paint-v2.jpg',
        alt: 'Back patio wall and sliding door area after exterior painting and repairs',
      },
      {
        src: '/images/projects/exterior-stucco-painting-viera-suntree-fl/stucco-crack-repair-paint-v2.jpg',
        alt: 'Stucco wall repair and exterior paint finish near pool equipment',
      },
      {
        src: '/images/projects/exterior-stucco-painting-viera-suntree-fl/back-door-exterior-paint-v2.jpg',
        alt: 'Back door and exterior stucco wall after painting and repair work',
      },
    ],
    imageNote:
      'These are real project photos provided for the exterior pressure washing, stucco repair, and painting work shown on this page.',
    metaTitle: 'Exterior Stucco Repair & Painting Viera/Suntree FL | Right Away Services LLC',
    metaDescription:
      'See a Viera/Suntree, FL exterior project with pressure washing, stucco crack repair, exterior wall painting, garage door painting, front door painting, and back door painting.',
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
