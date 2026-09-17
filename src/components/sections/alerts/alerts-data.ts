export interface TrendDatum {
  label: string;
  dotColor: string;
  value: string;
  trend: string;
  trendBgClassName: string;
  trendTextClassName: string;
  color: string;
  data: number[];
}

/** Shared x-axis categories for all 5 sparklines (last 6 sampling days). */
export const TREND_X_LABELS = ["11-09", "13-09", "15-09", "17-09", "19-09", "21-09"];

export const TREND_DATA: TrendDatum[] = [
  {
    label: "Critical alarms",
    dotColor: "#fe0144ff",
    value: "12",
    trend: "+2",
    trendBgClassName: "bg-[#fef2f2ff]",
    trendTextClassName: "text-[#fe0144ff]",
    color: "#fe0144",
    data: [7, 8, 9, 8, 10, 12],
  },
  {
    label: "Major alarms",
    dotColor: "#f97316ff",
    value: "27",
    trend: "+5",
    trendBgClassName: "bg-[#fffbebff]",
    trendTextClassName: "text-[#f97316ff]",
    color: "#f97316",
    data: [19, 21, 20, 23, 25, 27],
  },
  {
    label: "Minor alarms",
    dotColor: "#3b82f6ff",
    value: "85",
    trend: "+8",
    trendBgClassName: "bg-[#eff6ffff]",
    trendTextClassName: "text-[#3b82f6ff]",
    color: "#3b82f6",
    data: [70, 74, 72, 78, 81, 85],
  },
  {
    label: "Open tickets",
    dotColor: "#eab308ff",
    value: "33",
    trend: "+4",
    trendBgClassName: "bg-[#fef3c7ff]",
    trendTextClassName: "text-[#eab308ff]",
    color: "#eab308",
    data: [26, 28, 27, 30, 31, 33],
  },
  {
    label: "SLA achievement",
    dotColor: "#22c55eff",
    value: "99.3%",
    trend: "+0.2%",
    trendBgClassName: "bg-[#ecfdf5ff]",
    trendTextClassName: "text-[#22c55eff]",
    color: "#22c55e",
    data: [98.9, 99.0, 98.8, 99.1, 99.2, 99.3],
  },
];
