import Image from 'next/image'
import Link from 'next/link'

interface BrandLogoProps {
  href?: string
  compact?: boolean
}

export function BrandLogo({ href = '/', compact = false }: BrandLogoProps) {
  const wrapperClass = compact
    ? 'inline-flex items-center rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/10'
    : 'inline-flex items-center rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-black/10'

  const image = (
    <Image
      src="/images/branding/right-away-services-logo.jpg"
      alt="Right Away Services LLC logo"
      width={512}
      height={341}
      priority={false}
      className={compact ? 'h-12 w-auto object-contain' : 'h-16 w-auto object-contain'}
    />
  )

  return href ? (
    <Link href={href} className={wrapperClass}>
      {image}
    </Link>
  ) : (
    <div className={wrapperClass}>{image}</div>
  )
}
