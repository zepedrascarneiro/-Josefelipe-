import ReadingProgress   from './components/ReadingProgress'
import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import Sobre             from './components/Sobre'
import Livro             from './components/Livro'

import Palestras         from './components/Palestras'
import Valuation         from './components/Valuation'
import Contato           from './components/Contato'
import Footer            from './components/Footer'
import PopupNewsletter   from './components/PopupNewsletter'

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
        <Valuation />
        <Contato />
      </main>

      <Footer />

      {/* Popup do livro (aparece após 3.5s, 1x por sessão) */}
      <PopupNewsletter />
    </>
  )
}
