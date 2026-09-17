import type { ComponentType } from "react";
import {
  ExecutiveIcon,
  NocOperationsIcon,
  RootCauseIcon,
  HelpdeskIcon,
  SlaIcon,
  PartnerPerformanceIcon,
  AlertMonitoringIcon,
} from "@/components/icons/nav-icons";

export interface NavItem {
  label: string;
  icon: ComponentType;
  active: boolean;
  /** Fixed label width, matching the source design's per-label measurements. */
  width: number;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Executive", icon: ExecutiveIcon, active: true, width: 63.867 },
  { label: "NOC operations", icon: NocOperationsIcon, active: false, width: 101.109 },
  { label: "Root cause", icon: RootCauseIcon, active: false, width: 71.891 },
  { label: "Helpdesk", icon: HelpdeskIcon, active: false, width: 60.805 },
  { label: "SLA", icon: SlaIcon, active: false, width: 26.016 },
  { label: "Partner performance", icon: PartnerPerformanceIcon, active: false, width: 132.133 },
  { label: "Alert monitoring", icon: AlertMonitoringIcon, active: false, width: 102.75 },
];
