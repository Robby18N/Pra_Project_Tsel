import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VerticalBarChart } from "@/components/ui/VerticalBarChart";
import { TICKET_AGE_BUCKETS, TICKET_AGE_TOTAL } from "./age-buckets-data";

/** "How long tickets have been open" card: ticket count per age bucket. */
export function TicketAgeCard() {
  return (
    <Card className="flex-1 min-w-0 h-full rounded-[12px] flex flex-col gap-[16px] p-[16px] justify-start items-start">
      <SectionHeading title="How long tickets have been open" subtitle={`${TICKET_AGE_TOTAL} tickets in scope`} />
      <VerticalBarChart data={TICKET_AGE_BUCKETS} />
    </Card>
  );
}
