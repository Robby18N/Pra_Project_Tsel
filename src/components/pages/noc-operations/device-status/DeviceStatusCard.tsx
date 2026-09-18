import { Card } from "@/components/ui/Card";
import type { DeviceStatusDatum } from "./device-status-data";

/** One tile in the "Online / Offline / Maintenance / Unknown" device-status row. */
export function DeviceStatusCard({ icon: Icon, value, label, color, tint }: DeviceStatusDatum) {
  return (
    <Card className="[flex:1_1_0] rounded-[12px] flex flex-row gap-[12px] p-[16px] justify-start items-center">
      <div
        className="box-border w-[40px] shrink-0 h-[40px] rounded-[10px] flex flex-row justify-center items-center relative"
        style={{ backgroundColor: tint }}
      >
        <div className="w-[20px] h-[20px] relative">
          <Icon color={color} />
        </div>
      </div>
      <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[2px] justify-start items-start">
        <div className="text-[20px]/[28px] box-border text-[#020617ff] font-semibold text-left whitespace-nowrap">
          {value}
        </div>
        <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
          {label}
        </div>
      </div>
    </Card>
  );
}
