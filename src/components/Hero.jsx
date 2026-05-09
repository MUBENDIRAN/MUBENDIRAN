import { useEffect, useRef } from 'react'

const TYPING_TEXTS = [
  'Backend & Applied AI Developer',
  'FastAPI · RAG · AWS · Docker',
  'Building production-ready systems',
]

export default function Hero() {
  const typRef = useRef(null)

  useEffect(() => {
    let ti = 0, ci = 0, erasing = false, timer

    const tick = () => {
      const el = typRef.current
      if (!el) return
      const text = TYPING_TEXTS[ti]

      if (!erasing) {
        if (ci < text.length) {
          el.textContent = text.substring(0, ++ci)
          timer = setTimeout(tick, 70)
        } else {
          erasing = true
          timer = setTimeout(tick, 2200)
        }
      } else {
        if (ci > 0) {
          el.textContent = text.substring(0, --ci)
          timer = setTimeout(tick, 35)
        } else {
          erasing = false
          ti = (ti + 1) % TYPING_TEXTS.length
          timer = setTimeout(tick, 400)
        }
      }
    }
    timer = setTimeout(tick, 900)
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg" style={{ paddingTop: '80px' }}>
      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      {/* Floating emojis */}
      <span className="emoji-orb" style={{ top: '15%', left: '6%' }}>☁️</span>
      <span className="emoji-orb" style={{ top: '25%', right: '8%', animationDelay: '-3s' }}>🐧</span>
      <span className="emoji-orb" style={{ bottom: '28%', left: '4%', animationDelay: '-6s' }}>🚀</span>
      <span className="emoji-orb" style={{ bottom: '20%', right: '6%', animationDelay: '-9s' }}>🐳</span>
      <span className="emoji-orb" style={{ top: '55%', left: '2%', animationDelay: '-1s' }}>⚡</span>
      <span className="emoji-orb" style={{ top: '45%', right: '3%', animationDelay: '-7s' }}>🔧</span>

      {/* Terminal chips */}
      <div className="term-chip hidden lg:block" style={{ position:'absolute', top:'22%', left:'5%', animationDelay: '0s' }}>$ fastapi run main.py</div>
      <div className="term-chip hidden lg:block" style={{ position:'absolute', top:'35%', right:'4%', animationDelay: '-2s', borderLeftColor: '#3b82f6', color: '#3b82f6' }}>☁️ aws s3 sync</div>
      <div className="term-chip hidden md:block" style={{ position:'absolute', bottom:'28%', left:'3%', animationDelay: '-4s' }}>🐳 docker build -t app .</div>
      <div className="term-chip hidden lg:block" style={{ position:'absolute', bottom:'20%', right:'5%', animationDelay: '-6s', borderLeftColor: '#8b5cf6', color: '#8b5cf6' }}>🧠 rag.query(user_input)</div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full">

        {/* ── LEFT ── */}
        <div className="order-2 md:order-1">
          {/* Badge */}
          <div className="badge mb-6 animate-fade" style={{ animationDelay: '0.2s' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', display: 'inline-block', animation: 'dotPulse 2s ease-in-out infinite' }}></span>
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="font-display mb-4 animate-fade" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, lineHeight: 1.2, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', whiteSpace: 'nowrap', animationDelay: '0.3s' }}>
            MUBENDIRAN K.
          </h1>

          {/* Typing */}
          <div className="mb-8 animate-fade" style={{ animationDelay: '0.6s', minHeight: '2rem' }}>
            <p className="typing-wrap" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', color: 'var(--text-2)' }}>
              <span ref={typRef}></span>
              <span className="typing-cursor-el"></span>
            </p>
          </div>

          {/* Description */}
          <p className="mb-8 animate-fade" style={{ animationDelay: '0.75s', color: 'var(--text-2)', lineHeight: 1.75, fontSize: '0.95rem', maxWidth: '480px' }}>
            Engineering student at <span style={{ color: 'var(--text-1)', fontWeight: 500 }}>Rajalakshmi Institute of Technology</span> building cloud-native systems, AI pipelines, and FastAPI services that actually work in production.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 animate-fade" style={{ animationDelay: '0.9s' }}>
            <button onClick={() => scrollTo('#projects')} className="btn-primary">
              <i className="fas fa-code"></i>
              <span>View Projects</span>
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-outline">
              <i className="fas fa-envelope"></i>
              <span>Get In Touch</span>
            </button>
            <a href="https://drive.google.com/file/d/1Ij1WemDWJjPPGv2ZJAoQXLCh0qhbmm5l/view?usp=drivesdk"
              target="_blank" rel="noreferrer" className="btn-green">
              <i className="fas fa-download"></i>
              <span>Resume</span>
            </a>
          </div>

          {/* Social row */}
          <div className="flex items-center gap-5 mt-8 animate-fade" style={{ animationDelay: '1.1s' }}>
            {[
              { href: 'https://github.com/MUBENDIRAN', icon: 'fab fa-github', label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/mubendiran-k/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
              { href: 'https://www.youtube.com/@MUBENDIRAN', icon: 'fab fa-youtube', label: 'YouTube' },
            ].map(s => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer"
                title={s.label}
                style={{ color: 'var(--text-2)', fontSize: '1.2rem', transition: 'color 0.2s', cursor: 'none' }}
                onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-2)'}>
                <i className={s.icon}></i>
              </a>
            ))}
            <span style={{ height: 1, flex: 1, maxWidth: 60, background: 'var(--border)' }}></span>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.1em' }}>Chennai, IN</span>
          </div>
        </div>

        {/* ── RIGHT — Photo ── */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade" style={{ animationDelay: '0.4s' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Animated ring */}
            <div className="photo-ring"></div>
            <div className="photo-glow"></div>
            <img
              src="/images/mubendirank.jpg"
              alt="Mubendiran K"
              style={{
                width: 'clamp(220px, 35vw, 340px)', height: 'clamp(220px, 35vw, 340px)',
                objectFit: 'cover', borderRadius: '18px', position: 'relative', zIndex: 2,
                display: 'block',
              }}
            />
            {/* Corner tech badges */}
            {[
              { icon: '🐧', pos: { top: -14, left: -14 }, bg: 'rgba(34,211,238,0.15)', border: 'rgba(34,211,238,0.3)' },
              { icon: '☁️', pos: { top: -14, right: -14 }, bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.3)' },
              { icon: '🐳', pos: { bottom: -14, left: -14 }, bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.3)' },
              { icon: '⚡', pos: { bottom: -14, right: -14 }, bg: 'rgba(245,158,11,0.15)', border: 'rgba(245,158,11,0.3)' },
            ].map((b, i) => (
              <div key={i} style={{
                position: 'absolute', ...b.pos,
                width: 40, height: 40, borderRadius: '10px',
                background: b.bg, border: `1px solid ${b.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', zIndex: 3,
                backdropFilter: 'blur(8px)',
              }}>{b.icon}</div>
            ))}

            {/* Status chip */}
            <div style={{
              position: 'absolute', bottom: -22, left: '50%', transform: 'translateX(-50%)',
              background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.35)',
              borderRadius: '9999px', padding: '4px 14px', zIndex: 3, whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: 6,
              fontFamily: "'DM Mono',monospace", fontSize: '0.62rem', color: '#10b981',
              backdropFilter: 'blur(8px)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', animation: 'dotPulse 2s ease-in-out infinite' }}></span>
              Open to Work
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, zIndex: 10,
        animation: 'float 3s ease-in-out infinite',
      }}>
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.6rem', color: 'var(--text-3)', letterSpacing: '0.1em' }}>scroll</span>
        <div style={{
          width: 24, height: 38, border: '1.5px solid rgba(59,130,246,0.3)', borderRadius: 12,
          display: 'flex', justifyContent: 'center', paddingTop: 6,
        }}>
          <div style={{
            width: 4, height: 10, borderRadius: 9999, background: 'var(--cyan)',
            animation: 'scrollDot 2s ease-in-out infinite',
          }}></div>
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%,100% { transform: translateY(0); opacity: 1; }
          80%      { transform: translateY(12px); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
