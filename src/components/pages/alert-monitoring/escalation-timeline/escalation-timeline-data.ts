export type TimelineStepState = "done" | "current" | "pending";

export interface TimelineStep {
  time: string;
  title: string;
  description: string;
  state: TimelineStepState;
}

/** Escalation history for the most recent critical alert, ALM-88421. */
export const ESCALATION_TIMELINE: TimelineStep[] = [
  { time: "07:10", title: "Alert created", description: "Rectifier power loss detected on BTS-JKT-0042", state: "done" },
  { time: "07:11", title: "WhatsApp sent", description: "Notification delivered to L0 duty group", state: "done" },
  { time: "07:14", title: "L0 acknowledged", description: "Acknowledged by Rizky Pratama (L0 shift A)", state: "done" },
  { time: "07:18", title: "Partner escalated", description: "Handed off to AI Rudder as ticket TKT-2026-00312", state: "done" },
  { time: "07:32", title: "Partner on site", description: "Field engineer dispatched, ETA 45 minutes", state: "current" },
  { time: "—", title: "Service restored", description: "Pending device recovery confirmation", state: "pending" },
];
