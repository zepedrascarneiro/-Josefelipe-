const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

const caps = [
  { n: '01', t: 'Modelo de Princípios Pessoais',      d: 'Um sistema prático para tomar decisões sem se perder no caminho.' },
  { n: '02', t: 'Meritocracia de Ideias',              d: 'Técnicas para fazer a melhor proposta vencer, independentemente de hierarquia.' },
  { n: '03', t: 'Dashboard de Feedback em 24h',        d: 'Como loops de ajuste rápido aumentam engajamento.' },
  { n: '04', t: 'Carteira "All-Clima" de Negócios',    d: 'Use diversificação de risco para prosperar em qualquer cenário.' },
  { n: '05', t: 'Ritual de Autoconsciência Diária',    d: 'Journaling + pausas estratégicas elevam foco e criatividade.' },
  { n: '06', t: 'Ferramentas para Work-Life Balance',  d: 'Saúde e família tanto quanto resultado — o modelo pós-pandemia.' },
]

export default function Livro() {
  return (
    <section id="livro" style={{ background: '#111111', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        <p className="section-label" style={{ marginBottom: '1rem' }}>Alta Performance, Paz de Espírito</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'end', marginBottom: '1rem' }}>
          <h2 className="section-heading">PERFORMANCE<br /><span style={{ color: '#C9A84C' }}>CONSCIENTE</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300 }}>
            Pare de correr no piloto automático. Aprenda a liderar com presença, propósito e resultados reais.
          </p>
        </div>
        <div className="gold-bar" style={{ marginBottom: '4rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}>

          {/* Capa */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.2)' }} />
              <img
                src="https://josefelipe.com.br/lovable-uploads/326762f8-2ad7-4e2a-877e-30bb893c60e2.png"
                alt="Performance Consciente"
                style={{ width: 240, display: 'block', position: 'relative', zIndex: 1 }}
              />
            </div>
            {/* Bônus */}
            <div style={{ border: '1px solid rgba(201,168,76,0.2)', padding: '1.5rem', width: '100%' }}>
              <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '1rem' }}>🎁 BÔNUS — 1ª EDIÇÃO</p>
              {[
                { t: 'CHECKLIST', d: '"Princípios em 10 minutos"' },
                { t: 'PLANILHA',  d: 'Dashboard diário de performance' },
                { t: 'WORKSHOP',  d: 'Ao vivo com o autor' },
              ].map(b => (
                <div key={b.t} style={{ display: 'flex', gap: '1rem', marginBottom: '0.7rem', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '0.85rem', letterSpacing: '0.1em', color: '#C9A84C', minWidth: 70 }}>{b.t}</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>{b.d}</span>
                </div>
              ))}
            </div>
            <button onClick={() => go('#contato')} className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
              Quero o Livro
            </button>
          </div>

          {/* Conteúdo */}
          <div>
            {/* Para quem */}
            <p style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '1.1rem', letterSpacing: '0.12em', color: '#fff', marginBottom: '1rem' }}>PARA QUEM É ESTE LIVRO?</p>
            <div style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                'Cansados de fórmulas prontas e querem profundidade.',
                'Lideram empresas, projetos ou times e sentem o peso dos resultados.',
                'Buscam equilíbrio entre performance consciente e paz de espírito.',
                'Gostam de pensar diferente, questionar verdades fáceis.',
                'Valorizam consistência, significado e verdade.',
              ].map(i => (
                <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#C9A84C', marginTop: 2, fontSize: '0.8rem' }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.6 }}>{i}</span>
                </div>
              ))}
            </div>

            {/* Capítulos */}
            <p style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '1.1rem', letterSpacing: '0.12em', color: '#fff', marginBottom: '1rem' }}>O QUE VOCÊ VAI ENCONTRAR</p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {caps.map(c => (
                <div key={c.n} style={{ display: 'flex', gap: '1.5rem', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '0.9rem', letterSpacing: '0.1em', color: 'rgba(201,168,76,0.5)', minWidth: 24 }}>{c.n}</span>
                  <div>
                    <p style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff', marginBottom: 2 }}>{c.t}</p>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #livro > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
          #livro > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
