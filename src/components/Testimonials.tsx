import React from 'react'

const testimonials = [
  {
    quote: "MALIXX took our Discord from empty to 190+ verified members in under 30 days. His sense for community sentiment, member retention, and organic momentum is real.",
    author: "Ecosystem Partner",
    context: "Bitcoin Infrastructure Protocol",
  },
  {
    quote: "He doesn't just moderate — he actually takes proactive ownership of community morale. Our members felt seen, informed, and protected from day one.",
    author: "DeFi Project Founder",
    context: "Decentralized Finance Suite",
  },
  {
    quote: "His X Spaces are exceptional. He keeps 50+ listeners locked in, translates complex protocol mechanics into plain English, and keeps the energy high.",
    author: "Community Operator",
    context: "Growth Collaboration",
  },
]

export const Testimonials: React.FC = () => {
  return (
    <section className="py-28 border-t border-white/[0.05] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Harmonized Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Endorsements
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              What People Say
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Direct feedback from founders, operators, and ecosystem leaders I've partnered with.
          </p>
        </div>

        {/* 3-Column Harmonized Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-7 sm:p-8 rounded-3xl border border-white/[0.06] bg-[#090a0f] hover:border-white/[0.14] hover:bg-[#0c0d14] transition-all duration-300 flex flex-col justify-between"
            >
              <p className="text-sm text-zinc-300 leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="font-display font-bold text-sm text-white">
                  {t.author}
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {t.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
