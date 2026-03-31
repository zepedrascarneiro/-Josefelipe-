import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const empresas = [
  { n: 'Wäls', s: 'Mais Premiada do Mundo' },
  { n: 'ZX Ventures', s: 'AB InBev · Global' },
  { n: 'Khappy Kombucha', s: 'Líder no Brasil' },
  { n: 'Stadt Jever', s: 'Do Campo ao Copo' },
  { n: 'Novo Brazil', s: 'San Diego, EUA' },
  { n: 'Fazenda Cervejeira', s: 'Belo Horizonte' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >

          {/* Foto com título */}
          <div className="relative overflow-hidden" style={{ height: 'clamp(400px, 60vw, 700px)' }}>
            <img
              src="/jornada.jpg"
              alt="José Felipe Carneiro no palco"
              loading="lazy"
              className="w-full h-full object-cover grayscale"
              style={{ objectPosition: 'center center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
            <h2
              className="absolute top-8 left-8 font-extrabold text-white leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}
            >
              MINHA
              <br />
              JORNADA
            </h2>
          </div>

          {/* Bio */}
          <div>
            <p className="text-gray-500 leading-relaxed mb-6">
              José Felipe Carneiro é um dos empreendedores mais influentes do Brasil,
              conhecido por transformar uma pequena cervejaria familiar de Belo Horizonte na
              <strong className="text-black"> mais premiada do planeta</strong>.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Co-fundador da <strong className="text-black">Cervejaria Wäls</strong> ao lado do irmão Tiago,
              se tornou sócio da AMBEV e criou a{' '}
              <strong className="text-black">ZX Ventures</strong>, braço de inovação da AB InBev que atuou
              em diversos países em apenas três anos.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Nos EUA criou a <strong className="text-black">Novo Brazil</strong> e uma das maiores hard
              kombuchas do mundo. No Brasil fundou a{' '}
              <strong className="text-black">Khappy Kombucha</strong>, a{' '}
              <strong className="text-black">Fazenda Cervejeira</strong> e a{' '}
              <strong className="text-black">Stadt Jever</strong>.
            </p>

            <div className="mt-10 pt-6 md:mt-20 md:pt-10 border-t border-gray-200">
            </div>
            <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest mb-4">
              Marcas & Negócios
            </p>
            <div className="grid grid-cols-2 gap-4">
              {empresas.map(e => (
                <div key={e.n}>
                  <p className="text-sm font-bold text-black">{e.n}</p>
                  <p className="text-xs text-gray-400">{e.s}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 md:mt-20 md:pt-10 border-t border-gray-200">
            </div>
            <a
              href="#contato"
              onClick={ev => { ev.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline inline-flex"
            >
              Entre em contato <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
