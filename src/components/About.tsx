import { ArrowUpRight } from 'lucide-react'

const timeline = [
  {
    period: '2024 — Present',
    roles: [
      { title: 'Lead · Operations & Growth', company: 'TrashBid', url: 'https://x.com/usetrashbid' },
      { title: 'Team · Product & Community', company: 'FinInvAI', url: 'https://x.com/FinInvai' },
    ],
  },
  {
    period: '2023 — 2024',
    roles: [
      { title: 'Growth Lead & Community Manager', company: 'ZeldHash', url: 'https://x.com/ZeldHash' },
      { title: 'Community Builder & Content Creator', company: 'AlignerzLabs', url: 'https://x.com/AlignerZ_Labs' },
    ],
  },
  {
    period: '2022 — 2023',
    roles: [
      { title: 'Ambassador & Community Builder', company: 'Aryze', url: 'https://x.com/AryzeOfficial' },
      { title: 'Community Moderator', company: 'Shift', url: 'https://x.com/shiftfdn' },
      { title: 'Ambassador & Product Tester', company: 'Blonex', url: 'https://x.com/Blonexcom' },
    ],
  },
]

export const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: About text */}
          <div className="space-y-5">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              About
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              I'm MALIXX — a Web3 project manager, growth strategist, and community
              builder based in Lagos, Nigeria. I work with early-stage crypto teams
              to launch, scale, and sustain their ecosystems.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My work sits at the intersection of structured project execution and
              organic community growth. I've taken projects from cold starts to
              thousands of engaged followers, built Discord servers from zero, hosted
              live X Spaces, written protocol breakdowns, and tested products before
              they shipped.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              I don't do vanity metrics. Every number on this site is real, earned
              through daily work and genuine engagement.
            </p>
          </div>

          {/* Right: Experience timeline */}
          <div className="space-y-8">
            <h3 className="text-sm text-zinc-500 uppercase tracking-wider">
              Experience
            </h3>
            {timeline.map((group) => (
              <div key={group.period}>
                <p className="text-xs text-zinc-500 mb-3">{group.period}</p>
                <div className="space-y-2">
                  {group.roles.map((role) => (
                    <a
                      key={role.company}
                      href={role.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-zinc-800/40 bg-[#0a0b0f] hover:border-zinc-700/60 transition-colors group"
                    >
                      <div>
                        <p className="text-sm text-white font-medium">{role.title}</p>
                        <p className="text-xs text-zinc-500">{role.company}</p>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
