import { Fragment, useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const gold = '#c9a84c'
const s = { display: 'block', alignItems: 'unset', width: '100%' }
const slide = {
  minHeight: '100vh',
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

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
    caso: {
      empresa: 'Costco',
      titulo: 'O cachorro-quente de US$ 1,50 que a Costco se recusa a aumentar.',
      historia: [
        'Desde 1985, a Costco vende um cachorro-quente com refrigerante por US$ 1,50. Décadas depois, um executivo foi ao fundador reclamar que aquele preço estava ficando insustentável.',
        'Jim Sinegal respondeu, em termos nada delicados, que aumentar o preço estava fora de questão. Era preciso encontrar outra solução. Investiram na própria fabricação das salsichas pra controlar custos e preservar a oferta.',
      ],
      conexao: 'A empresa entendeu que a confiança do cliente é um ativo econômico. Preservou uma promessa central e redesenhou os custos para sustentá-la.',
      frase: 'Fundamento é saber o que o cliente valoriza tanto que você não pode abrir mão. Todo o resto precisa se organizar ao redor disso.',
      fonte: 'Relatos de executivos da Costco.',
    },
  },
  {
    num: 'II',
    titulo: 'Sistema Lógico',
    quotes: [
      'Disciplina não é força de vontade. É método. Método sem execução é apenas um plano.',
      'O segredo não está em uma explosão momentânea de esforço, mas na constância do trabalho diário.',
    ],
    caso: {
      empresa: 'FedEx',
      titulo: 'A FedEx descobriu que mandar uma encomenda para mais longe podia fazê-la chegar mais rápido.',
      historia: [
        'Enviar uma encomenda de uma cidade americana para outra relativamente próxima podia significar um desvio enorme por Memphis. Parece falta de lógica, certo?',
        'Mas essa era a inteligência por trás da FedEx. Em vez de organizar milhares de rotas diretas, a empresa concentrou as encomendas num centro, separou tudo durante a madrugada e distribuiu de novo. Em 1994, o centro em Memphis já processava mais de um milhão de pacotes numa noite típica.',
      ],
      conexao: 'O menor caminho individual nem sempre produz o menor custo do sistema inteiro. Padronizar e concentrar operações permite ganhar previsibilidade e escala.',
      frase: 'O que parece ineficiente quando você olha uma tarefa isolada pode ser extremamente eficiente quando entende o sistema completo.',
      fonte: 'The Christian Science Monitor e documentos da FedEx.',
    },
  },
  {
    num: 'III',
    titulo: 'Simplificar e Otimizar',
    quotes: [
      'Alta performance exige eficiência. A gente precisa eliminar o que é inútil.',
    ],
    caso: {
      empresa: 'LEGO',
      titulo: 'A LEGO descobriu que estava quase quebrando por fabricar peças demais.',
      historia: [
        'Em 2004, a LEGO estava numa crise financeira grave. A empresa tinha criado tantos produtos e peças diferentes que sua operação virou um pesadelo: o número de componentes únicos saltou de cerca de 6 mil para mais de 14 mil em sete anos.',
        'O detalhe mais absurdo: aproximadamente 90% das peças eram usadas em apenas uma aplicação. A nova gestão eliminou linhas pouco rentáveis e cortou mais da metade dos componentes. A LEGO voltou a se concentrar naquilo que fazia melhor.',
      ],
      conexao: 'Cada peça adicional exigia moldes, estoque, planejamento e capital. A variedade que parecia inovação estava consumindo a rentabilidade.',
      frase: 'Existe uma complexidade que o cliente nem percebe, mas que a empresa paga todos os dias. Simplificar é recuperar esse dinheiro.',
      fonte: 'Harvard Business School e The Conference Board.',
    },
  },
  {
    num: 'IV',
    titulo: 'Resiliência e Adaptabilidade',
    quotes: [
      'A mentalidade resiliente não é sobre não cair. É sobre levantar diferente.',
      'A lógica se inverteu. Isso é adaptabilidade.',
    ],
    caso: {
      empresa: 'WD-40',
      titulo: 'O produto que só recebeu seu nome porque as primeiras 39 fórmulas falharam.',
      historia: [
        'Em 1953, três funcionários de uma pequena empresa de San Diego tentavam criar uma fórmula para proteger peças aeroespaciais contra corrosão. A primeira tentativa falhou. A segunda também. Vieram outras 37, até que a quadragésima funcionou.',
        'Batizaram o produto de WD-40, o número 40 representa exatamente a tentativa que deu certo. O produto foi desenvolvido para uso industrial, mas funcionários começaram a levar latas pra casa. A empresa percebeu a oportunidade e passou a vendê-lo ao consumidor.',
      ],
      conexao: 'A equipe persistiu no desenvolvimento e depois soube reconhecer um mercado que nem estava no plano original.',
      frase: 'Quem aprende com 39 tentativas não enxerga a quadragésima como sorte. Enxerga como resultado de um processo.',
      fonte: 'História oficial da WD-40.',
    },
  },
  {
    num: 'V',
    titulo: 'Eixo Vital: Energia Física, Mental e Espiritual',
    quotes: [
      'Não somos máquinas!',
      'A árvore precisa soltar as folhas para florescer de novo.',
      'Não adianta manifestar sucesso financeiro se emocionalmente você está esgotado.',
    ],
    caso: {
      empresa: 'Patagonia',
      titulo: 'A empresa que deixa seus funcionários saírem do trabalho para surfar.',
      historia: [
        'Quando as ondas ficam boas, dá pra sair pra surfar. Parece loucura, mas essa é uma das filosofias que Yvon Chouinard implantou na Patagonia. Ele defendia que pessoas contratadas por sua paixão pela natureza precisavam ter tempo para vivê-la.',
        'A empresa adotou horários flexíveis, respeitando as responsabilidades de cada funcionário. Em 2019, um executivo relatou uma rotatividade anual de apenas 4%. A liberdade também funcionava como ferramenta de retenção de talentos.',
      ],
      conexao: 'A Patagonia reconheceu que pessoas precisam de autonomia, recuperação e motivação para sustentar o trabalho. Isso também reduz custos de contratação e treinamento.',
      frase: 'Extrair o máximo de horas de uma pessoa não significa extrair o melhor dela. Energia bem administrada vale mais do que presença mal aproveitada.',
      fonte: 'Yvon Chouinard e LinkedIn Talent Solutions.',
    },
  },
  {
    num: 'VI',
    titulo: 'Consistência e Refinamento',
    quotes: [
      'A constância é o que te tira do amadorismo. Ela é o caminho até o domínio.',
    ],
    caso: {
      empresa: 'Guinness',
      titulo: 'A Guinness colocou uma bolinha de plástico dentro da lata por um motivo que poucos conhecem.',
      historia: [
        'Quem já abriu uma lata de Guinness pode ter percebido uma bolinha de plástico lá dentro. Aquilo não é defeito, é uma solução tecnológica. Durante anos, a cervejaria trabalhou para reproduzir na lata a espuma cremosa e a textura que seus consumidores conheciam do chope servido no pub.',
        'Em 1988, lançou uma lata com um pequeno dispositivo que libera gás ao ser aberta, ajudando a formar aquela espuma característica. A embalagem mudou, mas a experiência que a marca queria preservar continuou sendo a referência.',
      ],
      conexao: 'A Guinness investiu em tecnologia para que o cliente reconhecesse as características do produto em diferentes ocasiões de consumo. Essa previsibilidade ajuda a construir fidelidade.',
      frase: 'Consistência é entregar aquilo que você prometeu, inclusive quando muda a maneira de entregar. É assim que uma marca constrói confiança.',
      fonte: 'Oxford Companion to Beer e Diageo.',
    },
  },
  {
    num: 'VII',
    titulo: 'Sucesso e Paz Interna',
    quotes: [
      'Sucesso é estar consciente.',
      'Entre fazer acontecer e saber parar. Entre agir e escutar. Entre o ter e o ser.',
      'Sucesso é quando a sua consciência dorme em paz. E isso, sim, é liberdade.',
    ],
    caso: {
      empresa: 'CVS',
      titulo: 'A rede de farmácias que abriu mão de US$ 2 bilhões em faturamento por ano.',
      historia: [
        'Em 2014, a CVS, uma das maiores redes de farmácias dos Estados Unidos, parou de vender cigarros em mais de 7.600 lojas. A própria empresa calculava que perderia aproximadamente US$ 2 bilhões de faturamento anual associado aos consumidores de tabaco.',
        'O motivo? Seus executivos reconheceram uma contradição: como uma empresa que pretendia cuidar da saúde poderia continuar lucrando com a venda de cigarros? A decisão também fazia sentido pro posicionamento estratégico da CVS no setor de saúde.',
      ],
      conexao: 'A empresa aceitou abrir mão de uma fonte relevante de receita para alinhar suas decisões aos valores que declarava e ao negócio que pretendia construir.',
      frase: 'Paz interna, para quem empreende, também é conseguir olhar para o próprio negócio sem precisar justificar aquilo em que você não acredita. Nem todo dinheiro merece ser ganho.',
      fonte: 'Análise de decisões corporativas da CVS Health.',
    },
  },
]

const NEXT_KEYS = ['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter']
const PREV_KEYS = ['ArrowLeft', 'ArrowUp', 'PageUp']

export default function GoMilesPage() {
  const [playing, setPlaying] = useState(false)
  const [somAtivo, setSomAtivo] = useState(false)
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  const toggleSom = () => {
    const next = !somAtivo
    setSomAtivo(next)
    if (videoRef.current) videoRef.current.muted = !next
  }

  const irPara = (direcao) => {
    const container = containerRef.current
    if (!container) return
    const slides = Array.from(container.querySelectorAll('.gm-slide'))
    let idx = slides.findIndex(el => el.getBoundingClientRect().top > -40)
    if (idx === -1) idx = slides.length - 1
    const alvo = direcao === 1 ? Math.min(idx + 1, slides.length - 1) : Math.max(idx - 1, 0)
    slides[alvo].scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
    document.body.style.overflow = 'hidden'
    document.title = 'Go Miles · Performance Consciente · José Felipe Carneiro'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)

    const handleKey = (e) => {
      if (NEXT_KEYS.includes(e.key)) { e.preventDefault(); irPara(1) }
      else if (PREV_KEYS.includes(e.key)) { e.preventDefault(); irPara(-1) }
    }
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
      document.body.style.overflow = ''
      document.head.removeChild(meta)
      window.removeEventListener('keydown', handleKey)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory',
        backgroundColor: '#000', color: '#fff', fontFamily: "'Inter', sans-serif",
      }}
    >

      {/* Slide 1 — Vídeo + Hero */}
      <div className="gm-slide" style={{ ...slide, position: 'relative', padding: 0 }}>
        <div style={{ position: 'relative', background: '#000' }}>
          <video
            ref={videoRef}
            src="/jornada.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ display: 'block', width: '100%', maxHeight: '55vh', objectFit: 'contain' }}
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
          <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>
              Wäls · Novo Brazil · Stadt Jever · Cask.Co · Fazenda Cervejeira
            </p>
            <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.01em', margin: 0, color: '#fff' }}>
              A família mais premiada em cerveja do mundo
            </h2>
          </div>
        </div>

        <div style={{ ...s, padding: '50px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: gold, letterSpacing: '4px', marginBottom: '20px', textTransform: 'uppercase' }}>Go Miles</p>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              PERFORMANCE<br />CONSCIENTE
            </h1>
            <p style={{ fontSize: '12px', color: '#4b5563', letterSpacing: '1px' }}>José Felipe Carneiro</p>

            <div style={{ marginTop: '32px' }}>
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
      </div>

      {/* Slide 2 — Marcas & Negócios */}
      <div className="gm-slide" style={{ ...s, ...slide, padding: '24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', width: '100%' }}>
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

      {/* Slides 3 a 16 — Pilares (citações + caso real) */}
      {pilares.map((p, i) => (
        <Fragment key={i}>
          <div className="gm-slide" style={{ ...s, ...slide, padding: '24px' }}>
            <div style={{ maxWidth: '760px', margin: '0 auto', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '18px', marginBottom: '40px' }}>
                <span style={{ fontSize: '15px', fontWeight: 900, color: gold, letterSpacing: '2px' }}>PILAR {p.num}</span>
                <span style={{ fontSize: '12px', color: '#4b5563', letterSpacing: '1px' }}>·</span>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.6vw, 1.7rem)', fontWeight: 800, margin: 0 }}>{p.titulo}</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '34px' }}>
                {p.quotes.map((q, j) => (
                  <p key={j} style={{
                    fontSize: 'clamp(1.2rem, 2.8vw, 1.8rem)',
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

          {p.caso && (
            <div className="gm-slide" style={{ ...s, ...slide, padding: '24px' }}>
              <div style={{ maxWidth: '760px', margin: '0 auto', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '18px', marginBottom: '28px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 900, color: gold, letterSpacing: '2px', textTransform: 'uppercase' }}>Caso real</span>
                  <span style={{ fontSize: '12px', color: '#4b5563', letterSpacing: '1px' }}>·</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#9ca3af', letterSpacing: '1px', textTransform: 'uppercase' }}>{p.caso.empresa}</span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.3rem, 2.8vw, 1.9rem)', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.01em', margin: '0 0 24px', textWrap: 'balance' }}>
                  {p.caso.titulo}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '26px' }}>
                  {p.caso.historia.map((par, j) => (
                    <p key={j} style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.08rem)', lineHeight: 1.65, color: '#9ca3af', margin: 0 }}>
                      {par}
                    </p>
                  ))}
                </div>
                <p style={{
                  fontSize: 'clamp(1.1rem, 2.1vw, 1.4rem)', fontWeight: 700, lineHeight: 1.4,
                  color: '#fff', margin: '0 0 16px', padding: '18px 22px',
                  borderLeft: `3px solid ${gold}`, background: 'rgba(201,168,76,0.06)',
                  textWrap: 'balance',
                }}>
                  {p.caso.frase}
                </p>
                <p style={{ fontSize: '12px', color: '#4b5563', margin: 0 }}>{p.caso.fonte}</p>
              </div>
            </div>
          )}
        </Fragment>
      ))}

      {/* Slide final — Footer */}
      <div className="gm-slide" style={{ ...s, ...slide, padding: '24px', textAlign: 'center' }}>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginBottom: '8px' }}>Performance Consciente</p>
          <p style={{ fontSize: '12px', color: '#4b5563', marginBottom: '40px' }}>José Felipe Carneiro</p>

          <div style={{ display: 'flex', gap: '120px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <div>
              <img src="/go-miles-qr-livro.png" alt="QR code para comprar o livro na Amazon" style={{ width: '140px', height: '140px', borderRadius: '10px' }} />
              <p style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '10px' }}>Comprar o livro</p>
            </div>
            <div>
              <img src="/go-miles-qr-instagram.png" alt="QR code para o Instagram de José Felipe Carneiro" style={{ width: '140px', height: '140px', borderRadius: '10px' }} />
              <p style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '10px' }}>@josefelipec</p>
            </div>
          </div>

          <a href="/livro" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: gold, color: '#000', fontWeight: 700, padding: '16px 32px', fontSize: '14px', textDecoration: 'none', letterSpacing: '1px' }}>
            Conhecer o livro
          </a>
        </div>
      </div>
    </div>
  )
}
