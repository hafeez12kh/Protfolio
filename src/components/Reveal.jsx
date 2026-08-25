/**
 * Lightweight entrance wrapper. Content is ALWAYS visible immediately —
 * this only adds a subtle, purely CSS-driven fade/rise on load. There is
 * no JavaScript visibility gate here on purpose: an earlier version used
 * an IntersectionObserver to decide when to reveal content, and if that
 * detection didn't fire, the content stayed invisible forever. This
 * version cannot do that, because visibility is never JS-controlled.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  return (
    <Tag className={`reveal-in ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
