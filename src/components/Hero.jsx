import Container from './Container'
import Reveal from './Reveal'
import { profile, heroSnapshot } from '../data/portfolioData'

const snapshotBody = JSON.stringify(heroSnapshot.payload, null, 2)
const nameParts = profile.name.split(' ')
const firstName = nameParts[0]
const restName = nameParts.slice(1).join(' ')

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 px-6 sm:px-8 lg:px-10">
      <Container className="grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-10 items-center">
        <div>
          <Reveal className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper-raised px-3.5 py-1.5 text-xs font-medium text-ink-soft shadow-card">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal animate-blink" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              {profile.status}
            </span>
            <span className="inline-flex items-center rounded-full border border-line-strong bg-paper-raised px-3.5 py-1.5 text-xs font-medium text-ink-soft shadow-card">
              Based in {profile.location}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-5xl sm:text-6xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.02] text-ink">
              Hi, I&rsquo;m <span className="font-serif italic font-normal">{firstName}</span>
              <br />
              <span className="font-serif italic font-normal">{restName}.</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-4 font-mono text-sm sm:text-base text-accent-dark">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              {profile.heroSupport}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-md bg-ink px-5 py-3 text-sm font-semibold text-paper-raised transition-all hover:bg-accent-dark hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border border-line-strong bg-paper-raised px-5 py-3 text-sm font-semibold text-ink shadow-card transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
              >
                Contact Me
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-1.5 px-5 py-3 text-sm font-semibold text-ink-soft transition-colors hover:text-accent"
              >
                Download Resume
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M7 1.5V9.5M7 9.5L3.5 6M7 9.5L10.5 6M2 12.5H12"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <a
              href="#about"
              className="mt-16 hidden lg:inline-flex items-center gap-2 text-xs font-mono text-ink-faint hover:text-accent transition-colors"
            >
              <span className="animate-bounceY">↓</span>
              Scroll to explore
            </a>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div
            className="rounded-xl border border-line bg-ink text-paper shadow-cardHover overflow-hidden"
            role="img"
            aria-label="Illustrative API response summarizing Hafeez's role, stack, and focus areas"
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 font-mono text-xs text-white/40">{heroSnapshot.endpoint}</span>
            </div>
            <pre className="font-mono text-[13px] leading-relaxed px-5 py-5 overflow-x-auto">
              <code>
                <span className="text-signal">{heroSnapshot.status} OK</span>
                {'\n'}
                {snapshotBody}
              </code>
            </pre>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
