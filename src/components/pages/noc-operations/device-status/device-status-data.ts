import type { ComponentType } from "react";
import { OnlineDevicesIcon, OfflineDevicesIcon } from "@/components/icons/kpi-icons";
import { MaintenanceIcon, UnknownStatusIcon } from "@/components/icons/status-icons";

export interface DeviceStatusDatum {
  icon: ComponentType<{ color?: string }>;
  value: string;
  label: string;
  color: string;
}

export const DEVICE_STATUS_DATA: DeviceStatusDatum[] = [
  { icon: OnlineDevicesIcon, value: "12,102", label: "Online", color: "#22c55eff" },
  { icon: OfflineDevicesIcon, value: "438", label: "Offline", color: "#ef4444ff" },
  { icon: MaintenanceIcon, value: "85", label: "Maintenance", color: "#eab308ff" },
  { icon: UnknownStatusIcon, value: "23", label: "Unknown", color: "#64748bff" },
];
