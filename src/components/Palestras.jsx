import { Mic, Check, ArrowRight } from 'lucide-react'

const palestras = [
  {
    titulo: 'Coragem',
    desc: 'Quando temos coragem de entrar na nossa própria história e (re)conhecê-la, temos a chance de escrever o final. Coragem é essencial para se expor, experimentar riscos e inovar, sem abrir mão dos próprios valores.',
  },
  {
    titulo: 'Crescimento Disruptivo',
    desc: 'Como romper o óbvio e transformar mercados? Casos reais de crescimento acelerado com inovação, execução e visão estratégica.',
  },
  {
    titulo: 'Fermentando Sonhos',
    desc: 'A transformação da Wäls e de outras empresas. Como transformar sonhos em marcas desejadas, empresas lucrativas e negócios que impactam.',
  },
  {
    titulo: 'Alta Performance nos Negócios',
    desc: 'Alta performance não é sobre trabalhar mais, é sobre trabalhar certo. Disciplina, clareza, cultura forte e execução impecável.',
  },
  {
    titulo: 'Sede de Vencer',
    desc: 'Uma palestra visceral e realista. José compartilha erros, acertos, dores e vitórias, mostrando como desenvolver a mentalidade antifrágil.',
  },
  {
    titulo: 'Visão e Execução Estratégica',
    desc: 'Como o novo líder define visão, executa com velocidade e antecipa problemas, criando ambientes colaborativos e culturas fortes.',
  },
]

export default function Palestras() {
  return (
    <section id="palestras" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#C9A84C] uppercase tracking-[0.25em] text-sm font-medium mb-3">
            Inspire sua Equipe
          </p>
          <h2 className="section-title">Palestras e Eventos</h2>
          <div className="gold-line mx-auto" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            José Felipe leva para o palco sua história de transformação, superação e
            construção de negócios que quebram padrões e impactam o mercado.
          </p>
        </div>

        {/* Grid de palestras */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {palestras.map(p => (
            <div
              key={p.titulo}
              className="bg-[#0A0A0A] border border-[#222] rounded-xl p-6 hover:border-[#C9A84C]/40 hover:bg-[#0d0d0d] transition-all duration-300 group"
            >
              <div className="w-8 h-1 bg-[#C9A84C] mb-4 group-hover:w-14 transition-all duration-300" />
              <h3 className="text-white font-bold text-lg mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                {p.titulo}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#C9A84C]/5 via-[#C9A84C]/10 to-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Quero Contratar uma Palestra
          </h3>
          <p className="text-gray-400 mb-6">
            Entre em contato para receber uma proposta personalizada para seu evento.
          </p>
          <a
            href="#contato"
            onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary"
          >
            <Mic size={18} />
            Solicitar Orçamento
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
