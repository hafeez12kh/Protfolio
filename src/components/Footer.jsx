import Container from './Container'
import { profile } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-paper-raised">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8 lg:px-10 py-8">
        <p className="text-sm text-ink-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink-soft hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink-soft hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="#hero" className="text-sm font-medium text-ink-soft hover:text-accent transition-colors">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  )
}
