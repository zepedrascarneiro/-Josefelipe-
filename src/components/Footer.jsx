export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTo = href => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#111] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-4 gap-10 mb-12 border-b border-white/10 pb-12">

          {/* Marca */}
          <div className="md:col-span-2">
            <p
              className="font-bold text-2xl tracking-[0.12em] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="text-[#C9A84C]">JF</span>
              <span className="text-white"> CARNEIRO</span>
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
              Empreendedor, mentor, investidor e palestrante. Transformando vidas
              através da alta performance, inovação e execução consciente.
            </p>
            <div className="flex gap-3">
              {[
                { l: 'Instagram', h: 'https://instagram.com/josefelipec' },
                { l: 'LinkedIn',  h: 'https://linkedin.com/in/josefelipecarneiro' },
                { l: 'YouTube',   h: '#' },
              ].map(s => (
                <a
                  key={s.l}
                  href={s.h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-4 py-2 border border-white/15 rounded-full text-white/40 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
                >
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-5">Navegação</p>
            <ul className="space-y-3">
              {[
                ['Sobre',      '#sobre'],
                ['Livro',      '#livro'],
                ['Curso',      '#curso'],
                ['Palestras',  '#palestras'],
                ['Blog do Zé', '#blog'],
                ['Contato',    '#contato'],
              ].map(([label, href]) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm text-white/40 hover:text-[#C9A84C] transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-5">Contato</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contato@josefelipe.com.br"
                  className="text-white/40 hover:text-[#C9A84C] transition-colors break-all"
                >
                  contato@josefelipe.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/josefelipec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[#C9A84C] transition-colors"
                >
                  @josefelipec
                </a>
              </li>
              <li className="text-white/25">Belo Horizonte, MG</li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© {year} José Felipe Carneiro. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/50 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white/50 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
