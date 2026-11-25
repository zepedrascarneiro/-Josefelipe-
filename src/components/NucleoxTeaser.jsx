import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CountUp from './CountUp'

export default function NucleoxTeaser() {
  return (
    <section id="nucleox" className="scroll-mt-24 py-20 md:py-40 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-black/10 p-6 sm:p-10 md:p-16"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#c9a84c] font-semibold mb-6">
            E-book · NÚCLEO X
          </p>
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] mb-6 tracking-tight">
                UM MÉTODO
                <br />
                PARA PENSAR
                <br />
                COM ESTRUTURA
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                O NÚCLEO X reúne 7 pilares que uso para organizar decisões e
                reduzir ruído mental no dia a dia de quem está construindo
                algo do zero. Nasceu da prática, não de teoria.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                147 páginas, em português e inglês, com um protocolo prático
                de 21 dias para aplicar cada pilar.
              </p>
              <Link
                to="/nucleox"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a84c] text-black font-bold text-sm uppercase tracking-wider hover:bg-[#d4b55a] transition-colors"
              >
                Conhecer o E-book <ArrowRight size={16} />
              </Link>
            </div>
            <div className="lg:col-span-2 flex flex-col items-center justify-center text-center border-t lg:border-t-0 lg:border-l border-gray-200 pt-10 lg:pt-0 lg:pl-10 mt-4 lg:mt-0">
              <div className="mb-6">
                <p className="text-6xl md:text-7xl font-extrabold text-black tracking-tight"><CountUp end={7} /></p>
                <p className="text-sm text-gray-400 mt-1">pilares do método</p>
              </div>
              <div className="w-12 h-px bg-gray-200 mb-6"></div>
              <div className="mb-6">
                <p className="text-6xl md:text-7xl font-extrabold text-black tracking-tight"><CountUp end={147} /></p>
                <p className="text-sm text-gray-400 mt-1">páginas</p>
              </div>
              <div className="w-12 h-px bg-gray-200 mb-6"></div>
              <div>
                <p className="text-6xl md:text-7xl font-extrabold text-black tracking-tight"><CountUp end={21} /></p>
                <p className="text-sm text-gray-400 mt-1">dias de protocolo</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
