import { headers, cookies } from "next/headers";
import NaviLocContent from "@/components/NaviLocContent";
import { getLang } from "@/lib/i18n";

export const metadata = {
  title: "NaviLoc: Trajectory-Level Visual Localization for GNSS-Denied UAV Navigation — Academia Tech",
  description:
    "NaviLoc matches drone camera images to satellite maps using trajectory-level optimization, achieving 19.5m accuracy without GPS on a Raspberry Pi 5.",
};

export default async function NaviLocPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const hdrs = await headers();
  const jar = await cookies();
  const lang = getLang(params, hdrs.get("accept-language"), jar.get("lang")?.value);

  return <NaviLocContent initialLang={lang} />;
}
