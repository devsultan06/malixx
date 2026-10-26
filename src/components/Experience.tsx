import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface ExperienceItem {
  period: string
  role: string
  company: string
  handle: string
  url: string
  description: string
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      period: '2024 — PRESENT',
      role: 'Lead · Operations & Ecosystem Growth',
      company: 'TrashBid',
      handle: '@usetrashbid',
      url: 'https://x.com/usetrashbid',
      description: 'Heading operational sprints, roadmap milestone tracking, and go-to-market community positioning across the ecosystem.',
    },
    {
      period: '2024 — PRESENT',
      role: 'Team · Product Management & Community',
      company: 'FinInvAI',
      handle: '@FinInvai',
      url: 'https://x.com/FinInvai',
      description: 'Directing user narrative, hosting official live X Spaces, and bridging community insights directly into weekly engineering iterations.',
    },
    {
      period: '2023 — 2024',
      role: 'Growth Lead & Head of Community',
      company: 'ZeldHash',
      handle: '@ZeldHash',
      url: 'https://x.com/ZeldHash',
      description: 'Led rapid-growth sprint scaling audience by +650% and architecting verified Discord server from scratch in under 30 days.',
    },
    {
      period: '2023 — 2024',
      role: 'Community Builder & Content Creator',
      company: 'AlignerzLabs',
      handle: '@AlignerZ_Labs',
      url: 'https://x.com/AlignerZ_Labs',
      description: 'Architected member onboarding pipelines, educational thread campaigns, and active community engagement loops.',
    },
    {
      period: '2022 — 2023',
      role: 'Ambassador & Community Builder',
      company: 'Aryze',
      handle: '@AryzeOfficial',
      url: 'https://x.com/AryzeOfficial',
      description: 'Championed stablecoin awareness, community moderation, and global ambassador recruitment activations.',
    },
    {
      period: '2022 — 2023',
      role: 'Community Moderator & Content Creator',
      company: 'Shift Foundation',
      handle: '@shiftfdn',
      url: 'https://x.com/shiftfdn',
      description: 'Enforced 24/7 channel security, anti-phishing safeguards, and authored weekly ecosystem community recaps.',
    },
  ]

  return (
    <section id="experience" className="py-28 border-t border-white/[0.05] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Career Trajectory
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Experience
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Continuous progression across Web3 operations, growth strategy, and community governance.
          </p>
        </div>

        {/* Timeline Rows */}
        <div className="space-y-4">
          {experiences.map((exp) => (
            <a
              key={exp.company}
              href={exp.url}
              target="_blank"
              rel="noreferrer"
              className="p-6 sm:p-8 rounded-3xl border border-white/[0.06] bg-[#090a0f] hover:border-white/[0.14] hover:bg-[#0c0d14] transition-all duration-300 block group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-mono text-zinc-400">
                      {exp.period}
                    </span>
                    <span className="text-zinc-600">/</span>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-zinc-100 transition-colors">
                      {exp.company}
                    </h3>
                    <span className="text-xs text-zinc-400">
                      {exp.handle}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-zinc-300">
                    {exp.role}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl pt-1">
                    {exp.description}
                  </p>
                </div>

                <div className="p-3 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/10 group-hover:scale-105 transition-all shrink-0 self-start md:self-center">
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
