import Link from "next/link";
import Image from "next/image";

const fonts = [
  { id: 1, name: "Space Grotesk + Space Mono", vibe: "Geometric, tech-forward" },
  { id: 2, name: "Outfit + IBM Plex Mono", vibe: "Clean, corporate precision" },
  { id: 3, name: "DM Sans + Fira Code", vibe: "Sharp, developer-oriented" },
  { id: 4, name: "Barlow + Source Code Pro", vibe: "Industrial, military" },
  { id: 5, name: "Manrope + JetBrains Mono", vibe: "Premium, rounded" },
  { id: 6, name: "Instrument Sans + Roboto Mono", vibe: "Contemporary, editorial" },
  { id: 7, name: "Plus Jakarta Sans + Overpass Mono", vibe: "Warm geometric" },
  { id: 8, name: "Sora + Ubuntu Mono", vibe: "Japanese-inspired geometry" },
  { id: 9, name: "Lexend + Inconsolata", vibe: "Optimized readability" },
  { id: 10, name: "Figtree + Red Hat Mono", vibe: "Friendly, enterprise" },
  { id: 11, name: "Albert Sans + Anonymous Pro", vibe: "Swiss neo-grotesque" },
  { id: 12, name: "Urbanist + Martian Mono", vibe: "Modern, space-age" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="flex items-center gap-3 mb-10">
          <Image src="/logo.png" alt="Academia" width={32} height={32} />
          <span className="text-[18px] font-semibold tracking-[0.04em] uppercase" style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}>
            Academia
          </span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight mb-3">Font Variants</h1>
        <p className="text-neutral-500 mb-12">Same page, twelve font pairings. Pick the one that fits.</p>
        <div className="space-y-2.5">
          {fonts.map((f) => (
            <Link key={f.id} href={`/${f.id}`} className="block group border border-neutral-800 px-5 py-4 hover:border-neutral-500 transition-colors">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-neutral-600 text-sm font-mono mr-3">{String(f.id).padStart(2, "0")}</span>
                  <span className="text-base font-medium">{f.name}</span>
                </div>
                <span className="text-neutral-700 group-hover:text-neutral-300 transition-colors">&rarr;</span>
              </div>
              <p className="text-neutral-600 text-sm mt-1 ml-9">{f.vibe}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
