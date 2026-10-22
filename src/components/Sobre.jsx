import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const empresas = [
  { n: 'Wäls', s: 'Mais Premiada do Mundo' },
  { n: 'ZX Ventures', s: 'AB InBev · Global' },
  { n: 'Khappy Kombucha', s: 'Líder no Brasil' },
  { n: 'Stadt Jever', s: 'Do Campo ao Copo' },
  { n: 'Novo Brazil', s: 'San Diego, EUA' },
  { n: 'Fazenda Cervejeira', s: 'Belo Horizonte' },
  { n: 'Investidor', s: 'Etus Media Holding · Anunciagro · Brazilian Coffee King' },
  { n: 'Villa Ipioca', s: 'Capela Ipioca · Casamar Beach Club · Fazenda Alagoas' },
]

// Linha do tempo das marcas — mesma lista de sempre, só revela item a item
// conforme o scroll passa, com a linha vertical crescendo junto.
function Timeline({ items }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className="relative pl-7">
      <div className="absolute left-0 top-1 bottom-1 w-px bg-gray-200" />
      <motion.div
        className="absolute left-0 top-1 w-px bg-black origin-top"
        style={{ height: lineHeight }}
      />
      <div className="space-y-6">
        {items.map((e, i) => (
          <motion.div
            key={e.n}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-7 top-1.5 w-2 h-2 rounded-full bg-black" />
            <p className="text-sm font-bold text-black">{e.n}</p>
            <p className="text-xs text-gray-400">{e.s}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Sobre() {
  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="sobre" className="scroll-mt-24 py-20 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Foto com título — entra com fade+subida e tem parallax sutil no scroll. */}
          <div ref={imgRef} className="relative overflow-hidden" style={{ height: 'clamp(400px, 60vw, 700px)' }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <motion.img
                src="/jornada.jpg"
                alt="José Felipe Carneiro no palco"
                loading="lazy"
                className="w-full h-full object-cover grayscale"
                style={{ objectPosition: 'center center', y: imgY, scale: 1.15 }}
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
            </motion.div>
          </div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
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
            <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest mb-6">
              Marcas & Negócios
            </p>
            <Timeline items={empresas} />

            <div className="mt-10 pt-6 md:mt-20 md:pt-10 border-t border-gray-200">
            </div>
            <a
              href="#contato"
              onClick={ev => { ev.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline inline-flex"
            >
              Entre em contato <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
