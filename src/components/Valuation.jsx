import { ArrowRight } from 'lucide-react'

export default function Valuation() {
  return (
    <section id="valuation" className="py-20 md:py-40 bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#c9a84c] font-semibold mb-6">
              Ferramenta
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
              QUAL MEU
              <br />
              VALUATION?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Todo empresario, em algum momento, precisa saber quanto vale o que construiu.
              Para vender, captar investimento, resolver uma sociedade ou simplesmente ter clareza.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Calculadora com 6 metodos de avaliacao, multiplos reais de M&A em 17 setores
              do mercado brasileiro. Fontes: PwC, KPMG, EY e Deloitte.
            </p>
            <a
              href="https://www.qualmeuvaluation.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a84c] text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#d4b55a] transition-colors"
            >
              Calcular Valuation
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Velocimetro visual */}
          <div className="flex justify-center">
            <div className="text-center">
              <div className="relative w-[280px] h-[160px] mx-auto">
                <svg viewBox="0 0 280 160" className="w-full h-full">
                  <defs>
                    <linearGradient id="jfGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:'rgba(201,168,76,0.08)'}}/>
                      <stop offset="60%" style={{stopColor:'rgba(201,168,76,0.5)'}}/>
                      <stop offset="100%" style={{stopColor:'#c9a84c'}}/>
                    </linearGradient>
                    <filter id="jfGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  </defs>
                  <path d="M 30 140 A 110 110 0 0 1 250 140" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="6"/>
                  <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                    <line x1="30" y1="140" x2="38" y2="136" />
                    <line x1="52" y1="92" x2="60" y2="96" />
                    <line x1="92" y1="55" x2="96" y2="63" />
                    <line x1="140" y1="30" x2="140" y2="39" />
                    <line x1="188" y1="55" x2="184" y2="63" />
                    <line x1="228" y1="92" x2="220" y2="96" />
                    <line x1="250" y1="140" x2="242" y2="136" />
                  </g>
                  <path d="M 30 140 A 110 110 0 0 1 250 140" fill="none" stroke="url(#jfGoldGrad)" strokeWidth="6" strokeLinecap="round" strokeDasharray="345" strokeDashoffset="138"/>
                  <text x="22" y="153" fill="rgba(255,255,255,0.1)" fontSize="8" fontFamily="Inter">0</text>
                  <text x="132" y="22" fill="rgba(255,255,255,0.1)" fontSize="8" fontFamily="Inter" textAnchor="middle">1.000</text>
                  <text x="248" y="153" fill="rgba(255,255,255,0.1)" fontSize="8" fontFamily="Inter" textAnchor="end">2.000</text>
                  <g transform="rotate(-16, 140, 140)">
                    <line x1="140" y1="140" x2="140" y2="52" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" filter="url(#jfGlow)"/>
                    <polygon points="140,42 136,56 144,56" fill="#c9a84c" filter="url(#jfGlow)"/>
                  </g>
                  <circle cx="140" cy="140" r="6" fill="rgba(201,168,76,0.15)" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
                  <circle cx="140" cy="140" r="3" fill="#c9a84c"/>
                </svg>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                  <div className="text-[0.5rem] text-white/15 uppercase tracking-[2px]">M&A Brasil 2026</div>
                </div>
              </div>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-[0.7rem] text-[#c9a84c]/40">R$</span>
                <span className="font-mono text-xl font-bold text-[#c9a84c]">62.418.730.422</span>
              </div>
              <div className="text-[0.5rem] text-white/10 mt-1">volume negociado em 2026 · ao vivo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
