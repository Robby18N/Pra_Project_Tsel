import type { ComponentType } from "react";
import { OnlineDevicesIcon, OfflineDevicesIcon } from "@/components/icons/kpi-icons";
import { MaintenanceIcon, UnknownStatusIcon } from "@/components/icons/status-icons";

export interface DeviceStatusDatum {
  icon: ComponentType<{ color?: string }>;
  value: string;
  label: string;
  color: string;
  tint: string;
}

export const DEVICE_STATUS_DATA: DeviceStatusDatum[] = [
  { icon: OnlineDevicesIcon, value: "12,102", label: "Online", color: "#22c55eff", tint: "#22c55e1a" },
  { icon: OfflineDevicesIcon, value: "438", label: "Offline", color: "#ef4444ff", tint: "#ef44441a" },
  { icon: MaintenanceIcon, value: "85", label: "Maintenance", color: "#eab308ff", tint: "#eab3081a" },
  { icon: UnknownStatusIcon, value: "23", label: "Unknown", color: "#64748bff", tint: "#64748b1a" },
];
