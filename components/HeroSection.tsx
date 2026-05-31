'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import StarfieldCanvas from './StarfieldCanvas'

const ease = [0.16, 1, 0.3, 1] as const

// ── Mountain silhouette SVG ────────────────────────────────────────────────
// Unchanged from original — blends the hero into the next section.

function MountainSilhouette() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      {/* Far mountains — faint deep navy */}
      <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="w-full block">
        <path
          d="M0,180 L0,120 C60,108 100,100 145,90 C180,82 210,78 245,68 C278,59 300,50 340,42 C378,34 410,32 448,40 C482,48 505,58 540,52 C572,46 592,34 628,26 C664,18 698,16 738,24 C776,32 798,44 832,50 C865,56 890,54 922,46 C954,38 975,26 1010,20 C1045,14 1078,16 1115,26 C1150,36 1175,50 1210,58 C1244,66 1275,66 1310,58 C1342,51 1368,38 1400,46 L1440,54 L1440,180 Z"
          fill="rgba(10, 14, 40, 0.65)"
        />
      </svg>
      {/* Mid mountains */}
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full block absolute bottom-0">
        <path
          d="M0,160 L0,110 C50,100 80,95 115,88 C145,82 170,78 200,70 C232,62 255,54 288,46 C320,38 348,35 380,42 C410,49 430,60 462,64 C494,68 520,64 552,56 C582,48 605,38 638,30 C670,22 700,20 736,30 C768,40 790,55 822,62 C854,69 882,68 914,60 C944,53 966,40 1000,34 C1033,28 1065,30 1100,40 C1132,50 1155,64 1188,72 C1220,80 1250,80 1282,72 C1312,65 1338,50 1370,56 C1396,62 1418,74 1440,82 L1440,160 Z"
          fill="rgba(6, 9, 26, 0.88)"
        />
      </svg>
      {/* Foreground — solid black */}
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full block absolute bottom-0">
        <path
          d="M0,120 L0,86 C40,80 70,76 100,72 C130,68 155,66 185,60 C215,54 238,48 268,42 C298,36 325,33 358,38 C390,43 412,52 445,56 C477,60 505,58 536,52 C566,46 588,36 620,30 C652,24 682,23 718,31 C752,39 775,52 808,58 C840,64 868,62 900,55 C930,48 952,36 986,30 C1020,24 1053,26 1088,36 C1122,46 1148,60 1182,66 C1215,72 1246,70 1278,62 C1308,55 1334,42 1366,48 C1393,54 1416,66 1440,74 L1440,120 Z"
          fill="#030508"
        />
        {/* Tree silhouette fringe */}
        <path
          d="M0,120 L0,95 C25,92 50,90 75,88 C90,87 105,86 120,88 C135,90 148,92 160,90 C175,88 185,84 200,82 C215,80 230,80 245,82 C258,84 268,88 282,86 C296,84 305,80 320,78 C335,76 350,76 365,78 C378,80 388,84 402,82 C416,80 425,76 440,74 C455,72 470,72 485,74 C498,76 508,80 522,78 C536,76 545,72 560,70 C575,68 590,68 605,70 C618,72 628,76 642,74 C656,72 665,68 680,66 C695,64 710,64 725,66 C738,68 748,72 762,70 C776,68 785,64 800,62 C815,60 830,60 845,62 C858,64 868,68 882,66 C896,64 905,60 920,58 C935,56 950,56 965,58 C978,60 988,64 1002,62 C1016,60 1025,56 1040,54 C1055,52 1070,52 1085,54 C1098,56 1108,60 1122,58 C1136,56 1145,52 1160,50 C1175,48 1190,48 1205,52 C1218,56 1228,62 1242,64 C1256,66 1268,64 1282,60 C1296,56 1308,50 1322,52 C1336,54 1348,62 1362,66 C1375,70 1392,72 1415,74 L1440,76 L1440,120 Z"
          fill="#030508"
        />
      </svg>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void">

      {/* ── 1. Chalet hero image ─────────────────────────────────────────
           The emotional centerpiece of the brand. Chalet, observatory
           dome, glass corridor, and forest surroundings.
           objectPosition biases upward slightly to keep the roofline
           and dome in frame across all viewport heights.
           Adjust 'center 30%' here if the crop needs fine-tuning.    */}
      <Image
        src="/images/chalet.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'center 30%' }}
        aria-hidden="true"
      />

      {/* ── 2. Warm dark overlay ─────────────────────────────────────────
           Slightly warm-tinted blacks (4,3,8) rather than cold void.
           Heavy at top (nav readability) and bottom (content/blend),
           lighter in the middle to let the chalet glow through.      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'linear-gradient(',
            '  to bottom,',
            '  rgba(4,3,8,0.68) 0%,',
            '  rgba(4,3,8,0.22) 28%,',
            '  rgba(4,3,8,0.32) 58%,',
            '  rgba(3,4,8,0.94) 100%',
            ')',
          ].join(''),
        }}
      />

      {/* ── 3. Starfield — quieter over real photography ─────────────────
           Opacity reduced so stars read as atmospheric rather than
           as the dominant visual element.                             */}
      <div aria-hidden="true" className="absolute inset-0 opacity-18 pointer-events-none">
        <StarfieldCanvas />
      </div>

      {/* ── 4. Aurora gradients — barely present ─────────────────────────
           At opacity-12 the aurora reads as a faint colour temperature
           shift rather than an animation. Photography leads.         */}
      <div aria-hidden="true" className="absolute inset-0 aurora-layer opacity-12 pointer-events-none" />

      {/* ── 5. Radial vignette — soft centre, dark edges ─────────────────
           Opens slightly more than before (45% transparent zone)
           so the chalet isn't darkened in the mid-frame.             */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 88% 78% at 50% 46%, transparent 45%, rgba(3,5,8,0.52) 100%)',
        }}
      />

      {/* ── 6. Bottom fog — unchanged ────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(3,5,8,0.95) 0%, rgba(3,5,8,0.4) 50%, transparent 100%)',
          animation: 'fog-drift 45s ease-in-out infinite',
        }}
      />

      {/* ── Content ──────────────────────────────────────────────────────
           Additional vertical padding for breathing room.            */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-40 pb-52">

        {/* Eyebrow — silver lines instead of teal, more muted presence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="block w-8 h-px bg-silver/22" />
          <span className="section-label opacity-55">Sutton, Québec · Est. MMXXIV</span>
          <span className="block w-8 h-px bg-silver/22" />
        </motion.div>

        {/* Main title — typography unchanged */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 1.0, ease }}
          className="font-serif font-light text-ghost uppercase"
          style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            letterSpacing: '0.38em',
            lineHeight: 1,
          }}
        >
          AURALUK
        </motion.h1>

        {/* Divider — silver palette, centre dot without pulse animation */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.5, ease }}
          className="flex items-center justify-center gap-3 my-9"
        >
          <span className="block h-px bg-gradient-to-r from-transparent via-silver/22 to-transparent w-48" />
          <span className="block w-1.5 h-1.5 rounded-full bg-silver/45" />
          <span className="block h-px bg-gradient-to-r from-transparent via-silver/22 to-transparent w-48" />
        </motion.div>

        {/* Subtitle — unchanged */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.7, ease }}
          className="font-serif font-light italic text-silver-dim"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)', letterSpacing: '0.04em' }}
        >
          Where the Northern Sky Becomes an Experience.
        </motion.p>

        {/* CTAs — same layout and text; pulse removed from secondary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.1, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
        >
          <a
            href="#experience"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="glass border border-white/10 px-9 py-4 section-label text-silver hover:text-aurora hover:border-aurora/40 transition-all duration-600 w-full sm:w-auto text-center"
          >
            Explore the Retreat
          </a>
          <a
            href="#cosmos-nights"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#cosmos-nights')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border border-aurora/28 bg-aurora/6 px-9 py-4 section-label text-aurora hover:bg-aurora/12 hover:border-aurora/55 transition-all duration-600 w-full sm:w-auto text-center"
          >
            Reserve a Night Beneath the Stars
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — silver instead of teal, more restrained */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="absolute bottom-36 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="section-label opacity-38">Scroll</span>
        <div
          className="w-px h-10 bg-gradient-to-b from-silver/35 to-transparent"
          style={{ animation: 'scroll-hint 2.5s ease-in-out infinite' }}
        />
      </motion.div>

      {/* ── 7. Mountain silhouette — unchanged ───────────────────────── */}
      <MountainSilhouette />
    </section>
  )
}
