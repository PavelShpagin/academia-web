"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Lang } from "@/lib/i18n";

export default function MobileMenu({ lang = "en", onLangChange }: { lang?: string; onLangChange?: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const q = lang === "uk" ? "?lang=uk" : "";

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const href = (anchor: string) => isHome ? `#${anchor}` : `/${q}#${anchor}`;

  const labels = lang === "uk"
    ? { products: "Продукти", impact: "Результати", research: "Дослідження", contact: "Контакт", cta: "Зв'язатися" }
    : { products: "Products", impact: "Impact", research: "Research", contact: "Contact", cta: "Get in touch" };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-10 h-10 flex items-center justify-center"
        aria-label="Menu"
      >
        <div className="w-[22px] h-[14px] relative">
          <span className={`absolute left-0 right-0 h-[2px] bg-black transition-all duration-300 ease-in-out origin-center ${open ? "top-[6px] rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 right-0 top-[6px] h-[2px] bg-black transition-all duration-300 ease-in-out ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute left-0 right-0 h-[2px] bg-black transition-all duration-300 ease-in-out origin-center ${open ? "top-[6px] -rotate-45" : "top-[12px]"}`} />
        </div>
      </button>
      <div
        className={`fixed inset-0 top-[72px] z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ backgroundColor: "rgba(0,0,0,0.15)", WebkitBackdropFilter: "blur(4px)", backdropFilter: "blur(4px)" }}
        onClick={close}
      />
      <div className={`absolute top-[72px] left-0 right-0 bg-white border-b border-neutral-200 px-6 overflow-hidden z-50 transition-all duration-300 ease-out ${open ? (onLangChange ? "max-h-80" : "max-h-64") + " py-6 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
        {(onLangChange
          ? [
              { label: labels.products, anchor: "platforms" },
              { label: labels.impact, anchor: "impact" },
              { label: labels.research, anchor: "research" },
              { label: labels.contact, anchor: "contact" },
            ]
          : [
              { label: labels.products, anchor: "platforms" },
              { label: labels.impact, anchor: "impact" },
              { label: labels.research, anchor: "research" },
            ]
        ).map((item, i) => (
          <a
            key={item.label}
            href={href(item.anchor)}
            onClick={close}
            className="block text-[15px] text-neutral-600 hover:text-black transition-all duration-300 py-2"
            style={{ transitionDelay: open ? `${i * 50}ms` : "0ms", opacity: open ? 1 : 0, transform: open ? "translateY(0)" : "translateY(-8px)" }}
          >
            {item.label}
          </a>
        ))}
        {!onLangChange && (
          <a
            href={href("contact")}
            onClick={close}
            className="inline-flex items-center justify-center h-10 px-5 mt-2 text-[14px] font-medium bg-black text-white hover:bg-neutral-800 transition-all duration-300"
            style={{ transitionDelay: open ? "150ms" : "0ms", opacity: open ? 1 : 0, transform: open ? "translateY(0)" : "translateY(-8px)" }}
          >
            {labels.cta}
          </a>
        )}
        {onLangChange && (
          <div
            className="flex items-center gap-1.5 mt-3 transition-all duration-300"
            style={{ transitionDelay: open ? "200ms" : "0ms", opacity: open ? 1 : 0, transform: open ? "translateY(0)" : "translateY(-8px)" }}
          >
            <button onClick={() => { onLangChange("en"); }} className={`px-3 py-1 text-[12px] font-semibold rounded-md border transition-all duration-100 ease-in-out cursor-pointer ${lang === "en" ? "bg-black border-black text-white" : "bg-transparent border-neutral-200 text-neutral-400 hover:border-neutral-400"}`}>EN</button>
            <button onClick={() => { onLangChange("uk"); }} className={`px-3 py-1 text-[12px] font-semibold rounded-md border transition-all duration-100 ease-in-out cursor-pointer ${lang === "uk" ? "bg-black border-black text-white" : "bg-transparent border-neutral-200 text-neutral-400 hover:border-neutral-400"}`}>UA</button>
          </div>
        )}
      </div>
    </div>
  );
}
