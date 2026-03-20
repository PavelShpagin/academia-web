import Image from "next/image";
import UnitMarquee from "./UnitMarquee";

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
            <a href="#platforms" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Platforms</a>
            <a href="#impact" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Impact</a>
            <a href="#careers" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Careers</a>
            <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-400 border border-neutral-200 px-2 py-0.5">{fontLabel}</span>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center h-9 px-4 text-[13px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200">
            Get in touch
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative flex flex-col" style={{ minHeight: "100svh" }}>
        <div className="relative flex-1 flex items-center overflow-hidden pt-[72px]">
          {/* Drone in background, right-aligned */}
          <div className="absolute right-[10%] top-0 bottom-0 w-[60%] hidden lg:block">
            <Image
              src="/drone.png"
              alt=""
              fill
              className="object-contain object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
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
        {/* Units marquee */}
        <UnitMarquee units={units} />
      </section>

      {/* ── Products Section ── */}
      <section id="platforms" className="bg-black text-white py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-24">
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-5">What We Build</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em]">Three products. One mission.</h2>
          </div>
          {[
            { num: "01", name: "Overwatch", desc: "Real-time battlespace awareness platform processing sensor data from 200+ source types into a unified tactical picture. Deployed across 7 combatant commands." },
            { num: "02", name: "Forge", desc: "Continuous integration and deployment platform purpose-built for classified environments. Ship software to the edge in hours, not months." },
            { num: "03", name: "Prism", desc: "Multi-domain intelligence analysis suite combining open-source, signals, and geospatial intelligence into automated analytical workflows." },
          ].map((product, i) => (
            <div key={product.num} className={i < 2 ? "border-b border-white/10 pb-20 mb-20" : "pb-4"}>
              <div className="relative">
                <span className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold leading-none text-white/[0.04] select-none">{product.num}</span>
                <div className="md:absolute md:bottom-4 md:left-4 lg:left-8 mt-[-2rem] md:mt-0">
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-5">{product.name}</h3>
                  <p className="text-neutral-400 leading-relaxed max-w-2xl text-[15px]">{product.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Impact Section ── */}
      <section id="impact" className="bg-white py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="lg:col-span-1">
              <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-400 lg:sticky lg:top-28">Impact</p>
            </div>
            <div className="lg:col-span-2">
              {[
                { value: "73%", label: "Reduction in sensor-to-shooter timeline" },
                { value: "14x", label: "Faster software deployment to classified networks" },
                { value: "200+", label: "Intelligence source types integrated in real-time" },
                { value: "$340M", label: "Annual savings in operational efficiency" },
              ].map((stat) => (
                <div key={stat.value} className="border-t border-neutral-200 pt-8 pb-12">
                  <p className="text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-black mb-2">{stat.value}</p>
                  <p className="text-[17px] text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Careers Section ── */}
      <section id="careers" className="bg-black text-white py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-white mb-6 leading-tight">
                We hire missionaries,<br />not mercenaries.
              </h2>
              <p className="text-neutral-400 leading-relaxed max-w-md text-[15px]">
                Our engineers hold clearances, embed with units, and build software that matters.
              </p>
            </div>
            <div>
              {[
                { role: "Engineering", count: 47 },
                { role: "Product", count: 12 },
                { role: "Design", count: 8 },
                { role: "Intelligence", count: 23 },
                { role: "Operations", count: 15 },
              ].map((item) => (
                <a key={item.role} href="#" className="flex items-center justify-between py-5 border-b border-white/10 text-neutral-400 hover:text-white transition-colors duration-200 group">
                  <span className="text-[15px]">{item.role}</span>
                  <span className="text-[13px] font-medium text-neutral-600 group-hover:text-neutral-300 transition-colors duration-200">{item.count}</span>
                </a>
              ))}
              <div className="mt-10">
                <a href="#" className="inline-flex items-center text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200">
                  View all positions &rarr;
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
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Academia" width={24} height={24} className="invert" />
              <span className="text-[15px] font-semibold tracking-[0.04em] uppercase" style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}>
                Academia
              </span>
            </div>
            <div className="flex flex-wrap gap-8 text-[14px] text-neutral-400">
              {["Privacy", "Terms", "Security", "Compliance", "Careers"].map((link) => (
                <a key={link} href="#" className="hover:text-black transition-colors duration-200">{link}</a>
              ))}
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-8">
            <p className="text-[13px] text-neutral-400">&copy; 2026 Academia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
