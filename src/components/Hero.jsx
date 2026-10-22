import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Revela os blocos de texto em cascata (eyebrow → título → texto → botões)
// em vez de tudo aparecer junto.
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const heroRef = useRef(null)
  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  // Parallax sutil: a foto se move mais devagar que o scroll da página.
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        background: '#111',
        overflow: 'hidden',
      }}
    >
      {/* Foto de fundo — rosto visível na metade superior, com parallax no scroll */}
      <motion.img
        src="/jose-felipe-opt.jpeg"
        alt="José Felipe Carneiro"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '120%',
          objectFit: 'cover',
          objectPosition: 'center 20%',
          maxWidth: 'none',
          y: bgY,
        }}
      />

      {/* Gradiente contínuo para legibilidade */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      {/* Conteúdo por cima */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '72rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingBottom: '4rem',
          paddingTop: '6rem',
        }}
      >

        <motion.p
          variants={item}
          className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.3em]"
          style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '0.4rem' }}
        >
          Empreendedor &nbsp;·&nbsp; Mentor &nbsp;·&nbsp; Palestrante
        </motion.p>
        <motion.p
          variants={item}
          className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.3em]"
          style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '1.2rem' }}
        >
          Autor Best Seller de Performance Consciente
        </motion.p>

        <motion.h1
          variants={item}
          className="font-extrabold tracking-tight text-white"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.2rem' }}
        >
          JOSÉ FELIPE<br />CARNEIRO
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-10 max-w-lg leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}
        >
          Co-fundador da Cervejaria Wäls (mais premiada do mundo) e da ZX Ventures (Ambev).
          Negócios em diversos países.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('#contato')}
            className="btn-primary"
            style={{ background: '#fff', color: '#000' }}
          >
            Fale Comigo
          </button>
          <button
            onClick={() => scrollTo('#sobre')}
            className="btn-outline"
            style={{ borderColor: 'rgba(255,255,255,0.45)', color: '#fff' }}
          >
            Saiba Mais
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
