"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import UnitMarquee from "./UnitMarquee";
import Nav from "./Nav";
import { Impact1 } from "./ImpactVariants";
import { Research1 } from "./ResearchVariants";
import { Products2 } from "./ProductVariants";
import { Lang, t } from "@/lib/i18n";

export interface HeroVariant {
  headline: string;
  subtitle: string;
}

export default function PageContent({ units, initialLang = "en" }: { units: string[]; initialLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const supportbotUrl = `https://supportbot.info${lang === "uk" ? "?lang=uk" : ""}`;

  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <Nav lang={lang} onLangChange={setLang} />

      {/* ── Hero ── */}
      <section className="relative flex flex-col" style={{ minHeight: "100svh" }}>
        <div className="relative flex-1 flex items-end lg:items-center overflow-hidden pt-[72px]">
          <div className="absolute right-[6%] top-[6%] bottom-[6%] w-[53%] hidden lg:block xl:right-[8%] xl:top-[8%] xl:bottom-[8%] xl:w-[48%] 2xl:right-[12%] 2xl:top-[12%] 2xl:bottom-[12%] 2xl:w-[42%]">
            <Image src="/drone.png" alt="" fill className="object-contain object-center opacity-90" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-white from-5% via-white/50 via-25% to-transparent to-55%" />
          </div>
          <div className="absolute left-[5%] right-[5%] top-[72px] bottom-[45%] lg:hidden pointer-events-none">
            <Image src="/drone.png" alt="" fill className="object-contain object-center opacity-90" priority />
          </div>
          <div className="relative max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24 pb-12 lg:pb-0 z-[2]">
            <div className="absolute -inset-x-6 -bottom-12 -top-40 lg:hidden pointer-events-none -z-[1]" style={{ background: "linear-gradient(to top, white 0%, white 35%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.7) 65%, rgba(255,255,255,0.3) 80%, transparent 90%)" }} />
            <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] max-w-4xl text-black">
              {t("hero.headline", lang).split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-neutral-500 max-w-xl leading-relaxed font-light">
              {t("hero.subtitle", lang)}
            </p>
            <div className="mt-8 md:mt-10">
              <a href="#platforms" className="inline-flex items-center h-11 md:h-12 px-6 md:px-7 text-[14px] md:text-[15px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200">
                {t("hero.cta", lang)}
              </a>
            </div>
          </div>
        </div>
        <UnitMarquee units={units} />
      </section>

      {/* ── Products Section ── */}
      <Products2 lang={lang} supportbotUrl={supportbotUrl} />

      {/* ── Impact Section ── */}
      <Impact1 lang={lang} />

      {/* ── Research Section ── */}
      <Research1 lang={lang} />

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
            <p className="text-[13px] text-neutral-400">{t("footer.rights", lang)}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
