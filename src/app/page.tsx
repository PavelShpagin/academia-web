import type { Metadata } from "next";
import { headers, cookies } from "next/headers";
import PageContent from "@/components/PageContent";
import { parseProductPreview } from "@/components/HomeProductPreviews";
import { getUnits } from "@/lib/units";
import { getLang } from "@/lib/i18n";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const preview = parseProductPreview((await searchParams).preview);
  return preview ? { robots: { index: false, follow: false } } : {};
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const hdrs = await headers();
  const jar = await cookies();
  const lang = getLang(params, hdrs.get("accept-language"), jar.get("lang")?.value);
  const units = getUnits();
  return <PageContent units={units} initialLang={lang} preview={parseProductPreview(params.preview)} />;
}
