import React, { useState } from 'react'
import { ArrowUpRight, Radio, Shield, Sparkles, Layers, Cpu, Award } from 'lucide-react'

interface Project {
  id: string
  name: string
  handle: string
  url: string
  category: 'leadership' | 'community' | 'product'
  role: string
  description: string
  impact: string
  tags: string[]
  icon: React.ElementType
}

export const ProjectsGrid: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'leadership' | 'community' | 'product'>('all')

  const projects: Project[] = [
    {
      id: 'trashbid',
      name: 'TrashBid',
      handle: '@usetrashbid',
      url: 'https://x.com/usetrashbid',
      category: 'leadership',
      role: 'Lead · Operations & Growth',
      description: 'Leading strategic direction, operational workflows, and go-to-market community positioning for TrashBid.',
      impact: 'Head of project milestones & ecosystem launch coordination.',
      tags: ['Project Lead', 'GTM Strategy', 'Operations', 'Ecosystem Growth'],
      icon: Layers,
    },
    {
      id: 'fininvai',
      name: 'FinInvAI',
      handle: '@FinInvai',
      url: 'https://x.com/FinInvai',
      category: 'leadership',
      role: 'Team · Product & Community Management',
      description: 'AI-powered crypto chart pattern detection and real-time alert system. Hosted dedicated live community sessions including "Chill with @FinInvai" (51 tuned in).',
      impact: 'Conducted live community AMAs & educational campaigns on trading pattern alerts.',
      tags: ['AI Crypto', 'X Spaces Host', 'Product Strategy', 'Community Growth'],
      icon: Cpu,
    },
    {
      id: 'alignerz',
      name: 'AlignerzLabs',
      handle: '@AlignerZ_Labs',
      url: 'https://x.com/AlignerZ_Labs',
      category: 'community',
      role: 'Community Builder & Content Creator',
      description: 'Spearheaded community member onboarding, educational thread authoring, and engagement loops.',
      impact: 'Drove daily member retention and amplified social reach across crypto Twitter.',
      tags: ['Community Architecture', 'Content Creation', 'Member Onboarding'],
      icon: Sparkles,
    },
    {
      id: 'aryze',
      name: 'Aryze',
      handle: '@AryzeOfficial',
      url: 'https://x.com/AryzeOfficial',
      category: 'community',
      role: 'Ambassador & Community Builder',
      description: 'Represented Aryze in digital asset, stablecoin, and financial inclusion campaigns across target global demographics.',
      impact: 'Organized community activations and promoted protocol awareness.',
      tags: ['Ambassador', 'Stablecoins', 'Advocacy', 'Ecosystem Raids'],
      icon: Award,
    },
    {
      id: 'shift',
      name: 'Shift Foundation',
      handle: '@shiftfdn',
      url: 'https://x.com/shiftfdn',
      category: 'community',
      role: 'Community Moderator & Content Creator',
      description: 'Maintained 24/7 channel sentiment, anti-scam safeguards, and created engaging visual and written content.',
      impact: 'Maintained zero-compromise security posture and fostered welcoming atmosphere.',
      tags: ['Moderation', 'Sentiment Analysis', 'Security Governance', 'Content'],
      icon: Shield,
    },
    {
      id: 'blonex',
      name: 'Blonex',
      handle: '@Blonexcom',
      url: 'https://x.com/Blonexcom',
      category: 'product',
      role: 'Ambassador & Product Tester',
      description: 'Beta-tested platform features, identified critical UI/UX bottlenecks, and synthesized structured bug reports for core engineers.',
      impact: 'Provided pre-release QA feedback directly informing feature polish.',
      tags: ['Alpha/Beta QA', 'UX Feedback', 'Bug Reporting', 'Ambassador'],
      icon: Radio,
    },
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <section id="work" className="py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              <span>03 // PORTFOLIO</span>
              <span>·</span>
              <span>TRACK RECORD</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              Selected Work &amp; Roles
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-zinc-950 border border-zinc-800/80">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'leadership', label: 'Leadership & PM' },
              { key: 'community', label: 'Community' },
              { key: 'product', label: 'Product & QA' },
            ].map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  filter === f.key
                    ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="editorial-card rounded-2xl p-6 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header with Project Name & Outbound Link */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-zinc-700 transition-colors">
                      <project.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-zinc-200 transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-xs font-mono text-zinc-500">{project.handle}</span>
                    </div>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 group-hover:text-white group-hover:bg-zinc-800 transition-colors"
                    title={`View ${project.name} on X`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Role Pill */}
                <div className="mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                    {project.role}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Impact Highlight */}
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs text-zinc-300 mb-6">
                  <span className="text-zinc-500 font-mono text-[10px] block uppercase mb-0.5">
                    Impact / Outcome
                  </span>
                  {project.impact}
                </div>
              </div>

              {/* Tags and Link footer */}
              <div className="pt-4 border-t border-zinc-900 flex flex-wrap gap-1.5 items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-zinc-900/80 text-[10px] font-mono text-zinc-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] font-mono text-zinc-600">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
