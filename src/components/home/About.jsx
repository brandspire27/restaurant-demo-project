import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { images } from '../../assets/images'

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Signature Dishes' },
  { value: '1000+', label: 'Happy Guests' },
]

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={images.about}
              alt="Saffron & Smoke restaurant interior"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-gold/30 bg-primary px-6 py-5 shadow-xl backdrop-blur-md sm:block">
            <p className="font-heading text-3xl font-bold text-gold">Est. 2014</p>
            <p className="text-xs uppercase tracking-widest text-muted">A decade of flavor</p>
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="A Legacy of Flavor & Fire"
            subtitle="Born from a passion for authentic cuisine, Saffron & Smoke has spent over a decade perfecting the art of fine dining."
          />

          <Reveal delay={0.1}>
            <p className="mt-6 text-muted">
              Our journey began with a simple belief — that food is an experience, not
              just a meal. Master Chef Aarav Singh brings together time-honored recipes
              and contemporary techniques, crafting dishes that tell a story on every plate.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 text-muted">
              Our cooking philosophy is rooted in sourcing the finest seasonal ingredients,
              respecting tradition, and daring to innovate. Every dish is a celebration of
              craft, culture, and creativity.
            </p>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gold/15 bg-white/70 p-5 text-center shadow-sm"
                >
                  <p className="font-heading text-2xl font-bold text-gold sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
