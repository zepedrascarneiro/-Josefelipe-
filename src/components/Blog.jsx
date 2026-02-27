import { ArrowRight, Calendar } from 'lucide-react'

const artigos = [
  {
    categoria: 'Performance',
    titulo: 'Lições de Performance Criativa',
    desc: 'Alta performance é mais do que disciplina, é sobre unir criatividade, execução e clareza. Os pilares que aplico nos meus negócios.',
    data: '10/06/2025',
  },
  {
    categoria: 'Mindset',
    titulo: 'Transformando Erros em Princípios',
    desc: 'Meus maiores avanços vieram dos erros. O segredo: entender profundamente cada falha e transformá-la em um princípio prático.',
    data: '01/06/2025',
  },
  {
    categoria: 'Disciplina',
    titulo: 'Disciplina é Liberdade',
    desc: 'A disciplina não tira sua liberdade, ela cria. Quando você domina sua rotina, abre espaço para criar e performar no mais alto nível.',
    data: '25/05/2025',
  },
  {
    categoria: 'Negócios',
    titulo: 'Como Construir Empresas de Alta Performance',
    desc: 'Alta performance não nasce do acaso. É fruto de cultura forte, processos claros, disciplina operacional e liderança com visão.',
    data: '18/05/2025',
  },
  {
    categoria: 'Cultura',
    titulo: 'O Poder da Cultura nos Negócios',
    desc: 'Cultura não é sobre frases na parede. É sobre comportamento diário, alinhamento de valores e criação de um ambiente de excelência.',
    data: '10/05/2025',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-label mb-4">Reflexões e Práticas</p>
            <h2 className="section-title">
              Blog<br /><em className="not-italic text-[#C9A84C]">do Zé</em>
            </h2>
            <div className="gold-line" />
            <p className="text-[#6B6B6B] text-sm max-w-sm">
              Lições e práticas que aplico no dia a dia como empreendedor, investidor e mentor.
            </p>
          </div>
          <a href="#" className="text-[#111] text-sm font-semibold flex items-center gap-2 hover:text-[#C9A84C] transition-colors shrink-0">
            Ver todos os artigos <ArrowRight size={15} />
          </a>
        </div>

        {/* Artigo destaque */}
        <article className="group bg-white border border-[#E8E3DA] rounded-2xl overflow-hidden mb-6 flex flex-col md:flex-row card-lift cursor-pointer">
          <div
            className="md:w-2/5 min-h-[200px] flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #C9A84C18 0%, #F4F1EB 100%)' }}
          >
            <span
              className="font-bold text-[#C9A84C] opacity-20 select-none"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: '6rem' }}
            >
              Zé
            </span>
          </div>
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#C9A84C] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {artigos[0].categoria}
              </span>
              <span className="text-[#9A9A9A] text-xs flex items-center gap-1">
                <Calendar size={11} /> {artigos[0].data}
              </span>
            </div>
            <h3
              className="text-[#111] font-bold text-2xl md:text-3xl mb-3 group-hover:text-[#C9A84C] transition-colors"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {artigos[0].titulo}
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed mb-5">{artigos[0].desc}</p>
            <span className="text-[#C9A84C] text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
              Leia mais <ArrowRight size={14} />
            </span>
          </div>
        </article>

        {/* Demais artigos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {artigos.slice(1).map(a => (
            <article
              key={a.titulo}
              className="group bg-white border border-[#E8E3DA] rounded-2xl p-6 cursor-pointer card-lift"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-wide">{a.categoria}</span>
                <span className="text-[#C0BAB0] text-xs flex items-center gap-1">
                  <Calendar size={10} /> {a.data}
                </span>
              </div>
              <h3
                className="text-[#111] text-base font-bold mb-2 group-hover:text-[#C9A84C] transition-colors leading-snug"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {a.titulo}
              </h3>
              <p className="text-[#8A8A8A] text-xs leading-relaxed line-clamp-3">{a.desc}</p>
              <span className="mt-4 inline-flex text-[#C9A84C] text-xs font-semibold items-center gap-1 group-hover:gap-2 transition-all">
                Ler <ArrowRight size={12} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
