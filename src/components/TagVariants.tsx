import Image from "next/image";
import Link from "next/link";

const stabx = {
  name: "StabX", tag: "Optical Stabilization",
  desc: "GPS-free flight stabilization trusted by 700+ Armed Forces units. Day and night variants. Compatible with most Ardupilot-based UAVs.",
  href: "/stabx",
};
const navix = {
  name: "NaviX", tag: "Visual Navigation",
  desc: "AI-powered GPS-free navigation matching camera imagery with satellite maps. 20–30m accuracy on Raspberry Pi 5.",
  href: "/navix",
};
const supportbot = {
  name: "SupportBot", tag: "Automated Technical Support",
  desc: "Automated technical support bot in Signal powering StabX customer service. Deployable to any product's support workflow.",
  href: "https://supportbot.info",
};

function ExtLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return href.startsWith("http") ? <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a> : <Link href={href} className={className}>{children}</Link>;
}

const linkClass = "inline-flex items-center text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200";

/* ── V1: No tags at all — let card hierarchy do the work ── */
export function Tags1() {
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Products</h2>
        <Link href={stabx.href} className="group block bg-[#111] p-10 md:p-14 mb-6" style={{ clipPath: "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>StabX</h3>
              <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{stabx.tag}</p>
              <p className="text-neutral-400 text-[16px] leading-relaxed mb-8 max-w-lg">{stabx.desc}</p>
              <span className={linkClass}>View modules &rarr;</span>
            </div>
            <div className="flex justify-center"><Image src="/stabx.png" alt="StabX" width={340} height={240} className="object-contain" /></div>
          </div>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href={navix.href} className="group block bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>NaviX</h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{navix.tag}</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">{navix.desc}</p>
            <span className={linkClass}>Join waitlist &rarr;</span>
          </Link>
          <a href={supportbot.href} target="_blank" rel="noopener noreferrer" className="group block bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>SupportBot</h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{supportbot.tag}</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">{supportbot.desc}</p>
            <span className={linkClass}>Open SupportBot &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── V2: Subtle inline text after product name, no box/border ── */
export function Tags2() {
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Products</h2>
        <Link href={stabx.href} className="group block bg-[#111] p-10 md:p-14 mb-6" style={{ clipPath: "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-baseline gap-4 mb-3">
                <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>StabX</h3>
              </div>
              <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{stabx.tag}</p>
              <p className="text-neutral-400 text-[16px] leading-relaxed mb-8 max-w-lg">{stabx.desc}</p>
              <span className={linkClass}>View modules &rarr;</span>
            </div>
            <div className="flex justify-center"><Image src="/stabx.png" alt="StabX" width={340} height={240} className="object-contain" /></div>
          </div>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href={navix.href} className="group block bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <div className="flex items-baseline gap-3 mb-3">
              <h3 className="text-3xl font-semibold tracking-[-0.02em] group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>NaviX</h3>
              <span className="text-[12px] text-neutral-600">in testing</span>
            </div>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{navix.tag}</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">{navix.desc}</p>
            <span className={linkClass}>Join waitlist &rarr;</span>
          </Link>
          <a href={supportbot.href} target="_blank" rel="noopener noreferrer" className="group block bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>SupportBot</h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{supportbot.tag}</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">{supportbot.desc}</p>
            <span className={linkClass}>Open SupportBot &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── V3: Small dot + text, top-right corner of each card ── */
export function Tags3() {
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Products</h2>
        <Link href={stabx.href} className="group block relative bg-[#111] p-10 md:p-14 mb-6" style={{ clipPath: "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>StabX</h3>
              <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{stabx.tag}</p>
              <p className="text-neutral-400 text-[16px] leading-relaxed mb-8 max-w-lg">{stabx.desc}</p>
              <span className={linkClass}>View modules &rarr;</span>
            </div>
            <div className="flex justify-center"><Image src="/stabx.png" alt="StabX" width={340} height={240} className="object-contain" /></div>
          </div>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href={navix.href} className="group block relative bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <div className="absolute top-4 right-12 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
              <span className="text-[11px] text-neutral-600">Testing</span>
            </div>
            <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>NaviX</h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{navix.tag}</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">{navix.desc}</p>
            <span className={linkClass}>Join waitlist &rarr;</span>
          </Link>
          <a href={supportbot.href} target="_blank" rel="noopener noreferrer" className="group block relative bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <div className="absolute top-4 right-12 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
              <span className="text-[11px] text-neutral-600">Live</span>
            </div>
            <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>SupportBot</h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{supportbot.tag}</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">{supportbot.desc}</p>
            <span className={linkClass}>Open SupportBot &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── V4: Status in the subtitle line, merged with tag text ── */
export function Tags4() {
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Products</h2>
        <Link href={stabx.href} className="group block bg-[#111] p-10 md:p-14 mb-6" style={{ clipPath: "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>StabX</h3>
              <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{stabx.tag} · Deployed</p>
              <p className="text-neutral-400 text-[16px] leading-relaxed mb-8 max-w-lg">{stabx.desc}</p>
              <span className={linkClass}>View modules &rarr;</span>
            </div>
            <div className="flex justify-center"><Image src="/stabx.png" alt="StabX" width={340} height={240} className="object-contain" /></div>
          </div>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href={navix.href} className="group block bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>NaviX</h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{navix.tag} · In Testing</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">{navix.desc}</p>
            <span className={linkClass}>Join waitlist &rarr;</span>
          </Link>
          <a href={supportbot.href} target="_blank" rel="noopener noreferrer" className="group block bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>SupportBot</h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{supportbot.tag} · Live</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">{supportbot.desc}</p>
            <span className={linkClass}>Open SupportBot &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── V5: Thin white border tags, all same style, placed above name ── */
export function Tags5() {
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Products</h2>
        <Link href={stabx.href} className="group block bg-[#111] p-10 md:p-14 mb-6" style={{ clipPath: "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-[11px] tracking-wide uppercase text-neutral-500 border border-white/15 px-2.5 py-1 mb-6">Flagship</span>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>StabX</h3>
              <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{stabx.tag}</p>
              <p className="text-neutral-400 text-[16px] leading-relaxed mb-8 max-w-lg">{stabx.desc}</p>
              <span className={linkClass}>View modules &rarr;</span>
            </div>
            <div className="flex justify-center"><Image src="/stabx.png" alt="StabX" width={340} height={240} className="object-contain" /></div>
          </div>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href={navix.href} className="group block bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <span className="inline-block text-[11px] tracking-wide uppercase text-neutral-500 border border-white/15 px-2.5 py-1 mb-6">In Testing</span>
            <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>NaviX</h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{navix.tag}</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">{navix.desc}</p>
            <span className={linkClass}>Join waitlist &rarr;</span>
          </Link>
          <a href={supportbot.href} target="_blank" rel="noopener noreferrer" className="group block bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <span className="inline-block text-[11px] tracking-wide uppercase text-neutral-500 border border-white/15 px-2.5 py-1 mb-6">Live</span>
            <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>SupportBot</h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{supportbot.tag}</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">{supportbot.desc}</p>
            <span className={linkClass}>Open SupportBot &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── V6: No tags for StabX, just dot+text for NaviX/SupportBot below the subtitle ── */
export function Tags6() {
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">Products</h2>
        <Link href={stabx.href} className="group block bg-[#111] p-10 md:p-14 mb-6" style={{ clipPath: "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>StabX</h3>
              <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{stabx.tag}</p>
              <p className="text-neutral-400 text-[16px] leading-relaxed mb-8 max-w-lg">{stabx.desc}</p>
              <span className={linkClass}>View modules &rarr;</span>
            </div>
            <div className="flex justify-center"><Image src="/stabx.png" alt="StabX" width={340} height={240} className="object-contain" /></div>
          </div>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href={navix.href} className="group block bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>NaviX</h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{navix.tag}</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-4">{navix.desc}</p>
            <div className="flex items-center gap-1.5 mb-6">
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
              <span className="text-[12px] text-neutral-600">Currently in closed testing</span>
            </div>
            <span className={linkClass}>Join waitlist &rarr;</span>
          </Link>
          <a href={supportbot.href} target="_blank" rel="noopener noreferrer" className="group block bg-[#111] p-8 md:p-10" style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}>
            <h3 className="text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors" style={{ fontFamily: "var(--font-unbounded)" }}>SupportBot</h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{supportbot.tag}</p>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">{supportbot.desc}</p>
            <span className={linkClass}>Open SupportBot &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
