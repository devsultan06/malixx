import React, { useState } from 'react'
import { ArrowUpRight, Copy, Check, Send, Mail, MessageSquare } from 'lucide-react'
import confetti from 'canvas-confetti'

export const ContactCTA: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)

    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#ffffff', '#cbd5e1', '#94a3b8'],
        disableForReducedMotion: true,
      })
    } catch {
      // Fallback silently
    }

    setTimeout(() => setCopiedKey(null), 2500)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-white/[0.12] overflow-hidden bg-gradient-to-b from-[#11131a] via-[#090a0f] to-[#050507] p-8 sm:p-14 lg:p-16 shadow-2xl">
          {/* Background banner art integrated with dark gradient overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen">
            <img
              src="/banner.jpeg"
              alt="MALIXX Banner Art"
              className="w-full h-full object-cover object-center filter grayscale contrast-150"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#090a0f]/80 to-transparent" />
          </div>

          {/* Centered content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-7 flex flex-col items-center">
            {/* Clean tag without dot */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono uppercase tracking-widest text-zinc-400">
              INITIATE COLLABORATION
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-tight text-center">
              Got Something <br />
              <span className="text-silver-gradient">Worth Building?</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto text-center">
              Protocol launches, community architecture, growth campaigns, or agile project management—I'm always open to high-impact opportunities with ambitious Web3 teams.
            </p>

            {/* Centered Contact Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {/* Telegram Primary */}
              <a
                href="https://t.me/devmalixx"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all transform active:scale-95 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Telegram / @devmalixx</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* X Profile */}
              <a
                href="https://x.com/devmalixx"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95"
              >
                <span>X / @devmalixx</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>

              {/* Discord Copy */}
              <button
                type="button"
                onClick={() => handleCopy('devmalixx', 'discord')}
                className="px-5 py-3.5 rounded-full border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900 text-zinc-300 font-mono text-xs tracking-wider flex items-center gap-2 transition-all active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
                <span>Discord: devmalixx</span>
                {copiedKey === 'discord' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-zinc-500" />
                )}
                {copiedKey === 'discord' && (
                  <span className="text-[10px] text-emerald-400 font-sans">Copied!</span>
                )}
              </button>

              {/* Email Copy */}
              <button
                type="button"
                onClick={() => handleCopy('malixx.growth@gmail.com', 'email')}
                className="px-5 py-3.5 rounded-full border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900 text-zinc-300 font-mono text-xs tracking-wider flex items-center gap-2 transition-all active:scale-95"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>malixx.growth@gmail.com</span>
                {copiedKey === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-zinc-500" />
                )}
                {copiedKey === 'email' && (
                  <span className="text-[10px] text-emerald-400 font-sans">Copied!</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
