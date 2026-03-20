import Link from "next/link";

const papers = [
  {
    tag: "Drones (MDPI) · 2026",
    title: "NaviLoc: GPS-Free Navigation for Drones Using Visual Intelligence",
    desc: "Trajectory-level visual localization achieving 19.5m accuracy without GPS, running at 9 FPS on a Raspberry Pi 5.",
    href: "/research/naviloc",
    externalHref: "https://www.mdpi.com/2504-446X/10/2/97",
    authors: "P. Shpagin, T. Panchenko",
  },
];

/* ── Variant 1: Minimal list — title + arrow, one line per paper ── */
export function Research1() {
  return (
    <section id="research" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-6">Research</h2>
        <p className="text-neutral-400 text-[15px] leading-relaxed max-w-xl mb-16">
          We publish what we discover. Tight collaboration with academic institutions producing both proprietary products and peer-reviewed novelty.
        </p>
        <div className="space-y-0">
          {papers.map((p) => (
            <Link key={p.title} href={p.href} className="group flex items-center justify-between py-6 border-t border-white/10 last:border-b last:border-white/10">
              <div>
                <p className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 mb-1">{p.tag}</p>
                <p className="text-lg md:text-xl font-medium group-hover:text-neutral-300 transition-colors">{p.title}</p>
              </div>
              <span className="text-neutral-600 group-hover:text-white transition-colors text-xl ml-8">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Variant 2: Card per paper, cut corner ── */
export function Research2() {
  return (
    <section id="research" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-5">Research</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">Published work</h2>
          </div>
          <p className="text-neutral-400 text-[15px] max-w-sm leading-relaxed">
            We build what&apos;s needed now — while publishing what we discover.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group bg-[#111] p-8 block"
              style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)" }}
            >
              <p className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{p.tag}</p>
              <h3 className="text-lg font-semibold tracking-[-0.01em] mb-3 group-hover:text-neutral-300 transition-colors">{p.title}</h3>
              <p className="text-[14px] text-neutral-400 leading-relaxed mb-6">{p.desc}</p>
              <p className="text-[13px] text-neutral-600">{p.authors}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Variant 3: Two columns — manifesto left, papers right ── */
export function Research3() {
  return (
    <section id="research" className="bg-neutral-950 text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
          <div>
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-5">Research</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-white mb-6 leading-tight">
              Not research-only.<br />Not product-only.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-[15px]">
              Tight collaboration with academic institutions and a scientific direction that produces both proprietary products and peer-reviewed novelty. We build what&apos;s needed now — while publishing what we discover.
            </p>
          </div>
          <div className="space-y-0">
            {papers.map((p) => (
              <Link key={p.title} href={p.href} className="group block py-8 border-t border-white/10 first:border-t-0 lg:first:border-t lg:first:border-white/10">
                <p className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 mb-2">{p.tag} · {p.authors}</p>
                <h3 className="text-xl font-semibold tracking-[-0.01em] mb-3 group-hover:text-neutral-300 transition-colors">{p.title}</h3>
                <p className="text-[14px] text-neutral-400 leading-relaxed mb-4">{p.desc}</p>
                <span className="text-[14px] font-medium text-white border-b border-white/40 pb-1 group-hover:border-white transition-colors">Read article &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Variant 4: White bg, academic journal style ── */
export function Research4() {
  return (
    <section id="research" className="bg-white py-28 md:py-40 border-t border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-black mb-20">Research</h2>
        <div className="space-y-0">
          {papers.map((p) => (
            <Link key={p.title} href={p.href} className="group block py-8 border-t border-neutral-200">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                <p className="text-[13px] text-neutral-400 md:min-w-[180px] shrink-0 pt-1">{p.tag}</p>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.01em] text-black mb-2 group-hover:text-neutral-600 transition-colors">{p.title}</h3>
                  <p className="text-[15px] text-neutral-500 leading-relaxed mb-2">{p.desc}</p>
                  <p className="text-[13px] text-neutral-400">{p.authors}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Variant 5: Dark, large title per paper, full-width rows ── */
export function Research5() {
  return (
    <section id="research" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-20">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-5">Publications</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">We publish what we discover.</h2>
        </div>
        {papers.map((p) => (
          <Link key={p.title} href={p.href} className="group block border-t border-white/10 py-12">
            <p className="text-[11px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{p.tag} · {p.authors}</p>
            <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.02em] mb-4 group-hover:text-neutral-300 transition-colors max-w-3xl">{p.title}</h3>
            <p className="text-[15px] text-neutral-400 leading-relaxed max-w-2xl">{p.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ── Variant 6: Minimal, no heading — just papers with external link ── */
export function Research6() {
  return (
    <section id="research" className="bg-neutral-950 text-white py-28 md:py-40">
      <div className="max-w-[900px] mx-auto px-6">
        <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-500 mb-16 text-center">Research &amp; Publications</p>
        {papers.map((p) => (
          <div key={p.title} className="border-t border-white/10 pt-10 pb-10">
            <p className="text-[12px] font-medium tracking-wide uppercase text-neutral-600 mb-3">{p.tag}</p>
            <Link href={p.href} className="group">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] mb-4 group-hover:text-neutral-300 transition-colors">{p.title}</h3>
            </Link>
            <p className="text-[15px] text-neutral-400 leading-relaxed mb-4">{p.desc}</p>
            <div className="flex items-center gap-6 text-[13px]">
              <span className="text-neutral-500">{p.authors}</span>
              <Link href={p.href} className="text-white border-b border-white/40 pb-0.5 hover:border-white transition-colors">Read article</Link>
              <a href={p.externalHref} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">MDPI &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
