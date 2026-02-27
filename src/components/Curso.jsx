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
    <section id="curso" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#C9A84C] uppercase tracking-[0.25em] text-sm font-medium mb-3">
            Transformação Total
          </p>
          <h2 className="section-title">A Arte dos Negócios</h2>
          <div className="gold-line mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Curso */}
          <div className="bg-[#111] border border-[#222] rounded-2xl p-8 hover:border-[#C9A84C]/40 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
                <GraduationCap size={24} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="text-xs text-[#C9A84C] uppercase tracking-widest">Curso Completo</p>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  A Arte dos Negócios
                </h3>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Mais do que um curso, é uma jornada transformadora que combina décadas de
              experiência prática com as mais avançadas metodologias de gestão e liderança.
            </p>

            <ul className="space-y-3 mb-8">
              {modulosCurso.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <Check size={16} className="text-[#C9A84C] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contato" className="btn-primary w-full justify-center"
               onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <GraduationCap size={18} />
              Inscreva-se Agora
            </a>
          </div>

          {/* Mentoria */}
          <div className="bg-gradient-to-br from-[#C9A84C]/10 to-[#111] border border-[#C9A84C]/40 rounded-2xl p-8 relative overflow-hidden">
            {/* Badge exclusivo */}
            <div className="absolute top-4 right-4 bg-[#C9A84C] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Exclusivo
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                <Users size={24} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="text-xs text-[#C9A84C] uppercase tracking-widest">Grupo Seleto</p>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Mentoria da Trinca
                </h3>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Programa exclusivo de mentoria em grupo pequeno, limitado a apenas{' '}
              <strong className="text-[#C9A84C]">3 participantes por ciclo</strong>.
              Uma experiência única de aprendizado e networking com foco em resultados práticos.
            </p>

            {/* Detalhes */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { n: '3',   l: 'Participantes' },
                { n: '6',   l: 'Meses' },
                { n: '24',  l: 'Sessões' },
              ].map(d => (
                <div key={d.l} className="text-center bg-black/30 rounded-lg p-3">
                  <p className="text-2xl font-bold text-[#C9A84C]"
                     style={{ fontFamily: 'Playfair Display, serif' }}>{d.n}</p>
                  <p className="text-xs text-gray-400 mt-1">{d.l}</p>
                </div>
              ))}
            </div>

            <a href="#contato" className="btn-primary w-full justify-center"
               onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <ArrowRight size={18} />
              Saiba Mais sobre a Mentoria
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
