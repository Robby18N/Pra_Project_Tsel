export interface SeverityKpiDatum {
  label: string;
  value: number;
  color: string;
}

/** Default counts for the shared severity KPI row (Alert Monitoring, Helpdesk, ...). */
export const SEVERITY_KPI_DATA: SeverityKpiDatum[] = [
  { label: "Critical", value: 12, color: "#ef4444ff" },
  { label: "Major", value: 27, color: "#f97316ff" },
  { label: "Minor", value: 85, color: "#3b82f6ff" },
  { label: "Info", value: 133, color: "#94a3b8ff" },
];
