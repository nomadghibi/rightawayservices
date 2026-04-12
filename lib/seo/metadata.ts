import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Right Away Services LLC',
  url: 'https://rightawayservices.com',
  phone: '(321) 557-7426',
  phoneHref: 'tel:+13215577426',
  email: 'hello@rightawayservices.com',
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
  social: {
    facebook: '',
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

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}
