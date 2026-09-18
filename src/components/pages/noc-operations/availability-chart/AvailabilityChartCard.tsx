import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AvailabilityChart } from "./AvailabilityChart";
import { AVAILABILITY_INSIGHT } from "./availability-chart-data";

/** "Availability, last 24 hours" card: labeled line chart plus a one-line automated insight. */
export function AvailabilityChartCard() {
  return (
    <Card className="flex-1 min-w-0 rounded-[12px] flex flex-col gap-[12px] p-[16px] justify-start items-start">
      <SectionHeading title="Availability, last 24 hours" subtitle="Rolling 24h, all customers" />
      <div className="box-border w-full h-[160px] shrink-0">
        <AvailabilityChart />
      </div>
      <div className="box-border w-full h-fit shrink-0 rounded-[8px] bg-[#f8fafcff] border border-[#e2e8f0] p-[8px_10px]">
        <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left">
          {AVAILABILITY_INSIGHT}
        </div>
      </div>
    </Card>
  );
}
