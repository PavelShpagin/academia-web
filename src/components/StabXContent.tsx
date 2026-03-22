"use client";
import Image from "next/image";
import Nav from "./Nav";
import { Lang, t } from "@/lib/i18n";
import { useLang } from "@/lib/useLang";

export default function StabXContent({ initialLang = "en" }: { initialLang?: Lang }) {
  const [lang, setLang] = useLang(initialLang);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav lang={lang} onLangChange={setLang} />

      {/* ── Hero + Modules ── */}
      <section className="pt-[72px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-20 md:pt-28 pb-28 md:pb-40">
          <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-[-0.04em] leading-[0.9] mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>
            StabX
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-16">
            {t("stabx.desc", lang)}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                name: "StabX Day",
                desc: t("stabx.day.desc", lang),
                camera: t("stabx.camera.visible", lang),
                buyUrl: "https://market-brave1.delta.mil.gov.ua/modul-optychnoi-stabilizatsii/4710/",
                icon: "day" as const,
                img: "/stabx-day.png",
              },
              {
                name: "StabX Night",
                desc: t("stabx.night.desc", lang),
                camera: t("stabx.camera.thermal", lang),
                buyUrl: "https://market-brave1.delta.mil.gov.ua/modul-optychnoi-stabilizatsii/4646/",
                icon: "night" as const,
                img: "/stabx.png",
              },
              {
                name: "StabX Day+Night",
                desc: t("stabx.daynight.desc", lang),
                camera: t("stabx.camera.both", lang),
                buyUrl: null,
                img: "/day-night.png",
                icon: "both" as const,
              },
              {
                name: "StabX License",
                desc: t("stabx.license.desc", lang),
                camera: null,
                buyUrl: "https://market-brave1.delta.mil.gov.ua/soft/2435/",
                icon: null,
                img: null,
              },
            ].map((mod) => (
              <div key={mod.name} className="relative bg-[#161616] p-6 md:p-8 pb-8 md:pb-10" style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)" }}>
                {mod.icon && (
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-6 opacity-10 pointer-events-none">
                  {mod.icon === "day" && (
                    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  )}
                  {mod.icon === "night" && (
                    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                  {mod.icon === "both" && (
                    <div className="flex gap-2">
                      <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                      <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                    </div>
                  )}
                </div>
                )}
                {mod.img ? (
                <div className="flex items-center justify-center py-8 mb-6">
                  <Image src={mod.img} alt={mod.name} width={200} height={150} className="object-contain" />
                </div>
                ) : null}
                <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-2" style={{ fontFamily: "var(--font-unbounded)" }}>{mod.name}</h3>
                <p className="text-neutral-400 text-[15px] mb-6">{mod.desc}</p>
                {mod.camera && (
                <div className="flex justify-between py-3 border-t border-white/10 text-[14px]">
                  <span className="text-neutral-500">{t("stabx.camera", lang)}</span>
                  <span className="text-neutral-200">{mod.camera}</span>
                </div>
                )}
                {mod.buyUrl ? (
                  <a
                    href={mod.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-6 text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
                  >
                    {t("stabx.buyBrave1", lang)} &rarr;
                  </a>
                ) : (
                  <div className="mt-6 h-[21px]" />
                )}

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specifications ── */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">{t("stabx.specs", lang)}</h2>

          <div className="max-w-3xl">
            <h3 className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-6">{t("stabx.specs.navAutonomy", lang)}</h3>
            <div className="border-l border-r border-white/10">
              {[
                [t("stabx.specs.stabilization", lang), t("stabx.specs.stabilizationVal", lang)],
                [t("stabx.specs.drift", lang), "<1° per 5 min"],
                [t("stabx.specs.rtl", lang), t("stabx.specs.rtlVal", lang)],
                [t("stabx.specs.returnError", lang), t("stabx.specs.returnErrorVal", lang)],
                [t("stabx.specs.integration", lang), t("stabx.specs.integrationVal", lang)],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-4 px-6 border-t border-white/10 last:border-b last:border-white/10 text-[15px]">
                  <span className="text-neutral-500">{label}</span>
                  <span className="text-neutral-200 text-right max-w-sm">{value}</span>
                </div>
              ))}
            </div>

            <h3 className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-6 mt-16">{t("stabx.specs.altDev", lang)}</h3>
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

            <h3 className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-6 mt-16">{t("stabx.specs.hardware", lang)}</h3>
            <div className="border-l border-r border-white/10">
              {[
                [t("stabx.specs.workingAlt", lang), "50–1000m"],
                [t("stabx.specs.weight", lang), "<100g"],
                [t("stabx.specs.power", lang), "<15W"],
                [t("stabx.specs.security", lang), t("stabx.specs.securityVal", lang)],
                [t("stabx.specs.compatibility", lang), t("stabx.specs.compatibilityVal", lang)],
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
            {t("stabx.cta", lang).split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:sales@theacademia.tech" className="inline-flex items-center h-12 px-8 text-[15px] font-medium bg-white text-black hover:bg-neutral-200 transition-colors duration-200">
              {t("stabx.contactSales", lang)}
            </a>
            <a href="mailto:business@theacademia.tech" className="inline-flex items-center h-12 px-8 text-[15px] font-medium border border-neutral-600 text-white hover:border-white transition-colors duration-200">
              {t("stabx.businessInquiries", lang)}
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
            <p className="text-[13px] text-neutral-400">{t("footer.rights", lang)}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
