import React, { useState } from 'react'
import { Mail, Linkedin, MapPin, Send } from 'lucide-react'
import { personal } from '../data/resumeData'

// ─────────────────────────────────────────────
// AGENT 6 TASK: Contact Section
// ─────────────────────────────────────────────
// Requirements:
// - Section ID: "contact"
// - Two-column layout: left = intro text + social links, right = contact form
// - Intro: short tagline ("Open to new opportunities") + location pill
// - Social links: Email (mailto), LinkedIn (external link)
//   - Each as a styled button row with icon + label + arrow
// - Contact form (no backend needed):
//   - Fields: Name, Email, Message (textarea)
//   - Submit triggers mailto: fallback (href with prefilled subject/body)
//   - OR integrate Formspree (leave TODO comment with instructions)
//   - Basic client-side validation: required fields, email format
//   - Success state: form replaced with "Thanks! I'll be in touch." message
// - Subtle background: faint teal radial gradient behind the section
// - Fully responsive
//
// Formspree integration TODO:
//   1. Sign up at formspree.io
//   2. Create a new form, get the form ID
//   3. Replace the mailto action with:
//      fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: formData })
// ─────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    // TODO (Agent 6): Replace with Formspree fetch call
    // Fallback: open mailto
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(form.message)
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`)
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="mb-16">
        <p className="font-mono text-teal-400 text-xs uppercase tracking-widest mb-2">
          Get in touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Contact</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left — intro + links */}
        <div>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Open to hybrid data analyst and BI engineering roles. If you're building something
            interesting with data, I'd love to connect.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-400/40 group transition-colors duration-200"
            >
              <div className="p-2 bg-teal-400/10 rounded-lg">
                <Mail size={18} className="text-teal-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500 mb-0.5">Email</p>
                <p className="text-sm text-slate-300 group-hover:text-teal-400 transition-colors">{personal.email}</p>
              </div>
              <Send size={14} className="text-slate-600 group-hover:text-teal-400 transition-colors" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-400/40 group transition-colors duration-200"
            >
              <div className="p-2 bg-teal-400/10 rounded-lg">
                <Linkedin size={18} className="text-teal-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                <p className="text-sm text-slate-300 group-hover:text-teal-400 transition-colors">Connect on LinkedIn</p>
              </div>
              <Send size={14} className="text-slate-600 group-hover:text-teal-400 transition-colors" />
            </a>

            <div className="flex items-center gap-3 px-4 py-3 text-sm text-slate-500">
              <MapPin size={14} className="text-teal-400/60" />
              {personal.location}
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div>
          {sent ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-14 h-14 bg-teal-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Message sent!</h3>
                <p className="text-slate-500 text-sm">Thanks for reaching out. I'll be in touch shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={`w-full bg-slate-900 border rounded-lg px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-teal-400/50 transition-colors ${errors.name ? 'border-red-500/50' : 'border-slate-800'}`}
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className={`w-full bg-slate-900 border rounded-lg px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-teal-400/50 transition-colors ${errors.email ? 'border-red-500/50' : 'border-slate-800'}`}
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder="What's on your mind?"
                  className={`w-full bg-slate-900 border rounded-lg px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-teal-400/50 transition-colors resize-none ${errors.message ? 'border-red-500/50' : 'border-slate-800'}`}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-teal-400 text-slate-900 font-semibold rounded-lg hover:bg-teal-300 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
