import Image from "next/image";
import Link from "next/link";
import UnitMarquee from "./UnitMarquee";
import { Impact1 } from "./ImpactVariants";
import { Research1 } from "./ResearchVariants";
import { Products1, Products2, Products3, Products4, Products5, Products6, Products7, Products8, Products9, Products10 } from "./ProductVariants";

export interface HeroVariant {
  headline: string;
  subtitle: string;
}

const defaultHero: HeroVariant = {
  headline: "UAV innovation\non front lines",
  subtitle: "StabX is the stabilization standard in Ukraine. NaviX navigation is in testing. Compatible with most drones. Defense to industry.",
};

const productComponents = [Products1, Products2, Products3, Products4, Products5, Products6, Products7, Products8, Products9, Products10];

export default function PageContent({ fontLabel, units, hero, productVariant }: { fontLabel: string; units: string[]; hero?: HeroVariant; productVariant?: number }) {
  const h = hero ?? defaultHero;
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/60">
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
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative flex flex-col" style={{ minHeight: "100svh" }}>
        <div className="relative flex-1 flex items-center overflow-hidden pt-[72px]">
          <div className="absolute right-[10%] top-0 bottom-0 w-[60%] hidden lg:block">
            <Image src="/drone.png" alt="" fill className="object-contain object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-white from-10% via-white/70 via-35% to-transparent to-70%" />
          </div>
          <div className="relative max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24">
            <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] max-w-4xl text-black">
              {h.headline.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-neutral-500 max-w-xl leading-relaxed font-light">
              {h.subtitle}
            </p>
            <div className="mt-10">
              <a href="#platforms" className="inline-flex items-center h-12 px-7 text-[15px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200">
                Our Products
              </a>
            </div>
          </div>
        </div>
        <UnitMarquee units={units} />
      </section>

      {/* ── Products Section ── */}
      {(() => {
        const ProductComponent = productComponents[(productVariant ?? 1) - 1] ?? Products1;
        return <ProductComponent />;
      })()}

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
            <div className="flex flex-wrap gap-8 text-[14px] text-neutral-400">
              <a href="mailto:business@theacademia.tech" className="hover:text-black transition-colors duration-200">business@theacademia.tech</a>
              <a href="mailto:sales@theacademia.tech" className="hover:text-black transition-colors duration-200">sales@theacademia.tech</a>
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
