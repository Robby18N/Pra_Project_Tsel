export type TicketSeverity = "Critical" | "High" | "Medium" | "Low";
export type TicketSla = "At Risk" | "On Track";
export type TicketStatus = "Escalated" | "On Progress" | "Pending Customer" | "Open";

export interface TicketRow {
  ticket: string;
  customer: string;
  category: string;
  severity: TicketSeverity;
  owner: string;
  opened: string;
  aging: string;
  sla: TicketSla;
  status: TicketStatus;
}

export const SEVERITY_BADGE_CLASSES: Record<TicketSeverity, { className: string; textClassName: string }> = {
  Critical: { className: "bg-[#ef44441a] border border-[#ef44444d]", textClassName: "text-[#b91c1cff]" },
  High: { className: "bg-[#f973161a] border border-[#f973164d]", textClassName: "text-[#ea580cff]" },
  Medium: { className: "bg-[#eab3081a] border border-[#eab30840]", textClassName: "text-[#eab308ff]" },
  Low: { className: "bg-[#f8fafcff] border border-[#e2e8f0ff]", textClassName: "text-[#475569ff]" },
};

export const SLA_BADGE_CLASSES: Record<TicketSla, { className: string; textClassName: string }> = {
  "At Risk": { className: "bg-[#ef44441a] border border-[#ef44444d]", textClassName: "text-[#ef4444ff]" },
  "On Track": { className: "bg-[#03b8151a] border border-[#03b8154d]", textClassName: "text-[#03b815ff]" },
};

export const STATUS_BADGE_CLASSES: Record<TicketStatus, string> = {
  Escalated: "bg-[#ef4444ff]",
  "On Progress": "bg-[#eab308ff]",
  "Pending Customer": "bg-[#ea580cff]",
  Open: "bg-[#3b82f6ff]",
};

/** Active ticket queue, most recently opened first. Owner names are placeholder assignments (the design left "Lorem" in every row). */
export const TICKET_QUEUE: TicketRow[] = [
  { ticket: "TKT-2026-00312", customer: "Mitratel", category: "Tower Monitoring Nasional", severity: "Critical", owner: "Dimas A.", opened: "10 Sep 04:16", aging: "12h 24m", sla: "At Risk", status: "Escalated" },
  { ticket: "TKT-2026-00310", customer: "Pelindo", category: "Port Connectivity", severity: "Critical", owner: "Sarah W.", opened: "10 Sep 06:10", aging: "10h 30m", sla: "At Risk", status: "On Progress" },
  { ticket: "TKT-2026-00309", customer: "Pegadaian", category: "Branch Network", severity: "High", owner: "Budi S.", opened: "10 Sep 07:04", aging: "9h 36m", sla: "At Risk", status: "Escalated" },
  { ticket: "TKT-2026-00308", customer: "BSI", category: "Core Banking Link", severity: "High", owner: "Nadia R.", opened: "10 Sep 07:58", aging: "8h 42m", sla: "On Track", status: "On Progress" },
  { ticket: "TKT-2026-00306", customer: "Pertamina Retail", category: "SPBU Digital", severity: "High", owner: "Fajar T.", opened: "10 Sep 09:28", aging: "7h 12m", sla: "On Track", status: "Escalated" },
  { ticket: "TKT-2026-00305", customer: "Bulog", category: "Warehouse Link", severity: "High", owner: "Dimas A.", opened: "10 Sep 10:04", aging: "6h 36m", sla: "On Track", status: "On Progress" },
  { ticket: "TKT-2026-00304", customer: "Angkasa Pura", category: "Airport Ops Network", severity: "Medium", owner: "Sarah W.", opened: "10 Sep 10:34", aging: "6h 6m", sla: "On Track", status: "Escalated" },
  { ticket: "TKT-2026-00302", customer: "Mitratel", category: "Tower Monitoring Nasional", severity: "Medium", owner: "Budi S.", opened: "10 Sep 11:40", aging: "5h", sla: "On Track", status: "On Progress" },
  { ticket: "TKT-2026-00296", customer: "Angkasa Pura", category: "Airport Ops Network", severity: "Medium", owner: "Nadia R.", opened: "10 Sep 10:34", aging: "3h 12m", sla: "On Track", status: "Pending Customer" },
  { ticket: "TKT-2026-00290", customer: "Mitratel", category: "Tower Monitoring Nasional", severity: "Medium", owner: "Fajar T.", opened: "10 Sep 15:46", aging: "1h 30m", sla: "On Track", status: "Open" },
  { ticket: "TKT-2026-00289", customer: "Pertamina Retail", category: "SPBU Digital", severity: "Low", owner: "Dimas A.", opened: "10 Sep 15:46", aging: "1h 18m", sla: "On Track", status: "Pending Customer" },
  { ticket: "TKT-2026-00287", customer: "Bulog", category: "Warehouse Link", severity: "Low", owner: "Sarah W.", opened: "10 Sep 10:04", aging: "54m", sla: "On Track", status: "Open" },
  { ticket: "TKT-2026-00282", customer: "Angkasa Pura", category: "Airport Ops Network", severity: "Low", owner: "Budi S.", opened: "10 Sep 15:52", aging: "48m", sla: "On Track", status: "Open" },
  { ticket: "TKT-2026-00280", customer: "Mitratel", category: "Tower Monitoring Nasional", severity: "Low", owner: "Nadia R.", opened: "10 Sep 16:16", aging: "24m", sla: "On Track", status: "Open" },
];
