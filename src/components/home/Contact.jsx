import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '42 Heritage Lane, Old Town District, City 560001',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98765 43210',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@saffronsmoke.com',
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    value: 'Mon–Sun: 12:00 PM – 11:30 PM',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Visit Saffron & Smoke"
          subtitle="We'd love to welcome you. Reach out or drop by for an experience to remember."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Info cards */}
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="rounded-2xl border border-gold/15 bg-white/70 p-6 shadow-sm transition-colors hover:border-gold/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <info.icon size={20} />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary">
                    {info.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{info.value}</p>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-gold/15 bg-white/70 p-6 shadow-sm">
              <span className="text-sm text-primary/70">Follow us:</span>
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-primary/70 transition-all hover:border-gold hover:bg-gold hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="h-full min-h-[320px] overflow-hidden rounded-3xl border border-gold/15 shadow-sm">
              <iframe
                title="Restaurant location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.5746%2C12.9716%2C77.6246%2C13.0016&layer=mapnik"
                className="h-full min-h-[320px] w-full grayscale-[0.3] invert-[0.9] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
