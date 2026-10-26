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

  // Quadruple items to ensure seamless infinite loop on any screen resolution
  const tickerItems = [...items, ...items, ...items, ...items]

  return (
    <div className="py-3.5 bg-[#090a0f] border-y border-white/[0.07] overflow-hidden select-none relative group">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#060608] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#060608] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 group-hover:[animation-play-state:paused]">
        {tickerItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 text-[11px] font-mono tracking-widest text-zinc-400">
            <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">✦</span>
            <span className="hover:text-white transition-colors uppercase whitespace-nowrap font-medium">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
