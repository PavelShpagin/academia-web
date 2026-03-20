import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { getLang, t } from "@/lib/i18n";

export const metadata = {
  title: "NaviLoc: Trajectory-Level Visual Localization for GNSS-Denied UAV Navigation — Academia Tech",
  description:
    "NaviLoc matches drone camera images to satellite maps using trajectory-level optimization, achieving 19.5m accuracy without GPS on a Raspberry Pi 5.",
};

export default async function NaviLocPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const lang = getLang(params);
  const q = lang === "uk" ? "?lang=uk" : "";
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <Nav lang={lang} />

      {/* ── Article Header ── */}
      <header className="pt-[72px]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-12 md:pb-16">
          <p className="text-[13px] text-neutral-400 mb-8">{lang === "uk" ? "Січень 2026" : "January 2026"}</p>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] leading-[1.1] text-black mb-6">
            {t("naviloc.title", lang)}
          </h1>

          <p className="text-xl md:text-2xl text-neutral-500 leading-relaxed font-light mb-10">
            {t("naviloc.subtitle", lang)}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pb-10 border-b border-neutral-200">
            <p className="text-[15px] text-neutral-600">Pavel Shpagin, Taras Panchenko</p>
            <span className="text-[13px] text-neutral-400">{t("naviloc.journal", lang)}</span>
            <a
              href="https://www.mdpi.com/2504-446X/10/2/97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-black hover:text-neutral-600 transition-colors duration-200"
            >
              {t("naviloc.fullPaper", lang)}&nbsp;&rarr;
            </a>
          </div>
        </div>
      </header>

      {/* ── Article Body ── */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="space-y-8 text-[17px] leading-[1.8] text-neutral-700">

          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            {t("naviloc.problem", lang)}
          </h2>

          <p>{t("naviloc.problem.p1", lang)}</p>
          <p>{t("naviloc.problem.p2", lang)}</p>
          <p>{t("naviloc.problem.p3", lang)}</p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            {t("naviloc.differently", lang)}
          </h2>

          <p>{t("naviloc.differently.p1", lang)}</p>
          <p>{t("naviloc.differently.p2", lang)}</p>
          <p>{t("naviloc.differently.p3", lang)}</p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            {t("naviloc.stages", lang)}
          </h2>

          <p>
            <strong className="text-black">{t("naviloc.stage1.title", lang)}</strong>{" "}
            {t("naviloc.stage1.desc", lang)}
          </p>

          <p>
            <strong className="text-black">{t("naviloc.stage2.title", lang)}</strong>{" "}
            {t("naviloc.stage2.desc", lang)}
          </p>

          <p>
            <strong className="text-black">{t("naviloc.stage3.title", lang)}</strong>{" "}
            {t("naviloc.stage3.desc", lang)}
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            {t("naviloc.satMap", lang)}
          </h2>

          <p>{t("naviloc.satMap.p1", lang)}</p>
          <p>{t("naviloc.satMap.p2", lang)}</p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            {t("naviloc.results", lang)}
          </h2>

          <p>{t("naviloc.results.intro", lang)}</p>

          <ul className="list-none space-y-4 pl-0">
            {([
              [t("naviloc.results.r1.title", lang), t("naviloc.results.r1.desc", lang)],
              [t("naviloc.results.r2.title", lang), t("naviloc.results.r2.desc", lang)],
              [t("naviloc.results.r3.title", lang), t("naviloc.results.r3.desc", lang)],
              [t("naviloc.results.r4.title", lang), t("naviloc.results.r4.desc", lang)],
            ] as const).map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                <span>
                  <strong className="text-black">{title}</strong>
                  <span className="text-neutral-500"> &mdash; {desc}</span>
                </span>
              </li>
            ))}
          </ul>

          <p>{t("naviloc.results.context", lang)}</p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            {t("naviloc.whyMatters", lang)}
          </h2>

          <p>{t("naviloc.whyMatters.p1", lang)}</p>
          <p>{t("naviloc.whyMatters.p2", lang)}</p>

          <p>
            {t("naviloc.whyMatters.p3", lang)}{" "}
            <Link href={`/navix${q}`} className="text-black font-medium underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors duration-200">
              NaviX
            </Link>
            {t("naviloc.whyMatters.p3b", lang)}
          </p>
        </div>

        {/* ── CTA ── */}
        <div className="mt-20 pt-12 border-t border-neutral-200">
          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            {t("naviloc.cta", lang)}{" "}
            <Link href={`/navix${q}`} className="text-black font-medium underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors duration-200">
              NaviX
            </Link>
            {t("naviloc.ctaB", lang)}
          </p>
          <Link href={`/navix${q}`} className="inline-flex items-center h-12 px-7 text-[15px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200">
            {t("naviloc.learnNavix", lang)}&nbsp;&rarr;
          </Link>
        </div>
      </article>

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
