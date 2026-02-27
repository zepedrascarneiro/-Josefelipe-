import { ArrowRight } from 'lucide-react'

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Foto */}
        <div className="relative">
          <div className="absolute -inset-4 border border-[#C9A84C]/20 rounded-lg" />
          <img
            src="https://josefelipe.com.br/lovable-uploads/d08ef557-2a05-4a2c-a1a6-12bb07b532b7.png"
            alt="José Felipe Carneiro"
            className="w-full rounded-lg object-cover shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-6 -right-6 bg-[#C9A84C] text-black rounded-lg p-4 shadow-xl z-20">
            <p className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>30+</p>
            <p className="text-xs font-semibold uppercase tracking-wide">Países</p>
          </div>
        </div>

        {/* Texto */}
        <div>
          <p className="text-[#C9A84C] uppercase tracking-[0.25em] text-sm font-medium mb-3">
            Quem sou eu
          </p>
          <h2 className="section-title">José Felipe Carneiro</h2>
          <div className="gold-line" />

          <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
            <p>
              José Felipe Carneiro é um dos empreendedores mais influentes do Brasil,
              conhecido por transformar uma pequena cervejaria familiar de Belo Horizonte na
              mais premiada do planeta.
            </p>
            <p>
              Co-fundador da <span className="text-[#C9A84C] font-semibold">Cervejaria Wäls</span> ao
              lado do irmão Tiago, se tornou sócio da AMBEV e criou a{' '}
              <span className="text-[#C9A84C] font-semibold">ZX Ventures</span>, braço de inovação
              da AB InBev que atuou em mais de 30 países em apenas três anos.
            </p>
            <p>
              Nos EUA criou a <span className="text-[#C9A84C] font-semibold">Novo Brazil</span> e uma
              das maiores hard kombuchas do mundo. No Brasil fundou a{' '}
              <span className="text-[#C9A84C] font-semibold">Khappy Kombucha</span> (líder em 1 ano),
              a <span className="text-[#C9A84C] font-semibold">Fazenda Cervejeira</span> e a{' '}
              <span className="text-[#C9A84C] font-semibold">Stadt Jever</span> — primeira indústria
              brasileira do campo ao copo.
            </p>
            <p>
              Também atua em cafés especiais, energia limpa, agronegócio e startups como{' '}
              <span className="text-[#C9A84C] font-semibold">Etus</span>,{' '}
              <span className="text-[#C9A84C] font-semibold">Plusdin</span> e{' '}
              <span className="text-[#C9A84C] font-semibold">Dreamz</span>.
            </p>
          </div>

          {/* Empresas */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              'Wäls — Mais Premiada do Mundo',
              'ZX Ventures — AB InBev',
              'Khappy Kombucha — Líder BR',
              'Stadt Jever — Do Campo ao Copo',
              'Novo Brazil — San Diego',
              'Fazenda Cervejeira — BH',
            ].map(e => (
              <div key={e} className="bg-[#111] border border-[#222] rounded-lg px-3 py-2">
                <p className="text-xs text-gray-300">{e}</p>
              </div>
            ))}
          </div>

          <a
            href="#contato"
            onClick={ev => { ev.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary mt-8 inline-flex"
          >
            Vamos Conversar <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
