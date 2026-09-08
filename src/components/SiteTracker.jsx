import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TRACK_URL = 'https://159-65-201-242.sslip.io/api/site-acessos/track'

export default function SiteTracker() {
  const location = useLocation()

  useEffect(() => {
    const payload = JSON.stringify({
      path: location.pathname,
      referrer: document.referrer || '',
      largura: window.innerWidth,
    })
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(TRACK_URL, new Blob([payload], { type: 'application/json' }))
      } else {
        fetch(TRACK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(() => {})
      }
    } catch { /* falha silenciosa — nunca deve afetar a navegação do visitante */ }
  }, [location.pathname])

  return null
}
