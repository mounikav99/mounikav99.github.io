import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

// TODO (Agent 7): Smooth scroll + fade-in/out animation
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 p-3 bg-slate-800 border border-slate-700 rounded-full text-slate-400 hover:text-teal-400 hover:border-teal-400/50 transition-all duration-200"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
