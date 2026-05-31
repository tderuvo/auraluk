'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Observatory', href: '#observatory' },
  { label: 'Retreat', href: '#retreat' },
  { label: 'Cosmos Nights', href: '#cosmos-nights' },
  { label: 'Gallery', href: '#gallery' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [audioOn, setAudioOn] = useState(false)


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Not on the home page — navigate there and let the browser handle the hash
      window.location.href = `/${href}`
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-700 ${
          scrolled
            ? 'glass border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="font-serif font-light text-ghost text-xl tracking-[0.35em] uppercase hover:text-aurora transition-colors duration-500"
          >
            AURALUK
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="section-label text-silver-dim hover:text-aurora transition-colors duration-400 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* Ambient audio toggle */}
            <button
              onClick={() => setAudioOn(v => !v)}
              title={audioOn ? 'Mute ambient' : 'Enable ambient sound'}
              className="hidden md:flex items-center gap-1.5 section-label text-silver-dim hover:text-aurora transition-colors duration-400"
            >
              <span className="text-base">{audioOn ? '◉' : '◎'}</span>
              <span className="tracking-[0.2em]">SOUND</span>
            </button>

            {/* Reserve CTA */}
            <button
              onClick={() => handleNav('#cosmos-nights')}
              className="hidden md:block glass border border-aurora/25 px-5 py-2 section-label text-aurora hover:bg-aurora/10 hover:border-aurora/50 transition-all duration-500"
            >
              Reserve
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Open menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-silver"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-px bg-silver"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-silver"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-99 bg-void/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleNav(link.href)}
                className="font-serif font-light text-4xl text-silver hover:text-aurora transition-colors duration-400 tracking-widest"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => handleNav('#cosmos-nights')}
              className="mt-4 border border-aurora/30 px-8 py-3 section-label text-aurora hover:bg-aurora/10 transition-all duration-400"
            >
              Reserve a Night
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
