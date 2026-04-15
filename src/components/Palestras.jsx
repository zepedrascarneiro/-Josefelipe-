import { Mic, ArrowRight, MessageCircle } from 'lucide-react'

const WA_LINK = 'https://wa.me/5511976372211?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20palestras%20do%20Jos%C3%A9%20Felipe.'

export default function Palestras() {
  return (
    <section id="palestras" className="py-20 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] tracking-tight mb-6">
            PALESTRAS
          </h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed text-lg">
            A vivência de quem construiu a cervejaria mais premiada do mundo,
            operou globalmente e nunca parou de empreender.
            No palco, José Felipe entrega experiência real, não teoria.
          </p>
        </div>

        {/* PDFs lado a lado */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div>
            <p className="text-sm font-bold text-black mb-3">Apresentação Geral</p>
            <div className="w-full rounded-none overflow-hidden border border-gray-200" style={{ aspectRatio: '4/3' }}>
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
            <div className="w-full rounded-none overflow-hidden border border-gray-200" style={{ aspectRatio: '4/3' }}>
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
        <div className="bg-black text-white p-12 md:p-20 text-center overflow-hidden" style={{ borderRadius: '16px' }}>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Leve essa energia para seu evento
          </h3>
          <p className="text-gray-400 max-w-lg mx-auto mb-12 text-lg leading-relaxed">
            Palestras sob medida para convenções, eventos corporativos,
            congressos e encontros de liderança.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-10 py-5 font-bold text-base uppercase tracking-wider transition-all"
              style={{ backgroundColor: '#25D366', color: '#fff', borderRadius: '12px', minWidth: '260px' }}
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
            <a
              href="#contato"
              onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="flex items-center justify-center gap-3 px-10 py-5 font-bold text-base uppercase tracking-wider transition-colors"
              style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.4)', borderRadius: '12px', minWidth: '260px' }}
            >
              <Mic size={18} />
              Solicitar Proposta
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
