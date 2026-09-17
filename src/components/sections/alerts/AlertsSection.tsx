import { TrendCard } from "./TrendCard";
import { TREND_DATA } from "./alerts-data";

/** Row of 5 trend cards: alarm severities, open tickets and SLA achievement, each with a 6-point sparkline. */
export function AlertsSection() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-start">
      {TREND_DATA.map((trend) => (
        <TrendCard key={trend.label} {...trend} />
      ))}
    </div>
  );
}
