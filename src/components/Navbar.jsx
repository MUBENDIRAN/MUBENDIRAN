import { useState, useEffect } from 'react'

const links = [
  { href: '#home',           label: '01. Home' },
  { href: '#about',          label: '02. About' },
  { href: '#skills',         label: '03. Skills' },
  { href: '#projects',       label: '04. Projects' },
  { href: '#certifications', label: '05. Certs' },
  { href: '#contact',        label: '06. Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      // update active
      const sections = links.map(l => document.querySelector(l.href)).filter(Boolean)
      const current = sections.findLast(s => s.getBoundingClientRect().top <= 120)
      if (current) setActive('#' + current.id)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-400 ${scrolled ? 'nav-blur' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={e => go(e, '#home')}
          className="font-mono text-sm text-cyan-400 hover:text-white transition-colors"
          style={{ fontFamily: "'DM Mono', monospace" }}>
          <span className="text-slate-500">~/</span>mubendiran
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => go(e, l.href)}
              className={`nav-link ${active === l.href ? 'active' : ''}`}>
              {l.label}
            </a>
          ))}
          <a href="https://drive.google.com/file/d/1Ij1WemDWJjPPGv2ZJAoQXLCh0qhbmm5l/view?usp=drivesdk"
            target="_blank" rel="noreferrer"
            className="btn-outline text-xs px-4 py-2" style={{ borderRadius: '8px' }}>
            <i className="fas fa-download mr-1.5"></i>Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-white transition-colors focus:outline-none"
          style={{ cursor: 'none' }}>
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-lg`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mob-menu px-6 pb-6 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => go(e, l.href)}
              className={`nav-link py-2 border-b border-white/5 ${active === l.href ? 'active' : ''}`}>
              {l.label}
            </a>
          ))}
          <a href="https://drive.google.com/file/d/1Ij1WemDWJjPPGv2ZJAoQXLCh0qhbmm5l/view?usp=drivesdk"
            target="_blank" rel="noreferrer"
            className="btn-outline text-xs px-4 py-2 text-center mt-2" style={{ borderRadius: '8px' }}>
            <i className="fas fa-download mr-1.5"></i>Resume
          </a>
        </div>
      )}
    </nav>
  )
}
