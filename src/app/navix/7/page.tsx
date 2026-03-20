import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "NaviX — Visual Navigation Without GPS | Academia Tech",
  description: "GPS-free visual navigation for UAVs. 20-30m accuracy on Raspberry Pi 5.",
};

export default function NaviX7() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Academia" width={28} height={28} className="invert" />
            <span className="text-[17px] font-semibold tracking-[0.04em] uppercase text-black" style={{ fontFamily: "var(--font-unbounded)" }}>Academia</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href="/#platforms" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Products</Link>
            <Link href="/#impact" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Impact</Link>
            <Link href="/#research" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Research</Link>
          </div>
          <Link href="#contact" className="hidden md:inline-flex items-center h-9 px-4 text-[13px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200">Get in touch</Link>
        </div>
      </nav>

      {/* Hero — compact */}
      <section className="pt-[72px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-20 md:pt-28 pb-16">
          <span className="inline-flex items-center gap-2 border border-neutral-700 px-3 py-1.5 text-[12px] tracking-wide text-neutral-400 uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            In closed testing
          </span>
          <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-[-0.04em] leading-[0.9] mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>NaviX</h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            GPS-free UAV navigation. Matches onboard camera frames to satellite map tiles using AI visual fingerprints, fuses with inertial sensors across the full flight trajectory. Runs on Raspberry Pi 5 at 9 FPS. No retraining needed for new terrain.
          </p>
        </div>
      </section>

      {/* UI Screenshot — full width */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="bg-[#111] p-3 md:p-4" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <Image src="/navix-ui.png" alt="NaviX mission interface — trajectory prediction overlaid on satellite imagery" width={1400} height={840} className="w-full" />
          </div>
          <div className="flex items-center justify-between mt-4 text-[12px] text-neutral-600">
            <span>NaviX v1.2.0 — Mission planning and real-time position prediction</span>
            <span>UAV trajectory (red) · Predicted position (blue) · Coverage area overlay</span>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Specifications</h2>
          <div className="max-w-3xl">
            <h3 className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-6">Performance</h3>
            <div className="border-l border-r border-white/10">
              {[
                ["Accuracy", "20–30m average, 50–60m worst case"],
                ["Improvement", "16x over previous state-of-the-art (AnyLoc-VLAD)"],
                ["Processing", "9 FPS on Raspberry Pi 5"],
                ["Altitude", "50–150m"],
                ["Operation", "Day and night"],
                ["Retraining", "None required"],
              ].map(([l, v]) => (
                <div key={l} className="flex justify-between py-4 px-6 border-t border-white/10 last:border-b last:border-white/10 text-[15px]">
                  <span className="text-neutral-500">{l}</span>
                  <span className="text-neutral-200 text-right max-w-sm">{v}</span>
                </div>
              ))}
            </div>
            <h3 className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-6 mt-16">Integration</h3>
            <div className="border-l border-r border-white/10">
              {[
                ["Platform", "Raspberry Pi 5"],
                ["Weight", "<100g"],
                ["Power", "<15W"],
                ["Interface", "UART/USB, MAVLink"],
                ["Map preparation", "<5 min per 10 km²"],
                ["Compatibility", "Most Ardupilot-based UAVs"],
              ].map(([l, v]) => (
                <div key={l} className="flex justify-between py-4 px-6 border-t border-white/10 last:border-b last:border-white/10 text-[15px]">
                  <span className="text-neutral-500">{l}</span>
                  <span className="text-neutral-200 text-right max-w-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research + CTA */}
      <section id="contact" className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-4">Based on NaviLoc</h2>
              <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">Published in Drones (MDPI), January 2026. Trajectory-level visual localization achieving 19.5m MLE — 16x improvement over state-of-the-art.</p>
              <Link href="/research/naviloc" className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">Read the article &rarr;</Link>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-4">Join the Waitlist</h2>
              <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">NaviX is in closed testing with select partners. Request early access.</p>
              <a href="mailto:business@theacademia.tech?subject=NaviX%20Waitlist" className="inline-flex items-center h-12 px-8 text-[15px] font-medium bg-white text-black hover:bg-neutral-200 transition-colors">Request Access</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white text-black border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Academia" width={24} height={24} className="invert" />
              <span className="text-[15px] font-semibold tracking-[0.04em] uppercase" style={{ fontFamily: "var(--font-unbounded)" }}>Academia</span>
            </div>
            <div className="flex flex-wrap gap-8 text-[14px] text-neutral-400">
              <a href="mailto:business@theacademia.tech" className="hover:text-black transition-colors duration-200">business@theacademia.tech</a>
              <a href="https://www.linkedin.com/company/theacademia-tech/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200">LinkedIn</a>
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
