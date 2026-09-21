import { Header } from "@/components/sections/header/Header";
import { FilterBar } from "@/components/sections/filter-bar/FilterBar";
import { ResetIcon } from "@/components/icons/misc-icons";
import { ROOT_CAUSE_FILTERS } from "./root-cause-filters";
import { RootCauseKpiRow } from "./kpi/RootCauseKpiRow";
import { RankedListCard } from "./ranked-list/RankedListCard";
import { RANKED_LIST_DATA } from "./ranked-list/ranked-list-data";

const [causes, byPartner, mttr, repeatIncidents, followUp] = RANKED_LIST_DATA;

export function RootCausePage() {
  return (
    <>
      <Header title="Root cause analysis" subtitle="What keeps breaking, and which partner is involved" />
      <FilterBar
        filters={ROOT_CAUSE_FILTERS}
        trailing={
          <button
            type="button"
            className="box-border w-fit shrink-0 h-[36px] flex flex-row gap-[8px] p-[0px_12px] justify-start items-center rounded-[9999px] hover:bg-[#e2e8f0] transition-colors"
          >
            <ResetIcon />
            <div className="text-[14px]/[20px] box-border text-[#475569ff] font-normal text-center whitespace-nowrap">
              Clear 2 filters
            </div>
          </button>
        }
      />
      <main className="box-border w-full h-fit shrink-0 flex flex-col gap-[16px] p-[16px_20px] justify-start items-start">
        <RootCauseKpiRow />

        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-start items-stretch">
          <RankedListCard data={causes} className="flex-1 min-w-0" />
          <RankedListCard data={byPartner} className="w-[320px] shrink-0" />
          <RankedListCard data={mttr} className="w-[320px] shrink-0" />
        </div>

        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-start items-stretch">
          <RankedListCard data={repeatIncidents} className="flex-[2] min-w-0" />
          <RankedListCard data={followUp} className="flex-[1] min-w-0" />
        </div>
      </main>
    </>
  );
}
