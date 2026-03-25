import { Mic, FileText, ArrowDownToLine } from 'lucide-react'

const palestras = [
  {
    titulo: 'Apresentação Geral',
    descricao: 'A trajetória completa, os aprendizados e como levar alta performance para qualquer equipe.',
    arquivo: '/palestra-geral.pdf',
  },
  {
    titulo: 'Apresentação Agro',
    descricao: 'Performance e inovação aplicadas ao agronegócio. Do campo ao mercado global.',
    arquivo: '/palestra-agro.pdf',
  },
]

export default function Palestras() {
  return (
    <section id="palestras" className="py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] tracking-tight mb-6">
            PALESTRAS
          </h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            José Felipe leva ao palco a energia, a vivência e as estratégias de quem construiu negócios do zero e transformou paixão em resultados reais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {palestras.map(p => (
            <a
              key={p.arquivo}
              href={p.arquivo}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-200 rounded-xl p-8 hover:border-gray-400 transition-colors flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="font-bold text-black mb-1">{p.titulo}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.descricao}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-auto pt-4 text-sm font-semibold text-gray-400 group-hover:text-black transition-colors">
                <ArrowDownToLine size={14} />
                Ver apresentação (PDF)
              </div>
            </a>
          ))}
        </div>

        <div className="border border-gray-200 rounded-xl p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-6">
            Leve essa energia para seu evento
          </h3>
          <a
            href="#contato"
            onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mic size={16} />
            Quero Contratar uma Palestra
          </a>
        </div>
      </div>
    </section>
  )
}
