import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'

const FOCUS_AREAS = [
  'REST API design',
  'Django & DRF',
  'Database modeling',
  'Authentication',
  'Docker & Redis',
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-paper-raised border-y border-line">
      <Container>
        <SectionHeading index="01" eyebrow="about" title="About Me" />

        <div className="mt-10 grid lg:grid-cols-[0.55fr_1fr_0.7fr] gap-10 lg:gap-12 items-start">
          <Reveal delay={60}>
            <div className="group relative mx-auto w-full max-w-[260px] lg:max-w-none overflow-hidden rounded-xl border border-line bg-paper shadow-card">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width="700"
                height="1509"
                className="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="text-lg leading-relaxed text-ink-soft">{profile.about}</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-xl border border-line bg-paper p-6">
              <p className="eyebrow">focus areas</p>
              <ul className="mt-4 flex flex-col gap-3">
                {FOCUS_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-sm text-ink-soft">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
