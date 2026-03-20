import Image from "next/image";
import Link from "next/link";

const modules = [
  {
    name: "StabX Day",
    description: "Daytime optical stabilization",
    specs: [
      "Working altitude: 50–1000m",
      "Azimuth drift: <1\u00b0/5min",
      "Return error: ~500m over 7\u20138km",
      "Weight: <100g",
      "Power: <15W",
    ],
  },
  {
    name: "StabX Night",
    description: "Thermal imaging stabilization",
    specs: [
      "Working altitude: 50–1000m",
      "Azimuth drift: <1\u00b0/5min",
      "Return error: ~500m over 7\u20138km",
      "Weight: <100g",
      "Power: <15W",
    ],
  },
  {
    name: "StabX Day+Night",
    description: "Combined day and thermal module",
    specs: [
      "Working altitude: 50–1000m",
      "Azimuth drift: <1\u00b0/5min",
      "Return error: ~500m over 7\u20138km",
      "Weight: <100g",
      "Power: <15W",
    ],
  },
];

const performanceData = [
  { altitude: "50m", deviation: "~1m" },
  { altitude: "200m", deviation: "~2m" },
  { altitude: "500m", deviation: "~3\u20135m" },
  { altitude: "1000m", deviation: "~10\u201315m" },
];

export default function StabXPage() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Academia"
              width={28}
              height={28}
              className="invert"
              unoptimized
            />
            <span
              className="text-[17px] font-semibold tracking-[0.04em] uppercase text-black"
              style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
            >
              Academia
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/#platforms"
              className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              href="/#impact"
              className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200"
            >
              Impact
            </Link>
            <Link
              href="/#research"
              className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200"
            >
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
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <p
            className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-6"
          >
            Optical Flight Stabilization
          </p>
          <h1
            className="text-[clamp(4rem,10vw,9rem)] font-bold tracking-[-0.04em] leading-[0.9]"
            style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
          >
            StabX
          </h1>
          <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light">
            Ultimate stability in the air and RTL. No GPS required. Day and night
            variants. Compatible with most Ardupilot-based UAVs. Easy integration:
            4&nbsp;wires and a few parameters.
          </p>
        </div>
      </section>

      {/* ── Product Image ── */}
      <section className="relative">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 pb-28 md:pb-40">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/stabx.png"
              alt="StabX Module"
              fill
              className="object-contain"
              unoptimized
              priority
            />
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="border-t border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-5">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] mb-16">
            GPS-denied stabilization,
            <br />
            from takeoff to return.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="text-lg font-medium mb-3">Optical Flow Tracking</h3>
              <p className="text-neutral-400 leading-relaxed">
                A downward-facing camera tracks terrain features in real time,
                computing optical flow to determine movement vectors with
                sub-pixel accuracy.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">IMU Sensor Fusion</h3>
              <p className="text-neutral-400 leading-relaxed">
                Optical flow data fuses with IMU readings to derive precise
                velocity and position estimates without any reliance on GPS
                signals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Visual Odometry Heading</h3>
              <p className="text-neutral-400 leading-relaxed">
                Heading is maintained through visual odometry alone. No
                magnetometer, no compass — just continuous terrain-relative
                orientation tracking.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Automatic Activation</h3>
              <p className="text-neutral-400 leading-relaxed">
                Activates at takeoff and runs parallel to manual control. The
                pilot flies normally while StabX silently builds its position
                map in the background.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Autonomous RTL</h3>
              <p className="text-neutral-400 leading-relaxed">
                On signal loss, Return-to-Launch engages automatically via the
                shortest computed trajectory — no operator intervention, no GPS
                dependency.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Hardware Security</h3>
              <p className="text-neutral-400 leading-relaxed">
                Bluetooth key activation with encrypted software bound to
                hardware. Each unit is individually locked — no cloning, no
                tampering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Module Cards ── */}
      <section className="bg-[#0a0a0a] border-t border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-5">
            Modules
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] mb-16">
            Choose your variant.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <div
                key={mod.name}
                className="bg-neutral-900/50 border border-neutral-800 p-0 overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                }}
              >
                <div className="relative w-full aspect-[4/3] bg-black">
                  <Image
                    src="/stabx.png"
                    alt={mod.name}
                    fill
                    className="object-contain p-6"
                    unoptimized
                  />
                </div>
                <div className="px-6 pb-6">
                  <h3
                    className="text-xl font-semibold tracking-tight"
                    style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
                  >
                    {mod.name}
                  </h3>
                  <p className="text-neutral-500 text-sm mt-1 mb-4">
                    {mod.description}
                  </p>
                  <div className="border-t border-neutral-800 pt-4">
                    <ul className="space-y-2">
                      {mod.specs.map((spec) => (
                        <li
                          key={spec}
                          className="text-[13px] text-neutral-400 flex items-start gap-2"
                        >
                          <span className="text-neutral-600 mt-0.5 shrink-0">—</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Performance Table ── */}
      <section className="border-t border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-5">
            Performance
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] mb-16">
            Altitude vs. horizontal deviation.
          </h2>

          <div className="max-w-xl">
            <div className="border border-neutral-800">
              <div className="grid grid-cols-2 text-[13px] font-medium tracking-[0.04em] uppercase text-neutral-500 border-b border-neutral-800">
                <div className="px-6 py-4">Altitude</div>
                <div className="px-6 py-4">Horizontal Deviation</div>
              </div>
              {performanceData.map((row, i) => (
                <div
                  key={row.altitude}
                  className={`grid grid-cols-2 text-[15px] ${
                    i < performanceData.length - 1 ? "border-b border-neutral-800/60" : ""
                  }`}
                >
                  <div className="px-6 py-4 font-medium">{row.altitude}</div>
                  <div className="px-6 py-4 text-neutral-400">{row.deviation}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="border-t border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40 text-center">
          <h2
            className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] mb-10"
            style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
          >
            Integrate StabX into
            <br />
            your platform
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:sales@theacademia.tech"
              className="inline-flex items-center h-12 px-8 text-[15px] font-medium bg-white text-black hover:bg-neutral-200 transition-colors duration-200"
            >
              Contact Sales
            </a>
            <a
              href="mailto:business@theacademia.tech"
              className="inline-flex items-center h-12 px-8 text-[15px] font-medium border border-neutral-600 text-white hover:border-white transition-colors duration-200"
            >
              Business Inquiries
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Academia"
              width={20}
              height={20}
              unoptimized
            />
            <span
              className="text-[13px] font-semibold tracking-[0.04em] uppercase text-neutral-500"
              style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
            >
              Academia
            </span>
          </div>
          <p className="text-[13px] text-neutral-600">
            &copy; {new Date().getFullYear()} Academia Tech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
