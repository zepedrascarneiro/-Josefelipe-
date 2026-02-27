import { useState } from 'react'
import { Send, Mail, MapPin, Instagram } from 'lucide-react'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [ok, setOk] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = e => {
    e.preventDefault()
    setOk(true)
    setForm({ nome: '', email: '', assunto: '', mensagem: '' })
  }

  return (
    <section id="contato" className="py-28 bg-[#F4F1EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">Vamos Conversar</p>
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <h2 className="section-title">
              Bora<br /><em className="not-italic text-[#C9A84C]">Falar?</em>
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              Preencha o formulário com suas sugestões, ideias ou dúvidas e, em breve,
              farei contato para te ouvir.
            </p>
          </div>
          <div className="gold-line" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Info contato */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: <Mail size={18} className="text-[#C9A84C]" />,
                label: 'E-mail',
                val: 'contato@josefelipe.com.br',
                href: 'mailto:contato@josefelipe.com.br',
              },
              {
                icon: <Instagram size={18} className="text-[#C9A84C]" />,
                label: 'Instagram',
                val: '@josefelipec',
                href: 'https://instagram.com/josefelipec',
              },
              {
                icon: <MapPin size={18} className="text-[#C9A84C]" />,
                label: 'Localização',
                val: 'Belo Horizonte, MG',
                href: null,
              },
            ].map(c => (
              <div key={c.label} className="flex items-start gap-4 bg-white border border-[#E8E3DA] rounded-2xl p-5 card-lift">
                <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-[#9A9A9A] uppercase tracking-widest font-medium mb-1">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer"
                       className="text-[#111] font-medium text-sm hover:text-[#C9A84C] transition-colors">
                      {c.val}
                    </a>
                  ) : (
                    <p className="text-[#111] font-medium text-sm">{c.val}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Frase motivacional */}
            <div
              className="rounded-2xl p-7 mt-4"
              style={{ background: 'linear-gradient(135deg, #111 0%, #1a1508 100%)' }}
            >
              <p
                className="text-white font-bold text-xl leading-snug mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                "A coragem de se mover é o começo de tudo."
              </p>
              <p className="text-white/40 text-sm">— José Felipe Carneiro</p>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-3 bg-white border border-[#E8E3DA] rounded-2xl p-8 md:p-10">
            {ok ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-2">
                  <Send size={28} className="text-[#C9A84C]" />
                </div>
                <h3 className="text-[#111] font-bold text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Mensagem Enviada!
                </h3>
                <p className="text-[#6B6B6B]">Obrigado! Entrarei em contato em breve.</p>
                <button onClick={() => setOk(false)} className="btn-outline mt-4">
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-[#444] uppercase tracking-wide block mb-2">
                      Nome
                    </label>
                    <input
                      className="input"
                      placeholder="Seu nome"
                      value={form.nome}
                      onChange={e => set('nome', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#444] uppercase tracking-wide block mb-2">
                      E-mail
                    </label>
                    <input
                      className="input"
                      type="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#444] uppercase tracking-wide block mb-2">
                    Assunto
                  </label>
                  <input
                    className="input"
                    placeholder="Palestra, Mentoria, Curso, Parceria..."
                    value={form.assunto}
                    onChange={e => set('assunto', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#444] uppercase tracking-wide block mb-2">
                    Mensagem
                  </label>
                  <textarea
                    className="input resize-none"
                    rows={5}
                    placeholder="Conte-me um pouco sobre sua ideia..."
                    value={form.mensagem}
                    onChange={e => set('mensagem', e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
