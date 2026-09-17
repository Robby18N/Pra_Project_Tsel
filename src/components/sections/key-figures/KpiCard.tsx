import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { KpiDatum } from "./kpi-data";

export function KpiCard({ icon: Icon, iconWrapClassName, value, label, subLabel, badge }: KpiDatum) {
  return (
    <Card className="[flex:1_1_0] h-full rounded-[12px] flex flex-col gap-[12px] p-[12px] justify-start items-start">
      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-between items-start">
        <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center">
          <div
            className={`box-border w-[36px] shrink-0 h-[36px] shadow-[0px_1px_1.531px_0px_#0000000d] flex flex-row gap-0 justify-center items-center rounded-[12px] ${iconWrapClassName}`}
          >
            <div className="box-border w-[18px] shrink-0 h-[18px] overflow-hidden relative">
              {/* Icon glyphs are authored on a 20px grid; scale down to the
                  requested 18px without re-deriving every absolute path. */}
              <div className="w-[20px] h-[20px] origin-top-left scale-90">
                <Icon />
              </div>
            </div>
          </div>
          <div className="text-[18px]/[27px] box-border text-[#020617ff] font-semibold text-left whitespace-nowrap">
            {value}
          </div>
        </div>
      </div>
      <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[6px] justify-start items-start">
        <div className="text-[12px]/[16px] box-border text-[#334155ff] font-medium text-left whitespace-nowrap">
          {label}
        </div>
        {subLabel && (
          <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
            {subLabel}
          </div>
        )}
        {badge && (
          <Badge className={`p-[4px_10px] ${badge.className}`} textClassName={`text-[12px]/[16px] font-normal ${badge.textClassName}`}>
            {badge.text}
          </Badge>
        )}
      </div>
    </Card>
  );
}
