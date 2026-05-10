import React from 'react'
import { LayoutDashboard, AlertTriangle, Database, TrendingUp } from 'lucide-react'
import { projects } from '../data/resumeData'

// ─────────────────────────────────────────────
// AGENT 5 TASK: Projects Section
// ─────────────────────────────────────────────
// Requirements:
// - Section ID: "projects"
// - 3 project cards in a responsive grid (1 col mobile → 3 col desktop)
// - Each card:
//     - Icon (large, colored per project.color)
//     - Title
//     - Big metric stat (e.g. "AUC 0.87") with label below
//     - Problem → Solution → Impact flow with distinct label colors
//     - Tech stack badges (same pill style as Skills)
//     - Hover: card lifts slightly (translateY -4px), border brightens
// - Optional: SVG diagram thumbnail placeholder in the card header area
//   - Teal/amber gradient abstract shape as visual texture
// - Cards animate on scroll (same IntersectionObserver pattern as Experience)
// - No external links required (leave GitHub/case study as placeholder)
//
// Icon map:
//   LayoutDashboard → itsm-dashboard
//   AlertTriangle   → anomaly-detection
//   Database        → data-mart
// ─────────────────────────────────────────────

const iconMap = {
  LayoutDashboard,
  AlertTriangle,
  Database,
}

function ProjectCard({ project }) {
  const Icon = iconMap[project.icon]
  const isTeal = project.color === 'teal'

  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:-translate-y-1 transition-all duration-200 flex flex-col">
      {/* Card header — icon + metric */}
      <div className="flex items-start justify-between mb-5">
        <div
          className={`p-3 rounded-lg ${isTeal ? 'bg-teal-400/10' : 'bg-amber-400/10'}`}
        >
          {Icon && (
            <Icon
              size={24}
              className={isTeal ? 'text-teal-400' : 'text-amber-400'}
            />
          )}
        </div>
        {/* Metric callout */}
        <div className="text-right">
          <p className={`text-2xl font-bold font-mono ${isTeal ? 'text-teal-400' : 'text-amber-400'}`}>
            {project.metric}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">{project.metricLabel}</p>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-100 mb-4">{project.title}</h3>

      {/* P → S → I */}
      {/* TODO (Agent 5): Consider accordion or hover reveal for longer text */}
      <div className="space-y-3 flex-1 mb-5">
        <div>
          <span className="text-xs font-mono text-slate-600 uppercase tracking-wider">Problem</span>
          <p className="text-sm text-slate-400 mt-1 leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <span className="text-xs font-mono text-teal-400/70 uppercase tracking-wider">Solution</span>
          <p className="text-sm text-slate-400 mt-1 leading-relaxed">{project.solution}</p>
        </div>
        <div>
          <span className="text-xs font-mono text-amber-400/70 uppercase tracking-wider">Impact</span>
          <p className="text-sm text-slate-400 mt-1 leading-relaxed">{project.impact}</p>
        </div>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs font-mono bg-slate-800 text-slate-500 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="mb-16">
        <p className="font-mono text-teal-400 text-xs uppercase tracking-widest mb-2">
          Selected work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
          Projects
        </h2>
      </div>

      {/* Grid */}
      {/* TODO (Agent 5): Add IntersectionObserver stagger animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
