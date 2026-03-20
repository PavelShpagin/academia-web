import Image from "next/image";
import Link from "next/link";

/* ── Variant 1: Current — 3 equal cut-corner cards ── */
export function Products1() {
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em]">Three products. One mission.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { name: "StabX", tag: "Optical Stabilization", desc: "GPS-free flight stabilization trusted by 700+ Armed Forces units. Keeps position, maintains heading, auto-returns home on signal loss.", specs: [["Variants", "Day / Night / Day+Night"], ["Altitude", "50–1000m"], ["Weight", "<100g"], ["Integration", "4 wires, Ardupilot"]], href: "/stabx", cta: "View modules", image: "/stabx.png", status: null },
            { name: "NaviX", tag: "Visual Navigation", desc: "AI-powered GPS-free navigation. Matches camera imagery with satellite maps for autonomous position estimation in EW-contested environments.", specs: [["Accuracy", "19.5m avg"], ["Platform", "Raspberry Pi 5"], ["FPS", "9 frames/sec"], ["Based on", "NaviLoc paper"]], href: "/navix", cta: "Join waitlist", image: null, status: "In Testing" },
            { name: "SupportBot", tag: "Automated Technical Support", desc: "AI-powered technical support for StabX operators and integrators. Instant answers, integration guides, and troubleshooting — 24/7.", specs: [["Response", "Instant"], ["Availability", "24/7"], ["Coverage", "StabX / NaviX"], ["Platform", "Signal"]], href: "https://supportbot.info", cta: "Open SupportBot", image: null, status: "Live" },
          ].map((p) => (
            <div key={p.name} className="bg-[#111] p-8 md:p-10 flex flex-col" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
              <div className="flex items-center justify-center h-48 mb-8">
                {p.image ? <Image src={p.image} alt={p.name} width={220} height={160} className="object-contain" /> : (
                  <div className="text-center">
                    <p className="text-6xl font-bold tracking-tighter text-white/10" style={{ fontFamily: "var(--font-unbounded)" }}>{p.name.slice(0, 2).toUpperCase()}</p>
                    {p.status && <span className={`inline-block mt-3 text-[11px] font-medium tracking-wide uppercase border px-2.5 py-1 ${p.status === "Live" ? "text-emerald-400/80 border-emerald-400/30" : "text-neutral-500 border-neutral-700"}`}>{p.status}</span>}
                  </div>
                )}
              </div>
              <div className="border-t border-white/10 pt-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-2" style={{ fontFamily: "var(--font-unbounded)" }}>{p.name}</h3>
                <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{p.tag}</p>
                <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">{p.desc}</p>
                <div className="border-t border-white/10 pt-4 space-y-2 text-[13px] text-neutral-500 mb-8">
                  {p.specs.map(([k, v]) => <div key={k} className="flex justify-between"><span>{k}</span><span className="text-neutral-300">{v}</span></div>)}
                </div>
                <div className="mt-auto">
                  {p.href.startsWith("http") ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200">{p.cta} &rarr;</a>
                  ) : (
                    <Link href={p.href} className="inline-flex items-center text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200">{p.cta} &rarr;</Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Variant 2: StabX hero card large, NaviX + SupportBot smaller below ── */
export function Products2() {
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Three products. One mission.</h2>
        {/* StabX — large featured */}
        <Link href="/stabx" className="group block bg-[#111] p-10 md:p-14 mb-6" style={{ clipPath: "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">Optical Stabilization</p>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-6 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>StabX</h3>
              <p className="text-neutral-400 text-[16px] leading-relaxed mb-8 max-w-lg">GPS-free flight stabilization trusted by 700+ Armed Forces units. Day and night variants. Compatible with most Ardupilot-based UAVs.</p>
              <div className="flex gap-8 text-[13px] text-neutral-500">
                <div><span className="text-neutral-300 block text-lg font-semibold">700+</span>units deployed</div>
                <div><span className="text-neutral-300 block text-lg font-semibold">47</span>integrations</div>
                <div><span className="text-neutral-300 block text-lg font-semibold">&lt;100g</span>weight</div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image src="/stabx.png" alt="StabX" width={340} height={240} className="object-contain" />
            </div>
          </div>
        </Link>
        {/* NaviX + SupportBot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/navix" className="group block bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <span className="inline-block text-[11px] font-medium tracking-wide uppercase text-neutral-500 border border-neutral-700 px-2.5 py-1 mb-6">In Testing</span>
            <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>NaviX</h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">Visual Navigation</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed">AI-powered GPS-free navigation matching camera imagery with satellite maps. 19.5m accuracy on Raspberry Pi 5.</p>
          </Link>
          <a href="https://supportbot.info" target="_blank" rel="noopener noreferrer" className="group block bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <span className="inline-block text-[11px] font-medium tracking-wide uppercase text-emerald-400/80 border border-emerald-400/30 px-2.5 py-1 mb-6">Live</span>
            <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>SupportBot</h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">Automated Technical Support</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed">24/7 AI-powered support for StabX operators and integrators. Instant answers via Signal.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Variant 3: Horizontal rows — product name left, description right ── */
export function Products3() {
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Three products. One mission.</h2>
        {[
          { name: "StabX", tag: "Optical Stabilization", desc: "GPS-free flight stabilization trusted by 700+ Armed Forces units. Keeps position, maintains heading, auto-returns home on signal loss. Day and night variants, compatible with most Ardupilot-based UAVs.", href: "/stabx", cta: "View modules", hasImage: true },
          { name: "NaviX", tag: "Visual Navigation · In Testing", desc: "AI-powered GPS-free navigation. Matches camera imagery with satellite maps for autonomous position estimation in EW-contested environments. 19.5m accuracy on Raspberry Pi 5.", href: "/navix", cta: "Join waitlist", hasImage: false },
          { name: "SupportBot", tag: "Automated Support · Live", desc: "24/7 AI-powered technical support for StabX operators and integrators. Instant answers, integration guides, and troubleshooting via Signal.", href: "https://supportbot.info", cta: "Open SupportBot", hasImage: false },
        ].map((p, i) => (
          <div key={p.name} className={`grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 py-12 ${i < 2 ? "border-b border-white/10" : ""}`}>
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-2" style={{ fontFamily: "var(--font-unbounded)" }}>{p.name}</h3>
              <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500">{p.tag}</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">{p.desc}</p>
                {p.href.startsWith("http") ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">{p.cta} &rarr;</a>
                ) : (
                  <Link href={p.href} className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">{p.cta} &rarr;</Link>
                )}
              </div>
              {p.hasImage && <Image src="/stabx.png" alt="StabX" width={200} height={140} className="object-contain shrink-0" />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Variant 4: White background, dark cards ── */
export function Products4() {
  return (
    <section id="platforms" className="bg-white py-28 md:py-40 border-t border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-black mb-20">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "StabX", tag: "Optical Stabilization", desc: "GPS-free flight stabilization. 700+ AFU units. Day/Night.", href: "/stabx", cta: "View modules", image: "/stabx.png", status: null },
            { name: "NaviX", tag: "Visual Navigation", desc: "GPS-free navigation via satellite map matching. 19.5m accuracy.", href: "/navix", cta: "Join waitlist", image: null, status: "In Testing" },
            { name: "SupportBot", tag: "Technical Support", desc: "24/7 automated support for operators via Signal.", href: "https://supportbot.info", cta: "Open", image: null, status: "Live" },
          ].map((p) => (
            <div key={p.name} className="bg-black text-white p-8 md:p-10">
              <div className="h-40 flex items-center justify-center mb-8">
                {p.image ? <Image src={p.image} alt={p.name} width={180} height={130} className="object-contain" /> : (
                  <p className="text-5xl font-bold tracking-tighter text-white/10" style={{ fontFamily: "var(--font-unbounded)" }}>{p.name}</p>
                )}
              </div>
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-unbounded)" }}>{p.name}</h3>
                  {p.status && <span className={`text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 border ${p.status === "Live" ? "text-emerald-400/80 border-emerald-400/30" : "text-neutral-500 border-neutral-700"}`}>{p.status}</span>}
                </div>
                <p className="text-neutral-400 text-[14px] leading-relaxed mb-6">{p.desc}</p>
                {p.href.startsWith("http") ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">{p.cta} &rarr;</a>
                ) : (
                  <Link href={p.href} className="text-[13px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">{p.cta} &rarr;</Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Variant 5: Stacked full-width cards with large product name background ── */
export function Products5() {
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Products</h2>
        {[
          { name: "StabX", tag: "Optical Stabilization", desc: "GPS-free flight stabilization trusted by 700+ Armed Forces units. Keeps position, maintains heading, auto-returns home on signal loss. Day and night variants.", href: "/stabx", cta: "View modules", hasImage: true },
          { name: "NaviX", tag: "Visual Navigation", desc: "AI-powered GPS-free navigation matching camera imagery with satellite maps. 19.5m accuracy, 9 FPS on Raspberry Pi 5. Currently in closed testing.", href: "/navix", cta: "Join waitlist", hasImage: false },
          { name: "SupportBot", tag: "Automated Support", desc: "24/7 AI-powered technical support for StabX operators and integrators via Signal. Instant answers and integration guides.", href: "https://supportbot.info", cta: "Open SupportBot", hasImage: false },
        ].map((p, i) => (
          <div key={p.name} className={`relative bg-[#0a0a0a] p-10 md:p-14 ${i < 2 ? "mb-4" : ""} overflow-hidden`}>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10rem] md:text-[14rem] font-bold text-white/[0.03] select-none leading-none" style={{ fontFamily: "var(--font-unbounded)" }}>{p.name}</span>
            <div className="relative flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-3">{p.tag}</p>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-4" style={{ fontFamily: "var(--font-unbounded)" }}>{p.name}</h3>
                <p className="text-neutral-400 text-[15px] leading-relaxed max-w-xl mb-6">{p.desc}</p>
                {p.href.startsWith("http") ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">{p.cta} &rarr;</a>
                ) : (
                  <Link href={p.href} className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">{p.cta} &rarr;</Link>
                )}
              </div>
              {p.hasImage && <Image src="/stabx.png" alt="StabX" width={260} height={180} className="object-contain shrink-0" />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Variant 6: Minimal — just names as links, no cards ── */
export function Products6() {
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Products</h2>
        {[
          { name: "StabX", desc: "Optical flight stabilization. No GPS. Day and night. 700+ units deployed.", href: "/stabx" },
          { name: "NaviX", desc: "Visual navigation without GPS. Satellite map matching. In testing.", href: "/navix" },
          { name: "SupportBot", desc: "Automated technical support. 24/7 via Signal.", href: "https://supportbot.info" },
        ].map((p) => (
          <div key={p.name} className="border-t-2 border-white/20 pt-8 pb-12">
            <div className="flex items-start justify-between gap-8">
              <div>
                <h3 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] mb-4" style={{ fontFamily: "var(--font-unbounded)" }}>{p.name}</h3>
                <p className="text-neutral-400 text-[15px] leading-relaxed max-w-xl">{p.desc}</p>
              </div>
              {p.href.startsWith("http") ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors text-2xl mt-2 shrink-0">&rarr;</a>
              ) : (
                <Link href={p.href} className="text-neutral-600 hover:text-white transition-colors text-2xl mt-2 shrink-0">&rarr;</Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Variant 7: StabX with real image prominently, others text-only ── */
export function Products7() {
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Products</h2>
        {/* StabX with prominent image */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="bg-[#0a0a0a] flex items-center justify-center p-12 min-h-[300px]">
              <Image src="/stabx.png" alt="StabX module" width={320} height={240} className="object-contain" />
            </div>
            <div className="bg-[#111] p-10 md:p-14 flex flex-col justify-center">
              <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-3">Optical Stabilization</p>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-4" style={{ fontFamily: "var(--font-unbounded)" }}>StabX</h3>
              <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">GPS-free flight stabilization trusted by 700+ Armed Forces units. Day and night variants. Auto-returns home on signal loss.</p>
              <Link href="/stabx" className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors inline-block w-fit">View modules &rarr;</Link>
            </div>
          </div>
        </div>
        {/* NaviX + SupportBot as simple rows */}
        {[
          { name: "NaviX", tag: "Visual Navigation · In Testing", desc: "GPS-free navigation via satellite map matching. 19.5m accuracy on RPi 5.", href: "/navix", cta: "Join waitlist" },
          { name: "SupportBot", tag: "Automated Support · Live", desc: "24/7 AI technical support for operators via Signal.", href: "https://supportbot.info", cta: "Open" },
        ].map((p) => (
          <div key={p.name} className="border-t border-white/10 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-1" style={{ fontFamily: "var(--font-unbounded)" }}>{p.name}</h3>
              <p className="text-[13px] text-neutral-500">{p.tag}</p>
            </div>
            <p className="text-neutral-400 text-[14px] max-w-sm">{p.desc}</p>
            {p.href.startsWith("http") ? (
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors shrink-0">{p.cta} &rarr;</a>
            ) : (
              <Link href={p.href} className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors shrink-0">{p.cta} &rarr;</Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Variant 8: Numbers-forward — stats + product name ── */
export function Products8() {
  return (
    <section id="platforms" className="bg-neutral-950 text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            { name: "StabX", stat: "700+", statLabel: "units deployed", desc: "Optical flight stabilization. No GPS required. Day/Night.", href: "/stabx", cta: "View modules" },
            { name: "NaviX", stat: "19.5m", statLabel: "accuracy", desc: "Visual navigation via satellite maps. GPS-free. In testing.", href: "/navix", cta: "Join waitlist" },
            { name: "SupportBot", stat: "24/7", statLabel: "availability", desc: "Automated technical support for operators via Signal.", href: "https://supportbot.info", cta: "Open" },
          ].map((p, i) => (
            <div key={p.name} className={`p-10 ${i < 2 ? "md:border-r border-white/10" : ""}`}>
              <p className="text-5xl md:text-6xl font-bold tracking-[-0.04em] text-white mb-1">{p.stat}</p>
              <p className="text-[13px] text-neutral-500 mb-8">{p.statLabel}</p>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-3" style={{ fontFamily: "var(--font-unbounded)" }}>{p.name}</h3>
              <p className="text-neutral-400 text-[14px] leading-relaxed mb-6">{p.desc}</p>
              {p.href.startsWith("http") ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">{p.cta} &rarr;</a>
              ) : (
                <Link href={p.href} className="text-[13px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">{p.cta} &rarr;</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Variant 9: Two-tone — StabX on white, rest on black ── */
export function Products9() {
  return (
    <section id="platforms">
      {/* StabX on white */}
      <div className="bg-white text-black py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-400 mb-4">Flagship Product</p>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>StabX</h3>
              <p className="text-neutral-600 text-[16px] leading-relaxed mb-8">Optical flight stabilization without GPS. Trusted by 700+ Armed Forces of Ukraine units across 47 UAV platforms. Day and night variants.</p>
              <Link href="/stabx" className="inline-flex items-center h-12 px-7 text-[15px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors">View modules &rarr;</Link>
            </div>
            <div className="flex justify-center">
              <Image src="/stabx.png" alt="StabX" width={380} height={280} className="object-contain" />
            </div>
          </div>
        </div>
      </div>
      {/* NaviX + SupportBot on black */}
      <div className="bg-black text-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="border-t-2 border-white/20 pt-8">
              <span className="inline-block text-[11px] font-medium tracking-wide uppercase text-neutral-500 border border-neutral-700 px-2.5 py-1 mb-4">In Testing</span>
              <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3" style={{ fontFamily: "var(--font-unbounded)" }}>NaviX</h3>
              <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">GPS-free visual navigation. Matches camera imagery with satellite maps. 19.5m accuracy on Raspberry Pi 5.</p>
              <Link href="/navix" className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">Join waitlist &rarr;</Link>
            </div>
            <div className="border-t-2 border-white/20 pt-8">
              <span className="inline-block text-[11px] font-medium tracking-wide uppercase text-emerald-400/80 border border-emerald-400/30 px-2.5 py-1 mb-4">Live</span>
              <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3" style={{ fontFamily: "var(--font-unbounded)" }}>SupportBot</h3>
              <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">24/7 automated technical support for StabX operators and integrators via Signal.</p>
              <a href="https://supportbot.info" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">Open SupportBot &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Variant 10: Anduril-inspired — cinematic stacked with big typography ── */
export function Products10() {
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-6">Products</h2>
        <p className="text-neutral-400 text-[15px] leading-relaxed max-w-xl mb-20">Three systems. Each solves a different problem. Together, they form the autonomy stack for modern UAV operations.</p>
        {/* StabX */}
        <div className="border-t border-white/10 pt-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-[12px] font-medium tracking-wide uppercase text-neutral-500 mb-4">01 — Stabilization</p>
              <h3 className="text-5xl md:text-6xl font-bold tracking-[-0.04em] mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>StabX</h3>
              <Link href="/stabx" className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">View modules &rarr;</Link>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <p className="text-neutral-300 text-[16px] leading-relaxed mb-6">Optical flight stabilization without GPS, compass, or external signals. A downward-facing camera tracks terrain in real time, fusing optical flow with IMU data. The drone holds position, maintains heading, and returns home autonomously on signal loss.</p>
                <p className="text-neutral-500 text-[14px] leading-relaxed">Deployed with 700+ AFU units across 47 UAV platforms. Day and night variants. &lt;100g. 4 wires to integrate.</p>
              </div>
              <Image src="/stabx.png" alt="StabX" width={240} height={170} className="object-contain shrink-0" />
            </div>
          </div>
        </div>
        {/* NaviX */}
        <div className="border-t border-white/10 pt-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-start">
            <div>
              <p className="text-[12px] font-medium tracking-wide uppercase text-neutral-500 mb-4">02 — Navigation</p>
              <h3 className="text-5xl md:text-6xl font-bold tracking-[-0.04em] mb-4" style={{ fontFamily: "var(--font-unbounded)" }}>NaviX</h3>
              <span className="inline-block text-[11px] font-medium tracking-wide uppercase text-neutral-500 border border-neutral-700 px-2.5 py-1 mb-6">In Testing</span>
              <br />
              <Link href="/navix" className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">Join waitlist &rarr;</Link>
            </div>
            <div>
              <p className="text-neutral-300 text-[16px] leading-relaxed mb-6">Visual localization for UAVs in GPS-denied environments. Matches onboard camera imagery against pre-processed satellite maps using AI, achieving 19.5m mean accuracy at 50–150m altitude.</p>
              <p className="text-neutral-500 text-[14px] leading-relaxed">Runs at 9 FPS on Raspberry Pi 5. Based on the published NaviLoc research. Training-free — works on new terrain without retraining.</p>
            </div>
          </div>
        </div>
        {/* SupportBot */}
        <div className="border-t border-white/10 pt-16 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-start">
            <div>
              <p className="text-[12px] font-medium tracking-wide uppercase text-neutral-500 mb-4">03 — Support</p>
              <h3 className="text-5xl md:text-6xl font-bold tracking-[-0.04em] mb-4" style={{ fontFamily: "var(--font-unbounded)" }}>SupportBot</h3>
              <span className="inline-block text-[11px] font-medium tracking-wide uppercase text-emerald-400/80 border border-emerald-400/30 px-2.5 py-1 mb-6">Live</span>
              <br />
              <a href="https://supportbot.info" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">Open SupportBot &rarr;</a>
            </div>
            <div>
              <p className="text-neutral-300 text-[16px] leading-relaxed">24/7 automated technical support for StabX operators and integrators. Instant answers to integration questions, troubleshooting, and configuration via Signal. No waiting for human response.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
