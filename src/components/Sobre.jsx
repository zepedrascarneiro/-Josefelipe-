import { ArrowRight } from 'lucide-react'

export default function Sobre() {
  return (
    <section id="sobre" className="py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Topo */}
        <div className="mb-16">
          <p className="section-label mb-4">Quem sou eu</p>
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <h2 className="section-title">
              Minha<br /><span className="text-[#C9A84C]">Jornada</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              De uma cervejaria familiar em Belo Horizonte a um dos maiores bra&ccedil;os
              de inova&ccedil;&atilde;o da maior empresa de bebidas do mundo.
            </p>
          </div>
          <div className="gold-line" />
        </div>

        {/* Grid foto + texto */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Foto */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full rounded-xl border border-[#C9A84C]/20" />
            <img
              src="https://josefelipe.com.br/lovable-uploads/d08ef557-2a05-4a2c-a1a6-12bb07b532b7.png"
              alt="Jos&eacute; Felipe Carneiro"
              className="relative z-10 w-full rounded-xl object-cover"
              style={{ maxHeight: '600px', objectPosition: 'top' }}
            />
            {/* Badge flutuante */}
            <div className="absolute -bottom-5 -right-5 z-20 bg-[#C9A84C] text-[#0A0A0A] rounded-xl p-5 shadow-2xl">
              <p
                className="font-bold leading-none"
                style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}
              >
                30+
              </p>
              <p className="text-xs text-[#0A0A0A]/60 mt-1 uppercase tracking-widest font-semibold">Pa&iacute;ses</p>
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <div className="space-y-5 text-white/60 leading-relaxed text-base">
              <p>
                Jos&eacute; Felipe Carneiro &eacute; um dos empreendedores mais influentes do Brasil,
                conhecido por transformar uma pequena cervejaria familiar de Belo Horizonte na
                <strong className="text-white"> mais premiada do planeta</strong>.
              </p>
              <p>
                Co-fundador da <strong className="text-[#C9A84C]">Cervejaria W&auml;ls</strong> ao lado do irm&atilde;o Tiago,
                se tornou s&oacute;cio da AMBEV e criou a{' '}
                <strong className="text-[#C9A84C]">ZX Ventures</strong>, bra&ccedil;o de inova&ccedil;&atilde;o da AB InBev que atuou
                em mais de 30 pa&iacute;ses em apenas tr&ecirc;s anos.
              </p>
              <p>
                Nos EUA criou a <strong className="text-[#C9A84C]">Novo Brazil</strong> e uma das maiores hard
                kombuchas do mundo. No Brasil fundou a{' '}
                <strong className="text-[#C9A84C]">Khappy Kombucha</strong> (l&iacute;der em 1 ano), a{' '}
                <strong className="text-[#C9A84C]">Fazenda Cervejeira</strong> e a{' '}
                <strong className="text-[#C9A84C]">Stadt Jever</strong> &mdash; primeira ind&uacute;stria brasileira do campo ao copo.
              </p>
              <p>
                Tamb&eacute;m atua em caf&eacute;s especiais, energia limpa, agroneg&oacute;cio e startups como{' '}
                <strong className="text-[#C9A84C]">Etus</strong>,{' '}
                <strong className="text-[#C9A84C]">Plusdin</strong> e{' '}
                <strong className="text-[#C9A84C]">Dreamz</strong>.
              </p>
            </div>

            {/* Empresas */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { n: 'W\u00e4ls',            s: 'Mais Premiada do Mundo' },
                { n: 'ZX Ventures',     s: 'AB InBev \u00b7 30+ pa\u00edses' },
                { n: 'Khappy Kombucha', s: 'L\u00edder no Brasil' },
                { n: 'Stadt Jever',     s: 'Do Campo ao Copo' },
                { n: 'Novo Brazil',     s: 'San Diego, EUA' },
                { n: 'Fazenda Cervejeira', s: 'Belo Horizonte' },
              ].map(e => (
                <div
                  key={e.n}
                  className="bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-3 card-lift"
                >
                  <p className="text-sm font-semibold text-white">{e.n}</p>
                  <p className="text-xs text-white/30 mt-0.5">{e.s}</p>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              onClick={ev => { ev.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-gold inline-flex mt-4"
            >
              Vamos Conversar <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
