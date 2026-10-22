import { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function JornadaVideo() {
  const ref = useRef(null)
  const sectionRef = useRef(null)
  const [muted, setMuted] = useState(true)

  // Parallax sutil: o vídeo se move mais devagar que o scroll da página.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const videoY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  const toggleSom = () => {
    const next = !muted
    setMuted(next)
    if (ref.current) ref.current.muted = next
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black"
      style={{ height: 'clamp(320px, 60vw, 640px)' }}
    >
      <motion.video
        ref={ref}
        src="/jornada.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y: videoY, scale: 1.15 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.75) 100%)' }}
      />

      <button
        onClick={toggleSom}
        aria-label={muted ? 'Ativar som' : 'Silenciar'}
        className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-colors text-white"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
        <p className="text-white/60 text-xs font-bold uppercase tracking-[0.3em] mb-2">
          Wäls · Novo Brazil · Stadt Jever · Cask.Co · Fazenda Cervejeira
        </p>
        <h3 className="text-white text-2xl md:text-4xl font-extrabold tracking-tight">
          A família mais premiada em cerveja do mundo
        </h3>
      </div>
    </section>
  )
}
