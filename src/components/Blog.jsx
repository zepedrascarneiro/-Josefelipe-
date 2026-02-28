import { Calendar } from 'lucide-react'

const artigos = [
  { cat: 'PERFORMANCE', titulo: 'Lições de Performance Criativa', desc: 'Alta performance é mais do que disciplina — é sobre unir criatividade, execução e clareza. Os pilares que aplico nos meus negócios.', data: '10/06/2025' },
  { cat: 'MINDSET', titulo: 'Transformando Erros em Princípios', desc: 'Meus maiores avanços vieram dos erros. O segredo: entender profundamente cada falha e transformá-la em um princípio prático.', data: '01/06/2025' },
  { cat: 'DISCIPLINA', titulo: 'Disciplina é Liberdade', desc: 'A disciplina não tira sua liberdade, ela cria. Quando você domina sua rotina, abre espaço para criar e performar no mais alto nível.', data: '25/05/2025' },
  { cat: 'NEGÓCIOS', titulo: 'Como Construir Empresas de Alta Performance', desc: 'Alta performance não nasce do acaso. É fruto de cultura forte, processos claros e liderança com visão.', data: '18/05/2025' },
  { cat: 'CULTURA', titulo: 'O Poder da Cultura nos Negócios', desc: 'Cultura não é sobre frases na parede. É sobre comportamento diário, alinhamento de valores e excelência como padrão.', data: '10/05/2025' },
]

export default function Blog() {
  return (
    <section id="blog" style={{ background: '#0A0A0A', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Reflexões e Práticas</p>
            <h2 className="section-heading">BLOG <span style={{ color: '#C9A84C' }}>DO ZÉ</span></h2>
          </div>
          <a href="#" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 2 }}>
            VER TODOS →
          </a>
        </div>
        <div className="gold-bar" style={{ marginBottom: '4rem' }} />

        {/* Destaque */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1px' }}>
          <div style={{ background: '#0A0A0A', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 320 }}>
            <div>
              <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '1.2rem' }}>{artigos[0].cat}</p>
              <h3 style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '0.06em', color: '#fff', lineHeight: 1.05, marginBottom: '1rem' }}>
                {artigos[0].titulo.toUpperCase()}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.7 }}>{artigos[0].desc}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2rem' }}>
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Calendar size={11} /> {artigos[0].data}
              </span>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', color: '#C9A84C', textTransform: 'uppercase' }}>Leia mais →</span>
            </div>
          </div>

          {/* Col direita: 2 artigos */}
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {artigos.slice(1, 3).map(a => (
              <div key={a.titulo} style={{ background: '#0A0A0A', padding: '2rem 2.5rem' }}>
                <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '0.7rem' }}>{a.cat}</p>
                <h3 style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '1.4rem', letterSpacing: '0.06em', color: '#fff', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                  {a.titulo.toUpperCase()}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row inferior: 2 artigos em linha */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
          {artigos.slice(3).map(a => (
            <div key={a.titulo} style={{ background: '#0A0A0A', padding: '2rem 2.5rem' }}>
              <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '0.6rem' }}>{a.cat}</p>
              <h3 style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '1.3rem', letterSpacing: '0.06em', color: '#fff', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                {a.titulo.toUpperCase()}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', lineHeight: 1.6 }}>{a.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #blog > div > div:nth-child(3),
          #blog > div > div:nth-child(4) { grid-template-columns: 1fr !important; }
          #blog > div > div:nth-child(3) > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
