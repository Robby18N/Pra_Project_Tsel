import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { AttentionStat } from "./attention-data";

export function StatTile({ label, value, badgeLabel, badgeClassName, badgeTextClassName }: AttentionStat) {
  return (
    <Card className="[flex:1_1_0] h-fit rounded-[12px] flex flex-row gap-[12px] p-[8px_12px] justify-center items-start">
      <div className="box-border w-fit shrink-0 h-fit flex flex-col gap-[6px] justify-center items-center">
        <div className="text-[14px]/[20px] box-border text-[#334155ff] font-normal text-left whitespace-nowrap">
          {label}
        </div>
        <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[10px] justify-start items-center">
          <div className="text-[16px]/[24px] box-border text-[#020617ff] font-semibold text-left whitespace-nowrap">
            {value}
          </div>
          <Badge className={`p-[2px_10px] ${badgeClassName}`} textClassName={`text-[11px]/[normal] font-normal ${badgeTextClassName}`}>
            {badgeLabel}
          </Badge>
        </div>
      </div>
    </Card>
  );
}
