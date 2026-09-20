import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusDot } from "@/components/ui/StatusDot";
import { SegmentedProgressBar } from "@/components/ui/SegmentedProgressBar";
import { SEVERITY_BREAKDOWN } from "./severity-breakdown-data";

/** "Alert by Severity" card: proportional bar plus a 4-up legend with counts. */
export function SeverityBreakdownCard() {
  return (
    <Card className="w-full rounded-[12px] flex flex-col gap-[12px] p-[16px] justify-start items-start">
      <SectionHeading title="Alert by Severity" subtitle="Across both messaging channels" />

      <SegmentedProgressBar
        height={20}
        segments={SEVERITY_BREAKDOWN.map((s) => ({ label: s.label, value: s.percent, background: s.color }))}
      />

      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-start">
        {SEVERITY_BREAKDOWN.map((s) => (
          <div key={s.label} className="box-border flex-1 min-w-0 h-fit flex flex-col gap-[4px] justify-center items-start">
            <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[8px] justify-start items-center">
              <StatusDot color={s.color} />
              <div className="text-[12px]/[16px] box-border text-[#334155ff] font-medium text-left whitespace-nowrap">
                {s.label}
              </div>
            </div>
            <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
              {s.percent}% ({s.count})
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
