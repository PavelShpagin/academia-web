"use client";

import { useSyncExternalStore } from "react";
import { Lang, t } from "@/lib/i18n";
import {
  ACADEMIA_LINK_DOWNLOAD_PAGE,
  ACADEMIA_LINK_DOWNLOADS,
  DownloadTarget,
  getAcademiaLinkDownload,
} from "@/lib/academiaLinkDownloads";

const subscribeToPlatform = () => () => {};

export default function AcademiaLinkCard({ lang }: { lang: Lang }) {
  const platform = useSyncExternalStore(
    subscribeToPlatform,
    () => getAcademiaLinkDownload(navigator.userAgent, navigator.platform, navigator.maxTouchPoints).platform,
    () => null,
  );
  const download: DownloadTarget = platform
    ? { href: ACADEMIA_LINK_DOWNLOADS[platform], platform }
    : { href: ACADEMIA_LINK_DOWNLOAD_PAGE, platform: null };

  const ctaKey = download.platform
    ? (`products.link.cta.${download.platform}` as const)
    : "products.link.cta.all";

  return (
    <a
      href={download.href}
      className="group block bg-[#111] p-6 md:p-8 lg:p-10"
      style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }}
    >
      <span className="inline-block text-[11px] font-medium tracking-wide uppercase text-emerald-400/80 border border-emerald-400/30 px-2.5 py-1 mb-6">
        {t("products.live", lang)}
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
      <span className="inline-flex items-center text-[14px] font-medium text-white border-b border-white/40 pb-1 group-hover:border-white transition-colors">
        {t(ctaKey, lang)} &rarr;
      </span>
    </a>
  );
}
