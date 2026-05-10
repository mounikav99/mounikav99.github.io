import React from 'react'
import { personal } from '../data/resumeData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div className="font-mono">
          <span className="text-teal-400">MV</span>
          <span className="text-slate-700">.</span>
          <span className="ml-3">{personal.name}</span>
        </div>
        <p>{personal.location}</p>
        <p>Built with React + Vite</p>
      </div>
    </footer>
  )
}
