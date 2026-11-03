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
