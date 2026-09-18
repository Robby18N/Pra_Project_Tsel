import { Header } from "@/components/sections/header/Header";
import { FilterBar } from "@/components/sections/filter-bar/FilterBar";
import { DeviceStatusRow } from "./device-status/DeviceStatusRow";
import { OfflineRegionCard } from "./offline-region/OfflineRegionCard";
import { DeviceStatusDonutCard } from "./device-status-chart/DeviceStatusDonutCard";
import { AvailabilityChartCard } from "./availability-chart/AvailabilityChartCard";
import { DevicesByCustomerTable } from "./devices-table/DevicesByCustomerTable";

const NOC_FILTERS = [
  { label: "All customers", width: 87.18 },
  { label: "All projects", width: 71.711 },
  { label: "All partners", width: 73.828 },
  { label: "Today", width: 37.578 },
];

/** "NOC operations" nav destination: device health and where incidents are happening right now. */
export function NocOperationsPage() {
  return (
    <>
      <Header title="NOC operations" subtitle="Device health and where incidents are happening now" />
      <FilterBar filters={NOC_FILTERS} />
      <main className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] p-[20px] justify-start items-start">
        <DeviceStatusRow />
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-stretch">
          <OfflineRegionCard />
          <div className="box-border [flex:1_1_0] min-w-0 h-fit flex flex-col gap-[12px] justify-start items-stretch">
            <DeviceStatusDonutCard />
            <AvailabilityChartCard />
          </div>
        </div>
        <DevicesByCustomerTable />
      </main>
    </>
  );
}
