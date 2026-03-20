import PageContent from "@/components/PageContent";
import { getUnits } from "@/lib/units";

export default function Home() {
  const units = getUnits();
  return <PageContent fontLabel="" units={units} />;
}
