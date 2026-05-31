'use client'
import Image from 'next/image'
import { useState } from 'react'

/**
 * CinematicImage — reusable premium image component.
 *
 * Renders as an absolute-fill fragment inside any positioned `overflow-hidden`
 * parent. The parent must also carry `className="group"` to activate the
 * hover zoom and brightness bloom effects on the Image.
 *
 * Drop the asset at `public/images/<filename>.png` and point `src` at
 * `/images/<filename>.png` — no further edits required.
 *
 * Fallback chain:
 *   loading  →  fallbackGradient (pulsing shimmer)
 *   loaded   →  fallbackGradient fades out, image fades in
 *   error    →  fallbackGradient stays visible, image never renders
 */

export interface CinematicImageProps {
  src: string
  alt: string
  fallbackGradient: string
  priority?: boolean
  sizes?: string
  /** CSS object-position — control which part of the image stays in frame */
  objectPosition?: string
}

export default function CinematicImage({
  src,
  alt,
  fallbackGradient,
  priority = false,
  sizes = '100vw',
  objectPosition = 'center',
}: CinematicImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const showFallback = hasError || !isLoaded

  return (
    <>
      {/* ── Fallback gradient ───────────────────────────────────────────── */}
      {/* Always mounted; fades to opacity-0 once image is ready.          */}
      {/* On error it stays fully opaque, so the section never looks broken.*/}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
        style={{
          background: fallbackGradient,
          opacity: showFallback ? 1 : 0,
        }}
      />

      {/* ── Loading shimmer ─────────────────────────────────────────────── */}
      {!isLoaded && !hasError && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse pointer-events-none z-[1]"
          style={{ background: 'rgba(62, 207, 176, 0.035)' }}
        />
      )}

      {/* ── Next.js Image ───────────────────────────────────────────────── */}
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={[
            'object-cover',
            'transition-all duration-700 ease-out',
            /* hover effects — requires `group` on the parent container */
            'group-hover:scale-[1.04] group-hover:brightness-[1.06]',
            isLoaded ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          style={{ objectPosition }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {/* ── Radial vignette ─────────────────────────────────────────────── */}
      {/* Adds cinematic edge darkening regardless of image/fallback state. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 42%, rgba(3,5,8,0.48) 100%)',
        }}
      />
    </>
  )
}
