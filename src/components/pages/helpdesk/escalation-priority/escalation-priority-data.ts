import type { VerticalBarDatum } from "@/components/ui/VerticalBarChart";

const RED = "linear-gradient(180deg, #ce605fff 0%, #c23837ff 100%)";
const ORANGE = "linear-gradient(180deg, #fdba74ff 0%, #f97316ff 100%)";
const YELLOW = "linear-gradient(0deg, #eab308ff 0%, #fde047ff 100%)";
const GRAY = "linear-gradient(0deg, #cbd5e1ff 0%, #f1f5f9ff 100%)";

/** Average time an active ticket has spent in queue, by severity. */
export const ESCALATION_PRIORITY: VerticalBarDatum[] = [
  { label: "Critical", value: 2.1, displayValue: "2.1h", background: RED },
  { label: "High", value: 1.4, displayValue: "1.4h", background: ORANGE },
  { label: "Medium", value: 3.5, displayValue: "3.5h", background: YELLOW },
  { label: "Low", value: 0.8, displayValue: "0.8h", background: GRAY },
];
