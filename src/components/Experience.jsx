import React, { useEffect, useRef } from 'react'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import { experience } from '../data/resumeData'

// ─────────────────────────────────────────────
// AGENT 4 TASK: Experience Section
// ─────────────────────────────────────────────
// Requirements:
// - Section ID: "experience"
// - Vertical timeline layout with a line running left-side
//   - Teal dot on the line for each entry
//   - Alternating accent colors (teal/amber) matching experience.color
// - Each card:
//     - Company name (large, bold) + role subtitle
//     - Location pill + period pill (no graduation years in any text)
//     - Tech stack badge row (from experience[n].stack)
//     - Expandable highlights list (show 3, "Show more" expands to all)
// - Cards animate on scroll into view (IntersectionObserver → slide-up class)
//   - Start invisible (opacity-0 translateY-6), animate to visible
//   - Stagger delay between cards
// - "Currently" badge on most recent role (period includes "Present")
// - Fully responsive — timeline collapses gracefully on mobile
//
// Animation approach:
//   1. Add a ref to each card
//   2. IntersectionObserver triggers 'visible' class
//   3. CSS transition: opacity 0→1, translateY 24px→0, duration 500ms
// ─────────────────────────────────────────────

function ExperienceCard({ job, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    // TODO (Agent 4): Implement IntersectionObserver scroll animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-6')
        }
      },
      { threshold: 0.15 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const isCurrent = job.period.includes('Present')
  const accentColor = job.color === 'teal' ? 'teal' : 'amber'

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-6 transition-all duration-500 ease-out"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative pl-8 pb-12">
        {/* Timeline dot */}
        <div
          className={`absolute left-0 top-2 w-3 h-3 rounded-full border-2 ${
            accentColor === 'teal'
              ? 'bg-slate-950 border-teal-400'
              : 'bg-slate-950 border-amber-400'
          }`}
        />

        {/* Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors duration-200">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl font-bold text-slate-100">{job.company}</h3>
                {isCurrent && (
                  <span className="px-2 py-0.5 text-xs font-mono rounded bg-teal-400/15 text-teal-400 border border-teal-400/30">
                    Current
                  </span>
                )}
              </div>
              <p className={`text-sm font-medium ${accentColor === 'teal' ? 'text-teal-400' : 'text-amber-400'}`}>
                {job.role}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {job.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={12} />
                {job.location}
              </span>
            </div>
          </div>

          {/* Highlights */}
          {/* TODO (Agent 4): Add "Show more / Show less" toggle — show 3 by default */}
          <ul className="space-y-2 mb-5">
            {job.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="text-sm text-slate-400 flex gap-2 leading-relaxed">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${accentColor === 'teal' ? 'bg-teal-400' : 'bg-amber-400'}`} />
                {h}
              </li>
            ))}
          </ul>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {job.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono bg-slate-800 text-slate-400 rounded border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="mb-16">
        <p className="font-mono text-teal-400 text-xs uppercase tracking-widest mb-2">
          Where I've worked
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
          Experience
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1.5 top-0 bottom-0 w-px bg-slate-800" />

        {experience.map((job, i) => (
          <ExperienceCard key={job.id} job={job} index={i} />
        ))}
      </div>
    </section>
  )
}
