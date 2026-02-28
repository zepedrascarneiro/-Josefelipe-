import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [ok, setOk] = useState(false)

  const submit = e => {
    e.preventDefault()
    if (email.trim()) setOk(true)
  }

  return (
    <section id="newsletter" style={{ background: '#111111', padding: '7rem 0' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
        <p className="section-label" style={{ marginBottom: '1.5rem' }}>Newsletter Semanal</p>
        <h2 className="section-heading" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1rem' }}>
          TODA SEMANA<br /><span style={{ color: '#C9A84C' }}>NA SUA CAIXA</span>
        </h2>
        <div className="gold-bar" style={{ margin: '0 auto 2rem' }} />
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 540, margin: '0 auto 3rem', fontWeight: 300 }}>
          Reflexões sobre liderança, negócios e performance. Sem spam. Sem fórmulas. Direto ao ponto.
        </p>

        {ok ? (
          <div style={{ border: '1px solid rgba(201,168,76,0.3)', padding: '2rem 3rem', display: 'inline-block' }}>
            <p style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '1.4rem', letterSpacing: '0.1em', color: '#C9A84C' }}>INSCRIÇÃO CONFIRMADA ✓</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.4rem' }}>Bem-vindo. Até na próxima edição.</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', gap: '1px', maxWidth: 540, margin: '0 auto', background: 'rgba(255,255,255,0.06)' }}>
            <input
              type="email"
              placeholder="SEU MELHOR E-MAIL"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="input"
              required
              style={{ flex: 1, letterSpacing: '0.08em', fontSize: '0.8rem' }}
            />
            <button type="submit" className="btn-gold" style={{ whiteSpace: 'nowrap' }}>
              Quero Receber
            </button>
          </form>
        )}

        <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', marginTop: '1.2rem', letterSpacing: '0.12em' }}>
          + 12.000 LÍDERES JÁ RECEBEM — SEM SPAM, CANCELE QUANDO QUISER
        </p>
      </div>
    </section>
  )
}
