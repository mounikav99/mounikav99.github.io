import React, { useState, useEffect } from 'react'
import { MapPin, Mail, Download, ArrowDown } from 'lucide-react'
import { personal } from '../data/resumeData'

// ─────────────────────────────────────────────
// AGENT 2 TASK: Hero Section
// ─────────────────────────────────────────────
// Requirements:
// - Full viewport height section
// - Animated rotating tagline cycling through personal.taglines
//   (CSS opacity fade-in/out every ~2s, cycles indefinitely)
// - Name in large display font with gradient on first/last name
// - Summary paragraph below tagline
// - Two CTA buttons:
//     1. "View Projects" → scrolls to #projects
//     2. "Download Resume" → links to /Mounika_Veeramachaneni_Resume.pdf
// - Location + email pills below CTAs
// - Subtle background: CSS dot-grid pattern using ::before pseudo OR
//   SVG background of faint grid lines
// - Scroll-down arrow that fades out after scrolling past the fold
// - Staggered entrance animations (name → tagline → summary → CTAs)
//   using CSS animation-delay classes
// - Fully responsive — centered on mobile, left-aligned on desktop
// ─────────────────────────────────────────────

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setTaglineIndex((i) => (i + 1) % personal.taglines.length)
        setVisible(true)
      }, 400)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-16 max-w-6xl mx-auto"
    >
      {/* TODO (Agent 2): Add dot-grid background pattern */}
      {/* TODO (Agent 2): Add staggered entrance animations */}

      {/* Eyebrow label */}
      <p className="font-mono text-teal-400 text-sm mb-4 tracking-widest uppercase">
        Data Analyst · Portfolio
      </p>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
        {/* TODO (Agent 2): Apply text-gradient to first name */}
        <span className="text-gradient">Mounika</span>
        <br />
        <span className="text-slate-100">Veeramachaneni</span>
      </h1>

      {/* Rotating tagline */}
      <div className="h-10 flex items-center mt-4 mb-6">
        <span
          className={`font-mono text-xl md:text-2xl text-amber-400 transition-opacity duration-400 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* TODO (Agent 2): Make tagline crossfade smoother with absolute positioning */}
          {personal.taglines[taglineIndex]}
        </span>
      </div>

      {/* Summary */}
      <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-8">
        {personal.summary}
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href="#projects"
          className="px-6 py-3 bg-teal-400 text-slate-900 font-semibold rounded hover:bg-teal-300 transition-colors duration-200 glow-teal"
        >
          View Projects
        </a>
        <a
          href="/Mounika_Veeramachaneni_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-slate-600 text-slate-300 rounded hover:border-teal-400/50 hover:text-teal-400 transition-colors duration-200 flex items-center gap-2"
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>

      {/* Meta pills */}
      <div className="flex flex-wrap gap-3 text-sm">
        <span className="flex items-center gap-2 text-slate-500">
          <MapPin size={14} className="text-teal-400" />
          {personal.location}
        </span>
        <span className="flex items-center gap-2 text-slate-500">
          <Mail size={14} className="text-teal-400" />
          {personal.email}
        </span>
      </div>

      {/* Scroll indicator */}
      {/* TODO (Agent 2): Fade this out on scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown size={20} className="text-slate-600" />
      </div>
    </section>
  )
}
