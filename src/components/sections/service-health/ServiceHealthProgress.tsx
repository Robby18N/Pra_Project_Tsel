import { SegmentedProgressBar } from "@/components/ui/SegmentedProgressBar";
import { SERVICE_HEALTH_SEGMENTS } from "./service-health-data";

/**
 * Healthy / Warning / Critical breakdown as a single segmented progress bar
 * (matches the source design) with a legend row underneath.
 */
export function ServiceHealthProgress() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] justify-start items-start">
      <SegmentedProgressBar segments={SERVICE_HEALTH_SEGMENTS} />
      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[20px] justify-center items-center flex-wrap">
        {SERVICE_HEALTH_SEGMENTS.map((segment) => (
          <div key={segment.label} className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center">
            <div
              className="box-border w-[10px] shrink-0 h-[10px] rounded-[9999px]"
              style={{ background: segment.legendBackground }}
            />
            <div className="text-[12px]/[16px] box-border text-[#334155ff] font-normal text-left whitespace-nowrap">
              {segment.label}
            </div>
            <div className="text-[12px]/[16px] box-border text-[#020617ff] font-semibold text-left whitespace-nowrap">
              {segment.displayValue}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
