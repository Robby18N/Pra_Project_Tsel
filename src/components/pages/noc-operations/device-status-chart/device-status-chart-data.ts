export interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

export const DONUT_SEGMENTS: DonutSegment[] = [
  { label: "Online", value: 12102, color: "#22c55eff" },
  { label: "Offline", value: 438, color: "#ef4444ff" },
  { label: "Maintenance", value: 85, color: "#eab308ff" },
  { label: "Unknown", value: 23, color: "#64748bff" },
];

export const DONUT_TOTAL = DONUT_SEGMENTS.reduce((sum, s) => sum + s.value, 0);
export const ONLINE_PERCENT = ((DONUT_SEGMENTS[0].value / DONUT_TOTAL) * 100).toFixed(1);
