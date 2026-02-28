import { useState } from 'react'

const infos = [
  { l: 'PALESTRAS & EVENTOS',  v: 'contato@josefelipe.com.br' },
  { l: 'MENTORIA & CURSOS',    v: 'mentoria@josefelipe.com.br' },
  { l: 'ASSESSORIA DE IMPRENSA', v: 'imprensa@josefelipe.com.br' },
  { l: 'INSTAGRAM',             v: '@josefelipecarneiro' },
]

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', msg: '' })
  const [ok, setOk] = useState(false)

  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => {
    e.preventDefault()
    if (form.nome && form.email && form.msg) setOk(true)
  }

  return (
    <section id="contato" style={{ background: '#0A0A0A', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        <p className="section-label" style={{ marginBottom: '1rem' }}>Fale Comigo</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'end', marginBottom: '1rem' }}>
          <h2 className="section-heading">BORA<br /><span style={{ color: '#C9A84C' }}>FALAR?</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300 }}>
            Palestras, mentorias, entrevistas ou parcerias — estou disponível para conversas que importam.
          </p>
        </div>
        <div className="gold-bar" style={{ marginBottom: '4rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }}>

          {/* Info */}
          <div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginBottom: '3rem' }}>
              {infos.map(({ l, v }) => (
                <div key={l} style={{ display: 'flex', flexDirection: 'column', padding: '1.2rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(201,168,76,0.7)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{l}</span>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div style={{ borderLeft: '3px solid #C9A84C', paddingLeft: '1.5rem' }}>
              <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '0.8rem' }}>
                "Se você quer um impacto memorável no seu evento, eu me preparo para isso como se fosse o mais importante da minha carreira."
              </p>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>— José Felipe Carneiro</span>
            </div>
          </div>

          {/* Formulário */}
          <div>
            {ok ? (
              <div style={{ border: '1px solid rgba(201,168,76,0.3)', padding: '3rem 2.5rem', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '2rem', letterSpacing: '0.1em', color: '#C9A84C', marginBottom: '0.6rem' }}>MENSAGEM ENVIADA ✓</p>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>Retorno em até 48h. Obrigado pelo contato.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.04)' }}>
                {[
                  { id: 'nome',    ph: 'SEU NOME COMPLETO',     type: 'text' },
                  { id: 'email',   ph: 'SEU E-MAIL',             type: 'email' },
                  { id: 'assunto', ph: 'ASSUNTO',                type: 'text' },
                ].map(f => (
                  <input
                    key={f.id}
                    name={f.id}
                    type={f.type}
                    placeholder={f.ph}
                    value={form[f.id]}
                    onChange={change}
                    className="input-light"
                    style={{ letterSpacing: '0.08em', fontSize: '0.8rem' }}
                  />
                ))}
                <textarea
                  name="msg"
                  placeholder="SUA MENSAGEM"
                  rows={5}
                  value={form.msg}
                  onChange={change}
                  className="input-light"
                  style={{ resize: 'none', letterSpacing: '0.08em', fontSize: '0.8rem', lineHeight: 1.6 }}
                />
                <button type="submit" className="btn-dark" style={{ marginTop: '1px', padding: '1.1rem 2rem', justifyContent: 'center', background: '#fff', fontSize: '0.8rem' }}>
                  Enviar Mensagem →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contato > div > div:last-child { grid-template-columns: 1fr !important; }
          #contato > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
