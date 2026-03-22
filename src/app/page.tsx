import { headers } from "next/headers";
import PageContent from "@/components/PageContent";
import { getUnits } from "@/lib/units";
import { getLang } from "@/lib/i18n";

export default async function Home({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const hdrs = await headers();
  const lang = getLang(params, hdrs.get("accept-language"));
  const units = getUnits();
  return <PageContent units={units} initialLang={lang} />;
}
