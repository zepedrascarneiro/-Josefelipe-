import { useEffect } from 'react'
import { ArrowRight, BookOpen, Target, Clock, Zap, Focus, Brain, Users, Eye } from 'lucide-react'

const s = { display: 'block', alignItems: 'unset', width: '100%' }
const AMAZON = 'https://a.co/d/0fV9dTgl'
const gold = '#c9a84c'

const pilares = [
  {
    num: '01', icon: Target, titulo: 'Bloqueios e Fundamentos',
    desc: 'Clareza como base da alta performance. Propósito, direção, e por que mudanças verdadeiras são tão difíceis. Olhe para o passado antes de construir o futuro.',
    topicos: ['Clareza: a base da alta performance', 'Propósito e direção', 'Gestão de tempo e disciplina produtiva', 'O caderno de prata'],
  },
  {
    num: '02', icon: Brain, titulo: 'Sistema Lógico',
    desc: 'Como o cérebro aprende, processa e retém. Os tipos de aprendizagem e as condições ideais para absorver conhecimento de verdade.',
    topicos: ['O processo de aprendizagem no cérebro', 'Atenção: o primeiro passo', 'Aprender com os erros', 'Repetição espaçada e consolidação'],
  },
  {
    num: '03', icon: Focus, titulo: 'Foco, Hábitos e Flow',
    desc: 'Rotinas inegociáveis, criação de hábitos e o estado de alto desempenho consciente. Disciplina não é força de vontade — é método.',
    topicos: ['Flow: o estado de alto desempenho', 'Criando hábitos', 'Metas SMART alinhadas com propósito', 'Método sem execução é só um plano'],
  },
  {
    num: '04', icon: Zap, titulo: 'Simplificar e Otimizar',
    desc: 'Melhoria contínua, minimalismo como estratégia e eliminação do que não importa. Simplicidade é a sofisticação aplicada.',
    topicos: ['Leis da simplicidade', 'Corte de tarefas desnecessárias', 'Redução do tempo de decisão', 'Eliminação de distrações'],
  },
  {
    num: '05', icon: Clock, titulo: 'Resiliência e Adaptabilidade',
    desc: 'Como desenvolver resiliência emocional e mental. Lidando com fracassos, ressignificação e o poder de se adaptar num mundo em constante mudança.',
    topicos: ['Construção de uma nova mentalidade', 'Ressignificação e aprendizado', 'Ferramentas para mentalidade resiliente', 'Adaptabilidade como vantagem'],
  },
  {
    num: '06', icon: Users, titulo: 'Eixo Vital: Energia Física, Mental e Espiritual',
    desc: 'Ritmo circadiano, sono, nutrição, atividade física, meditação e controle emocional. Respeite seu corpo e ele te trará recompensas.',
    topicos: ['Gestão de energia e sono', 'Nutrição e performance cognitiva', 'Meditação: um ritual de presença', 'Saúde mental: descanse antes de se cansar'],
  },
  {
    num: '07', icon: Eye, titulo: 'Consistência, Refinamento e Paz Interna',
    desc: 'Produtividade sustentável de longo prazo. As armadilhas da inconsistência, sistema de revisão e o verdadeiro significado de sucesso.',
    topicos: ['Produtividade sustentável', 'As 3 armadilhas da inconsistência', 'Sistema de revisão e aperfeiçoamento', 'Sucesso e paz interna'],
  },
]

export default function LivroPage() {
  useEffect(() => {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
    document.title = 'Performance Consciente — Livro por José Felipe Carneiro'
    return () => { document.body.style.backgroundColor = ''; document.body.style.color = '' }
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: "'Inter', sans-serif" }}>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>JOSÉ FELIPE CARNEIRO</a>
          <a href={AMAZON} target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: gold, color: '#000', fontSize: '12px', fontWeight: 700, padding: '10px 20px', textDecoration: 'none', letterSpacing: '1px' }}>
            COMPRAR NA AMAZON
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ ...s, paddingTop: '140px', paddingBottom: '100px', padding: '140px 24px 100px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Texto */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, color: gold, letterSpacing: '3px', marginBottom: '24px', textTransform: 'uppercase' }}>Novo livro</p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '32px', color: '#fff' }}>
              PERFORMANCE<br />CONSCIENTE
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <p style={{ fontSize: '1.05rem', color: '#9ca3af', lineHeight: 1.7 }}>
                Nunca tivemos tantos recursos. Ainda assim, nunca foi tão comum ver pessoas <strong style={{ color: '#fff' }}>produtivas por fora e esgotadas por dentro</strong>.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#9ca3af', lineHeight: 1.7 }}>
                Este livro não é sobre fazer mais. É sobre fazer <strong style={{ color: '#fff' }}>melhor</strong>. Com mais presença, mais intenção e mais domínio sobre o próprio ritmo.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7 }}>
                Esqueça tudo que já te falaram sobre produtividade. São 7 pilares que definem a alta performance para qualquer área da vida. Não é teoria. É o que funcionou de verdade, ao longo de décadas construindo negócios ao redor do mundo.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href={AMAZON} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: gold, color: '#000', fontWeight: 700, padding: '16px 32px', fontSize: '14px', textDecoration: 'none', letterSpacing: '1px' }}>
                <BookOpen size={18} />
                Garantir Meu Exemplar
              </a>
              <span style={{ fontSize: '12px', color: '#6b7280' }}>Livro físico · Frete pela Amazon</span>
            </div>
          </div>

          {/* Capa */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/livro-capa.jpg" alt="Capa do Livro Performance Consciente" loading="eager"
              style={{ width: '100%', maxWidth: '360px', filter: 'drop-shadow(0 30px 60px rgba(201,168,76,0.15))' }} />
          </div>
        </div>
      </div>

      {/* Pilares */}
      <div style={{ ...s, padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: gold, letterSpacing: '3px', marginBottom: '16px' }}>O CONTEÚDO</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '16px', color: '#fff' }}>Os 7 pilares</h2>
          <p style={{ color: '#6b7280', marginBottom: '48px', maxWidth: '540px', lineHeight: 1.7 }}>
            Cada pilar foi construído na prática, ao longo de décadas empreendendo, liderando equipes e tomando decisões sob pressão.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
            {pilares.map((p, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '32px', transition: 'border-color 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <p.icon size={16} style={{ color: gold }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', color: gold, fontWeight: 700, letterSpacing: '2px' }}>PILAR {p.num}</p>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{p.titulo}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '16px' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {p.topicos.map((t, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>
                      <span style={{ color: gold, fontSize: '8px' }}>&#9670;</span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sobre o autor */}
      <div style={{ ...s, padding: '100px 24px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: '160px 1fr', gap: '40px', alignItems: 'center' }}>
          <img src="/jose-felipe-opt.jpeg" alt="José Felipe Carneiro" style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${gold}33` }} />
          <div>
            <p style={{ fontSize: '13px', fontWeight: 600, color: gold, letterSpacing: '3px', marginBottom: '12px' }}>O AUTOR</p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '16px', color: '#fff' }}>José Felipe Carneiro</h2>
            <p style={{ fontSize: '15px', color: '#9ca3af', lineHeight: 1.8 }}>
              Co-fundador da Cervejaria Wäls (mais premiada do mundo), da ZX Ventures (AB InBev) e de negócios em 6 países. Mais de 300 palestras e 450 mil pessoas impactadas. Escreveu este livro para compartilhar os princípios que guiaram 25 anos de empreendedorismo sem perder a saúde, a família e o propósito.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div style={{ ...s, padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '16px', color: '#fff' }}>
            Pronto pra fazer diferente?
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '40px', lineHeight: 1.7 }}>
            Performance Consciente é o livro pra quem quer resultados reais sem sacrificar o que importa. Disponível agora na Amazon com entrega para todo o Brasil.
          </p>
          <a href={AMAZON} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: gold, color: '#000', fontWeight: 700, padding: '18px 40px', fontSize: '15px', textDecoration: 'none', letterSpacing: '1px' }}>
            <BookOpen size={20} />
            Garantir Meu Exemplar
            <ArrowRight size={16} />
          </a>
          <p style={{ fontSize: '12px', color: '#4b5563', marginTop: '16px' }}>Livro físico · Frete pela Amazon · Entrega para todo o Brasil</p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '48px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>José Felipe Carneiro</p>
            <p style={{ fontSize: '12px', color: '#4b5563' }}>Empreendedor, mentor e palestrante</p>
          </div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '12px' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Home</a>
            <a href="/palestras" style={{ color: '#6b7280', textDecoration: 'none' }}>Palestras</a>
            <a href="https://instagram.com/josefelipec" target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280', textDecoration: 'none' }}>Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
