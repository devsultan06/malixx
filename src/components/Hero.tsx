import React, { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ThreeCanvas } from "./ThreeCanvas";

export const Hero: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-zinc-800/20 via-zinc-700/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: Text & Pitch */}
          <div className="lg:col-span-7 space-y-6 z-10">
            {/* Clean status badge without dots */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
              AVAILABLE FOR WEB3 GROWTH &amp; PM
            </div>

            {/* Headline with responsive sizing */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.08] tracking-tight text-white">
              Building{" "}
              <span className="text-silver-gradient block sm:inline">
                communities.
              </span>{" "}
              Driving growth.
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
              I help Web3 teams turn ambitious ideas into thriving ecosystems
              through execution, organic community architecture, and data-backed
              growth loops.
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-white/5 active:scale-95"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/40 text-sm font-medium text-zinc-300 hover:text-white hover:border-zinc-600 hover:bg-zinc-800/40 transition-all duration-200 flex items-center gap-2 active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: 3D interactive concept + Identity Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* Embedded 3D Chrome Canvas in backdrop */}
            <div className="absolute -inset-10 sm:-inset-16 flex items-center justify-center pointer-events-none -z-10">
              <ThreeCanvas className="w-[360px] h-[360px] sm:w-[480px] h-[480px] opacity-75" />
            </div>

            {/* Identity Card with interactive 3D Tilt (No "Verified Operator", No dots) */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: "transform 0.15s ease-out",
              }}
              className="w-full max-w-[340px] sm:max-w-[360px] rounded-3xl overflow-hidden border border-white/[0.09] bg-[#0c0d13]/85 backdrop-blur-xl shadow-2xl shadow-black/80 group relative"
            >
              {/* Subtle glass reflection sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none" />

              {/* Avatar image */}
              <div className="aspect-[4/3.8] w-full overflow-hidden relative">
                <img
                  src="/logo.jpg"
                  alt="MALIXX"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d13] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Meta & Stats */}
              <div className="p-5 sm:p-6 space-y-4 relative">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-white tracking-wide">
                      MALIXX
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Web3 Growth Strategist · Lagos, NG
                    </p>
                  </div>
                  <a
                    href="https://x.com/devmalixx"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                    aria-label="X Profile"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Quantitative Stats Bar */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/[0.06] text-center">
                  <div className="p-2 rounded-xl bg-white/[0.02]">
                    <p className="text-base font-bold text-white tracking-tight">
                      3,100+
                    </p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">
                      Followers
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.02]">
                    <p className="text-base font-bold text-white tracking-tight">
                      18.9K
                    </p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">
                      Posts
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.02]">
                    <p className="text-base font-bold text-white tracking-tight">
                      5+
                    </p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">
                      Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
