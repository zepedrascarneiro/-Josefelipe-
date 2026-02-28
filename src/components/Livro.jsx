import { BookOpen, Star, Check } from 'lucide-react'

const capitulos = [
  { titulo: 'Modelo de Princ\u00edpios Pessoais',    desc: 'Um sistema pr\u00e1tico para tomar decis\u00f5es sem se perder no caminho.' },
  { titulo: 'Meritocracia de Ideias',            desc: 'T\u00e9cnicas para fazer a melhor proposta vencer, independentemente de hierarquia.' },
  { titulo: 'Dashboard de Feedback em 24h',      desc: 'Como loops de ajuste r\u00e1pido aumentam engajamento.' },
  { titulo: 'Carteira "All-Clima" de Neg\u00f3cios',  desc: 'Use diversifica\u00e7\u00e3o de risco para prosperar em qualquer cen\u00e1rio.' },
  { titulo: 'Ritual de Autoconsci\u00eancia Di\u00e1ria',  desc: 'Journaling + pausas estrat\u00e9gicas elevam foco e criatividade.' },
  { titulo: 'Ferramentas para Work-Life Balance', desc: 'Sa\u00fade e fam\u00edlia tanto quanto resultado \u2014 o modelo p\u00f3s-pandemia.' },
]

const bonus = [
  { tipo: 'Checklist',  desc: '\u201cPrinc\u00edpios em 10 minutos\u201d' },
  { tipo: 'Planilha',   desc: 'Dashboard di\u00e1rio de performance consciente' },
  { tipo: 'Workshop',   desc: 'Acesso a workshop online ao vivo com o autor' },
]

const paraQuem = [
  'Cansados de f\u00f3rmulas prontas de produtividade e querem profundidade.',
  'Lideram empresas, projetos ou times e sentem o peso dos resultados.',
  'Buscam equil\u00edbrio entre performance consciente e paz de esp\u00edrito.',
  'Gostam de pensar diferente, questionar verdades f\u00e1ceis.',
  'Valorizam consist\u00eancia, significado e verdade.',
]

export default function Livro() {
  return (
    <section id="livro" className="py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">Alta Performance, Paz de Esp&iacute;rito</p>
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <h2 className="section-title">
              Performance<br /><span className="text-[#C9A84C]">Consciente</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Pare de correr no piloto autom&aacute;tico. Aprenda a liderar com presen&ccedil;a,
              prop&oacute;sito e resultados reais.
            </p>
          </div>
          <div className="gold-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Capa */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#C9A84C]/10 rounded-xl blur-2xl group-hover:bg-[#C9A84C]/20 transition-all duration-500" />
              <img
                src="https://josefelipe.com.br/lovable-uploads/326762f8-2ad7-4e2a-877e-30bb893c60e2.png"
                alt="Capa do Livro Performance Consciente"
                className="relative z-10 w-64 md:w-72 rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Avaliacao */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[#C9A84C] fill-[#C9A84C]" />
              ))}
              <span className="text-sm text-white/40 ml-2 font-medium">Bestseller Nacional</span>
            </div>

            {/* Bonus */}
            <div className="bg-[#161616] border border-white/5 rounded-xl p-6 w-full">
              <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-bold mb-4">
                B&ocirc;nus Exclusivos &mdash; 1&ordf; Edi&ccedil;&atilde;o
              </p>
              <div className="space-y-3">
                {bonus.map(b => (
                  <div key={b.tipo} className="flex items-start gap-3">
                    <span className="bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-bold px-2 py-1 rounded shrink-0">
                      {b.tipo}
                    </span>
                    <span className="text-white/60 text-sm">{b.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conteudo */}
          <div className="space-y-10">

            {/* Para quem */}
            <div className="bg-[#161616] border border-white/5 rounded-xl p-7">
              <h3
                className="text-white font-bold text-xl mb-5"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Para Quem &Eacute; Este Livro?
              </h3>
              <ul className="space-y-3">
                {paraQuem.map(p => (
                  <li key={p} className="flex items-start gap-3 text-sm text-white/60">
                    <Check size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Capitulos */}
            <div>
              <h3
                className="text-white font-bold text-xl mb-5"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                O Que Voc&ecirc; Vai Encontrar
              </h3>
              <div className="space-y-0">
                {capitulos.map((c, i) => (
                  <div
                    key={c.titulo}
                    className="flex gap-4 py-4 border-b border-white/5 last:border-0 group hover:pl-2 transition-all"
                  >
                    <span
                      className="text-[#C9A84C] font-bold text-sm shrink-0 mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-white text-sm font-semibold group-hover:text-[#C9A84C] transition-colors">{c.titulo}</p>
                      <p className="text-white/30 text-xs mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contato"
              onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-gold w-full justify-center"
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
