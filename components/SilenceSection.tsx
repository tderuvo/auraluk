'use client'
import { motion } from 'framer-motion'

// ─── Silence Before Dawn ──────────────────────────────────────────────────
// An editorial pause between the body rituals and the sky.
// Minimal copy. Heavy whitespace. No CTAs.
// The feeling: turning a page and finding a single sentence.

export default function SilenceSection() {
  return (
    <section
      className="relative bg-void overflow-hidden"
      style={{
        paddingTop: 'clamp(7rem, 14vw, 14rem)',
        paddingBottom: 'clamp(7rem, 14vw, 14rem)',
      }}
    >
      {/* Very faint pre-dawn radial — just enough to separate from pure black */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(8, 10, 20, 0.7) 0%, transparent 70%)',
        }}
      />

      <div className="relative text-center max-w-2xl mx-auto px-6">

        {/* The single sentence */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 3.2, ease: [0.25, 1, 0.35, 1] }}
          className="font-serif font-light italic"
          style={{
            fontSize: 'clamp(1.6rem, 3.8vw, 3.2rem)',
            letterSpacing: '0.02em',
            color: 'rgba(196, 208, 224, 0.44)',
            lineHeight: 1.35,
          }}
        >
          Silence arrives with the cold.
        </motion.p>

        {/* Timestamp — grounding the poetic in the specific */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2.5, delay: 1.4, ease: [0.25, 1, 0.35, 1] }}
          style={{
            marginTop: '3rem',
            fontSize: '0.58rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'rgba(120, 136, 168, 0.35)',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
          }}
        >
          4:47 am · Sutton, Québec · −17°C · Skies clear.
        </motion.p>
      </div>
    </section>
  )
}
