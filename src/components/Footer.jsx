export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--bg-void)', padding: '2.5rem 0', position: 'relative', zIndex: 2 }}>
      <div className="footer-line" style={{ marginBottom: '2.5rem' }}></div>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.7rem', color: 'var(--text-3)' }}>
          © {year} Mubendiran K 
        </span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { href: 'https://github.com/MUBENDIRAN',              icon: 'fab fa-github' },
            { href: 'https://www.linkedin.com/in/mubendiran-k/', icon: 'fab fa-linkedin' },
            { href: 'https://www.youtube.com/@MUBENDIRAN',        icon: 'fab fa-youtube' },
          ].map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer"
              style={{ color: 'var(--text-3)', fontSize: '1rem', cursor: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-3)'}>
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
