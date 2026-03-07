import { BookOpen } from 'lucide-react'

export default function Livro() {
  return (
    <section id="livro" className="py-28 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Conteudo */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.05] mb-6 tracking-tight">
              PERFORMANCE
              <br />
              CONSCIENTE
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Vivemos um tempo curioso. Nunca tivemos tantos recursos, tantas ferramentas, tantos métodos e tanta informação disponível. Ainda assim, nunca foi tão comum ver pessoas cansadas, confusas, produtivas por fora e esgotadas por dentro. O paradoxo é evidente. Evoluímos tecnicamente, mas desaprendemos a sustentar o próprio ritmo.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Este livro nasce dessa observação simples e profunda. Não da teoria distante, mas da prática diária. Da vida real. Das decisões que precisam ser tomadas quando não existe manual. Do esforço contínuo de produzir, liderar, criar, sustentar e ainda assim preservar aquilo que não aparece nos relatórios, a clareza, a energia e a paz interna.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Performance Consciente não foi escrito para ensinar alguém a fazer mais. Foi escrito para ajudar pessoas a fazerem melhor. Com mais presença. Mais intenção. Mais domínio sobre o próprio tempo e sobre a própria mente.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Aqui, produtividade não é sinônimo de pressa. Disciplina não é sinônimo de rigidez. Ambição não é sinônimo de ansiedade. Pelo contrário. O que se constrói neste livro é uma nova relação com o trabalho, com os objetivos e com o próprio corpo como instrumento de realização.
            </p>

            <a
              href="#contato"
              onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary"
            >
              <BookOpen size={16} />
              Quero Minha Edição
            </a>
          </div>

          {/* Capa */}
          <div className="flex justify-center">
            <img
              src="/livro-capa.jpg"
              alt="Capa do Livro Performance Consciente"
              className="w-full max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
