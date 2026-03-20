import Image from "next/image";
import Link from "next/link";

const specs = [
  { label: "Platform", value: "Raspberry Pi 5" },
  { label: "FPS", value: "5+ frames/sec" },
  { label: "Altitude", value: "50–100m" },
  { label: "Weight", value: "<100g" },
  { label: "Power", value: "<15W" },
  { label: "Map Prep", value: "<5min per 10km²" },
  { label: "Interface", value: "UART/USB, MAVLink" },
  { label: "Mode", value: "Day/Night" },
];

const useCases = [
  {
    title: "Remote Mining",
    desc: "Autonomous positioning for mining drones operating in GPS-challenged underground and canyon environments.",
  },
  {
    title: "Precision Bombers",
    desc: "Accurate terminal guidance for strike UAVs when GPS jamming renders satellite navigation unusable.",
  },
  {
    title: "Kamikaze Missions",
    desc: "One-way precision strike platforms that maintain trajectory accuracy through dense electronic warfare zones.",
  },
  {
    title: "Reconnaissance",
    desc: "Persistent ISR operations with reliable geopositioning for intelligence products in contested airspace.",
  },
  {
    title: "Trajectory Correction",
    desc: "Real-time flight path adjustment using visual anchors when inertial drift exceeds acceptable thresholds in EW environments.",
  },
];

export default function NaviXPage() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Academia" width={28} height={28} className="invert" />
            <span
              className="text-[17px] font-semibold tracking-[0.04em] uppercase text-black"
              style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
            >
              Academia
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href="/#platforms" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">
              Products
            </Link>
            <Link href="/#impact" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">
              Impact
            </Link>
            <Link href="/#research" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">
              Research
            </Link>
          </div>
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center h-9 px-4 text-[13px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-[72px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-44">
          <h1
            className="text-[clamp(4rem,10vw,9rem)] font-bold tracking-[-0.05em] leading-[0.9]"
            style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
          >
            NaviX
          </h1>
          <p className="mt-6 text-2xl md:text-3xl font-medium tracking-[-0.02em] text-neutral-300">
            Visual Navigation Without GPS
          </p>
          <p className="mt-8 text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed font-light">
            GPS-denied environments demand a different approach. NaviX uses AI-powered visual
            localization to determine UAV position by matching camera imagery with satellite
            maps&nbsp;&mdash; no external signals required.
          </p>

          {/* Status badge */}
          <div className="mt-10">
            <span className="inline-flex items-center gap-2 border border-neutral-700 px-4 py-2 text-[13px] tracking-wide text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Currently in closed testing
            </span>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-neutral-950 py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-5">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20 max-w-3xl">
            Camera-to-map matching, fused with inertial data
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {[
              {
                num: "01",
                title: "Image-to-Tile Matching",
                text: "Matches onboard camera images with pre-processed satellite tiles using deep visual features for robust localization.",
              },
              {
                num: "02",
                title: "Sensor Fusion",
                text: "Combines visual anchors with VIO and inertial sensor data for continuous, drift-corrected positioning.",
              },
              {
                num: "03",
                title: "Full Trajectory Estimation",
                text: "Robust position estimation across the full trajectory, not single frames — smoothing outliers and maintaining accuracy over time.",
              },
              {
                num: "04",
                title: "Edge Compute",
                text: "Runs on Raspberry Pi 5 at 5+ FPS — no cloud, no GPU, no external connectivity required.",
              },
              {
                num: "05",
                title: "Working Altitude",
                text: "Optimized for 50–100m flight altitude, the standard operational envelope for tactical UAV missions.",
              },
              {
                num: "06",
                title: "Accuracy",
                text: "20–30m average positional accuracy, 50–60m worst case — sufficient for navigation and terminal guidance.",
              },
            ].map((item) => (
              <div key={item.num}>
                <span className="text-[13px] font-mono text-neutral-600 mb-3 block">{item.num}</span>
                <h3 className="text-xl font-semibold tracking-[-0.01em] mb-3">{item.title}</h3>
                <p className="text-neutral-500 text-[15px] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Specs ── */}
      <section className="bg-black py-28 md:py-40 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-5">
            Specifications
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">
            Built for the edge
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06]">
            {specs.map((spec) => (
              <div key={spec.label} className="bg-black p-8 md:p-10">
                <p className="text-[13px] font-medium tracking-[0.06em] uppercase text-neutral-600 mb-3">
                  {spec.label}
                </p>
                <p className="text-xl md:text-2xl font-semibold tracking-[-0.02em]">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="bg-neutral-950 py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-5">
            Applications
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">
            Use Cases
          </h2>

          <div className="space-y-0">
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-16 py-10 ${
                  i < useCases.length - 1 ? "border-b border-white/[0.06]" : ""
                }`}
              >
                <h3 className="text-2xl font-semibold tracking-[-0.02em] md:w-72 shrink-0">{uc.title}</h3>
                <p className="text-neutral-500 text-[15px] leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Based on Research ── */}
      <section className="bg-black py-28 md:py-40 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-5">
              Research Foundation
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-8">
              Based on NaviLoc
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              NaviX is built on the NaviLoc research paper, published in the{" "}
              <em>Drones</em> journal (MDPI). The paper establishes the theoretical
              framework for visual localization in GPS-denied environments — image-to-satellite
              matching, trajectory-level optimization, and sensor fusion architectures that
              form the core of NaviX.
            </p>
            <Link
              href="/research/naviloc"
              className="inline-flex items-center text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
            >
              Read the NaviLoc paper &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-neutral-950 py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2
            className="text-4xl md:text-6xl font-bold tracking-[-0.04em] mb-6"
            style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
          >
            Join the NaviX Waitlist
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            NaviX is in closed testing with select partners. Join the waitlist for early access.
          </p>
          <a
            href="mailto:business@theacademia.tech?subject=NaviX%20Waitlist"
            className="inline-flex items-center h-14 px-10 text-[15px] font-semibold bg-white text-black hover:bg-neutral-200 transition-colors duration-200"
          >
            Request Access
          </a>
          <p className="mt-6 text-[14px] text-neutral-600">
            business@theacademia.tech
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contact" className="bg-white text-black border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Academia" width={24} height={24} className="invert" />
              <span
                className="text-[15px] font-semibold tracking-[0.04em] uppercase"
                style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
              >
                Academia
              </span>
            </div>
            <div className="flex flex-wrap gap-8 text-[14px] text-neutral-400">
              <a href="mailto:business@theacademia.tech" className="hover:text-black transition-colors duration-200">business@theacademia.tech</a>
              <a href="https://www.linkedin.com/company/theacademia-tech/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200">LinkedIn</a>
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
