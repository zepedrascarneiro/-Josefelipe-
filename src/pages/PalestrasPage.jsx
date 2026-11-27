import { useState, useEffect, useRef } from 'react'
import { Mic, ArrowRight, Check, Users, Globe, Award, Loader2, Play } from 'lucide-react'
import { capturarUtm, trackEvento } from '../utils/utm.js'

const GOLD = '#c9a84c'

// VSL da página de anúncio: fica parada no poster até o clique (não autoplay
// mudo) porque é aqui que o tráfego pago do Google chega, e uma VSL só
// funciona de verdade com o áudio ligado por escolha de quem assiste.
function VideoVSL() {
  const [tocando, setTocando] = useState(false)
  const videoRef = useRef(null)

  const iniciar = () => {
    setTocando(true)
    requestAnimationFrame(() => videoRef.current?.play())
  }

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '16px', backgroundColor: '#000', boxShadow: '0 32px 80px rgba(0,0,0,0.18)' }}>
      {tocando ? (
        <video
          ref={videoRef}
          src="/vsl-palestras.mp4"
          controls
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#000' }}
        />
      ) : (
        <button
          type="button"
          onClick={iniciar}
          aria-label="Assistir ao vídeo"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', padding: 0, cursor: 'pointer', background: 'none' }}
        >
          <img
            src="/vsl-poster.jpg"
            alt="José Felipe Carneiro apresentando"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.25)' }} />
          <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ width: 'clamp(72px, 10vw, 104px)', height: 'clamp(72px, 10vw, 104px)', borderRadius: '50%', backgroundColor: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Play size={36} fill="black" strokeWidth={0} style={{ marginLeft: '6px' }} />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/zepedrascarneiro@gmail.com'
const BENE_VENDAS_PALESTRA_URL = 'https://159-65-201-242.sslip.io/api/vendas-palestra/leads'

const temas = [
  {
    titulo: 'Performance Consciente',
    subtitulo: 'O segredo de quem produz mais sem se esgotar',
    desc: 'Os 7 pilares que separam alta performance de burnout. Como construir resultados sustentaveis com presenca, intencao e dominio do proprio ritmo.',
    ideal: 'Convencoes corporativas, lideranca, RH',
    duracao: '60-90 min',
  },
  {
    titulo: 'Do Local ao Global',
    subtitulo: 'Como transformei uma cervejaria familiar na mais premiada do mundo',
    desc: 'A historia real de como a Wals saiu de Belo Horizonte para se tornar a cervejaria mais premiada do planeta, foi adquirida pela AB InBev e gerou a ZX Ventures em diversos paises.',
    ideal: 'Empreendedorismo, startups, scale-ups',
    duracao: '60-90 min',
  },
  {
    titulo: 'Inovacao no Agronegocio',
    subtitulo: 'Do campo ao copo: como agregar valor e criar marcas no agro',
    desc: 'Da Fazenda Cervejeira a Stadt Jever, como aplicar branding, experiencia e inovacao em negocios ligados ao campo. Uma visao de quem vive os dois mundos.',
    ideal: 'Eventos agro, cooperativas, associacoes',
    duracao: '60-90 min',
  },
  {
    titulo: 'Empreendedorismo Real',
    subtitulo: 'Sem glamour, sem atalhos. O que ninguem conta sobre construir negocios',
    desc: 'As decisoes dificeis, os erros que custaram caro e as licoes que so a pratica ensina. Uma conversa franca sobre o que e empreender de verdade.',
    ideal: 'Universidades, aceleradoras, mentorias',
    duracao: '45-60 min',
  },
]

const numeros = [
  { valor: '300+', label: 'Palestras realizadas', icon: Mic },
  { valor: '450k+', label: 'Pessoas impactadas', icon: Users },
  { valor: '25', label: 'Anos de empreendedorismo', icon: Award },
  { valor: '6', label: 'Países de atuação', icon: Globe },
]

const empresas = [
  'AB InBev', 'Ambev', 'Endeavor', 'FIEMG', 'SEBRAE',
  'Sicoob', 'XP Inc', 'Stone', 'Anglo American', 'PwC',
]


// Override global section styles
const sectionStyle = { display: 'block', alignItems: 'unset', width: '100%' }
const inputStyle = { width: '100%', backgroundColor: '#fff', border: '1px solid #e2e2e2', borderRadius: '10px', padding: '14px 16px', fontSize: '16px', color: '#111', outline: 'none', fontFamily: 'inherit' }

export default function PalestrasPage() {
  const [form, setForm] = useState({ nome: '', email: '', empresa: '', evento: '', tema: '', mensagem: '' })
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  useEffect(() => {
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = '#111'
    document.title = 'Jose Felipe Carneiro — Palestras | Palestrante de Empreendedorismo'
    return () => {
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Pipeline de vendas de palestra (JFC Sales AI) — melhor esforço, nunca
    // trava o envio real (FormSubmit) abaixo.
    try {
      fetch(BENE_VENDAS_PALESTRA_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          origem: 'site',
          empresa: { nome: form.empresa },
          contato: { nome: form.nome, email: form.email },
          evento: { nome: form.evento },
          tema: form.tema,
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
          evento: form.evento,
          tema: form.tema || '(não informado)',
          mensagem: form.mensagem,
          _subject: `[Palestras] ${form.tema || 'Solicitação de proposta'} — ${form.empresa}`,
          _replyto: form.email,
          _captcha: 'false',
          _template: 'box',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('ok')
        // Google Analytics — lead qualificado de palestra
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            event_category: 'palestras',
            event_label: form.tema || 'nao_informado',
          })
          // TODO: trocar send_to pelo código real assim que a ação de
          // conversão "Lead — Palestras" existir no Google Ads
          // (Ferramentas e configurações > Conversões > Nova ação).
          // window.gtag('event', 'conversion', { send_to: 'AW-18029764921/SEU_LABEL_AQUI' })
        }
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', color: '#111', fontFamily: "'Inter', sans-serif" }}>
      {/* Nav simples */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-sm font-bold tracking-widest text-black/80 hover:text-black transition">
            JOSE FELIPE CARNEIRO
          </a>
          <a href="#contratar" onClick={e => { e.preventDefault(); document.querySelector('#contratar')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="bg-black text-white text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition">
            CONTRATAR PALESTRA
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ ...sectionStyle, paddingTop: '140px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: GOLD, letterSpacing: '3px', marginBottom: '24px' }}>PALESTRANTE</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '24px', color: '#111' }}>
            O que faz seis mil pessoas pararem{' '}
            <span style={{ color: GOLD }}>para ouvir uma única pessoa?</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#6b7280', maxWidth: '640px', margin: '0 auto 48px', lineHeight: 1.7 }}>
            José Felipe construiu a cervejaria mais premiada do mundo, rodou o planeta de
            perto e nunca deixou de empreender. Assista e entenda por que ele é diferente.
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <VideoVSL />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
            <a href="#contratar" onClick={e => { e.preventDefault(); document.querySelector('#contratar')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: GOLD, color: '#000', fontWeight: 700, padding: '18px 40px', borderRadius: '10px', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none' }}>
              <Mic size={18} />
              Quero contratar a palestra!
              <ArrowRight size={16} />
            </a>
          </div>
          <p style={{ textAlign: 'center', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9ca3af', marginTop: '16px' }}>
            Palestrante exclusivo da DMT Palestras
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '28px' }}>
            <a href="#temas" onClick={e => { e.preventDefault(); document.querySelector('#temas')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid #d1d5db', color: '#111', fontWeight: 500, padding: '14px 28px', borderRadius: '10px', fontSize: '13px', textDecoration: 'none' }}>
              Ver Temas de Palestra
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Numeros */}
      <div style={{ ...sectionStyle, padding: '60px 24px', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }}>
          {numeros.map((n, i) => (
            <div key={i}>
              <n.icon size={24} style={{ margin: '0 auto 12px', color: GOLD }} />
              <p style={{ fontSize: '2.2rem', fontWeight: 900, color: '#111' }}>{n.valor}</p>
              <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{n.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Temas */}
      <div id="temas" style={{ ...sectionStyle, padding: '100px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: GOLD, letterSpacing: '3px', marginBottom: '16px' }}>TEMAS</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '16px', color: '#111' }}>Palestras sob medida</h2>
          <p style={{ color: '#6b7280', marginBottom: '48px', maxWidth: '540px', lineHeight: 1.7 }}>Cada palestra é adaptada ao público, ao setor e aos objetivos do evento. Escolha o tema que mais faz sentido.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '24px' }}>
            {temas.map((t, i) => (
              <div key={i} style={{ background: '#fafafa', border: '1px solid #ececec', borderRadius: '16px', padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(201,168,76,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mic size={16} style={{ color: GOLD }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: '4px' }}>{t.titulo}</h3>
                    <p style={{ fontSize: '13px', color: '#a9882f' }}>{t.subtitulo}</p>
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.7, marginBottom: '16px' }}>{t.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <span style={{ padding: '4px 12px', background: '#f0f0f0', borderRadius: '20px', fontSize: '12px', color: '#555' }}>{t.ideal}</span>
                  <span style={{ padding: '4px 12px', background: '#f0f0f0', borderRadius: '20px', fontSize: '12px', color: '#555' }}>{t.duracao}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Empresas */}
      <div style={{ ...sectionStyle, padding: '60px 24px', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', color: '#6b7280', letterSpacing: '3px', marginBottom: '32px' }}>QUEM JÁ CONTOU COM JOSÉ FELIPE</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px 40px' }}>
            {empresas.map((e, i) => (
              <span key={i} style={{ fontSize: '14px', fontWeight: 500, color: '#9ca3af' }}>{e}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Como funciona */}
      <div style={{ ...sectionStyle, padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: GOLD, letterSpacing: '3px', marginBottom: '16px' }}>PROCESSO</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '48px', color: '#111' }}>Como contratar</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { step: '01', title: 'Escolha o tema', desc: 'Selecione o tema que mais se encaixa no seu evento ou peça uma palestra personalizada.' },
              { step: '02', title: 'Envie sua solicitação', desc: 'Preencha o formulário abaixo com os detalhes do evento. Retorno em até 24h.' },
              { step: '03', title: 'Receba a proposta', desc: 'Você recebe uma proposta completa com valor, logística e termos. Sem surpresas.' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(201,168,76,0.12)', color: GOLD, fontWeight: 700, fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>{s.step}</div>
                <h3 style={{ fontWeight: 700, color: '#111', marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formulario */}
      <div id="contratar" style={{ ...sectionStyle, padding: '100px 24px', background: '#fafafa', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '13px', fontWeight: 600, color: GOLD, letterSpacing: '3px', marginBottom: '16px' }}>CONTRATE</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '16px', color: '#111' }}>Solicite uma proposta</h2>
            <p style={{ color: '#6b7280' }}>Preencha o formulário abaixo e receba uma proposta personalizada.</p>
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#6b7280', marginBottom: '8px' }}>Seu nome</label>
                  <input required value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })}
                    style={inputStyle} placeholder="José da Silva" disabled={status === 'sending'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#6b7280', marginBottom: '8px' }}>E-mail</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle} placeholder="jose@empresa.com" disabled={status === 'sending'} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#6b7280', marginBottom: '8px' }}>Empresa / Organização</label>
                  <input required value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })}
                    style={inputStyle} placeholder="Nome da empresa" disabled={status === 'sending'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#6b7280', marginBottom: '8px' }}>Nome do evento</label>
                  <input value={form.evento} onChange={e => setForm({ ...form, evento: e.target.value })}
                    style={inputStyle} placeholder="Convenção de Vendas 2026" disabled={status === 'sending'} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#6b7280', marginBottom: '8px' }}>Tema de interesse</label>
                <select value={form.tema} onChange={e => setForm({ ...form, tema: e.target.value })}
                  style={{ ...inputStyle, appearance: 'none' }} disabled={status === 'sending'}>
                  <option value="">Selecione um tema</option>
                  {temas.map((t, i) => <option key={i} value={t.titulo}>{t.titulo}</option>)}
                  <option value="Personalizada">Palestra personalizada</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#6b7280', marginBottom: '8px' }}>Detalhes do evento</label>
                <textarea rows={4} value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })}
                  style={{ ...inputStyle, resize: 'none' }} placeholder="Data, local, número de participantes, objetivos..." disabled={status === 'sending'} />
              </div>
              {status === 'error' && (
                <p style={{ fontSize: '13px', color: '#dc2626', textAlign: 'center' }}>
                  Erro ao enviar. Tente novamente ou fale pelo WhatsApp.
                </p>
              )}
              <button type="submit" disabled={status === 'sending'}
                style={{ width: '100%', backgroundColor: '#111', color: '#fff', fontWeight: 700, padding: '16px', borderRadius: '10px', border: 'none', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: status === 'sending' ? 0.6 : 1 }}>
                {status === 'sending' ? <Loader2 size={18} className="animate-spin" /> : <Mic size={18} />}
                {status === 'sending' ? 'Enviando...' : 'Solicitar Proposta'}
              </button>
              <p style={{ textAlign: 'center', fontSize: '12px', color: '#9ca3af' }}>Retorno em até 24h úteis</p>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '48px 24px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#111' }}>José Felipe Carneiro</p>
            <p style={{ fontSize: '12px', color: '#9ca3af' }}>Empreendedor, mentor e palestrante</p>
          </div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '12px' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Home</a>
            <a href="/nucleox" style={{ color: '#6b7280', textDecoration: 'none' }}>Núcleo X</a>
            <a href="https://instagram.com/josefelipec" target="_blank" rel="noopener noreferrer" onClick={() => trackEvento('instagram_click', '/palestras')} style={{ color: '#6b7280', textDecoration: 'none' }}>Instagram</a>
            <a href="#contratar" onClick={e => { e.preventDefault(); document.querySelector('#contratar')?.scrollIntoView({ behavior: 'smooth' }) }} style={{ color: '#6b7280', textDecoration: 'none' }}>Contato</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
