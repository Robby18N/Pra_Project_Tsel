import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrendUpIcon, TrendDownIcon } from "@/components/icons/misc-icons";
import { RankBadge } from "./RankBadge";
import type { RankedListCardData } from "./ranked-list-data";

interface RankedListCardProps {
  data: RankedListCardData;
  className?: string;
}

/** A ranked top-5 list card (causes, partners, resolve time, repeat incidents, follow-up status). */
export function RankedListCard({ data, className = "" }: RankedListCardProps) {
  const TrendIcon = data.trailingBadge?.direction === "up" ? TrendUpIcon : TrendDownIcon;

  return (
    <Card className={`h-full min-w-0 rounded-[16px] flex flex-col gap-[16px] p-[16px] justify-start items-start ${className}`}>
      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-start items-start">
        <SectionHeading title={data.title} subtitle={data.subtitle} className="flex-1 min-w-0" />
        {data.trailingBadge && (
          <div
            className="box-border shrink-0 h-fit flex flex-row gap-[4px] p-[2px_8px] justify-center items-center rounded-[9999px]"
            style={{ background: data.trailingBadge.background }}
          >
            <TrendIcon color={data.trailingBadge.color} />
            <div className="text-[14px]/[20px] box-border font-normal text-left whitespace-nowrap" style={{ color: data.trailingBadge.color }}>
              {data.trailingBadge.text}
            </div>
          </div>
        )}
      </div>

      <div className="box-border w-full flex-1 flex flex-col gap-[8px] justify-between items-start">
        {data.items.map((item) => (
          <div key={item.rank} className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-start items-center">
            <RankBadge rank={item.rank} />
            <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[10px] justify-between items-start">
              <div className="text-[14px]/[20px] box-border text-[#475569ff] font-normal text-left whitespace-nowrap">
                {item.label}
              </div>
              <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[4px] justify-start items-center">
                <div className="text-[14px]/[20px] box-border text-[#0f172aff] font-bold text-left whitespace-nowrap">
                  {item.primary}
                </div>
                {item.secondary && (
                  <div className="text-[14px]/[20px] box-border text-[#475569ff] font-normal text-left whitespace-nowrap">
                    {item.secondary}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
