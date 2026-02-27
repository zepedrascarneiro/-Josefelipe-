export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = href => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Marca */}
          <div className="md:col-span-2">
            <p className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-[#C9A84C]">JF</span>
              <span className="text-white"> CARNEIRO</span>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Empreendedor Serial, Palestrante e Autor do livro Performance Consciente.
              Transformando vidas através da alta performance com propósito.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { l: 'Instagram', h: 'https://instagram.com/josefelipec' },
                { l: 'LinkedIn',  h: '#' },
                { l: 'YouTube',   h: '#' },
              ].map(s => (
                <a
                  key={s.l}
                  href={s.h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 border border-[#333] rounded-md text-gray-500 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
                >
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Navegação</p>
            <ul className="space-y-2">
              {[
                ['Sobre',     '#sobre'],
                ['Livro',     '#livro'],
                ['Curso',     '#curso'],
                ['Palestras', '#palestras'],
                ['Blog',      '#blog'],
                ['Contato',   '#contato'],
              ].map(([label, href]) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm text-gray-400 hover:text-[#C9A84C] transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Contato</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:contato@josefelipecarneiro.com" className="hover:text-[#C9A84C] transition-colors break-all">
                  contato@josefelipecarneiro.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition-colors">
                  +55 (11) 99999-9999
                </a>
              </li>
              <li className="text-gray-600">Belo Horizonte, Brasil</li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-[#1A1A1A] pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {year} José Felipe Carneiro. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
