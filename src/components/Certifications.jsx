import { certifications } from '../data/portfolio'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 grid-bg" style={{ background: 'var(--bg-void)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 reveal">
          <p className="section-label mb-3">Certifications</p>
          <h2 className="section-title">
            Proof of <span className="grad-text">learning</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {certifications.map((c, i) => (
            <div key={c.alt} className="cert-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <img src={c.img} alt={c.alt} style={{ width: '100%', display: 'block' }} />
              <div style={{
                padding: '0.9rem 1rem',
                background: 'var(--bg-card)',
                fontFamily: "'DM Mono',monospace", fontSize: '0.7rem',
                color: 'var(--text-2)', letterSpacing: '0.05em',
              }}>{c.alt}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
