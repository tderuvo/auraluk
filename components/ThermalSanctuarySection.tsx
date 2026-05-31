'use client'
import { motion } from 'framer-motion'

const ease = [0.25, 1, 0.35, 1] as const

// ─── Ritual data ──────────────────────────────────────────────────────────
// To attach a real image to any panel, add imageSrc + imageAlt and replace
// the gradient div with a CinematicImage (same pattern as ExperienceSection).

const rituals = [
  {
    num: '01',
    element: 'Fire',
    title: 'Cedar Sauna',
    copy: 'Hand-built from hundred-year spruce. Birch smoke rises before dusk. The heat forces everything else away. Conversation slows, and then stops entirely.',
    gradient: 'linear-gradient(160deg, #200e04 0%, #2e1608 32%, #1e0c04 65%, #0e0804 100%)',
    steamColor: 'rgba(200, 110, 40, 0.05)',
  },
  {
    num: '02',
    element: 'Water',
    title: 'The Hot Pools',
    copy: 'Carved into the ridge, facing north. You lie in 40°C water while the air above falls to −20. The steam rises straight into the dark. It is the most present you have ever been.',
    gradient: 'linear-gradient(160deg, #050e18 0%, #081620 35%, #060c14 65%, #040a10 100%)',
    steamColor: 'rgba(150, 195, 220, 0.06)',
  },
  {
    num: '03',
    element: 'Cold',
    title: 'Cold Plunge',
    copy: 'Spring-fed from the upper ridge. Thirty seconds. The nervous system clears completely. You emerge quieter, sharper, more here. The stars appear to multiply.',
    gradient: 'linear-gradient(160deg, #04070e 0%, #060a1a 35%, #050812 65%, #03060c 100%)',
    steamColor: 'rgba(180, 210, 242, 0.05)',
  },
]

export default function ThermalSanctuarySection() {
  return (
    <section className="relative bg-void py-44 overflow-hidden">

      {/* ── Warm-stone → void transition ────────────────────────────────
           Mirrors the dark→warm gradient at top of RetreatSection but
           in reverse, returning the palette to deep dark.              */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #ece9e2 0%, rgba(3,5,8,0) 100%)' }}
      />

      {/* ── Subtle ember presence — firelight from the left ─────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-2/5 h-2/5 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 0% 100%, rgba(180,70,20,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Section header ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease }}
          className="max-w-2xl mb-20"
        >
          <span className="section-label block mb-5">The Thermal Sanctuary</span>
          <h2
            className="font-serif font-light text-ghost"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', letterSpacing: '0.04em' }}
          >
            Water. Cedar. Cold.
          </h2>
          <p
            className="font-sans text-silver-dim mt-6 max-w-lg"
            style={{ lineHeight: '1.85', fontSize: 'clamp(0.85rem, 1.4vw, 1rem)' }}
          >
            The ritual begins in the body. Before the sky opens, AURALUK draws you inward —
            through heat and cold, steam and silence, until only stillness remains.
            Astronomy is simply the last step.
          </p>
        </motion.div>

        {/* ── Three ritual panels ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rituals.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.7, delay: i * 0.14, ease }}
              className="relative overflow-hidden group cursor-default aspect-2/3"
            >
              {/* Atmospheric gradient background */}
              <div
                className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-[1.02]"
                style={{ background: r.gradient }}
              />

              {/* Steam/element hint — faint colour at top of panel */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
                style={{
                  background: `linear-gradient(to bottom, ${r.steamColor} 0%, transparent 100%)`,
                }}
              />

              {/* Vignette edges */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 50%, rgba(3,5,8,0.4) 100%)',
                }}
              />

              {/* Bottom read-area gradient */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-3/5 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(3,5,8,0.97) 0%, rgba(3,5,8,0.65) 50%, transparent 100%)',
                }}
              />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="section-label opacity-35 block mb-4">
                  {r.num} — {r.element}
                </span>
                <h3
                  className="font-serif font-light text-ghost mb-4"
                  style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', letterSpacing: '0.04em' }}
                >
                  {r.title}
                </h3>
                <p
                  className="font-sans text-silver-dim text-sm"
                  style={{ lineHeight: '1.82' }}
                >
                  {r.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Closing pull quote ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2.2, delay: 0.3 }}
          className="text-center py-28"
        >
          <p
            className="font-serif font-light italic"
            style={{
              fontSize: 'clamp(1.1rem, 2.6vw, 2rem)',
              letterSpacing: '0.02em',
              color: 'rgba(196, 208, 224, 0.42)',
            }}
          >
            The ritual begins long before the stars appear.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
