import { ArrowRight } from 'lucide-react'

export default function Valuation() {
  return (
    <section id="valuation" className="py-20 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] mb-6 tracking-tight">
          QUAL MEU
          <br />
          VALUATION?
        </h2>

        <p className="text-gray-500 leading-relaxed max-w-2xl mb-6">
          Criei uma ferramenta para responder a pergunta que todo empresario
          faz em algum momento: quanto vale o que eu construi? Seja para
          vender, captar, dividir com um socio ou planejar o futuro.
        </p>

        <p className="text-gray-500 leading-relaxed max-w-2xl mb-16">
          A calculadora cruza seus dados com multiplos reais de transacoes
          de M&A publicados por PwC, KPMG, EY e Deloitte. Sao 6 metodos
          de avaliacao, 17 setores e 15 indicadores financeiros. Resultado
          em 3 minutos. O mesmo tipo de analise que boutiques de investimento
          cobram a partir de R$ 15 mil, por R$ 49.
        </p>

        <a
          href="https://www.qualmeuvaluation.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 bg-black text-white"
        >
          Descobrir meu valuation <ArrowRight size={15} />
        </a>

      </div>
    </section>
  )
}
