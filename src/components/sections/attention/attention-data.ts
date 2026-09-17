export interface AttentionStat {
  label: string;
  value: string;
  badgeLabel: string;
  badgeClassName: string;
  badgeTextClassName: string;
}

export const ATTENTION_STATS: AttentionStat[] = [
  { label: "Active alarms", value: "124", badgeLabel: "Open", badgeClassName: "bg-[#ef44441a] border border-[#ef44444d]", badgeTextClassName: "text-[#b91c1cff]" },
  { label: "Open tickets", value: "33", badgeLabel: "Open", badgeClassName: "bg-[#ef44441a] border border-[#ef44444d]", badgeTextClassName: "text-[#b91c1cff]" },
  { label: "SLA at risk", value: "4", badgeLabel: "Open", badgeClassName: "bg-[#ef44441a] border border-[#ef44444d]", badgeTextClassName: "text-[#b91c1cff]" },
  { label: "Resolved today", value: "18", badgeLabel: "Closed", badgeClassName: "bg-[#22c55e1a] border border-[#22c55e4d]", badgeTextClassName: "text-[#16a34aff]" },
];

export const ATTENTION_FOOTNOTE = "Repeat incidents are down 18% against the previous period.";
