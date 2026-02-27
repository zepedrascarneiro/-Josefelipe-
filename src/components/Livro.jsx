import { BookOpen, Star, Check, ArrowRight } from 'lucide-react'

const capitulos = [
  { titulo: 'Modelo de Princípios Pessoais',    desc: 'Um sistema prático para tomar decisões sem se perder no caminho.' },
  { titulo: 'Meritocracia de Ideias',            desc: 'Técnicas para fazer a melhor proposta vencer, independentemente de hierarquia.' },
  { titulo: 'Dashboard de Feedback em 24h',      desc: 'Como loops de ajuste rápido aumentam engajamento.' },
  { titulo: 'Carteira "All-Clima" de Negócios',  desc: 'Use diversificação de risco para prosperar em qualquer cenário.' },
  { titulo: 'Ritual de Autoconsciência Diária',  desc: 'Journaling + pausas estratégicas elevam foco e criatividade.' },
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
    <section id="livro" className="py-28 bg-[#F4F1EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">Alta Performance, Paz de Espírito</p>
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <h2 className="section-title">
              Performance<br /><em className="not-italic text-[#C9A84C]">Consciente</em>
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              Pare de correr no piloto automático. Aprenda a liderar com presença,
              propósito e resultados reais.
            </p>
          </div>
          <div className="gold-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Capa */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <div className="absolute top-6 left-6 w-full h-full bg-[#C9A84C]/15 rounded-2xl" />
              <img
                src="https://josefelipe.com.br/lovable-uploads/326762f8-2ad7-4e2a-877e-30bb893c60e2.png"
                alt="Capa do Livro Performance Consciente"
                className="relative z-10 w-64 md:w-72 rounded-2xl shadow-2xl"
              />
            </div>

            {/* Avaliação */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[#C9A84C] fill-[#C9A84C]" />
              ))}
              <span className="text-sm text-[#6B6B6B] ml-2 font-medium">Bestseller Nacional</span>
            </div>

            {/* Bônus */}
            <div className="bg-white border border-[#E8E3DA] rounded-2xl p-6 w-full">
              <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-bold mb-4">
                🎁 Bônus Exclusivos — 1ª Edição
              </p>
              <div className="space-y-3">
                {bonus.map(b => (
                  <div key={b.tipo} className="flex items-start gap-3">
                    <span className="bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-bold px-2 py-1 rounded-md shrink-0">
                      {b.tipo}
                    </span>
                    <span className="text-[#444] text-sm">{b.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-10">

            {/* Para quem */}
            <div className="bg-white border border-[#E8E3DA] rounded-2xl p-7">
              <h3
                className="text-[#111] font-bold text-xl mb-5"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Para Quem É Este Livro?
              </h3>
              <ul className="space-y-3">
                {paraQuem.map(p => (
                  <li key={p} className="flex items-start gap-3 text-sm text-[#444]">
                    <Check size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Capítulos */}
            <div>
              <h3
                className="text-[#111] font-bold text-xl mb-5"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                O Que Você Vai Encontrar
              </h3>
              <div className="space-y-3">
                {capitulos.map((c, i) => (
                  <div
                    key={c.titulo}
                    className="flex gap-4 py-4 border-b border-[#E8E3DA] last:border-0"
                  >
                    <span
                      className="text-[#C9A84C] font-bold text-sm shrink-0 mt-0.5"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-[#111] text-sm font-semibold">{c.titulo}</p>
                      <p className="text-[#8A8A8A] text-xs mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contato"
              onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary w-full justify-center"
            >
              <BookOpen size={16} />
              Quero Viver a Performance Consciente
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
