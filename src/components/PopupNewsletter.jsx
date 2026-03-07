import { useState, useEffect } from 'react'
import { X, Send, Sparkles } from 'lucide-react'

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/zepedrascarneiro@gmail.com'

export default function PopupNewsletter() {
  const [show, setShow]     = useState(false)
  const [form, setForm]     = useState({ nome: '', email: '', telefone: '', instagram: '' })
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  useEffect(() => {
    if (sessionStorage.getItem('popup-shown')) return
    const t = setTimeout(() => { setShow(true); sessionStorage.setItem('popup-shown', '1') }, 3500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (status === 'ok') {
      const t = setTimeout(() => setShow(false), 2500)
      return () => clearTimeout(t)
    }
  }, [status])

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.nome || !form.email) return

    setStatus('sending')
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nome:      form.nome,
          email:     form.email,
          telefone:  form.telefone || '—',
          instagram: form.instagram || '—',
          tipo:      'Popup Newsletter',
          _subject:  `[josefelipe.com.br] Novo lead do popup — ${form.nome}`,
          _replyto:  form.email,
          _captcha:  'false',
          _template: 'box',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('ok')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
        style={{ animation: 'fadeInUp 0.4s ease' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Topo preto */}
        <div className="bg-black text-white px-8 pt-10 pb-8 text-center">
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          >
            <X size={22} />
          </button>

          <Sparkles size={32} className="mx-auto mb-4 text-white" />
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">
            Faça parte dos<br />meus planos!
          </h3>
          <p className="text-sm text-gray-400">
            Receba conteúdos exclusivos e novidades em primeira mão.
          </p>
        </div>

        {/* Corpo branco */}
        <div className="bg-white px-8 pb-8 pt-6">
          {status === 'ok' ? (
            <div className="text-center py-10">
              <Send size={28} className="mx-auto text-black mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Bem-vindo(a)!</h3>
              <p className="text-gray-500 text-sm">Em breve você receberá novidades.</p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  className="input"
                  placeholder="Seu nome *"
                  value={form.nome}
                  onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                  required
                  disabled={status === 'sending'}
                />
                <input
                  className="input"
                  type="email"
                  placeholder="Seu e-mail *"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                  disabled={status === 'sending'}
                />
                <input
                  className="input"
                  placeholder="Telefone (opcional)"
                  value={form.telefone}
                  onChange={e => setForm(f => ({ ...f, telefone: e.target.value }))}
                  disabled={status === 'sending'}
                />
                <input
                  className="input"
                  placeholder="Instagram (opcional)"
                  value={form.instagram}
                  onChange={e => setForm(f => ({ ...f, instagram: e.target.value }))}
                  disabled={status === 'sending'}
                />

                {status === 'error' && (
                  <p className="text-sm text-red-500">Erro ao enviar. Tente novamente.</p>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full justify-center mt-2"
                  disabled={status === 'sending'}
                  style={{ opacity: status === 'sending' ? 0.6 : 1 }}
                >
                  <Send size={15} />
                  {status === 'sending' ? 'Enviando...' : 'Quero Participar'}
                </button>
              </form>
              <button
                onClick={() => setShow(false)}
                className="w-full text-center text-sm text-gray-400 mt-4 hover:text-black transition-colors"
              >
                Agora não
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
