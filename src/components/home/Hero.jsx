import { motion } from 'framer-motion'
import { UtensilsCrossed, CalendarCheck } from 'lucide-react'
import { images } from '../../assets/images'

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images.hero})`,
            backgroundColor: '#241a0e',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/55 to-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-px relative z-10 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold" /> Premium Fine Dining
          </span>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            Experience Culinary <span className="text-gold">Excellence</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/80 md:text-xl">
            Where traditional flavors meet modern artistry.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button onClick={() => scrollTo('#menu')} className="btn-gold">
              <UtensilsCrossed size={18} /> Explore Menu
            </button>
            <button
              onClick={() => scrollTo('#reservation')}
              className="btn border border-cream/60 text-cream hover:bg-cream hover:text-primary"
            >
              <CalendarCheck size={18} /> Book a Table
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/30 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-2 w-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  )
}
