import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 sm:py-5 px-4 sm:px-6">
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 px-5 sm:px-6 py-3 flex items-center justify-between ${
          scrolled
            ? 'bg-[#0a0b11]/85 backdrop-blur-xl border border-white/[0.09] shadow-2xl shadow-black/60'
            : 'bg-[#0c0e14]/50 backdrop-blur-md border border-white/[0.05]'
        }`}
      >
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/logo.jpg"
              alt="MALIXX"
              className="w-8 h-8 rounded-full object-cover border border-white/20 group-hover:scale-105 transition-transform"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0a0b11]" />
          </div>
          <span className="font-display font-extrabold text-sm tracking-wider text-white group-hover:text-zinc-200 transition-colors">
            MALIXX
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors tracking-wide py-1"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://t.me/devmalixx"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden max-w-sm mx-auto mt-2 rounded-2xl bg-[#0c0d14]/95 backdrop-blur-2xl border border-white/[0.08] p-5 shadow-2xl space-y-4">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/[0.04] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/[0.06]">
            <a
              href="https://t.me/devmalixx"
              target="_blank"
              rel="noreferrer"
              className="block w-full py-2.5 rounded-xl bg-white text-black text-xs font-semibold text-center hover:bg-zinc-200 transition-colors"
            >
              Let's Talk on Telegram
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
