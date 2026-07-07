import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { gallery } from '../../data/gallery'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const close = () => setLightbox(null)
  const prev = () =>
    setLightbox((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length))
  const next = () => setLightbox((i) => (i === null ? i : (i + 1) % gallery.length))

  return (
    <section id="gallery" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments on a Plate"
          subtitle="A glimpse into the artistry, ambience, and flavors that define Saffron & Smoke."
        />

        <Reveal delay={0.1}>
          <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {gallery.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden rounded-2xl ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/50" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium text-cream">{item.alt}</p>
                </div>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/95 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 text-cream/80 hover:text-gold"
              onClick={close}
            >
              <X size={28} />
            </button>
            <button
              aria-label="Previous"
              className="absolute left-4 text-cream/80 hover:text-gold md:left-8"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
            >
              <ChevronLeft size={36} />
            </button>
            <motion.img
              key={lightbox}
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              className="max-h-[80vh] max-w-[90vw] rounded-2xl object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              aria-label="Next"
              className="absolute right-4 text-cream/80 hover:text-gold md:right-8"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
