import { Star, Quote } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { reviews } from '../../data/reviews'

export default function Reviews() {
  return (
    <section id="reviews" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title="Words from Our Guests"
          subtitle="The true measure of our craft lies in the smiles we create."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.id} delay={i * 0.1}>
              <article className="card h-full p-7">
                <Quote className="text-gold" size={28} />
                <p className="mt-4 text-primary/85">"{review.text}"</p>

                <div className="mt-6 flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      fill={idx < review.rating ? 'currentColor' : 'none'}
                      className={idx < review.rating ? '' : 'text-gold/30'}
                    />
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-gold/15 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-heading text-sm font-bold text-gold">
                    {review.avatar}
                  </span>
                  <div>
                    <p className="font-medium text-primary">{review.name}</p>
                    <p className="text-xs text-muted">{review.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
