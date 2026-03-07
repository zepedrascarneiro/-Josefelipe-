import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end"
      style={{ background: '#111' }}
    >
      {/* Foto de fundo horizontal, tela cheia */}
      <img
        src="https://josefelipe.com.br/lovable-uploads/d08ef557-2a05-4a2c-a1a6-12bb07b532b7.png"
        alt="José Felipe Carneiro"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
        }}
      />

      {/* Gradiente escuro na base para o texto ficar legível */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.82) 100%)',
        }}
      />

      {/* Conteúdo por cima */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-12 lg:px-16 pb-20 pt-32">

        <p
          className="text-xs font-bold uppercase tracking-[0.3em] mb-5"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Empreendedor &nbsp;·&nbsp; Mentor &nbsp;·&nbsp; Palestrante
        </p>

        <h1
          className="font-extrabold leading-[0.92] tracking-tight mb-6 text-white"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
        >
          JOSÉ FELIPE<br />CARNEIRO
        </h1>

        <p
          className="mb-10 max-w-lg leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}
        >
          Co-fundador da Cervejaria Wäls (mais premiada do mundo) e da ZX Ventures (Ambev).
          Negócios em mais de <strong className="text-white">30 países</strong>.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('#contato')}
            className="btn-primary"
            style={{ background: '#fff', color: '#000' }}
          >
            Fale Comigo
          </button>
          <button
            onClick={() => scrollTo('#sobre')}
            className="btn-outline"
            style={{ borderColor: 'rgba(255,255,255,0.45)', color: '#fff' }}
          >
            Saiba Mais
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
