import { ArrowRight, Calendar } from 'lucide-react'

const artigos = [
  {
    img: 'https://zxxoolda.manus.space/assets/blog_performance_consciente-ODLchLET.jpg',
    categoria: 'Performance',
    titulo: 'O Que é Performance Consciente?',
    desc: 'Descubra como a Performance Consciente pode revolucionar sua abordagem aos negócios.',
    data: 'Jan 2025',
  },
  {
    img: 'https://zxxoolda.manus.space/assets/blog_lideranca-DDp_3AQO.jpg',
    categoria: 'Liderança',
    titulo: 'Liderança na Era Digital',
    desc: 'Como adaptar seu estilo de liderança para prosperar no mundo digital em constante transformação.',
    data: 'Dez 2024',
  },
  {
    img: 'https://zxxoolda.manus.space/assets/blog_sustentabilidade-DSZyw7Di.jpg',
    categoria: 'Negócios',
    titulo: 'Sustentabilidade como Vantagem',
    desc: 'Como transformar práticas sustentáveis em diferencial competitivo e impulsionar resultados.',
    data: 'Nov 2024',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#C9A84C] uppercase tracking-[0.25em] text-sm font-medium mb-3">
              Conteúdo Gratuito
            </p>
            <h2 className="section-title mb-2">Últimos Artigos</h2>
            <div className="gold-line" />
          </div>
          <a href="#" className="text-[#C9A84C] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
            Ver todos os artigos <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {artigos.map(a => (
            <article
              key={a.titulo}
              className="bg-[#111] border border-[#222] rounded-2xl overflow-hidden hover:border-[#C9A84C]/30 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={a.img}
                  alt={a.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#C9A84C] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {a.categoria}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                  <Calendar size={12} />
                  {a.data}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#C9A84C] transition-colors"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  {a.titulo}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{a.desc}</p>
                <span className="text-[#C9A84C] text-sm font-medium flex items-center gap-1 group-hover:gap-3 transition-all">
                  Leia Mais <ArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
