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

/** Every page reachable from the sidebar. Only a subset has real content so far (see page.tsx); the rest fall back to a "coming soon" placeholder. */
export type PageId =
  | "executive"
  | "noc-operations"
  | "root-cause"
  | "helpdesk"
  | "sla"
  | "partner-performance"
  | "alert-monitoring";

export interface NavItem {
  id: PageId;
  label: string;
  icon: ComponentType<{ color?: string }>;
  /** Fixed label width, matching the source design's per-label measurements. */
  width: number;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "executive", label: "Executive", icon: ExecutiveIcon, width: 63.867 },
  { id: "noc-operations", label: "NOC operations", icon: NocOperationsIcon, width: 101.109 },
  { id: "root-cause", label: "Root cause", icon: RootCauseIcon, width: 71.891 },
  { id: "helpdesk", label: "Helpdesk", icon: HelpdeskIcon, width: 60.805 },
  { id: "sla", label: "SLA", icon: SlaIcon, width: 26.016 },
  { id: "partner-performance", label: "Partner performance", icon: PartnerPerformanceIcon, width: 132.133 },
  { id: "alert-monitoring", label: "Alert monitoring", icon: AlertMonitoringIcon, width: 102.75 },
];
