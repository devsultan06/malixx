import React from 'react'
import { ArrowUpRight, TrendingUp } from 'lucide-react'

const projects = [
  {
    name: 'ZeldHash',
    role: 'Growth Lead & Community Manager',
    url: 'https://x.com/ZeldHash',
    desc: 'Scaled X presence from 200+ to 1,500+ followers and built an active Discord ecosystem from zero to 190+ members within 30 days ($0 ad spend). Led launch narrative, daily engagement, and organic funnel engineering.',
    featured: true,
    tag: 'Flagship Sprint',
    metrics: [
      { label: 'Follower Growth', value: '+650%' },
      { label: 'Discord Members', value: '190+' },
      { label: 'Time to Milestone', value: '<30 Days' },
    ],
  },
  {
    name: 'TrashBid',
    role: 'Lead · Operations & Growth',
    url: 'https://x.com/usetrashbid',
    desc: 'Leading operational frameworks, milestone coordination, community launch positioning, and ecosystem partnership pipelines.',
    featured: false,
  },
  {
    name: 'FinInvAI',
    role: 'Team · Product & Community',
    url: 'https://x.com/FinInvai',
    desc: 'AI-assisted crypto market analytics. Hosted live X Spaces with 50+ real-time listeners, synthesizing user feedback directly into weekly engineering sprints.',
    featured: false,
  },
  {
    name: 'AlignerzLabs',
    role: 'Community Builder & Content Creator',
    url: 'https://x.com/AlignerZ_Labs',
    desc: 'Architected member onboarding funnels, educational content threads, and community engagement loops.',
    featured: false,
  },
  {
    name: 'Aryze',
    role: 'Ambassador & Community Builder',
    url: 'https://x.com/AryzeOfficial',
    desc: 'Spearheaded stablecoin awareness campaigns, community moderation, and ambassador activation sprints.',
    featured: false,
  },
  {
    name: 'Shift',
    role: 'Community Moderator & Content Creator',
    url: 'https://x.com/shiftfdn',
    desc: 'Managed 24/7 security & moderation, anti-scam procedures, community events, and technical explainers.',
    featured: false,
  },
  {
    name: 'Blonex',
    role: 'Ambassador & Product Tester',
    url: 'https://x.com/Blonexcom',
    desc: 'Pre-launch beta testing, UI/UX audit logs, bug reproduction reporting, and community advocacy.',
    featured: false,
  },
]

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Portfolio &amp; Case Studies
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Proven execution across DeFi, Bitcoin infrastructure, AI analytics, and decentralized protocols.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-5">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`block rounded-3xl border transition-all duration-300 group relative overflow-hidden ${
                p.featured
                  ? 'border-white/[0.14] bg-gradient-to-b from-[#11131c] via-[#0d0e15] to-[#090a0f] p-7 sm:p-9 hover:border-white/25 shadow-xl shadow-black/40'
                  : 'border-white/[0.06] bg-[#090a0f] p-6 sm:p-7 hover:border-white/[0.12] hover:bg-[#0c0d14]'
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-3 flex-1">
                  {/* Title & Role */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3
                      className={`font-display font-bold text-white group-hover:text-zinc-100 transition-colors ${
                        p.featured ? 'text-2xl sm:text-3xl' : 'text-xl'
                      }`}
                    >
                      {p.name}
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-800/60 text-zinc-300 border border-zinc-700/40">
                      {p.role}
                    </span>
                    {p.featured && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-zinc-200 border border-white/20 inline-flex items-center gap-1 font-medium">
                        <TrendingUp className="w-3 h-3" /> {p.tag}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl">
                    {p.desc}
                  </p>

                  {/* Featured Metrics Grid */}
                  {p.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 max-w-xl">
                      {p.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]"
                        >
                          <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                            {m.value}
                          </p>
                          <p className="text-[11px] text-zinc-400 font-medium mt-0.5">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Arrow Action Pill */}
                <div className="p-3 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/10 group-hover:scale-105 transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
