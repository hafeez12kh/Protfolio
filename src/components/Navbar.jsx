import { useEffect, useState } from 'react'
import Container from './Container'
import { profile } from '../data/portfolioData'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300 ${
        isScrolled
          ? 'bg-paper/90 backdrop-blur border-b border-line shadow-sm'
          : 'bg-paper/80 backdrop-blur border-b border-transparent'
      }`}
    >
      <Container className="flex items-center justify-between h-16 px-6 sm:px-8 lg:px-10">
        <a
          href="#hero"
          className="font-display font-extrabold text-lg tracking-tight text-ink hover:text-accent transition-colors"
        >
          {profile.name}
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink-soft hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 rounded-md border border-line-strong bg-paper-raised px-3.5 py-2 text-sm font-semibold text-ink shadow-card transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            Download Resume
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M7 1.5V9.5M7 9.5L3.5 6M7 9.5L10.5 6M2 12.5H12"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 rounded-md bg-ink px-3.5 py-2 text-sm font-semibold text-paper-raised shadow-card transition-all hover:bg-accent-dark hover:-translate-y-0.5"
          >
            Let&rsquo;s talk ↗
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-line-strong text-ink"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {isOpen ? (
              <path
                d="M4 4L16 16M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden border-t border-line bg-paper-raised px-6 py-6 flex flex-col gap-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="rounded-md px-3 py-3 text-base font-medium text-ink-soft hover:bg-paper-sunken hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="rounded-md px-3 py-3 text-base font-medium text-ink-soft hover:bg-paper-sunken hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={profile.resumeUrl}
            download
            onClick={handleLinkClick}
            className="rounded-md px-3 py-3 text-base font-medium text-ink-soft hover:bg-paper-sunken hover:text-accent transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-2 rounded-md bg-accent px-3 py-3 text-center text-base font-semibold text-paper-raised hover:bg-accent-dark transition-colors"
          >
            Let&rsquo;s talk
          </a>
        </nav>
      )}
    </header>
  )
}
