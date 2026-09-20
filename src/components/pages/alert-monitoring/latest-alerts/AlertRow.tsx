import { Badge } from "@/components/ui/Badge";
import { UncheckedBoxIcon } from "@/components/icons/misc-icons";
import { SEVERITY_BADGE_CLASSES, STATUS_BADGE_CLASSES, type AlertDatum } from "./alerts-data";

export function AlertRow({ time, deviceId, customer, severity, status, message, via }: AlertDatum) {
  const severityClasses = SEVERITY_BADGE_CLASSES[severity];

  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] p-[12px] justify-start items-start bg-white border border-[#e2e8f0] rounded-[12px]">
      <div className="box-border w-[32px] shrink-0 h-fit flex flex-col gap-0 pt-[4px] justify-start items-start">
        <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
          {time}
        </div>
      </div>
      <UncheckedBoxIcon />
      <div className="box-border flex-1 min-w-0 h-fit flex flex-col gap-0 justify-start items-start">
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[8px] justify-start items-center flex-wrap">
          <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center">
            <div className="text-[14px]/[20px] box-border text-[#020617ff] font-medium text-left whitespace-nowrap">
              {deviceId}
            </div>
            <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
              {customer}
            </div>
          </div>
          <Badge className={`p-[4px_10px] ${severityClasses.className}`} textClassName={`text-[12px]/[16px] font-normal ${severityClasses.textClassName}`}>
            {severity}
          </Badge>
          <Badge className={`p-[4px_10px] ${STATUS_BADGE_CLASSES[status]}`} textClassName="text-[12px]/[20px] text-white font-normal">
            {status}
          </Badge>
        </div>
        <div className="box-border w-full h-fit shrink-0 pt-[4px] flex flex-col gap-0 justify-start items-start">
          <div className="text-[14px]/[20px] box-border text-[#334155ff] font-normal text-left">
            {message}
          </div>
        </div>
        <div className="box-border w-full h-fit shrink-0 pt-[4px] flex flex-col gap-0 justify-start items-start">
          <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
            {via}
          </div>
        </div>
      </div>
    </div>
  );
}
