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
    <section className="py-20 bg-[#111]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <p className="section-label text-[#C9A84C] mb-4">Fique por Dentro</p>
        <h2
          className="font-bold text-white leading-tight mb-4"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Newsletter do Zé
        </h2>
        <p className="text-white/50 mb-10 text-base max-w-xl mx-auto leading-relaxed">
          Insights sobre empreendedorismo, alta performance e negócios que impactam —
          direto na sua caixa de entrada.
        </p>

        {ok ? (
          <div className="flex items-center justify-center gap-3 text-[#C9A84C] font-semibold text-lg">
            <div className="w-10 h-10 bg-[#C9A84C]/15 rounded-full flex items-center justify-center">
              <Check size={20} />
            </div>
            Você está dentro! Até a próxima edição 🙌
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                padding: '0.85rem 1.2rem',
                background: 'rgba(255,255,255,0.07)',
                border: '1.5px solid rgba(255,255,255,0.12)',
                borderRadius: '2rem',
                color: '#fff',
                outline: 'none',
                fontSize: '0.9rem',
                fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => { e.currentTarget.style.borderColor = '#C9A84C' }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
            />
            <button type="submit" className="btn-gold shrink-0">
              <Send size={15} />
              Inscrever
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
