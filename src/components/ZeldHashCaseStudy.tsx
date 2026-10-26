import React, { useState } from 'react'
import { ArrowUpRight, TrendingUp, Users, CheckCircle2, ShieldCheck, Flame } from 'lucide-react'

export const ZeldHashCaseStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'strategy' | 'deliverables'>('overview')

  return (
    <section id="case-study" className="py-24 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-800 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              02 // FLAGSHIP CASE STUDY
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] font-medium">
              VERIFIED 30-DAY SPRINT
            </span>
          </div>

          <a
            href="https://x.com/ZeldHash"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors group"
          >
            <span>Live Project @ZeldHash</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Hero Banner for Case Study */}
        <div className="rounded-3xl border border-white/[0.12] bg-gradient-to-b from-[#10121a] via-[#0b0c10] to-[#07080b] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle accent sheen */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                  Role: Growth Lead & Community Manager
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
                  Bitcoin Network Interaction
                </span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
                ZeldHash: Scaling from 200 to 1,500+ Followers &amp; Ground-Up Discord
              </h2>

              <p className="text-zinc-400 text-base leading-relaxed">
                ZeldHash introduced a novel paradigm for interacting with the Bitcoin network, steering away from speculative traps into sustainable ecosystem engagement. As Growth Lead, I engineered the launch trajectory, community governance, and viral content pipelines.
              </p>

              {/* Interactive Tabs */}
              <div className="flex gap-2 p-1 rounded-xl bg-zinc-950 border border-zinc-900 w-fit">
                {(['overview', 'strategy', 'deliverables'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                      activeTab === tab
                        ? 'bg-zinc-800 text-white shadow-sm'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="min-h-[140px] pt-2">
                {activeTab === 'overview' && (
                  <div className="space-y-3 text-sm text-zinc-400">
                    <p className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-zinc-200">The Challenge:</strong> Building credible organic velocity for an early Bitcoin infrastructure protocol without paid bot inflation or fake vanity metrics.
                      </span>
                    </p>
                    <p className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-zinc-200">The Solution:</strong> Clear educational long-form threads, community reward mechanics, and an active moderation presence that turned casual lurkers into protocol champions.
                      </span>
                    </p>
                  </div>
                )}

                {activeTab === 'strategy' && (
                  <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-300">
                    <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-900">
                      <span className="text-zinc-500 block mb-1">01 / NARRATIVE FRAMEWORK</span>
                      Positioned the protocol around Bitcoin utility, publishing detailed breakdown articles that gained wide traction across Web3 circles.
                    </div>
                    <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-900">
                      <span className="text-zinc-500 block mb-1">02 / DISCORD COLD START</span>
                      Constructed roles, security verification against raids, and weekly community syncs that retained 190+ active members in &lt;30 days.
                    </div>
                  </div>
                )}

                {activeTab === 'deliverables' && (
                  <div className="space-y-2 text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">✦</span>
                      <span>Full Discord server creation &amp; bot security architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">✦</span>
                      <span>Published technical narrative threads on Bitcoin network interaction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">✦</span>
                      <span>Daily community moderation, sentiment tracking, and engagement retention</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <a
                  href="https://x.com/ZeldHash"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Verify ZeldHash on X</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Metric Cards Bento */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.1] relative overflow-hidden group">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                  <span>METRIC: X AUDIENCE EXPANSION</span>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-zinc-500 line-through text-xl font-mono">200</span>
                  <span className="text-4xl sm:text-5xl font-mono font-black text-white">1,500+</span>
                  <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    +650%
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-2">
                  Organic followers scaled in under 30 days via targeted narrative threads.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.1]">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                  <span>METRIC: DISCORD SERVER SETUP</span>
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-zinc-500 font-mono text-xl">0 →</span>
                  <span className="text-4xl sm:text-5xl font-mono font-black text-white">190+</span>
                  <span className="text-xs font-mono text-zinc-400">Members</span>
                </div>
                <p className="text-xs text-zinc-400 mt-2">
                  Zero to 190+ verified high-intent members from ground zero with strict anti-bot screening.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-900">
                  <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5 mb-1">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <span>TIMEFRAME</span>
                  </div>
                  <div className="text-lg font-bold font-mono text-white">&lt; 30 Days</div>
                  <div className="text-[11px] text-zinc-500">Rapid Sprint</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-900">
                  <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>AD SPEND</span>
                  </div>
                  <div className="text-lg font-bold font-mono text-white">$0.00</div>
                  <div className="text-[11px] text-zinc-500">100% Organic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
