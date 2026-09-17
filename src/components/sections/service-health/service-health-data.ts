import type { ProgressSegment } from "@/components/ui/SegmentedProgressBar";

export interface ServiceHealthSegment extends ProgressSegment {
  displayValue: string;
  /** Legend dot color/gradient — kept separate because the source design
   * uses a slightly different tone for the "Warning" legend dot than the
   * (solid) bar segment itself. */
  legendBackground: string;
}

export const SERVICE_HEALTH_SEGMENTS: ServiceHealthSegment[] = [
  {
    label: "Healthy",
    value: 96.5,
    displayValue: "96.5%",
    background: "linear-gradient(180deg, #22c55e 0%, #188c43 100%)",
    legendBackground: "linear-gradient(180deg, #22c55e 0%, #188c43 100%)",
  },
  {
    label: "Warning",
    value: 2.7,
    displayValue: "2.7%",
    background: "#ffbb02",
    legendBackground: "linear-gradient(180deg, #ffc100 0%, #ffb303 100%)",
  },
  {
    label: "Critical",
    value: 0.8,
    displayValue: "0.8%",
    background: "linear-gradient(180deg, #ef4444 0%, #b63535 100%)",
    legendBackground: "linear-gradient(180deg, #ef4444 0%, #b63535 100%)",
  },
];

export const DEVICE_COUNT_LABEL = "Across 12,648 devices";

export const SERVICE_HEALTH_SUMMARY =
  "96.5% of sites are running normally. The 0.8% in critical state is where the 12 critical alarms are concentrated.";
