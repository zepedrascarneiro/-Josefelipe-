import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white pt-20">
      <div className="max-w-5xl mx-auto px-12 lg:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-black leading-[0.95] mb-6 tracking-tight">
              JOSÉ FELIPE
              <br />
              CARNEIRO
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
              Empreendedor, mentor, investidor e palestrante.
              Co-fundador da Cervejaria Wäls e da ZX Ventures (Ambev).
            </p>
            <button
              onClick={() => scrollTo('#sobre')}
              className="btn-primary"
            >
              Saiba Mais
            </button>
          </div>

          {/* Imagem */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://josefelipe.com.br/lovable-uploads/d08ef557-2a05-4a2c-a1a6-12bb07b532b7.png"
              alt="José Felipe Carneiro"
              className="w-full max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 hover:text-black transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
