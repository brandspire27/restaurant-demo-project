import { Flame, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/5 bg-primary">
      <div className="container-px grid gap-12 py-16 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-primary">
              <Flame size={18} />
            </span>
            <span className="font-heading text-xl font-bold text-cream">
              Saffron <span className="text-gold">& Smoke</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-cream/70">
            Where traditional flavors meet modern artistry. A premium fine dining
            experience crafted with passion and precision.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream/70 transition-all hover:border-gold hover:bg-gold hover:text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            Explore
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            Reach Us
          </h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>42 Heritage Lane, Old Town District, City 560001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-gold" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-gold" />
              <span>hello@saffronsmoke.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-cream/60 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Saffron & Smoke. All rights reserved.</p>
          <p>Crafted with passion for fine dining.</p>
        </div>
      </div>
    </footer>
  )
}
