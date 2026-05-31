'use client'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const nights = [
  {
    icon: '♄',
    title: 'Saturn Night',
    schedule: 'Every Friday, year-round',
    price: 'From $340 per person',
    desc: 'A private 90-minute session at The Meridian focused entirely on Saturn — the rings, the Cassini Division, moons Titan and Rhea. A moment of disorienting beauty that recalibrates everything.',
    color: 'rgba(62, 207, 176, 0.12)',
    border: 'rgba(62, 207, 176, 0.2)',
    glow: 'rgba(62, 207, 176, 0.15)',
    accent: '#3ecfb0',
  },
  {
    icon: '⬡',
    title: 'Aurora Watch',
    schedule: 'Oct–Mar, weather permitting',
    price: 'Included with all stays',
    desc: 'When the KP index rises, AURALUK activates. All guests are gently woken, thermal gear is provided, and the observatory ridge becomes a silent vigil beneath the dancing curtains of light.',
    color: 'rgba(42, 180, 232, 0.1)',
    border: 'rgba(42, 180, 232, 0.2)',
    glow: 'rgba(42, 180, 232, 0.12)',
    accent: '#2ab4e8',
  },
  {
    icon: '✦',
    title: 'Meteor Weekends',
    schedule: 'Aug, Nov, Dec peaks',
    price: 'From $180 per person',
    desc: 'The Perseids, Leonids, and Geminids each peak for just two or three nights per year. AURALUK hosts dedicated viewing gatherings on these dates — reclining chairs, blankets, zero light pollution.',
    color: 'rgba(157, 133, 240, 0.1)',
    border: 'rgba(157, 133, 240, 0.18)',
    glow: 'rgba(157, 133, 240, 0.12)',
    accent: '#9d85f0',
  },
  {
    icon: '◎',
    title: 'Deep Sky Sessions',
    schedule: 'Fri–Sat, new moon week',
    price: 'From $490 per couple',
    desc: 'A 3-hour guided astrophotography journey at The Wanderer. Begin with the Orion Nebula, navigate to the Andromeda Galaxy, and end on a globular cluster. Walk away with processed images to keep.',
    color: 'rgba(94, 240, 192, 0.08)',
    border: 'rgba(94, 240, 192, 0.15)',
    glow: 'rgba(94, 240, 192, 0.1)',
    accent: '#5ef0c0',
  },
  {
    icon: '🔥',
    title: 'Fireside Cosmos Talks',
    schedule: 'Every Saturday evening',
    price: 'From $95 per person',
    desc: 'An hour around the outdoor fire with an AURALUK guide — wine in hand, stories of the cosmos, introductions to cosmology and dark matter. A contemplative prelude to the night ahead.',
    color: 'rgba(200, 144, 62, 0.1)',
    border: 'rgba(200, 144, 62, 0.2)',
    glow: 'rgba(200, 144, 62, 0.12)',
    accent: '#c8903e',
  },
]

interface NightCardProps {
  night: (typeof nights)[number]
  index: number
}

function NightCard({ night, index }: NightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, delay: index * 0.1, ease }}
      className="group relative p-8 overflow-hidden cursor-default"
      style={{
        background: night.color,
        border: `1px solid ${night.border}`,
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      whileHover={{ scale: 1.015 }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${night.glow} 0%, transparent 70%)`,
        }}
      />
      {/* Top border accent that glows on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-40 group-hover:opacity-100 transition-opacity duration-600"
        style={{ background: night.accent }}
      />

      <div className="relative">
        {/* Icon */}
        <div
          className="text-3xl mb-5"
          style={{ filter: `drop-shadow(0 0 8px ${night.accent}40)` }}
        >
          {night.icon}
        </div>

        {/* Title */}
        <h3
          className="font-serif font-light text-ghost mb-2"
          style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', letterSpacing: '0.04em' }}
        >
          {night.title}
        </h3>

        {/* Schedule + price */}
        <p className="section-label opacity-50 mb-1">{night.schedule}</p>
        <p className="section-label mb-5" style={{ color: night.accent, opacity: 0.8 }}>
          {night.price}
        </p>

        {/* Description */}
        <p className="font-sans text-silver-dim text-sm leading-relaxed mb-7">{night.desc}</p>

        {/* CTA */}
        <a
          href="#"
          onClick={e => e.preventDefault()}
          className="inline-flex items-center gap-2 section-label transition-all duration-400 hover:gap-3"
          style={{ color: night.accent }}
        >
          Book this night <span>→</span>
        </a>
      </div>
    </motion.div>
  )
}

export default function CosmosNightsSection() {
  return (
    <section id="cosmos-nights" className="relative bg-night py-32 overflow-hidden">
      {/* Background nebula hint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 100% 60% at 50% 50%, rgba(13, 21, 53, 0.8) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-5">Curated Sky Events</span>
          <h2
            className="font-serif font-light text-ghost"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', letterSpacing: '0.04em' }}
          >
            Cosmos Nights
          </h2>
          <p className="font-sans text-silver-dim text-sm md:text-base leading-relaxed max-w-lg mx-auto mt-5">
            Each evening at AURALUK is different. Below are our curated recurring programs —
            each one crafted around a specific celestial event or mood.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {nights.map((night, i) => (
            <NightCard key={night.title} night={night} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-center font-sans text-silver-dim text-xs mt-10 tracking-wide"
          style={{ letterSpacing: '0.1em' }}
        >
          All Cosmos Nights are available as stand-alone bookings or as additions to an overnight stay.
          <br />
          Group reservations and private hire available on request.
        </motion.p>
      </div>
    </section>
  )
}
