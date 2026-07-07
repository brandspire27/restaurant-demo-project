import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Flame } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/90 py-3 shadow-[0_8px_30px_-12px_rgba(11,11,11,0.25)] backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => handleNav('#home')}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-primary">
            <Flame size={18} />
          </span>
          <span
            className={`font-heading text-xl font-bold tracking-wide ${
              scrolled ? 'text-primary' : 'text-cream'
            }`}
          >
            Saffron <span className={scrolled ? 'text-gold-dark' : 'text-gold'}>& Smoke</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-primary/80 hover:text-gold-dark'
                    : 'text-cream/80 hover:text-gold'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav('#reservation')}
          className="btn-gold hidden md:inline-flex"
        >
          Reserve Table
        </button>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className={`${scrolled ? 'text-primary' : 'text-cream'} md:hidden`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-cream-50/95 backdrop-blur-md md:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-6">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full py-3 text-left text-base font-medium text-primary/80 transition-colors hover:text-gold-dark"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('#reservation')}
                  className="btn-gold mt-3 w-full"
                >
                  Reserve Table
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
