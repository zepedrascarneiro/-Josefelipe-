import { useState } from 'react'
import { Mail, X, Loader2 } from 'lucide-react'
import { useEffect } from 'react'

export default function Newsletter() {
  const [form, setForm]     = useState({ email: '', nome: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
  }

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-r from-[#0A0A0A] via-[#111] to-[#0A0A0A] border-y border-[#C9A84C]/20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-6">
          <Mail size={26} className="text-[#C9A84C]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}>
          Receba Conteúdo <span className="text-[#C9A84C]">Exclusivo</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Inscreva-se na minha newsletter semanal e receba insights sobre
          empreendedorismo e liderança diretamente no seu e-mail.
        </p>

        {status === 'success' ? (
          <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-xl p-6">
            <p className="text-[#C9A84C] text-lg font-semibold">🎉 Você está dentro!</p>
            <p className="text-gray-400 mt-1 text-sm">Fique de olho na sua caixa de entrada.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={form.nome}
              onChange={e => setForm(p => ({ ...p, nome: e.target.value }))}
              placeholder="Seu nome"
              className="input flex-1"
            />
            <input
              type="email"
              value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
              placeholder="Seu melhor e-mail *"
              required
              className="input flex-1"
            />
            <button type="submit" disabled={status === 'loading'} className="btn-primary whitespace-nowrap">
              {status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : 'Inscrever-se'}
            </button>
          </form>
        )}

        <p className="text-gray-600 text-xs mt-4">
          Sem spam. Cancele quando quiser.
        </p>
      </div>
    </section>
  )
}
