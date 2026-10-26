import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Proof', href: '#proof' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060608]/90 backdrop-blur-lg border-b border-white/[0.06] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img src="/logo.jpg" alt="MALIXX" className="w-8 h-8 rounded-full object-cover border border-zinc-800" />
          <span className="font-display font-extrabold text-base tracking-wide text-white">
            MALIXX
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] text-zinc-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://t.me/devmalixx"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full bg-white text-black text-[13px] font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
          >
            Let's Talk <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-zinc-400"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a0a0e] border-t border-zinc-800/50 px-5 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-zinc-300 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://t.me/devmalixx"
            target="_blank"
            rel="noreferrer"
            className="block w-full py-3 rounded-full bg-white text-black text-sm font-semibold text-center"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  )
}
