import { headers, cookies } from "next/headers";
import NaviXContent from "@/components/NaviXContent";
import { getLang } from "@/lib/i18n";

export const metadata = {
  title: "NaviX — Visual Navigation Without GPS | Academia Tech",
  description: "GPS-free visual navigation for UAVs. Matches drone camera to satellite imagery. 20-30m accuracy on Raspberry Pi 5.",
};

export default async function NaviXPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const hdrs = await headers();
  const jar = await cookies();
  const lang = getLang(params, hdrs.get("accept-language"), jar.get("lang")?.value);

  return <NaviXContent initialLang={lang} />;
}
