import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DeviceStatusDonutChart } from "./DeviceStatusDonutChart";
import { DONUT_SEGMENTS, DONUT_TOTAL, ONLINE_PERCENT } from "./device-status-chart-data";

/** "Device status" donut chart card: overall online % centered in the ring, breakdown legend below. */
export function DeviceStatusDonutCard() {
  return (
    <Card className="flex-1 min-w-0 rounded-[12px] flex flex-col gap-[12px] p-[16px] justify-start items-start">
      <SectionHeading title="Device status" subtitle="All monitored devices" />

      <div className="box-border w-full h-[160px] shrink-0 relative">
        <DeviceStatusDonutChart />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-[22px]/[28px] box-border text-[#020617ff] font-semibold text-center whitespace-nowrap">
            {ONLINE_PERCENT}%
          </div>
          <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-center whitespace-nowrap">
            Online
          </div>
        </div>
      </div>

      <div className="box-border w-full h-fit shrink-0 grid grid-cols-2 gap-[12px] justify-start items-start">
        {DONUT_SEGMENTS.map((s) => (
          <div key={s.label} className="box-border w-full h-fit shrink-0 flex flex-col justify-start items-center">
            {/* Centers this whole legend item within its grid cell, while
                the label and value inside stay left-aligned to each other. */}
            <div className="box-border w-fit h-fit shrink-0 flex flex-col gap-[2px] justify-start items-start">
              <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[6px] items-center">
                <span className="w-[8px] h-[8px] shrink-0 rounded-full" style={{ backgroundColor: s.color }} />
                <div className="text-[12px]/[16px] box-border text-[#334155ff] font-normal text-left whitespace-nowrap overflow-hidden text-ellipsis">
                  {s.label}
                </div>
              </div>
              <div className="text-[14px]/[20px] box-border text-[#020617ff] font-semibold text-left whitespace-nowrap pl-[14px]">
                {s.value.toLocaleString()}{" "}
                <span className="text-[12px]/[16px] text-[#64748bff] font-normal">
                  ({((s.value / DONUT_TOTAL) * 100).toFixed(1)}%)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
