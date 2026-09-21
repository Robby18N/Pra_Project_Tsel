import { ROOT_CAUSE_KPI_DATA } from "./root-cause-kpi-data";
import { RootCauseKpiCard } from "./RootCauseKpiCard";

/** Row of the three KPI tiles at the top of the Root Cause page. */
export function RootCauseKpiRow() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-start items-stretch">
      {ROOT_CAUSE_KPI_DATA.map((datum) => (
        <RootCauseKpiCard key={datum.key} data={datum} />
      ))}
    </div>
  );
}
