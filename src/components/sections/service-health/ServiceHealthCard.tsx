import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceHealthProgress } from "./ServiceHealthProgress";
import { DEVICE_COUNT_LABEL, SERVICE_HEALTH_SUMMARY } from "./service-health-data";

/** "Service health" panel: healthy/warning/critical breakdown, a plain-language summary and a link into NOC operations. */
export function ServiceHealthCard() {
  return (
    <Card className="flex-1 min-w-0 rounded-[12px] flex flex-col gap-0 justify-start items-start">
      <div className="box-border w-full h-fit shrink-0 p-[16px_16px_0px_16px]">
        <SectionHeading title="Service health" subtitle={DEVICE_COUNT_LABEL} />
      </div>
      <div className="box-border w-full [flex:1_1_0] flex flex-col gap-[24px] p-[16px] justify-between items-start">
        <div className="box-border w-full h-fit shrink-0">
          <ServiceHealthProgress />
        </div>
        <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[12px] justify-start items-start bg-[#f8fafcff] border border-[#e2e8f0] rounded-[12px]">
          <p className="text-[14px]/[20px] box-border w-full text-[#334155ff] font-normal text-left">
            {SERVICE_HEALTH_SUMMARY}
          </p>
          <a
            href="#"
            className="text-[14px]/[20px] box-border pt-[8px] text-[#3b82f6ff] font-medium text-left whitespace-nowrap"
          >
            Open NOC operations
          </a>
        </div>
      </div>
    </Card>
  );
}
