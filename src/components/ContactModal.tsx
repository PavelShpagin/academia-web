"use client";
import { useState, useEffect, useRef } from "react";
import { Lang, t } from "@/lib/i18n";
import { X } from "lucide-react";

export type ModalVariant = "sales" | "business" | "waitlist";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  variant: ModalVariant;
  lang: Lang;
}

export default function ContactModal({ open, onClose, variant, lang }: ContactModalProps) {
  const [orgType, setOrgType] = useState<"company" | "military">("company");
  const [orgName, setOrgName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [tried, setTried] = useState(false);
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      setStatus("idle");
      setTried(false);
      setTouched(new Set());
      setOrgName("");
      setContactName("");
      setEmail("");
      setMessage("");
      setOrgType("company");
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const title =
    variant === "sales"
      ? t("modal.contactSales.title", lang)
      : variant === "business"
        ? t("modal.businessInquiries.title", lang)
        : t("modal.requestAccess.title", lang);

  const placeholderKey =
    variant === "sales"
      ? "modal.messagePlaceholder.sales" as const
      : variant === "business"
        ? "modal.messagePlaceholder.business" as const
        : "modal.messagePlaceholder.waitlist" as const;

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const showError = (field: string, invalid: boolean) => tried && !touched.has(field) && invalid;
  const touch = (field: string) => setTouched((s) => new Set(s).add(field));

  const inputBorder = (err: boolean) =>
    err ? "border-red-500" : "border-white/15 focus:border-white/40";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTried(true);
    setTouched(new Set());
    if (!orgName.trim() || !contactName.trim() || !email.trim() || !isValidEmail(email) || !message.trim()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          variant,
          orgType,
          orgName,
          contactName,
          email,
          message,
          lang,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-50 m-auto w-[calc(100%-2rem)] max-w-lg bg-transparent p-0 backdrop:bg-black/80"
      onClick={(e) => { if (e.target === dialogRef.current) onClose(); }}
    >
      <div className="bg-[#111] text-white">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
          <h2 className="text-xl font-semibold tracking-[-0.02em]" style={{ fontFamily: "var(--font-unbounded)" }}>
            {title}
          </h2>
          <button onClick={onClose} className="text-neutral-500 hover:text-white transition-colors p-1 cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Success state */}
        {status === "success" ? (
          <div className="px-6 py-16 text-center">
            <div className="mx-auto w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-white text-[16px] font-medium mb-1">{t("modal.success", lang)}</p>
            <button
              onClick={onClose}
              className="mt-8 inline-flex items-center h-10 px-6 text-[14px] font-medium border border-neutral-600 text-white hover:border-white transition-colors cursor-pointer"
            >
              {t("modal.close", lang)}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
            {/* Org type toggle */}
            <div>
              <div className="flex border border-white/15 text-[13px]">
                <button
                  type="button"
                  onClick={() => setOrgType("company")}
                  className={`flex-1 py-2.5 px-4 transition-colors cursor-pointer ${orgType === "company" ? "bg-white text-black font-medium" : "text-neutral-400 hover:text-white"}`}
                >
                  {t("modal.orgType.company", lang)}
                </button>
                <button
                  type="button"
                  onClick={() => setOrgType("military")}
                  className={`flex-1 py-2.5 px-4 transition-colors border-l border-white/15 cursor-pointer ${orgType === "military" ? "bg-white text-black font-medium" : "text-neutral-400 hover:text-white"}`}
                >
                  {t("modal.orgType.military", lang)}
                </button>
              </div>
            </div>

            {/* Org name */}
            <div>
              <label className="block text-[12px] text-neutral-500 uppercase tracking-wide mb-2">
                {orgType === "company" ? t("modal.companyName", lang) : t("modal.unitName", lang)}
              </label>
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                onFocus={() => touch("orgName")}
                className={`w-full bg-black/50 border ${inputBorder(showError("orgName", !orgName.trim()))} px-4 py-3 text-[15px] text-white placeholder:text-neutral-600 focus:outline-none transition-colors`}
              />
            </div>

            {/* Contact name */}
            <div>
              <label className="block text-[12px] text-neutral-500 uppercase tracking-wide mb-2">
                {t("modal.contactName", lang)}
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                onFocus={() => touch("contactName")}
                className={`w-full bg-black/50 border ${inputBorder(showError("contactName", !contactName.trim()))} px-4 py-3 text-[15px] text-white placeholder:text-neutral-600 focus:outline-none transition-colors`}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[12px] text-neutral-500 uppercase tracking-wide mb-2">
                {t("modal.email", lang)}
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => touch("email")}
                className={`w-full bg-black/50 border ${inputBorder(showError("email", !isValidEmail(email)))} px-4 py-3 text-[15px] text-white placeholder:text-neutral-600 focus:outline-none transition-colors`}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[12px] text-neutral-500 uppercase tracking-wide mb-2">
                {t("modal.message", lang)}
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => touch("message")}
                placeholder={t(placeholderKey, lang)}
                className={`w-full bg-black/50 border ${inputBorder(showError("message", !message.trim()))} px-4 py-3 text-[15px] text-white placeholder:text-neutral-600 focus:outline-none transition-colors resize-none`}
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <p className="text-red-400 text-[13px]">{t("modal.error", lang)}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full h-12 text-[15px] font-medium bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? t("modal.submitting", lang) : t("modal.submit", lang)}
            </button>
          </form>
        )}
      </div>
    </dialog>
  );
}
