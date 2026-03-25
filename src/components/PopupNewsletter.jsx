import { useState, useEffect } from 'react'
import { X, ShoppingCart, Star } from 'lucide-react'

export default function PopupNewsletter() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('popup-shown')) return
    const t = setTimeout(() => { setShow(true); sessionStorage.setItem('popup-shown', '1') }, 3500)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={() => setShow(false)}
    >
      <div
        className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl bg-black text-white"
        style={{ animation: 'fadeInUp 0.4s ease' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Fechar */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 z-10 text-gray-600 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Capa do livro — destaque visual */}
        <div className="relative px-6 pt-10 pb-6 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
          <img
            src="/livro-capa.jpg"
            alt="Capa do Livro Performance Consciente"
            className="w-44 rounded-lg shadow-[0_25px_50px_rgba(0,0,0,0.6)] relative z-10"
          />
        </div>

        {/* Conteúdo */}
        <div className="px-6 pb-8 text-center">
          {/* Estrelas + best-seller */}
          <div className="flex items-center justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-[11px] text-amber-400/80 font-semibold uppercase tracking-widest mb-5">
            Novo Lançamento
          </p>

          {/* Headline vendedora */}
          <h3 className="text-xl font-extrabold tracking-tight leading-tight mb-3">
            Pare de produzir no automático.<br />
            <span className="text-gray-400">Comece a performar com consciência.</span>
          </h3>

          <p className="text-gray-500 text-xs leading-relaxed mb-6">
            O livro que José Felipe escreveu depois de fundar a cervejaria mais premiada do mundo e operar em 30+ países. Não é teoria — é o que funcionou.
          </p>

          {/* CTA principal */}
          <a
            href="https://a.co/d/0fV9dTgl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ShoppingCart size={16} />
            Garantir Meu Exemplar
          </a>

          <p className="text-[11px] text-gray-600 mt-3">
            Disponível na Amazon &middot; Entrega para todo o Brasil
          </p>

          <button
            onClick={() => setShow(false)}
            className="w-full text-center text-xs text-gray-600 mt-5 hover:text-gray-400 transition-colors"
          >
            Continuar navegando
          </button>
        </div>
      </div>
    </div>
  )
}
