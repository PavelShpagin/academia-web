import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "NaviX — Visual Navigation Without GPS | Academia Tech",
  description: "GPS-free visual navigation for UAVs. Matches drone camera to satellite imagery using AI. 20-30m accuracy, 9 FPS on Raspberry Pi 5.",
};

export default function NaviX2Page() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Academia" width={28} height={28} className="invert" />
            <span className="text-[17px] font-semibold tracking-[0.04em] uppercase text-black" style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}>
              Academia
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href="/#platforms" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Products</Link>
            <Link href="/#impact" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Impact</Link>
            <Link href="/#research" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Research</Link>
          </div>
          <Link href="#contact" className="hidden md:inline-flex items-center h-9 px-4 text-[13px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200">
            Get in touch
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-[72px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-20 md:pt-28 pb-20 md:pb-28">
          <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-[-0.04em] leading-[0.9] mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>
            NaviX
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-8">
            GPS-free visual navigation for UAVs. Uses AI to match camera imagery to satellite maps and determine position without external signals.
          </p>
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-[14px] text-neutral-400">In closed testing</span>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">How it works</h2>

          <div className="max-w-3xl space-y-16">
            <div>
              <div className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-3">1 — Map Preparation</div>
              <p className="text-[15px] text-neutral-300 leading-relaxed">
                Satellite imagery is pre-processed into map tiles. A DeiT Vision Transformer extracts visual fingerprints from each tile. Takes less than 5 minutes per 10 km².
              </p>
            </div>
            <div>
              <div className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-3">2 — In-Flight Matching</div>
              <p className="text-[15px] text-neutral-300 leading-relaxed">
                The onboard camera captures terrain images at 9 FPS. Each frame is matched against the pre-processed map tiles by comparing visual fingerprints. No retraining needed for new terrain.
              </p>
            </div>
            <div>
              <div className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-3">3 — Trajectory Fusion</div>
              <p className="text-[15px] text-neutral-300 leading-relaxed">
                Visual matches are fused with visual-inertial odometry (VIO) across the full flight trajectory, producing a continuous position estimate with 20–30m average accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specifications ── */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Specifications</h2>

          <div className="max-w-3xl">
            <div className="border-l border-r border-white/10">
              {[
                ["Average accuracy", "20–30m"],
                ["Worst-case accuracy", "50–60m"],
                ["Processing speed", "9 FPS on Raspberry Pi 5"],
                ["Working altitude", "50–150m"],
                ["Operation", "Day and night"],
                ["Map preparation", "<5 min per 10 km²"],
                ["Weight", "<100g"],
                ["Power consumption", "<15W"],
                ["Interface", "UART/USB, MAVLink"],
                ["Retraining", "Not required"],
                ["Price", "~5000 UAH per license"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-4 px-6 border-t border-white/10 last:border-b last:border-white/10 text-[15px]">
                  <span className="text-neutral-500">{label}</span>
                  <span className="text-neutral-200 text-right max-w-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] mb-4" style={{ fontFamily: "var(--font-unbounded)" }}>
            Join the NaviX Waitlist
          </h2>
          <p className="text-neutral-400 text-[15px] mb-10">NaviX is currently in closed testing. Request early access.</p>
          <a href="mailto:business@theacademia.tech?subject=NaviX%20Waitlist" className="inline-flex items-center h-12 px-8 text-[15px] font-medium bg-white text-black hover:bg-neutral-200 transition-colors duration-200">
            Request Access
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-white text-black border-t border-neutral-200">
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
