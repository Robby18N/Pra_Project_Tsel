import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { OfflineRegionMap } from "./OfflineRegionMap";
import { REGION_DATA, MAX_REGION_COUNT } from "./offline-region-data";

const HALF = Math.ceil(REGION_DATA.length / 2);
const COLUMNS = [REGION_DATA.slice(0, HALF), REGION_DATA.slice(HALF)];

/** "Where devices are offline" panel: regional heatmap + a ranked two-column breakdown. */
export function OfflineRegionCard() {
  return (
    <Card className="[flex:1.6_1.6_0%] min-w-0 rounded-[12px] flex flex-col gap-[16px] p-[16px] justify-start items-start">
      <div className="box-border w-full h-fit shrink-0 flex flex-row justify-between items-start">
        <SectionHeading title="Where devices are offline" subtitle="Offline devices by region" />
        <div className="box-border w-fit h-fit shrink-0 flex flex-col gap-[4px] justify-start items-end">
          <div className="text-[10px]/[12px] box-border text-[#64748bff] font-medium text-right whitespace-nowrap">
            Notifications
          </div>
          <div
            className="w-[96px] h-[8px] rounded-[9999px]"
            style={{ background: "linear-gradient(90deg, #fecaca 0%, #b91c1c 100%)" }}
          />
          <div className="box-border w-[96px] h-fit shrink-0 flex flex-row justify-between items-center">
            <div className="text-[10px]/[12px] box-border text-[#94a3b8ff] font-normal text-left whitespace-nowrap">
              Lowest
            </div>
            <div className="text-[10px]/[12px] box-border text-[#94a3b8ff] font-normal text-left whitespace-nowrap">
              Highest
            </div>
          </div>
        </div>
      </div>

      <OfflineRegionMap />

      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[24px] justify-start items-start">
        {COLUMNS.map((column, i) => (
          <div key={i} className="box-border [flex:1_1_0] h-fit flex flex-col gap-[14px] justify-start items-start">
            {column.map((row) => (
              <div key={row.region} className="box-border w-full h-fit shrink-0 flex flex-col gap-[6px] justify-start items-start">
                <div className="box-border w-full h-[16px] shrink-0 flex flex-row justify-between items-center">
                  <div className="text-[12px]/[16px] box-border text-[#334155ff] font-normal text-left whitespace-nowrap">
                    {row.region}
                  </div>
                  <div className="text-[12px]/[16px] box-border text-[#020617ff] font-semibold text-left whitespace-nowrap">
                    {row.count}
                  </div>
                </div>
                <ProgressBar
                  percent={(row.count / MAX_REGION_COUNT) * 100}
                  background="#ef4444ff"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}
