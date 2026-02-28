import { ChevronDown } from 'lucide-react'

const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#0A0A0A' }}>

      {/* Imagem de fundo */}
      <img
        src="https://josefelipe.com.br/lovable-uploads/d08ef557-2a05-4a2c-a1a6-12bb07b532b7.png"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', opacity: 0.28, pointerEvents: 'none' }}
      />
      {/* Gradiente */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.55) 60%, #0A0A0A 100%)', pointerEvents: 'none' }} />

      {/* Conteúdo */}
      <div className="ani-in" style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1.5rem', maxWidth: 900 }}>

        <p className="section-label" style={{ marginBottom: '1.5rem' }}>
          Empreendedor &nbsp;·&nbsp; Mentor &nbsp;·&nbsp; Investidor &nbsp;·&nbsp; Palestrante
        </p>

        <h1 className="display-title" style={{ marginBottom: '1.2rem', fontSize: 'clamp(4rem, 12vw, 10rem)' }}>
          JOSÉ<br />
          <span style={{ color: '#C9A84C' }}>FELIPE</span><br />
          CARNEIRO
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: 520, margin: '0 auto 2.5rem', lineHeight: 1.7, fontWeight: 300 }}>
          Co-fundador da <span style={{ color: '#fff', fontWeight: 500 }}>Cervejaria Wäls</span> e da <span style={{ color: '#fff', fontWeight: 500 }}>ZX Ventures (Ambev)</span>.
          Negócios que impactam em mais de <span style={{ color: '#C9A84C' }}>30 países</span>.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => go('#livro')} className="btn-dark">Conheça o Livro</button>
          <button onClick={() => go('#palestras')} className="btn-outline-light">Contratar Palestra</button>
        </div>

        {/* Stats */}
        <div style={{ marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
          {[
            { n: '30+', l: 'Países' },
            { n: 'Wäls', l: 'Mais Premiada do Mundo' },
            { n: 'Ambev', l: 'Ex Sócio' },
            { n: 'ZX', l: 'Ventures Cofundador' },
          ].map(s => (
            <div key={s.n} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '0.06em', color: '#C9A84C', lineHeight: 1 }}>{s.n}</p>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <button
        onClick={() => go('#sobre')}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.3)', zIndex: 2 }}
        className="ani-in"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </button>
    </section>
  )
}
