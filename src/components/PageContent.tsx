import Image from "next/image";
import Link from "next/link";
import UnitMarquee from "./UnitMarquee";
import { Impact1 } from "./ImpactVariants";
import { Research1 } from "./ResearchVariants";

export interface HeroVariant {
  headline: string;
  subtitle: string;
}

const defaultHero: HeroVariant = {
  headline: "UAV innovation\non front lines",
  subtitle: "StabX is the stabilization standard in Ukraine. NaviX navigation is in testing. Compatible with most drones. Defense to industry.",
};

export default function PageContent({ fontLabel, units, hero }: { fontLabel: string; units: string[]; hero?: HeroVariant }) {
  const h = hero ?? defaultHero;
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <a href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Academia" width={28} height={28} className="invert" />
            <span className="text-[17px] font-semibold tracking-[0.04em] uppercase" style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}>
              Academia
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            <a href="#platforms" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Products</a>
            <a href="#impact" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Impact</a>
            <a href="#research" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Research</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center h-9 px-4 text-[13px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200">
            Get in touch
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative flex flex-col" style={{ minHeight: "100svh" }}>
        <div className="relative flex-1 flex items-center overflow-hidden pt-[72px]">
          <div className="absolute right-[10%] top-0 bottom-0 w-[60%] hidden lg:block">
            <Image src="/drone.png" alt="" fill className="object-contain object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-white from-10% via-white/70 via-35% to-transparent to-70%" />
          </div>
          <div className="relative max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24">
            <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] max-w-4xl text-black">
              {h.headline.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-neutral-500 max-w-xl leading-relaxed font-light">
              {h.subtitle}
            </p>
            <div className="mt-10">
              <a href="#platforms" className="inline-flex items-center h-12 px-7 text-[15px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200">
                Our Products
              </a>
            </div>
          </div>
        </div>
        <UnitMarquee units={units} />
      </section>

      {/* ── Products Section ── */}
      <section id="platforms" className="bg-black text-white py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em]">Three products. One mission.</h2>
          </div>

          {/* Product cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* StabX */}
            <div
              className="bg-[#111] p-8 md:p-10 flex flex-col"
              style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}
            >
              <div className="flex items-center justify-center h-48 mb-8">
                <Image src="/stabx.png" alt="StabX" width={220} height={160} className="object-contain" />
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-2" style={{ fontFamily: "var(--font-unbounded)" }}>StabX</h3>
                <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">Optical Stabilization</p>
                <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">
                  GPS-free flight stabilization trusted by 700+ Armed Forces units. Keeps position, maintains heading, auto-returns home on signal loss.
                </p>
                <div className="border-t border-white/10 pt-4 space-y-2 text-[13px] text-neutral-500 mb-8">
                  <div className="flex justify-between"><span>Variants</span><span className="text-neutral-300">Day / Night / Day+Night</span></div>
                  <div className="flex justify-between"><span>Altitude</span><span className="text-neutral-300">50–1000m</span></div>
                  <div className="flex justify-between"><span>Weight</span><span className="text-neutral-300">&lt;100g</span></div>
                  <div className="flex justify-between"><span>Integration</span><span className="text-neutral-300">4 wires, Ardupilot</span></div>
                </div>
                <Link href="/stabx" className="inline-flex items-center text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200">
                  View modules &rarr;
                </Link>
              </div>
            </div>

            {/* NaviX */}
            <div
              className="bg-[#111] p-8 md:p-10 flex flex-col"
              style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}
            >
              <div className="flex items-center justify-center h-48 mb-8">
                <div className="text-center">
                  <p className="text-6xl font-bold tracking-tighter text-white/10" style={{ fontFamily: "var(--font-unbounded)" }}>NX</p>
                  <span className="inline-block mt-3 text-[11px] font-medium tracking-wide uppercase text-neutral-500 border border-neutral-700 px-2.5 py-1">In Testing</span>
                </div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-2" style={{ fontFamily: "var(--font-unbounded)" }}>NaviX</h3>
                <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">Visual Navigation</p>
                <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">
                  AI-powered GPS-free navigation. Matches camera imagery with satellite maps for autonomous position estimation in EW-contested environments.
                </p>
                <div className="border-t border-white/10 pt-4 space-y-2 text-[13px] text-neutral-500 mb-8">
                  <div className="flex justify-between"><span>Accuracy</span><span className="text-neutral-300">20–30m avg</span></div>
                  <div className="flex justify-between"><span>Platform</span><span className="text-neutral-300">Raspberry Pi 5</span></div>
                  <div className="flex justify-between"><span>FPS</span><span className="text-neutral-300">5+ frames/sec</span></div>
                  <div className="flex justify-between"><span>Based on</span><span className="text-neutral-300">NaviLoc paper</span></div>
                </div>
                <Link href="/navix" className="inline-flex items-center text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200">
                  Join waitlist &rarr;
                </Link>
              </div>
            </div>

            {/* SupportBot */}
            <div
              className="bg-[#111] p-8 md:p-10 flex flex-col"
              style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}
            >
              <div className="flex items-center justify-center h-48 mb-8">
                <div className="text-center">
                  <p className="text-6xl font-bold tracking-tighter text-white/10" style={{ fontFamily: "var(--font-unbounded)" }}>SB</p>
                  <span className="inline-block mt-3 text-[11px] font-medium tracking-wide uppercase text-emerald-400/80 border border-emerald-400/30 px-2.5 py-1">Live</span>
                </div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-2" style={{ fontFamily: "var(--font-unbounded)" }}>SupportBot</h3>
                <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">Automated Technical Support</p>
                <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">
                  AI-powered technical support for StabX operators and integrators. Instant answers, integration guides, and troubleshooting — 24/7, fully automated.
                </p>
                <div className="border-t border-white/10 pt-4 space-y-2 text-[13px] text-neutral-500 mb-8">
                  <div className="flex justify-between"><span>Response</span><span className="text-neutral-300">Instant</span></div>
                  <div className="flex justify-between"><span>Availability</span><span className="text-neutral-300">24/7</span></div>
                  <div className="flex justify-between"><span>Coverage</span><span className="text-neutral-300">StabX / NaviX</span></div>
                  <div className="flex justify-between"><span>Platform</span><span className="text-neutral-300">Web</span></div>
                </div>
                <a href="https://supportbot.info" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200">
                  Open SupportBot &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Section ── */}
      <Impact1 />

      {/* ── Research Section ── */}
      <Research1 />

      {/* ── Footer ── */}
      <footer id="contact" className="bg-white text-black border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Academia" width={24} height={24} className="invert" />
              <span className="text-[15px] font-semibold tracking-[0.04em] uppercase" style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}>
                Academia
              </span>
            </div>
            <div className="flex flex-wrap gap-8 text-[14px] text-neutral-400">
              <a href="mailto:business@theacademia.tech" className="hover:text-black transition-colors duration-200">business@theacademia.tech</a>
              <a href="mailto:sales@theacademia.tech" className="hover:text-black transition-colors duration-200">sales@theacademia.tech</a>
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-8">
            <p className="text-[13px] text-neutral-400">&copy; 2026 Academia Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
