import { useState } from 'react'

export default function ProjectCard({ project, index, total }) {
  const [expanded, setExpanded] = useState(false)
  const detailsId = `${project.id}-details`

  return (
    <article className="snap-card shrink-0 w-[85vw] sm:w-[420px] flex h-full flex-col rounded-xl border border-line bg-paper-raised p-6 shadow-card transition-all hover:shadow-cardHover hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <span className="index-label">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span className="eyebrow">{project.subtitle}</span>
      </div>

      <h3 className="mt-4 text-2xl font-bold text-ink">
        <span className="font-serif italic font-normal">{project.name}</span>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-accent-light px-2.5 py-1 font-mono text-[11px] text-accent-dark"
          >
            {tech}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={detailsId}
        className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-accent transition-colors"
      >
        {expanded ? 'Hide details' : 'View details'}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {expanded && (
        <ul id={detailsId} className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2.5 text-sm text-ink-soft">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6 flex items-center gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-line-strong bg-paper px-3.5 py-2 text-xs font-semibold text-ink shadow-card transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
            aria-label={`View ${project.name} on GitHub`}
          >
            GitHub
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-line-strong bg-paper px-3.5 py-2 text-xs font-semibold text-ink shadow-card transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            Live demo
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  )
}
