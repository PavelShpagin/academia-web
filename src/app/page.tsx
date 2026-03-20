export default function SentinelCorp() {
  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <span className="text-2xl md:text-3xl font-bold tracking-tight">
            SENTINEL
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide text-neutral-600">
            <a href="#about" className="hover:text-black transition-colors">
              About
            </a>
            <a href="#defense" className="hover:text-black transition-colors">
              Defense
            </a>
            <a
              href="#intelligence"
              className="hover:text-black transition-colors"
            >
              Intelligence
            </a>
            <a href="#contact" className="hover:text-black transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col pt-16">
        <div className="flex-[7] bg-white flex items-end px-6 md:px-12 lg:px-24 pb-12 md:pb-20">
          <div className="max-w-[1400px] mx-auto w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-none max-w-4xl">
              THE FUTURE
              <br />
              OF DEFENSE
              <br />
              IS SOFTWARE
            </h1>
          </div>
        </div>
        <div className="flex-[3] bg-black text-white flex items-center">
          <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="py-4 md:py-0 md:pr-8">
                <p className="font-mono text-sm text-neutral-400">
                  Founded 2014, San Francisco
                </p>
              </div>
              <div className="py-4 md:py-0 md:px-8">
                <p className="font-mono text-sm text-neutral-400">
                  Series F, $2.1B Valuation
                </p>
              </div>
              <div className="py-4 md:py-0 md:pl-8">
                <p className="font-mono text-sm text-neutral-400">
                  1,200+ Engineers Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Manifesto Section ── */}
      <section id="about" className="bg-white py-24 md:py-36 lg:py-44">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <blockquote className="border-l-4 border-black pl-6 md:pl-8">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-black">
                  &ldquo;We believe the most consequential technology of our
                  generation should serve democracies, not undermine
                  them.&rdquo;
                </p>
              </blockquote>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <p className="text-base leading-relaxed text-neutral-700">
                The defense industrial base was built for a different era.
                Procurement cycles measured in decades. Hardware-first thinking.
                Monolithic systems designed for threats that no longer exist.
              </p>
              <p className="text-base leading-relaxed text-neutral-700">
                Sentinel was founded on a radical premise: that the decisive
                advantage in modern conflict comes from software, not steel.
                From algorithms, not armor. From speed of iteration, not weight
                of materiel.
              </p>
              <p className="text-base leading-relaxed text-neutral-700">
                We build software that our warfighters actually want to use.
                Products born from embedded engineering teams, not boardroom
                requirements documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products Section ── */}
      <section id="defense" className="bg-black text-white py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-20 md:mb-28">
            <p className="font-mono text-xs tracking-widest text-neutral-400 mb-4 uppercase">
              What We Build
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Three products. One mission.
            </h2>
          </div>

          {/* Product 01 */}
          <div className="border-b border-white/10 pb-16 md:pb-20 mb-16 md:mb-20">
            <div className="relative">
              <span className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold leading-none text-white/[0.07] select-none">
                01
              </span>
              <div className="md:absolute md:bottom-4 md:left-4 lg:left-8 mt-[-2rem] md:mt-0">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Overwatch
                </h3>
                <p className="text-neutral-300 leading-relaxed max-w-2xl">
                  Real-time battlespace awareness platform processing sensor
                  data from 200+ source types into a unified tactical picture.
                  Deployed across 7 combatant commands.
                </p>
              </div>
            </div>
          </div>

          {/* Product 02 */}
          <div className="border-b border-white/10 pb-16 md:pb-20 mb-16 md:mb-20">
            <div className="relative">
              <span className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold leading-none text-white/[0.07] select-none">
                02
              </span>
              <div className="md:absolute md:bottom-4 md:left-4 lg:left-8 mt-[-2rem] md:mt-0">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Forge</h3>
                <p className="text-neutral-300 leading-relaxed max-w-2xl">
                  Continuous integration and deployment platform purpose-built
                  for classified environments. Ship software to the edge in
                  hours, not months.
                </p>
              </div>
            </div>
          </div>

          {/* Product 03 */}
          <div className="pb-4">
            <div className="relative">
              <span className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold leading-none text-white/[0.07] select-none">
                03
              </span>
              <div className="md:absolute md:bottom-4 md:left-4 lg:left-8 mt-[-2rem] md:mt-0">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Prism</h3>
                <p className="text-neutral-300 leading-relaxed max-w-2xl">
                  Multi-domain intelligence analysis suite combining
                  open-source, signals, and geospatial intelligence into
                  automated analytical workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Section ── */}
      <section id="intelligence" className="bg-white py-24 md:py-36 lg:py-44">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <p className="font-mono text-xs tracking-widest text-neutral-400 uppercase lg:sticky lg:top-24">
                Impact
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="border-t border-neutral-200 pt-8 pb-10">
                <p className="text-5xl md:text-6xl font-bold text-black mb-2">
                  73%
                </p>
                <p className="text-lg text-neutral-600">
                  Reduction in sensor-to-shooter timeline
                </p>
              </div>
              <div className="border-t border-neutral-200 pt-8 pb-10">
                <p className="text-5xl md:text-6xl font-bold text-black mb-2">
                  14x
                </p>
                <p className="text-lg text-neutral-600">
                  Faster software deployment to classified networks
                </p>
              </div>
              <div className="border-t border-neutral-200 pt-8 pb-10">
                <p className="text-5xl md:text-6xl font-bold text-black mb-2">
                  200+
                </p>
                <p className="text-lg text-neutral-600">
                  Intelligence source types integrated in real-time
                </p>
              </div>
              <div className="border-t border-neutral-200 pt-8 pb-10">
                <p className="text-5xl md:text-6xl font-bold text-black mb-2">
                  $340M
                </p>
                <p className="text-lg text-neutral-600">
                  Annual savings in operational efficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Careers Section ── */}
      <section className="bg-black text-white py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                We hire missionaries,
                <br />
                not mercenaries.
              </h2>
              <p className="text-neutral-400 leading-relaxed max-w-md">
                Our engineers hold clearances, embed with units, and build
                software that matters.
              </p>
            </div>
            <div>
              <div className="space-y-0">
                <a
                  href="#"
                  className="flex items-center justify-between py-4 border-b border-white/10 text-neutral-400 hover:text-white transition-colors group"
                >
                  <span className="text-base">Engineering</span>
                  <span className="font-mono text-sm">47</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between py-4 border-b border-white/10 text-neutral-400 hover:text-white transition-colors group"
                >
                  <span className="text-base">Product</span>
                  <span className="font-mono text-sm">12</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between py-4 border-b border-white/10 text-neutral-400 hover:text-white transition-colors group"
                >
                  <span className="text-base">Design</span>
                  <span className="font-mono text-sm">8</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between py-4 border-b border-white/10 text-neutral-400 hover:text-white transition-colors group"
                >
                  <span className="text-base">Intelligence</span>
                  <span className="font-mono text-sm">23</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between py-4 border-b border-white/10 text-neutral-400 hover:text-white transition-colors group"
                >
                  <span className="text-base">Operations</span>
                  <span className="font-mono text-sm">15</span>
                </a>
              </div>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block text-sm font-mono tracking-wide text-white border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors"
                >
                  View All Positions &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contact" className="bg-white text-black border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <span className="text-3xl md:text-4xl font-bold tracking-tight">
              SENTINEL
            </span>
            <div className="flex flex-wrap gap-6 text-sm text-neutral-500">
              <a href="#" className="hover:text-black transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Security
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Compliance
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Careers
              </a>
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-8">
            <p className="text-xs text-neutral-400 font-mono">
              &copy; 2026 Sentinel Corp. All rights reserved. CAGE Code:
              8K9X2. DUNS: 078451293.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
