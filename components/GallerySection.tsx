'use client'
import { motion } from 'framer-motion'

const ease = [0.25, 1, 0.35, 1] as const

const galleryItems = [
  {
    label: 'The Milky Way Core — August',
    sublabel: 'Sutton Ridge',
    gradient: 'linear-gradient(160deg, #060a24 0%, #0e1440 35%, #08103a 65%, #040818 100%)',
    accent: 'rgba(62,207,176,0.15)',
    span: 'col-span-2 row-span-2',
  },
  {
    label: 'Aurora Borealis — October',
    sublabel: 'Observatory Deck',
    gradient: 'linear-gradient(135deg, #062018 0%, #0a2e24 40%, #062a20 70%, #041610 100%)',
    accent: 'rgba(62,207,176,0.2)',
    span: '',
  },
  {
    label: 'Saturn Through The Meridian',
    sublabel: 'Primary Observatory',
    gradient: 'linear-gradient(135deg, #0e0820 0%, #1a1035 45%, #0c0818 80%, #060610 100%)',
    accent: 'rgba(157,133,240,0.2)',
    span: '',
  },
  {
    label: 'Firelight Gathering',
    sublabel: 'The Forest Clearing',
    gradient: 'linear-gradient(135deg, #200e04 0%, #341808 40%, #280e04 70%, #180a02 100%)',
    accent: 'rgba(200,144,62,0.25)',
    span: '',
  },
  {
    label: 'The Chalet at Dawn',
    sublabel: 'After a Night Watch',
    gradient: 'linear-gradient(160deg, #101820 0%, #182030 45%, #121820 75%, #0a1016 100%)',
    accent: 'rgba(42,180,232,0.1)',
    span: '',
  },
  {
    label: 'Telescope Silhouette',
    sublabel: 'Dusk — The Meridian',
    gradient: 'linear-gradient(145deg, #080a1e 0%, #0e1030 45%, #080818 75%, #050610 100%)',
    accent: 'rgba(62,207,176,0.1)',
    span: '',
  },
  {
    label: 'Forest Snowfall',
    sublabel: 'January, 2am',
    gradient: 'linear-gradient(160deg, #0a1015 0%, #121820 45%, #0c1218 75%, #060c10 100%)',
    accent: 'rgba(196,208,224,0.08)',
    span: '',
  },
  {
    label: 'Hot Tub Under Stars',
    sublabel: 'The Veil Room Terrace',
    gradient: 'linear-gradient(145deg, #061620 0%, #0a2030 45%, #081520 75%, #040e18 100%)',
    accent: 'rgba(42,180,232,0.15)',
    span: 'col-span-2',
  },
]

interface GalleryItemProps {
  item: (typeof galleryItems)[number]
  index: number
}

function GalleryItem({ item, index }: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.4, delay: index * 0.06, ease }}
      className={`group relative overflow-hidden ${item.span} aspect-[4/3] cursor-pointer`}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
        style={{ background: item.gradient }}
      />

      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 80% at 50% 40%, ${item.accent} 0%, transparent 70%)`,
        }}
      />

      {/* Subtle scan lines texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
        }}
      />

      {/* Bottom gradient label */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500"
        style={{
          background: 'linear-gradient(to top, rgba(3,5,8,0.92) 0%, rgba(3,5,8,0.5) 60%, transparent 100%)',
        }}
      >
        <p
          className="font-serif font-light text-ghost leading-tight translate-y-1 group-hover:translate-y-0 transition-transform duration-400"
          style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)', letterSpacing: '0.04em' }}
        >
          {item.label}
        </p>
        <p className="section-label opacity-0 group-hover:opacity-50 mt-1 transition-opacity duration-500">
          {item.sublabel}
        </p>
      </div>

      {/* Corner plus icon */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity duration-400">
        <span className="text-aurora text-sm">+</span>
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  return (
    <section id="gallery" className="relative bg-linen py-40 overflow-hidden">
      {/* Transition from dark Cosmos Nights above */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #0e1018 0%, rgba(245,245,241,0) 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease }}
          className="mb-18"
        >
          <span className="section-label-warm block mb-5">Through the Lens</span>
          <h2
            className="font-serif font-light"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', letterSpacing: '0.04em', color: '#1c1c1a' }}
          >
            Gallery
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <GalleryItem key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-center mt-18"
        >
          <p className="font-serif font-light italic" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', color: '#5c5a56' }}>
            Every image captured on-site. No filters. Only the sky as it truly is.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
