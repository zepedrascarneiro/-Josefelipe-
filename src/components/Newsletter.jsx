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
    <section className="py-24 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] relative overflow-hidden">
      {/* Pattern decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <p className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-[#0A0A0A]/60 mb-4">Fique por Dentro</p>
        <h2
          className="font-bold text-[#0A0A0A] leading-tight mb-4"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Newsletter do Z&eacute;
        </h2>
        <p className="text-[#0A0A0A]/60 mb-10 text-base max-w-xl mx-auto leading-relaxed">
          Insights sobre empreendedorismo, alta performance e neg&oacute;cios que impactam &mdash;
          direto na sua caixa de entrada.
        </p>

        {ok ? (
          <div className="flex items-center justify-center gap-3 text-[#0A0A0A] font-semibold text-lg">
            <div className="w-10 h-10 bg-[#0A0A0A]/10 rounded-full flex items-center justify-center">
              <Check size={20} />
            </div>
            Voc&ecirc; est&aacute; dentro! At&eacute; a pr&oacute;xima edi&ccedil;&atilde;o
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3.5 bg-[#0A0A0A]/10 border border-[#0A0A0A]/20 rounded-lg text-[#0A0A0A] placeholder-[#0A0A0A]/40 outline-none focus:border-[#0A0A0A]/50 transition-colors text-sm"
            />
            <button type="submit" className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0A0A0A] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#1A1A1A] transition-all">
              <Send size={15} />
              Inscrever
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
