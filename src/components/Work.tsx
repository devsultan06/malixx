import { ArrowUpRight, TrendingUp } from 'lucide-react'

const projects = [
  {
    name: 'ZeldHash',
    role: 'Growth Lead & Community Manager',
    url: 'https://x.com/ZeldHash',
    desc: 'Scaled X from 200+ to 1,500+ followers and built Discord from scratch to 190+ members — all within 30 days, $0 ad spend.',
    featured: true,
    metrics: [
      { label: 'X Growth', value: '+650%' },
      { label: 'Discord', value: '190+ members' },
      { label: 'Timeframe', value: '<30 days' },
    ],
  },
  {
    name: 'TrashBid',
    role: 'Lead · Operations & Growth',
    url: 'https://x.com/usetrashbid',
    desc: 'Leading strategic direction, operational workflows, and go-to-market community positioning.',
  },
  {
    name: 'FinInvAI',
    role: 'Team · Product & Community',
    url: 'https://x.com/FinInvai',
    desc: 'AI-powered crypto chart analysis. Hosted X Spaces with 50+ live listeners, bridged early user feedback into product iterations.',
  },
  {
    name: 'AlignerzLabs',
    role: 'Community Builder & Content Creator',
    url: 'https://x.com/AlignerZ_Labs',
    desc: 'Spearheaded community content, engagement campaigns, and member onboarding pipelines.',
  },
  {
    name: 'Aryze',
    role: 'Ambassador & Community Builder',
    url: 'https://x.com/AryzeOfficial',
    desc: 'Stablecoin awareness campaigns, community moderation, and ambassador activations.',
  },
  {
    name: 'Shift',
    role: 'Community Moderator & Content Creator',
    url: 'https://x.com/shiftfdn',
    desc: '24/7 chat moderation, anti-scam safeguards, event organization, and educational thread writing.',
  },
  {
    name: 'Blonex',
    role: 'Ambassador & Product Tester',
    url: 'https://x.com/Blonexcom',
    desc: 'Beta product testing, bug reporting, and UX feedback synthesis for the engineering team.',
  },
]

export const Work = () => {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Selected Work
          </h2>
          <p className="text-zinc-400 mt-2 max-w-lg">
            Web3 ecosystems I've helped build, grow, and manage.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`block rounded-2xl border transition-all group ${
                p.featured
                  ? 'border-zinc-700/60 bg-[#0c0d12] p-6 sm:p-8 hover:border-zinc-600'
                  : 'border-zinc-800/40 bg-[#0a0b0f] p-5 sm:p-6 hover:border-zinc-700/60 hover:bg-[#0c0d12]'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className={`font-display font-bold text-white ${p.featured ? 'text-xl' : 'text-lg'}`}>
                      {p.name}
                    </h3>
                    <span className="text-xs text-zinc-500">{p.role}</span>
                    {p.featured && (
                      <span className="text-xs text-emerald-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                    {p.desc}
                  </p>

                  {p.metrics && (
                    <div className="flex flex-wrap gap-4 pt-3">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="text-lg font-bold text-white">{m.value}</p>
                          <p className="text-[11px] text-zinc-500">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-2 rounded-lg border border-zinc-800 text-zinc-500 group-hover:text-white group-hover:border-zinc-600 transition-colors shrink-0">
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
