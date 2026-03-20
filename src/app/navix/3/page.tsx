import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "NaviX — Visual Navigation Without GPS | Academia Tech",
  description: "GPS-free visual navigation for UAVs. Matches drone camera to satellite imagery using AI. 20-30m accuracy, 9 FPS on Raspberry Pi 5.",
};

export default function NaviX3Page() {
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

      {/* ── Hero with inline badge ── */}
      <section className="pt-[72px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-20 md:pt-28 pb-20 md:pb-28">
          <div className="flex items-end gap-6 mb-10">
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-[-0.04em] leading-[0.9]" style={{ fontFamily: "var(--font-unbounded)" }}>
              NaviX
            </h1>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-[14px] text-neutral-400">In closed testing</span>
            </div>
          </div>

          {/* ── Two-column: description + key specs ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <div>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Visual navigation without GPS for UAVs. A DeiT Vision Transformer extracts visual fingerprints from drone camera frames and matches them against pre-processed satellite map tiles. Matches are fused with visual-inertial odometry across the full trajectory. Training-free — works on new terrain without retraining.
              </p>
            </div>
            <div className="space-y-4">
              {[
                ["Accuracy", "20–30m avg, 50–60m worst case"],
                ["Speed", "9 FPS on Raspberry Pi 5"],
                ["Altitude", "50–150m"],
                ["Weight", "<100g"],
                ["Power", "<15W"],
                ["Interface", "UART/USB, MAVLink"],
                ["Map prep", "<5 min per 10 km²"],
                ["Price", "~5000 UAH per license"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between text-[15px] py-1">
                  <span className="text-neutral-500">{label}</span>
                  <span className="text-neutral-200 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Use cases as horizontal rows ── */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <div className="max-w-3xl space-y-0">
            {[
              ["Strike UAVs", "GPS-independent terminal navigation for one-way platforms in contested RF environments."],
              ["Reconnaissance", "Continuous position fix during ISR flights where GPS jamming is expected."],
              ["Trajectory correction", "Real-time position correction fused with inertial data when GNSS is degraded or denied."],
              ["EW environments", "Maintains navigation capability when GPS and compass are jammed or spoofed."],
            ].map(([title, desc]) => (
              <div key={title} className="flex flex-col md:flex-row md:items-baseline justify-between py-6 border-t border-white/10 last:border-b last:border-white/10 gap-2 md:gap-16">
                <span className="text-white text-[15px] font-medium shrink-0 md:w-48">{title}</span>
                <span className="text-neutral-400 text-[15px]">{desc}</span>
              </div>
            ))}
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
