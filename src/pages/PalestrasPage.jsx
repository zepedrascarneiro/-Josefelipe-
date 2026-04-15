import { useState, useEffect } from 'react'
import { Mic, ArrowRight, Check, Users, Globe, Award } from 'lucide-react'

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
const inputStyle = { width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px 16px', fontSize: '14px', color: '#fff', outline: 'none', fontFamily: 'inherit' }

export default function PalestrasPage() {
  const [form, setForm] = useState({ nome: '', email: '', empresa: '', evento: '', tema: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  useEffect(() => {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
    document.title = 'Jose Felipe Carneiro — Palestras | Palestrante de Empreendedorismo'
    return () => {
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Palestra: ${form.tema || 'Contato'} - ${form.empresa}`)
    const body = encodeURIComponent(`Nome: ${form.nome}\nEmpresa: ${form.empresa}\nEvento: ${form.evento}\nTema: ${form.tema}\n\n${form.mensagem}`)
    window.location.href = `mailto:zepedrascarneiro@gmail.com?subject=${subject}&body=${body}`
    setEnviado(true)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: "'Inter', sans-serif" }}>
      {/* Nav simples */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-sm font-bold tracking-widest text-white/80 hover:text-white transition">
            JOSE FELIPE CARNEIRO
          </a>
          <a href="#contratar" onClick={e => { e.preventDefault(); document.querySelector('#contratar')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="bg-white text-black text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-gray-100 transition">
            CONTRATAR PALESTRA
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ ...sectionStyle, paddingTop: '140px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#f59e0b', letterSpacing: '3px', marginBottom: '24px' }}>PALESTRANTE</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '24px', color: '#fff' }}>
            A vivência de quem construiu{' '}
            <span style={{ color: '#f59e0b' }}>a cervejaria mais premiada do mundo</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#9ca3af', maxWidth: '640px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Co-fundador da Wäls e da ZX Ventures (AB InBev). No palco, José Felipe entrega
            experiência real, energia e ferramentas práticas que transformam plateia em ação.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <a href="#contratar" onClick={e => { e.preventDefault(); document.querySelector('#contratar')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#fff', color: '#000', fontWeight: 700, padding: '16px 32px', borderRadius: '10px', fontSize: '14px', textDecoration: 'none', transition: 'opacity 0.2s' }}>
              <Mic size={18} />
              Quero Contratar
            </a>
            <a href="#temas" onClick={e => { e.preventDefault(); document.querySelector('#temas')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontWeight: 500, padding: '16px 32px', borderRadius: '10px', fontSize: '14px', textDecoration: 'none', transition: 'background 0.2s' }}>
              Ver Temas de Palestra
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Numeros */}
      <div style={{ ...sectionStyle, padding: '60px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }}>
          {numeros.map((n, i) => (
            <div key={i}>
              <n.icon size={24} style={{ margin: '0 auto 12px', color: '#f59e0b' }} />
              <p style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff' }}>{n.valor}</p>
              <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{n.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Temas */}
      <div id="temas" style={{ ...sectionStyle, padding: '100px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#f59e0b', letterSpacing: '3px', marginBottom: '16px' }}>TEMAS</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '16px', color: '#fff' }}>Palestras sob medida</h2>
          <p style={{ color: '#6b7280', marginBottom: '48px', maxWidth: '540px', lineHeight: 1.7 }}>Cada palestra é adaptada ao público, ao setor e aos objetivos do evento. Escolha o tema que mais faz sentido.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '24px' }}>
            {temas.map((t, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mic size={16} style={{ color: '#f59e0b' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{t.titulo}</h3>
                    <p style={{ fontSize: '13px', color: 'rgba(245,158,11,0.6)' }}>{t.subtitulo}</p>
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: 1.7, marginBottom: '16px' }}>{t.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '12px', color: '#9ca3af' }}>{t.ideal}</span>
                  <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '12px', color: '#9ca3af' }}>{t.duracao}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Empresas */}
      <div style={{ ...sectionStyle, padding: '60px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', color: '#6b7280', letterSpacing: '3px', marginBottom: '32px' }}>QUEM JÁ CONTOU COM JOSÉ FELIPE</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px 40px' }}>
            {empresas.map((e, i) => (
              <span key={i} style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(156,163,175,0.6)' }}>{e}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Apresentacoes */}
      <div style={{ ...sectionStyle, padding: '100px 24px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#f59e0b', letterSpacing: '3px', marginBottom: '16px' }}>PREVIEW</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '48px', color: '#fff' }}>Veja as apresentações</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '32px' }}>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Apresentação Geral</p>
              <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', aspectRatio: '16/9' }}>
                <iframe src="/palestra-geral.pdf" title="Apresentação Geral" style={{ width: '100%', height: '100%', border: 'none' }} />
              </div>
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Apresentação Agro</p>
              <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', aspectRatio: '16/9' }}>
                <iframe src="/palestra-agro.pdf" title="Apresentação Agro" style={{ width: '100%', height: '100%', border: 'none' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Como funciona */}
      <div style={{ ...sectionStyle, padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#f59e0b', letterSpacing: '3px', marginBottom: '16px' }}>PROCESSO</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '48px', color: '#fff' }}>Como contratar</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { step: '01', title: 'Escolha o tema', desc: 'Selecione o tema que mais se encaixa no seu evento ou peça uma palestra personalizada.' },
              { step: '02', title: 'Envie sua solicitação', desc: 'Preencha o formulário abaixo com os detalhes do evento. Retorno em até 24h.' },
              { step: '03', title: 'Receba a proposta', desc: 'Você recebe uma proposta completa com valor, logística e termos. Sem surpresas.' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(245,158,11,0.1)', color: '#f59e0b', fontWeight: 700, fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>{s.step}</div>
                <h3 style={{ fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formulario */}
      <div id="contratar" style={{ ...sectionStyle, padding: '100px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#f59e0b', letterSpacing: '3px', marginBottom: '16px' }}>CONTRATE</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '16px', color: '#fff' }}>Solicite uma proposta</h2>
            <p style={{ color: '#6b7280' }}>Preencha o formulário abaixo e receba uma proposta personalizada.</p>
          </div>

          {enviado ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Check size={32} style={{ color: '#22c55e' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Solicitação enviada!</h3>
              <p style={{ color: '#6b7280' }}>Seu email foi aberto com os dados preenchidos. Retorno em até 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#9ca3af', marginBottom: '8px' }}>Seu nome</label>
                  <input required value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })}
                    style={inputStyle} placeholder="José da Silva" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#9ca3af', marginBottom: '8px' }}>E-mail</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle} placeholder="jose@empresa.com" />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#9ca3af', marginBottom: '8px' }}>Empresa / Organização</label>
                  <input required value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })}
                    style={inputStyle} placeholder="Nome da empresa" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#9ca3af', marginBottom: '8px' }}>Nome do evento</label>
                  <input value={form.evento} onChange={e => setForm({ ...form, evento: e.target.value })}
                    style={inputStyle} placeholder="Convenção de Vendas 2026" />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#9ca3af', marginBottom: '8px' }}>Tema de interesse</label>
                <select value={form.tema} onChange={e => setForm({ ...form, tema: e.target.value })}
                  style={{ ...inputStyle, appearance: 'none' }}>
                  <option value="" style={{ background: '#000' }}>Selecione um tema</option>
                  {temas.map((t, i) => <option key={i} value={t.titulo} style={{ background: '#000' }}>{t.titulo}</option>)}
                  <option value="Personalizada" style={{ background: '#000' }}>Palestra personalizada</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#9ca3af', marginBottom: '8px' }}>Detalhes do evento</label>
                <textarea rows={4} value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })}
                  style={{ ...inputStyle, resize: 'none' }} placeholder="Data, local, número de participantes, objetivos..." />
              </div>
              <button type="submit"
                style={{ width: '100%', backgroundColor: '#fff', color: '#000', fontWeight: 700, padding: '16px', borderRadius: '10px', border: 'none', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Mic size={18} />
                Solicitar Proposta
              </button>
              <p style={{ textAlign: 'center', fontSize: '12px', color: '#4b5563' }}>Retorno em até 24h úteis</p>
            </form>
          )}
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
            <a href="https://www.qualmeuvaluation.com.br" target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280', textDecoration: 'none' }}>Valuation Pro</a>
            <a href="https://instagram.com/josefelipec" target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280', textDecoration: 'none' }}>Instagram</a>
            <a href="#contratar" onClick={e => { e.preventDefault(); document.querySelector('#contratar')?.scrollIntoView({ behavior: 'smooth' }) }} style={{ color: '#6b7280', textDecoration: 'none' }}>Contato</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a href="https://wa.me/5511976372211?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20palestras%20do%20Jos%C3%A9%20Felipe."
        target="_blank" rel="noopener noreferrer"
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
          width: '60px', height: '60px', borderRadius: '50%',
          backgroundColor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)', transition: 'transform 0.2s',
          textDecoration: 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Contato via WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
