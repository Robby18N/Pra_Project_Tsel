import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { DEVICES_TABLE_DATA } from "./devices-table-data";

const COLUMNS = ["Customer", "Region", "Devices", "Online", "Offline", "Maintenance", "Availability"];

/** "Devices by customer" data table — one row per managed customer. */
export function DevicesByCustomerTable() {
  return (
    <Card className="w-full rounded-[12px] flex flex-col gap-0 justify-start items-start">
      <div className="box-border w-full h-fit shrink-0 p-[16px_16px_0px_16px]">
        <SectionHeading title="Devices by customer" subtitle="All managed customers, this period" />
      </div>
      <div className="box-border w-full h-fit shrink-0 p-[16px] overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#e2e8f0]">
              {COLUMNS.map((col) => (
                <th
                  key={col}
                  className={`p-[8px_12px] text-[12px]/[16px] text-[#64748bff] font-medium whitespace-nowrap ${
                    col === "Customer" || col === "Region" ? "text-left" : "text-right"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DEVICES_TABLE_DATA.map((row) => (
              <tr key={row.customer} className="border-b border-[#f1f5f9] last:border-b-0">
                <td className="p-[10px_12px] text-[14px]/[20px] text-[#020617ff] font-medium whitespace-nowrap">
                  {row.customer}
                </td>
                <td className="p-[10px_12px] text-[14px]/[20px] text-[#334155ff] font-normal whitespace-nowrap">
                  {row.region}
                </td>
                <td className="p-[10px_12px] text-[14px]/[20px] text-[#020617ff] font-normal text-right whitespace-nowrap">
                  {row.devices.toLocaleString()}
                </td>
                <td className="p-[10px_12px] text-[14px]/[20px] text-[#16a34aff] font-normal text-right whitespace-nowrap">
                  {row.online.toLocaleString()}
                </td>
                <td className="p-[10px_12px] text-[14px]/[20px] text-[#ef4444ff] font-normal text-right whitespace-nowrap">
                  {row.offline.toLocaleString()}
                </td>
                <td className="p-[10px_12px] text-[14px]/[20px] text-[#eab308ff] font-normal text-right whitespace-nowrap">
                  {row.maintenance.toLocaleString()}
                </td>
                <td className="p-[10px_12px] text-right whitespace-nowrap">
                  <div className="flex justify-end">
                    <AvailabilityBadge availability={row.availability} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
