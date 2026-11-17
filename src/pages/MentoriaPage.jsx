import { useState, useEffect } from 'react'
import { Users, Check, Loader2, MessageCircle, Calendar, Target, Repeat } from 'lucide-react'
import { capturarUtm, trackEvento } from '../utils/utm.js'

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/zepedrascarneiro@gmail.com'
const BENE_VENDAS_PALESTRA_URL = 'https://159-65-201-242.sslip.io/api/vendas-palestra/leads'
const WA_LINK = 'https://wa.me/5531990997409?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria%20com%20o%20Jos%C3%A9%20Felipe.'

const passos = [
  { icon: Calendar, titulo: 'Você agenda a primeira sessão', desc: 'Escolhe o melhor horário, sem fila de espera longa.' },
  { icon: Target, titulo: 'Trazemos o problema real para a mesa', desc: 'Operação, crescimento, sociedade ou uma decisão difícil. Sem enrolação.' },
  { icon: Repeat, titulo: '3 encontros de 1 hora, online', desc: 'No seu ritmo, com acompanhamento entre as sessões.' },
]

const sectionStyle = { display: 'block', alignItems: 'unset', width: '100%' }
const inputStyle = { width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px 16px', fontSize: '16px', color: '#fff', outline: 'none', fontFamily: 'inherit' }

export default function MentoriaPage() {
  const [form, setForm] = useState({ nome: '', email: '', empresa: '', mensagem: '' })
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  useEffect(() => {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
    document.title = 'Mentoria 1:1 com José Felipe Carneiro'
    return () => {
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      fetch(BENE_VENDAS_PALESTRA_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          origem: 'site',
          empresa: { nome: form.empresa },
          contato: { nome: form.nome, email: form.email },
          tema: 'Mentoria 1:1',
          mensagem: form.mensagem,
          utm: capturarUtm(),
        }),
      }).catch(() => {})
    } catch { /* falha silenciosa */ }

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          empresa: form.empresa,
          mensagem: form.mensagem,
          _subject: `[Mentoria] Solicitação de mentoria — ${form.nome}`,
          _replyto: form.email,
          _captcha: 'false',
          _template: 'box',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('ok')
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', { event_category: 'mentoria' })
        }
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: "'Inter', sans-serif" }}>
      {/* Nav simples */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-sm font-bold tracking-widest text-white/80 hover:text-white transition">
            JOSE FELIPE CARNEIRO
          </a>
          <a href="#quero" onClick={e => { e.preventDefault(); document.querySelector('#quero')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{ color: '#000' }}
            className="bg-white text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-gray-100 transition">
            QUERO MINHA MENTORIA
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ ...sectionStyle, paddingTop: '140px', paddingBottom: '60px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#f59e0b', letterSpacing: '3px', marginBottom: '24px' }}>MENTORIA 1:1</p>
          <h1 style={{ fontSize: 'clamp(2.1rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px', color: '#fff' }}>
            3 horas comigo. O suficiente para resolver o que está travando seu negócio.
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#9ca3af', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
            Minha hora de palco custa R$50 mil. Aqui você tem acesso direto e contínuo: 3 sessões de 1 hora, só nós dois, por <strong style={{ color: '#fff' }}>R$7.000</strong>.
          </p>
        </div>
      </div>

      {/* VSL */}
      <div style={{ ...sectionStyle, padding: '0 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#0a0a0a' }}>
            <video
              controls
              playsInline
              poster="/mentoria-vsl-poster.jpg"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src="/mentoria-vsl.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Corpo */}
      <div style={{ ...sectionStyle, padding: '0 24px 100px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.05rem', color: '#9ca3af', lineHeight: 1.8, marginBottom: '24px' }}>
            Não é curso. Não é palestra gravada. Você traz o problema real do seu negócio, seja operação, crescimento, sociedade ou uma decisão difícil, e eu ajudo a resolver com quem já passou por isso construindo a Wäls, vendendo para a AB InBev e tocando negócios em vários países.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#fff', lineHeight: 1.8, fontWeight: 600 }}>
            O setor não importa. O método de construir, decidir e crescer é o mesmo.
          </p>
        </div>
      </div>

      {/* Como funciona */}
      <div style={{ ...sectionStyle, padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#f59e0b', letterSpacing: '3px', marginBottom: '16px', textAlign: 'center' }}>COMO FUNCIONA</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '56px', color: '#fff', textAlign: 'center' }}>3 passos, sem complicação</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '32px' }}>
            {passos.map((p, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <p.icon size={20} style={{ color: '#f59e0b' }} />
                </div>
                <h3 style={{ fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{p.titulo}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preco */}
      <div style={{ ...sectionStyle, padding: '100px 24px' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '20px', padding: '48px 32px' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#f59e0b', letterSpacing: '3px', marginBottom: '16px' }}>INVESTIMENTO</p>
          <p style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>R$7.000</p>
          <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '32px' }}>3 sessões de 1 hora, online, a serem agendadas</p>
          <ul style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
            {['Acesso direto e individual', 'Qualquer setor', 'Agendamento flexível', 'Foco no problema real do seu negócio'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#d1d5db' }}>
                <Check size={16} style={{ color: '#f59e0b', flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
          <a href="#quero" onClick={e => { e.preventDefault(); document.querySelector('#quero')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{ display: 'block', width: '100%', backgroundColor: '#fff', color: '#000', fontWeight: 700, padding: '16px', borderRadius: '10px', fontSize: '14px', textDecoration: 'none' }}>
            Quero Minha Mentoria
          </a>
        </div>
      </div>

      {/* Formulario */}
      <div id="quero" style={{ ...sectionStyle, padding: '100px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#f59e0b', letterSpacing: '3px', marginBottom: '16px' }}>MENTORIA 1:1</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '16px', color: '#fff' }}>Solicite sua vaga</h2>
            <p style={{ color: '#6b7280' }}>Preencha abaixo e retornamos em até 24h úteis.</p>
          </div>

          {status === 'ok' ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Check size={32} style={{ color: '#22c55e' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Solicitação enviada!</h3>
              <p style={{ color: '#6b7280' }}>Obrigado! Retorno em até 24h úteis.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#9ca3af', marginBottom: '8px' }}>Seu nome</label>
                <input required value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })}
                  style={inputStyle} placeholder="José da Silva" disabled={status === 'sending'} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#9ca3af', marginBottom: '8px' }}>E-mail</label>
                <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  style={inputStyle} placeholder="jose@empresa.com" disabled={status === 'sending'} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#9ca3af', marginBottom: '8px' }}>Empresa (opcional)</label>
                <input value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })}
                  style={inputStyle} placeholder="Nome da empresa" disabled={status === 'sending'} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#9ca3af', marginBottom: '8px' }}>O que está travando seu negócio hoje?</label>
                <textarea rows={4} value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })}
                  style={{ ...inputStyle, resize: 'none' }} placeholder="Conte brevemente o contexto..." disabled={status === 'sending'} />
              </div>
              {status === 'error' && (
                <p style={{ fontSize: '13px', color: '#f87171', textAlign: 'center' }}>
                  Erro ao enviar. Tente novamente ou fale pelo WhatsApp.
                </p>
              )}
              <button type="submit" disabled={status === 'sending'}
                style={{ width: '100%', backgroundColor: '#fff', color: '#000', fontWeight: 700, padding: '16px', borderRadius: '10px', border: 'none', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: status === 'sending' ? 0.6 : 1 }}>
                {status === 'sending' ? <Loader2 size={18} className="animate-spin" /> : <Users size={18} />}
                {status === 'sending' ? 'Enviando...' : 'Solicitar Minha Vaga'}
              </button>
              <p style={{ textAlign: 'center', fontSize: '12px', color: '#4b5563' }}>Retorno em até 24h úteis</p>
            </form>
          )}

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackEvento('whatsapp_click', '/mentoria')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#6b7280', fontSize: '13px', textDecoration: 'none' }}>
              <MessageCircle size={16} />
              Ou fale direto pelo WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '48px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>José Felipe Carneiro</p>
            <p style={{ fontSize: '12px', color: '#4b5563' }}>Empreendedor, mentor e palestrante</p>
          </div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '12px' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Home</a>
            <a href="/palestras" style={{ color: '#6b7280', textDecoration: 'none' }}>Palestras</a>
            <a href="https://instagram.com/josefelipec" target="_blank" rel="noopener noreferrer" onClick={() => trackEvento('instagram_click', '/mentoria')} style={{ color: '#6b7280', textDecoration: 'none' }}>Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
