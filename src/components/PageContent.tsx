import Image from "next/image";
import Link from "next/link";
import UnitMarquee from "./UnitMarquee";
import MobileMenu from "./MobileMenu";
import { Impact1 } from "./ImpactVariants";
import { Research1 } from "./ResearchVariants";
import { Products2 } from "./ProductVariants";

export interface HeroVariant {
  headline: string;
  subtitle: string;
}

const defaultHero: HeroVariant = {
  headline: "UAV innovation\non front lines",
  subtitle: "StabX is the stabilization standard in Ukraine. NaviX navigation is in testing. Compatible with most drones. Defense to industry.",
};

export default function PageContent({ fontLabel, units, hero }: { fontLabel: string; units: string[]; hero?: HeroVariant }) {
  const h = hero ?? defaultHero;
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <a href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Academia" width={28} height={28} className="invert" />
            <span className="text-[17px] font-semibold tracking-[0.04em] uppercase" style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}>
              Academia
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            <a href="#platforms" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Products</a>
            <a href="#impact" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Impact</a>
            <a href="#research" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Research</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center h-9 px-4 text-[13px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200">
            Get in touch
          </a>
          <MobileMenu />
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative flex flex-col" style={{ minHeight: "100svh" }}>
        <div className="relative flex-1 flex items-end lg:items-center overflow-hidden pt-[72px]">
          {/* Drone — desktop: absolute right */}
          <div className="absolute right-[10%] top-0 bottom-0 w-[60%] hidden lg:block">
            <Image src="/drone.png" alt="" fill className="object-contain object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-white from-10% via-white/70 via-35% to-transparent to-70%" />
          </div>
          {/* Drone — mobile/tablet: centered between navbar and text */}
          <div className="absolute left-0 right-0 top-[72px] bottom-[45%] lg:hidden">
            <Image src="/drone.png" alt="" fill className="object-contain object-center" priority />
          </div>
          <div className="relative max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24 pb-12 lg:pb-0 z-[2]">
            {/* Gradient behind text, above drone — mobile only */}
            <div className="absolute -inset-x-6 -bottom-12 -top-32 lg:hidden pointer-events-none -z-[1]" style={{ background: "linear-gradient(to top, white 0%, white 40%, rgba(255,255,255,0.95) 55%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,0.4) 80%, transparent 90%)" }} />
            <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] max-w-4xl text-black">
              {h.headline.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-neutral-500 max-w-xl leading-relaxed font-light">
              {h.subtitle}
            </p>
            <div className="mt-8 md:mt-10">
              <a href="#platforms" className="inline-flex items-center h-11 md:h-12 px-6 md:px-7 text-[14px] md:text-[15px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200">
                Our Products
              </a>
            </div>
          </div>
        </div>
        <UnitMarquee units={units} />
      </section>

      {/* ── Products Section ── */}
      <Products2 />

      {/* ── Impact Section ── */}
      <Impact1 />

      {/* ── Research Section ── */}
      <Research1 />

      {/* ── Footer ── */}
      <footer id="contact" className="bg-white text-black border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Academia" width={24} height={24} className="invert" />
              <span className="text-[15px] font-semibold tracking-[0.04em] uppercase" style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}>
                Academia
              </span>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-8 text-[13px] md:text-[14px] text-neutral-400">
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
