import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { capturarUtm } from '../utils/utm.js'

// Quem clica num anúncio pago (gclid) e cai na home vê o popup do livro
// (suprimido, ok) mas ainda assim um hero genérico — bem menos focado do que
// /palestras, que já tem CTA de contratar e prova social, sem nada competindo.
// Enquanto a campanha no Google Ads não for ajustada pra apontar direto pra
// lá, corrige aqui na entrada: tráfego pago sem campanha explícita pra outra
// coisa (livro, valuation, nucleox, mentoria) é tratado como intenção de
// palestra e redirecionado — não mexe em quem já tem destino claro.
export default function AdsRedirect() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname !== '/') return
    const utm = capturarUtm()
    if (!utm.gclid) return
    const campanha = (utm.utm_campaign || '').toLowerCase()
    const destinoExplicito = ['livro', 'book', 'valuation', 'nucleox', 'mentoria'].some(p => campanha.includes(p))
    if (destinoExplicito) return
    navigate('/palestras' + location.search, { replace: true })
  }, [location, navigate])

  return null
}
