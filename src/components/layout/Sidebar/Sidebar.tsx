import { CollapseSidebarIcon, ExpandSidebarIcon } from "@/components/icons/misc-icons";
import { SIDEBAR_LOGO_DATA_URI } from "./logo";
import { NAV_ITEMS, type PageId } from "./nav-items";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

/**
 * Fixed left navigation rail: org identity and primary nav. Collapses to a
 * 76px icon-only rail (state is owned by AppShell so it can reflow the main
 * content's left offset in step with the sidebar's width).
 */
export function Sidebar({ collapsed, onToggle, activePage, onNavigate }: SidebarProps) {
  return (
    <div
      className={`box-border h-[882px] absolute left-0 top-0 flex flex-col gap-0 justify-start bg-white border-r border-[#e2e8f0] z-10 transition-[width] duration-200 ${
        collapsed ? "w-[76px] items-center" : "w-[289px] items-start"
      }`}
    >
      <div
        className={`box-border w-full h-[73px] shrink-0 flex flex-row gap-[12px] items-center border-b border-[#e2e8f0] ${
          collapsed ? "p-[0px_8px] justify-center" : "p-[0px_16px] justify-start"
        }`}
      >
        <div
          className="box-border w-[36px] shrink-0 h-[36px]"
          style={{
            backgroundImage: `url('${SIDEBAR_LOGO_DATA_URI}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        {!collapsed && (
          <>
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
              onClick={onToggle}
              className="box-border w-[32px] shrink-0 h-[32px] flex flex-row gap-0 justify-center items-center bg-white border border-[#e2e8f0] rounded-[8px]"
            >
              <CollapseSidebarIcon />
            </button>
          </>
        )}
      </div>

      {collapsed && (
        <div className="box-border w-fit h-fit shrink-0 flex flex-col gap-0 p-[12px_0px_0px_0px] justify-start items-start">
          <button
            type="button"
            aria-label="Expand navigation"
            onClick={onToggle}
            className="box-border w-[32px] h-[32px] shrink-0 flex flex-row gap-0 justify-center items-center bg-white border border-[#e2e8f0] rounded-[8px]"
          >
            <ExpandSidebarIcon />
          </button>
        </div>
      )}

      <nav className="box-border w-full [flex:1_1_0] flex flex-col gap-[4px] p-[12px] justify-start items-start overflow-hidden">
        {NAV_ITEMS.map((item) => {
          const active = item.id === activePage;
          return (
            <button
              key={item.id}
              type="button"
              title={collapsed ? item.label : undefined}
              onClick={() => onNavigate(item.id)}
              className={`box-border w-full h-fit shrink-0 flex flex-row gap-[12px] items-center rounded-[8px] cursor-pointer ${
                collapsed ? "p-[10px_8px] justify-center" : "p-[10px_12px] justify-start"
              } ${active ? "bg-[#3b82f61a]" : "hover:bg-[#f1f5f9]"}`}
            >
              <item.icon />
              {!collapsed && (
                <div
                  className="box-border shrink-0 h-[20px] flex flex-col gap-0 justify-start items-start overflow-hidden"
                  style={{ width: item.width }}
                >
                  <div
                    className={`text-[14px]/[20px] box-border font-normal text-left whitespace-nowrap ${
                      active ? "text-[#3b82f6ff] font-medium" : "text-[#334155ff]"
                    }`}
                  >
                    {item.label}
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
