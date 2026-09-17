import { ChevronDownIcon } from "@/components/icons/misc-icons";

interface FilterPillProps {
  label: string;
  /** Fixed label width, matching the source design's per-label measurements. */
  width: number;
}

/** A single dropdown-style filter pill ("All customers", "Today", ...). Presentational only — no open/close state yet. */
export function FilterPill({ label, width }: FilterPillProps) {
  return (
    <button
      type="button"
      className="box-border w-fit shrink-0 h-[36px] shadow-[0px_1px_1.531px_0px_#0000000d] flex flex-row gap-[8px] p-[0px_12px] justify-start items-center bg-white border border-[#e2e8f0] rounded-[9999px]"
    >
      <div
        className="box-border shrink-0 h-[20px] flex flex-col gap-0 justify-start items-center overflow-hidden"
        style={{ width }}
      >
        <div className="text-[14px]/[20px] box-border text-[#334155ff] font-normal text-center whitespace-nowrap">
          {label}
        </div>
      </div>
      <ChevronDownIcon />
    </button>
  );
}
