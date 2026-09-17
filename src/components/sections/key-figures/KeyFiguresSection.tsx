import { KpiCard } from "./KpiCard";
import { KPI_DATA } from "./kpi-data";

/** Top row of 6 KPI tiles: customers, partners, projects and device health counts. */
export function KeyFiguresSection() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-stretch">
      {KPI_DATA.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </div>
  );
}
