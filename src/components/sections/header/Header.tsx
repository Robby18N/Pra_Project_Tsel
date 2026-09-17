import { Badge } from "@/components/ui/Badge";
import { StatusDot } from "@/components/ui/StatusDot";
import { BellIcon } from "@/components/icons/misc-icons";

const LIVE_GREEN = "#22c55eff";

/** Top bar: page title, live-monitoring indicator, timestamp and the notifications button. */
export function Header() {
  return (
    <div className="box-border w-full h-[73px] shrink-0 flex flex-row gap-[16px] p-[0px_20px] justify-start items-center bg-[#f8fafcff] border-b border-[#e2e8f0]">
      <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-0 justify-start items-start">
        <div className="box-border w-full h-[24px] shrink-0 flex flex-col gap-0 justify-start items-start overflow-hidden">
          <h1 className="text-[16px]/[24px] box-border text-[#020617ff] font-semibold text-left whitespace-nowrap">
            Executive dashboard
          </h1>
        </div>
        <div className="box-border w-full h-[16px] shrink-0 flex flex-col gap-0 justify-start items-start overflow-hidden">
          <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
            Service reliability across every managed customer
          </div>
        </div>
      </div>

      <Badge
        className="bg-[#22c55e1a] border border-[#22c55e4d] p-[6px_12px] gap-[8px]"
        textClassName="text-[12px]/[16px] text-[#16a34aff] font-medium"
        icon={<StatusDot color={LIVE_GREEN} pulse />}
      >
        Live monitoring
      </Badge>

      <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
        16 Sept, 15:52 WIB
      </div>

      <button
        type="button"
        aria-label="Notifications, 12 critical"
        className="box-border w-[36px] shrink-0 h-[36px] shadow-[0px_1px_1.531px_0px_#0000000d] flex flex-row gap-0 justify-center items-center bg-white border border-[#e2e8f0] rounded-[8px] relative"
      >
        <BellIcon />
        <div className="box-border w-fit h-[16px] absolute left-[20.406px] top-[-3px] flex flex-row gap-0 p-[0px_4px] justify-center items-center bg-[#ef4444ff] rounded-[9999px] z-10">
          <div className="text-[10px]/[20px] box-border text-white font-semibold text-center whitespace-nowrap">
            12
          </div>
        </div>
      </button>
    </div>
  );
}
