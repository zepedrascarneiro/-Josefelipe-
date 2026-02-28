import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Inicio',    href: '#hero' },
  { label: 'Sobre',     href: '#sobre' },
  { label: 'Livro',     href: '#livro' },
  { label: 'Curso',     href: '#curso' },
  { label: 'Palestras', href: '#palestras' },
  { label: 'Blog',      href: '#blog' },
  { label: 'Contato',   href: '#contato' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick('#hero')}
          className="font-bold text-xl tracking-[0.15em] transition-opacity hover:opacity-70"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="text-[#C9A84C]">JF</span>
          <span className="text-white"> CARNEIRO</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className={`text-[0.8rem] font-medium tracking-wider uppercase transition-all duration-200 relative ${
                  active === link.href
                    ? 'text-[#C9A84C]'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C9A84C] rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href="#contato"
          onClick={e => { e.preventDefault(); handleClick('#contato') }}
          className="hidden md:inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-wider uppercase px-6 py-2.5 rounded bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E8C96A] transition-all duration-300"
        >
          Fale Comigo
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-white"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-left text-base font-medium uppercase tracking-wider transition-colors ${
                active === link.href ? 'text-[#C9A84C]' : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contato')}
            className="btn-gold w-full justify-center mt-2"
          >
            Fale Comigo
          </button>
        </div>
      )}
    </header>
  )
}
