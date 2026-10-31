import { useEffect } from 'react'

const gold = '#c9a84c'
const s = { display: 'block', alignItems: 'unset', width: '100%' }

const pilares = [
  {
    num: 'I',
    titulo: 'Bloqueios e Fundamentos',
    quotes: [
      'Produtividade sustentável é, acima de tudo, a capacidade de usar o espelho da sua própria jornada para reconhecer o que faz sentido para a sua vida.',
      'A verdade é que mudar assusta. Mudar nos obriga a sair daquilo que conhecemos, mesmo que esse conhecido nos machuque.',
      'Sem repouso não existe produtividade verdadeira.',
    ],
  },
  {
    num: 'II',
    titulo: 'Sistema Lógico',
    quotes: [
      'Disciplina não é força de vontade. É método. Método sem execução é apenas um plano.',
      'O segredo não está em uma explosão momentânea de esforço, mas na constância do trabalho diário.',
    ],
  },
  {
    num: 'III',
    titulo: 'Simplificar e Otimizar',
    quotes: [
      'Alta performance exige eficiência. A gente precisa eliminar o que é inútil.',
    ],
  },
  {
    num: 'IV',
    titulo: 'Resiliência e Adaptabilidade',
    quotes: [
      'A mentalidade resiliente não é sobre não cair. É sobre levantar diferente.',
      'A lógica se inverteu. Isso é adaptabilidade.',
    ],
  },
  {
    num: 'V',
    titulo: 'Eixo Vital: Energia Física, Mental e Espiritual',
    quotes: [
      'Não somos máquinas!',
      'A árvore precisa soltar as folhas para florescer de novo.',
      'Não adianta manifestar sucesso financeiro se emocionalmente você está esgotado.',
    ],
  },
  {
    num: 'VI',
    titulo: 'Consistência e Refinamento',
    quotes: [
      'A constância é o que te tira do amadorismo. Ela é o caminho até o domínio.',
    ],
  },
  {
    num: 'VII',
    titulo: 'Sucesso e Paz Interna',
    quotes: [
      'Sucesso é estar consciente.',
      'Entre fazer acontecer e saber parar. Entre agir e escutar. Entre o ter e o ser.',
      'Sucesso é quando a sua consciência dorme em paz. E isso, sim, é liberdade.',
    ],
  },
]

export default function GoMilesPage() {
  useEffect(() => {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
    document.title = 'Go Miles · Performance Consciente — José Felipe Carneiro'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => {
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
      document.head.removeChild(meta)
    }
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: "'Inter', sans-serif" }}>

      {/* Hero */}
      <div style={{ ...s, padding: '120px 24px 90px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: gold, letterSpacing: '4px', marginBottom: '22px', textTransform: 'uppercase' }}>Go Miles</p>
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '26px' }}>
            PERFORMANCE<br />CONSCIENTE
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#9ca3af', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
            Sete pilares, ditos do jeito que estão no livro. Sem filtro, sem enfeite — só o que precisa ser dito pra mudar como você performa.
          </p>
          <p style={{ fontSize: '12px', color: '#4b5563', marginTop: '30px', letterSpacing: '1px' }}>José Felipe Carneiro</p>
        </div>
      </div>

      {/* Pilares */}
      {pilares.map((p, i) => (
        <div key={i} style={{ ...s, padding: '80px 24px', borderBottom: i < pilares.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '18px', marginBottom: '48px' }}>
              <span style={{ fontSize: '15px', fontWeight: 900, color: gold, letterSpacing: '2px' }}>PILAR {p.num}</span>
              <span style={{ fontSize: '12px', color: '#4b5563', letterSpacing: '1px' }}>—</span>
              <h2 style={{ fontSize: 'clamp(1.3rem, 2.6vw, 1.7rem)', fontWeight: 800, margin: 0 }}>{p.titulo}</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {p.quotes.map((q, j) => (
                <p key={j} style={{
                  fontSize: 'clamp(1.3rem, 3vw, 1.9rem)',
                  fontWeight: 700,
                  lineHeight: 1.35,
                  letterSpacing: '-0.01em',
                  margin: 0,
                  color: '#fff',
                  textWrap: 'balance',
                }}>
                  {q}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Footer */}
      <footer style={{ padding: '60px 24px 80px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginBottom: '8px' }}>Performance Consciente</p>
        <p style={{ fontSize: '12px', color: '#4b5563', marginBottom: '28px' }}>José Felipe Carneiro</p>
        <a href="/livro" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: gold, color: '#000', fontWeight: 700, padding: '16px 32px', fontSize: '14px', textDecoration: 'none', letterSpacing: '1px' }}>
          Conhecer o livro
        </a>
      </footer>
    </div>
  )
}
