import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold tracking-wide group-hover:text-cyan-200 transition-colors">SARHANE Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-cyan-100 transition-colors">Let’s talk</a>
          </nav>

          <button className="md:hidden text-white" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-80 h-full bg-slate-900 border-l border-white/10 p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-white font-semibold">Menu</span>
              <button onClick={close} className="text-white" aria-label="Close menu">
                <X />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={close} className="text-slate-200 hover:text-white">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={close} className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium text-center">Let’s talk</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
