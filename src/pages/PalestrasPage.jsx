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
    window.location.href = `mailto:jose.felipe@dmt.ag?subject=${subject}&body=${body}`
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
      <section id="contratar" style={sectionStyle} className="py-24 px-6 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-amber-400 tracking-widest mb-4">CONTRATE</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Solicite uma proposta</h2>
            <p className="text-gray-500">Contratacao exclusiva via <a href="https://www.dmt.ag" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">DMT Palestras</a></p>
          </div>

          {enviado ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Solicitacao enviada!</h3>
              <p className="text-gray-500">Seu email foi aberto com os dados preenchidos. Retorno em ate 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Seu nome</label>
                  <input required value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-amber-400/50 focus:outline-none transition"
                    placeholder="Jose da Silva" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">E-mail</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-amber-400/50 focus:outline-none transition"
                    placeholder="jose@empresa.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Empresa / Organizacao</label>
                  <input required value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-amber-400/50 focus:outline-none transition"
                    placeholder="Nome da empresa" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Nome do evento</label>
                  <input value={form.evento} onChange={e => setForm({ ...form, evento: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-amber-400/50 focus:outline-none transition"
                    placeholder="Convencao de Vendas 2026" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Tema de interesse</label>
                <select value={form.tema} onChange={e => setForm({ ...form, tema: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-amber-400/50 focus:outline-none transition appearance-none">
                  <option value="" className="bg-black">Selecione um tema</option>
                  {temas.map((t, i) => <option key={i} value={t.titulo} className="bg-black">{t.titulo}</option>)}
                  <option value="Personalizada" className="bg-black">Palestra personalizada</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Detalhes do evento</label>
                <textarea rows={4} value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-amber-400/50 focus:outline-none transition resize-none"
                  placeholder="Data, local, numero de participantes, objetivos..." />
              </div>
              <button type="submit"
                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-100 transition text-sm flex items-center justify-center gap-2">
                <Mic size={18} />
                Solicitar Proposta
              </button>
              <p className="text-center text-xs text-gray-600">Retorno em ate 24h uteis</p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-white/80">Jose Felipe Carneiro</p>
            <p className="text-xs text-gray-600">Empreendedor, mentor e palestrante</p>
          </div>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="https://www.qualmeuvaluation.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Valuation Pro</a>
            <a href="https://instagram.com/josefelipec" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
            <a href="mailto:jose.felipe@dmt.ag" className="hover:text-white transition">jose.felipe@dmt.ag</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
