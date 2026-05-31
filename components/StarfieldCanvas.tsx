'use client'
import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  twinkleSpeed: number
  twinkleOffset: number
  driftX: number
  driftY: number
}

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars: Star[] = Array.from({ length: 280 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.4 + 0.2,
      opacity: Math.random() * 0.65 + 0.1,
      twinkleSpeed: Math.random() * 0.018 + 0.004,
      twinkleOffset: Math.random() * Math.PI * 2,
      driftX: (Math.random() - 0.5) * 0.008,
      driftY: (Math.random() - 0.5) * 0.006,
    }))

    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 1

      const parallaxX = (mouseX / canvas.width - 0.5) * 6
      const parallaxY = (mouseY / canvas.height - 0.5) * 4

      stars.forEach(star => {
        star.x += star.driftX
        star.y += star.driftY
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset)
        const alpha = Math.max(0.05, star.opacity * (0.55 + 0.45 * twinkle))

        const px = star.x + parallaxX * (star.radius / 1.4)
        const py = star.y + parallaxY * (star.radius / 1.4)

        ctx.beginPath()
        ctx.arc(px, py, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(210, 228, 248, ${alpha})`
        ctx.fill()

        if (star.radius > 1.1) {
          const grd = ctx.createRadialGradient(px, py, 0, px, py, star.radius * 4)
          grd.addColorStop(0, `rgba(180, 220, 255, ${alpha * 0.35})`)
          grd.addColorStop(1, 'rgba(180, 220, 255, 0)')
          ctx.beginPath()
          ctx.arc(px, py, star.radius * 4, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()
        }
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  )
}
