// Captura utm_source/medium/campaign/term/content + gclid (Google Ads) da URL
// na primeira visita e guarda na sessão, pra sobreviver até o lead preencher
// o formulário (mesmo que isso aconteça em outra página/depois de navegar).
const STORAGE_KEY = 'jfc_utm'
const CAMPOS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid']

export function capturarUtm() {
  try {
    const params = new URLSearchParams(window.location.search)
    const atual = {}
    let temAlgo = false
    CAMPOS.forEach(c => {
      const v = params.get(c)
      if (v) { atual[c] = v; temAlgo = true }
    })
    if (temAlgo) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(atual))
      return atual
    }
    const salvo = sessionStorage.getItem(STORAGE_KEY)
    return salvo ? JSON.parse(salvo) : {}
  } catch {
    return {}
  }
}

// Um id por sessão de navegador, pra conseguir agrupar as páginas vistas e os
// cliques (WhatsApp/Instagram) de uma mesma visita — sem usar cookie nem
// identificar a pessoa, só a sessão do próprio navegador.
const SESSION_KEY = 'jfc_sid'
export function obterSessionId() {
  try {
    let sid = sessionStorage.getItem(SESSION_KEY)
    if (!sid) {
      sid = Date.now().toString(36) + Math.random().toString(36).slice(2, 10)
      sessionStorage.setItem(SESSION_KEY, sid)
    }
    return sid
  } catch {
    return null
  }
}

// Um id por página vista (não por sessão) — liga o pageview inicial, mandado
// assim que a página abre, ao evento de duração, mandado só quando o
// visitante sai dela. Não precisa sobreviver reload nem ir pro storage.
export function gerarPageviewId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

// Clique em WhatsApp/Instagram — melhor esforço, nunca deve travar a navegação.
// Mesmo padrão de sendBeacon do SiteTracker, pra sobreviver ao usuário saindo
// da aba logo depois do clique.
const EVENTO_URL = 'https://159-65-201-242.sslip.io/api/site-acessos/evento'
export function trackEvento(tipo, path) {
  try {
    const utm = capturarUtm()
    const payload = JSON.stringify({
      tipo, path,
      sessionId: obterSessionId(),
      gclid: utm.gclid || '',
      utmSource: utm.utm_source || '',
      utmCampaign: utm.utm_campaign || '',
    })
    if (navigator.sendBeacon) {
      navigator.sendBeacon(EVENTO_URL, new Blob([payload], { type: 'application/json' }))
    } else {
      fetch(EVENTO_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(() => {})
    }
  } catch { /* falha silenciosa */ }
}

// Quanto tempo o visitante ficou numa página — mandado quando ele sai dela
// (troca de rota no SPA, troca de aba ou fecha o navegador), nunca no
// momento em que a página abre, porque aí ainda não dá pra saber.
const DURACAO_URL = 'https://159-65-201-242.sslip.io/api/site-acessos/duracao'
export function trackDuracao(pageviewId, duracaoMs) {
  if (!pageviewId) return
  try {
    const payload = JSON.stringify({ pageviewId, duracaoMs: Math.round(duracaoMs) })
    if (navigator.sendBeacon) {
      navigator.sendBeacon(DURACAO_URL, new Blob([payload], { type: 'application/json' }))
    } else {
      fetch(DURACAO_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(() => {})
    }
  } catch { /* falha silenciosa */ }
}
