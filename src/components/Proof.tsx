export const Proof = () => {
  const stats = [
    { value: '3,100+', label: 'X Followers' },
    { value: '18.9K', label: 'Posts & Engagement' },
    { value: '+650%', label: 'ZeldHash X Growth' },
    { value: '190+', label: 'Discord from Zero' },
    { value: '51+', label: 'Live Space Listeners' },
    { value: '5+', label: 'Ecosystems Served' },
  ]

  return (
    <section id="proof" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Proof of Work
          </h2>
          <p className="text-zinc-400 mt-2">
            Numbers that speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-xl border border-zinc-800/40 bg-[#0a0b0f] text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-zinc-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
