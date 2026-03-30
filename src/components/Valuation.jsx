import { ArrowRight, TrendingUp, Shield, BarChart3 } from 'lucide-react'

export default function Valuation() {
  return (
    <section id="valuation" className="py-20 md:py-40 bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#c9a84c] font-semibold mb-6">
            Ferramenta exclusiva
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
            Quanto vale a<br />sua empresa?
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-lg mx-auto text-lg">
            Todo empresario, em algum momento, precisa saber quanto vale
            o que construiu. Agora voce pode descobrir em 3 minutos.
          </p>
        </div>

        {/* Cards de valor */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="border border-gray-800 rounded-xl p-8 text-center hover:border-[#c9a84c]/20 transition-colors">
            <BarChart3 size={28} className="mx-auto mb-4 text-[#c9a84c]" />
            <h3 className="font-bold text-white mb-2">6 Metodos de Avaliacao</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Receita, EBITDA, lucro liquido, ativos, enterprise value e multiplos comparativos.
            </p>
          </div>
          <div className="border border-gray-800 rounded-xl p-8 text-center hover:border-[#c9a84c]/20 transition-colors">
            <TrendingUp size={28} className="mx-auto mb-4 text-[#c9a84c]" />
            <h3 className="font-bold text-white mb-2">Dados Reais de M&A</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Multiplos de transacoes reais publicados por PwC, KPMG, EY e Deloitte. 17 setores.
            </p>
          </div>
          <div className="border border-gray-800 rounded-xl p-8 text-center hover:border-[#c9a84c]/20 transition-colors">
            <Shield size={28} className="mx-auto mb-4 text-[#c9a84c]" />
            <h3 className="font-bold text-white mb-2">Privacidade Total</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Seus dados sao processados no seu computador. Nenhuma informacao e enviada a servidores.
            </p>
          </div>
        </div>

        {/* CTA central */}
        <div className="bg-gradient-to-r from-[#c9a84c]/10 to-[#c9a84c]/5 border border-[#c9a84c]/20 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight">
              Descubra o valor do<br className="hidden md:block" /> seu negocio
            </h3>
            <p className="text-gray-400 max-w-md">
              A mesma metodologia que boutiques de M&A cobram
              a partir de R$ 15 mil. Por apenas R$ 49.
            </p>
          </div>
          <a
            href="https://www.qualmeuvaluation.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-3 px-10 py-5 bg-[#c9a84c] text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#d4b55a] transition-colors"
          >
            Calcular Agora
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Fontes discretas */}
        <p className="text-center text-[0.6rem] text-gray-700 mt-8">
          Fontes: PwC · KPMG · EY · Deloitte · Dados publicos de transacoes de M&A 2024-2026
        </p>
      </div>
    </section>
  )
}
