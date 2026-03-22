import { headers, cookies } from "next/headers";
import StabXContent from "@/components/StabXContent";
import { getLang } from "@/lib/i18n";

export const metadata = {
  title: "StabX — Optical Flight Stabilization | Academia Tech",
  description: "GPS-free optical flight stabilization for UAVs. Day and night variants. Trusted by 700+ Armed Forces of Ukraine units.",
};

export default async function StabXPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const hdrs = await headers();
  const jar = await cookies();
  const lang = getLang(params, hdrs.get("accept-language"), jar.get("lang")?.value);

  return <StabXContent initialLang={lang} />;
}
