import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <Container>
        <SectionHeading index="04" eyebrow="experience" title="Work Experience" />

        <ol className="mt-10 flex flex-col">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 80} as="li">
              <div className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-paper-raised" />
                  {index < experience.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-line-strong" aria-hidden="true" />
                  )}
                </div>
                <div className="rounded-xl border border-line bg-paper-raised p-6 shadow-card w-full">
                  <p className="eyebrow">{item.period}</p>
                  <h3 className="mt-2 text-lg font-bold text-ink">{item.company}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-soft">{item.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>

                  {item.tech && (
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${item.company} technologies`}>
                      {item.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md bg-accent-light px-2.5 py-1 font-mono text-[11px] text-accent-dark"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.credential && (
                    <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-line bg-paper px-3.5 py-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-signal"
                      >
                        <path
                          d="M8 1.5 3 3.5v4c0 3.5 2.2 5.7 5 6.5 2.8-.8 5-3 5-6.5v-4L8 1.5Z"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                        <path d="M6 8l1.4 1.4L10.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-xs leading-relaxed text-ink-muted">
                        {item.credential.label} · {item.credential.issuer}
                        <br />
                        Certificate ID {item.credential.certificateId} · Issued {item.credential.issueDate}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
