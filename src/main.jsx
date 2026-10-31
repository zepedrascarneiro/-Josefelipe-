import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PalestrasPage from './pages/PalestrasPage.jsx'
import LivroPage from './pages/LivroPage.jsx'
import NucleoxPage from './pages/NucleoxPage.jsx'
import UsaPage from './pages/UsaPage.jsx'
import GoMilesPage from './pages/GoMilesPage.jsx'
import SiteTracker from './components/SiteTracker.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

// GitHub Pages SPA redirect handler
const redirect = sessionStorage.getItem('spa-redirect')
if (redirect) {
  sessionStorage.removeItem('spa-redirect')
  window.history.replaceState(null, '', redirect)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SiteTracker />
      <WhatsAppFloat />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/palestras" element={<PalestrasPage />} />
        <Route path="/livro" element={<LivroPage />} />
        <Route path="/nucleox" element={<NucleoxPage />} />
        <Route path="/usa" element={<UsaPage />} />
        <Route path="/go-miles" element={<GoMilesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
