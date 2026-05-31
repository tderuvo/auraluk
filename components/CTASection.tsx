'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ease = [0.25, 1, 0.35, 1] as const

function CTAStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random() * 0.6 + 0.1,
      sp: Math.random() * 0.015 + 0.003,
      off: Math.random() * Math.PI * 2,
    }))

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 1
      stars.forEach(s => {
        const alpha = s.a * (0.4 + 0.6 * Math.sin(t * s.sp + s.off))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(210, 228, 248, ${alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

export default function CTASection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void">
      {/* Starfield canvas */}
      <CTAStarfield />

      {/* Aurora gradients */}
      <div
        className="absolute inset-0 pointer-events-none aurora-layer"
        style={{ opacity: 0.4 }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 35%, rgba(3,5,8,0.75) 100%)',
        }}
      />

      {/* Bottom gradient to footer */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #030508)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Decorative constellation dots */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          {[1.5, 1, 2, 1, 1.5].map((size, i) => (
            <span
              key={i}
              className="block rounded-full bg-silver/30"
              style={{ width: `${size * 4}px`, height: `${size * 4}px`, animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.8, delay: 0.2, ease }}
          className="font-serif font-light text-ghost"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            letterSpacing: '0.05em',
            lineHeight: 1.05,
          }}
        >
          Look Up
          <br />
          <span className="italic text-gradient-aurora">Again.</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6, ease }}
          className="flex items-center justify-center gap-4 my-14"
        >
          <span className="block h-px bg-gradient-to-r from-transparent via-aurora/50 to-transparent w-40" />
          <span className="block w-1.5 h-1.5 rounded-full bg-aurora" />
          <span className="block h-px bg-gradient-to-r from-transparent via-aurora/50 to-transparent w-40" />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, delay: 0.5, ease }}
          className="font-sans text-silver-dim leading-relaxed max-w-lg mx-auto"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
        >
          Auraluk invites you to step away from the noise and rediscover the universe above you.
          The mountains are quiet. The sky is waiting.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, delay: 0.8, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
        >
          <a
            href="#cosmos-nights"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#cosmos-nights')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border border-aurora/30 bg-aurora/8 px-10 py-4 section-label text-aurora hover:bg-aurora/16 hover:border-aurora/55 transition-all duration-700 w-full sm:w-auto text-center"
          >
            Plan Your Escape
          </a>
          <a
            href="#footer-newsletter"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#footer-newsletter')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="glass border border-white/8 px-10 py-4 section-label text-silver hover:text-aurora hover:border-aurora/30 transition-all duration-600 w-full sm:w-auto text-center"
          >
            Join the Cosmos List
          </a>
        </motion.div>

        {/* Location hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="section-label opacity-30 mt-12"
        >
          Sutton, Québec · 45°N · Bortle Class 3
        </motion.p>
      </div>
    </section>
  )
}
