"use client";
import Link from "next/link";
import Nav from "./Nav";
import ContactModal from "./ContactModal";
import { BetaTag, NaviXFooter, Screenshot, naviXShot } from "./NaviXPreviews";
import { Lang, t } from "@/lib/i18n";
import { useLang } from "@/lib/useLang";
import { useState } from "react";

export default function NaviXContent({ initialLang = "en" }: { initialLang?: Lang }) {
  const [lang, setLang] = useLang(initialLang);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav lang={lang} onLangChange={setLang} />

      {/* ── Hero ── */}
      <section className="pt-[72px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-14 md:pt-20 pb-20 md:pb-24 grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 xl:gap-16 items-center">
          <div>
            <BetaTag lang={lang} className="mb-8" />
            <h1 className="text-[clamp(3.5rem,7vw,6rem)] font-bold tracking-[-0.04em] leading-[0.9] mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>
              NaviX
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-8">
              {t("navix.desc", lang)}
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
              <button onClick={() => setModalOpen(true)} className="inline-flex items-center h-12 px-8 text-[15px] font-medium bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer">
                {t("navix.requestAccess", lang)}
              </button>
              <Link href={`/research/naviloc${lang === "uk" ? "?lang=uk" : ""}`} className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">{t("navix.basedOn", lang)} &rarr;</Link>
            </div>
          </div>
          <Screenshot {...naviXShot("corridor", lang)} lang={lang} framed={false} preload sizes="(min-width: 1400px) 700px, (min-width: 1024px) 56vw, 100vw" />
        </div>
      </section>

      {/* ── How to use ── */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">{t("navix.howToUse", lang)}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
            <div>
              <div className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-3">{t("navix.step1.title", lang)}</div>
              <p className="text-[15px] text-neutral-300 leading-relaxed">{t("navix.step1.desc", lang)}</p>
            </div>
            <div>
              <div className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-3">{t("navix.step2.title", lang)}</div>
              <p className="text-[15px] text-neutral-300 leading-relaxed">{t("navix.step2.desc", lang)}</p>
            </div>
            <div>
              <div className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-3">{t("navix.step3.title", lang)}</div>
              <p className="text-[15px] text-neutral-300 leading-relaxed">{t("navix.step3.desc", lang)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specifications ── */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">{t("stabx.specs", lang)}</h2>

          <div className="max-w-3xl">
            <h3 className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-6">{t("navix.specs.performance", lang)}</h3>
            <div className="border-l border-r border-white/10">
              {[
                [t("navix.specs.accuracy", lang), t("navix.specs.accuracyVal", lang)],
                [t("navix.specs.processing", lang), t("navix.specs.processingVal", lang)],
                [t("navix.specs.altitude", lang), t("navix.specs.altitudeVal", lang)],
                [t("navix.specs.speed", lang), t("navix.specs.speedVal", lang)],
                [t("navix.specs.operation", lang), t("navix.specs.operationVal", lang)],
                [t("navix.specs.retraining", lang), t("navix.specs.retrainingVal", lang)],
              ].map(([l, v]) => (
                <div key={l} className="flex justify-between py-4 px-6 border-t border-white/10 last:border-b last:border-white/10 text-[15px]">
                  <span className="text-neutral-500">{l}</span>
                  <span className="text-neutral-200 text-right max-w-sm">{v}</span>
                </div>
              ))}
            </div>

            <h3 className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-6 mt-16">{t("navix.specs.integrationTitle", lang)}</h3>
            <div className="border-l border-r border-white/10">
              {[
                [t("navix.specs.platform", lang), "Raspberry Pi 5, 1GB+ RAM"],
                [t("stabx.specs.weight", lang), "<100g"],
                [t("stabx.specs.power", lang), "<15W"],
                [t("navix.specs.interface", lang), "UART/USB, MAVLink"],
                [t("navix.specs.mapPrep", lang), t("navix.specs.mapPrepVal", lang)],
                [t("stabx.specs.compatibility", lang), t("navix.specs.compatibilityVal", lang)],
              ].map(([l, v]) => (
                <div key={l} className="flex justify-between py-4 px-6 border-t border-white/10 last:border-b last:border-white/10 text-[15px]">
                  <span className="text-neutral-500">{l}</span>
                  <span className="text-neutral-200 text-right max-w-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>
            {t("navix.joinBeta", lang)}
          </h2>
          <p className="text-neutral-500 text-[15px] max-w-md mx-auto mb-10">{t("navix.joinDesc", lang)}</p>
          <button onClick={() => setModalOpen(true)} className="inline-flex items-center h-12 px-8 text-[15px] font-medium bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer">
            {t("navix.requestAccess", lang)}
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <NaviXFooter lang={lang} />

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} variant="waitlist" lang={lang} />
    </div>
  );
}
