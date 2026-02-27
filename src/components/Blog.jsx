import { ArrowRight, Calendar } from 'lucide-react'

const artigos = [
  {
    categoria: 'Performance',
    titulo: 'Lições de Performance Criativa',
    desc: 'Alta performance é mais do que disciplina, é sobre unir criatividade, execução e clareza. Os pilares que aplico nos meus negócios: cultura forte, consistência, gestão de energia e inovação constante.',
    data: '10/06/2025',
  },
  {
    categoria: 'Mindset',
    titulo: 'Transformando Erros em Princípios',
    desc: 'Meus maiores avanços vieram dos erros. O segredo está em entender profundamente cada falha, refletir e transformá-la em um princípio prático para nunca mais repetir. Erro + Reflexão = Progresso.',
    data: '01/06/2025',
  },
  {
    categoria: 'Disciplina',
    titulo: 'Disciplina é Liberdade',
    desc: 'A disciplina não tira sua liberdade, ela cria. Quando você domina sua rotina, seus hábitos e sua execução, abre espaço para criar, inovar e performar no mais alto nível, todos os dias.',
    data: '25/05/2025',
  },
  {
    categoria: 'Negócios',
    titulo: 'Como Construir Empresas de Alta Performance',
    desc: 'Alta performance não nasce do acaso. É fruto de cultura forte, processos claros, disciplina operacional e liderança com visão. Os passos práticos que aplico em cada negócio que construí.',
    data: '18/05/2025',
  },
  {
    categoria: 'Cultura',
    titulo: 'O Poder da Cultura nos Negócios',
    desc: 'Cultura não é sobre frases na parede. É sobre comportamento diário, alinhamento de valores e criação de um ambiente onde a excelência é padrão. É isso que move empresas resilientes e vencedoras.',
    data: '10/05/2025',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#C9A84C] uppercase tracking-[0.25em] text-sm font-medium mb-3">
              Reflexões e Práticas
            </p>
            <h2 className="section-title mb-2">Blog do Zé</h2>
            <div className="gold-line" />
            <p className="text-gray-500 text-sm -mt-2">
              Lições e práticas que aplico no dia a dia como empreendedor, investidor e mentor.
            </p>
          </div>
          <a href="#" className="text-[#C9A84C] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
            Ver todos os artigos <ArrowRight size={16} />
          </a>
        </div>

        {/* Destaque (primeiro artigo grande) + grid dos demais */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Destaque */}
          <article className="bg-[#111] border border-[#222] rounded-2xl overflow-hidden hover:border-[#C9A84C]/30 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
            <div className="bg-gradient-to-br from-[#C9A84C]/20 to-[#111] h-40 flex items-center justify-center">
              <span className="text-[#C9A84C] text-5xl font-bold opacity-20" style={{ fontFamily: 'Playfair Display, serif' }}>Zé</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#C9A84C] text-black text-xs font-bold px-3 py-1 rounded-full uppercase">{artigos[0].categoria}</span>
                <span className="text-gray-500 text-xs flex items-center gap-1"><Calendar size={11} />{artigos[0].data}</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                {artigos[0].titulo}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{artigos[0].desc}</p>
              <span className="text-[#C9A84C] text-sm font-medium flex items-center gap-1 group-hover:gap-3 transition-all">
                Leia mais <ArrowRight size={14} />
              </span>
            </div>
          </article>

          {/* Demais artigos em coluna */}
          <div className="space-y-4">
            {artigos.slice(1).map(a => (
              <article
                key={a.titulo}
                className="bg-[#111] border border-[#222] rounded-xl p-5 hover:border-[#C9A84C]/30 transition-all duration-300 group cursor-pointer flex gap-4"
              >
                <div className="w-1 bg-[#C9A84C]/40 rounded-full flex-shrink-0 group-hover:bg-[#C9A84C] transition-colors" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-wide">{a.categoria}</span>
                    <span className="text-gray-600 text-xs flex items-center gap-1"><Calendar size={10} />{a.data}</span>
                  </div>
                  <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-[#C9A84C] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    {a.titulo}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{a.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
