import { DeviceStatusCard } from "./DeviceStatusCard";
import { DEVICE_STATUS_DATA } from "./device-status-data";

/** Row of 4 device-status tiles at the top of the NOC Operations page. */
export function DeviceStatusRow() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-stretch">
      {DEVICE_STATUS_DATA.map((status) => (
        <DeviceStatusCard key={status.label} {...status} />
      ))}
    </div>
  );
}
