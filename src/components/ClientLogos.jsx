const empresas = [
  { nome: 'Unimed', src: '/logos/unimed.svg' },
  { nome: 'FIEMG', src: '/logos/fiemg.svg' },
  { nome: 'Bradesco', src: '/logos/bradesco.png' },
  { nome: 'Bradesco Saúde e Seguros', src: '/logos/bradesco-seguros.svg' },
  { nome: 'Sicoob', src: '/logos/sicoob.svg' },
  { nome: 'Sebrae', src: '/logos/sebrae.svg' },
  { nome: 'Ocyan', src: '/logos/ocyan.svg' },
  { nome: 'Globo', src: '/logos/globo.svg' },
  { nome: 'Vale', src: '/logos/vale.svg' },
  { nome: 'Usiminas', src: '/logos/usiminas.svg' },
  { nome: 'Itambé', src: '/logos/itambe.svg' },
  { nome: 'Banco do Brasil', src: '/logos/banco-do-brasil.svg' },
  { nome: 'Embaré', src: '/logos/embare.svg' },
]

// Dobra a lista pra esteira rolar em loop infinito sem costura.
const trilha = [...empresas, ...empresas]

export default function ClientLogos() {
  return (
    <section className="py-14 md:py-20 bg-[#f7f7f7] border-y border-gray-200 overflow-hidden">
      <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.25em] mb-10 px-6">
        Já levei essa energia para o palco de
      </p>

      <div className="relative w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}>
        <div className="flex items-center gap-16 w-max animate-logo-marquee">
          {trilha.map((e, i) => (
            <img
              key={`${e.nome}-${i}`}
              src={e.src}
              alt={e.nome}
              title={e.nome}
              loading="lazy"
              className="grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300 shrink-0"
              style={{ height: '34px', width: 'auto', objectFit: 'contain' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
