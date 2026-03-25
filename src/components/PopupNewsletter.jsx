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
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 sm:p-6 bg-black/85"
      onClick={() => setShow(false)}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[#111] border border-gray-800/50 flex flex-col sm:flex-row"
        style={{ animation: 'fadeInUp 0.5s ease' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Fechar */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 z-20 text-gray-500 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        {/* Capa do livro — lado esquerdo */}
        <div className="sm:w-2/5 bg-black flex items-center justify-center p-6 sm:p-10">
          <img
            src="/livro-capa.jpg"
            alt="Performance Consciente por José Felipe Carneiro"
            className="w-40 sm:w-full max-w-[200px] rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Conteúdo — lado direito */}
        <div className="sm:w-3/5 px-6 py-8 sm:py-12 sm:pr-12 flex flex-col justify-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9a84c] font-semibold mb-4">
            Novo livro
          </p>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Produzir mais<br />
            <span className="text-gray-500">não é o caminho.</span>
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed mb-8">
            Os 7 pilares que separam quem rende de quem se esgota.
            Escrito por quem construiu negócios em mais de 30 países.
          </p>

          <a
            href="https://a.co/d/0fV9dTgl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-[#c9a84c] text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#d4b55a] transition-colors mb-4"
          >
            Garantir Meu Exemplar
            <ArrowRight size={15} />
          </a>

          <p className="text-[11px] text-gray-600 text-center">
            Disponível na Amazon · Entrega para todo o Brasil
          </p>
        </div>
      </div>
    </div>
  )
}
