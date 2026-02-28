import { ArrowRight } from 'lucide-react'

const artigos = [
  {
    categoria: 'Performance',
    titulo: 'Lições de Performance Criativa',
    desc: 'Alta performance é mais do que disciplina, é sobre unir criatividade, execução e clareza.',
    data: '10/06/2025',
  },
  {
    categoria: 'Mindset',
    titulo: 'Transformando Erros em Princípios',
    desc: 'Meus maiores avanços vieram dos erros. O segredo: entender cada falha e transformá-la em princípio.',
    data: '01/06/2025',
  },
  {
    categoria: 'Disciplina',
    titulo: 'Disciplina é Liberdade',
    desc: 'A disciplina não tira sua liberdade, ela cria. Quando você domina sua rotina, abre espaço para criar.',
    data: '25/05/2025',
  },
  {
    categoria: 'Negócios',
    titulo: 'Empresas de Alta Performance',
    desc: 'Alta performance não nasce do acaso. É fruto de cultura forte, processos claros e liderança com visão.',
    data: '18/05/2025',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest mb-4">
              Reflexões e Práticas
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] tracking-tight">
              BLOG DO ZÉ
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-gray-400 hover:text-black transition-colors flex items-center gap-2 uppercase tracking-wider">
            Ver todos <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artigos.map(a => (
            <article
              key={a.titulo}
              className="group cursor-pointer border-t-2 border-gray-200 pt-6 hover:border-black transition-colors"
            >
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                {a.categoria} · {a.data}
              </p>
              <h3 className="text-lg font-bold text-black mb-3 group-hover:translate-x-1 transition-transform leading-snug">
                {a.titulo}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {a.desc}
              </p>
              <span className="text-sm font-semibold text-black flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wider">
                Ler <ArrowRight size={13} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
