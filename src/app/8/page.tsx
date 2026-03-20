import PageContent from "@/components/PageContent";
import { getUnits } from "@/lib/units";

export default function Page() {
  const units = getUnits();
  return <PageContent fontLabel="Sora + Ubuntu Mono" units={units} />;
}
