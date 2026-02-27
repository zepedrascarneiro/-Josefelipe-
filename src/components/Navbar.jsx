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
    const onScroll = () => setScrolled(window.scrollY > 50)
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
      className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick('#hero')}
          className="font-bold text-xl tracking-widest"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="text-[#C9A84C]">JF</span>
          <span className="text-white"> CARNEIRO</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className={`text-sm font-medium transition-colors duration-200 relative pb-0.5 ${
                  active === link.href
                    ? 'text-[#C9A84C]'
                    : 'text-gray-300 hover:text-[#C9A84C]'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A84C]" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href="#contato"
          onClick={e => { e.preventDefault(); handleClick('#contato') }}
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Fale Comigo
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#222] px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-left text-base font-medium transition-colors ${
                active === link.href ? 'text-[#C9A84C]' : 'text-gray-300'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contato')}
            className="btn-primary w-full justify-center mt-2"
          >
            Fale Comigo
          </button>
        </div>
      )}
    </header>
  )
}
