import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { MmaproLogo } from '../ui/MmaproLogo'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Industries', href: '#industries' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-2xl border-brand-500/15 shadow-lg shadow-ink-900/5'
            : 'bg-surface-100 border-ink-900/8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a href="#" className="flex items-center focus:outline-none">
              <MmaproLogo />
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="relative text-ink-500 hover:text-ink-900 text-sm font-medium tracking-wide transition-colors duration-200 group py-1"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-600 to-brand-500 group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="relative inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-lg overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-500 transition-all duration-300 group-hover:from-brand-600 group-hover:to-brand-400" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: 'inset 0 0 20px rgba(91, 156, 246, 0.3)' }} />
                <span className="relative text-white tracking-wide">Get in Touch</span>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-ink-500 hover:text-ink-900 transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white/98 backdrop-blur-2xl border-b border-brand-500/15 shadow-lg lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={handleLinkClick}
                  className="text-ink-700 hover:text-ink-900 text-base font-medium py-2.5 border-b border-ink-300/30 last:border-0 transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-3 text-center py-3 px-6 bg-gradient-to-r from-brand-700 to-brand-500 text-white font-semibold rounded-lg"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
