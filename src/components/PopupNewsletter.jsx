import { useState, useEffect } from 'react'
import { X, ArrowRight } from 'lucide-react'

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
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/85"
      onClick={() => setShow(false)}
    >
      <div
        className="relative w-full max-w-xs overflow-hidden rounded-xl"
        style={{ animation: 'fadeInUp 0.5s ease' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Fechar — discreto */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 z-20 w-7 h-7 flex items-center justify-center rounded-full bg-black/40 text-white/50 hover:text-white transition-colors"
        >
          <X size={14} />
        </button>

        {/* Capa do livro — full width, protagonista */}
        <img
          src="/livro-capa.jpg"
          alt="Performance Consciente — José Felipe Carneiro"
          className="w-full"
        />

        {/* Barra inferior — mínima, elegante */}
        <div className="bg-[#1a1710] px-5 py-5">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9a84c] font-semibold mb-2">
            7 pilares da alta performance
          </p>
          <p className="text-white/60 text-xs leading-relaxed mb-5">
            O novo livro de José Felipe Carneiro.
          </p>
          <a
            href="https://a.co/d/0fV9dTgl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#c9a84c] text-black font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#d4b55a] transition-colors"
          >
            Garantir Meu Exemplar
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
