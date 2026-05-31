'use client'
import { motion } from 'framer-motion'
import CinematicImage from './CinematicImage'

const ease = [0.25, 1, 0.35, 1] as const

// ─── Experience data ───────────────────────────────────────────────────────
// Image assets: drop PNG at public/images/<filename>.png — no other edits needed.

interface Experience {
  id: string
  title: string
  copy: string
  gradient: string
  imageSrc?: string
  imageAlt?: string
  imagePosition?: string
  imageObjectFit?: 'cover' | 'contain'
}

const experiences: Experience[] = [
  {
    id: '01',
    title: 'Guided Telescope\nEvenings',
    copy: 'Each night begins at dusk with a private briefing in the warm-lit observatory lodge. Your guide selects a personal sky program — nebulae, galaxies, the rings of Saturn — built around the season and your curiosity.',
    gradient: 'linear-gradient(135deg, #060c2e 0%, #0d1a4a 40%, #081830 70%, #050918 100%)',
    imageSrc: '/images/guided_telescope_evenings.png',
    imageAlt: 'Guests attending a guided telescope evening inside the Auraluk observatory lodge',
    imagePosition: 'center center',
  },
  {
    id: '02',
    title: 'The Heated\nObservatory Deck',
    copy: 'A glass-enclosed observation platform emerges from the forest at the peak of our ridge. Radiant floors, cedar loungers, and a retractable roof open you directly to the cosmos without ever leaving warmth.',
    gradient: 'linear-gradient(135deg, #071e2a 0%, #0a2e30 40%, #091a28 70%, #060e1a 100%)',
    imageSrc: '/images/auraluk-observatory-dome.png',
    imageAlt: 'Auraluk glass observatory dome beneath the northern Quebec night sky',
    imagePosition: 'center 40%',
  },
  {
    id: '03',
    title: 'Firelight\nGatherings',
    copy: 'Before the telescopes emerge, guests gather around an open fire in the forest clearing. Warm drinks, quiet conversation, and a soft introduction to the night sky above — the pause before the infinite opens.',
    gradient: 'linear-gradient(135deg, #200f02 0%, #341808 40%, #240c04 70%, #160802 100%)',
    imageSrc: '/images/firelight_gatherings.png',
    imageAlt: 'Guests gathered around a fire beneath the northern sky at Auraluk',
    imagePosition: 'center center',
  },
  {
    id: '04',
    title: 'Private Chalet\nExperiences',
    copy: 'Each of our four suites was designed around a single idea: the sky is the view. Floor-to-ceiling north-facing windows frame your own slice of the cosmos. A telescope waits on your private observation terrace.',
    gradient: 'linear-gradient(135deg, #1a1208 0%, #2a1c0a 40%, #1e1406 70%, #140e04 100%)',
    imageSrc: '/images/private_chalet_experiences.png',
    imageAlt: 'Luxury private chalet suite with personal observatory loft at Auraluk',
    imagePosition: 'center 35%',
  },
  {
    id: '05',
    title: "Saturn's Rings\nUp Close",
    copy: "Our primary 16-inch Dobsonian — The Meridian — resolves Saturn's rings into distinct bands of ice and stone. Guests describe it as a moment of permanent change. You will never see an ordinary sky the same way again.",
    gradient: 'linear-gradient(135deg, #0c0a2e 0%, #181240 40%, #100c2e 70%, #080818 100%)',
    imageSrc: '/images/saturn.png',
    imageAlt: 'High-resolution view of Saturn and its rings through the Meridian telescope at Auraluk',
    imagePosition: 'center center',
    imageObjectFit: 'contain',
  },
  {
    id: '06',
    title: 'The Aurora\nProtocol',
    copy: 'When geomagnetic conditions favor the northern lights, AURALUK activates the Aurora Protocol — a dedicated vigil from the ridge deck with expert guidance, thermal blankets, and complete silence. Some nights, the sky performs.',
    gradient: 'linear-gradient(135deg, #051e18 0%, #082e24 40%, #061e18 70%, #041410 100%)',
    imageSrc: '/images/the_aurora_protocol.png',
    imageAlt: 'Guests watching the northern lights during the Aurora Protocol experience at Auraluk',
    imagePosition: 'center 40%',
  },
]

const pullQuotes = [
  {
    after: 1,
    text: 'Somewhere between the silence of the forest and the infinity above, people remember how to wonder again.',
  },
  {
    after: 4,
    text: 'We did not come here to look at space. We came here to feel it.',
  },
]

// ─── ExperienceBlock ───────────────────────────────────────────────────────

interface ExperienceBlockProps {
  exp: Experience
  index: number
}

function ExperienceBlock({ exp, index }: ExperienceBlockProps) {
  const isEven = index % 2 === 0
  const hasImage = Boolean(exp.imageSrc)

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-center ${
        isEven ? '' : 'lg:grid-flow-col-dense'
      }`}
    >
      {/* ── Photo panel — always dark, never cropped by light background ── */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.6, ease }}
        className={[
          'relative aspect-4/3 lg:aspect-auto lg:h-120 overflow-hidden',
          'shadow-[0_16px_56px_rgba(0,0,0,0.18)]',
          isEven ? '' : 'lg:col-start-2',
          hasImage ? 'group' : '',
        ].join(' ').trim()}
      >
        {hasImage ? (
          <CinematicImage
            src={exp.imageSrc!}
            alt={exp.imageAlt!}
            fallbackGradient={exp.gradient}
            sizes="(max-width: 1024px) 100vw, 50vw"
            objectPosition={exp.imagePosition}
            objectFit={exp.imageObjectFit}
          />
        ) : (
          <>
            <div className="absolute inset-0" style={{ background: exp.gradient }} />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 50%, rgba(3,5,8,0.5) 100%)',
              }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center font-serif font-light select-none pointer-events-none"
              style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.03)' }}
            >
              {exp.id}
            </div>
          </>
        )}
      </motion.div>

      {/* ── Text panel — light, editorial, charcoal typography ─────────── */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.6, delay: 0.15, ease }}
        className={`px-10 lg:px-16 py-14 lg:py-20 ${
          isEven ? '' : 'lg:col-start-1 lg:row-start-1'
        }`}
      >
        <span className="section-label-light block mb-5">{exp.id} — Experience</span>
        <h3
          className="font-serif font-light leading-tight mb-6"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            letterSpacing: '0.02em',
            whiteSpace: 'pre-line',
            color: '#1c1c1a',
          }}
        >
          {exp.title}
        </h3>
        <p
          className="font-sans text-sm md:text-base max-w-sm"
          style={{ color: '#5c5a56', lineHeight: '1.85' }}
        >
          {exp.copy}
        </p>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '3rem' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="h-px bg-aurora/40 mt-8"
        />
        <a
          href="#cosmos-nights"
          className="inline-flex items-center gap-2 mt-6 font-sans text-xs tracking-[0.2em] uppercase text-aurora hover:gap-4 transition-all duration-500"
          onClick={e => {
            e.preventDefault()
            document.querySelector('#cosmos-nights')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Reserve this experience <span>→</span>
        </a>
      </motion.div>
    </div>
  )
}

// ─── Pull quote ────────────────────────────────────────────────────────────

function PullQuote({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.6, ease }}
      className="py-32 px-8 text-center max-w-3xl mx-auto"
    >
      <span className="block text-aurora/30 text-4xl mb-6 font-serif">"</span>
      <p
        className="font-serif font-light italic leading-relaxed"
        style={{
          fontSize: 'clamp(1.2rem, 2.8vw, 2rem)',
          letterSpacing: '0.02em',
          color: 'rgba(44, 40, 34, 0.52)',
        }}
      >
        {text}
      </p>
      <span className="block text-aurora/30 text-4xl mt-6 font-serif rotate-180">"</span>
    </motion.div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-linen overflow-hidden">

      {/* Gentle transition from the dark hero above */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #0c0d0e 0%, rgba(245,245,241,0) 100%)' }}
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease }}
        className="text-center pt-40 pb-28 px-6"
      >
        <span className="section-label-warm block mb-5">The Full Spectrum</span>
        <h2
          className="font-serif font-light"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '0.05em', color: '#1c1c1a' }}
        >
          The Experience
        </h2>
        {/* Aurora accent divider — teal on linen is architectural */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <span className="block h-px w-16 bg-linear-to-r from-transparent to-aurora/35" />
          <span className="block w-1 h-1 rounded-full bg-aurora/45" />
          <span className="block h-px w-16 bg-linear-to-l from-transparent to-aurora/35" />
        </div>
      </motion.div>

      {/* Experience blocks */}
      {experiences.map((exp, i) => (
        <div key={exp.id}>
          <ExperienceBlock exp={exp} index={i} />
          {pullQuotes.find(q => q.after === i + 1) && (
            <PullQuote text={pullQuotes.find(q => q.after === i + 1)!.text} />
          )}
        </div>
      ))}

      <div className="h-32" />
    </section>
  )
}
