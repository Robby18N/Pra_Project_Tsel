import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDownIcon } from "@/components/icons/misc-icons";
import { ClockIcon } from "@/components/icons/escalation-icons";
import { ESCALATION_STEPS, ESCALATION_CONNECTORS, ESCALATION_STATS } from "./escalation-path-data";

/** "Escalation path" card: the customer → Helpdesk L0 → partner hand-off flow, with timing at each hop. */
export function EscalationPathCard() {
  return (
    <Card className="w-[360px] shrink-0 rounded-[12px] flex flex-col gap-0 justify-start items-start">
      <div className="box-border w-full h-fit shrink-0 p-[16px_16px_0px_16px]">
        <SectionHeading title="Escalation path" subtitle="From customer report to partner handoff" />
      </div>

      <div className="box-border w-full flex-1 flex flex-col gap-[20px] p-[16px] justify-start items-start">
        <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[8px] justify-start items-start">
          {ESCALATION_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="box-border w-full h-fit shrink-0 flex flex-col gap-[8px] justify-start items-start">
                <div
                  className={`box-border w-full h-fit shrink-0 flex flex-row gap-[12px] p-[12px] justify-start items-center border rounded-[12px] ${
                    step.tint ? step.tint.card : "bg-white border-[#e2e8f0]"
                  }`}
                >
                  <div
                    className={`box-border w-[32px] shrink-0 h-[32px] flex flex-row gap-0 justify-center items-center rounded-[8px] ${
                      step.tint ? step.tint.iconBg : "bg-[#f8fafcff]"
                    }`}
                  >
                    <Icon color={step.tint?.iconColor} />
                  </div>
                  <div className="box-border h-fit flex flex-col gap-0 justify-start items-start">
                    <div className="text-[14px]/[20px] box-border text-[#020617ff] font-medium text-left whitespace-nowrap">
                      {step.title}
                    </div>
                    <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
                      {step.description}
                    </div>
                  </div>
                </div>

                {ESCALATION_CONNECTORS[index] && (
                  <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[8px] pl-[24px] justify-start items-center">
                    <ChevronDownIcon />
                    <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[6px] justify-start items-center">
                      <ClockIcon />
                      <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
                        {ESCALATION_CONNECTORS[index].label}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-stretch">
          {ESCALATION_STATS.map((stat) => (
            <div key={stat.label} className="box-border flex-1 h-full flex flex-col gap-0 p-[12px] justify-start items-start bg-[#f8fafcff] border border-[#e2e8f0] rounded-[12px]">
              <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
                {stat.label}
              </div>
              <div className="text-[20px]/[24px] box-border text-[#020617ff] font-semibold text-left whitespace-nowrap">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
