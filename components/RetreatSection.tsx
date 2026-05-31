'use client'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

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
    <section id="retreat" className="relative bg-void py-32 overflow-hidden">
      {/* Top gradient bleed */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #070a1e, transparent)' }}
      />

      {/* Warm amber ambient bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-1/3 h-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 70% at 100% 100%, rgba(200,144,62,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease }}
          className="mb-20"
        >
          <span className="section-label block mb-5">Nordic-Inspired Seclusion</span>
          <h2
            className="font-serif font-light text-ghost"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', letterSpacing: '0.04em' }}
          >
            The Retreat
          </h2>
          <p className="font-sans text-silver-dim text-sm md:text-base leading-relaxed max-w-xl mt-5">
            Four intimate suites. A private ridge. Forest silence and a sky so dark the Milky Way
            casts shadows on fresh snow. AURALUK was built around a single intention — a place
            where you can finally stop and look up.
          </p>
        </motion.div>

        {/* Suite grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {suites.map((suite, i) => (
            <motion.div
              key={suite.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, delay: i * 0.1, ease }}
              className="group relative overflow-hidden"
            >
              {/* Image placeholder */}
              <div
                className="aspect-[4/3] relative overflow-hidden"
                style={{ background: suite.gradient }}
              >
                {/* Inner glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(62,207,176,0.04) 0%, transparent 70%)',
                  }}
                />
                {/* Corner badge */}
                <div className="absolute top-4 left-4">
                  <span className="section-label text-aurora/60 border border-aurora/20 px-3 py-1 bg-void/40 backdrop-blur-sm">
                    {suite.accent}
                  </span>
                </div>
                {/* Bottom gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2"
                  style={{ background: 'linear-gradient(to top, rgba(3,5,8,0.9), transparent)' }}
                />
              </div>

              {/* Text */}
              <div className="glass-card border-t-0 p-7 -mt-1">
                <div className="flex items-baseline justify-between mb-3">
                  <h3
                    className="font-serif font-light text-ghost"
                    style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', letterSpacing: '0.04em' }}
                  >
                    {suite.name}
                  </h3>
                  <span className="section-label opacity-40 ml-4 flex-shrink-0">{suite.size}</span>
                </div>
                <p className="font-sans text-silver-dim text-sm leading-relaxed">{suite.desc}</p>
                <a
                  href="#cosmos-nights"
                  onClick={e => {
                    e.preventDefault()
                    document.querySelector('#cosmos-nights')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 mt-5 section-label text-aurora hover:gap-3 transition-all duration-400"
                >
                  View availability <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease }}
          className="glass-card p-10"
        >
          <span className="section-label block mb-8 opacity-60">Every Stay Includes</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {amenities.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.8 }}
                className="flex items-start gap-3"
              >
                <span className="text-aurora/60 text-xs mt-0.5 flex-shrink-0">{a.icon}</span>
                <span className="font-sans text-silver-dim text-sm leading-snug">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
