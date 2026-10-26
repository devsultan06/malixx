import React from 'react'

export const MarqueeStrip: React.FC = () => {
  const items = [
    'PROJECT MANAGEMENT',
    'GROWTH STRATEGY',
    'COMMUNITY ARCHITECTURE',
    'X SPACES HOSTING',
    'SPRINT COORDINATION',
    'ALPHA PRODUCT TESTING',
    'DISCORD & TELEGRAM SCALING',
    'PARTNERSHIP ACTIVATIONS',
    'NARRATIVE ENGINEERING',
    'RETENTION LOOPS',
  ]

  return (
    <div className="py-4 bg-[#0a0b10] border-y border-white/[0.06] overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs font-mono tracking-widest text-zinc-400">
            <span className="text-zinc-600">✦</span>
            <span className="hover:text-white transition-colors uppercase whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
