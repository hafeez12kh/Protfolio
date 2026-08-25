import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education, certifications } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="section-pad bg-paper-raised border-y border-line">
      <Container>
        <SectionHeading index="05" eyebrow="education" title="Education" />

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <div className="h-full rounded-xl border border-line bg-paper p-6 shadow-card">
                <p className="eyebrow">{item.period}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{item.degree}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.institution}</p>
                {item.detail && (
                  <span className="mt-4 inline-flex items-center rounded-md bg-accent-light px-2.5 py-1 font-mono text-xs text-accent-dark">
                    {item.detail}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10">
          <p className="index-label mb-4">Certifications</p>
          <ul className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <li
                key={cert.id}
                className="rounded-md border border-line bg-paper px-3.5 py-2 text-sm text-ink-soft"
              >
                <span className="font-medium text-ink">{cert.title}</span>
                {cert.issuer && <span className="text-ink-muted"> — {cert.issuer}</span>}
                {cert.detail && <span className="ml-1.5 font-mono text-xs text-ink-faint">({cert.detail})</span>}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
