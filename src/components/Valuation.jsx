import { ArrowRight } from 'lucide-react'

export default function Valuation() {
  return (
    <section id="valuation" className="py-20 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] mb-6 tracking-tight">
          QUER DESCOBRIR
          <br />
          QUANTO VALE A
          <br />
          SUA EMPRESA?
        </h2>

        <p className="text-gray-500 leading-relaxed max-w-2xl mb-6">
          Essa e uma das perguntas mais importantes na vida de qualquer
          empresario. Seja para vender, captar investimento, resolver
          uma sociedade ou simplesmente entender o valor real do que
          voce construiu ao longo dos anos.
        </p>

        <p className="text-gray-500 leading-relaxed max-w-2xl mb-16">
          Desenvolvi uma calculadora que cruza os dados da sua empresa
          com multiplos reais de transacoes de M&A no mercado brasileiro,
          publicados por PwC, KPMG, EY e Deloitte. Sao 6 metodos de
          avaliacao, 17 setores e 15 indicadores financeiros. O resultado
          sai em 3 minutos.
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
