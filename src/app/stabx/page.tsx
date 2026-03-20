import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "StabX — Optical Flight Stabilization | Academia Tech",
  description: "GPS-free optical flight stabilization for UAVs. Day and night variants. Trusted by 700+ Armed Forces of Ukraine units.",
};

export default function StabXPage() {
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

      {/* ── Hero + Modules ── */}
      <section className="pt-[72px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-20 md:pt-28 pb-28 md:pb-40">
          <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-[-0.04em] leading-[0.9] mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>
            StabX
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-16">
            Optical flight stabilization without GPS, compass, or external signals. Tracks terrain in real time, fuses optical flow with IMU data. Holds position, maintains heading, returns home autonomously on signal loss.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                name: "StabX Day",
                desc: "Daytime optical stabilization using visible-light camera.",
                camera: "Visible light",
                buyUrl: "https://market-brave1.delta.mil.gov.ua/modul-optychnoi-stabilizatsii/4710/",
                icon: "day" as const,
                img: "/stabx.png",
              },
              {
                name: "StabX Night",
                desc: "Thermal imaging stabilization for night and low-visibility operations.",
                camera: "Thermal",
                buyUrl: "https://market-brave1.delta.mil.gov.ua/modul-optychnoi-stabilizatsii/4646/",
                icon: "night" as const,
                img: "/stabx.png",
              },
              {
                name: "StabX Day+Night",
                desc: "Combined visible and thermal module for 24-hour operation.",
                camera: "Visible + Thermal",
                buyUrl: null,
                img: "/day-night.png",
                icon: "both" as const,
              },
            ].map((mod) => (
              <div key={mod.name} className="relative bg-[#161616] p-8" style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)" }}>
                {/* Mode icon — bottom right, behind content */}
                <div className="absolute bottom-6 right-6 opacity-10 pointer-events-none">
                  {mod.icon === "day" && (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  )}
                  {mod.icon === "night" && (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                  {mod.icon === "both" && (
                    <div className="flex gap-2">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center py-8 mb-6">
                  <Image src={mod.img} alt={mod.name} width={200} height={150} className="object-contain" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-2" style={{ fontFamily: "var(--font-unbounded)" }}>{mod.name}</h3>
                <p className="text-neutral-400 text-[15px] mb-6">{mod.desc}</p>
                <div className="flex justify-between py-3 border-t border-white/10 text-[14px]">
                  <span className="text-neutral-500">Camera</span>
                  <span className="text-neutral-200">{mod.camera}</span>
                </div>
                {mod.buyUrl && (
                  <a
                    href={mod.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-6 text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
                  >
                    Buy on Brave1 &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specifications ── */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Specifications</h2>

          <div className="max-w-3xl">
            <h3 className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-6">Navigation &amp; Autonomy</h3>
            <div className="border-l border-r border-white/10">
              {[
                ["Stabilization", "Activates at takeoff, does not interfere with piloting"],
                ["Azimuth drift", "<1° per 5 min"],
                ["RTL", "Returns via shortest trajectory (not along flight path)"],
                ["Return error", "~500m over a 7–8 km flight, terrain dependent"],
                ["Integration", "4 wires and a few parameters in Ardupilot"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-4 px-6 border-t border-white/10 last:border-b last:border-white/10 text-[15px]">
                  <span className="text-neutral-500">{label}</span>
                  <span className="text-neutral-200 text-right max-w-sm">{value}</span>
                </div>
              ))}
            </div>

            <h3 className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-6 mt-16">Altitude vs. Horizontal Deviation</h3>
            <div className="border-l border-r border-white/10">
              {[
                ["50m", "~1m"],
                ["200m", "~2m"],
                ["500m", "~3–5m"],
                ["1000m", "~10–15m"],
              ].map(([alt, dev]) => (
                <div key={alt} className="flex justify-between py-4 px-6 border-t border-white/10 last:border-b last:border-white/10 text-[15px]">
                  <span className="text-neutral-500">{alt}</span>
                  <span className="text-neutral-200">{dev}</span>
                </div>
              ))}
            </div>

            <h3 className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-6 mt-16">Hardware</h3>
            <div className="border-l border-r border-white/10">
              {[
                ["Working altitude", "50–1000m"],
                ["Weight", "<100g"],
                ["Power consumption", "<15W"],
                ["Security", "Bluetooth key, encrypted, hardware-bound"],
                ["Compatibility", "Most Ardupilot-based UAVs"],
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
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] mb-10" style={{ fontFamily: "var(--font-unbounded)" }}>
            Integrate StabX into<br />your platform
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:sales@theacademia.tech" className="inline-flex items-center h-12 px-8 text-[15px] font-medium bg-white text-black hover:bg-neutral-200 transition-colors duration-200">
              Contact Sales
            </a>
            <a href="mailto:business@theacademia.tech" className="inline-flex items-center h-12 px-8 text-[15px] font-medium border border-neutral-600 text-white hover:border-white transition-colors duration-200">
              Business Inquiries
            </a>
          </div>
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
              <a href="mailto:sales@theacademia.tech" className="hover:text-black transition-colors duration-200">sales@theacademia.tech</a>
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
