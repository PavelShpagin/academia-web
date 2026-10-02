import type { Metadata } from "next";
import { headers, cookies } from "next/headers";
import NaviXContent from "@/components/NaviXContent";
import NaviXPreviews from "@/components/NaviXPreviews";
import type { NaviXPreviewVariant } from "@/components/NaviXPreviews";
import { getLang } from "@/lib/i18n";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

const NAVIX_PREVIEW_VARIANTS: NaviXPreviewVariant[] = ["split", "wide", "workflow"];

const metadata: Metadata = {
  title: "NaviX — Visual Navigation Without GPS | Academia Tech",
  description: "GPS-free visual navigation for UAVs. Matches the drone camera view to an onboard satellite map on a Raspberry Pi 5. Now in open beta.",
};

function getPreview(params: Awaited<SearchParams>): NaviXPreviewVariant | null {
  const p = params.preview;
  return typeof p === "string" && (NAVIX_PREVIEW_VARIANTS as string[]).includes(p) ? (p as NaviXPreviewVariant) : null;
}

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  // Preview variants stay out of search results.
  return getPreview(await searchParams) ? { ...metadata, robots: { index: false, follow: false } } : metadata;
}

export default async function NaviXPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const hdrs = await headers();
  const jar = await cookies();
  const lang = getLang(params, hdrs.get("accept-language"), jar.get("lang")?.value);
  const preview = getPreview(params);

  return preview ? <NaviXPreviews initialLang={lang} variant={preview} /> : <NaviXContent initialLang={lang} />;
}
