import { Mic, ArrowRight } from 'lucide-react'

const palestras = [
  {
    num: '01',
    titulo: 'Coragem',
    desc: 'Quando temos coragem de entrar na nossa própria história e reconhecê-la, temos a chance de escrever o final. Coragem é essencial para se expor, experimentar riscos e inovar, sem abrir mão dos próprios valores.',
  },
  {
    num: '02',
    titulo: 'Crescimento Disruptivo',
    desc: 'Como romper o óbvio e transformar mercados? Casos reais de crescimento acelerado com inovação, execução e visão estratégica.',
  },
  {
    num: '03',
    titulo: 'Fermentando Sonhos',
    desc: 'A transformação da Wäls e de outras empresas. Como transformar sonhos em marcas desejadas, empresas lucrativas e negócios que impactam.',
  },
  {
    num: '04',
    titulo: 'Alta Performance nos Negócios',
    desc: 'Alta performance não é sobre trabalhar mais, é sobre trabalhar certo. Disciplina, clareza, cultura forte e execução impecável.',
  },
  {
    num: '05',
    titulo: 'Sede de Vencer',
    desc: 'Uma palestra visceral e realista. José compartilha erros, acertos, dores e vitórias, mostrando como desenvolver a mentalidade antifrágil.',
  },
  {
    num: '06',
    titulo: 'Visão e Execução Estratégica',
    desc: 'Como o novo líder define visão, executa com velocidade e antecipa problemas, criando ambientes colaborativos e culturas fortes.',
  },
]

export default function Palestras() {
  return (
    <section id="palestras" className="py-28 bg-[#F4F1EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">Inspire sua Equipe</p>
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <h2 className="section-title">
              Palestras e<br /><em className="not-italic text-[#C9A84C]">Eventos</em>
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              José Felipe leva para o palco sua história de transformação, superação
              e construção de negócios que quebram padrões.
            </p>
          </div>
          <div className="gold-line" />
        </div>

        {/* Lista de palestras */}
        <div className="space-y-0 mb-16">
          {palestras.map((p, i) => (
            <div
              key={p.num}
              className="group flex gap-6 md:gap-10 py-8 border-b border-[#E8E3DA] cursor-pointer transition-all duration-300 hover:pl-4"
            >
              <span
                className="text-[#C9A84C] font-bold text-sm shrink-0 mt-1 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {p.num}
              </span>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="text-[#111] font-bold text-xl md:text-2xl group-hover:text-[#C9A84C] transition-colors"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {p.titulo}
                  </h3>
                  <ArrowRight
                    size={18}
                    className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-all shrink-0 mt-1 group-hover:translate-x-1"
                  />
                </div>
                <p className="text-[#6B6B6B] text-sm leading-relaxed mt-2 max-w-2xl">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#111] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-white font-bold text-2xl md:text-3xl mb-2"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Quero Contratar uma Palestra
            </h3>
            <p className="text-white/50 text-sm">
              Receba uma proposta personalizada para o seu evento.
            </p>
          </div>
          <a
            href="#contato"
            onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-gold shrink-0"
          >
            <Mic size={16} />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  )
}
