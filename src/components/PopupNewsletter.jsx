import { useState, useEffect } from 'react'
import { X, BookOpen, Star } from 'lucide-react'

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
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={() => setShow(false)}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl bg-white"
        style={{ animation: 'fadeInUp 0.4s ease' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Fechar */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-black transition-colors"
        >
          <X size={22} />
        </button>

        {/* Capa do livro */}
        <div className="bg-gradient-to-b from-black via-neutral-900 to-neutral-800 px-8 pt-10 pb-8 flex flex-col items-center">
          <img
            src="/livro-capa.jpg"
            alt="Capa do Livro Performance Consciente"
            className="w-48 rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.5)] -mb-14 relative z-10"
          />
        </div>

        {/* Conteúdo */}
        <div className="px-8 pt-18 pb-8 text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-3 tracking-tight leading-tight">
            Performance<br />Consciente
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Faça mais com presença, intenção e domínio.<br />
            O novo livro de José Felipe Carneiro já está disponível.
          </p>

          <a
            href="https://a.co/d/0fV9dTgl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
          >
            <BookOpen size={16} />
            Quero Minha Edição
          </a>

          <button
            onClick={() => setShow(false)}
            className="w-full text-center text-sm text-gray-400 mt-4 hover:text-black transition-colors"
          >
            Agora não
          </button>
        </div>
      </div>
    </div>
  )
}
