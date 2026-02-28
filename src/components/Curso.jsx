import { GraduationCap, Users, Check, ArrowRight } from 'lucide-react'

const modulosCurso = [
  '12 m\u00f3dulos de conte\u00fado exclusivo',
  'Mentorias personalizadas ao vivo',
  'Acesso vital\u00edcio ao conte\u00fado',
  'Certificado de conclus\u00e3o',
  'Comunidade exclusiva de alunos',
  'Materiais complementares em PDF',
]

export default function Curso() {
  return (
    <section id="curso" className="py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-16">
          <p className="section-label mb-4">Transforma&ccedil;&atilde;o Total</p>
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <h2 className="section-title">
              A Arte dos<br /><span className="text-[#C9A84C]">Neg&oacute;cios</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Mais do que um curso &mdash; uma jornada transformadora que combina d&eacute;cadas de
              experi&ecirc;ncia pr&aacute;tica com as metodologias mais avan&ccedil;adas de gest&atilde;o.
            </p>
          </div>
          <div className="gold-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Curso */}
          <div className="bg-[#161616] border border-white/5 rounded-xl p-8 card-lift">
            <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center mb-6">
              <GraduationCap size={24} className="text-[#C9A84C]" />
            </div>
            <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-bold mb-2">
              Curso Completo
            </p>
            <h3
              className="text-white font-bold text-2xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              A Arte dos Neg&oacute;cios
            </h3>
            <p className="text-white/40 mb-6 leading-relaxed text-sm">
              Uma experi&ecirc;ncia que combina d&eacute;cadas de pr&aacute;tica com as mais avan&ccedil;adas
              metodologias de gest&atilde;o e lideran&ccedil;a empresarial.
            </p>
            <ul className="space-y-3 mb-8">
              {modulosCurso.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/60">
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
          <div className="rounded-xl p-8 card-lift relative overflow-hidden bg-gradient-to-br from-[#C9A84C]/10 to-[#0A0A0A] border border-[#C9A84C]/20">
            {/* Badge */}
            <div className="absolute top-6 right-6 bg-[#C9A84C] text-[#0A0A0A] text-[0.65rem] font-bold px-3 py-1 rounded uppercase tracking-wider">
              Exclusivo
            </div>

            <div className="w-14 h-14 bg-[#C9A84C]/15 rounded-lg flex items-center justify-center mb-6">
              <Users size={24} className="text-[#C9A84C]" />
            </div>
            <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-bold mb-2">
              Grupo Seleto
            </p>
            <h3
              className="text-white font-bold text-2xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Mentoria da Trinca
            </h3>
            <p className="text-white/40 mb-8 leading-relaxed text-sm">
              Programa exclusivo de mentoria em grupo pequeno, limitado a apenas{' '}
              <strong className="text-[#C9A84C]">3 participantes por ciclo</strong>.
              Uma experi&ecirc;ncia &uacute;nica de aprendizado com foco em resultados pr&aacute;ticos.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { n: '3',  l: 'Participantes' },
                { n: '6',  l: 'Meses' },
                { n: '24', l: 'Sess\u00f5es' },
              ].map(d => (
                <div key={d.l} className="text-center bg-[#0A0A0A]/60 rounded-lg p-4 border border-white/5">
                  <p
                    className="font-bold text-[#C9A84C] leading-none"
                    style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem' }}
                  >
                    {d.n}
                  </p>
                  <p className="text-xs text-white/30 mt-2">{d.l}</p>
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
