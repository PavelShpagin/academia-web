import PageContent from "@/components/PageContent";
import { getUnits } from "@/lib/units";
import { getLang } from "@/lib/i18n";

export default async function Home({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const lang = getLang(params);
  const units = getUnits();
  return <PageContent units={units} lang={lang} />;
}
