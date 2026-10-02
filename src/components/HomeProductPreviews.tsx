import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import AcademiaLinkCard, { BETA_BADGE } from "@/components/AcademiaLinkCard";
import { Lang, t } from "@/lib/i18n";

export const PRODUCT_PREVIEWS = ["grid", "stacked", "feature"] as const;
export type ProductPreview = (typeof PRODUCT_PREVIEWS)[number];

export function parseProductPreview(value: string | string[] | undefined): ProductPreview | null {
  return PRODUCT_PREVIEWS.find((p) => p === value) ?? null;
}

const LABELS = {
  preview: { en: "Preview", uk: "Перегляд" },
  grid: { en: "Grid", uk: "Сітка" },
  stacked: { en: "Stacked", uk: "Ряди" },
  feature: { en: "Feature", uk: "Акцент" },
  current: { en: "Current", uk: "Поточний" },
  navixImage: { en: "NaviX mission planning interface", uk: "Інтерфейс планування місії NaviX" },
} satisfies Record<string, Record<Lang, string>>;

const FLAGSHIP_BADGE = "inline-block text-[11px] font-medium tracking-wide uppercase text-emerald-400/80 border border-emerald-400/30 px-2.5 py-1";
const LIVE_BADGE = FLAGSHIP_BADGE;
const cut = (px: number) => ({ clipPath: `polygon(0 0, calc(100% - ${px}px) 0, 100% ${px}px, 100% 100%, 0 100%)` });
const withLang = (path: string, lang: Lang) => `${path}${lang === "uk" ? "?lang=uk" : ""}`;

/* ── Shared card pieces ── */

function CardLink({ href, external, corner = 20, className = "", children }: { href: string; external?: boolean; corner?: number; className?: string; children: ReactNode }) {
  const classes = `group flex flex-col bg-[#111] ${className}`;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={cut(corner)}>{children}</a>
  ) : (
    <Link href={href} className={classes} style={cut(corner)}>{children}</Link>
  );
}

function CardText({ badge, badgeClass, title, tag, desc, cta, large }: { badge: string; badgeClass: string; title: string; tag: string; desc: string; cta: string; large?: boolean }) {
  return (
    <div className="flex flex-1 flex-col">
      <span className={`${badgeClass} self-start mb-6`}>{badge}</span>
      <h3
        className={`${large ? "text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]" : "text-2xl md:text-3xl tracking-[-0.02em]"} font-semibold mb-3 group-hover:text-neutral-300 transition-colors`}
        style={{ fontFamily: "var(--font-unbounded)" }}
      >
        {title}
      </h3>
      <p className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{tag}</p>
      <p className={`text-neutral-400 ${large ? "text-[16px] max-w-lg" : "text-[15px]"} leading-relaxed mb-8`}>{desc}</p>
      <span className="mt-auto self-start inline-flex items-center text-[14px] font-medium text-white border-b border-white/40 pb-1 group-hover:border-white transition-colors">{cta} &rarr;</span>
    </div>
  );
}

function StabXImage({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image src="/stabx.png" alt="StabX" fill sizes="(min-width: 1024px) 560px, 90vw" className="object-contain p-6" />
    </div>
  );
}

function NaviXImage({ lang, className = "" }: { lang: Lang; className?: string }) {
  return (
    <div className={`relative aspect-[16/10] overflow-hidden border border-white/10 ${className}`}>
      <Image src="/navix-corridor-kharkiv.jpg" alt={LABELS.navixImage[lang]} fill sizes="(min-width: 1024px) 640px, 90vw" className="object-cover" />
    </div>
  );
}

const stabxText = (lang: Lang, large?: boolean) => (
  <CardText large={large} badge={t("products.flagship", lang)} badgeClass={FLAGSHIP_BADGE} title="StabX" tag={t("products.stabx.tag", lang)} desc={t("products.stabx.desc", lang)} cta={t("products.stabx.cta", lang)} />
);

const navixText = (lang: Lang) => (
  <CardText badge={t("products.openBeta", lang)} badgeClass={BETA_BADGE} title="NaviX" tag={t("products.navix.tag", lang)} desc={t("products.navix.desc", lang)} cta={t("products.navix.cta", lang)} />
);

function SupportBotCard({ lang, href, className = "" }: { lang: Lang; href: string; className?: string }) {
  return (
    <CardLink href={href} external className={`p-6 md:p-8 lg:p-10 ${className}`}>
      <CardText badge={t("products.live", lang)} badgeClass={LIVE_BADGE} title="SupportBot" tag={t("products.supportbot.tag", lang)} desc={t("products.supportbot.desc", lang)} cta={t("products.supportbot.cta", lang)} />
    </CardLink>
  );
}

/* ── Preview selector ── */

export function PreviewSelector({ lang, active }: { lang: Lang; active: ProductPreview | null }) {
  const options: { key: ProductPreview | null; label: string }[] = [
    ...PRODUCT_PREVIEWS.map((key) => ({ key, label: LABELS[key][lang] })),
    { key: null, label: LABELS.current[lang] },
  ];
  return (
    <nav aria-label={LABELS.preview[lang]} className="mb-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-medium tracking-wide uppercase">
      <span className="text-neutral-600">{LABELS.preview[lang]}</span>
      {options.map(({ key, label }) => {
        const query = new URLSearchParams({ ...(key && { preview: key }), lang }).toString();
        const isActive = key === active;
        return (
          <Link
            key={label}
            href={`/?${query}#platforms`}
            aria-current={isActive ? "page" : undefined}
            className={`border-b pb-0.5 transition-colors ${isActive ? "text-white border-white" : "text-neutral-500 border-transparent hover:text-white"}`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

/* ── Layouts ── */

type LayoutProps = { lang: Lang; supportbotUrl: string };

/* Balanced 2×2: StabX + NaviX with matching media, Link + SupportBot below. */
function GridLayout({ lang, supportbotUrl }: LayoutProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CardLink href={withLang("/stabx", lang)} className="p-6 md:p-8 lg:p-10">
        <StabXImage className="aspect-[16/10] mb-8 bg-black/40" />
        {stabxText(lang)}
      </CardLink>
      <CardLink href={withLang("/navix", lang)} className="p-6 md:p-8 lg:p-10">
        <NaviXImage lang={lang} className="mb-8" />
        {navixText(lang)}
      </CardLink>
      <AcademiaLinkCard lang={lang} />
      <SupportBotCard lang={lang} href={supportbotUrl} />
    </div>
  );
}

/* Current wide StabX lead, a wide NaviX row with screenshot, then Link + SupportBot. */
function StackedLayout({ lang, supportbotUrl }: LayoutProps) {
  return (
    <div className="space-y-6">
      <CardLink href={withLang("/stabx", lang)} corner={24} className="p-6 md:p-10 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {stabxText(lang, true)}
          <div className="flex justify-center">
            <Image src="/stabx.png" alt="StabX" width={340} height={240} className="object-contain max-w-[240px] md:max-w-[340px]" />
          </div>
        </div>
      </CardLink>
      <CardLink href={withLang("/navix", lang)} corner={24} className="p-6 md:p-10 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-8 lg:gap-12 items-center">
          <NaviXImage lang={lang} />
          {navixText(lang)}
        </div>
      </CardLink>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AcademiaLinkCard lang={lang} />
        <SupportBotCard lang={lang} href={supportbotUrl} />
      </div>
    </div>
  );
}

/* Asymmetric: large StabX beside a medium NaviX card, compact companions below. */
function FeatureLayout({ lang, supportbotUrl }: LayoutProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-6">
        <CardLink href={withLang("/stabx", lang)} corner={24} className="p-6 md:p-10 lg:p-12">
          <StabXImage className="min-h-[220px] md:min-h-[280px] lg:min-h-[240px] grow-3 mb-8" />
          {stabxText(lang, true)}
        </CardLink>
        <CardLink href={withLang("/navix", lang)} className="p-6 md:p-8 lg:p-10">
          <NaviXImage lang={lang} className="mb-8" />
          {navixText(lang)}
        </CardLink>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AcademiaLinkCard lang={lang} />
        <SupportBotCard lang={lang} href={supportbotUrl} />
      </div>
    </div>
  );
}

const LAYOUTS: Record<ProductPreview, (props: LayoutProps) => ReactNode> = {
  grid: GridLayout,
  stacked: StackedLayout,
  feature: FeatureLayout,
};

export default function HomeProductPreviews({ preview, lang, supportbotUrl }: LayoutProps & { preview: ProductPreview }) {
  const Layout = LAYOUTS[preview];
  return (
    <section id="platforms" className="bg-black text-white py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <PreviewSelector lang={lang} active={preview} />
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-20">{t("products.title", lang)}</h2>
        <Layout lang={lang} supportbotUrl={supportbotUrl} />
      </div>
    </section>
  );
}
