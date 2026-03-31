import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Livro() {
  return (
    <section id="livro" className="py-20 md:py-40 bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >

          {/* Capa — primeiro no mobile, visual como protagonista */}
          <div className="flex justify-center lg:order-2">
            <img
              src="/livro-capa.jpg"
              alt="Capa do Livro Performance Consciente"
              loading="lazy"
              className="w-full max-w-sm drop-shadow-[0_30px_60px_rgba(201,168,76,0.15)]"
            />
          </div>

          {/* Conteúdo — escaneável e impactante */}
          <div className="lg:order-1">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#c9a84c] font-semibold mb-6">
              O livro
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.05] mb-10 tracking-tight">
              PERFORMANCE
              <br />
              CONSCIENTE
            </h2>

            {/* Frases de impacto — curtas, escaneáveis */}
            <div className="space-y-6 mb-12">
              <p className="text-gray-400 leading-relaxed">
                Nunca tivemos tantos recursos. Ainda assim, nunca foi tão comum ver
                pessoas <strong className="text-white">produtivas por fora e esgotadas por dentro</strong>.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Este livro não foi escrito para ensinar a fazer mais.
                Foi escrito para quem quer fazer <strong className="text-white">melhor</strong>.
                Com mais presença, mais intenção e mais domínio sobre o próprio ritmo.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                São 7 pilares que definem a alta produtividade para qualquer área da vida.
                Não é teoria. É o que funcionou de verdade, ao longo de décadas
                construindo negócios ao redor do mundo.
              </p>
            </div>

            <a
              href="https://a.co/d/0fV9dTgl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a84c] text-black font-bold text-sm uppercase tracking-wider rounded-none hover:bg-[#d4b55a] transition-colors"
            >
              Quero Minha Edição
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
