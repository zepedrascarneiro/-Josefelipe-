import { GraduationCap, Users, ArrowRight } from 'lucide-react'

export default function Curso() {
  return (
    <section id="curso" className="py-28 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest mb-4">
            Transformação Total
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] tracking-tight">
            A ARTE DOS NEGÓCIOS
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Curso */}
          <div className="bg-white border border-gray-200 p-10 hover:border-black transition-colors">
            <GraduationCap size={28} className="text-black mb-6" />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              Curso Completo
            </p>
            <h3 className="text-2xl font-bold text-black mb-4">
              A Arte dos Negócios
            </h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Uma experiência que combina décadas de prática com as mais avançadas
              metodologias de gestão e liderança empresarial.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-gray-600">
              {[
                '12 módulos de conteúdo exclusivo',
                'Mentorias personalizadas ao vivo',
                'Acesso vitalício ao conteúdo',
                'Certificado de conclusão',
                'Comunidade exclusiva de alunos',
                'Materiais complementares em PDF',
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary w-full justify-center"
            >
              Inscreva-se Agora
            </a>
          </div>

          {/* Mentoria */}
          <div className="bg-black text-white p-10">
            <Users size={28} className="text-white mb-6" />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              Grupo Seleto · Exclusivo
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">
              Mentoria da Trinca
            </h3>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Programa exclusivo de mentoria em grupo pequeno, limitado a apenas{' '}
              <strong className="text-white">3 participantes por ciclo</strong>.
              Uma experiência única de aprendizado com foco em resultados práticos.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { n: '3', l: 'Participantes' },
                { n: '6', l: 'Meses' },
                { n: '24', l: 'Sessões' },
              ].map(d => (
                <div key={d.l} className="text-center border border-gray-700 p-4">
                  <p className="text-3xl font-extrabold text-white">{d.n}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.l}</p>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 w-full justify-center py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all"
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
