import PageContent from "@/components/PageContent";
import { getUnits } from "@/lib/units";

export default function Page() {
  const units = getUnits();
  return <PageContent fontLabel="Products v8" units={units} productVariant={8} />;
}
