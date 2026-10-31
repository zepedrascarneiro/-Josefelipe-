import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const gold = '#c9a84c'
const s = { display: 'block', alignItems: 'unset', width: '100%' }

const marcas = [
  { nome: 'Wäls', sub: 'Mais Premiada do Mundo' },
  { nome: 'ZX Ventures', sub: 'AB InBev · Global' },
  { nome: 'Khappy Kombucha', sub: 'Líder no Brasil' },
  { nome: 'Stadt Jever', sub: 'Do Campo ao Copo' },
  { nome: 'Novo Brazil', sub: 'San Diego, EUA' },
  { nome: 'Fazenda Cervejeira', sub: 'Belo Horizonte' },
  { nome: 'Investidor', sub: 'Etus Media Holding · Anunciagro · Brazilian Coffee King' },
  { nome: 'Villa Ipioca', sub: 'Capela Ipioca · Casamar Beach Club · Fazenda Alagoas' },
]

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
  const [playing, setPlaying] = useState(false)
  const [somAtivo, setSomAtivo] = useState(false)
  const videoRef = useRef(null)

  const toggleSom = () => {
    const next = !somAtivo
    setSomAtivo(next)
    if (videoRef.current) videoRef.current.muted = !next
  }

  useEffect(() => {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
    document.title = 'Go Miles · Performance Consciente · José Felipe Carneiro'
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

      {/* Vídeo de abertura */}
      <div style={{ position: 'relative', background: '#000' }}>
        <video
          ref={videoRef}
          src="/jornada.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ display: 'block', width: '100%', maxHeight: '82vh', objectFit: 'contain' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.85) 100%)', pointerEvents: 'none' }} />
        <button
          onClick={toggleSom}
          aria-label={somAtivo ? 'Silenciar' : 'Ativar som'}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            width: '44px', height: '44px', borderRadius: '50%',
            background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)',
            border: 'none', color: '#fff', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {somAtivo ? <Volume2 size={19} /> : <VolumeX size={19} />}
        </button>
        <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>
            Wäls · Novo Brazil · Stadt Jever · Cask.Co · Fazenda Cervejeira
          </p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4.5vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.01em', margin: 0, color: '#fff' }}>
            A família mais premiada em cerveja do mundo
          </h2>
        </div>
      </div>

      {/* Hero */}
      <div style={{ ...s, padding: '120px 24px 90px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: gold, letterSpacing: '4px', marginBottom: '22px', textTransform: 'uppercase' }}>Go Miles</p>
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '26px' }}>
            PERFORMANCE<br />CONSCIENTE
          </h1>
          <p style={{ fontSize: '12px', color: '#4b5563', marginTop: '14px', letterSpacing: '1px' }}>José Felipe Carneiro</p>

          <div style={{ marginTop: '40px' }}>
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '12px',
                  background: gold, color: '#000', border: 'none',
                  padding: '16px 30px', fontSize: '14px', fontWeight: 800,
                  letterSpacing: '1px', cursor: 'pointer',
                }}
              >
                <span style={{
                  width: 0, height: 0,
                  borderTop: '7px solid transparent', borderBottom: '7px solid transparent',
                  borderLeft: '11px solid #000',
                }} />
                THUNDERSTRUCK
              </button>
            ) : (
              <iframe
                title="AC/DC · Thunderstruck"
                src="https://open.spotify.com/embed/track/57bgtoPSgt236HzfBOd8kj?autoplay=1"
                width="100%"
                height="152"
                style={{ maxWidth: '420px', border: 'none', borderRadius: '12px' }}
                allow="autoplay; encrypted-media; clipboard-write"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>

      {/* Marcas & Negócios */}
      <div style={{ ...s, padding: '70px 24px 80px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: gold, letterSpacing: '3px', marginBottom: '36px', textTransform: 'uppercase', textAlign: 'center' }}>
            Marcas &amp; Negócios
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2px', background: 'rgba(255,255,255,0.06)' }}>
            {marcas.map((m, i) => (
              <div key={i} style={{ background: '#000', padding: '22px 24px' }}>
                <p style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 4px', color: '#fff' }}>{m.nome}</p>
                <p style={{ fontSize: '12.5px', color: '#6b7280', margin: 0, letterSpacing: '0.2px' }}>{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pilares */}
      {pilares.map((p, i) => (
        <div key={i} style={{ ...s, padding: '80px 24px', borderBottom: i < pilares.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '18px', marginBottom: '48px' }}>
              <span style={{ fontSize: '15px', fontWeight: 900, color: gold, letterSpacing: '2px' }}>PILAR {p.num}</span>
              <span style={{ fontSize: '12px', color: '#4b5563', letterSpacing: '1px' }}>·</span>
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
