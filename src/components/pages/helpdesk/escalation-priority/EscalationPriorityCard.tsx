import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VerticalBarChart } from "@/components/ui/VerticalBarChart";
import { ESCALATION_PRIORITY } from "./escalation-priority-data";

/** "Escalation priority" card: average time-in-queue for the active ticket set, by severity. */
export function EscalationPriorityCard() {
  return (
    <Card className="flex-1 min-w-0 h-full rounded-[12px] flex flex-col gap-[16px] p-[16px] justify-start items-start">
      <SectionHeading title="Escalation priority" subtitle="Active queue by severity" />
      <VerticalBarChart data={ESCALATION_PRIORITY} />
    </Card>
  );
}
