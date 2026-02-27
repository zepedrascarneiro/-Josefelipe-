import { ChevronDown, BookOpen, Mic } from 'lucide-react'

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://josefelipe.com.br/lovable-uploads/d08ef557-2a05-4a2c-a1a6-12bb07b532b7.png"
      >
        <source src="/josefelipereels.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        {/* Logo JFC */}
        <p className="text-[#C9A84C] uppercase tracking-[0.5em] text-2xl font-bold mb-4"
           style={{ fontFamily: 'Playfair Display, serif' }}>
          JFC
        </p>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          José Felipe
          <br />
          <span className="text-[#C9A84C]">Carneiro</span>
        </h1>

        <p className="text-base md:text-lg text-gray-300 mb-3 uppercase tracking-widest">
          Empreendedor · Mentor · Investidor · Palestrante
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Co-fundador da Cervejaria Wäls e da{' '}
          <span className="text-[#C9A84C] font-semibold">ZX Ventures (Ambev)</span>.
          Investidor em 30+ países.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollTo('#livro')} className="btn-primary text-base">
            <BookOpen size={18} />
            Quero Minha Edição Agora
          </button>
          <button onClick={() => scrollTo('#palestras')} className="btn-outline text-base">
            <Mic size={18} />
            Contrate uma Palestra
          </button>
        </div>

        {/* Badges empresas */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 border-t border-white/10 pt-8">
          {[
            { nome: 'AMBEV', sub: 'Ex Sócio' },
            { nome: 'ZX VENTURES', sub: 'Cofundador' },
            { nome: 'WÄLS', sub: 'Mais Premiada do Mundo' },
            { nome: '30+ PAÍSES', sub: 'Inovação Global' },
          ].map(b => (
            <div key={b.nome} className="text-center">
              <p className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest">{b.nome}</p>
              <p className="text-xs text-gray-500 mt-0.5">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A84C] animate-bounce z-10"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
