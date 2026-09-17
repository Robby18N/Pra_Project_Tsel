export interface ProgressSegment {
  label: string;
  value: number;
  /** Any valid CSS `background` value — solid color or gradient. */
  background: string;
}

interface SegmentedProgressBarProps {
  segments: ProgressSegment[];
  className?: string;
  /** Track height in px. Defaults to the 14px outer / 12px inner from the source design. */
  height?: number;
}

/**
 * Stacked multi-segment progress bar — the "Service health" breakdown
 * (Healthy / Warning / Critical) is a single track split proportionally by
 * value, with only the first and last segments rounded. Percentages are
 * derived from `segments`, so the bar always reflects the underlying data.
 */
export function SegmentedProgressBar({ segments, className = "", height = 14 }: SegmentedProgressBarProps) {
  const total = segments.reduce((sum, segment) => sum + segment.value, 0) || 1;

  return (
    <div
      className={`box-border w-full shrink-0 flex flex-row overflow-hidden rounded-[9999px] border border-[#e2e8f0] bg-[#f1f5f9] ${className}`}
      style={{ height }}
      role="img"
      aria-label={segments.map((s) => `${s.label} ${s.value}%`).join(", ")}
    >
      {segments.map((segment, index) => (
        <div
          key={segment.label}
          className="h-full"
          style={{
            width: `${(segment.value / total) * 100}%`,
            background: segment.background,
            borderTopLeftRadius: index === 0 ? 9999 : 0,
            borderBottomLeftRadius: index === 0 ? 9999 : 0,
            borderTopRightRadius: index === segments.length - 1 ? 9999 : 0,
            borderBottomRightRadius: index === segments.length - 1 ? 9999 : 0,
          }}
        />
      ))}
    </div>
  );
}
