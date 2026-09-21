export interface VerticalBarDatum {
  label: string;
  value: number;
  displayValue: string;
  /** Any valid CSS `background` value — solid color or gradient. */
  background: string;
}

interface VerticalBarChartProps {
  data: VerticalBarDatum[];
  className?: string;
  /** Height of the tallest bar, in px. Shorter bars scale proportionally. Defaults to 220. */
  height?: number;
}

/**
 * Column chart used by the "How long tickets have been open" and "Escalation
 * priority" cards — one bar per bucket, its value above and the bucket label
 * below a divider line. Bar heights are derived from `value` so they always
 * stay proportional to the underlying data.
 */
export function VerticalBarChart({ data, className = "", height = 220 }: VerticalBarChartProps) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className={`box-border w-full flex-1 flex flex-col gap-0 justify-start items-start ${className}`}>
      <div className="box-border w-full flex flex-row gap-[12px] justify-start items-end" style={{ height }}>
        {data.map((d) => (
          <div key={d.label} className="box-border flex-1 h-fit flex flex-col gap-[8px] justify-end items-center">
            <div className="text-[14px]/[16px] box-border text-[#0f172aff] font-semibold text-left whitespace-nowrap">
              {d.displayValue}
            </div>
            <div
              className="w-full rounded-t-[8px]"
              style={{ height: Math.max((d.value / max) * height, 4), background: d.background }}
            />
          </div>
        ))}
      </div>
      <div className="box-border w-full h-[25px] shrink-0 flex flex-row gap-[12px] pt-[8px] justify-start items-start border-t border-[#e2e8f0]">
        {data.map((d) => (
          <div key={d.label} className="text-[12px]/[16px] box-border flex-1 text-[#475569ff] font-normal text-center">
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}
