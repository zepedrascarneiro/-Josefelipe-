import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

const links = [
  { label: 'Início',    href: '#hero' },
  { label: 'Sobre',     href: '#sobre' },
  { label: 'Livro',     href: '#livro' },
  { label: 'Curso',     href: '#curso' },
  { label: 'Palestras', href: '#palestras' },
  { label: 'Blog',      href: '#blog' },
  { label: 'Contato',   href: '#contato' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]   = useState('#hero')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    links.forEach(l => {
      const el = document.getElementById(l.href.slice(1))
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const click = href => { setOpen(false); go(href) }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'background .3s, border-color .3s',
      background: scrolled ? 'rgba(10,10,10,0.96)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
    }}>
      <nav style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <button onClick={() => click('#hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <span style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '1.5rem', letterSpacing: '0.1em', color: '#C9A84C' }}>JFC</span>
        </button>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="hidden-mobile">
          {links.map(l => (
            <li key={l.href}>
              <button onClick={() => click(l.href)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: active === l.href ? '#C9A84C' : 'rgba(255,255,255,0.55)',
                transition: 'color .2s',
                padding: '4px 0',
                borderBottom: active === l.href ? '1px solid #C9A84C' : '1px solid transparent',
              }}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button onClick={() => click('#contato')} className="btn-dark hidden-mobile" style={{ fontSize: '0.7rem' }}>
          Entrar em Contato
        </button>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(o => !o)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', display: 'none' }} className="show-mobile">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {links.map(l => (
            <button key={l.href} onClick={() => click(l.href)} style={{
              background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
              fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: active === l.href ? '#C9A84C' : 'rgba(255,255,255,0.6)',
            }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => click('#contato')} className="btn-dark" style={{ marginTop: 8 }}>
            Entrar em Contato
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile   { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
