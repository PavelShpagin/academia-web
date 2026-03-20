import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "NaviX — Visual Navigation Without GPS | Academia Tech",
  description: "GPS-free visual navigation for UAVs. 20-30m accuracy on Raspberry Pi 5.",
};

export default function NaviX8() {
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

      {/* Hero — UI screenshot as background, text overlay */}
      <section className="relative pt-[72px]">
        <div className="absolute inset-0 mt-[72px]">
          <Image src="/navix-ui.png" alt="" fill className="object-cover object-center opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-20 md:pt-28 pb-28 md:pb-40">
          <span className="inline-flex items-center gap-2 border border-neutral-700 px-3 py-1.5 text-[12px] tracking-wide text-neutral-400 uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            In closed testing
          </span>
          <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-[-0.04em] leading-[0.9] mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>NaviX</h1>
          <p className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-neutral-300 mb-6">Global UAV Localization</p>
          <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
            Determines drone position by matching camera frames to satellite imagery. No GPS, no external signals. Fuses visual matches with inertial data across the full trajectory for 20–30m accuracy.
          </p>
        </div>
      </section>

      {/* How it works — 3 steps */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Prepare", desc: "Download satellite imagery of the operating area. The system processes it into a grid of visual fingerprints in under 5 minutes per 10 km²." },
              { step: "02", title: "Match", desc: "During flight, the downward camera captures frames. AI extracts visual fingerprints and matches them against the satellite reference database in real time." },
              { step: "03", title: "Fuse", desc: "Visual matches are noisy — many can be wrong. NaviX fuses them with inertial motion data across the entire trajectory, filtering errors and converging on the true position." },
            ].map((s) => (
              <div key={s.step}>
                <span className="text-[13px] font-mono text-neutral-600 block mb-3">{s.step}</span>
                <h3 className="text-xl font-semibold tracking-[-0.01em] mb-3">{s.title}</h3>
                <p className="text-neutral-500 text-[15px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI screenshot */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <Image src="/navix-ui.png" alt="NaviX mission interface" width={1400} height={840} className="w-full" />
          <p className="text-[12px] text-neutral-600 mt-3">Mission planning interface. Red: actual trajectory. Blue: predicted position. Satellite map overlay with coverage area.</p>
        </div>
      </section>

      {/* Specs */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Specifications</h2>
          <div className="max-w-3xl">
            <div className="border-l border-r border-white/10">
              {[
                ["Accuracy", "20–30m average, 50–60m worst case"],
                ["Processing", "9 FPS on Raspberry Pi 5"],
                ["Altitude", "50–150m"],
                ["Weight", "<100g"],
                ["Power", "<15W"],
                ["Interface", "UART/USB, MAVLink"],
                ["Map prep", "<5 min per 10 km²"],
                ["Operation", "Day and night"],
                ["Retraining", "Not required"],
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
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40 text-center">
          <p className="text-neutral-500 text-[14px] mb-8">
            Based on <Link href="/research/naviloc" className="text-white border-b border-white/40 pb-0.5 hover:border-white transition-colors">NaviLoc</Link> — published in Drones (MDPI), 2026
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>Join the NaviX Waitlist</h2>
          <p className="text-neutral-500 text-[15px] max-w-md mx-auto mb-10">In closed testing with select partners. Request early access.</p>
          <a href="mailto:business@theacademia.tech?subject=NaviX%20Waitlist" className="inline-flex items-center h-12 px-8 text-[15px] font-medium bg-white text-black hover:bg-neutral-200 transition-colors">Request Access</a>
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
