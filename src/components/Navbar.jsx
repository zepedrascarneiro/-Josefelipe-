import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Início',    href: '#hero' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8E3DA]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick('#hero')}
          className="font-bold text-lg tracking-[0.12em] transition-opacity hover:opacity-70"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className={scrolled ? 'text-[#C9A84C]' : 'text-white'}>JF</span>
          <span className={scrolled ? 'text-[#111]' : 'text-white'}> CARNEIRO</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className={`text-sm font-medium transition-all duration-200 relative ${
                  active === link.href
                    ? 'text-[#C9A84C]'
                    : scrolled
                      ? 'text-[#444] hover:text-[#111]'
                      : 'text-white/80 hover:text-white'
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
          className={`hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#111] text-white hover:bg-[#333]'
              : 'bg-white text-[#111] hover:bg-white/90'
          }`}
        >
          Fale Comigo
        </a>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-1 ${scrolled ? 'text-[#111]' : 'text-white'}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E8E3DA] px-6 py-5 flex flex-col gap-4 shadow-lg">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-left text-base font-medium transition-colors ${
                active === link.href ? 'text-[#C9A84C]' : 'text-[#333]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contato')}
            className="btn-primary w-full justify-center mt-1"
          >
            Fale Comigo
          </button>
        </div>
      )}
    </header>
  )
}
