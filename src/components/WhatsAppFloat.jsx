import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { trackEvento } from '../utils/utm.js'

const WA_LINK = 'https://wa.me/5531990997409?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20palestras%20do%20Jos%C3%A9%20Felipe.'

// Botão único, fixo em todas as páginas do site (home, /livro, /palestras, /nucleox).
// Fora do ar em /usa: a oferta de palestras não faz sentido nessa página de prospecção de investidores.
export default function WhatsAppFloat() {
  const { pathname } = useLocation()
  if (pathname.startsWith('/usa')) return null
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      whileHover={{ scale: 1.04 }}
      className="flex items-center justify-center gap-2.5 w-[60px] h-[60px] sm:w-auto sm:h-auto rounded-full sm:pl-4 sm:pr-5 sm:py-3.5"
      style={{
        position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
        backgroundColor: '#25D366', color: '#fff',
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)', textDecoration: 'none',
      }}
      onClick={() => {
        if (typeof window.gtag === 'function') window.gtag('event', 'contact_whatsapp', { event_category: 'global' })
        trackEvento('whatsapp_click', pathname)
      }}
      aria-label="Palestras e orçamento pelo WhatsApp"
    >
      <MessageCircle size={28} className="shrink-0" />
      <span className="hidden sm:inline text-sm font-bold whitespace-nowrap">
        Palestras e orçamento
      </span>
    </motion.a>
  )
}
