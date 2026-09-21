import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { TrendUpIcon, TrendDownIcon } from "@/components/icons/misc-icons";
import { KpiCheckIcon } from "../root-cause-icons";
import type { RootCauseKpiDatum } from "./root-cause-kpi-data";

interface RootCauseKpiCardProps {
  data: RootCauseKpiDatum;
}

/** One "Card KPI" tile: icon + label header, big stat with a trend badge, a proportional bar, and a caption line below a divider. */
export function RootCauseKpiCard({ data }: RootCauseKpiCardProps) {
  const TrendIcon = data.trendDirection === "up" ? TrendUpIcon : TrendDownIcon;

  return (
    <Card className="flex-1 min-w-0 h-fit rounded-[16px] flex flex-col gap-[16px] p-[16px] justify-start items-start">
      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[8px] justify-start items-center">
        <div
          className="box-border w-[36px] shrink-0 h-[36px] flex flex-row gap-0 justify-center items-center rounded-[12px]"
          style={{ background: data.iconBg, border: `1px solid ${data.iconBorder}` }}
        >
          <KpiCheckIcon color={data.iconColor} />
        </div>
        <div className="text-[14px]/[20px] box-border text-[#475569ff] font-semibold text-left whitespace-nowrap">
          {data.label}
        </div>
      </div>

      <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[8px] justify-start items-start">
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[18px] justify-start items-center">
          <div className="text-[32px]/[36px] box-border text-[#0f172aff] font-semibold tracking-[-1px] text-left whitespace-nowrap">
            {data.value}
          </div>
          <div
            className="box-border w-fit shrink-0 h-fit flex flex-row gap-[4px] p-[2px_8px] justify-center items-center rounded-[9999px]"
            style={{ background: data.trendBadgeBg }}
          >
            <TrendIcon color={data.trendColor} />
            <div className="text-[14px]/[20px] box-border font-normal text-left whitespace-nowrap" style={{ color: data.trendColor }}>
              {data.delta}
            </div>
          </div>
        </div>
        <ProgressBar percent={data.barPercent} background={data.barBackground} height={16} className="outline outline-1 outline-[#e2e8f0ff]" />
      </div>

      <div className="box-border w-full h-[1px] shrink-0 bg-[#e2e8f0ff]" />

      <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[4px] justify-center items-center">
        <TrendIcon color={data.captionColor} />
        <div className="text-[14px]/[20px] box-border font-normal text-left whitespace-nowrap" style={{ color: data.captionColor }}>
          {data.caption}
        </div>
      </div>
    </Card>
  );
}
