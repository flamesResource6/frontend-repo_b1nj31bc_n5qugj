import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
          <h2 className="text-white text-3xl font-semibold mb-2">Let’s build something great</h2>
          <p className="text-slate-300 mb-6">Tell us about your project and we’ll get back within 24 hours.</p>

          {sent ? (
            <div className="p-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">
              Thanks! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400" />
              <input required placeholder="Email" type="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400" />
              <input placeholder="Company" className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400" />
              <textarea required placeholder="Project details" rows="5" className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400" />
              <div className="sm:col-span-2 flex items-center justify-between gap-4">
                <p className="text-xs text-slate-400">We’ll never share your info.</p>
                <button className="px-5 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-cyan-100 transition">Send message</button>
              </div>
            </form>
          )}
        </div>
        <p className="text-center text-slate-500 text-sm mt-6">© {new Date().getFullYear()} SARHANE Studio. All rights reserved.</p>
      </div>
    </section>
  )
}
