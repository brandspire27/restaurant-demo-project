import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Phone, Calendar, Users, CheckCircle2, ChevronDown } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  guests: '2',
}

export default function Reservation() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend-only: simulate a successful reservation
    setSubmitted(true)
    setForm(initialForm)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', icon: User, placeholder: 'John Doe' },
    { name: 'email', label: 'Email', type: 'email', icon: Mail, placeholder: 'john@example.com' },
    { name: 'phone', label: 'Phone', type: 'tel', icon: Phone, placeholder: '+91 98765 43210' },
    { name: 'date', label: 'Date', type: 'date', icon: Calendar, placeholder: '' },
  ]

  return (
    <section id="reservation" className="section relative overflow-hidden">
      <div className="container-px">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Reservations"
            title="Book Your Table"
            subtitle="Reserve your spot for an unforgettable dining experience."
          />

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="mt-10 rounded-3xl border border-gold/15 bg-white/70 p-6 shadow-[0_10px_40px_-20px_rgba(11,11,11,0.25)] backdrop-blur-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-2 block text-sm font-medium text-primary/80"
                    >
                      {field.label}
                    </label>
                    <div className="relative">
                      <field.icon
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold/70"
                      />
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full rounded-xl border border-gold/25 bg-cream-50 py-3 pl-11 pr-4 text-sm text-primary placeholder:text-primary/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>
                  </div>
                ))}

                {/* Guests */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="guests"
                    className="mb-2 block text-sm font-medium text-primary/80"
                  >
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold/70"
                    />
                    <select
                      id="guests"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-gold/25 bg-cream-50 py-3 pl-11 pr-10 text-sm text-primary focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      {Array.from({ length: 12 }).map((_, i) => (
                        <option key={i} value={i + 1} className="bg-cream-50 text-primary">
                          {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gold/70"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-gold mt-7 w-full">
                Confirm Reservation
              </button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-5 flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300"
                  >
                    <CheckCircle2 size={20} />
                    <span>
                      Reservation request received! We'll confirm your table via email shortly.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
