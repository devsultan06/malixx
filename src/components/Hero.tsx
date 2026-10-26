import { useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 12,
      y: ((e.clientY - r.top) / r.height - 0.5) * -12,
    })
  }

  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-zinc-400 text-sm">
              Project Manager · Growth Strategist · Community Manager
            </p>

            <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight text-white">
              Building{' '}
              <span className="text-silver-gradient">communities.</span>
              <br />
              Driving growth.
            </h1>

            <p className="text-zinc-400 text-base leading-relaxed max-w-lg">
              I help Web3 teams turn ambitious ideas into thriving ecosystems
              through strategy, execution, and community.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#work"
                className="px-5 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                Explore Work <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-full border border-zinc-800 text-sm text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors flex items-center gap-2"
              >
                Get in Touch <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Identity card */}
          <div className="flex justify-center lg:justify-end">
            <div
              onMouseMove={handleMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              style={{
                transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: 'transform 0.2s ease-out',
              }}
              className="w-full max-w-sm rounded-2xl overflow-hidden border border-zinc-800/60 bg-[#0c0d12]"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src="/logo.jpg"
                  alt="MALIXX"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-display font-bold text-lg text-white">MALIXX</h3>
                  <p className="text-sm text-zinc-400">Web3 Growth · Lagos, NG</p>
                </div>
                <div className="flex gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-white">3,100+</p>
                    <p className="text-[11px] text-zinc-500">Followers</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">18.9K</p>
                    <p className="text-[11px] text-zinc-500">Posts</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">5+</p>
                    <p className="text-[11px] text-zinc-500">Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
