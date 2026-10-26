const testimonials = [
  {
    quote: "MALIXX took our Discord from empty to 190+ verified members in under 30 days. His sense for community sentiment is real.",
    author: "Ecosystem Partner",
    context: "Bitcoin Infrastructure Project",
  },
  {
    quote: "He doesn't just moderate — he actually takes ownership of community morale. Our members felt seen and protected every day.",
    author: "DeFi Project Founder",
    context: "Decentralized Finance Suite",
  },
  {
    quote: "His X Spaces are something else. He keeps 50+ listeners locked in, translates complex ideas into plain English, and makes it engaging.",
    author: "Community Operator",
    context: "Growth Collaboration",
  },
]

export const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            What People Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-zinc-800/40 bg-[#0a0b0f] flex flex-col justify-between"
            >
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm text-white font-medium">{t.author}</p>
                <p className="text-xs text-zinc-500">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
