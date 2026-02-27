import { ChevronDown, BookOpen, Mic } from 'lucide-react'

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111]"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        poster="https://josefelipe.com.br/lovable-uploads/d08ef557-2a05-4a2c-a1a6-12bb07b532b7.png"
      >
        <source src="/josefelipereels.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">

        {/* Tag */}
        <p className="section-label text-[#C9A84C] mb-8 tracking-[0.3em]">
          Empreendedor · Mentor · Investidor · Palestrante
        </p>

        <h1
          className="font-bold text-white leading-[1.05] mb-6"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
          }}
        >
          José Felipe
          <br />
          <em className="not-italic text-[#C9A84C]">Carneiro</em>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Co-fundador da <span className="text-white font-medium">Cervejaria Wäls</span> e da{' '}
          <span className="text-white font-medium">ZX Ventures (Ambev)</span>.
          Transformando negócios e vidas em mais de 30 países.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollTo('#livro')} className="btn-gold text-sm">
            <BookOpen size={16} />
            Quero Minha Edição Agora
          </button>
          <button
            onClick={() => scrollTo('#palestras')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.85rem 2rem', border: '1.5px solid rgba(255,255,255,0.4)',
              color: '#fff', fontWeight: 600, borderRadius: '2rem',
              background: 'transparent', cursor: 'pointer', transition: 'all 0.3s',
              fontSize: '0.875rem',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
          >
            <Mic size={16} />
            Contrate uma Palestra
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 border-t border-white/10 pt-10">
          {[
            { num: '30+',    label: 'Países' },
            { num: 'Ambev',  label: 'Ex Sócio' },
            { num: 'Wäls',   label: 'Mais Premiada do Mundo' },
            { num: 'ZX',     label: 'Cofundador Ventures' },
          ].map(b => (
            <div key={b.num} className="text-center">
              <p
                className="font-bold text-[#C9A84C]"
                style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
              >
                {b.num}
              </p>
              <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">{b.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#C9A84C] transition-colors animate-bounce z-10"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
