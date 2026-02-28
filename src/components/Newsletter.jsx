import { useState } from 'react'
import { Send, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [ok, setOk] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (email) { setOk(true); setEmail('') }
  }

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 mb-4">
          Fique por Dentro
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight">
          NEWSLETTER DO ZÉ
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Insights sobre empreendedorismo, alta performance e negócios que impactam —
          direto na sua caixa de entrada.
        </p>

        {ok ? (
          <div className="flex items-center justify-center gap-3 text-white font-semibold text-lg">
            <Check size={20} />
            Você está dentro! Até a próxima edição
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3.5 bg-transparent border-2 border-gray-700 text-white placeholder-gray-600 outline-none focus:border-white transition-colors text-sm"
            />
            <button type="submit" className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-all">
              <Send size={15} />
              Inscrever
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
