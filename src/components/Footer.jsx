export default function Footer() {
  const year = new Date().getFullYear()
  const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '4rem', paddingBottom: '2.5rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Topo */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '2rem' }}>

          {/* Marca */}
          <div>
            <p style={{ fontFamily: 'Bebas Neue, Inter, sans-serif', fontSize: '1.6rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              <span style={{ color: '#C9A84C' }}>JFC</span>
            </p>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.88rem', lineHeight: 1.8, maxWidth: 340, marginBottom: '1.5rem' }}>
              Empreendedor, mentor, investidor e palestrante. Transformando vidas através da alta performance e execução consciente.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { l: 'Instagram', h: 'https://instagram.com/josefelipec' },
                { l: 'LinkedIn',  h: 'https://linkedin.com/in/josefelipecarneiro' },
                { l: 'YouTube',   h: '#' },
              ].map(s => (
                <a
                  key={s.l}
                  href={s.h}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.7rem', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase',
                    textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
                >
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '1.2rem' }}>Navegação</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[['Sobre', '#sobre'], ['Livro', '#livro'], ['Cursos', '#curso'], ['Palestras', '#palestras'], ['Blog do Zé', '#blog'], ['Contato', '#contato']].map(([l, h]) => (
                <li key={h}>
                  <button
                    onClick={() => go(h)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em', padding: 0, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
                  >{l}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '1.2rem' }}>Contato</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><a href="mailto:contato@josefelipe.com.br" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>contato@josefelipe.com.br</a></li>
              <li><a href="https://instagram.com/josefelipec" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>@josefelipec</a></li>
              <li style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.2)' }}>Belo Horizonte, MG</li>
            </ul>
          </div>
        </div>

        {/* Rodapé */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem' }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>
            © {year} JOSÉ FELIPE CARNEIRO — TODOS OS DIREITOS RESERVADOS
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Política de Privacidade', 'Termos de Uso'].map(t => (
              <a key={t} href="#" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', textDecoration: 'none', letterSpacing: '0.08em' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}
              >{t}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          footer > div > div:last-child { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  )
}
