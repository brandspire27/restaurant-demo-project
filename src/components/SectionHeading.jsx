import Reveal from './Reveal'

// Reusable section heading with eyebrow + title + optional subtitle.
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading-2">{title}</h2>
      {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
    </Reveal>
  )
}
