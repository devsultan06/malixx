import { useState } from 'react'
import { ArrowUpRight, Copy, Check } from 'lucide-react'

export const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="rounded-2xl border border-zinc-800/60 bg-[#0c0d12] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle banner background */}
          <div className="absolute inset-0 opacity-[0.08]">
            <img
              src="/banner.jpeg"
              alt=""
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Got something
              <br />
              worth building?
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Protocol launches, community building, growth campaigns, or project
              management — I'm open to working with ambitious Web3 teams.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://t.me/devmalixx"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                Telegram <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/devmalixx"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full border border-zinc-700 text-sm text-zinc-200 hover:border-zinc-500 transition-colors flex items-center gap-2"
              >
                X / @devmalixx <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => copy('devmalixx', 'discord')}
                className="px-5 py-3 rounded-full border border-zinc-800 text-sm text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-colors flex items-center gap-2"
              >
                Discord: devmalixx
                {copied === 'discord' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
