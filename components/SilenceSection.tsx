'use client'
import { motion } from 'framer-motion'

// ─── Silence Before Dawn ──────────────────────────────────────────────────
// An editorial pause on pale linen — the Kinfolk / Muji page-break moment.
// One sentence. A timestamp. Heavy whitespace. Nothing else.

export default function SilenceSection() {
  return (
    <section
      className="relative bg-linen overflow-hidden"
      style={{
        paddingTop: 'clamp(7rem, 14vw, 14rem)',
        paddingBottom: 'clamp(7rem, 14vw, 14rem)',
      }}
    >
      {/* Barely visible atmospheric texture — warm linen diffusion */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(232,229,222,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="relative text-center max-w-2xl mx-auto px-6">

        {/* The single sentence — dark on pale */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 3.2, ease: [0.25, 1, 0.35, 1] }}
          className="font-serif font-light italic"
          style={{
            fontSize: 'clamp(1.6rem, 3.8vw, 3.2rem)',
            letterSpacing: '0.02em',
            color: 'rgba(28, 26, 24, 0.42)',
            lineHeight: 1.35,
          }}
        >
          Silence arrives with the cold.
        </motion.p>

        {/* Timestamp */}
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
            color: 'rgba(60, 58, 54, 0.32)',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
          }}
        >
          4:47 am · Sutton, Québec · −17°C · Skies clear.
        </motion.p>
      </div>
    </section>
  )
}
