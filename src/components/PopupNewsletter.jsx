import { useState, useEffect } from 'react'
import { X, Loader2 } from 'lucide-react'

export default function PopupNewsletter() {
  const [open, setOpen]     = useState(false)
  const [form, setForm]     = useState({ nome: '', email: '', telefone: '', instagram: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (!sessionStorage.getItem('jfc_popup')) {
      const timer = setTimeout(() => {
        sessionStorage.setItem('jfc_popup', 'shown')
        setOpen(true)
      }, 3500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
    setTimeout(() => setOpen(false), 2500)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Newsletter José Felipe Carneiro"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Painel */}
      <div className="relative z-10 w-full max-w-md bg-[#111] border border-[#C9A84C]/30 rounded-2xl p-8 shadow-2xl animate-fade-in-up">

        {/* Fechar */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Fechar popup"
        >
          <X size={20} />
        </button>

        {/* Linha dourada topo */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

        {status === 'success' ? (
          <div className="text-center py-4">
            <p className="text-4xl mb-4">🎉</p>
            <h3 className="text-xl font-bold text-[#C9A84C] mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Bem-vindo ao time!
            </h3>
            <p className="text-gray-400 text-sm">Fique de olho no seu e-mail.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Faça parte dos meus planos!
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Tô feliz que chegou até aqui. Se cadastra e eu te mando conteúdos exclusivos. 🤝
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="nome"
                value={form.nome}
                onChange={e => setForm(p => ({ ...p, nome: e.target.value }))}
                placeholder="Nome"
                className="input text-sm"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                placeholder="E-mail *"
                required
                className="input text-sm"
              />
              <input
                name="telefone"
                value={form.telefone}
                onChange={e => setForm(p => ({ ...p, telefone: e.target.value }))}
                placeholder="Telefone"
                className="input text-sm"
              />
              <input
                name="instagram"
                value={form.instagram}
                onChange={e => setForm(p => ({ ...p, instagram: e.target.value }))}
                placeholder="@Instagram"
                className="input text-sm"
              />

              <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center mt-2">
                {status === 'loading'
                  ? <Loader2 size={16} className="animate-spin" />
                  : 'Cadastrar'}
              </button>
            </form>

            <button
              onClick={() => setOpen(false)}
              className="w-full text-center text-gray-600 text-xs mt-4 hover:text-gray-400 transition-colors"
            >
              Pular por agora
            </button>
          </>
        )}
      </div>
    </div>
  )
}
