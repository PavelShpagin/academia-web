import Image from "next/image";

const stats = [
  { value: "700+", label: "Armed Forces of Ukraine units running StabX" },
  { value: "47", label: "UAV companies with StabX integrated into their platforms" },
  { value: "4", label: "Retranslator codifications in progress with top-tier manufacturers" },
  { value: "Brave1", label: "StabX modules listed on the Brave1 defense marketplace" },
];

/* ── Variant 1: Large numbers with descriptions in a 2x2 grid ── */
export function Impact1() {
  return (
    <section id="impact" className="bg-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-black mb-20">Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {stats.map((stat) => (
            <div key={stat.value} className="border-t-2 border-black pt-8">
              <p className="text-6xl md:text-7xl font-bold tracking-[-0.04em] text-black mb-3">{stat.value}</p>
              <p className="text-[17px] text-neutral-500 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Variant 2: Horizontal scroll cards on dark bg ── */
export function Impact2() {
  return (
    <section id="impact" className="bg-neutral-950 text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-5">Deployed Impact</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Numbers that matter</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-[#111] p-8"
              style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }}
            >
              <p className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-4">{stat.value}</p>
              <p className="text-[14px] text-neutral-400 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Variant 3: Centered, stacked, alternating sizes ── */
export function Impact3() {
  return (
    <section id="impact" className="bg-white py-28 md:py-40">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-400 mb-5">Impact</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-24">
          Trusted across Ukraine&apos;s defense ecosystem
        </h2>
        <div className="space-y-20">
          {stats.map((stat, i) => (
            <div key={stat.value}>
              <p className={`font-bold tracking-[-0.04em] text-black mb-3 ${i === 0 ? "text-8xl md:text-9xl" : "text-6xl md:text-7xl"}`}>
                {stat.value}
              </p>
              <p className="text-lg text-neutral-500 max-w-md mx-auto">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Variant 4: Side-by-side with a vertical accent line ── */
export function Impact4() {
  return (
    <section id="impact" className="bg-neutral-50 py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-16">
          <div>
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-400 mb-5">Impact</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-6 leading-tight">
              From a single module to the national defense standard
            </h2>
            <p className="text-[15px] text-neutral-500 leading-relaxed">
              StabX started as one stabilization solution. Today it&apos;s integrated across 47 UAV platforms and deployed with hundreds of Armed Forces units — proving that complex technology can be accessible, reliable, and Ukrainian.
            </p>
          </div>
          <div className="hidden lg:block bg-neutral-200" />
          <div className="space-y-10">
            {stats.map((stat) => (
              <div key={stat.value} className="flex items-baseline gap-6">
                <p className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-black min-w-[120px]">{stat.value}</p>
                <p className="text-[15px] text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Variant 5: Full-width counter-style with thin top borders ── */
export function Impact5() {
  return (
    <section id="impact" className="bg-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-black">Impact</h2>
          <p className="text-[15px] text-neutral-500 max-w-md leading-relaxed">
            Deployed with hundreds of units across dozens of platforms — reconnaissance, relay, strike — operating daily in the most demanding environment on the planet.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div key={stat.value} className={`border-t border-neutral-200 pt-8 pb-12 ${i > 0 ? "md:pl-10" : ""} ${i < 3 ? "md:pr-10 md:border-r md:border-neutral-200" : ""}`}>
              <p className="text-5xl md:text-6xl font-bold tracking-[-0.04em] text-black mb-3">{stat.value}</p>
              <p className="text-[14px] text-neutral-500 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Variant 6: Black bg, large centered number + description rows ── */
export function Impact6() {
  return (
    <section id="impact" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-5">Impact</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">What StabX has achieved</h2>
        {stats.map((stat, i) => (
          <div key={stat.value} className={`flex flex-col md:flex-row md:items-center md:justify-between py-10 ${i < stats.length - 1 ? "border-b border-white/10" : ""}`}>
            <p className="text-6xl md:text-7xl font-bold tracking-[-0.04em] text-white">{stat.value}</p>
            <p className="text-lg text-neutral-400 md:text-right md:max-w-sm mt-3 md:mt-0">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
