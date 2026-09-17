import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { CUSTOMER_AVAILABILITY } from "./customer-data";

/** "Top 5 Customer availability" panel — ranked list with a progress bar per customer. */
export function CustomerAvailabilityCard() {
  return (
    <Card className="flex-1 min-w-0 h-full rounded-[12px] flex flex-col gap-0 justify-start items-start">
      <div className="box-border w-full h-fit shrink-0 p-[14px_16px_0px_16px]">
        <SectionHeading title="Top 5 Customer availability" subtitle="Top five this period" />
      </div>
      <div className="box-border w-full [flex:1_1_0] flex flex-col gap-[10px] p-[14px_16px_16px_16px] justify-start items-start">
        {CUSTOMER_AVAILABILITY.map((row) => (
          <div key={row.name} className="box-border w-full h-fit shrink-0 flex flex-col gap-[4px] justify-start items-start">
            <div className="box-border w-full h-[18px] shrink-0 flex flex-row justify-between items-center">
              <div className="text-[14px]/[20px] box-border text-[#334155ff] font-normal text-left whitespace-nowrap">
                {row.name}
              </div>
              <div className="text-[14px]/[20px] box-border text-[#020617ff] font-semibold text-left whitespace-nowrap">
                {row.value}
              </div>
            </div>
            <ProgressBar percent={row.percent} background={row.background} />
          </div>
        ))}
      </div>
    </Card>
  );
}
