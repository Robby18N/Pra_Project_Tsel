export type TrendDirection = "up" | "down";

export interface RootCauseKpiDatum {
  key: string;
  label: string;
  iconColor: string;
  iconBg: string;
  iconBorder: string;
  /** Big stat display, e.g. "96.8%" or "3.4 hrs". */
  value: string;
  /** 0-100 fill for the proportional bar below the stat. */
  barPercent: number;
  barBackground: string;
  trendDirection: TrendDirection;
  trendColor: string;
  trendBadgeBg: string;
  delta: string;
  captionColor: string;
  caption: string;
}

/**
 * The three "Card KPI" tiles at the top of the Root Cause page. The source
 * design reused one KPI-tile template for all three and left every value
 * (96.8% / +2.2 pt vs rc1 / "Up from 97.8%...") identically copy-pasted
 * across them; these are distinct, plausible per-card figures instead.
 */
export const ROOT_CAUSE_KPI_DATA: RootCauseKpiDatum[] = [
  {
    key: "total-incident",
    label: "Total Incident",
    iconColor: "#2f5ee2ff",
    iconBg: "#eaeffcff",
    iconBorder: "#2f5ee23d",
    value: "96.8%",
    barPercent: 96.8,
    barBackground: "linear-gradient(0deg, #2f5ee2ff 0.256%, #7493ecff 99.744%)",
    trendDirection: "up",
    trendColor: "#22c55eff",
    trendBadgeBg: "#f0fdf4ff",
    delta: "+2.2 pt vs rc1",
    captionColor: "#22c55eff",
    caption: "Up from 94.6% resolved in the previous cycle.",
  },
  {
    key: "repeat-incident",
    label: "Repeat Incident",
    iconColor: "#a855f7ff",
    iconBg: "#faf5ffff",
    iconBorder: "#a855f73d",
    value: "18.4%",
    barPercent: 18.4,
    barBackground: "linear-gradient(0deg, #a855f7ff 0.256%, #c084fcff 99.744%)",
    trendDirection: "down",
    trendColor: "#22c55eff",
    trendBadgeBg: "#f0fdf4ff",
    delta: "-3.1 pt vs rc1",
    captionColor: "#22c55eff",
    caption: "Down from 21.5% in the previous cycle.",
  },
  {
    key: "avg-resolution-time",
    label: "Average Resolution Time",
    iconColor: "#22c55eff",
    iconBg: "#f0fdf4ff",
    iconBorder: "#22c55e3d",
    value: "3.4 hrs",
    barPercent: 57,
    barBackground: "linear-gradient(0deg, #22c55eff 0.256%, #4ade80ff 99.744%)",
    trendDirection: "down",
    trendColor: "#22c55eff",
    trendBadgeBg: "#f0fdf4ff",
    delta: "-0.6 hrs vs rc1",
    captionColor: "#22c55eff",
    caption: "Down from 4.0 hrs in the previous cycle.",
  },
];
