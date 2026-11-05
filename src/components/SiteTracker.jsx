import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { capturarUtm, obterSessionId, gerarPageviewId, trackDuracao } from '../utils/utm.js'

const TRACK_URL = 'https://159-65-201-242.sslip.io/api/site-acessos/track'

export default function SiteTracker() {
  const location = useLocation()
  // Guarda o id da página atual + quando ela abriu, pra calcular a duração
  // na hora de sair. Um ref porque isso não deve disparar re-render.
  const pageviewRef = useRef({ id: null, inicio: null })

  useEffect(() => {
    const pageviewId = gerarPageviewId()
    const utm = capturarUtm()
    const payload = JSON.stringify({
      pageviewId,
      path: location.pathname,
      referrer: document.referrer || '',
      largura: window.innerWidth,
      sessionId: obterSessionId(),
      gclid: utm.gclid || '',
      utmSource: utm.utm_source || '',
      utmCampaign: utm.utm_campaign || '',
    })
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(TRACK_URL, new Blob([payload], { type: 'application/json' }))
      } else {
        fetch(TRACK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(() => {})
      }
    } catch { /* falha silenciosa — nunca deve afetar a navegação do visitante */ }

    pageviewRef.current = { id: pageviewId, inicio: Date.now() }

    // Só manda a duração uma vez por página vista — "hidden" e "pagehide"
    // podem disparar os dois na mesma saída (ex: troca de aba antes de
    // fechar), e `inicio = null` depois do primeiro envio evita duplicar.
    const enviarDuracao = () => {
      const { id, inicio } = pageviewRef.current
      if (!id || !inicio) return
      trackDuracao(id, Date.now() - inicio)
      pageviewRef.current.inicio = null
    }
    const aoTrocarVisibilidade = () => { if (document.visibilityState === 'hidden') enviarDuracao() }

    document.addEventListener('visibilitychange', aoTrocarVisibilidade)
    document.addEventListener('pagehide', enviarDuracao)

    return () => {
      enviarDuracao() // troca de rota dentro do próprio site (SPA)
      document.removeEventListener('visibilitychange', aoTrocarVisibilidade)
      document.removeEventListener('pagehide', enviarDuracao)
    }
  }, [location.pathname])

  return null
}
