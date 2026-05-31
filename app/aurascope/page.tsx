'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

const ease = [0.25, 1, 0.35, 1] as const

// ── Convenience motion prop factory ────────────────────────────────────────
const fadeUp = (delay = 0, amount = 0.3) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount },
  transition: { duration: 1.6, delay, ease },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 2, delay, ease },
})

// ── Specifications ──────────────────────────────────────────────────────────
const specs = [
  { label: 'Primary Optic', value: '16-inch f/4.5 custom parabolic mirror — λ/10 surface tolerance' },
  { label: 'Optical Design', value: 'Dobsonian Reflector' },
  { label: 'Focuser', value: 'Moonlite CHL 3-inch dual-speed Crayford' },
  { label: 'Mount', value: 'Altitude-azimuth precision-balanced platform' },
  { label: 'Frame Construction', value: 'Carbon-steel and aircraft aluminium — matte Auraluk black' },
  { label: 'Thermal Protocol', value: '72-hour pre-conditioning for Quebec winter atmosphere' },
  { label: 'Magnification Range', value: '100× — 430× (20 mm to 4.7 mm)' },
  { label: 'Limiting Magnitude', value: 'Stellar +15.5 (M13 resolution confirmed)' },
  { label: 'Planetary Detail', value: 'Jupiter banding to 0.8 arc-second' },
  { label: 'Angular Resolution', value: '< 0.4 arc-second at f/4.5' },
  { label: 'Observation Surround', value: 'Handcrafted Quebec cedar platform, custom collimation knobs' },
  { label: 'Site', value: 'Sutton, Québec · Bortle Class 3 · 45.1°N · Elevation 612 m' },
  { label: 'Weight', value: '87 kg assembled' },
]

// ── Celestial targets ───────────────────────────────────────────────────────
const targets = [
  {
    name: 'Saturn',
    distance: '1.3 billion km from Earth',
    copy: 'The rings resolve into four distinct bands of ice and rock. The Cassini Division — a 4,800-kilometre gap — appears as a fine dark seam. Shadow geometry changes with the planet\'s 27° axial tilt. Titan glows amber at the ring plane.',
    gradient: 'linear-gradient(145deg, #100a2e 0%, #1a1240 50%, #0c0a22 100%)',
    span: 'md:col-span-2',
    height: 'h-[280px] md:h-[360px]',
  },
  {
    name: 'Jupiter',
    distance: 'The largest world',
    copy: 'Cloud belts in ochre and cream wrap the planet in parallel bands. The Great Red Spot — a storm older than European exploration — appears as a salmon-pink oval. All four Galilean moons are visible simultaneously.',
    gradient: 'linear-gradient(145deg, #1c0e04 0%, #2a1606 50%, #140a02 100%)',
    span: '',
    height: 'h-[300px]',
  },
  {
    name: 'The Orion Nebula',
    distance: '1,344 light-years distant',
    copy: 'The Trapezium — four young hot stars at the nebula\'s heart — illuminates surrounding gas into structure visible at high magnification. At 200×, individual pillars resolve. Stars are forming inside this frame.',
    gradient: 'linear-gradient(145deg, #051e1a 0%, #082822 50%, #041412 100%)',
    span: '',
    height: 'h-[300px]',
  },
  {
    name: 'Andromeda Galaxy',
    distance: '2.5 million light-years',
    copy: 'Under Sutton\'s Class 3 skies, Andromeda is visible without the telescope. Through the AuraScope, dust lanes emerge and companion dwarf galaxies M32 and M110 appear. Light that left before Homo sapiens existed.',
    gradient: 'linear-gradient(145deg, #06081c 0%, #080c24 50%, #050816 100%)',
    span: '',
    height: 'h-[300px]',
  },
  {
    name: 'The Moon',
    distance: 'At first quarter — optimal lunar detail',
    copy: 'Crater walls cast long shadows across the terminator line. Individual peaks within Copernicus — 93 km across — resolve into sharp ridges. The lunar maria read as vast, smooth plains of ancient volcanic rock.',
    gradient: 'linear-gradient(145deg, #0a0a0e 0%, #141418 50%, #08080c 100%)',
    span: '',
    height: 'h-[300px]',
  },
]

// ── Material details ────────────────────────────────────────────────────────
const materials = [
  {
    label: 'Carbon-Steel Frame',
    copy: 'The primary tube assembly is fabricated from seamless carbon steel, welded in a continuous seam and heat-treated for dimensional stability. Its thermal mass is engineered for −20°C operational conditions on the Sutton ridge.',
  },
  {
    label: 'Moonlite CHL Focuser',
    copy: 'Aircraft-aluminium, precision-machined to sub-micron tolerances. The dual-speed Crayford design applies zero axial force to the optical train — eliminating focus shift at high magnification. A 10:1 reduction ratio for planetary work.',
  },
  {
    label: 'Cedar Observation Platform',
    copy: 'A raised cedar platform surrounds the base of the AuraScope, bringing the eyepiece to standing height for all guests regardless of the telescope\'s pointing angle. Quebec white cedar, finished with Linseed oil and beeswax.',
  },
  {
    label: 'Matte Auraluk Black',
    copy: 'Custom powder-coat applied over all structural surfaces, selected to eliminate internal reflections and secondary scatter at extreme contrast targets. The thermal coefficient was matched to the telescope\'s Quebec winter operating range.',
  },
]

// ────────────────────────────────────────────────────────────────────────────
// SECTIONS
// ────────────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden bg-void pb-24 md:pb-32">
      {/* Observatory dome — the instrument's home */}
      <Image
        src="/images/auraluk-observatory-dome.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'center 35%' }}
        aria-hidden="true"
      />

      {/* Dark overlay — heavier at bottom to ground the type */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(12,13,14,0.52) 0%, rgba(12,13,14,0.38) 35%, rgba(12,13,14,0.72) 75%, rgba(12,13,14,0.96) 100%)',
        }}
      />

      {/* Content — left-aligned, bottom of viewport */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10">
        <motion.div {...fadeUp(0.6, 0.2)}>
          <span
            className="block font-sans mb-8"
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'rgba(148, 154, 158, 0.7)',
            }}
          >
            AURALUK · Sutton, Québec · Est. MMXXIV
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.8, 0.2)}
          className="font-serif font-light text-ghost"
          style={{
            fontSize: 'clamp(4rem, 13vw, 11rem)',
            letterSpacing: '0.04em',
            lineHeight: 0.95,
          }}
        >
          The<br />AuraScope
        </motion.h1>

        <motion.div
          {...fadeUp(1.1, 0.2)}
          className="mt-8 max-w-md"
        >
          <div
            className="h-px mb-7"
            style={{ background: 'rgba(196, 208, 224, 0.18)', width: '4rem' }}
          />
          <p
            className="font-serif font-light italic"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              letterSpacing: '0.02em',
              color: 'rgba(196, 208, 224, 0.65)',
              lineHeight: 1.5,
            }}
          >
            A custom-built observatory instrument<br />
            designed for the northern sky.
          </p>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.2 }}
        className="absolute bottom-10 right-10 flex flex-col items-center gap-2"
      >
        <span
          className="font-sans"
          style={{ fontSize: '0.55rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(148,154,158,0.4)' }}
        >
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(196,208,224,0.3), transparent)',
            animation: 'scroll-hint 2.5s ease-in-out infinite',
          }}
        />
      </motion.div>
    </section>
  )
}

function Instrument() {
  return (
    <section className="relative bg-linen py-36 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <motion.div {...fadeUp()}>
          <span className="section-label-light block mb-8">The Instrument</span>
          <h2
            className="font-serif font-light"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 6rem)',
              letterSpacing: '0.03em',
              lineHeight: 1.05,
              color: '#1c1c1a',
            }}
          >
            Built from darkness<br />and precision.
          </h2>
        </motion.div>

        {/* Editorial body */}
        <div className="mt-16 space-y-10">
          {[
            'The AuraScope\'s 16-inch primary mirror was ground and polished to a parabolic surface tolerance of λ/10 — a standard reserved for professional-grade research optics. No two parabolic mirrors are identical. This one was shaped for Quebec\'s winter atmosphere: high altitude, low humidity, long thermal stability on clear nights.',
            'The carbon-steel tube was fabricated locally, welded and balanced to within a gram over its 1.4-metre working length. The Moonlite CHL focuser — machined from aircraft-grade aluminium — advances in increments of a thousandth of a millimetre. At this level of precision, focus is not an adjustment. It is a sensation.',
            'A cedar observation platform grounds the instrument in material warmth. When guests approach the AuraScope, they are not approaching a machine. They are approaching something made with intention — an instrument that treats the act of seeing as a serious practice.',
          ].map((para, i) => (
            <motion.p
              key={i}
              {...fadeUp(i * 0.12)}
              className="font-sans"
              style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                lineHeight: '1.92',
                color: '#5c5a56',
                maxWidth: '64ch',
              }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Observatory interior — atmospheric placeholder */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-24 relative h-[480px] md:h-[580px] overflow-hidden group"
          style={{ boxShadow: '0 20px 72px rgba(0,0,0,0.22)' }}
        >
          {/* Use observatory dome with interior framing */}
          <Image
            src="/images/auraluk-observatory-dome.png"
            alt="The AuraScope inside its observatory dome at AURALUK"
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.02]"
            style={{ objectPosition: 'center 55%' }}
          />
          {/* Atmospheric overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 45%, rgba(12,13,14,0.45) 100%)',
            }}
          />
          {/* Bottom caption strip */}
          <div
            className="absolute bottom-0 left-0 right-0 p-6"
            style={{ background: 'linear-gradient(to top, rgba(12,13,14,0.75) 0%, transparent 100%)' }}
          >
            <span
              className="font-sans"
              style={{ fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(196,208,224,0.5)' }}
            >
              The AuraScope — Sutton Observatory, Québec
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Specifications() {
  return (
    <section className="relative bg-void py-36 overflow-hidden">
      {/* Subtle top light edge */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'rgba(196,208,224,0.06)' }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-10">

        <motion.div {...fadeUp()} className="mb-16">
          <span className="section-label block mb-6">Technical Specifications</span>
          <h2
            className="font-serif font-light text-ghost"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)', letterSpacing: '0.04em' }}
          >
            The AuraScope
          </h2>
          <p
            className="font-serif font-light italic mt-4"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: 'rgba(196,208,224,0.4)' }}
          >
            Designed without compromise — then built.
          </p>
        </motion.div>

        {/* Spec rows */}
        <motion.dl {...fadeUp(0.15)} className="divide-y" style={{ borderColor: 'rgba(196,208,224,0.06)' }}>
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              {...fadeIn(i * 0.04)}
              className="grid grid-cols-1 md:grid-cols-[14rem_1fr] gap-2 md:gap-8 py-5"
            >
              <dt
                className="font-sans"
                style={{ fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(148,154,158,0.55)' }}
              >
                {spec.label}
              </dt>
              <dd
                className="font-sans"
                style={{ fontSize: 'clamp(0.82rem, 1.3vw, 0.92rem)', color: 'rgba(238,242,247,0.78)', lineHeight: '1.65' }}
              >
                {spec.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>

        {/* Bortle footnote */}
        <motion.p
          {...fadeIn(0.5)}
          className="font-sans mt-12"
          style={{ fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(148,154,158,0.35)', textTransform: 'uppercase' }}
        >
          All specifications reflect the AuraScope as permanently installed at the Sutton Ridge Observatory.
        </motion.p>
      </div>
    </section>
  )
}

function WhatGuestsSee() {
  return (
    <section className="relative bg-ash-light py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div {...fadeUp()} className="mb-16 max-w-2xl">
          <span className="section-label-light block mb-6">Through the Eyepiece</span>
          <h2
            className="font-serif font-light"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', letterSpacing: '0.03em', color: '#1c1c1a', lineHeight: 1.05 }}
          >
            Five worlds visible<br />from the ridge.
          </h2>
        </motion.div>

        {/* Target grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {targets.map((target, i) => (
            <motion.div
              key={target.name}
              {...fadeUp(i * 0.1)}
              className={`${target.span} ${target.height} relative overflow-hidden group cursor-default`}
              style={{ boxShadow: '0 16px 56px rgba(0,0,0,0.18)' }}
            >
              {/* Gradient background */}
              <div
                className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-[1.02]"
                style={{ background: target.gradient }}
              />

              {/* Use saturn.png for Saturn card */}
              {target.name === 'Saturn' && (
                <Image
                  src="/images/saturn.png"
                  alt="Saturn through the AuraScope at AURALUK"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-contain transition-transform duration-[1400ms] group-hover:scale-[1.02]"
                  style={{ objectPosition: 'center center' }}
                />
              )}

              {/* Vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 40%, rgba(3,5,8,0.45) 100%)',
                }}
              />

              {/* Bottom text gradient */}
              <div
                className="absolute bottom-0 left-0 right-0 h-3/5 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(3,5,8,0.97) 0%, rgba(3,5,8,0.62) 55%, transparent 100%)',
                }}
              />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <p
                  className="font-sans mb-1"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(148,154,158,0.55)' }}
                >
                  {target.distance}
                </p>
                <h3
                  className="font-serif font-light text-ghost mb-3"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '0.04em' }}
                >
                  {target.name}
                </h3>
                <p
                  className="font-sans text-silver-dim"
                  style={{ fontSize: 'clamp(0.78rem, 1.2vw, 0.88rem)', lineHeight: '1.78', maxWidth: '42ch' }}
                >
                  {target.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ObservatoryExperience() {
  return (
    <section className="relative bg-night py-40 overflow-hidden">
      {/* Subtle horizontal line top */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'rgba(196,208,224,0.05)' }}
      />

      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">

        <motion.span {...fadeUp()} className="section-label block mb-16">
          The Experience
        </motion.span>

        {/* Opening large quote */}
        <motion.p
          {...fadeUp(0.1, 0.2)}
          className="font-serif font-light italic text-ghost"
          style={{
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            letterSpacing: '0.02em',
            lineHeight: 1.15,
          }}
        >
          "You open the hatch.<br />The cold comes in first."
        </motion.p>

        {/* Narrative */}
        <div className="mt-20 space-y-8 text-left">
          {[
            'Inside the dome, your eyes begin to adapt. The telescope occupies most of the space — tall, angular, precise — pointing toward the meridian transit point of your chosen target. Your guide makes a final adjustment of a fraction of a degree, then steps back.',
            'The eyepiece is at shoulder height. You lower your eye to it. First, there is only darkness. Then: rings. The planet floats in the circular field, surrounded by absolute black. Its shadow falls across the rings at an angle that changes with each passing year.',
            'There is no instruction manual for this moment. Some guests are silent for a very long time.',
          ].map((para, i) => (
            <motion.p
              key={i}
              {...fadeUp(0.15 + i * 0.1)}
              className="font-sans"
              style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.08rem)',
                lineHeight: '1.92',
                color: 'rgba(196,208,224,0.55)',
              }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Second statement */}
        <motion.p
          {...fadeIn(0.5)}
          className="font-serif font-light italic mt-24"
          style={{
            fontSize: 'clamp(1.3rem, 2.8vw, 2.4rem)',
            letterSpacing: '0.02em',
            color: 'rgba(238,242,247,0.3)',
            lineHeight: 1.3,
          }}
        >
          Some things can only be described<br />once you have seen them yourself.
        </motion.p>
      </div>
    </section>
  )
}

function DesignLanguage() {
  return (
    <section className="relative bg-linen py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div {...fadeUp()} className="max-w-3xl mb-24">
          <span className="section-label-light block mb-6">Design Language</span>
          <h2
            className="font-serif font-light"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5.8rem)',
              letterSpacing: '0.03em',
              lineHeight: 1.05,
              color: '#1c1c1a',
            }}
          >
            A scientific instrument<br />built like architecture.
          </h2>
          <p
            className="font-sans mt-8"
            style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.08rem)', lineHeight: '1.88', color: '#5c5a56', maxWidth: '52ch' }}
          >
            Every decision made in constructing the AuraScope was a decision about the quality
            of experience. The telescope does not disappear into the background. It is the background.
          </p>
        </motion.div>

        {/* Materials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(28,28,26,0.08)]">
          {materials.map((m, i) => (
            <motion.div
              key={m.label}
              {...fadeUp(i * 0.1)}
              className="bg-linen p-10 md:p-12"
            >
              <span
                className="block font-sans mb-5"
                style={{ fontSize: '0.62rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(90,88,84,0.6)' }}
              >
                ◈ {m.label}
              </span>
              <p
                className="font-sans"
                style={{ fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)', lineHeight: '1.88', color: '#5c5a56' }}
              >
                {m.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClosingQuote() {
  return (
    <section
      className="relative bg-void overflow-hidden"
      style={{
        paddingTop: 'clamp(8rem, 16vw, 16rem)',
        paddingBottom: 'clamp(8rem, 16vw, 16rem)',
      }}
    >
      <div className="relative text-center max-w-3xl mx-auto px-6">
        <motion.p
          {...fadeIn(0)}
          className="font-serif font-light italic"
          style={{
            fontSize: 'clamp(1.4rem, 3.2vw, 2.8rem)',
            letterSpacing: '0.02em',
            color: 'rgba(238, 242, 247, 0.35)',
            lineHeight: 1.45,
          }}
        >
          "Somewhere beyond the warmth of the observatory,<br className="hidden md:block" />
          the universe waits in absolute silence."
        </motion.p>

        <motion.div
          {...fadeIn(0.8)}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <span className="h-px w-12" style={{ background: 'rgba(196,208,224,0.12)' }} />
          <span className="font-sans" style={{ fontSize: '0.58rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(148,154,158,0.3)' }}>
            AURALUK · The AuraScope
          </span>
          <span className="h-px w-12" style={{ background: 'rgba(196,208,224,0.12)' }} />
        </motion.div>
      </div>
    </section>
  )
}

function PageFooter() {
  return (
    <div
      className="bg-void border-t py-10 text-center"
      style={{ borderColor: 'rgba(196,208,224,0.05)' }}
    >
      <a
        href="/"
        className="font-sans inline-flex items-center gap-3 transition-colors duration-400"
        style={{ fontSize: '0.62rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(148,154,158,0.45)' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(62,207,176,0.7)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(148,154,158,0.45)')}
      >
        <span>←</span>
        <span>Return to AURALUK</span>
      </a>
    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────────────────────

export default function AuraScopePage() {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        <Hero />
        <Instrument />
        <Specifications />
        <WhatGuestsSee />
        <ObservatoryExperience />
        <DesignLanguage />
        <ClosingQuote />
        <PageFooter />
      </main>
    </>
  )
}
