'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -999, y: -999 })
  const currentRef = useRef({ x: -999, y: -999 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    const animate = () => {
      const dx = posRef.current.x - currentRef.current.x
      const dy = posRef.current.y - currentRef.current.y
      currentRef.current.x += dx * 0.08
      currentRef.current.y += dy * 0.08
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentRef.current.x - 240}px, ${currentRef.current.y - 240}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-[480px] h-[480px] pointer-events-none z-10 hidden md:block"
      style={{
        background:
          'radial-gradient(circle, rgba(62, 207, 176, 0.055) 0%, rgba(42, 180, 232, 0.025) 40%, transparent 72%)',
        willChange: 'transform',
      }}
    />
  )
}
