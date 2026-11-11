import { useRef } from 'react'
import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const railRef = useRef(null)

  const scrollByCard = (direction) => {
    const rail = railRef.current
    if (!rail) return
    const card = rail.querySelector('article')
    const cardWidth = card ? card.offsetWidth + 24 : 400
    rail.scrollBy({ left: direction * cardWidth, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="section-pad">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="03"
            eyebrow="selected work"
            title="A few things I've built"
            description="Web applications and backend systems built around REST APIs, authentication, and database-driven architecture."
          />

          <Reveal delay={100} className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-paper-raised text-ink transition-colors hover:border-accent hover:text-accent"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-paper-raised text-ink transition-colors hover:border-accent hover:text-accent"
            >
              →
            </button>
          </Reveal>
        </div>

        <p className="mt-2 text-xs font-mono text-ink-faint sm:hidden">Swipe to explore →</p>

        <div
          ref={railRef}
          className="no-scrollbar snap-x-rail mt-10 flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
        >
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80} className="h-full flex">
              <ProjectCard project={project} index={index} total={projects.length} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
