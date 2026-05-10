import React from 'react'
import { BarChart2, Cloud, GitBranch, PieChart, Award } from 'lucide-react'
import { certifications, education } from '../data/resumeData'

// ─────────────────────────────────────────────
// AGENT 6 TASK: Certifications Section
// ─────────────────────────────────────────────
// Requirements:
// - Section ID: "certifications"
// - 2-column heading: "Certifications" left, "Education" right (stacked on mobile)
// - Cert cards: 2×2 grid (or 4 in a row on large screens)
//   - Icon (colored teal/amber per cert.color)
//   - Certification name
//   - Issuer
//   - Code badge (e.g. "PL-300")
//   - Subtle checkmark/verified indicator
// - Education: two clean entries — degree + institution + location
//   NO graduation year anywhere
// - Hover on cert cards: faint glow matching accent color
//
// Icon map: BarChart2, Cloud, GitBranch, PieChart
// ─────────────────────────────────────────────

const iconMap = { BarChart2, Cloud, GitBranch, PieChart }

function CertCard({ cert }) {
  const Icon = iconMap[cert.icon]
  const isTeal = cert.color === 'teal'

  return (
    <div
      className={`bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all duration-200 ${
        isTeal ? 'hover:shadow-teal-400/5 hover:shadow-lg' : 'hover:shadow-amber-400/5 hover:shadow-lg'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-2.5 rounded-lg flex-shrink-0 ${isTeal ? 'bg-teal-400/10' : 'bg-amber-400/10'}`}>
          {Icon && <Icon size={20} className={isTeal ? 'text-teal-400' : 'text-amber-400'} />}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-200 leading-snug mb-1">{cert.name}</p>
          <p className="text-xs text-slate-500">{cert.issuer}</p>
        </div>
        <span
          className={`text-xs font-mono px-2 py-1 rounded flex-shrink-0 ${
            isTeal
              ? 'bg-teal-400/10 text-teal-400 border border-teal-400/20'
              : 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
          }`}
        >
          {cert.code}
        </span>
      </div>
      {/* Verified badge */}
      <div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-1.5">
        <Award size={12} className="text-slate-600" />
        <span className="text-xs text-slate-600">Certified</span>
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Certifications */}
        <div>
          <div className="mb-10">
            <p className="font-mono text-teal-400 text-xs uppercase tracking-widest mb-2">
              Validated expertise
            </p>
            <h2 className="text-3xl font-bold text-slate-100">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="mb-10">
            <p className="font-mono text-amber-400 text-xs uppercase tracking-widest mb-2">
              Academic background
            </p>
            <h2 className="text-3xl font-bold text-slate-100">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="border-l-2 border-slate-800 pl-5 hover:border-teal-400/40 transition-colors duration-200"
              >
                {/* TODO (Agent 6): Ensure NO graduation year appears */}
                <p className="text-slate-200 font-medium leading-snug mb-1">{edu.degree}</p>
                <p className="text-sm text-slate-400">{edu.institution}</p>
                <p className="text-xs text-slate-600 mt-1">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
