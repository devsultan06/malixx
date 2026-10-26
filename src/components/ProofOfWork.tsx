import React from 'react'
import { Radio, MessageSquare, Terminal, ExternalLink, Activity } from 'lucide-react'

export const ProofOfWork: React.FC = () => {
  return (
    <section id="proof" className="py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              <span>05 // VERIFIABLE PROOF</span>
              <span>·</span>
              <span>EVIDENCE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              Proof of Work
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-mono">
            Actual live records, hosted audio spaces, and published narrative breakdowns.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Card 1: X Space Audio Host Record */}
          <div className="lg:col-span-7 editorial-card rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-xs font-mono uppercase text-zinc-300 tracking-wider">
                    Hosted Audio Space Record
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">Platform: X (Twitter)</span>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                  <Radio className="w-3.5 h-3.5 text-rose-400" />
                  <span>Host: 𝑀𝒶𝓁𝒾𝓍𝓍 (@devmalixx)</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white">
                  "Chill with @FinInvai"
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  Live audio discussion covering AI-driven crypto chart pattern detection, trading alert ergonomics, and market monitoring.
                </p>
              </div>

              {/* Audio Waveform UI Simulation */}
              <div className="mt-6 p-4 rounded-xl bg-zinc-950/70 border border-zinc-900 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 h-8">
                  {[40, 70, 30, 90, 60, 100, 45, 80, 50, 75, 95, 35, 85, 60, 40, 70, 90, 50].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-1 bg-zinc-600 rounded-full group-hover:bg-zinc-300 transition-colors"
                    />
                  ))}
                </div>
                <div className="text-right shrink-0 font-mono text-xs">
                  <span className="text-emerald-400 font-bold text-sm block">51+ Tuned In</span>
                  <span className="text-zinc-500 text-[10px]">Verified Audience</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Topic: Algorithmic Market Alerts</span>
              <a
                href="https://x.com/devmalixx"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>View on X</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Editorial & Research Breakdown */}
          <div className="lg:col-span-5 editorial-card rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-6">
                <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                  Technical Narrative Writing
                </span>
                <span className="text-[11px] font-mono text-zinc-500">Pinned Research</span>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-white">
                  "ZeldHash: A New Way to Interact With the Bitcoin Network"
                </h3>

                <blockquote className="p-4 rounded-xl bg-zinc-950/80 border-l-2 border-zinc-500 border-zinc-900 text-xs text-zinc-300 italic leading-relaxed font-sans">
                  "The crypto space continues to evolve, but most innovations still rely on traditional models of mining, staking, or liquidity incentives. ZeldHash introduces a different approach — one that connects..."
                </blockquote>

                <p className="text-xs text-zinc-400">
                  Long-form strategic positioning piece breaking down core architecture for non-technical investors and community members.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>Category: Protocol Education</span>
              <span className="text-zinc-400 font-bold">100% Organic</span>
            </div>
          </div>

          {/* Card 3: Community Touchpoint Volume */}
          <div className="lg:col-span-4 editorial-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-xs text-zinc-500 block">ENGAGEMENT VOLUME</span>
                <span className="font-display font-bold text-xl text-white">18,900+ Posts</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Consistently active on Crypto Twitter since 2023, building daily direct rapport with key founders, operators, and active communities.
            </p>
          </div>

          {/* Card 4: Product Testing & QA Rigor */}
          <div className="lg:col-span-4 editorial-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-xs text-zinc-500 block">ALPHA TESTNET QA</span>
                <span className="font-display font-bold text-xl text-white">Blonex &amp; DeFi Apps</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Comprehensive stress-testing of protocol UI/UX, smart contract interactions, and wallet connectivity with detailed engineering logs.
            </p>
          </div>

          {/* Card 5: Real-Time Availability */}
          <div className="lg:col-span-4 editorial-card rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-xs text-zinc-500 block">STATUS &amp; TIMEZONE</span>
                <span className="font-display font-bold text-xl text-emerald-400">WAT / Global Async</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Equipped for seamless asynchronous collaboration across US, European, and Asian crypto project timezones.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
