import Image from 'next/image'
import type { PageImage } from '@/content/pageMedia'

interface PageHeroImageProps extends PageImage {
  priority?: boolean
  caption?: string
}

export function PageHeroImage({ src, alt, priority = false, caption }: PageHeroImageProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl aspect-[16/11]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" aria-hidden="true" />
      {caption && (
        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy shadow-md">
          {caption}
        </div>
      )}
    </div>
  )
}
