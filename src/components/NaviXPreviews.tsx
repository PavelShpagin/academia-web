"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import ContactModal from "./ContactModal";
import { Lang, t } from "@/lib/i18n";
import { useLang } from "@/lib/useLang";
import { useCallback, useEffect, useRef, useState } from "react";

export type NaviXPreviewVariant = "split" | "wide" | "workflow";

const UNBOUNDED = { fontFamily: "var(--font-unbounded)" };
const cut = (px: number) => ({ clipPath: `polygon(0 0, calc(100% - ${px}px) 0, 100% ${px}px, 100% 100%, 0 100%)` });
const container = "max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24";

const copy = {
  en: {
    enlarge: "Enlarge",
    close: "Close",
    variantLabel: "Page variant",
    current: "Current",
    circle: "Circle",
    corridor: "Corridor",
    shotModeLabel: "Map coverage mode",
    circleAlt: "NaviX web interface: circular map coverage on satellite imagery with the mission route and start point",
    circleCaption: "Circle coverage with the mission route and start point. English interface, demo data.",
    corridorAlt: "NaviX web interface: corridor map coverage on satellite imagery with the mission route and start point",
    corridorCaption: "Corridor coverage with the mission route and start point.",
    step1: "On the ground, with internet: choose a radius or a corridor along the route and download the satellite map. It must cover the return too.",
    step2: "After takeoff, NaviX compares the camera view with the stored map, fully onboard and without internet. The first fix may take up to about 2.5 km of flight.",
    step3: "NaviX sends regular position corrections to the autopilot and removes the drift that builds up on longer routes and on the way home.",
    keyTitle: "What the screenshot shows",
    key1: ["Drone status", "Connection, session state and the switch for GPS correction from NaviX."],
    key2: ["Map settings", "Import the autopilot mission, set a coverage radius or corridor points, then create the map."],
    key3: ["Satellite map", "The mission route the map has to cover, from the start point and back."],
    beforeFlight: "Before flight",
    inFlight: "In flight",
    ch1Title: "Start from the mission",
    ch1: "Connect to the drone’s web interface from anywhere with internet. NaviX can take the route and start point directly from the autopilot mission, so the map is built around where you actually plan to fly.",
    ch2Title: "Store a map that covers the route",
    ch2: "Choose a radius around one point, or a corridor of circles along the route points. The map is downloaded once, stored on board and can be reused for later flights. Make sure it covers the whole flight, including the return.",
    ch3Title: "Position from the camera",
    ch3: "NaviX matches the camera view to the stored map on a Raspberry Pi 5, with no internet and no GPU. The first fix may take up to about 2.5 km of flight; after that it sends regular position corrections to the autopilot.",
    pairTitle: "NaviX with StabX",
    pairStabx: "Stabilises the aircraft and tracks its movement relative to the ground. On its own, small errors add up over distance.",
    pairNavix: "Ties that movement to the satellite map and corrects the accumulated drift, keeping longer routes and the return on track.",
    aboutStabx: "About StabX",
    orEmail: "or write to",
  },
  uk: {
    enlarge: "Збільшити",
    close: "Закрити",
    variantLabel: "Варіант сторінки",
    current: "Current",
    circle: "Радіус",
    corridor: "Коридор",
    shotModeLabel: "Режим покриття карти",
    circleAlt: "Веб-інтерфейс NaviX: кругове покриття карти на супутниковому знімку з маршрутом місії та точкою старту",
    circleCaption: "Покриття радіусом з маршрутом місії та точкою старту. Англійський інтерфейс, демонстраційні дані.",
    corridorAlt: "Веб-інтерфейс NaviX: покриття карти коридором на супутниковому знімку з маршрутом місії та точкою старту",
    corridorCaption: "Покриття коридором з маршрутом місії та точкою старту.",
    step1: "На землі, з інтернетом: оберіть радіус або коридор уздовж маршруту та завантажте супутникову карту. Вона має покривати й повернення.",
    step2: "Після зльоту NaviX зіставляє зображення камери зі збереженою картою — повністю на борту, без інтернету. Перше визначення позиції може потребувати до 2,5 км польоту.",
    step3: "NaviX регулярно передає корекції позиції в автопілот і усуває дрейф, що накопичується на довгих маршрутах і під час повернення.",
    keyTitle: "Що на знімку екрана",
    key1: ["Стан дрона", "З’єднання, стан сесії та перемикач корекції GPS від NaviX."],
    key2: ["Налаштування карти", "Імпорт місії автопілота, радіус покриття або точки коридору, створення карти."],
    key3: ["Супутникова карта", "Маршрут місії, який має покривати карта, від точки старту й назад."],
    beforeFlight: "Перед польотом",
    inFlight: "У польоті",
    ch1Title: "Почніть з місії",
    ch1: "Під’єднайтеся до веб-інтерфейсу дрона будь-де з інтернетом. NaviX може взяти маршрут і точку старту безпосередньо з місії автопілота, тож карта будується саме там, де ви плануєте летіти.",
    ch2Title: "Збережіть карту, що покриває маршрут",
    ch2: "Оберіть радіус навколо однієї точки або коридор із зон уздовж точок маршруту. Карта завантажується один раз, зберігається на борту й може використовуватися повторно. Вона має покривати весь політ, включно з поверненням.",
    ch3Title: "Позиція з камери",
    ch3: "NaviX зіставляє зображення камери зі збереженою картою на Raspberry Pi 5 — без інтернету та без GPU. Перше визначення позиції може потребувати до 2,5 км польоту; далі NaviX регулярно передає корекції позиції в автопілот.",
    pairTitle: "NaviX разом зі StabX",
    pairStabx: "Стабілізує борт і відстежує його рух відносно землі. Сам по собі цей рух накопичує похибку з відстанню.",
    pairNavix: "Прив’язує цей рух до супутникової карти та виправляє накопичений дрейф, утримуючи борт на довгих маршрутах і під час повернення.",
    aboutStabx: "Про StabX",
    orEmail: "або напишіть на",
  },
} satisfies Record<Lang, Record<string, string | string[]>>;

type Copy = (typeof copy)["en"];

export type NaviXShotMode = "circle" | "corridor";

export function naviXShot(which: NaviXShotMode, lang: Lang) {
  const c = copy[lang];
  return which === "circle"
    ? { src: "/navix-circle-kharkiv.jpg", alt: c.circleAlt, caption: c.circleCaption }
    : { src: "/navix-corridor-kharkiv-trajectory.jpg", alt: c.corridorAlt, caption: c.corridorCaption };
}

/* ── Shared pieces ── */

export function BetaTag({ lang, className = "" }: { lang: Lang; className?: string }) {
  return (
    <span className={`inline-flex items-center border border-blue-400/30 px-3 py-1.5 text-[12px] font-medium tracking-wide text-blue-300 uppercase ${className}`}>
      {t("navix.openBeta", lang)}
    </span>
  );
}

export function Screenshot({
  src, alt, caption, lang, cutPx = 24, sizes = "(min-width: 1024px) 60vw, 100vw", preload = false, frameClassName = "p-2 md:p-3", framed = true,
}: {
  src: string; alt: string; caption?: string; lang: Lang; cutPx?: number; sizes?: string; preload?: boolean; frameClassName?: string; framed?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const c = copy[lang];

  // Native modal dialog: the browser traps focus, makes the page inert and closes on Escape.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    if (!dialog.open) dialog.showModal();
    closeRef.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const close = useCallback(() => dialogRef.current?.close(), []);
  const onDialogClose = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <figure>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${c.enlarge}: ${alt}`}
        className={`block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white ${framed ? `bg-[#111] ${frameClassName}` : ""}`}
        style={framed ? cut(cutPx) : undefined}
      >
        <Image src={src} alt="" width={1920} height={1200} sizes={sizes} preload={preload} className="w-full h-auto block" />
      </button>
      <figcaption className="mt-3 text-[12px] text-neutral-500 leading-relaxed">
        {caption}
      </figcaption>

      <dialog
        ref={dialogRef}
        aria-label={alt}
        onClose={onDialogClose}
        onClick={close}
        className="fixed inset-0 m-0 w-screen h-dvh max-w-none max-h-none p-0 border-0 bg-black/95 text-white open:flex flex-col backdrop:bg-black/80"
      >
        {open && (<>
          <div className="flex justify-end p-4 md:p-6">
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="inline-flex items-center h-10 px-4 text-[13px] font-medium bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              {c.close} <span aria-hidden="true" className="ml-2">&times;</span>
            </button>
          </div>
          <div className="flex-1 min-h-0 flex items-center justify-center px-3 md:px-8 pb-6 md:pb-10">
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1200}
              sizes="100vw"
              className="max-w-full max-h-[calc(100dvh-7rem)] w-auto h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </>)}
      </dialog>
    </figure>
  );
}

export function ScreenshotChooser({ lang, sizes, preload = false }: { lang: Lang; sizes?: string; preload?: boolean }) {
  const [mode, setMode] = useState<NaviXShotMode>("corridor");
  const c = copy[lang];
  return (
    <div>
      <div role="group" aria-label={c.shotModeLabel} className="flex gap-2 mb-4">
        {(["circle", "corridor"] as const).map((m) => (
          <button
            key={m}
            type="button"
            aria-pressed={mode === m}
            onClick={() => setMode(m)}
            className={`h-9 px-4 text-[13px] font-medium border transition-colors cursor-pointer ${mode === m ? "border-white text-white" : "border-white/15 text-neutral-500 hover:text-white hover:border-white/40"}`}
          >
            {c[m]}
          </button>
        ))}
      </div>
      <Screenshot key={mode} {...naviXShot(mode, lang)} lang={lang} frameClassName="p-2 md:p-3" sizes={sizes} preload={preload} />
    </div>
  );
}

export function NaviXFooter({ lang }: { lang: Lang }) {
  return (
    <footer className="bg-white text-black border-t border-neutral-200">
      <div className={`${container} py-16 md:py-20`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Academia" width={24} height={24} className="invert" />
            <span className="text-[15px] font-semibold tracking-[0.04em] uppercase" style={UNBOUNDED}>
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
  );
}

function VariantSwitcher({ variant, lang }: { variant: NaviXPreviewVariant; lang: Lang }) {
  const q = lang === "uk" ? "&lang=uk" : "";
  const items: [string, string, boolean][] = [
    ["Split", `/navix?preview=split${q}`, variant === "split"],
    ["Wide", `/navix?preview=wide${q}`, variant === "wide"],
    ["Workflow", `/navix?preview=workflow${q}`, variant === "workflow"],
    [copy[lang].current, `/navix${lang === "uk" ? "?lang=uk" : ""}`, false],
  ];
  return (
    <div className="border-b border-white/10">
      <div className={`${container} flex flex-wrap items-center gap-x-5 gap-y-2 py-3 text-[12px]`}>
        <span className="text-neutral-600 uppercase tracking-wide">{copy[lang].variantLabel}</span>
        {items.map(([label, href, active]) => (
          <Link
            key={label}
            href={href}
            aria-current={active ? "page" : undefined}
            className={active ? "text-white border-b border-white pb-0.5" : "text-neutral-500 hover:text-white transition-colors pb-0.5"}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SpecRows({ rows }: { rows: string[][] }) {
  return (
    <div className="border-l border-r border-white/10">
      {rows.map(([l, v]) => (
        <div key={l} className="flex justify-between gap-6 py-4 px-5 md:px-6 border-t border-white/10 last:border-b last:border-white/10 text-[15px]">
          <span className="text-neutral-500 shrink-0">{l}</span>
          <span className="text-neutral-200 text-right">{v}</span>
        </div>
      ))}
    </div>
  );
}

function performanceRows(lang: Lang) {
  return [
    [t("navix.specs.accuracy", lang), t("navix.specs.accuracyVal", lang)],
    [t("navix.specs.altitude", lang), t("navix.specs.altitudeVal", lang)],
    [t("navix.specs.speed", lang), t("navix.specs.speedVal", lang)],
    [t("navix.specs.operation", lang), t("navix.specs.operationVal", lang)],
  ];
}

function integrationRows(lang: Lang) {
  return [
    [t("navix.specs.platform", lang), "Raspberry Pi 5, 1GB+ RAM"],
    [t("navix.specs.processing", lang), t("navix.specs.processingVal", lang)],
    [t("stabx.specs.compatibility", lang), t("navix.specs.compatibilityVal", lang)],
    [t("navix.specs.interface", lang), "UART/USB, MAVLink"],
    [t("navix.specs.mapPrep", lang), t("navix.specs.mapPrepVal", lang)],
  ];
}

function steps(lang: Lang, c: Copy) {
  return [
    [t("navix.step1.title", lang), c.step1],
    [t("navix.step2.title", lang), c.step2],
    [t("navix.step3.title", lang), c.step3],
  ];
}

function AccessButton({ lang, onClick }: { lang: Lang; onClick: () => void }) {
  return (
    <button onClick={onClick} className="inline-flex items-center h-12 px-8 text-[15px] font-medium bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer">
      {t("navix.requestAccess", lang)}
    </button>
  );
}

function ResearchLink({ lang }: { lang: Lang }) {
  return (
    <Link href={`/research/naviloc${lang === "uk" ? "?lang=uk" : ""}`} className="text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">
      {t("navix.basedOn", lang)} &rarr;
    </Link>
  );
}

function ContactSection({ lang, c, onOpen }: { lang: Lang; c: Copy; onOpen: () => void }) {
  return (
    <section id="contact" className="border-t border-white/10">
      <div className={`${container} py-24 md:py-32 text-center`}>
        <BetaTag lang={lang} className="mb-8" />
        <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] mb-6" style={UNBOUNDED}>
          {t("navix.joinBeta", lang)}
        </h2>
        <p className="text-neutral-500 text-[15px] max-w-md mx-auto mb-10">{t("navix.joinDesc", lang)}</p>
        <AccessButton lang={lang} onClick={onOpen} />
        <p className="text-[13px] text-neutral-600 mt-6">
          {c.orEmail}{" "}
          <a href="mailto:business@theacademia.tech" className="text-neutral-400 hover:text-white transition-colors">business@theacademia.tech</a>
        </p>
      </div>
    </section>
  );
}

/* ── Variants ── */

function SplitVariant({ lang, c, onOpen }: { lang: Lang; c: Copy; onOpen: () => void }) {
  const mission = naviXShot("circle", lang);
  return (
    <>
      <section>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-14 md:pt-20 pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] gap-12 lg:gap-16 items-center">
            <div className="lg:pl-12">
              <BetaTag lang={lang} className="mb-8" />
              <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold tracking-[-0.04em] leading-[0.9] mb-6" style={UNBOUNDED}>
                NaviX
              </h1>
              <p className="text-[17px] text-neutral-400 leading-relaxed mb-10 max-w-xl">{t("navix.desc", lang)}</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
                <AccessButton lang={lang} onClick={onOpen} />
                <ResearchLink lang={lang} />
              </div>
            </div>
            <Screenshot {...mission} lang={lang} preload sizes="(min-width: 1024px) 62vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={`${container} py-24 md:py-32`}>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-16">{t("navix.howToUse", lang)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps(lang, c).map(([title, desc]) => (
              <div key={title} className="bg-[#111] p-8 md:p-10" style={cut(16)}>
                <div className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-4">{title}</div>
                <p className="text-[15px] text-neutral-300 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={`${container} py-24 md:py-32`}>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-16">{t("stabx.specs", lang)}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-6">{t("navix.specs.performance", lang)}</h3>
              <SpecRows rows={performanceRows(lang)} />
            </div>
            <div>
              <h3 className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-6">{t("navix.specs.integrationTitle", lang)}</h3>
              <SpecRows rows={integrationRows(lang)} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function WideVariant({ lang, c }: { lang: Lang; c: Copy }) {
  const mission = naviXShot("circle", lang);
  const keys = [c.key1, c.key2, c.key3];
  return (
    <>
      <section>
        <div className={`${container} pt-16 md:pt-24 pb-14 md:pb-16`}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-10 lg:gap-20 items-end">
            <div>
              <BetaTag lang={lang} className="mb-8" />
              <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-[-0.04em] leading-[0.9]" style={UNBOUNDED}>
                NaviX
              </h1>
            </div>
            <div>
              <p className="text-[17px] text-neutral-400 leading-relaxed mb-6">{t("navix.desc", lang)}</p>
              <ResearchLink lang={lang} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1600px] mx-auto px-3 md:px-8 pb-20 md:pb-28">
          <Screenshot {...mission} lang={lang} preload cutPx={32} sizes="(min-width: 1600px) 1600px, 100vw" frameClassName="p-1.5 md:p-2" />
          <div className="px-3 md:px-4 lg:px-16 mt-12">
            <h2 className="text-[13px] font-medium tracking-wide uppercase text-neutral-500 mb-6">{c.keyTitle}</h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {keys.map(([title, desc], i) => (
                <li key={title} className="flex gap-4">
                  <span className="shrink-0 w-6 h-6 inline-flex items-center justify-center border border-[#3b5bdb]/70 text-[11px] font-semibold text-[#a9bcff]" aria-hidden="true">{i + 1}</span>
                  <div>
                    <div className="text-[15px] font-medium text-neutral-200 mb-1">{title}</div>
                    <p className="text-[14px] text-neutral-500 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={`${container} py-24 md:py-32`}>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-16">{t("navix.howToUse", lang)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {steps(lang, c).map(([title, desc]) => (
              <div key={title} className="border-t border-white/20 pt-6">
                <div className="text-[13px] font-medium tracking-wide uppercase text-neutral-400 mb-4">{title}</div>
                <p className="text-[15px] text-neutral-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={`${container} py-24 md:py-32`}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-12 lg:gap-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em]">{t("stabx.specs", lang)}</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {[...performanceRows(lang), ...integrationRows(lang)].map(([l, v]) => (
                <div key={l} className="border-t border-white/10 pt-4">
                  <dt className="text-[13px] text-neutral-500 mb-1.5">{l}</dt>
                  <dd className="text-[15px] text-neutral-200">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

function WorkflowVariant({ lang, c, onOpen }: { lang: Lang; c: Copy; onOpen: () => void }) {
  const mission = naviXShot("circle", lang);
  const corridor = naviXShot("corridor", lang);
  const chapters = [
    { n: "01", kicker: c.beforeFlight, title: c.ch1Title, text: c.ch1, shot: mission },
    { n: "02", kicker: c.beforeFlight, title: c.ch2Title, text: c.ch2, shot: corridor },
  ];
  return (
    <>
      <section>
        <div className={`${container} pt-16 md:pt-24 pb-20 md:pb-24`}>
          <BetaTag lang={lang} className="mb-8" />
          <h1 className="text-[clamp(3rem,7vw,6rem)] font-bold tracking-[-0.04em] leading-[0.9] mb-6" style={UNBOUNDED}>
            NaviX
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-10">{t("navix.desc", lang)}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <AccessButton lang={lang} onClick={onOpen} />
            <ResearchLink lang={lang} />
          </div>
        </div>
      </section>

      {chapters.map((ch, i) => (
        <section key={ch.n} className="border-t border-white/10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28">
            <div className={`grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-10 lg:gap-16 items-center`}>
              <div className={`lg:px-12 ${i % 2 ? "lg:order-2" : ""}`}>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-[13px] font-semibold text-[#a9bcff]" style={UNBOUNDED}>{ch.n}</span>
                  <span className="text-[13px] font-medium tracking-wide uppercase text-neutral-500">{ch.kicker}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mb-6">{ch.title}</h2>
                <p className="text-[15px] text-neutral-400 leading-relaxed">{ch.text}</p>
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <Screenshot {...ch.shot} lang={lang} preload={i === 0} sizes="(min-width: 1024px) 64vw, 100vw" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-white/10">
        <div className={`${container} py-20 md:py-28`}>
          <div className="max-w-3xl">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-[13px] font-semibold text-[#a9bcff]" style={UNBOUNDED}>03</span>
              <span className="text-[13px] font-medium tracking-wide uppercase text-neutral-500">{c.inFlight}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mb-6">{c.ch3Title}</h2>
            <p className="text-[15px] text-neutral-400 leading-relaxed">{c.ch3}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={`${container} py-24 md:py-32`}>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-16">{c.pairTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["StabX", c.pairStabx],
              ["NaviX", c.pairNavix],
            ].map(([name, text]) => (
              <div key={name} className="bg-[#111] p-8 md:p-10" style={cut(20)}>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-4" style={UNBOUNDED}>{name}</h3>
                <p className="text-[15px] text-neutral-400 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <Link href={`/stabx${lang === "uk" ? "?lang=uk" : ""}`} className="inline-block mt-10 text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors">
            {c.aboutStabx} &rarr;
          </Link>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className={`${container} py-24 md:py-32`}>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] mb-16">{t("stabx.specs", lang)}</h2>
          <div className="max-w-3xl">
            <SpecRows rows={[...performanceRows(lang), ...integrationRows(lang).filter(([l]) => l !== t("navix.specs.interface", lang))]} />
          </div>
        </div>
      </section>
    </>
  );
}

export default function NaviXPreviews({ initialLang = "en", variant }: { initialLang?: Lang; variant: NaviXPreviewVariant }) {
  const [lang, setLang] = useLang(initialLang);
  const [modalOpen, setModalOpen] = useState(false);
  const c = copy[lang];
  const open = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav lang={lang} onLangChange={setLang} />
      <div className="pt-[72px]">
        <VariantSwitcher variant={variant} lang={lang} />
      </div>

      {variant === "split" && <SplitVariant lang={lang} c={c} onOpen={open} />}
      {variant === "wide" && <WideVariant lang={lang} c={c} />}
      {variant === "workflow" && <WorkflowVariant lang={lang} c={c} onOpen={open} />}

      <ContactSection lang={lang} c={c} onOpen={open} />
      <NaviXFooter lang={lang} />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} variant="waitlist" lang={lang} />
    </div>
  );
}
