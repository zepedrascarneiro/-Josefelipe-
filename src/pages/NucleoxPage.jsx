import { useEffect } from 'react'

const s = { display: 'block', alignItems: 'unset', width: '100%' }
const VOOMP = 'https://pay.voompcreators.com.br/11811/offer/m4HKL6'
const gold = '#D4AF37'
const goldLight = '#FFD700'
const muted = 'rgba(255,255,255,0.5)'
const dim = 'rgba(255,255,255,0.35)'
const cardBg = 'rgba(255,255,255,0.03)'
const border = 'rgba(255,255,255,0.06)'

const pillars = [
  { letter: 'N', title: 'Name — Nomear', desc: 'Aprenda a nomear o propósito real de qualquer pensamento, decisão ou projeto. Nomeação imprecisa = geometria borrada.', result: 'Clareza instantânea' },
  { letter: 'U', title: 'Use Verifiable Criteria — Critérios Verificáveis', desc: 'Domine critérios que eliminam vieses cognitivos e dúvidas paralisantes. Decisões baseadas em estrutura, não emoção.', result: 'Precisão imediata' },
  { letter: 'C', title: 'Contextualize — Contextualizar o Essencial', desc: 'Separe o essencial do ruído em segundos. Contextualização é a geometria da relevância.', result: 'Foco absoluto' },
  { letter: 'L', title: 'Limit Scope — Limitar o Escopo', desc: 'Restrinja o escopo e multiplique seus resultados. Limitação não é privação, é concentração de poder.', result: 'Poder exponencial' },
  { letter: 'E', title: 'Especify Constraints — Especificar Restrições', desc: 'Use restrições para desbloquear criatividade explosiva. Especificação é a mãe da inovação.', result: 'Criatividade estruturada' },
  { letter: 'O', title: 'Order Logically — Ordenar Logicamente', desc: 'Organize pensamentos em sequências lógicas imparáveis. Ordem não é rigidez, é fluidez geometricamente perfeita.', result: 'Execução fluida' },
  { letter: 'x', title: 'Expand Exponentially — Expandir Exponencialmente', desc: 'Escale suas ideias exponencialmente sem perder estrutura. Expansão controlada = impacto multiplicado.', result: 'Impacto máximo' },
]

const before = ['Pensamento disperso e reativo', 'Decisões baseadas em emoção', 'Ideias que não viram ação', 'Sobrecarga de informação', 'Procrastinação disfarçada de planejamento']
const after = ['Pensamento estruturado e intencional', 'Decisões com critérios verificáveis', 'Execução com clareza e foco', 'Filtro natural do essencial', 'Ação com método e disciplina']

export default function NucleoxPage() {
  useEffect(() => {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
    document.title = 'NUCLEOx — A Geometria do Pensamento | E-book'
    return () => { document.body.style.backgroundColor = ''; document.body.style.color = '' }
  }, [])

  const badge = { fontSize: '12px', fontWeight: 600, color: gold, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }
  const heading = { fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '16px', color: '#fff' }
  const card = { background: cardBg, border: `1px solid ${border}`, borderRadius: '16px', padding: '32px' }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: "'Inter', sans-serif" }}>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '1px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
            NUCLEO<sup style={{ color: gold, fontSize: '0.65em' }}>x</sup>
          </a>
          <a href={VOOMP} target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: gold, color: '#000', fontSize: '12px', fontWeight: 700, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', letterSpacing: '1px' }}>
            GARANTIR ACESSO
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ ...s, paddingTop: '160px', paddingBottom: '100px', padding: '160px 24px 100px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={badge}>E-BOOK · 147 PÁGINAS · PROTOCOLO DE 21 DIAS</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
            A única metodologia que transforma pensadores comuns em <em style={{ fontStyle: 'normal', color: gold }}>mentes estruturalmente superiores</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: muted, maxWidth: '580px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            O padrão invisível em todas as mentes brilhantes. 7 pilares do pensamento estruturado, baseados em neurociência aplicada. Dominável em 21 dias.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={VOOMP} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: gold, color: '#000', fontWeight: 700, padding: '18px 40px', borderRadius: '10px', fontSize: '15px', textDecoration: 'none' }}>
              Garantir Meu Acesso
            </a>
            <a href="#pilares" onClick={e => { e.preventDefault(); document.querySelector('#pilares')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontWeight: 500, padding: '18px 40px', borderRadius: '10px', fontSize: '15px', textDecoration: 'none' }}>
              Ver os 7 Pilares
            </a>
          </div>
          <p style={{ marginTop: '32px', fontSize: '13px', color: dim }}>Entrega instantânea por e-mail · Bilíngue (PT-BR + EN) · Garantia de 7 dias</p>
        </div>
      </div>

      {/* Números */}
      <div style={{ ...s, padding: '60px 24px', borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }}>
          {[['50+', 'Estudos de Neurociência'], ['147', 'Páginas'], ['7', 'Pilares Fundamentais'], ['21', 'Dias de Protocolo']].map(([v, l], i) => (
            <div key={i}>
              <p style={{ fontSize: '2.2rem', fontWeight: 900, color: gold }}>{v}</p>
              <p style={{ fontSize: '12px', color: dim }}>{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Antes vs Depois */}
      <div style={{ ...s, padding: '100px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={badge}>TRANSFORMAÇÃO</p>
          <h2 style={heading}>De ruído mental para clareza arquitetônica</h2>
          <p style={{ color: muted, marginBottom: '48px', maxWidth: '540px', lineHeight: 1.7 }}>O NUCLEOx não adiciona informação. Ele reestrutura sua geometria cognitiva.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ ...card, background: cardBg }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>ANTES DO NUCLEOx</p>
              {before.map((t, i) => <div key={i} style={{ fontSize: '14px', color: muted, padding: '8px 0', borderBottom: `1px solid ${border}` }}>{t}</div>)}
            </div>
            <div style={{ ...card, background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: gold, marginBottom: '16px' }}>DEPOIS DO NUCLEOx</p>
              {after.map((t, i) => <div key={i} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', padding: '8px 0', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>{t}</div>)}
            </div>
          </div>
        </div>
      </div>

      {/* 7 Pilares */}
      <div id="pilares" style={{ ...s, padding: '100px 24px', borderTop: `1px solid ${border}` }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={badge}>O MÉTODO</p>
          <h2 style={heading}>Os 7 Pilares N·U·C·L·E·O·x</h2>
          <p style={{ color: dim, marginBottom: '48px', maxWidth: '540px', lineHeight: 1.7 }}>O sistema completo que transforma caos em clareza. Dominável em 21 dias.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
            {pillars.map((p, i) => (
              <div key={i} style={card}>
                <p style={{ fontSize: '28px', fontWeight: 900, color: gold, marginBottom: '8px' }}>{p.letter}</p>
                <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', color: muted, lineHeight: 1.7, marginBottom: '10px' }}>{p.desc}</p>
                <p style={{ fontSize: '13px', color: gold, fontWeight: 600 }}>→ {p.result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Autor */}
      <div style={{ ...s, padding: '100px 24px', borderTop: `1px solid ${border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: '140px 1fr', gap: '32px', alignItems: 'center' }}>
          <img src="/jose-felipe-opt.jpeg" alt="José Felipe Carneiro" style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(212,175,55,0.3)' }} loading="lazy" />
          <div>
            <p style={badge}>O AUTOR</p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '16px' }}>José Felipe Carneiro</h2>
            <p style={{ fontSize: '15px', color: muted, lineHeight: 1.8, marginBottom: '12px' }}>Co-fundador da Cervejaria Wäls (mais premiada do mundo) e da ZX Ventures (AB InBev). Construiu negócios em 6 países ao longo de 25 anos.</p>
            <p style={{ fontSize: '15px', color: muted, lineHeight: 1.8 }}>O NUCLEOx nasceu da necessidade de estruturar o caos mental que acompanha quem constrói do zero. É o método que ele usa todos os dias.</p>
          </div>
        </div>
      </div>

      {/* O que recebe */}
      <div style={{ ...s, padding: '100px 24px', borderTop: `1px solid ${border}`, textAlign: 'center' }}>
        <p style={badge}>O QUE VOCÊ RECEBE</p>
        <h2 style={heading}>Tudo num único pacote</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '700px', margin: '48px auto 0' }}>
          {[['📖', 'E-book Completo', '147 páginas · PDF, DOCX e HTML'], ['⚡', 'Protocolo de 21 Dias', 'Passo a passo prático diário'], ['🌍', 'Bilíngue PT + EN', 'Conteúdo completo em dois idiomas']].map(([icon, t, d], i) => (
            <div key={i} style={{ ...card, textAlign: 'center' }}>
              <p style={{ fontSize: '32px', marginBottom: '12px' }}>{icon}</p>
              <p style={{ fontWeight: 700, marginBottom: '4px' }}>{t}</p>
              <p style={{ fontSize: '13px', color: dim }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Preço */}
      <div style={{ ...s, padding: '100px 24px', textAlign: 'center' }}>
        <p style={badge}>OFERTA ESPECIAL</p>
        <h2 style={heading}>Invista na sua mente</h2>
        <div style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.04) 100%)', border: '2px solid rgba(212,175,55,0.4)', borderRadius: '20px', padding: '48px 40px', textAlign: 'center', maxWidth: '500px', margin: '48px auto 0' }}>
          <p style={{ fontSize: '20px', textDecoration: 'line-through', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>De R$ 69,90</p>
          <p style={{ fontSize: 'clamp(56px, 14vw, 80px)', fontWeight: 900, color: goldLight, lineHeight: 1, letterSpacing: '-2px', margin: '8px 0' }}>R$ 49,90</p>
          <div style={{ display: 'inline-block', background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '50px', padding: '6px 16px', fontSize: '12px', fontWeight: 600, color: gold, margin: '12px 0' }}>
            30% OFF — Economia de R$ 20,00
          </div>
          <p style={{ marginTop: '12px', fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>ou em até <strong style={{ color: gold }}>12x de R$ 4,16</strong> sem juros</p>
        </div>
        <div style={{ marginTop: '40px' }}>
          <a href={VOOMP} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: gold, color: '#000', fontWeight: 700, padding: '20px 48px', borderRadius: '10px', fontSize: '17px', textDecoration: 'none', width: '100%', maxWidth: '420px' }}>
            Garantir Meu Acesso Agora
          </a>
        </div>
        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', fontSize: '13px', color: dim }}>
          <span>✓ Pagamento 100% seguro</span>
          <span>✓ Entrega instantânea</span>
          <span>✓ Garantia de 7 dias</span>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '48px 24px', borderTop: `1px solid ${border}`, textAlign: 'center' }}>
        <p style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>NUCLEO<sup style={{ color: gold }}>x</sup></p>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', marginBottom: '16px' }}>por José Felipe Carneiro</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', textDecoration: 'none' }}>josefelipe.com.br</a>
          <a href="https://instagram.com/josefelipec" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', textDecoration: 'none' }}>@josefelipec</a>
        </div>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.15)', marginTop: '24px' }}>© 2026 NUCLEOx. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
