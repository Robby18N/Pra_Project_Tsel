import { FilterGlyphIcon } from "@/components/icons/misc-icons";
import { FilterPill } from "./FilterPill";

const FILTERS = [
  { label: "All customers", width: 87.18 },
  { label: "All projects", width: 71.711 },
  { label: "All partners", width: 73.828 },
  { label: "All regions", width: 66.883 },
  { label: "Today", width: 37.578 },
];

/** Row of quick filters below the header (customer / project / partner / region / date range). */
export function FilterBar() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[8px] p-[12px_20px] justify-start items-center bg-[#f8fafcff] border-b border-[#e2e8f0]">
      <div className="box-border w-[64px] shrink-0 h-[16px] flex flex-row gap-[8px] p-[0px_4px_0px_0px] justify-start items-center">
        <FilterGlyphIcon />
        <div className="text-[12px]/[16px] box-border text-[#64748bff] font-medium text-left whitespace-nowrap">
          Filters
        </div>
      </div>

      {FILTERS.map((filter) => (
        <FilterPill key={filter.label} label={filter.label} width={filter.width} />
      ))}
    </div>
  );
}
