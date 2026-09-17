import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StatusDot } from "@/components/ui/StatusDot";
import { SparklineChart } from "./SparklineChart";
import { TREND_X_LABELS, type TrendDatum } from "./alerts-data";

export function TrendCard({ label, dotColor, value, trend, trendBgClassName, trendTextClassName, color, data }: TrendDatum) {
  return (
    <Card className="[flex:1_1_0] h-fit rounded-[12px] flex flex-col gap-[10px] p-[16px] justify-start items-start">
      <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[8px] justify-start items-start">
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center">
          <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center">
            <StatusDot color={dotColor} />
            <div className="text-[12px]/[16px] box-border text-[#334155ff] font-medium text-left whitespace-nowrap">
              {label}
            </div>
          </div>
          <Badge className={`p-[4px_8px] ${trendBgClassName}`} textClassName={`text-[12px]/[16px] font-semibold ${trendTextClassName}`}>
            {trend}
          </Badge>
        </div>
        <div className="text-[28px]/[32px] box-border text-[#020617ff] font-bold text-left whitespace-nowrap">
          {value}
        </div>
      </div>
      <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[6px] justify-start items-center">
        <SparklineChart data={data} labels={TREND_X_LABELS} color={color} height={56} />
        <div className="box-border w-full h-fit shrink-0 flex flex-row justify-between items-start">
          {TREND_X_LABELS.map((l) => (
            <div key={l} className="text-[10px]/[16px] box-border text-[#64748bff] font-medium text-center whitespace-nowrap">
              {l}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
