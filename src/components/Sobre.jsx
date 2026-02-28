const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

const empresas = [
  { n: 'WÄLS',             s: 'Mais Premiada do Mundo' },
  { n: 'ZX VENTURES',      s: 'AB InBev · 30+ países' },
  { n: 'KHAPPY KOMBUCHA',  s: 'Líder no Brasil' },
  { n: 'STADT JEVER',      s: 'Do Campo ao Copo' },
  { n: 'NOVO BRAZIL',      s: 'San Diego, EUA' },
  { n: 'FAZENDA CERVEJEIRA', s: 'Belo Horizonte' },
]

export default function Sobre() {
  return (
    <section id="sobre" style={{ background: '#0A0A0A', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header seção */}
        <p className="section-label" style={{ marginBottom: '1rem' }}>Quem Sou Eu</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'end', marginBottom: '1rem' }}>
          <h2 className="section-heading">Minha<br /><span style={{ color: '#C9A84C' }}>Jornada</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300 }}>
            De uma cervejaria familiar em Belo Horizonte a um dos maiores braços de inovação da maior empresa de bebidas do mundo.
          </p>
        </div>
        <div className="gold-bar" style={{ marginBottom: '4rem' }} />

        {/* Grid principal */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* Foto */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 16, left: 16, right: -16, bottom: -16, border: '1px solid rgba(201,168,76,0.2)' }} />
            <img
              src="https://josefelipe.com.br/lovable-uploads/d08ef557-2a05-4a2c-a1a6-12bb07b532b7.png"
              alt="José Felipe Carneiro"
              style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top', maxHeight: 580, position: 'relative', zIndex: 1 }}
            />
            <div style={{ position: 'absolute', bottom: -20, right: -20, zIndex: 2, background: '#C9A84C', padding: '1.2rem 1.5rem' }}>
              <p style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '2.5rem', letterSpacing: '0.06em', color: '#000', lineHeight: 1 }}>30+</p>
              <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.7)', marginTop: 2 }}>PAÍSES</p>
            </div>
          </div>

          {/* Texto */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2.5rem' }}>
              <p>José Felipe Carneiro é um dos empreendedores mais influentes do Brasil, conhecido por transformar uma pequena cervejaria familiar de Belo Horizonte na <span style={{ color: '#fff' }}>mais premiada do planeta</span>.</p>
              <p>Co-fundador da <span style={{ color: '#C9A84C' }}>Cervejaria Wäls</span> ao lado do irmão Tiago, se tornou sócio da AMBEV e criou a <span style={{ color: '#C9A84C' }}>ZX Ventures</span>, braço de inovação da AB InBev que atuou em mais de 30 países em apenas três anos.</p>
              <p>Nos EUA criou a <span style={{ color: '#C9A84C' }}>Novo Brazil</span> e uma das maiores hard kombuchas do mundo. No Brasil fundou a <span style={{ color: '#C9A84C' }}>Khappy Kombucha</span> (líder em 1 ano), a <span style={{ color: '#C9A84C' }}>Fazenda Cervejeira</span> e a <span style={{ color: '#C9A84C' }}>Stadt Jever</span> — primeira indústria brasileira do campo ao copo.</p>
              <p>Também atua em cafés especiais, energia limpa, agronegócio e startups como <span style={{ color: '#C9A84C' }}>Etus</span>, <span style={{ color: '#C9A84C' }}>Plusdin</span> e <span style={{ color: '#C9A84C' }}>Dreamz</span>.</p>
            </div>

            {/* Empresas */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', marginBottom: '2.5rem' }}>
              {empresas.map(e => (
                <div key={e.n} style={{ background: '#0A0A0A', padding: '1rem 1.2rem' }}>
                  <p style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '1rem', letterSpacing: '0.08em', color: '#C9A84C' }}>{e.n}</p>
                  <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', marginTop: 2, letterSpacing: '0.05em' }}>{e.s}</p>
                </div>
              ))}
            </div>

            <button onClick={() => go('#contato')} className="btn-dark">Vamos Conversar</button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #sobre > div > div:last-child { grid-template-columns: 1fr !important; }
          #sobre > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
