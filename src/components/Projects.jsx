import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32" style={{ background: 'var(--bg-deep)' }}>
      <div className="footer-line" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 reveal">
          <p className="section-label mb-3">Projects</p>
          <h2 className="section-title">
            Things I've <span className="grad-text">built</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={p.id} className="proj-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              {/* Image */}
              <div className="proj-img-wrap">
                <img src={p.img} alt={p.alt} />
                <div className="proj-overlay"></div>
                {p.featured && (
                  <div style={{
                    position: 'absolute', top: 12, left: 12, zIndex: 2,
                    fontFamily: "'DM Mono',monospace", fontSize: '0.58rem',
                    padding: '0.2rem 0.6rem', borderRadius: 9999,
                    background: 'rgba(59,130,246,0.25)', border: '1px solid rgba(59,130,246,0.5)',
                    color: '#93c5fd', letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>Featured</div>
                )}
              </div>

              {/* Body */}
              <div style={{ padding: '1.25rem', position: 'relative', zIndex: 2 }}>
                <h3 style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.05rem',
                  marginBottom: '0.5rem', color: 'var(--text-1)',
                }}>{p.title}</h3>

                <p style={{
                  fontSize: '0.8rem', color: 'var(--text-2)', lineHeight: 1.65,
                  marginBottom: '1rem',
                }}>{p.desc}</p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.1rem' }}>
                  {p.tags.map(t => (
                    <span key={t.label} className="tech-tag" style={{
                      color: t.color, borderColor: `${t.color}35`,
                      background: `${t.color}10`,
                    }}>{t.label}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <a href={p.github} target="_blank" rel="noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    fontFamily: "'DM Mono',monospace", fontSize: '0.7rem',
                    color: 'var(--text-2)', textDecoration: 'none', cursor: 'none',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}>
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    fontFamily: "'DM Mono',monospace", fontSize: '0.7rem',
                    color: 'var(--text-2)', textDecoration: 'none', cursor: 'none',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f87171'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}>
                    <i className="fab fa-youtube"></i> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a href="https://github.com/MUBENDIRAN" target="_blank" rel="noreferrer"
            className="btn-outline" style={{ cursor: 'none' }}>
            <i className="fab fa-github"></i>
            <span>See all on GitHub</span>
            <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
          </a>
        </div>
      </div>
    </section>
  )
}
