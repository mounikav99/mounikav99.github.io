import React, { useState } from 'react'
import { BarChart2, Activity, GitBranch, Cloud, Code2, Cpu } from 'lucide-react'
import { skillDomains } from '../data/resumeData'

// ─────────────────────────────────────────────
// AGENT 3 TASK: Skills Section
// ─────────────────────────────────────────────
// Requirements:
// - Section ID: "skills"
// - Section heading with teal accent underline
// - Horizontal tab/filter buttons — one per domain from skillDomains
//   - "All" tab that shows every skill flattened
//   - Active tab: teal bg, inactive: slate border + hover teal
// - Skills render as pill badges in a wrapping flex grid
//   - teal-color pills for teal domains, amber-color for amber domains
//   - Hover: slight scale + glow
// - Domain cards (optional enhancement): show domain name + icon above the pills
//   when "All" is selected
// - Animate badge appearance on tab change (stagger-in with CSS delay)
// - Show total skill count somewhere visible
// - Fully responsive — tabs wrap on mobile, pills adapt to small screens
//
// Icon map (Lucide):
//   analytics  → BarChart2
//   itsm       → Activity
//   engineering → GitBranch
//   cloud      → Cloud
//   languages  → Code2
//   ml         → Cpu
// ─────────────────────────────────────────────

const iconMap = {
  BarChart2,
  Activity,
  GitBranch,
  Cloud,
  Code2,
  Cpu,
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  const allSkills = skillDomains.flatMap((d) => d.skills)
  const totalCount = allSkills.length

  const visibleDomains =
    activeTab === 'all'
      ? skillDomains
      : skillDomains.filter((d) => d.id === activeTab)

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="mb-12">
        <p className="font-mono text-teal-400 text-xs uppercase tracking-widest mb-2">
          What I work with
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-1">
          Skills & Technologies
        </h2>
        {/* TODO (Agent 3): Add animated teal underline accent */}
        <p className="text-slate-500 text-sm mt-2">
          {totalCount} skills across {skillDomains.length} domains
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-1.5 rounded text-sm font-medium transition-colors duration-150 ${
            activeTab === 'all'
              ? 'bg-teal-400 text-slate-900'
              : 'border border-slate-700 text-slate-400 hover:border-teal-400/50 hover:text-teal-400'
          }`}
        >
          All
        </button>
        {skillDomains.map((domain) => {
          const Icon = iconMap[domain.icon]
          return (
            <button
              key={domain.id}
              onClick={() => setActiveTab(domain.id)}
              className={`px-4 py-1.5 rounded text-sm font-medium flex items-center gap-2 transition-colors duration-150 ${
                activeTab === domain.id
                  ? domain.color === 'teal'
                    ? 'bg-teal-400 text-slate-900'
                    : 'bg-amber-400 text-slate-900'
                  : 'border border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-200'
              }`}
            >
              {Icon && <Icon size={14} />}
              {domain.label}
            </button>
          )
        })}
      </div>

      {/* Skills grid */}
      {/* TODO (Agent 3): Add staggered entrance animation on tab change */}
      <div className="space-y-10">
        {visibleDomains.map((domain) => {
          const Icon = iconMap[domain.icon]
          return (
            <div key={domain.id}>
              {/* Domain header (shown when All tab active) */}
              {activeTab === 'all' && (
                <div className="flex items-center gap-2 mb-4">
                  {Icon && (
                    <Icon
                      size={16}
                      className={domain.color === 'teal' ? 'text-teal-400' : 'text-amber-400'}
                    />
                  )}
                  <span className="text-sm font-medium text-slate-300">{domain.label}</span>
                  <div className="flex-1 h-px bg-slate-800" />
                </div>
              )}

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded text-sm font-mono transition-all duration-150 hover:scale-105 cursor-default ${
                      domain.color === 'teal'
                        ? 'bg-teal-400/10 text-teal-300 border border-teal-400/20 hover:border-teal-400/50 hover:bg-teal-400/15'
                        : 'bg-amber-400/10 text-amber-300 border border-amber-400/20 hover:border-amber-400/50 hover:bg-amber-400/15'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
