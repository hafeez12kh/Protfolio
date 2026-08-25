import Reveal from './Reveal'

/**
 * Every section opens with a numbered index label ("(01) About") and a
 * heading where the last word is set in italic serif — a quiet editorial
 * accent echoed throughout the site.
 */
export default function SectionHeading({ index, eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  const words = title.split(' ')
  const lastWord = words.pop()
  const leadingWords = words.join(' ')

  return (
    <Reveal className={`flex flex-col gap-3 ${alignment}`}>
      {(index || eyebrow) && (
        <p className="index-label flex items-center gap-2">
          {index && <span>({index})</span>}
          {eyebrow && <span className="text-ink-muted normal-case">{eyebrow}</span>}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
        {leadingWords ? `${leadingWords} ` : ''}
        <span className="font-serif italic font-normal">{lastWord}</span>
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted">{description}</p>
      )}
    </Reveal>
  )
}
