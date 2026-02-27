import { ArrowRight } from 'lucide-react'

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Foto */}
        <div className="relative">
          <div className="absolute -inset-4 border border-[#C9A84C]/20 rounded-lg" />
          <img
            src="https://zxxoolda.manus.space/assets/jose_felipe_foto-AXAoRZwc.jpg"
            alt="José Felipe Carneiro"
            className="w-full rounded-lg object-cover shadow-2xl relative z-10"
          />
          {/* Badge flutuante */}
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

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Sou um dos empreendedores mais influentes do Brasil, reconhecido pela
              capacidade única de transformar ideias em negócios bilionários. Como
              co-fundador da <span className="text-[#C9A84C] font-semibold">AMBEV</span> e
              criador da <span className="text-[#C9A84C] font-semibold">Zx Ventures</span>,
              o braço de inovação da ABInbev, revolucionei o mercado de bebidas em escala global.
            </p>
            <p>
              Minha trajetória empresarial impressiona pelos números: atuação em quase{' '}
              <strong className="text-white">30 países</strong>, dezenas de marcas sob minha
              liderança, incluindo as icônicas Bohemia, Colorado e Wäls.
            </p>
            <p>
              Mais que empreendedor de sucesso, carrego o DNA de um líder que envolve e inspira —
              alguém que move sua equipe a entregar o melhor, não pela pressão de metas,
              mas pela <span className="text-[#C9A84C] font-semibold">motivação compartilhada</span>.
            </p>
          </div>

          {/* Grid de conquistas */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { n: '30+', l: 'Países de atuação' },
              { n: '50+', l: 'Marcas lideradas' },
              { n: '1000+', l: 'Palestras realizadas' },
              { n: '10K+', l: 'Vidas transformadas' },
            ].map(item => (
              <div key={item.l} className="bg-[#111] border border-[#222] rounded-lg p-4">
                <p className="text-2xl font-bold text-[#C9A84C]"
                   style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.n}
                </p>
                <p className="text-sm text-gray-400 mt-1">{item.l}</p>
              </div>
            ))}
          </div>

          <a
            href="#contato"
            onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary mt-8 inline-flex"
          >
            Conheça Minha História Completa <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
