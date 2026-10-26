import React from 'react'
import { FolderKanban, TrendingUp, Users, Mic, Handshake, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: FolderKanban,
    title: 'Project Coordination',
    desc: 'Sprint planning, milestone tracking, cross-functional engineering alignment, and on-schedule roadmap delivery.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    desc: 'Go-to-market playbooks, organic content engines, narrative engineering, and data-driven user acquisition loops.',
  },
  {
    icon: Users,
    title: 'Community Architecture',
    desc: 'Discord & Telegram setup, role permissions, bot infrastructure, scam defense, and high-retention onboarding funnels.',
  },
  {
    icon: Mic,
    title: 'X Spaces & Audio',
    desc: 'Live panel hosting, speaker curation, community AMAs, audience moderation, and post-event key takeaway threads.',
  },
  {
    icon: Handshake,
    title: 'Partnerships & KOLs',
    desc: 'Cross-community joint campaigns, allowlist distribution, ecosystem partner alliances, and co-marketing activations.',
  },
  {
    icon: ShieldCheck,
    title: 'Alpha & Product Testing',
    desc: 'Pre-launch UX audits, rigorous bug reporting, edge-case analysis, and user sentiment synthesis for core developers.',
  },
]

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-28 border-t border-white/[0.05] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Core Capabilities
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              What I Deliver
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Hands-on execution from day zero to scaled operations. No vanity fluff — just work that moves metrics.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="p-7 rounded-3xl border border-white/[0.06] bg-[#090a0f] hover:border-white/[0.14] hover:bg-[#0c0d14] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-white/20 transition-all mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-zinc-100 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
