import { awsServices } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32" style={{ background: 'var(--bg-deep)' }}>
      {/* Top gradient line */}
      <div className="footer-line"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 reveal">
          <p className="section-label mb-3">About Me</p>
          <h2 className="section-title">
            The person behind<br /><span className="grad-text">the code</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left - image */}
          <div className="reveal-left">
            <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', marginBottom: '2rem' }}>
              <img src="/images/about.png" alt="Developer working" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, var(--bg-deep) 0%, transparent 50%)',
                borderRadius: 20,
              }} />
              {/* Overlay label */}
              <div style={{
                position: 'absolute', bottom: 16, left: 16,
                fontFamily: "'DM Mono',monospace", fontSize: '0.65rem',
                color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>Backend & Applied AI Engineer</div>
            </div>
          </div>

          {/* Right - bio */}
          <div className="reveal-right">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.5rem', fontWeight: 700 }}>
                Hi, I'm <span className="grad-text">Mubendiran</span> 👋
              </h3>

              <p style={{ color: 'var(--text-2)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                I'm a B.E. Electronics & Communication Engineering student at <strong style={{ color: 'var(--text-1)' }}>Rajalakshmi Institute of Technology, Chennai</strong> , focused on backend engineering and applied AI systems.
              </p>

              <p style={{ color: 'var(--text-2)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                I build reliable digital products end-to-end — from system design to cloud deployment. My work centers on solving real problems with clean architecture, strong reliability, and production-ready quality.
              </p>

              {/* 3-col value props */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
                {[
                  { color: '#3b82f6', accent: 'blue', title: 'What I deliver', body: 'Production-ready solutions with clean architecture and measurable impact.' },
                  { color: '#10b981', accent: 'emerald', title: 'How I work',   body: 'Structured problem solving and consistent delivery across the full lifecycle.' },
                  { color: '#8b5cf6', accent: 'violet', title: 'What I value',  body: 'Quality-first engineering and systems that stay dependable as they grow.' },
                ].map(c => (
                  <div key={c.title} style={{
                    background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                    borderRadius: 12, padding: '1rem', borderLeft: `2px solid ${c.color}`,
                  }}>
                    <p style={{ fontSize: '0.65rem', fontFamily: "'DM Mono',monospace", letterSpacing: '0.1em', textTransform: 'uppercase', color: c.color, marginBottom: 6 }}>{c.title}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{c.body}</p>
                  </div>
                ))}
              </div>

              
              {/* Patent */}
              <div className="glass" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', marginTop: 2 }}>🏛️</span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: 6 }}>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: '0.9rem' }}>ShopSense — Patent Filed</p>
                      <span className="patent-badge">202441017518 · Oct 2024</span>
                    </div>
                    <p style={{ color: 'var(--text-2)', fontSize: '0.8rem', lineHeight: 1.65 }}>
                      RFID-based assistive navigation system for visually impaired users — enables product identification with real-time audio feedback.
                    </p>
                  </div>
                </div>
              </div>

              {/* AWS services */}
              <div>
                <p style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>AWS services I've worked with</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {awsServices.map(s => (
                    <span key={s} style={{
                      fontFamily: "'DM Mono',monospace", fontSize: '0.65rem',
                      padding: '0.25rem 0.65rem', borderRadius: 6,
                      background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.25)', color: '#f97316',
                    }}>{s}</span>
                  ))}
                </div>
              </div>

              {/* Quick actions */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                <a href="mailto:mubemubendiran@gmail.com" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}>
                  <i className="fas fa-envelope"></i><span>Email Me</span>
                </a>
                <a href="tel:+918946000212" className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}>
                  <i className="fas fa-phone"></i><span>+91 8946000212</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
