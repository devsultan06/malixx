import { ArrowUpRight, ArrowUp } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/40 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} MALIXX. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <a href="https://x.com/devmalixx" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            X <ArrowUpRight className="w-3 h-3" />
          </a>
          <a href="https://t.me/devmalixx" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            Telegram <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            Top <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  )
}
