import { Card } from "@/components/ui/Card";
import { StatusDot } from "@/components/ui/StatusDot";
import { UncheckedBoxIcon } from "@/components/icons/misc-icons";
import type { AlertKpiDatum } from "./alert-kpi-data";

export function AlertKpiTile({ label, value, color }: AlertKpiDatum) {
  return (
    <Card className="[flex:1_1_0] rounded-[12px] flex flex-row gap-[12px] p-[10px_12px] justify-between items-center">
      <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center">
        <UncheckedBoxIcon />
        <StatusDot color={color} />
        <div className="text-[12px]/[16px] box-border text-[#334155ff] font-medium text-left whitespace-nowrap">
          {label}
        </div>
      </div>
      <div className="text-[16px]/[24px] box-border text-[#020617ff] font-semibold text-left whitespace-nowrap">
        {value}
      </div>
    </Card>
  );
}
