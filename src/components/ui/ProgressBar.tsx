interface ProgressBarProps {
  /** 0-100 */
  percent: number;
  /** Any valid CSS `background` value — solid color or gradient. */
  background: string;
  className?: string;
}

/**
 * Single-value horizontal progress bar (used by the "Top 5 Customer
 * availability" rows). See `SegmentedProgressBar` for the multi-segment
 * variant used by the "Service health" panel.
 */
export function ProgressBar({ percent, background, className = "" }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div
      className={`box-border w-full h-[6px] shrink-0 overflow-hidden rounded-[9999px] bg-[#f1f5f9] ${className}`}
    >
      <div
        className="h-full rounded-[9999px]"
        style={{ width: `${clamped}%`, background }}
      />
    </div>
  );
}
