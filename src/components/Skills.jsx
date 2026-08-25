import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-paper-raised border-y border-line">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="capabilities"
          title="Technical Skills"
          description="The tools and technologies behind the thinking — organized the way I reach for them."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 60}>
              <div className="group">
                <div className="flex items-baseline gap-3 pb-3 relative">
                  <span className="index-label transition-transform duration-300 group-hover:-translate-y-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink">{group.label}</h3>
                  <span className="absolute bottom-0 left-0 h-px w-full bg-line" />
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-ink transition-all duration-500 ease-out group-hover:w-full" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {group.skills.join(', ')}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
