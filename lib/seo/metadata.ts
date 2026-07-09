import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Right Away Services LLC',
  legalName: 'Right Away Services LLC',
  url: 'https://rightawayservices.com',
  phone: '(321) 557-7426',
  phoneE164: '+13215577426',
  phoneHref: 'tel:+13215577426',
  email: 'rightawayservices2010@gmail.com',
  address: {
    street: '540 Londonderry Circle SE',
    city: 'Palm Bay',
    state: 'FL',
    zip: '32909',
    region: 'Brevard County',
  },
  serviceArea: 'Palm Bay, Melbourne, and Florida\'s Space Coast',
  tagline: 'Reliable Handyman Services for the Space Coast',
  description:
    'Right Away Services LLC is a licensed and insured handyman company in Palm Bay, FL with 26 years of experience. 5.0-star rated on Angi. Serving homeowners, landlords, and property managers across Florida\'s Space Coast.',
  defaultImage: '/images/rightawayservices/home-hero.jpg',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61591783619296',
    x: 'https://x.com/rightawayservic',
    instagram: '',
    google: '',
  },
}

export function buildMetadata({
  title,
  description,
  path = '',
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  noIndex?: boolean
}): Metadata {
  const url = `${siteConfig.url}${path}`
  const titleSuffix = ` | ${siteConfig.name}`
  const pageTitle = title.endsWith(titleSuffix)
    ? title.slice(0, -titleSuffix.length)
    : title
  const fullTitle = `${pageTitle}${titleSuffix}`
  const imageUrl = `${siteConfig.url}${siteConfig.defaultImage}`

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 800,
          alt: 'Right Away Services handyman work in a Florida home',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}
