const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

const modulos = [
  { n: '01', t: 'Mindset de Alto Performer',    d: 'Reprograme crenças limitantes e instale modelos mentais de quem chega ao topo.' },
  { n: '02', t: 'Sistemas de Produtividade',     d: 'Método P.A.C.E. para organizar energia, agenda e projetos.' },
  { n: '03', t: 'Liderança que Inspira',          d: 'Da gestão por controle à influência por propósito.' },
  { n: '04', t: 'Negociação e Comunicação',       d: 'Frameworks práticos para vendas, acordos e apresentações.' },
  { n: '05', t: 'Finanças para Empreendedores',   d: 'Fluxo de caixa, métricas essenciais e gestão de risco.' },
  { n: '06', t: 'Escala com Equilíbrio',           d: 'Crescimento sem burnout: família, saúde e empresa alinhados.' },
]

export default function Curso() {
  return (
    <section id="curso" style={{ background: '#0A0A0A', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        <p className="section-label" style={{ marginBottom: '1rem' }}>Educação &amp; Mentoria</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'end', marginBottom: '1rem' }}>
          <h2 className="section-heading">CURSOS &amp;<br /><span style={{ color: '#C9A84C' }}>MENTORIA</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300 }}>
            Conteúdo de alta densidade para quem quer sair do lugar e não tem tempo a perder.
          </p>
        </div>
        <div className="gold-bar" style={{ marginBottom: '4rem' }} />

        {/* Cards de produtos */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1px' }}>
          {/* A Arte dos Negócios */}
          <div style={{ background: '#0A0A0A', padding: '3rem 3rem 2.5rem' }}>
            <p className="section-label" style={{ marginBottom: '0.8rem' }}>Curso Online</p>
            <h3 style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '0.04em', color: '#fff', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              A ARTE DOS<br /><span style={{ color: '#C9A84C' }}>NEGÓCIOS</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 400 }}>
              Mais de 12h de conteúdo gravado. Acesso vitalício. Atualizado com novos módulos todo semestre.
            </p>
            <div style={{ display: 'flex', gap: '3rem', marginBottom: '2.5rem' }}>
              {[['12h+', 'de conteúdo'], ['6', 'módulos'], ['Vitalício', 'acesso']].map(([v, l]) => (
                <div key={v}>
                  <p style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '2rem', letterSpacing: '0.06em', color: '#C9A84C', lineHeight: 1 }}>{v}</p>
                  <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{l}</p>
                </div>
              ))}
            </div>
            <button onClick={() => go('#contato')} className="btn-outline-light">
              Quero me inscrever →
            </button>
          </div>

          {/* Mentoria */}
          <div style={{ background: '#111111', padding: '3rem 3rem 2.5rem', borderLeft: '1px solid rgba(201,168,76,0.08)' }}>
            <p className="section-label" style={{ marginBottom: '0.8rem', color: '#C9A84C' }}>Mentoria Exclusiva</p>
            <h3 style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '0.04em', color: '#fff', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              TRINCA<br /><span style={{ color: '#C9A84C' }}>PREMIUM</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 400 }}>
              Grupos fechados de 10 pessoas. Encontros semanais ao vivo. Acompanhamento pessoal de José Felipe.
            </p>
            <div style={{ display: 'flex', gap: '3rem', marginBottom: '2.5rem' }}>
              {[['10', 'vagas/turma'], ['Semanal', 'ao vivo'], ['Personal', 'acompanham.']].map(([v, l]) => (
                <div key={v}>
                  <p style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '2rem', letterSpacing: '0.06em', color: '#C9A84C', lineHeight: 1 }}>{v}</p>
                  <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{l}</p>
                </div>
              ))}
            </div>
            <button onClick={() => go('#contato')} className="btn-gold">
              Quero a Mentoria →
            </button>
          </div>
        </div>

        {/* Módulos do curso */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '4rem', paddingTop: '3rem' }}>
          <p style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '1.1rem', letterSpacing: '0.15em', color: '#fff', marginBottom: '2rem' }}>MÓDULOS DO CURSO</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
            {modulos.map((m, i) => (
              <div
                key={m.n}
                style={{
                  display: 'flex', gap: '1.5rem', padding: '1.5rem 0', alignItems: 'flex-start',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  paddingRight: i % 2 === 0 ? '3rem' : 0,
                  paddingLeft: i % 2 !== 0 ? '3rem' : 0,
                }}
              >
                <span style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '0.85rem', letterSpacing: '0.1em', color: 'rgba(201,168,76,0.5)', minWidth: 24 }}>{m.n}</span>
                <div>
                  <p style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff', marginBottom: 3 }}>{m.t}</p>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #curso > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #curso .modulos-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
