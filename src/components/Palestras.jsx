import { Mic } from 'lucide-react'

export default function Palestras() {
  return (
    <section id="palestras" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] tracking-tight mb-6">
            PALESTRAS
          </h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            José Felipe leva ao palco a energia, a vivência e as estratégias de quem construiu negócios do zero e transformou paixão em resultados reais. Conheça as apresentações completas abaixo.
          </p>
        </div>

        <div className="space-y-12 mb-20">
          <div>
            <p className="text-sm font-bold text-black mb-3">Apresentação Geral</p>
            <div className="w-full rounded-xl overflow-hidden border border-gray-200" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="/palestra-geral.pdf"
                title="Apresentação José Felipe Carneiro"
                className="w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-black mb-3">Apresentação Agro</p>
            <div className="w-full rounded-xl overflow-hidden border border-gray-200" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="/palestra-agro.pdf"
                title="Apresentação José Felipe Carneiro — Agro"
                className="w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>

        <div className="bg-black text-white rounded-xl p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            Leve essa energia para seu evento
          </h3>
          <p className="text-gray-400 mb-3 max-w-xl mx-auto">
            Contratação exclusiva via DMT Palestras
          </p>
          <p className="text-sm text-gray-500 mb-8">
            <a href="mailto:jose.felipe@dmt.ag" className="text-white hover:underline">jose.felipe@dmt.ag</a>
            {' · '}
            <a href="https://www.dmt.ag" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">dmt.ag</a>
          </p>
          <a
            href="#contato"
            onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Mic size={16} />
            Quero Contratar uma Palestra
          </a>
        </div>
      </div>
    </section>
  )
}
