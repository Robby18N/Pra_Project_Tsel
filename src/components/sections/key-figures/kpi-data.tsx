import type { ComponentType } from "react";
import {
  CustomersIcon,
  PartnersIcon,
  ActiveProjectsIcon,
  TotalDevicesIcon,
  OnlineDevicesIcon,
  OfflineDevicesIcon,
} from "@/components/icons/kpi-icons";

export interface KpiBadge {
  text: string;
  className: string;
  textClassName: string;
}

export interface KpiDatum {
  icon: ComponentType<{ color?: string }>;
  iconWrapClassName: string;
  value: string;
  label: string;
  subLabel?: string;
  badge?: KpiBadge;
}

export const KPI_DATA: KpiDatum[] = [
  {
    icon: CustomersIcon,
    iconWrapClassName: "bg-[#3b82f614] border border-[#3b82f633]",
    value: "15",
    label: "Customers",
    subLabel: "Under managed service",
  },
  {
    icon: PartnersIcon,
    iconWrapClassName: "bg-[#3b82f614] border border-[#3b82f633]",
    value: "14",
    label: "Partners",
    subLabel: "13 active, 1 onboarding",
  },
  {
    icon: ActiveProjectsIcon,
    iconWrapClassName: "bg-[#3b82f614] border border-[#3b82f633]",
    value: "29",
    label: "Active projects",
    subLabel: "All monitored",
  },
  {
    icon: TotalDevicesIcon,
    iconWrapClassName: "bg-[#3b82f614] border border-[#3b82f633]",
    value: "12,648",
    label: "Total devices",
    subLabel: "+35 this month",
  },
  {
    icon: OnlineDevicesIcon,
    iconWrapClassName: "bg-[#22c55e14] border border-[#22c55e33]",
    value: "12,102",
    label: "Online devices",
    badge: {
      text: "95.7% healthy",
      className: "bg-[#22c55e1a] border border-[#22c55e4d]",
      textClassName: "text-[#020617ff]",
    },
  },
  {
    icon: OfflineDevicesIcon,
    iconWrapClassName: "bg-[#ef444414] border border-[#ef444433]",
    value: "438",
    label: "Offline devices",
    badge: {
      text: "Needs attention",
      className: "bg-[#ef44441a] border border-[#ef44444d]",
      textClassName: "text-[#020617ff]",
    },
  },
];
