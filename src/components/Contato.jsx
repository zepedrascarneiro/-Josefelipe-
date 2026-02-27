import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    // Simulação — substitua por integração real
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contato" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#C9A84C] uppercase tracking-[0.25em] text-sm font-medium mb-3">
            Vamos Conversar
          </p>
          <h2 className="section-title">Entre em Contato</h2>
          <div className="gold-line mx-auto" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Interessado em palestras, mentorias ou parcerias? Vamos construir algo extraordinário juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Mail,    label: 'E-mail',    value: 'contato@josefelipe.com.br', href: 'mailto:contato@josefelipe.com.br' },
              { icon: Phone,   label: 'WhatsApp',  value: '+55 (31) 99999-9999', href: 'https://wa.me/5531999999999' },
              { icon: MapPin,  label: 'Localização', value: 'Belo Horizonte, MG', href: null },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4 bg-[#0A0A0A] border border-[#222] rounded-xl p-5">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon size={18} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="text-white font-medium hover:text-[#C9A84C] transition-colors">{item.value}</a>
                    : <p className="text-white font-medium">{item.value}</p>
                  }
                </div>
              </div>
            ))}

            {/* Redes sociais */}
            <div className="bg-[#0A0A0A] border border-[#222] rounded-xl p-5">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Redes Sociais</p>
              <div className="flex gap-3">
                {[
                  { label: 'Instagram', href: 'https://instagram.com/josefelipec' },
                  { label: 'LinkedIn',  href: 'https://linkedin.com/in/josefelipecarneiro' },
                  { label: 'YouTube',   href: '#' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-2 border border-[#333] rounded-md text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Nome *</label>
                <input name="nome" value={form.nome} onChange={handleChange} required placeholder="Seu nome completo" className="input" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">E-mail *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="seu@email.com" className="input" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Telefone</label>
                <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="+55 (11) 9 9999-9999" className="input" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Assunto *</label>
                <select name="assunto" value={form.assunto} onChange={handleChange} required className="input">
                  <option value="">Selecione...</option>
                  <option value="palestra">Palestra</option>
                  <option value="mentoria">Mentoria</option>
                  <option value="curso">Curso A Arte dos Negócios</option>
                  <option value="livro">Livro</option>
                  <option value="parceria">Parceria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Mensagem *</label>
              <textarea
                name="mensagem" value={form.mensagem} onChange={handleChange} required
                rows={5} placeholder="Conte mais sobre o que você precisa..."
                className="input resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
              {status === 'success' && '✅ Mensagem enviada!'}
              {status === 'error'   && '❌ Erro — tente novamente'}
              {status === 'idle'    && <><Send size={18} /> Enviar Mensagem</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
