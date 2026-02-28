import { ArrowRight, Calendar } from 'lucide-react'

const artigos = [
  {
    categoria: 'Performance',
    titulo: 'Li\u00e7\u00f5es de Performance Criativa',
    desc: 'Alta performance \u00e9 mais do que disciplina, \u00e9 sobre unir criatividade, execu\u00e7\u00e3o e clareza. Os pilares que aplico nos meus neg\u00f3cios.',
    data: '10/06/2025',
  },
  {
    categoria: 'Mindset',
    titulo: 'Transformando Erros em Princ\u00edpios',
    desc: 'Meus maiores avan\u00e7os vieram dos erros. O segredo: entender profundamente cada falha e transform\u00e1-la em um princ\u00edpio pr\u00e1tico.',
    data: '01/06/2025',
  },
  {
    categoria: 'Disciplina',
    titulo: 'Disciplina \u00e9 Liberdade',
    desc: 'A disciplina n\u00e3o tira sua liberdade, ela cria. Quando voc\u00ea domina sua rotina, abre espa\u00e7o para criar e performar no mais alto n\u00edvel.',
    data: '25/05/2025',
  },
  {
    categoria: 'Neg\u00f3cios',
    titulo: 'Como Construir Empresas de Alta Performance',
    desc: 'Alta performance n\u00e3o nasce do acaso. \u00c9 fruto de cultura forte, processos claros, disciplina operacional e lideran\u00e7a com vis\u00e3o.',
    data: '18/05/2025',
  },
  {
    categoria: 'Cultura',
    titulo: 'O Poder da Cultura nos Neg\u00f3cios',
    desc: 'Cultura n\u00e3o \u00e9 sobre frases na parede. \u00c9 sobre comportamento di\u00e1rio, alinhamento de valores e cria\u00e7\u00e3o de um ambiente de excel\u00eancia.',
    data: '10/05/2025',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-label mb-4">Reflex&otilde;es e Pr&aacute;ticas</p>
            <h2 className="section-title">
              Blog<br /><span className="text-[#C9A84C]">do Z&eacute;</span>
            </h2>
            <div className="gold-line" />
            <p className="text-white/40 text-sm max-w-sm">
              Li&ccedil;&otilde;es e pr&aacute;ticas que aplico no dia a dia como empreendedor, investidor e mentor.
            </p>
          </div>
          <a href="#" className="text-white/60 text-sm font-semibold flex items-center gap-2 hover:text-[#C9A84C] transition-colors shrink-0 uppercase tracking-wider">
            Ver todos os artigos <ArrowRight size={15} />
          </a>
        </div>

        {/* Artigo destaque */}
        <article className="group bg-[#161616] border border-white/5 rounded-xl overflow-hidden mb-6 flex flex-col md:flex-row card-lift cursor-pointer">
          <div
            className="md:w-2/5 min-h-[200px] flex items-center justify-center bg-gradient-to-br from-[#C9A84C]/10 to-[#0A0A0A]"
          >
            <span
              className="font-bold text-[#C9A84C] opacity-15 select-none"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: '7rem' }}
            >
              Z&eacute;
            </span>
          </div>
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#C9A84C] text-[#0A0A0A] text-[0.65rem] font-bold px-3 py-1 rounded uppercase tracking-wider">
                {artigos[0].categoria}
              </span>
              <span className="text-white/30 text-xs flex items-center gap-1">
                <Calendar size={11} /> {artigos[0].data}
              </span>
            </div>
            <h3
              className="text-white font-bold text-2xl md:text-3xl mb-3 group-hover:text-[#C9A84C] transition-colors"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {artigos[0].titulo}
            </h3>
            <p className="text-white/40 leading-relaxed mb-5">{artigos[0].desc}</p>
            <span className="text-[#C9A84C] text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-wider">
              Leia mais <ArrowRight size={14} />
            </span>
          </div>
        </article>

        {/* Demais artigos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {artigos.slice(1).map(a => (
            <article
              key={a.titulo}
              className="group bg-[#161616] border border-white/5 rounded-xl p-6 cursor-pointer card-lift"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#C9A84C] text-[0.65rem] font-bold uppercase tracking-wider">{a.categoria}</span>
                <span className="text-white/20 text-xs flex items-center gap-1">
                  <Calendar size={10} /> {a.data}
                </span>
              </div>
              <h3
                className="text-white text-base font-bold mb-2 group-hover:text-[#C9A84C] transition-colors leading-snug"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {a.titulo}
              </h3>
              <p className="text-white/30 text-xs leading-relaxed line-clamp-3">{a.desc}</p>
              <span className="mt-4 inline-flex text-[#C9A84C] text-xs font-semibold items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wider">
                Ler <ArrowRight size={12} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
