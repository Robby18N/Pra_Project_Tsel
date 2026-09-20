import { AlertKpiTile } from "./AlertKpiTile";
import { ALERT_KPI_DATA } from "./alert-kpi-data";

/** Row of Critical / Major / Minor / Info severity counters. */
export function AlertKpiRow() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-start items-stretch">
      {ALERT_KPI_DATA.map((kpi) => (
        <AlertKpiTile key={kpi.label} {...kpi} />
      ))}
    </div>
  );
}
