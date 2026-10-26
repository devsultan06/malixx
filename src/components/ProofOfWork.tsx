import React from 'react'

const stats = [
  {
    value: '+650%',
    title: 'ZeldHash Growth',
    desc: 'Scaled X presence from 200 to 1,500+ followers in under 30 days with $0 ad spend.',
  },
  {
    value: '190+',
    title: 'Discord from Zero',
    desc: 'Built an active, verified Discord community from scratch with sustainable daily retention.',
  },
  {
    value: '18.9K+',
    title: 'Engagement Touchpoints',
    desc: 'Consistent daily presence across Crypto X connecting directly with founders and operators.',
  },
  {
    value: '50+',
    title: 'Live Space Listeners',
    desc: 'Hosted live audio discussions covering AI analytics, trading alerts, and network upgrades.',
  },
  {
    value: '5+',
    title: 'Protocols Supported',
    desc: 'Hands-on project coordination and growth across Bitcoin infra, DeFi, and AI protocols.',
  },
  {
    value: '100%',
    title: 'Organic Execution',
    desc: 'Zero vanity bots or fake engagement. Every metric is backed by verifiable daily work.',
  },
]

export const ProofOfWork: React.FC = () => {
  return (
    <section id="proof" className="py-28 border-t border-white/[0.05] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Clean Header without dots */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Track Record
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Proof of Work
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Verifiable results earned through active execution, daily community leadership, and organic growth.
          </p>
        </div>

        {/* Clean, Spacious 6-Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((s) => (
            <div
              key={s.title}
              className="p-7 sm:p-8 rounded-3xl border border-white/[0.06] bg-[#090a0f] hover:border-white/[0.14] hover:bg-[#0c0d14] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3 group-hover:text-silver-gradient transition-all">
                  {s.value}
                </p>
                <h3 className="font-display font-bold text-base text-zinc-200 mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
