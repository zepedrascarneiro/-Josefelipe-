import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        background: '#111',
        overflow: 'hidden',
      }}
    >
      {/* Foto de fundo — rosto visível na metade superior */}
      <img
        src="/jose-felipe-opt.jpeg"
        alt="José Felipe Carneiro"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 20%',
          maxWidth: 'none',
        }}
      />

      {/* Gradiente contínuo para legibilidade */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      {/* Conteúdo por cima */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '72rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '3rem',
        paddingRight: '3rem',
        paddingBottom: '5rem',
        paddingTop: '8rem',
      }}>

        <p
          className="text-xs font-bold uppercase tracking-[0.3em]"
          style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '1.2rem' }}
        >
          Empreendedor &nbsp;·&nbsp; Mentor &nbsp;·&nbsp; Palestrante
        </p>

        <h1
          className="font-extrabold tracking-tight text-white"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.2rem' }}
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
