import ReadingProgress   from './components/ReadingProgress'
import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import Sobre             from './components/Sobre'
import Livro             from './components/Livro'

import Palestras         from './components/Palestras'
import Contato           from './components/Contato'
import Footer            from './components/Footer'


export default function App() {
  return (
    <>
      {/* Barra de progresso de leitura — sempre no topo */}
      <ReadingProgress />

      {/* Navegação fixa */}
      <Navbar />

      <main>
        <Hero />
        <Sobre />
        <Livro />

        <Palestras />
        <Contato />
      </main>

      <Footer />
    </>
  )
}
