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
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
      onClick={e => { if (e.target === e.currentTarget) close() }}
    >
      <div
        className="bg-[#161616] rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up border border-white/5 relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Topo */}
        <div className="px-8 pt-8 pb-6 text-center bg-gradient-to-br from-[#C9A84C]/15 to-transparent">
          <p className="text-[0.65rem] text-[#C9A84C] uppercase tracking-[0.25em] font-bold mb-3">
            Exclusivo
          </p>
          <h3
            className="text-white font-bold text-2xl leading-snug"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Fa&ccedil;a parte dos<br />
            <span className="text-[#C9A84C]">meus planos!</span>
          </h3>
          <p className="text-white/40 text-sm mt-3 leading-relaxed">
            Receba insights exclusivos sobre empreendedorismo,<br />performance e neg&oacute;cios.
          </p>
        </div>

        {/* Formulario */}
        <div className="p-8">
          {ok ? (
            <div className="text-center py-6">
              <p className="text-[#C9A84C] font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                Bem-vindo(a)!
              </p>
              <p className="text-white/40 text-sm mt-2">Em breve voc&ecirc; receber&aacute; novidades.</p>
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
              <button type="submit" className="btn-gold w-full justify-center">
                <Send size={15} />
                Quero Fazer Parte
              </button>
              <button
                type="button"
                onClick={close}
                className="w-full text-sm text-white/30 hover:text-white/60 transition-colors py-1"
              >
                Agora n&atilde;o
              </button>
            </form>
          )}
        </div>

        {/* Fechar */}
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white/30 hover:text-white hover:bg-white/5 transition-all"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
