import { ChevronDown, BookOpen, Mic } from 'lucide-react'

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        poster="https://josefelipe.com.br/lovable-uploads/d08ef557-2a05-4a2c-a1a6-12bb07b532b7.png"
      >
        <source src="/josefelipereels.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />

      {/* Linhas decorativas laterais */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent hidden lg:block" />

      {/* Conteudo */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">

        {/* Tag */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-8 bg-[#C9A84C]" />
          <p className="text-[0.7rem] font-bold tracking-[0.35em] uppercase text-[#C9A84C]">
            Empreendedor &middot; Mentor &middot; Investidor &middot; Palestrante
          </p>
          <span className="h-px w-8 bg-[#C9A84C]" />
        </div>

        <h1
          className="font-bold text-white leading-[0.95] mb-8"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
          }}
        >
          Jos&eacute; Felipe
          <br />
          <span className="text-[#C9A84C]">Carneiro</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
          Co-fundador da <span className="text-white font-medium">Cervejaria W&auml;ls</span> e da{' '}
          <span className="text-white font-medium">ZX Ventures (Ambev)</span>.
          <br className="hidden md:block" />
          Transformando neg&oacute;cios e vidas em mais de 30 pa&iacute;ses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollTo('#livro')} className="btn-gold">
            <BookOpen size={16} />
            Quero Minha Edi&ccedil;&atilde;o Agora
          </button>
          <button onClick={() => scrollTo('#palestras')} className="btn-outline">
            <Mic size={16} />
            Contrate uma Palestra
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-white/10 pt-10">
          {[
            { num: '30+',    label: 'Pa\u00edses' },
            { num: 'Ambev',  label: 'Ex S\u00f3cio' },
            { num: 'W\u00e4ls',   label: 'Mais Premiada do Mundo' },
            { num: 'ZX',     label: 'Cofundador Ventures' },
          ].map(b => (
            <div key={b.num} className="text-center">
              <p
                className="font-bold text-[#C9A84C]"
                style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
              >
                {b.num}
              </p>
              <p className="text-[0.65rem] text-white/30 mt-2 uppercase tracking-[0.2em] font-medium">{b.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-[#C9A84C] transition-colors animate-bounce z-10"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
