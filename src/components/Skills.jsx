import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 grid-bg" style={{ background: 'var(--bg-void)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 reveal">
          <p className="section-label mb-3">Technical Skills</p>
          <h2 className="section-title">
            My tech <span className="grad-text">arsenal</span>
          </h2>
        </div>

        {/* Skill pills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
          {skills.map((s, i) => (
            <div key={s.name} className="skill-pill reveal" style={{ transitionDelay: `${i * 0.04}s` }}>
              <span className="skill-icon">{s.icon}</span>
              <div>
                <p className="skill-name" style={{ color: 'var(--text-1)' }}>{s.name}</p>
                <p className="skill-tag">{s.tag}</p>
              </div>
              <div style={{ marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%', background: s.color, boxShadow: `0 0 8px ${s.color}` }}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
