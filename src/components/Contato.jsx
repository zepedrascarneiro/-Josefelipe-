import { useState } from 'react'
import { Send, Mail, MapPin, Instagram } from 'lucide-react'

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/zepedrascarneiro@gmail.com'

export default function Contato() {
  const [form, setForm]     = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nome:     form.nome,
          email:    form.email,
          assunto:  form.assunto || '(sem assunto)',
          mensagem: form.mensagem,
          _subject: `[josefelipe.com.br] ${form.assunto || 'Novo contato'} — ${form.nome}`,
          _replyto: form.email,
          _captcha: 'false',
          _template: 'box',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('ok')
        setForm({ nome: '', email: '', assunto: '', mensagem: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" className="pt-28 md:pt-56 pb-32 md:pb-64 bg-black text-white">
      <div className="max-w-xl mx-auto px-6 md:px-8">

        {/* Título */}
        <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6 text-center">
          VAMOS<br />CONVERSAR?
        </h2>
        <p className="text-gray-500 text-center mb-16">
          Palestra, parceria ou só trocar uma ideia. Manda aqui.
        </p>

        {/* Formulário limpo, sem caixa */}
        {status === 'ok' ? (
          <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
            <Send size={28} className="text-white" />
            <h3 className="text-white font-bold text-2xl">Mensagem Enviada!</h3>
            <p className="text-gray-500">Obrigado! Entrarei em contato em breve.</p>
            <button onClick={() => setStatus('idle')} className="btn-outline mt-4 border-white text-white hover:bg-white hover:text-black">
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">Nome</label>
                <input className="input bg-transparent border-gray-800 text-white placeholder-gray-600 focus:border-white" placeholder="Seu nome" value={form.nome} onChange={e => set('nome', e.target.value)} required disabled={status === 'sending'} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">E-mail</label>
                <input className="input bg-transparent border-gray-800 text-white placeholder-gray-600 focus:border-white" type="email" placeholder="seu@email.com" value={form.email} onChange={e => set('email', e.target.value)} required disabled={status === 'sending'} />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">Assunto</label>
              <input className="input bg-transparent border-gray-800 text-white placeholder-gray-600 focus:border-white" placeholder="Palestra, Mentoria, Parceria..." value={form.assunto} onChange={e => set('assunto', e.target.value)} disabled={status === 'sending'} />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">Mensagem</label>
              <textarea className="input bg-transparent border-gray-800 text-white placeholder-gray-600 focus:border-white resize-none" rows={5} placeholder="Conte-me um pouco sobre sua ideia..." value={form.mensagem} onChange={e => set('mensagem', e.target.value)} required disabled={status === 'sending'} />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-400">
                Erro ao enviar. Tente por{' '}
                <a href={`mailto:contato@josefelipe.com.br?subject=${encodeURIComponent(form.assunto || 'Contato')}`} className="underline">e-mail direto</a>.
              </p>
            )}

            <button
              type="submit"
              className="btn-primary w-full justify-center bg-white text-black hover:bg-gray-200"
              disabled={status === 'sending'}
              style={{ opacity: status === 'sending' ? 0.6 : 1 }}
            >
              <Send size={16} />
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        )}

        {/* Contato direto — discreto */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20 pt-12 border-t border-gray-800">
          <a href="mailto:contato@josefelipe.com.br" className="text-sm text-gray-500 hover:text-white transition-colors">
            contato@josefelipe.com.br
          </a>
          <span className="hidden sm:inline text-gray-700">·</span>
          <a href="https://instagram.com/josefelipec" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
            @josefelipec
          </a>
          <span className="hidden sm:inline text-gray-700">·</span>
          <span className="text-sm text-gray-600">Belo Horizonte, MG</span>
        </div>

      </div>
    </section>
  )
}
