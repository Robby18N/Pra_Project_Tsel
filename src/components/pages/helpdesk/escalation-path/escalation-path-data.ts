import type { ComponentType } from "react";
import { PhoneRingingIcon, HeadsetIcon, WrenchIcon } from "@/components/icons/escalation-icons";

export interface EscalationStep {
  icon: ComponentType<{ color?: string }>;
  title: string;
  description: string;
  /** Highlight color for the active hand-off step; omitted for plain steps. */
  tint?: { card: string; iconBg: string; iconColor: string };
}

export interface EscalationConnector {
  label: string;
}

export const ESCALATION_STEPS: EscalationStep[] = [
  { icon: PhoneRingingIcon, title: "Customer", description: "Reports the fault" },
  {
    icon: HeadsetIcon,
    title: "Helpdesk L0",
    description: "Triage and first response",
    tint: { card: "bg-[#3b82f61a] border-[#3b82f64d]", iconBg: "bg-[#3b82f626]", iconColor: "#3b82f6ff" },
  },
  { icon: WrenchIcon, title: "Partner L1 / L2", description: "Field fix and verification" },
];

/** One connector between each pair of consecutive steps. */
export const ESCALATION_CONNECTORS: EscalationConnector[] = [
  { label: "4 min to acknowledge" },
  { label: "7 min to hand off" },
];

export const ESCALATION_STATS = [
  { label: "Avg acknowledgement", value: "4 min" },
  { label: "Avg handoff", value: "7 min" },
];
