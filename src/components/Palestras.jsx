import { Mic, ArrowRight, MessageCircle, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

const WA_LINK = 'https://wa.me/5511976372211?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20palestras%20do%20Jos%C3%A9%20Felipe.'

// Temas de palestra — RASCUNHO para o José revisar/ajustar o texto.
// Todos ancorados na trajetória real (livro Performance Consciente + Wäls/AmBev/ZX + agro).
const temas = [
  {
    n: '01',
    titulo: 'Performance Consciente',
    desc: 'Os 7 pilares do livro: por que produzir mais não é o caminho e como sustentar alta performance com propósito, presença e ritmo próprio.',
  },
  {
    n: '02',
    titulo: 'Do Zero ao Global',
    desc: 'A história por trás da cervejaria mais premiada do mundo: construir, vender para a AmBev e escalar marcas em diversos países.',
  },
  {
    n: '03',
    titulo: 'Inovação & Reinvenção',
    desc: 'Como criar categorias novas e reinventar mercados — da ZX Ventures às hard kombuchas nos EUA e no Brasil.',
  },
  {
    n: '04',
    titulo: 'Alta Performance no Agronegócio',
    desc: 'Inovação, estratégia e execução para o agro — a mentalidade do campo ao copo aplicada a quem produz de verdade.',
  },
]

// Apresentações / media kits — abrem o PDF em nova aba (melhor que iframe, ótimo no mobile).
const decks = [
  {
    titulo: 'Apresentação Geral',
    desc: 'Media kit completo — trajetória, temas e formatos de palestra.',
    thumb: '/palestra-geral-thumb.jpg',
    pdf: '/palestra-geral.pdf',
  },
  {
    titulo: 'Apresentação Agro',
    desc: 'Versão voltada para eventos e convenções do agronegócio.',
    thumb: '/palestra-agro-thumb.jpg',
    pdf: '/palestra-agro.pdf',
  },
]

export default function Palestras() {
  return (
    <section id="palestras" className="py-20 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] tracking-tight mb-6">
            PALESTRAS
          </h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed text-lg">
            A vivência de quem construiu a cervejaria mais premiada do mundo,
            operou globalmente e nunca parou de empreender.
            No palco, José Felipe entrega experiência real, não teoria.
          </p>
        </motion.div>

        {/* Temas de palestra */}
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
          Temas
        </p>
        <div className="grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200 mb-24">
          {temas.map((t, i) => (
            <motion.div
              key={t.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="bg-white p-8 md:p-10 flex flex-col"
            >
              <span className="text-sm font-bold text-[#c9a84c] tracking-widest mb-5">{t.n}</span>
              <h3 className="text-xl md:text-2xl font-extrabold text-black tracking-tight mb-3">
                {t.titulo}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Apresentações (decks) — cards com capa, abrem o PDF em nova aba */}
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
          Apresentações
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {decks.map(d => (
            <a
              key={d.pdf}
              href={d.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-gray-200 hover:border-black transition-colors"
            >
              <div className="overflow-hidden border-b border-gray-200" style={{ aspectRatio: '16/9' }}>
                <img
                  src={d.thumb}
                  alt={`Capa da ${d.titulo}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-bold text-black mb-1">{d.titulo}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-black transition-colors whitespace-nowrap mt-1">
                  <FileText size={14} /> Ver
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-black text-white text-center px-8 md:px-16" style={{ paddingTop: 'clamp(48px, 6vw, 80px)', paddingBottom: 'clamp(48px, 6vw, 80px)' }}>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Leve essa energia para seu evento
          </h3>
          <p className="text-gray-400 max-w-lg mx-auto mb-12 text-lg leading-relaxed">
            Palestras sob medida para convenções, eventos corporativos,
            congressos e encontros de liderança.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-10 py-5 font-bold text-base uppercase tracking-wider transition-all hover:brightness-95"
              style={{ backgroundColor: '#25D366', color: '#fff', minWidth: '260px' }}
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
            <a
              href="#contato"
              onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="flex items-center justify-center gap-3 px-10 py-5 font-bold text-base uppercase tracking-wider transition-colors hover:bg-white hover:text-black"
              style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.4)', minWidth: '260px' }}
            >
              <Mic size={18} />
              Solicitar Proposta
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
