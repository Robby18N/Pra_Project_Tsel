import type { VerticalBarDatum } from "@/components/ui/VerticalBarChart";

const BLUE = "linear-gradient(0deg, #2f5ee2ff 0%, #7493ecff 100%)";
const ORANGE = "linear-gradient(180deg, #fdba74ff 0%, #f97316ff 100%)";
const RED = "linear-gradient(180deg, #ce605fff 0%, #c23837ff 100%)";

/** How long open tickets have been sitting in the queue, bucketed by age. */
export const TICKET_AGE_BUCKETS: VerticalBarDatum[] = [
  { label: "< 1 hour", value: 8, displayValue: "8", background: BLUE },
  { label: "1 – 4 hours", value: 11, displayValue: "11", background: BLUE },
  { label: "4 – 8 hours", value: 9, displayValue: "9", background: ORANGE },
  { label: "> 8 hours", value: 5, displayValue: "5", background: RED },
];

export const TICKET_AGE_TOTAL = TICKET_AGE_BUCKETS.reduce((sum, b) => sum + b.value, 0);
