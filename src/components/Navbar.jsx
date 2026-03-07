import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Sobre',     href: '#sobre' },
  { label: 'Livro',     href: '#livro' },
  { label: 'Palestras', href: '#palestras' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20 h-20 flex items-center justify-end gap-12">

        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleClick(link.href)}
                  className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            onClick={e => { e.preventDefault(); handleClick('#contato') }}
            className="btn-primary text-xs py-2.5 px-5"
          >
            Contato
          </a>
        </div>

        <button
          className="md:hidden p-1 text-black"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-12 py-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-left text-base font-medium text-gray-600 hover:text-black transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contato')}
            className="btn-primary w-full justify-center mt-2"
          >
            Contato
          </button>
        </div>
      )}
    </header>
  )
}
