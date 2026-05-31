'use client'
import { motion } from 'framer-motion'

const ease = [0.25, 1, 0.35, 1] as const

const suites = [
  {
    name: 'The Meridian Suite',
    size: '680 sq ft',
    desc: 'North-facing floor-to-ceiling windows frame an uninterrupted view of the ridge. A 6-inch refracting telescope is mounted on your private terrace, pre-aligned to the meridian each evening.',
    gradient: 'linear-gradient(145deg, #0e0c24 0%, #16122e 50%, #0a0818 100%)',
    accent: 'Top pick',
  },
  {
    name: 'The Veil Room',
    size: '540 sq ft',
    desc: 'Attached directly to the heated observatory deck, The Veil Room opens the sky at the touch of a button. A retractable skylight above the bed lets you fall asleep beneath the stars.',
    gradient: 'linear-gradient(145deg, #071822 0%, #0c2230 50%, #060e18 100%)',
    accent: 'Most romantic',
  },
  {
    name: 'The Forest Studio',
    size: '420 sq ft',
    desc: 'Intimate and elemental. Nestled into the spruce forest, this studio focuses on the sensory retreat: birch-smoke sauna, the silence of deep snow, a compact telescope on the clearing deck.',
    gradient: 'linear-gradient(145deg, #0a1408 0%, #121e0e 50%, #080e06 100%)',
    accent: 'Most intimate',
  },
  {
    name: 'The North Loft',
    size: '780 sq ft',
    desc: 'Our largest accommodation rises two floors with a rooftop observatory platform accessible by a spiral staircase. Premium astrophotography equipment is included. Sleeps two, accommodates four.',
    gradient: 'linear-gradient(145deg, #180e06 0%, #241408 50%, #140a04 100%)',
    accent: 'Premium',
  },
]

const amenities = [
  { icon: '◈', label: 'Radiant Nordic heated floors' },
  { icon: '◈', label: 'Wood-burning kachelofen fireplace' },
  { icon: '◈', label: 'Private outdoor cedar sauna' },
  { icon: '◈', label: 'Telescopic hot tub — sky view' },
  { icon: '◈', label: 'Gourmet breakfast service, 6–10am' },
  { icon: '◈', label: 'Expert AURALUK sky guide each evening' },
  { icon: '◈', label: 'Stargazing thermal blankets & thermos' },
  { icon: '◈', label: 'Curated astronomy library in every suite' },
]

export default function RetreatSection() {
  return (
    <section id="retreat" className="relative bg-warm-stone py-44 overflow-hidden">

      {/* ── Section transition — fades from the dark Observatory above ── */}
      {/* Gradient from the previous section's bg-night into warm stone.   */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #070a1e 0%, rgba(236,233,226,0) 100%)' }}
      />

      {/* ── Subtle warm luminance — diffused Nordic winter light ───────── */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-1/2 h-2/5 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(200,192,178,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Section header ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease }}
          className="mb-24"
        >
          <span className="section-label-warm block mb-5">Nordic-Inspired Seclusion</span>
          <h2
            className="font-serif font-light"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
              letterSpacing: '0.04em',
              color: '#2c2822',
            }}
          >
            The Retreat
          </h2>
          <p
            className="font-sans text-sm md:text-base max-w-xl mt-6"
            style={{ color: '#6b6560', lineHeight: '1.85' }}
          >
            Four intimate suites. A private ridge. Forest silence and a sky so dark the Milky Way
            casts shadows on fresh snow. AURALUK was built around a single intention — a place
            where you can finally stop and look up.
          </p>
        </motion.div>

        {/* ── Suite grid ──────────────────────────────────────────────── */}
        {/* Dark image panels on warm stone — editorial dark-on-light feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {suites.map((suite, i) => (
            <motion.div
              key={suite.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, delay: i * 0.1, ease }}
              className="group relative overflow-hidden"
            >
              {/* Dark image panel — kept dark for contrast on warm background */}
              <div
                className="aspect-4/3 relative overflow-hidden"
                style={{ background: suite.gradient }}
              >
                {/* Subtle inner warmth on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(62,207,176,0.03) 0%, transparent 70%)',
                  }}
                />
                {/* Corner accent badge — on dark surface, keep current aurora tinting */}
                <div className="absolute top-4 left-4">
                  <span className="section-label text-aurora/55 border border-aurora/18 px-3 py-1 bg-void/50 backdrop-blur-sm">
                    {suite.accent}
                  </span>
                </div>
                {/* Bottom fade into the card below */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2"
                  style={{ background: 'linear-gradient(to top, rgba(252,250,246,0.92), transparent)' }}
                />
              </div>

              {/* Warm text card */}
              <div className="card-warm border-t-0 p-7 -mt-1">
                <div className="flex items-baseline justify-between mb-3">
                  <h3
                    className="font-serif font-light"
                    style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                      letterSpacing: '0.04em',
                      color: '#2c2822',
                    }}
                  >
                    {suite.name}
                  </h3>
                  <span
                    className="ml-4 shrink-0 font-sans text-xs"
                    style={{ letterSpacing: '0.2em', color: 'rgba(107,101,96,0.55)' }}
                  >
                    {suite.size}
                  </span>
                </div>
                <p className="font-sans text-sm" style={{ color: '#6b6560', lineHeight: '1.8' }}>
                  {suite.desc}
                </p>
                <a
                  href="#cosmos-nights"
                  onClick={e => {
                    e.preventDefault()
                    document.querySelector('#cosmos-nights')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 mt-5 font-sans text-xs tracking-[0.2em] uppercase text-aurora hover:gap-3 transition-all duration-500"
                  style={{ opacity: 0.7 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
                >
                  View availability <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Amenities strip ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease }}
          className="card-warm p-10 md:p-12"
        >
          <span className="section-label-warm block mb-9">Every Stay Includes</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.9 }}
                className="flex items-start gap-3"
              >
                <span className="text-aurora/50 text-xs mt-0.5 shrink-0">{a.icon}</span>
                <span
                  className="font-sans text-sm leading-snug"
                  style={{ color: '#6b6560' }}
                >
                  {a.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
