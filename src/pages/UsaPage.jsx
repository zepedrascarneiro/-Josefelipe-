import { useEffect, useRef, useState } from 'react'
import './UsaPage.css'

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/zepedrascarneiro@gmail.com'
const BENE_USA_LEADS_URL = 'https://159-65-201-242.sslip.io/api/site-usa-leads'

const AREAS = [
  'Restaurantes & Hospitalidade',
  'Real Estate de Luxo',
  'Airbnb & Aluguel por Temporada',
  'Build-to-Suit',
  'Investimento Imobiliário Geral',
  'Ainda não sei, quero conhecer as operações',
]
const CAPITAL_OPCOES = [
  'Até USD 50 mil',
  'USD 50 a 150 mil',
  'USD 150 a 250 mil',
  'USD 250 mil a 1 milhão',
  'USD 1 a 5 milhões',
  'Acima de USD 5 milhões',
  'Prefiro não informar',
]

const initialForm = {
  nome: '', email: '', telefone: '', redeSocial: '', cidade: '',
  pretendeMorar: '', areas: [], trajetoria: '', objetivo: '',
  capital: '', comoConheceu: '', consentimento: false,
}

function useFlagCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let W, H
    function resize() {
      W = canvas.clientWidth; H = canvas.clientHeight
      canvas.width = W * dpr; canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    window.addEventListener('resize', resize)
    resize()

    const stripeColors = ['#a32638', '#faf7ef']
    const cantonColor = '#1f3a63'
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function drawStar(cx, cy, r) {
      ctx.beginPath()
      for (let i = 0; i < 5; i++) {
        const a1 = (Math.PI * 2 * i) / 5 - Math.PI / 2
        const a2 = a1 + Math.PI / 5
        ctx.lineTo(cx + Math.cos(a1) * r, cy + Math.sin(a1) * r)
        ctx.lineTo(cx + Math.cos(a2) * r * 0.42, cy + Math.sin(a2) * r * 0.42)
      }
      ctx.closePath()
      ctx.fill()
    }

    function drawFlag(t) {
      ctx.clearRect(0, 0, W, H)
      const fw = Math.max(W * 0.85, 900)
      const fh = fw * (10 / 19)
      const fx = W - fw * 0.62
      const fy = H * 0.5 - fh * 0.5
      const stripeH = fh / 13
      const amp = fh * 0.028
      const freq = 0.012
      const speed = reduced ? 0 : 0.0016

      for (let i = 0; i < 13; i++) {
        ctx.fillStyle = stripeColors[i % 2]
        const y0 = fy + i * stripeH
        ctx.beginPath()
        const steps = 40
        for (let s = 0; s <= steps; s++) {
          const px = fx + (fw * s) / steps
          const wave = Math.sin(px * freq + t * speed + i * 0.35) * amp * (0.4 + (i / 13))
          const yy = y0 + wave
          if (s === 0) ctx.moveTo(px, yy); else ctx.lineTo(px, yy)
        }
        for (let s2 = steps; s2 >= 0; s2--) {
          const px2 = fx + (fw * s2) / steps
          const wave2 = Math.sin(px2 * freq + t * speed + i * 0.35) * amp * (0.4 + (i / 13))
          ctx.lineTo(px2, y0 + stripeH + wave2)
        }
        ctx.closePath()
        ctx.fill()
      }
      const cw = fw * 0.4, ch = stripeH * 7
      ctx.save()
      ctx.beginPath()
      const steps3 = 30
      for (let s3 = 0; s3 <= steps3; s3++) {
        const px3 = fx + (cw * s3) / steps3
        const wave3 = Math.sin(px3 * freq + t * speed) * amp * 0.4
        if (s3 === 0) ctx.moveTo(px3, fy + wave3); else ctx.lineTo(px3, fy + wave3)
      }
      for (let s4 = steps3; s4 >= 0; s4--) {
        const px4 = fx + (cw * s4) / steps3
        const wave4 = Math.sin(px4 * freq + t * speed + 2.4) * amp * 0.4
        ctx.lineTo(px4, fy + ch + wave4)
      }
      ctx.closePath()
      ctx.fillStyle = cantonColor
      ctx.fill()
      ctx.clip()
      ctx.fillStyle = 'rgba(250,247,239,0.92)'
      const rows = 9, cols = 11
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if ((r + c) % 2 === 0 && c > cols - 2) continue
          const sx = fx + (c + 0.5) * (cw / cols)
          const sy0 = fy + (r + 0.5) * (ch / rows)
          const swv = Math.sin(sx * freq + t * speed + r * 0.3) * amp * 0.4
          drawStar(sx, sy0 + swv, (ch / rows) * 0.32)
        }
      }
      ctx.restore()
    }

    let raf
    function loop(t) {
      drawFlag(t)
      if (!reduced) raf = requestAnimationFrame(loop)
    }
    if (reduced) { drawFlag(0) } else { raf = requestAnimationFrame(loop) }

    return () => {
      window.removeEventListener('resize', resize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [canvasRef])
}

export default function UsaPage() {
  const canvasRef = useRef(null)
  useFlagCanvas(canvasRef)

  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  useEffect(() => {
    document.title = 'JFC · EUA · Acesso Privado'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => document.head.removeChild(meta)
  }, [])

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const toggleArea = (area) => setForm(f => ({
    ...f,
    areas: f.areas.includes(area) ? f.areas.filter(a => a !== area) : [...f.areas, area],
  }))

  const scrollToForm = (e) => {
    e.preventDefault()
    document.querySelector('#aplicacao')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToOps = (e) => {
    e.preventDefault()
    document.querySelector('#operacoes')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.consentimento) { setStatus('error'); return }
    setStatus('sending')

    const payload = {
      nome: form.nome,
      email: form.email,
      telefone: form.telefone,
      redeSocial: form.redeSocial,
      cidade: form.cidade,
      pretendeMorar: form.pretendeMorar,
      areas: form.areas,
      trajetoria: form.trajetoria,
      objetivo: form.objetivo,
      capital: form.capital,
      comoConheceu: form.comoConheceu,
    }

    // Dashboard HORUS — melhor esforço, nunca trava o envio do e-mail.
    try {
      fetch(BENE_USA_LEADS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {})
    } catch { /* falha silenciosa */ }

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nome: form.nome,
          Email: form.email,
          Telefone: form.telefone,
          'LinkedIn/Instagram': form.redeSocial,
          Cidade: form.cidade,
          'Pretende morar nos EUA': form.pretendeMorar || '(não respondido)',
          'Áreas de interesse': form.areas.join(', ') || '(nenhuma selecionada)',
          Trajetória: form.trajetoria,
          'O que busca': form.objetivo,
          'Capital disponível': form.capital || '(não informado)',
          'Como conheceu': form.comoConheceu,
          _subject: `[josefelipecarneiro.com.br/usa] Nova aplicação — ${form.nome}`,
          _replyto: form.email,
          _captcha: 'false',
          _template: 'box',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('ok')
        setForm(initialForm)
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', { lead_type: 'usa_investidor' })
        }
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="usa-page">
      <section className="hero" style={{ borderTop: 'none' }}>
        <canvas ref={canvasRef} id="flagCanvas" aria-hidden="true" />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="wrap">
          <p className="kicker">Acesso privado · Não é oferta pública</p>
          <h1>Eu construí a ponte.<br /><em>Agora apresento quem opera do outro lado.</em></h1>
          <p className="sub">Não é bolsa, não é fundo. É entrada em negócio operacional real nos EUA, através de operadores que eu conheço pessoalmente e apresento um a um.</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a className="cta" href="#aplicacao" onClick={scrollToForm}>Solicitar Acesso</a>
            <a className="cta ghost" href="#operacoes" onClick={scrollToOps}>Conheça as operações</a>
          </div>
          <p className="signoff">José Felipe Carneiro · josefelipecarneiro.com.br</p>
        </div>
        <div className="scrollcue">A proposta</div>
      </section>

      <section className="manifesto">
        <div className="wrap">
          <p className="eyebrow">Por que não é como você já viu</p>
          <p className="lede">Curso de internacionalização não te dá sócio. Assessoria de investimento não bota a própria liquidez junto com a sua. Comprar ação de empresa americana numa corretora não te aproxima em nada da operação real.</p>
          <p className="punch">Existe um movimento crescente de brasileiros que querem um pedaço de negócio operando nos EUA, não um papel que sobe e desce. Eu já fiz essa travessia, sei quem é sério do outro lado, e esta é a porta de entrada pra isso.</p>
          <div className="not">
            <span>Sem corretora</span>
            <span>Sem comissão de terceiro</span>
            <span>Sem palco, sem evento de venda</span>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">A ponte</p>
          <div className="bridge">
            <div className="bridge-card">
              <p className="name">José Felipe Carneiro</p>
              <p className="role">Fundador · a ponte entre você e as operações</p>
              <p>Cofundador da Wäls, a cervejaria mais premiada do mundo, vendida para a AB InBev, de onde nasceu a ZX Ventures. Construí e escalei negócios no Brasil e fora dele.</p>
              <p>Não sou sócio operador das empresas abaixo. Sou quem conhece os dois lados o suficiente pra fazer a apresentação certa, pra pessoa certa, na hora certa.</p>
            </div>
            <div className="bridge-why">
              <div className="pt"><span className="ic">I</span><div><strong>Eu avalio cada aplicação pessoalmente.</strong><span>Sem comitê, sem triagem automática. Se não fizer sentido pra você ou pra operação, eu digo.</span></div></div>
              <div className="pt"><span className="ic">II</span><div><strong>As operações já existem e já funcionam.</strong><span>Não é plano de negócio em slide. É restaurante lotado, imóvel vendido, operação com histórico.</span></div></div>
              <div className="pt"><span className="ic">III</span><div><strong>A lista cresce, com critério.</strong><span>Tiago e Piquet são as operações de hoje. Outras entram na mesma régua de confiança, não por volume.</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">Não é para qualquer um</p>
          <div className="profile-grid">
            <ul className="profile-list">
              <li>Já construiu ou dirige um negócio relevante no Brasil.</li>
              <li>Tem capital próprio disponível pra um novo aporte, sem precisar de financiamento de terceiros.</li>
              <li>Interesse real em operar ou investir nos EUA, não curiosidade passageira.</li>
              <li>Trajetória que se verifica, não só se conta.</li>
            </ul>
            <p className="profile-note">Cada apresentação às operações é feita um a um, depois de uma conversa real comigo, <strong>José Felipe Carneiro</strong>. Não existe formulário que troca de mãos sozinho.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">Áreas de investimento</p>
          <p className="ops-intro">As operações de hoje cobrem estas frentes. Seu interesse pode estar em mais de uma, mesmo que ainda não exista um operador apresentado nela.</p>
          <div className="niches">
            <div className="niche"><p className="nn">I</p><h4>Restaurantes &amp; Hospitalidade</h4><p>Operação de salão, bar e cozinha com marca própria, múltiplas unidades.</p><p className="who">Hoje com <b>Tiago Carneiro</b></p></div>
            <div className="niche"><p className="nn">II</p><h4>Real Estate de Luxo</h4><p>Compra, venda e intermediação de imóveis de alto padrão.</p><p className="who">Hoje com <b>Cristiano Piquet</b></p></div>
            <div className="niche"><p className="nn">III</p><h4>Airbnb &amp; Aluguel por Temporada</h4><p>Imóvel operacional com renda recorrente, gestão de hospedagem.</p><p className="who">Rede de operadores em curadoria</p></div>
            <div className="niche"><p className="nn">IV</p><h4>Build-to-Suit</h4><p>Construção sob encomenda pra operação própria ou locação definida.</p><p className="who">Rede de operadores em curadoria</p></div>
            <div className="niche"><p className="nn">V</p><h4>Investimento Imobiliário Geral</h4><p>Diversificação patrimonial em ativos imobiliários nos EUA.</p><p className="who">Hoje com <b>Cristiano Piquet</b></p></div>
            <div className="niche"><p className="nn">VI</p><h4>Ainda não sei</h4><p>Quero conhecer as operações e decidir depois da conversa.</p><p className="who">Sem problema, é pra isso que serve a conversa</p></div>
          </div>
        </div>
      </section>

      <section id="operacoes">
        <div className="wrap">
          <p className="eyebrow">Operações em destaque</p>
          <p className="ops-intro">Duas operações reais, em funcionamento, apresentadas aqui como exemplo do padrão. Não são as únicas, nem necessariamente as duas únicas opções no fim da conversa.</p>
          <div className="ops">
            <div className="op west">
              <div className="op-media">
                <img src="/usa/tiago-carneiro.jpg" alt="Tiago Carneiro, fundador da Novo Brazil" loading="lazy" />
                <p className="press">Destaque na Entrepreneur.com</p>
              </div>
              <div className="op-body">
                <p className="op-tag"><span className="dot" />Califórnia &amp; Texas</p>
                <h3>Tiago Carneiro</h3>
                <p className="role">Fundador operador · restaurantes &amp; hospitalidade</p>
                <div><span className="biz">Novo Brazil</span><span className="biz">Novo Restaurants</span><span className="biz">Nova Kombucha</span><span className="biz">My Vision iOS</span></div>
                <p className="desc">Meu irmão. Vem de família de restaurante em Belo Horizonte, meu pai trocou padaria por restaurante e depois fundou uma rede de hambúrguer e uma marca de refrigerante artesanal. Tiago seguiu o caminho da cervejaria da família, a Wäls, e replicou o modelo nos EUA: hoje são seis casas na Califórnia e a primeira unidade no Texas, em San Antonio, aberta em 2025.</p>
                <div className="stats">
                  <div className="stat"><b>7</b><span>Unidades ativas</span></div>
                  <div className="stat"><b>2015</b><span>Fundação em San Diego</span></div>
                  <div className="stat"><b>CA · TX</b><span>Estados de operação</span></div>
                </div>
                <div className="proof-strip">
                  <img src="/usa/novo-mission-valley.jpg" alt="Fachada da Novo Brazil, Mission Valley" loading="lazy" />
                  <img src="/usa/novo-otay.jpg" alt="Salão lotado numa unidade da Novo Brazil" loading="lazy" />
                  <img src="/usa/novo-eastlake.jpg" alt="Pátio externo com música ao vivo numa unidade da Novo Brazil" loading="lazy" />
                </div>
                <p className="desc">A NOVA, kombucha da casa, é a bebida oficial do Snapdragon Stadium e do San Diego Wave FC (futebol feminino da NWSL), com dois bares da marca dentro do estádio. Parceria também com o basquete masculino da San Diego State University via MESA Foundation, incluindo US$24 mil doados em gift cards aos atletas. No social, apoio recorrente à Ronald McDonald House San Diego no Giving Tuesday e ao iHeartRadio Rady Children's Giveathon.</p>
                <p className="asterisk">Números financeiros e participação disponíveis sob NDA, na conversa.</p>
              </div>
            </div>
            <div className="op east">
              <div className="op-media">
                <img src="/usa/piquet.jpg" alt="Cristiano Piquet" loading="lazy" />
                <p className="press">Já saiu na BBC, CNN, New York Times e Miami Herald</p>
              </div>
              <div className="op-body">
                <p className="op-tag"><span className="dot" />Flórida</p>
                <h3>Cristiano Piquet</h3>
                <p className="role">Fundador operador · real estate de luxo</p>
                <div><span className="biz">Piquet Realty</span><span className="biz">Airbnb &amp; locação</span><span className="biz">Build-to-suit</span></div>
                <p className="desc">Ex-piloto tricampeão nacional no Brasil, chegou a Miami em 2001 e tirou a licença de corretor em 2005. Construiu a Piquet Realty até virar referência em imóveis de alto padrão pra brasileiros, com escritórios em Miami, Orlando e Nova York, além de operação em Lisboa.</p>
                <div className="stats">
                  <div className="stat"><b>US$18,2M</b><span>Faturamento anual</span></div>
                  <div className="stat"><b>41</b><span>Pessoas no time</span></div>
                  <div className="stat"><b>2005</b><span>Fundação em Miami</span></div>
                </div>
                <p className="asterisk">Números financeiros e participação disponíveis sob NDA, na conversa.</p>
              </div>
            </div>
          </div>
          <p className="ops-more">Novas operações entram nesta lista pela mesma régua, não por volume de capital captado.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">O que você acessa</p>
          <div className="benefits">
            <div className="benefit"><p className="num">I</p><h4>Sócio operador, não gestor de papel</h4><p>Seu capital entra ao lado de quem toca a operação todo dia, não de quem só aloca.</p></div>
            <div className="benefit"><p className="num">II</p><h4>Due diligence feita por quem já é ponte</h4><p>Eu conheço os operadores pessoalmente. A curadoria já aconteceu antes de chegar até você.</p></div>
            <div className="benefit"><p className="num">III</p><h4>Múltiplas frentes, um único critério</h4><p>Restaurante, real estate, Airbnb, build-to-suit. Modelos diferentes, mesma régua de confiança.</p></div>
            <div className="benefit"><p className="num">IV</p><h4>Conversa direta, sem intermediário comissionado</h4><p>Ninguém ganha comissão por te colocar dentro. O interesse é alinhado desde a primeira ligação.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">Sobre morar nos EUA</p>
          <div className="visa-box">
            <h4>Isto não é promessa de visto.</h4>
            <p>Investir num negócio operacional nos EUA <strong>não garante visto nem residência</strong>. A decisão final é sempre, exclusivamente, do consulado americano ou do USCIS, caso a caso. Qualquer rota de visto depende de parceiros jurídicos próprios, especializados em imigração, que você deve contratar separadamente.</p>
            <div className="visa-grid">
              <div className="visa-route">
                <p className="tag">Visto E-2 (investidor de tratado)</p>
                <p>O Brasil <strong>não tem tratado E-2</strong> com os EUA. Brasileiros só acessam essa via com cidadania de um país que tenha o tratado, caminho comum pra quem tem ascendência portuguesa, italiana ou espanhola.</p>
              </div>
              <div className="visa-route">
                <p className="tag">Visto EB-5 (investidor imigrante)</p>
                <p>Aberto a qualquer nacionalidade, inclusive brasileira. Exige investimento maior (na faixa de US$ 800 mil a US$ 1,05 milhão) em empreendimento que gere empregos, com processo próprio junto ao USCIS.</p>
              </div>
            </div>
            <p className="visa-disclaimer">As informações acima são contexto geral, não aconselhamento jurídico ou de imigração. Leis de visto mudam, e cada caso é avaliado individualmente pelo governo americano. Consulte um advogado de imigração licenciado antes de tomar qualquer decisão.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">Como funciona</p>
          <div className="steps">
            <div className="step"><span className="rn">I</span><div><strong>Preencha a aplicação.</strong><span>Leva uns cinco minutos. Seja específico, isso acelera a resposta.</span></div></div>
            <div className="step"><span className="rn">II</span><div><strong>Eu avalio pessoalmente.</strong><span>Cada aplicação é lida por mim, José Felipe, não por um comitê ou triagem automática.</span></div></div>
            <div className="step"><span className="rn">III</span><div><strong>Conversa direta.</strong><span>Havendo aderência, marco uma ligação com você e, na sequência, com o operador certo pro seu perfil.</span></div></div>
          </div>
        </div>
      </section>

      <section id="aplicacao">
        <div className="wrap">
          <div className="form-head">
            <div>
              <p className="eyebrow" style={{ marginBottom: 10 }}>Aplicação</p>
              <h2 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 'clamp(28px,3.6vw,40px)', margin: 0, color: 'var(--navy)' }}>Solicitar acesso</h2>
            </div>
            <p>Confidencial. Preenchido, retorno pessoalmente quando houver aderência ao perfil das operações.</p>
          </div>

          {status === 'ok' ? (
            <div className="f-done">
              Aplicação recebida. Vou ler pessoalmente e volto a falar com você em breve.
            </div>
          ) : (
            <form className="app" onSubmit={handleSubmit}>
              <div>
                <label className="f-label">Nome completo <span className="req">*</span></label>
                <input className="f-input" type="text" placeholder="Seu nome" value={form.nome} onChange={e => set('nome', e.target.value)} required disabled={status === 'sending'} />
              </div>
              <div>
                <label className="f-label">E-mail <span className="req">*</span></label>
                <input className="f-input" type="email" placeholder="seu@email.com" value={form.email} onChange={e => set('email', e.target.value)} required disabled={status === 'sending'} />
              </div>
              <div>
                <label className="f-label">Telefone / WhatsApp <span className="req">*</span></label>
                <input className="f-input" type="tel" placeholder="+55 (DDD) 00000-0000" value={form.telefone} onChange={e => set('telefone', e.target.value)} required disabled={status === 'sending'} />
              </div>
              <div>
                <label className="f-label">LinkedIn ou Instagram <span className="req">*</span></label>
                <input className="f-input" type="text" placeholder="URL completa do perfil" value={form.redeSocial} onChange={e => set('redeSocial', e.target.value)} required disabled={status === 'sending'} />
              </div>
              <div className="f-full">
                <label className="f-label">Cidade onde mora <span className="req">*</span></label>
                <input className="f-input" type="text" placeholder="Atual" value={form.cidade} onChange={e => set('cidade', e.target.value)} required disabled={status === 'sending'} />
              </div>
              <div className="f-full">
                <label className="f-label">Pretende morar nos EUA? <span className="req">*</span></label>
                <div className="f-radio-group inline">
                  {['Sim', 'Não, só quero investir', 'Ainda não decidi'].map(opt => (
                    <label className="f-radio" key={opt}>
                      <input type="radio" name="morar" checked={form.pretendeMorar === opt} onChange={() => set('pretendeMorar', opt)} required disabled={status === 'sending'} />
                      {opt}
                    </label>
                  ))}
                </div>
                <span className="f-hint">Isso não compromete nem garante nada sobre visto. Serve só pra eu entender seu momento.</span>
              </div>
              <div className="f-full">
                <label className="f-label">Área de interesse <span className="req">*</span></label>
                <div className="f-check-group">
                  {AREAS.map(area => (
                    <label className="f-check" key={area}>
                      <input type="checkbox" checked={form.areas.includes(area)} onChange={() => toggleArea(area)} disabled={status === 'sending'} />
                      {area}
                    </label>
                  ))}
                </div>
              </div>
              <div className="f-full">
                <label className="f-label">Sua trajetória <span className="req">*</span></label>
                <span className="f-hint" style={{ marginTop: 0, marginBottom: 9, display: 'block' }}>Empresas que fundou ou lidera, ano, faturamento aproximado, saídas. 3 a 5 linhas, direto ao ponto.</span>
                <textarea className="f-textarea" value={form.trajetoria} onChange={e => set('trajetoria', e.target.value)} required disabled={status === 'sending'} />
              </div>
              <div className="f-full">
                <label className="f-label">O que busca com esse investimento? <span className="req">*</span></label>
                <textarea className="f-textarea" value={form.objetivo} onChange={e => set('objetivo', e.target.value)} required disabled={status === 'sending'} />
              </div>
              <div>
                <label className="f-label">Capital disponível pra novos negócios nos EUA</label>
                <div className="f-radio-group">
                  {CAPITAL_OPCOES.map(opt => (
                    <label className="f-radio" key={opt}>
                      <input type="radio" name="capital" checked={form.capital === opt} onChange={() => set('capital', opt)} disabled={status === 'sending'} />
                      {opt}
                    </label>
                  ))}
                </div>
                <span className="f-hint">Sinalizar não gera compromisso.</span>
              </div>
              <div>
                <label className="f-label">Como conheceu o José Felipe?</label>
                <input className="f-input" type="text" placeholder="Indicação, Instagram, evento..." value={form.comoConheceu} onChange={e => set('comoConheceu', e.target.value)} disabled={status === 'sending'} />
              </div>
              <div className="f-full">
                <label className="f-check">
                  <input type="checkbox" checked={form.consentimento} onChange={e => set('consentimento', e.target.checked)} disabled={status === 'sending'} />
                  Declaro que as informações são verdadeiras, entendo que isto não é promessa de visto ou residência, e autorizo contato pra avaliação, conforme a LGPD. <span className="req">*</span>
                </label>
              </div>
              {status === 'error' && (
                <div className="f-full">
                  <p className="f-error">Confira os campos obrigatórios e o aceite da declaração, ou tente novamente em instantes.</p>
                </div>
              )}
              <div className="f-full">
                <button className="f-submit" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Enviando...' : 'Enviar aplicação'}
                </button>
                <p className="f-confidential">josefelipecarneiro.com.br/usa · acesso restrito, link não indexado</p>
              </div>
            </form>
          )}
        </div>
      </section>

      <footer className="pg">
        <div className="wrap">
          <span className="mark">JFC · EUA</span>
          <span className="conf">Confidencial · acesso por convite</span>
        </div>
      </footer>
    </div>
  )
}
