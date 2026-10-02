import { Lang, t } from "@/lib/i18n";

export const ACADEMIA_CLOUD_URL: Record<Lang, string> = {
  en: "https://theacademia.cloud/en/",
  uk: "https://theacademia.cloud/",
};

export const BETA_BADGE = "inline-block text-[11px] font-medium tracking-wide uppercase text-blue-300 border border-blue-400/30 px-2.5 py-1";

const OPEN_CLOUD: Record<Lang, string> = { en: "Open Cloud", uk: "Відкрити Cloud" };

export default function AcademiaLinkCard({ lang, className = "" }: { lang: Lang; className?: string }) {
  return (
    <a
      href={ACADEMIA_CLOUD_URL[lang]}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col bg-[#111] p-6 md:p-8 lg:p-10 ${className}`}
      style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }}
    >
      <span className={`${BETA_BADGE} self-start mb-6`}>
        {t("products.beta", lang)}
      </span>
      <h3
        className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] mb-3 group-hover:text-neutral-300 transition-colors"
        style={{ fontFamily: "var(--font-unbounded)" }}
      >
        ACADEMIA Link
      </h3>
      <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">
        {t("products.link.tag", lang)}
      </p>
      <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">
        {t("products.link.desc", lang)}
      </p>
      <span className="mt-auto self-start inline-flex items-center text-[14px] font-medium text-white border-b border-white/40 pb-1 group-hover:border-white transition-colors">{OPEN_CLOUD[lang]} &rarr;</span>
    </a>
  );
}
