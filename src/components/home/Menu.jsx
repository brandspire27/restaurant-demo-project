import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { menu, menuCategories } from '../../data/menu'

export default function Menu() {
  const [active, setActive] = useState('All')
  const filters = ['All', ...menuCategories]

  const items = active === 'All' ? menu : menu.filter((d) => d.category === active)

  return (
    <section id="menu" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Menu"
          title="Crafted to Perfection"
          subtitle="A curated selection of signature dishes, each a masterpiece of flavor and presentation."
        />

        {/* Filters */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {filters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? 'bg-gold text-primary'
                    : 'border border-gold/30 text-primary/70 hover:border-gold hover:text-gold-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((dish) => (
              <motion.article
                key={dish.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="card group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                  {dish.tag && (
                    <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-primary">
                      {dish.tag}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      {dish.name}
                    </h3>
                    <span className="shrink-0 font-heading text-lg font-bold text-gold">
                      ${dish.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">{dish.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
