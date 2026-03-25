import { Mic, ArrowRight, Users, Target, Zap, TrendingUp, FileText } from 'lucide-react'

const temas = [
  {
    icone: Target,
    titulo: 'Performance Consciente',
    desc: 'Como produzir no mais alto nível sem se destruir no processo.',
  },
  {
    icone: Zap,
    titulo: 'Empreendedorismo Real',
    desc: 'Da cervejaria familiar à operação em 30+ países. Sem filtro.',
  },
  {
    icone: Users,
    titulo: 'Liderança e Cultura',
    desc: 'Construir times que entregam resultado e querem ficar.',
  },
  {
    icone: TrendingUp,
    titulo: 'Inovação e Crescimento',
    desc: 'Como identificar oportunidades onde ninguém está olhando.',
  },
]

export default function Palestras() {
  return (
    <section id="palestras" className="py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] tracking-tight mb-6">
            PALESTRAS
          </h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed text-lg">
            A vivência de quem construiu a cervejaria mais premiada do mundo,
            operou em mais de 30 países e nunca parou de empreender.
            No palco, José Felipe entrega experiência real, não teoria.
          </p>
        </div>

        {/* Temas */}
        <div className="grid sm:grid-cols-2 gap-8 mb-20">
          {temas.map(t => (
            <div key={t.titulo} className="flex gap-5">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                <t.icone size={22} className="text-black" />
              </div>
              <div>
                <p className="font-bold text-black mb-1">{t.titulo}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Material de apoio */}
        <div className="flex flex-wrap items-center gap-4 mb-20">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mr-2">Material</p>
          <a
            href="/palestra-geral.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors border border-gray-200 rounded-lg px-4 py-2.5"
          >
            <FileText size={14} />
            Apresentação Geral (PDF)
          </a>
          <a
            href="/palestra-agro.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors border border-gray-200 rounded-lg px-4 py-2.5"
          >
            <FileText size={14} />
            Apresentação Agro (PDF)
          </a>
        </div>

        {/* CTA forte */}
        <div className="bg-black text-white rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight">
              Leve essa energia<br className="hidden md:block" /> para seu evento
            </h3>
            <p className="text-gray-400 max-w-md">
              Palestras sob medida para convenções, eventos corporativos,
              congressos e encontros de liderança.
            </p>
          </div>
          <a
            href="#contato"
            onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="shrink-0 flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Mic size={16} />
            Quero Contratar
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
