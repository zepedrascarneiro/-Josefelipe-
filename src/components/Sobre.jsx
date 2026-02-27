import { ArrowRight } from 'lucide-react'

export default function Sobre() {
  return (
    <section id="sobre" className="py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Topo */}
        <div className="mb-16">
          <p className="section-label mb-4">Quem sou eu</p>
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <h2 className="section-title">
              Minha<br /><em className="not-italic text-[#C9A84C]">Jornada</em>
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              De uma cervejaria familiar em Belo Horizonte a um dos maiores braços
              de inovação da maior empresa de bebidas do mundo.
            </p>
          </div>
          <div className="gold-line" />
        </div>

        {/* Grid foto + texto */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Foto */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #C9A84C22 0%, #F4F1EB 100%)' }}
            />
            <img
              src="https://josefelipe.com.br/lovable-uploads/d08ef557-2a05-4a2c-a1a6-12bb07b532b7.png"
              alt="José Felipe Carneiro"
              className="relative z-10 w-full rounded-2xl object-cover shadow-xl"
              style={{ maxHeight: '600px', objectPosition: 'top' }}
            />
            {/* Badge flutuante */}
            <div className="absolute -bottom-5 -right-5 z-20 bg-[#111] text-white rounded-2xl p-5 shadow-2xl">
              <p
                className="font-bold text-[#C9A84C] leading-none"
                style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}
              >
                30+
              </p>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-widest">Países</p>
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <div className="space-y-5 text-[#444] leading-relaxed text-base">
              <p>
                José Felipe Carneiro é um dos empreendedores mais influentes do Brasil,
                conhecido por transformar uma pequena cervejaria familiar de Belo Horizonte na
                <strong className="text-[#111]"> mais premiada do planeta</strong>.
              </p>
              <p>
                Co-fundador da <strong className="text-[#C9A84C]">Cervejaria Wäls</strong> ao lado do irmão Tiago,
                se tornou sócio da AMBEV e criou a{' '}
                <strong className="text-[#C9A84C]">ZX Ventures</strong>, braço de inovação da AB InBev que atuou
                em mais de 30 países em apenas três anos.
              </p>
              <p>
                Nos EUA criou a <strong className="text-[#C9A84C]">Novo Brazil</strong> e uma das maiores hard
                kombuchas do mundo. No Brasil fundou a{' '}
                <strong className="text-[#C9A84C]">Khappy Kombucha</strong> (líder em 1 ano), a{' '}
                <strong className="text-[#C9A84C]">Fazenda Cervejeira</strong> e a{' '}
                <strong className="text-[#C9A84C]">Stadt Jever</strong> — primeira indústria brasileira do campo ao copo.
              </p>
              <p>
                Também atua em cafés especiais, energia limpa, agronegócio e startups como{' '}
                <strong className="text-[#C9A84C]">Etus</strong>,{' '}
                <strong className="text-[#C9A84C]">Plusdin</strong> e{' '}
                <strong className="text-[#C9A84C]">Dreamz</strong>.
              </p>
            </div>

            {/* Empresas */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { n: 'Wäls',            s: 'Mais Premiada do Mundo' },
                { n: 'ZX Ventures',     s: 'AB InBev · 30+ países' },
                { n: 'Khappy Kombucha', s: 'Líder no Brasil' },
                { n: 'Stadt Jever',     s: 'Do Campo ao Copo' },
                { n: 'Novo Brazil',     s: 'San Diego, EUA' },
                { n: 'Fazenda Cervejeira', s: 'Belo Horizonte' },
              ].map(e => (
                <div
                  key={e.n}
                  className="bg-white border border-[#E8E3DA] rounded-xl px-4 py-3 card-lift"
                >
                  <p className="text-sm font-semibold text-[#111]">{e.n}</p>
                  <p className="text-xs text-[#9A9A9A] mt-0.5">{e.s}</p>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              onClick={ev => { ev.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary inline-flex mt-4"
            >
              Vamos Conversar <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
