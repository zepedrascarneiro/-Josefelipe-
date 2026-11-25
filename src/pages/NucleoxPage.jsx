import { useState, useEffect } from 'react'

const s = { display: 'block', alignItems: 'unset', width: '100%' }
const MP_LINK = 'https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=86421409-984173b2-c918-4416-82b9-5b8de83730e2'
const PDF_PT = '/nx-d7f3a2e9.pdf'
const PDF_EN = '/nx-en-b4c8e1f2.pdf'
const gold = '#c9a84c'
const muted = 'rgba(255,255,255,0.5)'
const dim = 'rgba(255,255,255,0.35)'
const cardBg = 'rgba(255,255,255,0.03)'
const border = 'rgba(255,255,255,0.06)'

const pillars = [
  { letter: 'N', eng: 'Name', title: 'Nomear o propósito', desc: 'Nomear com precisão o propósito real de um pensamento, decisão ou projeto, antes de agir sobre ele.' },
  { letter: 'U', eng: 'Use Verifiable Criteria', title: 'Usar critérios verificáveis', desc: 'Usar critérios que reduzem viés e indecisão, apoiando a escolha em estrutura em vez de impulso.' },
  { letter: 'C', eng: 'Contextualize', title: 'Contextualizar o essencial', desc: 'Separar o essencial do ruído, entendendo o contexto antes de reagir a ele.' },
  { letter: 'L', eng: 'Limit Scope', title: 'Limitar o escopo', desc: 'Restringir o escopo de um problema para executar com mais consistência.' },
  { letter: 'E', eng: 'Especify Constraints', title: 'Especificar restrições', desc: 'Definir restrições claras como ponto de partida para soluções mais criativas.' },
  { letter: 'O', eng: 'Order Logically', title: 'Ordenar logicamente', desc: 'Organizar pensamentos em sequência lógica, sem perder flexibilidade.' },
  { letter: 'x', eng: 'Expand Exponentially', title: 'Expandir exponencialmente', desc: 'Escalar uma ideia mantendo a mesma estrutura que a fez funcionar no pequeno.' },
]

const before = ['Pensamento disperso e reativo', 'Decisões baseadas em emoção', 'Ideias que não viram ação', 'Sobrecarga de informação', 'Procrastinação disfarçada de planejamento']
const after = ['Pensamento mais estruturado e intencional', 'Decisões com critérios mais claros', 'Mais execução, menos só ideia', 'Filtro para o que é essencial', 'Ação com método']

export default function NucleoxPage() {
  const [unlocked, setUnlocked] = useState(() => {
    const saved = localStorage.getItem('nx_unlocked')
    if (!saved) return false
    const days = (Date.now() - parseInt(localStorage.getItem('nx_unlock_date') || '0')) / (1000 * 60 * 60 * 24)
    if (days > 30) { localStorage.removeItem('nx_unlocked'); localStorage.removeItem('nx_unlock_date'); return false }
    return true
  })

  useEffect(() => {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
    document.title = 'NUCLEOx: A Geometria do Pensamento | E-book'

    // Check Mercado Pago return
    const params = new URLSearchParams(window.location.search)
    const status = params.get('status') || params.get('collection_status') || ''
    const paymentId = params.get('payment_id') || params.get('collection_id') || ''
    if (status === 'approved' || paymentId) {
      localStorage.setItem('nx_unlocked', 'true')
      localStorage.setItem('nx_unlock_date', Date.now().toString())
      setUnlocked(true)
      // Google Ads conversion — only on confirmed payment
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18029764921/NX_PURCHASE',
          value: 49.90,
          currency: 'BRL',
          transaction_id: paymentId || Date.now().toString()
        })
        window.gtag('event', 'purchase', {
          value: 49.90,
          currency: 'BRL',
          transaction_id: paymentId || Date.now().toString(),
          items: [{ item_name: 'NUCLEOx E-book', price: 49.90 }]
        })
      }
      window.history.replaceState({}, '', '/nucleox')
    }

    return () => { document.body.style.backgroundColor = ''; document.body.style.color = '' }
  }, [])

  const badge = { fontSize: '12px', fontWeight: 600, color: gold, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }
  const heading = { fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '16px', color: '#fff' }
  const card = { background: cardBg, border: `1px solid ${border}`, padding: '32px' }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: "'Inter', sans-serif" }}>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>JOSÉ FELIPE CARNEIRO</a>
          <a href={MP_LINK} target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: gold, color: '#000', fontSize: '12px', fontWeight: 700, padding: '10px 20px', textDecoration: 'none', letterSpacing: '1px' }}>
            COMPRAR
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ ...s, paddingTop: '140px', paddingBottom: '100px', padding: '140px 24px 100px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={badge}>E-BOOK · NUCLEO<sup>x</sup> · PROTOCOLO DE 21 DIAS</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px', color: '#fff' }}>
            Um método para pensar com <em style={{ fontStyle: 'normal', color: gold }}>mais estrutura e menos ruído</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: muted, maxWidth: '580px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            7 pilares para organizar pensamento e decisão no dia a dia de quem constrói algo do zero. Um protocolo prático de 21 dias para aplicar cada um.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={MP_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: gold, color: '#000', fontWeight: 700, padding: '18px 40px', fontSize: '15px', textDecoration: 'none', letterSpacing: '1px' }}>
              Comprar o E-book
            </a>
            <a href="#pilares" onClick={e => { e.preventDefault(); document.querySelector('#pilares')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontWeight: 500, padding: '18px 40px', fontSize: '15px', textDecoration: 'none' }}>
              Ver os 7 Pilares
            </a>
          </div>
          <p style={{ marginTop: '32px', fontSize: '13px', color: dim }}>Entrega instantânea por e-mail · Bilíngue (PT-BR + EN)</p>
        </div>
      </div>

      {/* Números */}
      <div style={{ ...s, padding: '60px 24px', borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', textAlign: 'center' }}>
          {[['7', 'Pilares'], ['21', 'Dias de Protocolo'], ['2', 'Idiomas (PT + EN)']].map(([v, l], i) => (
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
          <p style={badge}>O QUE MUDA</p>
          <h2 style={heading}>De ruído mental para mais clareza</h2>
          <p style={{ color: muted, marginBottom: '48px', maxWidth: '540px', lineHeight: 1.7 }}>O NUCLEOx não é mais conteúdo pra consumir. É um método pra aplicar.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ ...card, background: cardBg }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>ANTES DO NUCLEOx</p>
              {before.map((t, i) => <div key={i} style={{ fontSize: '14px', color: muted, padding: '8px 0', borderBottom: `1px solid ${border}` }}>{t}</div>)}
            </div>
            <div style={{ ...card, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: gold, marginBottom: '16px' }}>DEPOIS DO NUCLEOx</p>
              {after.map((t, i) => <div key={i} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', padding: '8px 0', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>{t}</div>)}
            </div>
          </div>
        </div>
      </div>

      {/* 7 Pilares */}
      <div id="pilares" style={{ ...s, padding: '100px 24px', borderTop: `1px solid ${border}` }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={badge}>O MÉTODO</p>
          <h2 style={heading}>Os 7 Pilares N·U·C·L·E·O·x</h2>
          <p style={{ color: dim, marginBottom: '48px', maxWidth: '540px', lineHeight: 1.7 }}>Cada pilar tem uma ideia prática e um resultado esperado ao aplicar.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
            {pillars.map((p, i) => (
              <div key={i} style={card}>
                <p style={{ fontSize: '28px', fontWeight: 900, color: gold, marginBottom: '4px' }}>{p.letter}</p>
                <p style={{ fontSize: '10px', color: dim, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>{p.eng}</p>
                <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', color: muted, lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Autor */}
      <div style={{ ...s, padding: '100px 24px', borderTop: `1px solid ${border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: '140px 1fr', gap: '32px', alignItems: 'center' }}>
          <img src="/jose-felipe-opt.jpeg" alt="José Felipe Carneiro" style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${gold}33` }} loading="lazy" />
          <div>
            <p style={badge}>O AUTOR</p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '16px' }}>José Felipe Carneiro</h2>
            <p style={{ fontSize: '15px', color: muted, lineHeight: 1.8, marginBottom: '12px' }}>Co-fundador da Cervejaria Wäls (mais premiada do mundo) e da ZX Ventures (AB InBev).</p>
            <p style={{ fontSize: '15px', color: muted, lineHeight: 1.8 }}>O NUCLEOx nasceu da necessidade de estruturar o caos mental que acompanha quem constrói do zero. É o método que ele usa todos os dias.</p>
          </div>
        </div>
      </div>

      {/* O que recebe */}
      <div style={{ ...s, padding: '100px 24px', borderTop: `1px solid ${border}`, textAlign: 'center' }}>
        <p style={badge}>O QUE VOCÊ RECEBE</p>
        <h2 style={heading}>Tudo num único pacote</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '700px', margin: '48px auto 0' }}>
          {[['E-book Completo', 'PDF em português e inglês'], ['Protocolo de 21 Dias', 'Passo a passo prático diário'], ['Bilíngue PT + EN', 'Conteúdo completo em dois idiomas']].map(([t, d], i) => (
            <div key={i} style={{ ...card, textAlign: 'center' }}>
              <p style={{ fontWeight: 700, marginBottom: '4px' }}>{t}</p>
              <p style={{ fontSize: '13px', color: dim }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Preço / Download */}
      <div style={{ ...s, padding: '100px 24px', textAlign: 'center' }}>
        {unlocked ? (
          <>
            <p style={badge}>ACESSO LIBERADO</p>
            <h2 style={heading}>Seu e-book está pronto</h2>
            <p style={{ color: muted, marginBottom: '48px', maxWidth: '480px', margin: '0 auto 48px', lineHeight: 1.7 }}>
              Obrigado pela compra. Baixe seus arquivos abaixo. Acesso disponível por 30 dias.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={PDF_PT} download="NUCLEOx_PT.pdf"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: gold, color: '#000', fontWeight: 700, padding: '20px 40px', fontSize: '16px', textDecoration: 'none' }}>
                Baixar E-book (PT-BR)
              </a>
              <a href={PDF_EN} download="NUCLEOx_EN.pdf"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'transparent', color: '#fff', fontWeight: 600, padding: '20px 40px', fontSize: '16px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
                Download E-book (EN)
              </a>
            </div>
          </>
        ) : (
          <>
            <p style={badge}>O E-BOOK</p>
            <h2 style={heading}>Acesso completo</h2>
            <div style={{ background: cardBg, border: `1px solid ${border}`, padding: '48px 40px', textAlign: 'center', maxWidth: '500px', margin: '48px auto 0' }}>
              <p style={{ fontSize: 'clamp(48px, 12vw, 64px)', fontWeight: 900, color: gold, lineHeight: 1, letterSpacing: '-2px', margin: '8px 0' }}>R$ 49,90</p>
              <p style={{ marginTop: '12px', fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>ou em até <strong style={{ color: gold }}>12x de R$ 4,16</strong> sem juros</p>
            </div>
            <div style={{ marginTop: '40px' }}>
              <a href={MP_LINK}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: gold, color: '#000', fontWeight: 700, padding: '20px 48px', fontSize: '17px', textDecoration: 'none', width: '100%', maxWidth: '420px', letterSpacing: '1px' }}>
                Comprar o E-book
              </a>
            </div>
            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', fontSize: '13px', color: dim }}>
              <span>Pix ou Cartão</span>
              <span>Entrega instantânea</span>
              <span>Acesso imediato após pagamento</span>
            </div>
          </>
        )}
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
