import React from 'react'
import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react'

interface ExperienceItem {
  period: string
  role: string
  company: string
  handle: string
  url: string
  location: string
  description: string
  highlights: string[]
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      period: '2024 — PRESENT',
      role: 'Lead · Operations & Ecosystem Growth',
      company: 'TrashBid',
      handle: '@usetrashbid',
      url: 'https://x.com/usetrashbid',
      location: 'Remote / Global',
      description: 'Heading operational sprints, milestone deliveries, and growth positioning across the project ecosystem.',
      highlights: [
        'Strategic project roadmap execution and cross-team alignment',
        'Coordinated community go-to-market rollout',
      ],
    },
    {
      period: '2024 — PRESENT',
      role: 'Team · Product Management & Community',
      company: 'FinInvAI',
      handle: '@FinInvai',
      url: 'https://x.com/FinInvai',
      location: 'Remote / Global',
      description: 'Managing product narrative, community onboarding, and hosting official X Spaces discussing algorithmic pattern recognition.',
      highlights: [
        'Hosted live audio stages with 50+ concurrent listeners',
        'Bridged early adopter feedback directly into feature iterations',
      ],
    },
    {
      period: '2023 — 2024',
      role: 'Growth Lead & Head of Community',
      company: 'ZeldHash',
      handle: '@ZeldHash',
      url: 'https://x.com/ZeldHash',
      location: 'Remote',
      description: 'Led rapid-scaling campaign growing audience by 650% and architected official Discord server from scratch.',
      highlights: [
        'Scaled X followers from 200+ to 1,500+ in under 30 days',
        'Onboarded 190+ verified Discord members from cold start',
      ],
    },
    {
      period: '2023 — 2024',
      role: 'Community Builder & Content Creator',
      company: 'AlignerzLabs',
      handle: '@AlignerZ_Labs',
      url: 'https://x.com/AlignerZ_Labs',
      location: 'Remote',
      description: 'Authored technical educational threads and built active community engagement channels.',
      highlights: [
        'Daily community activation and retention pipelines',
        'High-converting educational threads on crypto Twitter',
      ],
    },
    {
      period: '2023 — 2023',
      role: 'Ambassador & Community Advocate',
      company: 'Aryze',
      handle: '@AryzeOfficial',
      url: 'https://x.com/AryzeOfficial',
      location: 'Remote',
      description: 'Championed digital currency and stablecoin adoption initiatives through grassroots community campaigns.',
      highlights: [
        'Coordinated international ambassador initiatives',
        'Community educational campaigns on decentralized finance',
      ],
    },
    {
      period: '2022 — 2023',
      role: 'Community Moderator & Content Creator',
      company: 'Shift Foundation',
      handle: '@shiftfdn',
      url: 'https://x.com/shiftfdn',
      location: 'Remote',
      description: 'Maintained 24/7 channel security, mitigated scam attempts, and fostered positive member engagement.',
      highlights: [
        'Enforced anti-phishing safeguards across all official channels',
        'Authored weekly ecosystem community recaps',
      ],
    },
    {
      period: '2022 — 2023',
      role: 'Ambassador & Beta Product Tester',
      company: 'Blonex',
      handle: '@Blonexcom',
      url: 'https://x.com/Blonexcom',
      location: 'Remote',
      description: 'Tested platform features, logged comprehensive bug tickets, and advocated for usability improvements.',
      highlights: [
        'Tested pre-release decentralized features',
        'Detailed reproducible UI/UX bug reporting',
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 border-b border-white/[0.06] bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              <span>06 // TRAJECTORY</span>
              <span>·</span>
              <span>CHRONOLOGY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              Professional Experience
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-mono">
            A continuous progression from Community Moderator to Growth Lead and Operations Project Manager.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="editorial-card rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-start justify-between gap-6 hover:border-zinc-700 transition-all"
            >
              <div className="lg:w-1/4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                  <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-display font-bold text-xl text-white">
                    {exp.role}
                  </h3>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-1.5 pt-1">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                      <span className="text-zinc-600">↳</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/4 flex lg:flex-col lg:items-end justify-between items-center pt-4 lg:pt-0 border-t lg:border-t-0 border-zinc-900">
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <Briefcase className="w-3 h-3 text-zinc-400" />
                  <span>{exp.company}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>

                <span className="text-xs font-mono text-zinc-600 hidden lg:block">
                  {exp.handle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
