const services = [
  {
    title: 'Project Coordination',
    desc: 'Sprint planning, milestone tracking, cross-team alignment, and on-time roadmap delivery.',
  },
  {
    title: 'Growth Strategy',
    desc: 'Go-to-market playbooks, organic distribution, narrative engineering, and retention loops.',
  },
  {
    title: 'Community Building',
    desc: 'Discord & Telegram setup, role architecture, bot security, moderation, and member onboarding.',
  },
  {
    title: 'X Spaces & Audio',
    desc: 'Hosting live discussions, speaker curation, audience management, and post-space recaps.',
  },
  {
    title: 'Partnerships',
    desc: 'Cross-community collaborations, allowlist campaigns, KOL coordination, and joint events.',
  },
  {
    title: 'Product Testing',
    desc: 'Beta testing, detailed bug reports, UX audits, and user feedback synthesis for dev teams.',
  },
]

export const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            What I Do
          </h2>
          <p className="text-zinc-400 mt-2 max-w-lg">
            I don't just advise — I get in the trenches and execute.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-5 rounded-xl border border-zinc-800/40 bg-[#0a0b0f] hover:border-zinc-700/60 transition-colors"
            >
              <h3 className="font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
