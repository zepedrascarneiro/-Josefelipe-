import { useState, useEffect } from 'react'
import { X, Send } from 'lucide-react'

export default function PopupNewsletter() {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', instagram: '' })
  const [ok, setOk] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('jfc_popup')) return
    const t = setTimeout(() => setShow(true), 3500)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    sessionStorage.setItem('jfc_popup', '1')
    setShow(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setOk(true)
    setTimeout(close, 2500)
  }

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={e => { if (e.target === e.currentTarget) close() }}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Topo colorido */}
        <div
          className="px-8 pt-8 pb-6 text-center"
          style={{ background: 'linear-gradient(135deg, #111 0%, #1e1a10 100%)' }}
        >
          <p className="text-xs text-[#C9A84C] uppercase tracking-[0.2em] font-semibold mb-3">
            Exclusivo
          </p>
          <h3
            className="text-white font-bold text-2xl leading-snug"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Faça parte dos<br />
            <em className="not-italic text-[#C9A84C]">meus planos!</em>
          </h3>
          <p className="text-white/50 text-sm mt-3 leading-relaxed">
            Receba insights exclusivos sobre empreendedorismo,<br />performance e negócios.
          </p>
        </div>

        {/* Formulário */}
        <div className="p-8">
          {ok ? (
            <div className="text-center py-6">
              <p className="text-[#C9A84C] text-3xl mb-3">🎉</p>
              <p className="text-[#111] font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                Bem-vindo(a)!
              </p>
              <p className="text-[#6B6B6B] text-sm mt-2">Em breve você receberá novidades.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { k: 'nome',      placeholder: 'Seu nome', type: 'text', req: true },
                { k: 'email',     placeholder: 'Seu e-mail', type: 'email', req: true },
                { k: 'telefone',  placeholder: 'Telefone / WhatsApp', type: 'tel', req: false },
                { k: 'instagram', placeholder: '@seuinstagram', type: 'text', req: false },
              ].map(f => (
                <input
                  key={f.k}
                  className="input"
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.k]}
                  onChange={e => setForm(p => ({ ...p, [f.k]: e.target.value }))}
                  required={f.req}
                />
              ))}
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={15} />
                Quero Fazer Parte
              </button>
              <button
                type="button"
                onClick={close}
                className="w-full text-sm text-[#9A9A9A] hover:text-[#444] transition-colors py-1"
              >
                Agora não
              </button>
            </form>
          )}
        </div>

        {/* Fechar */}
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
