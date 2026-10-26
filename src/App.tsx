import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MarqueeStrip } from './components/MarqueeStrip'
import { Work } from './components/Work'
import { Services } from './components/Services'
import { ProofOfWork } from './components/ProofOfWork'
import { Experience } from './components/Experience'
import { Testimonials } from './components/Testimonials'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#060608] text-zinc-100 flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Floating Navigation */}
      <Navbar />

      {/* Main Flow */}
      <main className="flex-1">
        {/* Hero Section with Interactive 3D Liquid Chrome & Tilt Card */}
        <Hero />

        {/* Dynamic Infinite Marquee */}
        <MarqueeStrip />

        {/* Unified Selected Work (ZeldHash Flagship + Ecosystem Projects) */}
        <Work />

        {/* Core Services & Capabilities */}
        <Services />

        {/* Verifiable Proof of Work (Clean 6-Metric Highlights) */}
        <ProofOfWork />

        {/* Professional Experience Trajectory */}
        <Experience />

        {/* Client & Ecosystem Endorsements */}
        <Testimonials />

        {/* Centered High-Impact Contact Section */}
        <ContactCTA />
      </main>

      {/* Spacious Editorial Footer */}
      <Footer />
    </div>
  )
}
