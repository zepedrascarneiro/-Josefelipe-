import { useState, useEffect } from 'react'
import { Mic, ArrowRight, Check, Star, Users, Globe, Award } from 'lucide-react'

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
  { valor: '50+', label: 'Palestras realizadas', icon: Mic },
  { valor: '10k+', label: 'Pessoas impactadas', icon: Users },
  { valor: '6', label: 'Paises de atuacao', icon: Globe },
  { valor: '25+', label: 'Anos de experiencia', icon: Award },
]

const empresas = [
  'AB InBev', 'Ambev', 'Endeavor', 'FIEMG', 'SEBRAE',
  'Sicoob', 'XP Inc', 'Stone', 'Anglo American', 'PwC',
]

const depoimentos = [
  {
    texto: 'O Jose Felipe trouxe uma energia unica pro nosso evento. As pessoas saiam transformadas. Ja estamos agendando a proxima.',
    autor: 'Diretora de RH',
    empresa: 'Multinacional de bebidas',
  },
  {
    texto: 'Palestra mais elogiada do nosso congresso. Pratica, inspiradora e com historias reais que conectam com qualquer publico.',
    autor: 'Organizador do evento',
    empresa: 'Congresso Nacional do Agro',
  },
  {
    texto: 'Contratamos para nossa convencao de vendas e o resultado foi impressionante. Time saiu motivado e com ferramentas praticas.',
    autor: 'CEO',
    empresa: 'Rede de franquias',
  },
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
      <section style={sectionStyle} className="py-16 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {numeros.map((n, i) => (
            <div key={i} className="text-center">
              <n.icon size={24} className="mx-auto mb-3 text-amber-400" />
              <p className="text-3xl font-extrabold text-white">{n.valor}</p>
              <p className="text-xs text-gray-500 mt-1">{n.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Temas */}
      <section id="temas" style={sectionStyle} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-amber-400 tracking-widest mb-4">TEMAS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Palestras sob medida</h2>
          <p className="text-gray-500 mb-14 max-w-xl">Cada palestra e adaptada ao publico, ao setor e aos objetivos do evento. Escolha o tema que mais faz sentido.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {temas.map((t, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-8 hover:border-amber-400/30 transition group">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mic size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition">{t.titulo}</h3>
                    <p className="text-sm text-amber-400/60">{t.subtitulo}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{t.desc}</p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-gray-400">{t.ideal}</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-gray-400">{t.duracao}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empresas */}
      <section style={sectionStyle} className="py-16 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs text-gray-500 tracking-widest mb-8">QUEM JA CONTOU COM JOSE FELIPE</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {empresas.map((e, i) => (
              <span key={i} className="text-sm font-medium text-gray-400/60 hover:text-white transition">{e}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section style={sectionStyle} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-amber-400 tracking-widest mb-4">DEPOIMENTOS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-14">O que dizem os organizadores</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">"{d.texto}"</p>
                <div>
                  <p className="text-sm font-bold text-white">{d.autor}</p>
                  <p className="text-xs text-gray-500">{d.empresa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apresentacoes */}
      <section style={sectionStyle} className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-amber-400 tracking-widest mb-4">PREVIEW</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-14">Veja as apresentacoes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-bold text-white mb-3">Apresentacao Geral</p>
              <div className="w-full rounded-xl overflow-hidden border border-white/10" style={{ aspectRatio: '16/9' }}>
                <iframe src="/palestra-geral.pdf" title="Apresentacao Geral" className="w-full h-full" style={{ border: 'none' }} />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-white mb-3">Apresentacao Agro</p>
              <div className="w-full rounded-xl overflow-hidden border border-white/10" style={{ aspectRatio: '16/9' }}>
                <iframe src="/palestra-agro.pdf" title="Apresentacao Agro" className="w-full h-full" style={{ border: 'none' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section style={sectionStyle} className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-amber-400 tracking-widest mb-4">PROCESSO</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-14">Como contratar</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Escolha o tema', desc: 'Selecione o tema que mais se encaixa no seu evento ou peca uma palestra personalizada.' },
              { step: '02', title: 'Envie sua solicitacao', desc: 'Preencha o formulario abaixo com os detalhes do evento. Retorno em ate 24h.' },
              { step: '03', title: 'Receba a proposta', desc: 'Voce recebe uma proposta completa com valor, logistica e termos. Sem surpresas.' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-amber-400/10 text-amber-400 font-bold text-sm flex items-center justify-center mx-auto mb-4">{s.step}</div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
