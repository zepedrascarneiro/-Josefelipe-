const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

const palestras = [
  { num: '01', titulo: 'CORAGEM', desc: 'Quando temos coragem de entrar na nossa própria história e reconhecê-la, temos a chance de escrever o final. Coragem é essencial para se expor, experimentar riscos e inovar, sem abrir mão dos próprios valores.' },
  { num: '02', titulo: 'CRESCIMENTO DISRUPTIVO', desc: 'Como romper o óbvio e transformar mercados? Casos reais de crescimento acelerado com inovação, execução e visão estratégica.' },
  { num: '03', titulo: 'FERMENTANDO SONHOS', desc: 'A transformação da Wäls e de outras empresas. Como transformar sonhos em marcas desejadas, empresas lucrativas e negócios que impactam.' },
  { num: '04', titulo: 'ALTA PERFORMANCE NOS NEGÓCIOS', desc: 'Alta performance não é sobre trabalhar mais, é sobre trabalhar certo. Disciplina, clareza, cultura forte e execução impecável.' },
  { num: '05', titulo: 'SEDE DE VENCER', desc: 'Uma palestra visceral e realista. José compartilha erros, acertos, dores e vitórias, mostrando como desenvolver a mentalidade antifrágil.' },
  { num: '06', titulo: 'VISÃO E EXECUÇÃO ESTRATÉGICA', desc: 'Como o novo líder define visão, executa com velocidade e antecipa problemas, criando ambientes colaborativos e culturas fortes.' },
]

export default function Palestras() {
  return (
    <section id="palestras" style={{ background: '#111111', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        <p className="section-label" style={{ marginBottom: '1rem' }}>Inspire Sua Equipe</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'end', marginBottom: '1rem' }}>
          <h2 className="section-heading">PALESTRAS E<br /><span style={{ color: '#C9A84C' }}>EVENTOS</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300 }}>
            José Felipe leva para o palco sua história de transformação, superação e construção de negócios que quebram padrões.
          </p>
        </div>
        <div className="gold-bar" style={{ marginBottom: '4rem' }} />

        {/* Lista estilo editorial */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginBottom: '4rem' }}>
          {palestras.map(p => (
            <div
              key={p.num}
              style={{ display: 'flex', gap: '2rem', padding: '2rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)', cursor: 'default', transition: 'background .2s' }}
              onMouseEnter={e => e.currentTarget.style.paddingLeft = '1rem'}
              onMouseLeave={e => e.currentTarget.style.paddingLeft = '0'}
            >
              <span style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '1rem', letterSpacing: '0.1em', color: 'rgba(201,168,76,0.5)', minWidth: 32, paddingTop: 4 }}>{p.num}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem' }}>
                  <h3 style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '0.08em', color: '#fff', lineHeight: 1, marginBottom: '0.7rem' }}>
                    {p.titulo}
                  </h3>
                  <span style={{ color: '#C9A84C', fontSize: '1.2rem', opacity: 0.5 }}>→</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: 600 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', padding: '3rem', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
          <div>
            <h3 style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.4rem' }}>
              QUERO CONTRATAR UMA PALESTRA
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Receba uma proposta personalizada para o seu evento.</p>
          </div>
          <button onClick={() => go('#contato')} className="btn-gold">Solicitar Orçamento</button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #palestras > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
