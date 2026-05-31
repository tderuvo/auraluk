'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const footerLinks = {
  Experiences: ['Guided Telescope Evenings', 'Observatory Deck', 'Firelight Gatherings', 'Aurora Protocol'],
  Observatory: ['The Meridian', 'The Wanderer', 'The Pilgrim', 'Private Sessions'],
  Retreat: ['The Meridian Suite', 'The Veil Room', 'The Forest Studio', 'The North Loft'],
  Visit: ['How to Find Us', 'Best Times to Visit', 'FAQ', 'Press & Media'],
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <footer className="relative bg-void border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Faint aurora bleed top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(62,207,176,0.15), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Top row: brand + newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Brand block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease }}
          >
            <h2
              className="font-serif font-light text-ghost tracking-[0.35em] uppercase mb-3"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
            >
              AURALUK
            </h2>
            <p className="font-serif italic text-silver-dim text-sm mb-5">
              Where the Northern Sky Becomes an Experience.
            </p>
            <p className="font-sans text-silver-dim/60 text-xs leading-relaxed max-w-xs">
              A luxury dark-sky retreat and observatory nestled in the mountains above Sutton, Québec.
              Open year-round to a limited number of guests each season.
            </p>

            {/* Location */}
            <div className="flex items-start gap-3 mt-7">
              <span className="text-aurora/50 text-xs mt-0.5">◈</span>
              <div>
                <p className="font-sans text-silver-dim text-xs">AURALUK Retreat · Sutton, QC J0E 2K0</p>
                <p className="font-sans text-silver-dim/50 text-xs mt-1">
                  reservations@auraluk.com · +1 (450) 000-0000
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5 mt-7">
              {[InstagramIcon, TwitterIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={e => e.preventDefault()}
                  className="text-silver-dim/40 hover:text-aurora transition-colors duration-400"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            id="footer-newsletter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.15, ease }}
            className="flex flex-col justify-center"
          >
            <span className="section-label block mb-4 opacity-60">The Cosmos List</span>
            <h3
              className="font-serif font-light text-ghost mb-3"
              style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)', letterSpacing: '0.04em' }}
            >
              Stay close to the sky.
            </h3>
            <p className="font-sans text-silver-dim text-sm leading-relaxed mb-6 max-w-sm">
              First access to aurora alerts, meteor shower dates, new moon openings, and private
              event invitations — sent quietly, when the sky is worth it.
            </p>

            {submitted ? (
              <div className="glass border border-aurora/20 px-6 py-4">
                <p className="section-label text-aurora">
                  ◈ &nbsp;You are on the Cosmos List.
                </p>
                <p className="font-sans text-silver-dim/60 text-xs mt-1">
                  We will be in touch when the sky speaks.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-night border border-white/8 border-r-0 px-5 py-3 font-sans text-silver text-sm placeholder:text-silver-dim/30 focus:outline-none focus:border-aurora/30 transition-colors duration-400"
                />
                <button
                  type="submit"
                  className="border border-aurora/30 bg-aurora/8 px-6 py-3 section-label text-aurora hover:bg-aurora/18 hover:border-aurora/60 transition-all duration-400 flex-shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Link columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/5"
        >
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <h4 className="section-label mb-4 opacity-50">{cat}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={e => e.preventDefault()}
                      className="font-sans text-silver-dim/60 text-xs hover:text-silver transition-colors duration-400 leading-snug"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-6 border-t border-white/5">
          <p className="font-sans text-silver-dim/30 text-xs tracking-wider">
            © {new Date().getFullYear()} AURALUK · Sutton, Québec · All rights reserved
          </p>
          <p className="font-sans text-silver-dim/20 text-xs tracking-wider">
            Bortle Class 3 · 45.1°N 72.5°W · Elevation 612m
          </p>
        </div>
      </div>
    </footer>
  )
}
