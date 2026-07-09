export interface PageImage {
  src: string
  alt: string
}

export const pageImages = {
  home: {
    src: '/images/rightawayservices/home-hero.jpg',
    alt: 'Handyman installing a light fixture in a bright coastal living room',
  },
  services: {
    src: '/images/rightawayservices/services-hero.jpg',
    alt: 'Handyman working on ceiling fans and wall repairs inside a Florida home',
  },
  serviceAreas: {
    src: '/images/rightawayservices/service-areas-hero.jpg',
    alt: 'Handyman van parked in a palm-lined Florida neighborhood',
  },
  about: {
    src: '/images/rightawayservices/about-hero.jpg',
    alt: 'Right Away Services handyman portrait with a coastal home interior behind him',
  },
  contact: {
    src: '/images/rightawayservices/contact-hero.jpg',
    alt: 'Estimate clipboard, tools, and laptop on a bright kitchen counter',
  },
  faq: {
    src: '/images/rightawayservices/faq-hero.jpg',
    alt: 'Handyman reviewing project details with a homeowner in a coastal living room',
  },
  blog: {
    src: '/images/rightawayservices/blog-hero.jpg',
    alt: 'Open laptop with home repair photos, notes, and tools on a worktable',
  },
  serviceDetail: {
    src: '/images/rightawayservices/service-detail-hero.jpg',
    alt: 'Handyman finishing a drywall patch in a bright Florida home',
  },
} satisfies Record<string, PageImage>

const serviceImageMap: Record<string, PageImage> = {
  'handyman-services': pageImages.home,
  'home-repairs': pageImages.serviceDetail,
  'drywall-repair': pageImages.serviceDetail,
  'painting-services': pageImages.services,
  'door-and-window-repairs': pageImages.serviceDetail,
  'fixture-installation': pageImages.home,
  'ceiling-fan-installation': pageImages.services,
  'furniture-assembly': pageImages.contact,
  'property-maintenance': pageImages.serviceAreas,
  'bathroom-remodeling': pageImages.contact,
  'fence-installation-and-repair': pageImages.serviceAreas,
  'roof-leak-repair': pageImages.serviceDetail,
}

export function getServiceImage(slug: string): PageImage {
  return serviceImageMap[slug] ?? pageImages.serviceDetail
}
