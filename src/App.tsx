import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MarqueeStrip } from './components/MarqueeStrip'
import { ZeldHashCaseStudy } from './components/ZeldHashCaseStudy'
import { ProjectsGrid } from './components/ProjectsGrid'
import { Services } from './components/Services'
import { ProofOfWork } from './components/ProofOfWork'
import { Experience } from './components/Experience'
import { Testimonials } from './components/Testimonials'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#060608] text-zinc-100 flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Dynamic Kinetic Marquee */}
        <MarqueeStrip />

        {/* Flagship Case Study: ZeldHash Deep Dive */}
        <ZeldHashCaseStudy />

        {/* Selected Projects Grid */}
        <ProjectsGrid />

        {/* Services & Growth Playbook */}
        <Services />

        {/* Verifiable Proof of Work Bento */}
        <ProofOfWork />

        {/* Chronological Career Experience */}
        <Experience />

        {/* Client & Founder Endorsements */}
        <Testimonials />

        {/* High-Impact Contact CTA Banner */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
