import PageContent from "@/components/PageContent";
import { getUnits } from "@/lib/units";

export default function Page() {
  const units = getUnits();
  return <PageContent fontLabel="Products v2" units={units} productVariant={2} />;
}
