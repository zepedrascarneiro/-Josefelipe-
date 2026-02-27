import { Mic, Check, ArrowRight } from 'lucide-react'

const formatos = [
  'Keynotes inspiracionais',
  'Workshops práticos',
  'Painéis de discussão',
  'Palestras virtuais',
  'Eventos corporativos',
]

const temas = [
  { titulo: 'Performance Consciente',  desc: 'Alta produtividade com propósito e equilíbrio' },
  { titulo: 'Liderança Inspiradora',   desc: 'Como mover pessoas pela motivação, não pela pressão' },
  { titulo: 'Empreendedorismo de Alto Impacto', desc: 'Transformando ideias em negócios bilionários' },
  { titulo: 'Inovação Estratégica',    desc: 'Como a Zx Ventures revolucionou o mercado' },
]

export default function Palestras() {
  return (
    <section id="palestras" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#C9A84C] uppercase tracking-[0.25em] text-sm font-medium mb-3">
            Inspire sua Equipe
          </p>
          <h2 className="section-title">Palestras Transformadoras</h2>
          <div className="gold-line mx-auto" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Palestras que combinam experiência real, storytelling envolvente e
            metodologias práticas para transformar mindset e resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Formatos */}
          <div className="bg-[#0A0A0A] border border-[#222] rounded-2xl p-8 hover:border-[#C9A84C]/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-6">
              <Mic size={24} className="text-[#C9A84C]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Formatos Disponíveis
            </h3>
            <ul className="space-y-3">
              {formatos.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                  <Check size={15} className="text-[#C9A84C] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Temas — ocupa 2 colunas */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {temas.map(t => (
              <div
                key={t.titulo}
                className="bg-[#0A0A0A] border border-[#222] rounded-xl p-6 hover:border-[#C9A84C]/40 hover:bg-[#0d0d0d] transition-all duration-300 group"
              >
                <div className="w-8 h-1 bg-[#C9A84C] mb-4 group-hover:w-12 transition-all duration-300" />
                <h4 className="text-white font-semibold mb-2 text-lg"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t.titulo}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center bg-gradient-to-r from-[#C9A84C]/5 via-[#C9A84C]/10 to-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Solicite uma Proposta
          </h3>
          <p className="text-gray-400 mb-6">
            Entre em contato para receber uma proposta personalizada para seu evento.
          </p>
          <a
            href="#contato"
            onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary"
          >
            <Mic size={18} />
            Contrate o Palestrante
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
