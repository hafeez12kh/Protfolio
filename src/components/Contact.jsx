import { useState } from 'react'
import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/hafeez-kh',
    href: profile.linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/hafeez12kh',
    href: profile.github,
  },
]

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const endpoint = import.meta.env.VITE_FORMSPREE_URL
    if (!endpoint) {
      setStatus('error')
      setErrorMessage(
        `Contact form endpoint is not configured. Please set VITE_FORMSPREE_URL or reach out directly at ${profile.email}.`
      )
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        const errorText =
          data?.errors?.map((err) => err.message).join(', ') ||
          'Failed to send message. Please try again or email directly.'
        throw new Error(errorText)
      }

      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err.message || `Something went wrong. You can also email me directly at ${profile.email}.`
      )
    }
  }

  return (
    <section id="contact" className="section-pad">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="contact"
          title="Let's build something reliable"
          description="Open to software development roles and opportunities — feel free to reach out."
        />

        <div className="mt-10 grid lg:grid-cols-[0.8fr_1fr] gap-8">
          <Reveal delay={80}>
            <ul className="flex flex-col gap-4">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex flex-col gap-1 rounded-xl border border-line bg-paper-raised p-5 shadow-card transition-all hover:shadow-cardHover hover:-translate-y-0.5"
                  >
                    <span className="eyebrow">{link.label}</span>
                    <span className="text-sm font-medium text-ink break-all">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-line bg-paper-raised p-6 sm:p-7 shadow-card"
              noValidate
            >
              <div className="grid gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className="rounded-md border border-line-strong bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className="rounded-md border border-line-strong bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="resize-none rounded-md border border-line-strong bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent transition-colors"
                    placeholder="What would you like to talk about?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-3 text-sm font-semibold text-paper-raised transition-all hover:bg-accent-dark hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                <p
                  role="status"
                  className={`text-xs ${
                    status === 'error'
                      ? 'text-red-600'
                      : status === 'sent'
                        ? 'text-emerald-700 font-medium'
                        : 'text-ink-muted'
                  }`}
                >
                  {status === 'sent' &&
                    'Sent — your message has been sent successfully. Thanks for reaching out!'}
                  {status === 'error' &&
                    (errorMessage ||
                      `Something went wrong. You can also email me directly at ${profile.email}.`)}
                  {status === 'idle' && 'Delivered straight to my inbox via Formspree.'}
                  {status === 'sending' && 'Sending your message…'}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
