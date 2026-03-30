import { ArrowRight } from 'lucide-react'

export default function Valuation() {
  return (
    <section id="valuation" className="py-20 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Texto */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] mb-6 tracking-tight">
              QUAL MEU
              <br />
              VALUATION?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Todo empresario, em algum momento, precisa saber quanto vale o que
              construiu. Para vender, captar investimento, resolver uma sociedade
              ou simplesmente ter clareza sobre o proprio patrimonio.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Criei uma ferramenta que cruza 6 metodos de avaliacao com dados
              reais de transacoes de M&A em 17 setores do mercado brasileiro.
              A mesma metodologia que boutiques de investimento cobram a
              partir de R$ 15 mil.
            </p>

            <div className="mt-10 pt-10 border-t border-gray-200">
            </div>
            <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest mb-4">
              Como funciona
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div>
                <p className="text-sm font-bold text-black">3 minutos</p>
                <p className="text-xs text-gray-400">Preencha os dados basicos</p>
              </div>
              <div>
                <p className="text-sm font-bold text-black">6 metodos</p>
                <p className="text-xs text-gray-400">Cruzamento automatico</p>
              </div>
              <div>
                <p className="text-sm font-bold text-black">17 setores</p>
                <p className="text-xs text-gray-400">Multiplos atualizados</p>
              </div>
              <div>
                <p className="text-sm font-bold text-black">R$ 49</p>
                <p className="text-xs text-gray-400">Relatorio PDF completo</p>
              </div>
            </div>

            <a
              href="https://www.qualmeuvaluation.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex"
            >
              Calcular meu valuation <ArrowRight size={15} />
            </a>
          </div>

          {/* Card visual */}
          <div className="bg-black text-white rounded-2xl p-10 md:p-14">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-6">
              Fontes de dados
            </p>
            <div className="space-y-4 mb-10">
              <p className="text-sm text-gray-400 leading-relaxed">
                Multiplos de transacoes reais publicados por
                <strong className="text-white"> PwC</strong>,
                <strong className="text-white"> KPMG</strong>,
                <strong className="text-white"> EY</strong> e
                <strong className="text-white"> Deloitte</strong>.
                Dados publicos, mapeados e analisados com inteligencia artificial.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Mais de R$ 250 bilhoes em transacoes de M&A acontecem no Brasil
                por ano. Nossa ferramenta destrincha esses dados para calcular
                o valor justo da sua empresa.
              </p>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-wrap gap-6">
                <div>
                  <p className="text-2xl font-extrabold text-white">2.847+</p>
                  <p className="text-xs text-gray-600">empresas avaliadas</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">17</p>
                  <p className="text-xs text-gray-600">setores cobertos</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">4.8</p>
                  <p className="text-xs text-gray-600">satisfacao</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
