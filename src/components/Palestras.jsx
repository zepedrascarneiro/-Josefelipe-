import { Mic, ArrowRight } from 'lucide-react'

const palestras = [
  {
    num: '01',
    titulo: 'Coragem',
    desc: 'Quando temos coragem de entrar na nossa pr\u00f3pria hist\u00f3ria e reconhec\u00ea-la, temos a chance de escrever o final. Coragem \u00e9 essencial para se expor, experimentar riscos e inovar, sem abrir m\u00e3o dos pr\u00f3prios valores.',
  },
  {
    num: '02',
    titulo: 'Crescimento Disruptivo',
    desc: 'Como romper o \u00f3bvio e transformar mercados? Casos reais de crescimento acelerado com inova\u00e7\u00e3o, execu\u00e7\u00e3o e vis\u00e3o estrat\u00e9gica.',
  },
  {
    num: '03',
    titulo: 'Fermentando Sonhos',
    desc: 'A transforma\u00e7\u00e3o da W\u00e4ls e de outras empresas. Como transformar sonhos em marcas desejadas, empresas lucrativas e neg\u00f3cios que impactam.',
  },
  {
    num: '04',
    titulo: 'Alta Performance nos Neg\u00f3cios',
    desc: 'Alta performance n\u00e3o \u00e9 sobre trabalhar mais, \u00e9 sobre trabalhar certo. Disciplina, clareza, cultura forte e execu\u00e7\u00e3o impec\u00e1vel.',
  },
  {
    num: '05',
    titulo: 'Sede de Vencer',
    desc: 'Uma palestra visceral e realista. Jos\u00e9 compartilha erros, acertos, dores e vit\u00f3rias, mostrando como desenvolver a mentalidade antifr\u00e1gil.',
  },
  {
    num: '06',
    titulo: 'Vis\u00e3o e Execu\u00e7\u00e3o Estrat\u00e9gica',
    desc: 'Como o novo l\u00edder define vis\u00e3o, executa com velocidade e antecipa problemas, criando ambientes colaborativos e culturas fortes.',
  },
]

export default function Palestras() {
  return (
    <section id="palestras" className="py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">Inspire sua Equipe</p>
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <h2 className="section-title">
              Palestras e<br /><span className="text-[#C9A84C]">Eventos</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Jos&eacute; Felipe leva para o palco sua hist&oacute;ria de transforma&ccedil;&atilde;o, supera&ccedil;&atilde;o
              e constru&ccedil;&atilde;o de neg&oacute;cios que quebram padr&otilde;es.
            </p>
          </div>
          <div className="gold-line" />
        </div>

        {/* Lista de palestras */}
        <div className="space-y-0 mb-16">
          {palestras.map((p) => (
            <div
              key={p.num}
              className="group flex gap-6 md:gap-10 py-8 border-b border-white/5 cursor-pointer transition-all duration-300 hover:pl-4"
            >
              <span
                className="text-[#C9A84C] font-bold text-sm shrink-0 mt-1 opacity-30 group-hover:opacity-100 transition-opacity"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {p.num}
              </span>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="text-white font-bold text-xl md:text-2xl group-hover:text-[#C9A84C] transition-colors"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {p.titulo}
                  </h3>
                  <ArrowRight
                    size={18}
                    className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-all shrink-0 mt-1 group-hover:translate-x-1"
                  />
                </div>
                <p className="text-white/40 text-sm leading-relaxed mt-2 max-w-2xl">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] rounded-xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-[#0A0A0A] font-bold text-2xl md:text-3xl mb-2"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Quero Contratar uma Palestra
            </h3>
            <p className="text-[#0A0A0A]/60 text-sm">
              Receba uma proposta personalizada para o seu evento.
            </p>
          </div>
          <a
            href="#contato"
            onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#0A0A0A] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#1A1A1A] transition-all"
          >
            <Mic size={16} />
            Solicitar Or&ccedil;amento
          </a>
        </div>
      </div>
    </section>
  )
}
