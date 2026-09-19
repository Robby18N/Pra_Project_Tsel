import { Card } from "@/components/ui/Card";
import type { DeviceStatusDatum } from "./device-status-data";

/**
 * One tile in the "Online / Offline / Maintenance / Unknown" device-status
 * row. Styled to match the Executive dashboard's KpiCard (small inline
 * icon + value, label beneath) instead of the earlier boxed-icon layout.
 */
export function DeviceStatusCard({ icon: Icon, value, label, color }: DeviceStatusDatum) {
  return (
    <Card className="[flex:1_1_0] rounded-[12px] flex flex-col gap-[6px] p-[8px_12px] justify-start items-start">
      <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center">
        <div className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative">
          {/* Icon glyphs are authored on a 20px grid; scale down to the
              requested 16px without re-deriving every absolute path. */}
          <div className="w-[20px] h-[20px] origin-top-left scale-[0.8]">
            <Icon color={color} />
          </div>
        </div>
        <div className="text-[18px]/[27px] box-border text-[#020617ff] font-semibold text-left whitespace-nowrap">
          {value}
        </div>
      </div>
      <div className="text-[12px]/[16px] box-border text-[#334155ff] font-medium text-left whitespace-nowrap">
        {label}
      </div>
    </Card>
  );
}
