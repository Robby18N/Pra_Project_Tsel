export type AlertSeverity = "Critical" | "Major" | "Minor" | "Info";
export type AlertStatus = "Open" | "Progress" | "Escalated";

export interface AlertDatum {
  time: string;
  deviceId: string;
  customer: string;
  severity: AlertSeverity;
  status: AlertStatus;
  message: string;
  via: string;
}

export const SEVERITY_BADGE_CLASSES: Record<AlertSeverity, { className: string; textClassName: string }> = {
  Critical: { className: "bg-[#ef44441a] border border-[#ef444440]", textClassName: "text-[#dc2626ff]" },
  Major: { className: "bg-[#f973161a] border border-[#f973164d]", textClassName: "text-[#ea580cff]" },
  Minor: { className: "bg-[#3b82f61a] border border-[#3b82f640]", textClassName: "text-[#2b56ceff]" },
  Info: { className: "bg-[#94a3b81a] border border-[#94a3b84d]", textClassName: "text-[#475569ff]" },
};

export const STATUS_BADGE_CLASSES: Record<AlertStatus, string> = {
  Open: "bg-[#3b82f6ff]",
  Progress: "bg-[#eab308ff]",
  Escalated: "bg-[#ef4444ff]",
};

/** The 8 most recent alerts shown on the Alert Monitoring page, newest first. */
export const LATEST_ALERTS: AlertDatum[] = [
  { time: "16:15", deviceId: "RTR-BDG-0231", customer: "Pegadaian", severity: "Minor", status: "Progress", message: "Packet loss sustained above 10% for 15 minutes", via: "Sent via Telegram · Jabodetabek" },
  { time: "16:07", deviceId: "IOT-SMG-0455", customer: "Jasa Marga", severity: "Major", status: "Progress", message: "Sensor gateway reporting intermittent timeout", via: "Sent via WhatsApp · Jawa Tengah" },
  { time: "15:59", deviceId: "POS-BDG-1204", customer: "Pertamina Retail", severity: "Major", status: "Open", message: "Transaction service returning HTTP 503", via: "Sent via Telegram · Jawa Barat" },
  { time: "15:48", deviceId: "SW-DPS-0021", customer: "Angkasa Pura", severity: "Major", status: "Escalated", message: "Power supply unit 2 offline, running on single PSU", via: "Sent via WhatsApp · Bali & Nusa Tenggara" },
  { time: "16:15", deviceId: "RTR-BDG-0231", customer: "Pegadaian", severity: "Major", status: "Open", message: "Packet loss sustained above 10% for 15 minutes", via: "Sent via Telegram · Jabodetabek" },
  { time: "16:07", deviceId: "IOT-SMG-0455", customer: "Jasa Marga", severity: "Minor", status: "Progress", message: "Sensor gateway reporting intermittent timeout", via: "Sent via WhatsApp · Jawa Tengah" },
  { time: "15:59", deviceId: "POS-BDG-1204", customer: "Pertamina Retail", severity: "Major", status: "Progress", message: "Transaction service returning HTTP 503", via: "Sent via Telegram · Jawa Barat" },
  { time: "15:48", deviceId: "SW-DPS-0021", customer: "Angkasa Pura", severity: "Major", status: "Escalated", message: "Power supply unit 2 offline, running on single PSU", via: "Sent via WhatsApp · Bali & Nusa Tenggara" },
];
