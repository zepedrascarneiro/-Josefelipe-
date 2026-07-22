import { useState, useEffect } from 'react'
import { X, ArrowRight, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PopupNewsletter() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('popup-shown')) return
    const t = setTimeout(() => { setShow(true); sessionStorage.setItem('popup-shown', '1') }, 3500)
    return () => clearTimeout(t)
  }, [])

  // Esc fecha + trava o scroll do body enquanto o popup está aberto
  useEffect(() => {
    if (!show) return
    const onKey = e => { if (e.key === 'Escape') setShow(false) }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [show])

  if (!show) return null

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      onClick={() => setShow(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Livro Performance Consciente"
    >
      <motion.div
        className="relative w-full max-w-2xl overflow-hidden flex flex-col sm:flex-row border border-white/10"
        style={{ background: 'linear-gradient(135deg, #0c0c0c 0%, #161616 100%)' }}
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()}
      >
        {/* Fechar */}
        <button
          onClick={() => setShow(false)}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center border border-white/15 text-gray-400 hover:text-white hover:border-white/40 transition-colors"
        >
          <X size={16} />
        </button>

        {/* Capa do livro com brilho dourado atrás */}
        <div className="relative sm:w-2/5 flex items-center justify-center p-8 sm:p-10 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 45%, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0) 65%)' }}
          />
          {/* Selo Best Seller */}
          <span className="absolute top-5 left-5 z-10 flex items-center gap-1 bg-[#c9a84c] text-black text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1">
            <Star size={11} fill="currentColor" strokeWidth={0} /> Best Seller
          </span>
          <img
            src="/livro-capa.jpg"
            alt="Performance Consciente por José Felipe Carneiro"
            className="relative w-40 sm:w-full max-w-[190px] drop-shadow-[0_25px_55px_rgba(201,168,76,0.25)]"
          />
        </div>

        {/* Conteúdo — lado direito */}
        <div className="sm:w-3/5 px-7 py-8 sm:py-11 sm:pr-11 flex flex-col justify-center">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="h-px w-6 bg-[#c9a84c]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a84c] font-bold">
              Novo livro
            </p>
          </div>

          <h3 className="text-2xl sm:text-[1.9rem] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
            Produzir mais<br />
            <span className="text-gray-500">não é o caminho.</span>
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Os <strong className="text-white">7 pilares</strong> que separam quem rende de quem se esgota.
            De quem construiu a cervejaria mais premiada do mundo e negócios em diversos países.
          </p>

          <a
            href="https://a.co/d/0fV9dTgl"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full py-4 bg-[#c9a84c] text-black font-bold text-sm uppercase tracking-wider hover:bg-[#d4b55a] transition-colors"
          >
            Garantir meu exemplar
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>

          <div className="flex items-center justify-center gap-3 mt-4">
            <p className="text-[11px] text-gray-600">
              Amazon · Entrega para todo o Brasil
            </p>
            <span className="text-gray-700">·</span>
            <button
              onClick={() => setShow(false)}
              className="text-[11px] text-gray-500 hover:text-gray-300 transition-colors"
            >
              Agora não
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
