import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX, y = e.clientY
      if (dot.current)  { dot.current.style.left  = x + 'px'; dot.current.style.top  = y + 'px' }
      if (ring.current) { ring.current.style.left = x + 'px'; ring.current.style.top = y + 'px' }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
