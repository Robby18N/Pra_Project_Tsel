export interface SeveritySegment {
  label: string;
  count: number;
  percent: number;
  color: string;
}

/** "Alert by Severity" breakdown across both messaging channels. */
export const SEVERITY_BREAKDOWN: SeveritySegment[] = [
  { label: "Critical", count: 34, percent: 44, color: "#ef4444ff" },
  { label: "Major", count: 20, percent: 30, color: "#f97316ff" },
  { label: "Minor", count: 16, percent: 16, color: "#3b82f6ff" },
  { label: "Info", count: 10, percent: 10, color: "#94a3b8ff" },
];
