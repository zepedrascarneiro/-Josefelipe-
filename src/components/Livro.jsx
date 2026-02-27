import { BookOpen, Star, ArrowRight } from 'lucide-react'

const pilares = [
  'Mentalidade de Alto Desempenho',
  'Gestão de Energia e Foco',
  'Liderança Inspiradora',
  'Tomada de Decisão Estratégica',
  'Inovação Contínua',
  'Equilíbrio com Propósito',
  'Legado e Impacto',
]

export default function Livro() {
  return (
    <section id="livro" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#C9A84C] uppercase tracking-[0.25em] text-sm font-medium mb-3">
            Bestseller Nacional
          </p>
          <h2 className="section-title">Performance Consciente</h2>
          <div className="gold-line mx-auto" />
          <p className="text-gray-400 max-w-xl mx-auto">
            7 Pilares que definem a alta produtividade para qualquer área da vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Capa do livro */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Sombra / efeito 3D */}
              <div className="absolute top-4 left-4 w-full h-full bg-[#C9A84C]/20 rounded-lg" />
              <img
                src="https://zxxoolda.manus.space/assets/livro_performance_consciente-Dxo9Nzs4.jpg"
                alt="Livro Performance Consciente"
                className="relative z-10 w-72 md:w-80 rounded-lg shadow-2xl"
              />
            </div>

            {/* Stars */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0A0A0A] border border-[#C9A84C]/30 rounded-full px-6 py-2 flex items-center gap-2 z-20">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
              ))}
              <span className="text-sm text-gray-300 ml-1">5.0 · 2.300+ avaliações</span>
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <p className="text-gray-300 leading-relaxed mb-8">
              Em seu primeiro livro, José Felipe Carneiro revela os segredos por trás de sua
              trajetória extraordinária no mundo dos negócios.{' '}
              <span className="text-white font-semibold">"Performance Consciente"</span> não
              é apenas mais um livro sobre empreendedorismo — é um manifesto para uma
              nova era de liderança.
            </p>

            {/* Pilares */}
            <div className="space-y-3 mb-8">
              {pilares.map((pilar, i) => (
                <div key={pilar} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#C9A84C] text-black text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-300 text-sm">{pilar}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.amazon.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <BookOpen size={18} />
                Adquira o Livro
              </a>
              <a
                href="#"
                className="btn-outline"
              >
                <ArrowRight size={18} />
                Leia um Capítulo Grátis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
