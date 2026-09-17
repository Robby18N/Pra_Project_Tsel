import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrendUpIcon } from "@/components/icons/misc-icons";
import { StatTile } from "./StatTile";
import { ATTENTION_STATS, ATTENTION_FOOTNOTE } from "./attention-data";

/** "What needs attention" panel: 4 shift stat tiles plus a trend footnote. */
export function AttentionCard() {
  return (
    <Card className="w-[373px] shrink-0 h-fit rounded-[12px] flex flex-col gap-0 justify-start items-start">
      <div className="box-border w-full h-fit shrink-0 p-[16px_16px_0px_16px]">
        <SectionHeading title="What needs attention" subtitle="Snapshot for the current shift" />
      </div>
      <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] p-[16px] justify-start items-start">
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-start">
          <StatTile {...ATTENTION_STATS[0]} />
          <StatTile {...ATTENTION_STATS[1]} />
        </div>
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-start">
          <StatTile {...ATTENTION_STATS[2]} />
          <StatTile {...ATTENTION_STATS[3]} />
        </div>
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[8px] p-[12px] justify-start items-center bg-[#22c55e1a] border border-[#22c55e4d] rounded-[12px]">
          <TrendUpIcon />
          <p className="text-[14px]/[20px] box-border w-[286px] text-[#334155ff] font-normal text-left">
            {ATTENTION_FOOTNOTE}
          </p>
        </div>
      </div>
    </Card>
  );
}
