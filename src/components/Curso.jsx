import { GraduationCap, Users, Check, ArrowRight } from 'lucide-react'

const modulosCurso = [
  '12 módulos de conteúdo exclusivo',
  'Mentorias personalizadas ao vivo',
  'Acesso vitalício ao conteúdo',
  'Certificado de conclusão',
  'Comunidade exclusiva de alunos',
  'Materiais complementares em PDF',
]

export default function Curso() {
  return (
    <section id="curso" className="py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-16">
          <p className="section-label mb-4">Transformação Total</p>
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <h2 className="section-title">
              A Arte dos<br /><em className="not-italic text-[#C9A84C]">Negócios</em>
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              Mais do que um curso — uma jornada transformadora que combina décadas de
              experiência prática com as metodologias mais avançadas de gestão.
            </p>
          </div>
          <div className="gold-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Curso */}
          <div className="bg-white border border-[#E8E3DA] rounded-2xl p-8 card-lift">
            <div className="w-12 h-12 bg-[#111] rounded-xl flex items-center justify-center mb-6">
              <GraduationCap size={22} className="text-[#C9A84C]" />
            </div>
            <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-semibold mb-2">
              Curso Completo
            </p>
            <h3
              className="text-[#111] font-bold text-2xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              A Arte dos Negócios
            </h3>
            <p className="text-[#6B6B6B] mb-6 leading-relaxed text-sm">
              Uma experiência que combina décadas de prática com as mais avançadas
              metodologias de gestão e liderança empresarial.
            </p>
            <ul className="space-y-3 mb-8">
              {modulosCurso.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#444]">
                  <Check size={15} className="text-[#C9A84C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary w-full justify-center"
            >
              <GraduationCap size={16} />
              Inscreva-se Agora
            </a>
          </div>

          {/* Mentoria */}
          <div
            className="rounded-2xl p-8 card-lift relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #111 0%, #1e1a10 100%)' }}
          >
            {/* Badge */}
            <div className="absolute top-6 right-6 bg-[#C9A84C] text-[#111] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Exclusivo
            </div>

            <div className="w-12 h-12 bg-[#C9A84C]/15 rounded-xl flex items-center justify-center mb-6">
              <Users size={22} className="text-[#C9A84C]" />
            </div>
            <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-semibold mb-2">
              Grupo Seleto
            </p>
            <h3
              className="text-white font-bold text-2xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Mentoria da Trinca
            </h3>
            <p className="text-white/50 mb-8 leading-relaxed text-sm">
              Programa exclusivo de mentoria em grupo pequeno, limitado a apenas{' '}
              <strong className="text-[#C9A84C]">3 participantes por ciclo</strong>.
              Uma experiência única de aprendizado com foco em resultados práticos.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { n: '3',  l: 'Participantes' },
                { n: '6',  l: 'Meses' },
                { n: '24', l: 'Sessões' },
              ].map(d => (
                <div key={d.l} className="text-center bg-white/5 rounded-xl p-4 border border-white/10">
                  <p
                    className="font-bold text-[#C9A84C] leading-none"
                    style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem' }}
                  >
                    {d.n}
                  </p>
                  <p className="text-xs text-white/40 mt-2">{d.l}</p>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-gold w-full justify-center"
            >
              <ArrowRight size={16} />
              Saiba Mais sobre a Mentoria
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
