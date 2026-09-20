export interface AlertKpiDatum {
  label: string;
  value: number;
  color: string;
}

/** Counts backing the severity KPI tiles at the top of Alert Monitoring. */
export const ALERT_KPI_DATA: AlertKpiDatum[] = [
  { label: "Critical", value: 12, color: "#ef4444ff" },
  { label: "Major", value: 27, color: "#f97316ff" },
  { label: "Minor", value: 85, color: "#3b82f6ff" },
  { label: "Info", value: 133, color: "#94a3b8ff" },
];
