"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import ContactModal from "./ContactModal";
import { Lang, t } from "@/lib/i18n";
import { useLang } from "@/lib/useLang";
import { useState } from "react";

export default function NaviXContent({ initialLang = "en" }: { initialLang?: Lang }) {
  const [lang, setLang] = useLang(initialLang);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav lang={lang} onLangChange={setLang} />

      {/* ── Hero ── */}
      <section className="pt-[72px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-20 md:pt-28 pb-20 md:pb-28">
          <span className="inline-flex items-center border border-neutral-700 px-3 py-1.5 text-[12px] tracking-wide text-neutral-400 uppercase mb-8">
            {t("navix.inClosedTesting", lang)}
          </span>
          <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-[-0.04em] leading-[0.9] mb-6" style={{ fontFamily: "var(--font-unbounded)" }}>
            NaviX
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-6">
            {t("navix.desc", lang)}
          </p>
          <Link href="/research/naviloc" className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">{t("navix.basedOn", lang)} &rarr;</Link>
        </div>
      </section>

      {/* ── How to use ── */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">{t("navix.howToUse", lang)}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-14">
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
            <div>
              <div className="bg-[#111] p-3 cursor-pointer" onClick={() => setLightboxOpen(true)} style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)" }}>
                <Image src="/navix-ui.png?v=2" alt="NaviX mission interface" width={700} height={420} className="w-full" />
              </div>
              <p className="text-[12px] text-neutral-600 mt-3">{t("navix.uiCaption", lang)}</p>
            </div>

            {lightboxOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-pointer" onClick={() => setLightboxOpen(false)}>
                <Image src="/navix-ui.png?v=2" alt="NaviX mission interface" width={1400} height={840} className="max-w-[90vw] max-h-[90vh] object-contain" />
              </div>
            )}
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
                [t("navix.specs.altitude", lang), "100–1000m"],
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
                [t("navix.specs.platform", lang), "Raspberry Pi 5"],
                [t("stabx.specs.weight", lang), "<100g"],
                [t("stabx.specs.power", lang), "<15W"],
                [t("navix.specs.interface", lang), "UART/USB, MAVLink"],
                [t("navix.specs.mapPrep", lang), t("navix.specs.mapPrepVal", lang)],
                [t("stabx.specs.compatibility", lang), t("stabx.specs.compatibilityVal", lang)],
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
            {t("navix.joinWaitlist", lang)}
          </h2>
          <p className="text-neutral-500 text-[15px] max-w-md mx-auto mb-10">{t("navix.joinDesc", lang)}</p>
          <button onClick={() => setModalOpen(true)} className="inline-flex items-center h-12 px-8 text-[15px] font-medium bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer">
            {t("navix.requestAccess", lang)}
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-white text-black border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Academia" width={24} height={24} className="invert" />
              <span className="text-[15px] font-semibold tracking-[0.04em] uppercase" style={{ fontFamily: "var(--font-unbounded)" }}>
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

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} variant="waitlist" lang={lang} />
    </div>
  );
}
