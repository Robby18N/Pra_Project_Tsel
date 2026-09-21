interface RankBadgeProps {
  rank: number;
}

const STYLES: Record<number, { bg: string; border?: string; color: string }> = {
  1: { bg: "#eab308ff", border: "#facc15ff", color: "#ffffffff" },
  2: { bg: "#64748bff", border: "#94a3b8ff", color: "#ffffffff" },
  3: { bg: "#a16207ff", border: "#854d0eff", color: "#ffffffff" },
};

/** Small numbered chip in front of each row of a ranked-list card — gold/silver/bronze for the top 3, a plain chip beyond that. */
export function RankBadge({ rank }: RankBadgeProps) {
  const style = STYLES[rank] ?? { bg: "#f1f5f9ff", color: "#0f172aff" };
  return (
    <div
      className="box-border w-[24px] shrink-0 h-[24px] flex flex-col gap-[12px] p-[4px] justify-center items-center rounded-[8px] overflow-hidden"
      style={{ background: style.bg, border: style.border ? `2px solid ${style.border}` : undefined }}
    >
      <div className="text-[12px]/[16px] box-border w-full font-bold text-center" style={{ color: style.color }}>
        {rank}
      </div>
    </div>
  );
}
