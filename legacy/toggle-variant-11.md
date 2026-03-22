# Toggle Variant 11 — Sliding Pill

Sliding black pill on gray rounded track (iOS-style segment control).
"Contact" moved into nav links, toggle replaces "Get in touch" button.

## Implementation

```tsx
function Toggle11({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="relative flex items-center bg-neutral-100 rounded-full p-0.5">
      <div
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] bg-black rounded-full transition-transform duration-200 ease-in-out"
        style={{ transform: lang === "uk" ? "translateX(calc(100% + 4px))" : "translateX(0)" }}
      />
      <button onClick={() => setLang("en")} className={`relative z-10 px-2.5 py-1 text-[12px] font-medium rounded-full transition-colors duration-200 ${lang === "en" ? "text-white" : "text-neutral-500"}`}>EN</button>
      <button onClick={() => setLang("uk")} className={`relative z-10 px-2.5 py-1 text-[12px] font-medium rounded-full transition-colors duration-200 ${lang === "uk" ? "text-white" : "text-neutral-500"}`}>UA</button>
    </div>
  );
}
```
