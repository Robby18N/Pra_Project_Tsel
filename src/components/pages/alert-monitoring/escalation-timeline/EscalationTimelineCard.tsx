import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ESCALATION_TIMELINE, type TimelineStep } from "./escalation-timeline-data";

const DOT_CLASSES: Record<TimelineStep["state"], string> = {
  done: "bg-[#22c55eff] border-2 border-[#22c55eff]",
  current: "bg-white border-2 border-[#3b82f6ff]",
  pending: "bg-white border-2 border-[#e2e8f0ff]",
};

const LINE_CLASSES: Record<TimelineStep["state"], string> = {
  done: "bg-[#22c55e4d]",
  current: "bg-[#e2e8f0ff]",
  pending: "",
};

/** "Escalation timeline" card: vertical step-by-step history of the most recent critical alert. */
export function EscalationTimelineCard() {
  return (
    <Card className="w-full h-fit rounded-[12px] flex flex-col gap-0 justify-start items-start overflow-hidden">
      <div className="box-border w-full h-fit shrink-0 p-[16px_16px_0px_16px]">
        <SectionHeading title="Escalation timeline" subtitle="Most recent critical alert, ALM-88421" />
      </div>

      <div className="box-border w-full h-fit flex flex-col p-[16px] justify-start items-start">
        {ESCALATION_TIMELINE.map((step, index) => {
          const isLast = index === ESCALATION_TIMELINE.length - 1;
          const textColor = step.state === "pending" ? "text-[#64748bff]" : "text-[#020617ff]";
          return (
            <div key={`${step.title}-${index}`} className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-stretch">
              <div className="box-border w-fit shrink-0 h-full flex flex-col gap-0 justify-start items-center">
                <div className="box-border w-fit h-fit shrink-0 pt-[4px]">
                  <div className={`box-border w-[12px] h-[12px] shrink-0 rounded-[9999px] ${DOT_CLASSES[step.state]}`} />
                </div>
                {!isLast && <div className={`box-border w-[2px] flex-1 ${LINE_CLASSES[step.state]}`} />}
              </div>
              <div className="box-border flex-1 min-w-0 h-fit flex flex-col gap-0 pb-[16px] justify-start items-start">
                <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[8px] justify-start items-baseline flex-wrap">
                  <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
                    {step.time}
                  </div>
                  <div className={`text-[14px]/[20px] box-border font-medium text-left whitespace-nowrap ${textColor}`}>
                    {step.title}
                  </div>
                </div>
                <div className="box-border w-full h-fit shrink-0 pt-[2px] flex flex-col gap-0 justify-start items-start">
                  <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left">
                    {step.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
