'use client'
import { motion } from 'framer-motion'
import CinematicImage from './CinematicImage'

const ease = [0.16, 1, 0.3, 1] as const

// ─── Observatory dome image ────────────────────────────────────────────────
// Drop the file at:  public/images/auraluk-observatory-dome.png
// No other changes required — the component reads it automatically.
const DOME_IMAGE = {
  src: '/images/auraluk-observatory-dome.png',
  alt: 'Auraluk glass observatory dome beneath the northern Quebec night sky',
  fallbackGradient:
    'linear-gradient(135deg, #071e2a 0%, #0d2a32 30%, #0a2235 60%, #060e1a 100%)',
  sizes: '(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 48px), 1232px',
  objectPosition: 'center 40%',
} as const

// ─── Telescopes ───────────────────────────────────────────────────────────
const telescopes = [
  {
    name: 'The Meridian',
    type: 'Primary Observatory',
    specs: '16-inch Dobsonian Reflector · f/4.5',
    desc: 'Our crown instrument resolves galaxy structure, planetary belts, and globular clusters at magnifications that make the universe feel neighbourly. Reserved for guided sessions.',
  },
  {
    name: 'The Wanderer',
    type: 'Remote Guided',
    specs: '12-inch Ritchey-Chrétien · f/8 · CCD Imaging',
    desc: 'Operate remotely from the warm lodge. Capture your own astrophotography — the Milky Way core, Andromeda, the Orion Nebula — with guided exposures on a computerized mount.',
  },
  {
    name: 'The Pilgrim',
    type: 'Open-Air Sessions',
    specs: '4-inch APO Refractor · f/6.5 · Wide-field',
    desc: 'A portable instrument for forest clearing sessions. Best for Milky Way sweeps, open star clusters, and wide-field aurora photography. Setup in under five minutes.',
  },
]

// ─── Constellations ───────────────────────────────────────────────────────
const orionStars = [
  { id: 'bet', x: 22, y: 22, r: 2.2 },
  { id: 'rig', x: 75, y: 76, r: 2.0 },
  { id: 'bel', x: 68, y: 20, r: 1.5 },
  { id: 'min', x: 40, y: 46, r: 1.3 },
  { id: 'aln', x: 50, y: 48, r: 1.3 },
  { id: 'alt', x: 60, y: 50, r: 1.3 },
  { id: 'sai', x: 28, y: 76, r: 1.6 },
  { id: 'hat', x: 50, y: 12, r: 1.0 },
]
const orionLines =
  'M22,22 L40,46 M68,20 L40,46 M40,46 L50,48 L60,50 M60,50 L75,76 M60,50 L28,76 M22,22 L28,76 M50,48 L50,12'

const cassStars = [
  { id: 'ca', x: 15, y: 55, r: 1.4 },
  { id: 'cb', x: 30, y: 35, r: 1.8 },
  { id: 'cc', x: 48, y: 50, r: 1.5 },
  { id: 'cd', x: 65, y: 28, r: 2.0 },
  { id: 'ce', x: 82, y: 48, r: 1.6 },
]
const cassLines = 'M15,55 L30,35 L48,50 L65,28 L82,48'

export default function ObservatorySection() {
  return (
    <section id="observatory" className="relative bg-night overflow-hidden py-32">
      {/* Deep space gradient top */}
      <div
        className="absolute top-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #030508 0%, transparent 100%)' }}
      />

      {/* Ambient aurora right */}
      <div
        className="absolute top-1/4 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 100% 50%, rgba(42,180,232,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Section header ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease }}
          className="mb-14"
        >
          <span className="section-label block mb-5">Instruments of Wonder</span>
          <h2
            className="font-serif font-light text-ghost"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', letterSpacing: '0.04em' }}
          >
            The Observatory
          </h2>
        </motion.div>

        {/* ── Observatory dome hero image ─────────────────────────────── */}
        {/*
         * Drop the PNG at public/images/auraluk-observatory-dome.png.
         * The CinematicImage component handles loading → fallback gradient,
         * loaded → smooth fade-in, error → gradient stays. No edits needed.
         *
         * The `group` class on the wrapper activates the hover zoom/bloom
         * defined inside CinematicImage via group-hover:* utilities.
         */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease }}
          className="mb-20"
        >
          <div
            className={[
              'relative overflow-hidden group',
              'h-65 sm:h-95 lg:h-125',
              'rounded-xl',
              'border border-white/4',
            ].join(' ')}
            style={{
              boxShadow:
                '0 0 80px rgba(62,207,176,0.07), 0 28px 80px rgba(3,5,8,0.65)',
            }}
          >
            <CinematicImage {...DOME_IMAGE} />

            {/* Glass caption — bottom-right */}
            <div className="absolute bottom-5 right-5 z-10 glass px-4 py-2 rounded-sm">
              <span
                className="section-label opacity-50"
                style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}
              >
                The Heated Observatory Deck · Sutton Ridge
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Telescopes + constellation map ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Telescope cards */}
          <div className="space-y-6">
            {telescopes.map((tel, i) => (
              <motion.div
                key={tel.name}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: i * 0.12, ease }}
                className="glass-card p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="section-label block mb-2 opacity-60">{tel.type}</span>
                    <h3
                      className="font-serif font-light text-ghost"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '0.04em' }}
                    >
                      {tel.name}
                    </h3>
                  </div>
                  <span className="mt-1 block w-2 h-2 rounded-full bg-aurora animate-glow-pulse shrink-0" />
                </div>
                <p className="section-label opacity-50 mb-4">{tel.specs}</p>
                <p className="font-sans text-silver-dim text-sm leading-relaxed">{tel.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Constellation map panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease }}
          >
            <div className="glass-card p-8 h-full">
              <span className="section-label block mb-4 opacity-60">Tonight's Sky · Sutton, QC</span>
              <h3
                className="font-serif font-light text-ghost mb-8"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '0.04em' }}
              >
                Constellation Map
              </h3>

              {/* SVG sky chart */}
              <div
                className="relative rounded overflow-hidden"
                style={{
                  background:
                    'radial-gradient(ellipse at center, #0d1a40 0%, #070a1e 60%, #030508 100%)',
                  aspectRatio: '1 / 1',
                  maxWidth: '440px',
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Background micro-stars */}
                  {Array.from({ length: 60 }).map((_, i) => (
                    <circle
                      key={i}
                      cx={((i * 137.5) % 100).toFixed(1)}
                      cy={((i * 97.3) % 100).toFixed(1)}
                      r="0.3"
                      fill="rgba(200,220,248,0.35)"
                    />
                  ))}

                  <text x="38" y="88" fontSize="3" fill="rgba(62,207,176,0.5)" fontFamily="serif">
                    ORION
                  </text>

                  <motion.path
                    d={orionLines}
                    stroke="rgba(62, 207, 176, 0.35)"
                    strokeWidth="0.4"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3.5, delay: 0.4, ease: 'easeInOut' }}
                  />

                  {orionStars.map((s, i) => (
                    <motion.circle
                      key={s.id}
                      cx={s.x}
                      cy={s.y}
                      r={s.r}
                      fill="rgba(220, 235, 255, 0.92)"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                    />
                  ))}

                  <text x="10" y="22" fontSize="2.8" fill="rgba(157,133,240,0.5)" fontFamily="serif">
                    CASSIOPEIA
                  </text>

                  <motion.path
                    d={cassLines}
                    stroke="rgba(157, 133, 240, 0.3)"
                    strokeWidth="0.35"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, delay: 1.2, ease: 'easeInOut' }}
                  />

                  {cassStars.map((s, i) => (
                    <motion.circle
                      key={s.id}
                      cx={s.x}
                      cy={s.y}
                      r={s.r}
                      fill="rgba(210, 200, 255, 0.9)"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1 + i * 0.08, duration: 0.5 }}
                    />
                  ))}

                  {([['N', 50, 3], ['S', 50, 98], ['E', 97, 51], ['W', 3, 51]] as const).map(
                    ([d, x, y]) => (
                      <text
                        key={d}
                        x={x}
                        y={y}
                        fontSize="3.5"
                        fill="rgba(196,208,224,0.25)"
                        fontFamily="serif"
                        textAnchor="middle"
                      >
                        {d}
                      </text>
                    ),
                  )}

                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    stroke="rgba(62,207,176,0.1)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="mt-6 flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-2 section-label opacity-50">
                  <span className="w-3 h-px bg-aurora/50" />
                  Orion
                </span>
                <span className="flex items-center gap-2 section-label opacity-50">
                  <span className="w-3 h-px bg-aurora-violet/50" />
                  Cassiopeia
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── CTA strip ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="mt-20 glass-card p-10 text-center"
        >
          <p
            className="font-serif font-light italic text-silver mb-4"
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)' }}
          >
            Private sky sessions available every clear evening, year-round.
          </p>
          <a
            href="#cosmos-nights"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#cosmos-nights')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 section-label text-aurora hover:gap-4 transition-all duration-400"
          >
            Book a private session <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
