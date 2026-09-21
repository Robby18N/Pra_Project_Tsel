import { SeverityKpiTile } from "./SeverityKpiTile";
import { SEVERITY_KPI_DATA } from "./severity-kpi-data";

/** Shared row of Critical / Major / Minor / Info severity counters, reused across pages. */
export function SeverityKpiRow() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-start items-stretch">
      {SEVERITY_KPI_DATA.map((kpi) => (
        <SeverityKpiTile key={kpi.label} {...kpi} />
      ))}
    </div>
  );
}
