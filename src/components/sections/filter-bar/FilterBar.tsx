import type { ReactNode } from "react";
import { FilterGlyphIcon } from "@/components/icons/misc-icons";
import { FilterPill } from "./FilterPill";

export interface FilterDatum {
  label: string;
  width: number;
}

const DEFAULT_FILTERS: FilterDatum[] = [
  { label: "All customers", width: 87.18 },
  { label: "All projects", width: 71.711 },
  { label: "All partners", width: 73.828 },
  { label: "All regions", width: 66.883 },
  { label: "Today", width: 37.578 },
];

interface FilterBarProps {
  filters?: FilterDatum[];
  /** Optional trailing action rendered after the pills (e.g. a "Clear filters" button). */
  trailing?: ReactNode;
}

/** Row of quick filters below the header (customer / project / partner / region / date range). */
export function FilterBar({ filters = DEFAULT_FILTERS, trailing }: FilterBarProps) {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[8px] p-[12px_20px] justify-start items-center bg-[#f8fafcff] border-b border-[#e2e8f0]">
      <div className="box-border w-[64px] shrink-0 h-[16px] flex flex-row gap-[8px] p-[0px_4px_0px_0px] justify-start items-center">
        <FilterGlyphIcon />
        <div className="text-[12px]/[16px] box-border text-[#64748bff] font-medium text-left whitespace-nowrap">
          Filters
        </div>
      </div>

      {filters.map((filter) => (
        <FilterPill key={filter.label} label={filter.label} width={filter.width} />
      ))}

      {trailing}
    </div>
  );
}
