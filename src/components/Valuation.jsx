import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Valuation() {
  return (
    <section id="valuation" className="py-20 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] mb-6 tracking-tight">
                QUER DESCOBRIR
                <br />
                QUANTO VALE A
                <br />
                SUA EMPRESA?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Essa é uma das perguntas mais importantes na vida de qualquer
                empresário. Seja para vender, captar investimento, resolver
                uma sociedade ou simplesmente entender o valor real do que
                você construiu ao longo dos anos.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                Desenvolvi uma calculadora que cruza os dados da sua empresa
                com múltiplos reais de transações de M&A no mercado brasileiro,
                publicados por PwC, KPMG, EY e Deloitte. São 6 métodos de
                avaliação, 17 setores e 15 indicadores financeiros. O resultado
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
            <div className="lg:col-span-2 flex flex-col items-center justify-center text-center">
              <div className="mb-6">
                <p className="text-6xl md:text-7xl font-extrabold text-black tracking-tight">6</p>
                <p className="text-sm text-gray-400 mt-1">métodos de avaliação</p>
              </div>
              <div className="w-12 h-px bg-gray-200 mb-6"></div>
              <div className="mb-6">
                <p className="text-6xl md:text-7xl font-extrabold text-black tracking-tight">17</p>
                <p className="text-sm text-gray-400 mt-1">setores cobertos</p>
              </div>
              <div className="w-12 h-px bg-gray-200 mb-6"></div>
              <div>
                <p className="text-6xl md:text-7xl font-extrabold text-black tracking-tight">3<span className="text-3xl text-gray-300">min</span></p>
                <p className="text-sm text-gray-400 mt-1">para seu resultado</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
