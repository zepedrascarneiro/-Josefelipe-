import { Mic, ArrowRight } from 'lucide-react'

export default function Palestras() {
  return (
    <section id="palestras" className="py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] tracking-tight mb-6">
            PALESTRAS
          </h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed text-lg">
            A vivência de quem construiu a cervejaria mais premiada do mundo,
            operou em mais de 30 países e nunca parou de empreender.
            No palco, José Felipe entrega experiência real, não teoria.
          </p>
        </div>

        {/* PDFs lado a lado */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div>
            <p className="text-sm font-bold text-black mb-3">Apresentação Geral</p>
            <div className="w-full rounded-xl overflow-hidden border border-gray-200" style={{ aspectRatio: '4/3' }}>
              <iframe
                src="/palestra-geral.pdf"
                title="Apresentação José Felipe Carneiro"
                className="w-full h-full"
                style={{ border: 'none' }}
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-black mb-3">Apresentação Agro</p>
            <div className="w-full rounded-xl overflow-hidden border border-gray-200" style={{ aspectRatio: '4/3' }}>
              <iframe
                src="/palestra-agro.pdf"
                title="Apresentação José Felipe Carneiro Agro"
                className="w-full h-full"
                style={{ border: 'none' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
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
