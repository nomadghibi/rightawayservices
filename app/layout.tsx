import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SchemaScript } from '@/components/seo/SchemaScript'
import { buildLocalBusinessSchema } from '@/lib/schema/localBusiness'
import { buildWebsiteSchema } from '@/lib/schema/website'
import { siteConfig } from '@/lib/seo/metadata'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `Handyman Services in Palm Bay & Melbourne, FL | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}${siteConfig.defaultImage}`,
        width: 1600,
        height: 800,
        alt: 'Right Away Services handyman work in a Florida home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${siteConfig.url}${siteConfig.defaultImage}`],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <SchemaScript schema={buildLocalBusinessSchema()} />
        <SchemaScript schema={buildWebsiteSchema()} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
