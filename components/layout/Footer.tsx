import Link from 'next/link'
import { siteConfig } from '@/lib/seo/metadata'
import { services } from '@/content/services'
import { serviceAreas } from '@/content/serviceAreas'
import { BrandLogo } from '@/components/layout/BrandLogo'

const primaryServices = services.slice(0, 5)
const primaryAreas = serviceAreas.slice(0, 6)
const socialLinks = [
  {
    label: 'Facebook',
    href: siteConfig.social.facebook,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.1 5.66 21.26 10.44 22v-7.03H7.9v-2.9h2.54V9.86c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.9h-2.33V22C18.34 21.26 22 17.1 22 12.07z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: siteConfig.social.x,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 2H22l-6.98 7.96L23.2 22h-6.9l-5.4-7.03L4.7 22H1.6l7.48-8.53L0 2h7.06l4.88 6.48L18.9 2zm-1.21 18h1.72L6.12 3.9H4.28L17.69 20z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <BrandLogo compact />
            </div>
            <p className="text-sm text-blue-200 leading-relaxed mb-4">
              Reliable handyman and home repair services for homeowners, landlords, and property managers across Florida&rsquo;s Space Coast.
            </p>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={siteConfig.phoneHref} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>540 Londonderry Circle SE, Palm Bay, FL 32909</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon – Sun: 8:00 AM – 8:00 PM</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-blue-300 mb-3">Follow us</p>
              <div className="flex items-center gap-3">
                {socialLinks
                  .filter((social) => social.href)
                  .map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white hover:text-navy"
                    >
                      {social.icon}
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2">
              {primaryServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-accent hover:text-accent-light transition-colors">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service areas column */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2">
              {primaryAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-sm text-accent hover:text-accent-light transition-colors">
                  All service areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-blue-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-blue-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-blue-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-blue-200 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-navy-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-300">
            &copy; {new Date().getFullYear()} Right Away Services LLC. All rights reserved. Serving Brevard County, FL.
          </p>
          <div className="flex items-center gap-4 text-xs text-blue-300">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-blue-400">
          Website design by:{' '}
          <a
            href="https://reliablewebstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            reliablewebstudio.com
          </a>
        </div>
      </div>
    </footer>
  )
}
