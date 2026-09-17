import { CollapseSidebarIcon } from "@/components/icons/misc-icons";
import { SIDEBAR_LOGO_DATA_URI } from "./logo";
import { NAV_ITEMS } from "./nav-items";

/** Fixed left navigation rail: org identity, primary nav, and signed-in user. */
export function Sidebar() {
  return (
    <div className="box-border w-[289px] h-[882px] absolute left-0 top-0 flex flex-col gap-0 justify-start items-start bg-white border-r border-[#e2e8f0] z-10">
      <div className="box-border w-full h-[73px] shrink-0 flex flex-row gap-[12px] p-[0px_16px] justify-start items-center border-b border-[#e2e8f0]">
        <div
          className="box-border w-[36px] shrink-0 h-[36px]"
          style={{
            backgroundImage: `url('${SIDEBAR_LOGO_DATA_URI}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-0 justify-start items-start">
          <div className="box-border w-full h-[20px] shrink-0 flex flex-col gap-0 justify-start items-start overflow-hidden">
            <div className="text-[14px]/[20px] box-border text-[#020617ff] font-semibold text-left whitespace-nowrap">
              Managed Service NOC
            </div>
          </div>
          <div className="box-border w-full h-[16px] shrink-0 flex flex-col gap-0 justify-start items-start overflow-hidden">
            <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
              Telkomsel Operations
            </div>
          </div>
        </div>
        <button
          type="button"
          aria-label="Collapse navigation"
          className="box-border w-[32px] shrink-0 h-[32px] flex flex-row gap-0 justify-center items-center bg-white border border-[#e2e8f0] rounded-[8px]"
        >
          <CollapseSidebarIcon />
        </button>
      </div>

      <nav className="box-border w-full [flex:1_1_0] flex flex-col gap-[4px] p-[12px] justify-start items-start overflow-hidden">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`box-border w-full h-fit shrink-0 flex flex-row gap-[12px] p-[10px_12px] justify-start items-center rounded-[8px] ${
              item.active ? "bg-[#3b82f61a]" : ""
            }`}
          >
            <item.icon />
            <div
              className="box-border shrink-0 h-[20px] flex flex-col gap-0 justify-start items-start overflow-hidden"
              style={{ width: item.width }}
            >
              <div
                className={`text-[14px]/[20px] box-border font-normal text-left whitespace-nowrap ${
                  item.active ? "text-[#3b82f6ff] font-medium" : "text-[#334155ff]"
                }`}
              >
                {item.label}
              </div>
            </div>
          </a>
        ))}
      </nav>

      <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[16px] justify-end items-start border-t border-[#e2e8f0]">
        <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
          Signed in as
        </div>
        <div className="box-border w-[256px] h-[20px] shrink-0 flex flex-col gap-0 justify-start items-start overflow-hidden">
          <div className="text-[14px]/[20px] box-border text-[#020617ff] font-medium text-left whitespace-nowrap">
            Rizky Pratama
          </div>
        </div>
        <div className="box-border w-[256px] h-[16px] shrink-0 flex flex-col gap-0 justify-start items-start overflow-hidden">
          <div className="text-[12px]/[16px] box-border text-[#64748bff] font-normal text-left whitespace-nowrap">
            L0 Operations
          </div>
        </div>
      </div>
    </div>
  );
}
