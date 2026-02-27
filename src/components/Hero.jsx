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
        poster="https://zxxoolda.manus.space/assets/jose_felipe_foto-AXAoRZwc.jpg"
      >
        <source src="/josefelipereels.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-sm font-medium mb-4">
          Empreendedor Serial · Palestrante · Autor
        </p>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          José Felipe
          <br />
          <span className="text-[#C9A84C]">Carneiro</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Transformando vidas através da{' '}
          <span className="text-[#C9A84C] font-semibold">Performance Consciente</span>.
          Co-fundador da AMBEV e criador da Zx Ventures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollTo('#livro')} className="btn-primary text-base">
            <BookOpen size={18} />
            Conheça o Livro
          </button>
          <button onClick={() => scrollTo('#palestras')} className="btn-outline text-base">
            <Mic size={18} />
            Contrate uma Palestra
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {[
            { value: '30+', label: 'Países' },
            { value: '50+', label: 'Marcas' },
            { value: '1000+', label: 'Palestras' },
            { value: '10K+', label: 'Mentorados' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#C9A84C]"
                 style={{ fontFamily: 'Playfair Display, serif' }}>
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 mt-1 uppercase tracking-widest">{stat.label}</p>
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
