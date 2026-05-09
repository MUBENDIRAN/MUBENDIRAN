const socials = [
  {
    label: 'LinkedIn',
    sub: 'Connect professionally',
    icon: 'fab fa-linkedin',
    href: 'https://www.linkedin.com/in/mubendiran-k/',
    color: '#3b82f6',
  },
  {
    label: 'GitHub',
    sub: 'Browse my code',
    icon: 'fab fa-github',
    href: 'https://github.com/MUBENDIRAN',
    color: '#94a3b8',
  },
  {
    label: 'YouTube',
    sub: 'Watch project demos',
    icon: 'fab fa-youtube',
    href: 'https://www.youtube.com/@MUBENDIRAN',
    color: '#ef4444',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32" style={{ background: 'var(--bg-deep)' }}>
      <div className="footer-line" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 reveal">
          <p className="section-label mb-3">Contact</p>
          <h2 className="section-title">
            Let's <span className="grad-text">work together</span>
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '0.95rem', marginTop: '1rem', maxWidth: 480 }}>
            Open to backend/AI roles, internships, and interesting collaborations. Drop me a message — I respond fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Left — contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="mailto:mubemubendiran@gmail.com" className="contact-row reveal">
              <div style={{
                width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', color: '#3b82f6',
              }}>
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.6rem', color: 'var(--text-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>Email</p>
                <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>mubemubendiran@gmail.com</p>
              </div>
              <i className="fas fa-arrow-right" style={{ marginLeft: 'auto', color: 'var(--text-3)', fontSize: '0.75rem' }}></i>
            </a>

            <a href="tel:+918946000212" className="contact-row reveal" style={{ transitionDelay: '0.1s' }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', color: '#10b981',
              }}>
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.6rem', color: 'var(--text-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>Phone</p>
                <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>+91 8946000212</p>
              </div>
              <i className="fas fa-arrow-right" style={{ marginLeft: 'auto', color: 'var(--text-3)', fontSize: '0.75rem' }}></i>
            </a>

            <a href="https://drive.google.com/file/d/1Ij1WemDWJjPPGv2ZJAoQXLCh0qhbmm5l/view?usp=drivesdk"
              target="_blank" rel="noreferrer" className="contact-row reveal" style={{ transitionDelay: '0.2s' }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', color: '#8b5cf6',
              }}>
                <i className="fas fa-file-pdf"></i>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.6rem', color: 'var(--text-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>Resume / CV</p>
                <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>Download my detailed resume</p>
              </div>
              <i className="fas fa-download" style={{ marginLeft: 'auto', color: 'var(--text-3)', fontSize: '0.75rem' }}></i>
            </a>

            {/* Location */}
            <div className="contact-row reveal" style={{ transitionDelay: '0.3s', cursor: 'default' }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', color: '#f59e0b',
              }}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.6rem', color: 'var(--text-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>Location</p>
                <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Right — social cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Find me online</p>
            {socials.map((s, i) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="social-card reveal" style={{ transitionDelay: `${i * 0.1}s`, textDecoration: 'none', cursor: 'none', display: 'block' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <i className={s.icon} style={{ fontSize: '1.75rem', color: s.color, width: 36, textAlign: 'center' }}></i>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-1)', marginBottom: 2 }}>{s.label}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-2)' }}>{s.sub}</p>
                  </div>
                  <i className="fas fa-arrow-right" style={{ color: 'var(--text-3)', fontSize: '0.75rem' }}></i>
                </div>
              </a>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
