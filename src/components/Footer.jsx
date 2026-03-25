export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTo = href => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white pt-0 pb-10">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        <div className="border-t border-gray-800 pt-12 grid md:grid-cols-4 gap-10 mb-12 border-b border-gray-800 pb-12">

          {/* Marca */}
          <div className="md:col-span-2">
            <p className="font-extrabold text-2xl tracking-tight mb-4">
              JOSÉ FELIPE CARNEIRO
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
              Empreendedor, mentor, investidor e palestrante. Transformando vidas
              através da alta performance, inovação e execução consciente.
            </p>
            <div className="flex gap-4">
              {[
                { l: 'Instagram', h: 'https://instagram.com/josefelipec' },
                { l: 'LinkedIn', h: 'https://linkedin.com/in/josefelipecarneiro' },
                { l: 'YouTube', h: '#' },
              ].map(s => (
                <a
                  key={s.l}
                  href={s.h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-white transition-colors"
                >
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-bold mb-5">Navegação</p>
            <ul className="space-y-3">
              {[
                ['Sobre', '#sobre'],
                ['Livro', '#livro'],
                ['Palestras', '#palestras'],
                ['Contato', '#contato'],
              ].map(([label, href]) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-bold mb-5">Contato</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:contato@josefelipe.com.br" className="text-gray-500 hover:text-white transition-colors break-all">
                  contato@josefelipe.com.br
                </a>
              </li>
              <li>
                <a href="https://instagram.com/josefelipec" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  @josefelipec
                </a>
              </li>
              <li className="text-gray-600">Belo Horizonte, MG</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>&copy; {year} José Felipe Carneiro. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
