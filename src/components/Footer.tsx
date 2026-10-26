import { ArrowUpRight, ArrowUp } from 'lucide-react'

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/[0.06] bg-[#07080c] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Mission statement */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="MALIXX"
                className="w-9 h-9 rounded-full object-cover border border-white/20"
              />
              <span className="font-display font-extrabold text-base tracking-wider text-white">
                MALIXX
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Web3 Project Manager &amp; Growth Strategist. Turning ambitious
              decentralized protocols into vibrant, high-retention ecosystems.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services &amp; Capabilities
                </a>
              </li>
              <li>
                <a href="#proof" className="hover:text-white transition-colors">
                  Proof of Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About &amp; Timeline
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a
                  href="https://x.com/devmalixx"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span>X / Twitter</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/devmalixx"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Telegram</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />
                </a>
              </li>
              <li>
                <span className="text-zinc-500">
                  Discord: <span className="text-zinc-300">devmalixx</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} MALIXX. Crafted for high-growth Web3 ecosystems.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  )
}
