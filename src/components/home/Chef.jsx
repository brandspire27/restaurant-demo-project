import { Quote } from 'lucide-react'
import Reveal from '../Reveal'
import { images } from '../../assets/images'

export default function Chef() {
  return (
    <section id="chef" className="section relative overflow-hidden">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="eyebrow">Meet the Chef</span>
            <h2 className="heading-2">Master Chef Aarav Singh</h2>
            <p className="mt-4 text-muted">
              With over 15 years of culinary mastery across three continents, Chef Aarav
              blends the soul of traditional cooking with the precision of modern gastronomy.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <p className="font-heading text-3xl font-bold text-gold">15+</p>
                <p className="text-xs text-muted">Years of Mastery</p>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <p className="font-heading text-3xl font-bold text-gold">8</p>
                <p className="text-xs text-muted">International Awards</p>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <p className="font-heading text-3xl font-bold text-gold">3</p>
                <p className="text-xs text-muted">Michelin Stars</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <blockquote className="mt-8 border-l-2 border-gold pl-5">
              <Quote className="mb-2 text-gold" size={22} />
              <p className="font-heading text-lg italic text-primary/90">
                "Cooking is an act of love. Every plate I send out carries a piece of my
                heritage and a spark of my imagination."
              </p>
              <footer className="mt-3 text-sm text-muted">— Chef Aarav Singh</footer>
            </blockquote>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl">
            <img
              src={images.chef}
              alt="Master Chef Aarav Singh"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-heading text-xl font-semibold text-cream">Aarav Singh</p>
              <p className="text-sm text-gold-light">Executive Head Chef</p>
              <p className="text-sm text-gold">Executive Head Chef</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
