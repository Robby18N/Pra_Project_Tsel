import { Header } from "@/components/sections/header/Header";
import { FilterBar } from "@/components/sections/filter-bar/FilterBar";
import { SeverityKpiRow } from "@/components/sections/severity-kpi/SeverityKpiRow";
import { TicketAgeCard } from "./age-buckets/TicketAgeCard";
import { EscalationPriorityCard } from "./escalation-priority/EscalationPriorityCard";
import { EscalationPathCard } from "./escalation-path/EscalationPathCard";
import { TicketQueueTable } from "./ticket-queue/TicketQueueTable";

const HELPDESK_FILTERS = [
  { label: "All customers", width: 87.18 },
  { label: "All projects", width: 71.711 },
  { label: "All partners", width: 73.828 },
  { label: "Today", width: 37.578 },
];

/** "Helpdesk" nav destination: ticket queue, ageing and escalation to partners. */
export function HelpdeskPage() {
  return (
    <>
      <Header title="Helpdesk" subtitle="Ticket queue, ageing and escalation to partners" />
      <FilterBar filters={HELPDESK_FILTERS} />
      <main className="box-border w-full h-fit shrink-0 flex flex-col gap-[16px] p-[16px_20px] justify-start items-start">
        <SeverityKpiRow />
        <div className="box-border w-full h-[419px] shrink-0 flex flex-row gap-[16px] justify-start items-stretch">
          <TicketAgeCard />
          <EscalationPriorityCard />
          <EscalationPathCard />
        </div>
        <TicketQueueTable />
      </main>
    </>
  );
}
