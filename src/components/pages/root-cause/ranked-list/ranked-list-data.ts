export interface RankedListItem {
  rank: number;
  label: string;
  /** Bold value shown at the end of the row, e.g. "34%" or "5.8 hrs". */
  primary: string;
  /** Muted parenthetical shown after `primary`, e.g. "(48)". Omit when there's nothing to add. */
  secondary?: string;
}

export interface TrailingBadge {
  direction: "up" | "down";
  color: string;
  background: string;
  text: string;
}

export interface RankedListCardData {
  key: string;
  title: string;
  subtitle: string;
  items: RankedListItem[];
  trailingBadge?: TrailingBadge;
}

/**
 * The five ranked-list cards on the Root Cause page. In the source design
 * every one of these reused the same template and was left with identical
 * copy-pasted rows (Tencent Cloud 35% (41), Network loss 28% (35), ...);
 * these are distinct, plausible per-card figures matching each card's own
 * subject instead.
 */
export const RANKED_LIST_DATA: RankedListCardData[] = [
  {
    key: "causes",
    title: "What caused the incidents",
    subtitle: "Share of all incidents this period",
    items: [
      { rank: 1, label: "Network loss", primary: "34%", secondary: "(48)" },
      { rank: 2, label: "Device failure", primary: "27%", secondary: "(38)" },
      { rank: 3, label: "Application error", primary: "19%", secondary: "(27)" },
      { rank: 4, label: "Power / environmental", primary: "12%", secondary: "(17)" },
      { rank: 5, label: "Others", primary: "8%", secondary: "(11)" },
    ],
  },
  {
    key: "by-partner",
    title: "Incidents by Partner",
    subtitle: "Highest contributors first",
    items: [
      { rank: 1, label: "Tencent Cloud", primary: "32%", secondary: "(45)" },
      { rank: 2, label: "Telkomsel NOC", primary: "24%", secondary: "(34)" },
      { rank: 3, label: "Biznet Metronet", primary: "18%", secondary: "(25)" },
      { rank: 4, label: "Lintas Data Prima", primary: "15%", secondary: "(21)" },
      { rank: 5, label: "Others", primary: "11%", secondary: "(16)" },
    ],
  },
  {
    key: "mttr",
    title: "Mean time to resolve",
    subtitle: "Average hours per incident type",
    items: [
      { rank: 1, label: "Power / environmental", primary: "5.8 hrs" },
      { rank: 2, label: "Device failure", primary: "4.2 hrs" },
      { rank: 3, label: "Network loss", primary: "3.1 hrs" },
      { rank: 4, label: "Application error", primary: "2.4 hrs" },
      { rank: 5, label: "Others", primary: "1.6 hrs" },
    ],
  },
  {
    key: "repeat-incidents",
    title: "Repeat incidents",
    subtitle: "Same root cause seen again within 30 days",
    trailingBadge: { direction: "down", color: "#22c55eff", background: "#22c55e14", text: "8% vs last month" },
    items: [
      { rank: 1, label: "Network loss", primary: "29%", secondary: "(12)" },
      { rank: 2, label: "Device failure", primary: "24%", secondary: "(10)" },
      { rank: 3, label: "Application error", primary: "17%", secondary: "(7)" },
      { rank: 4, label: "Configuration drift", primary: "15%", secondary: "(6)" },
      { rank: 5, label: "Others", primary: "15%", secondary: "(6)" },
    ],
  },
  {
    key: "follow-up",
    title: "Follow-up status",
    subtitle: "Corrective work still outstanding",
    items: [
      { rank: 1, label: "Root cause confirmed", primary: "38%", secondary: "(16)" },
      { rank: 2, label: "Fix in progress", primary: "27%", secondary: "(11)" },
      { rank: 3, label: "Awaiting partner action", primary: "21%", secondary: "(9)" },
      { rank: 4, label: "Verification pending", primary: "9%", secondary: "(4)" },
      { rank: 5, label: "Closed", primary: "5%", secondary: "(2)" },
    ],
  },
];
