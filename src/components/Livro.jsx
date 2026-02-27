import { BookOpen, Star, Check, ArrowRight } from 'lucide-react'

const capitulos = [
  { titulo: 'Modelo de Princípios Pessoais', desc: 'Um sistema prático para tomar decisões sem se perder no caminho.' },
  { titulo: 'Meritocracia de Ideias',         desc: 'Técnicas para fazer a melhor proposta vencer, independentemente de hierarquia.' },
  { titulo: 'Dashboard de Feedback em 24h',   desc: 'Como loops de ajuste rápido aumentam engajamento.' },
  { titulo: 'Carteira "All-Clima" de Negócios', desc: 'Use diversificação de risco para prosperar em qualquer cenário.' },
  { titulo: 'Ritual de Autoconsciência Diária', desc: 'Journaling + pausas estratégicas elevam foco e criatividade.' },
  { titulo: 'Ferramentas para Work-Life Balance', desc: 'Saúde e família tanto quanto resultado — o modelo pós-pandemia.' },
]

const bonus = [
  { tipo: 'Checklist',  desc: '"Princípios em 10 minutos"' },
  { tipo: 'Planilha',   desc: 'Dashboard diário de performance consciente' },
  { tipo: 'Workshop',   desc: 'Acesso a workshop online ao vivo com o autor' },
]

const paraQuem = [
  'Cansados de fórmulas prontas de produtividade e querem profundidade.',
  'Lideram empresas, projetos ou times e sentem o peso dos resultados.',
  'Buscam equilíbrio entre performance consciente e paz de espírito.',
  'Gostam de pensar diferente, questionar verdades fáceis.',
  'Valorizam consistência, significado e verdade.',
]

export default function Livro() {
  return (
    <section id="livro" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] uppercase tracking-[0.25em] text-sm font-medium mb-3">
            Alta Performance, Paz de Espírito
          </p>
          <h2 className="section-title">Performance Consciente</h2>
          <div className="gold-line mx-auto" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Pare de correr no piloto automático. Aprenda a liderar com presença,
            propósito e resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Capa */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full bg-[#C9A84C]/20 rounded-lg" />
              <img
                src="https://josefelipe.com.br/lovable-uploads/326762f8-2ad7-4e2a-877e-30bb893c60e2.png"
                alt="Capa do Livro Performance Consciente"
                className="relative z-10 w-72 md:w-80 rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0A0A0A] border border-[#C9A84C]/30 rounded-full px-5 py-2 flex items-center gap-2 z-20">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="text-[#C9A84C] fill-[#C9A84C]" />
              ))}
              <span className="text-xs text-gray-300 ml-1">Bestseller Nacional</span>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">

            {/* Para quem é */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Para Quem É Este Livro?
              </h3>
              <ul className="space-y-2">
                {paraQuem.map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check size={14} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* O que vai encontrar */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                O Que Você Vai Encontrar
              </h3>
              <div className="space-y-3">
                {capitulos.map(c => (
                  <div key={c.titulo} className="bg-[#0A0A0A] border border-[#222] rounded-lg p-4">
                    <p className="text-[#C9A84C] text-sm font-semibold mb-1">{c.titulo}</p>
                    <p className="text-gray-400 text-xs">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bônus */}
            <div className="bg-gradient-to-r from-[#C9A84C]/10 to-transparent border border-[#C9A84C]/20 rounded-xl p-5">
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest font-bold mb-3">
                🎁 Bônus Exclusivos — 1ª Edição
              </p>
              <div className="space-y-2">
                {bonus.map(b => (
                  <div key={b.tipo} className="flex gap-2 text-sm">
                    <span className="text-[#C9A84C] font-semibold min-w-[70px]">{b.tipo}</span>
                    <span className="text-gray-300">{b.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contato"
              onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary w-full justify-center"
            >
              <BookOpen size={18} />
              Quero Viver a Performance Consciente
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
