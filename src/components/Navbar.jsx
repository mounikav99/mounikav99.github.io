import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

// ─────────────────────────────────────────────
// AGENT 7 TASK: Navbar
// ─────────────────────────────────────────────
// Requirements:
// - Sticky top nav, transparent → slate-900/95 backdrop-blur on scroll
// - Links: Skills, Experience, Projects, Certifications, Contact
// - Smooth scroll to section IDs on click
// - Mobile: hamburger menu that opens a full-width drawer
// - Active link highlight as user scrolls through sections (IntersectionObserver)
// - "Download Resume" CTA button (links to /public/Mounika_Veeramachaneni_Resume.pdf)
// - Logo: "MV" in monospace with teal accent dot
// ─────────────────────────────────────────────

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  // TODO: Implement active section tracking with IntersectionObserver
  // TODO: Add smooth scroll handler
  // TODO: Close mobile menu on link click

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-xl font-bold tracking-tight">
          <span className="text-teal-400">M</span>
          <span className="text-amber-400">V</span>
          <span className="text-slate-500">.</span>
        </a>

        {/* Desktop links — TODO: add active state */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Mounika_Veeramachaneni_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-teal-400/50 text-teal-400 rounded hover:bg-teal-400/10 transition-colors duration-200"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-teal-400 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer — TODO: animate open/close */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-teal-400 transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Mounika_Veeramachaneni_Resume.pdf"
            className="text-teal-400 border border-teal-400/40 rounded px-4 py-2 text-center text-sm mt-2"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}
