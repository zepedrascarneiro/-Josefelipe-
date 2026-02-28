import { useState } from 'react'
import { Send, Mail, MapPin, Instagram, ArrowRight } from 'lucide-react'

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
    <section id="contato" className="py-28 bg-black text-white">
      <div className="max-w-5xl mx-auto px-12 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Lado esquerdo */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight mb-6">
                VAMOS<br />CONVERSAR?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-12 max-w-sm">
                Quer levar uma palestra para seu evento, fechar uma parceria ou só trocar uma ideia? Manda uma mensagem.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:contato@josefelipe.com.br"
                 className="flex items-center gap-4 group">
                <div className="w-11 h-11 border border-gray-700 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold group-hover:underline">contato@josefelipe.com.br</p>
                </div>
              </a>

              <a href="https://instagram.com/josefelipec" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-4 group">
                <div className="w-11 h-11 border border-gray-700 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Instagram size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold group-hover:underline">@josefelipec</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 border border-gray-700 rounded-full flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Belo Horizonte, MG</p>
                </div>
              </div>

              <div className="pt-8 mt-2 border-t border-gray-800">
                <p className="text-lg font-bold leading-snug italic text-gray-300">
                  "A coragem de se mover é o começo de tudo."
                </p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-[#111111] text-white border border-gray-800 rounded-2xl p-8 md:p-10">
            {ok ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <Send size={28} className="text-white" />
                <h3 className="text-white font-bold text-2xl">Mensagem Enviada!</h3>
                <p className="text-gray-500">Obrigado! Entrarei em contato em breve.</p>
                <button onClick={() => setOk(false)} className="btn-outline mt-4 border-white text-white hover:bg-white hover:text-black">
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Nome</label>
                    <input className="input bg-transparent border-gray-700 text-white placeholder-gray-500 focus:border-white" placeholder="Seu nome" value={form.nome} onChange={e => set('nome', e.target.value)} required />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">E-mail</label>
                    <input className="input bg-transparent border-gray-700 text-white placeholder-gray-500 focus:border-white" type="email" placeholder="seu@email.com" value={form.email} onChange={e => set('email', e.target.value)} required />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Assunto</label>
                  <input className="input bg-transparent border-gray-700 text-white placeholder-gray-500 focus:border-white" placeholder="Palestra, Mentoria, Curso, Parceria..." value={form.assunto} onChange={e => set('assunto', e.target.value)} />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Mensagem</label>
                  <textarea className="input bg-transparent border-gray-700 text-white placeholder-gray-500 focus:border-white resize-none" rows={5} placeholder="Conte-me um pouco sobre sua ideia..." value={form.mensagem} onChange={e => set('mensagem', e.target.value)} required />
                </div>
                <button type="submit" className="btn-primary w-full justify-center bg-white text-black hover:bg-gray-200">
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
