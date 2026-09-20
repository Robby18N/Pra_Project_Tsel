import { Header } from "@/components/sections/header/Header";
import { FilterBar } from "@/components/sections/filter-bar/FilterBar";
import { AlertKpiRow } from "./kpi-row/AlertKpiRow";
import { LatestAlertsCard } from "./latest-alerts/LatestAlertsCard";
import { SeverityBreakdownCard } from "./severity-breakdown/SeverityBreakdownCard";
import { ChannelDeliveryCard } from "./channel-delivery/ChannelDeliveryCard";
import { EscalationTimelineCard } from "./escalation-timeline/EscalationTimelineCard";

const ALERT_FILTERS = [
  { label: "All customers", width: 87.18 },
  { label: "All projects", width: 71.711 },
  { label: "All partners", width: 73.828 },
  { label: "Today", width: 37.578 },
];

/** "Alert monitoring" nav destination: live alert feed, severity mix and escalation history. */
export function AlertMonitoringPage() {
  return (
    <>
      <Header title="Alert Monitoring" subtitle="Device health and where incidents are happening now" />
      <FilterBar filters={ALERT_FILTERS} />
      <main className="box-border w-full h-fit shrink-0 flex flex-col gap-[16px] p-[16px_20px] justify-start items-start">
        <AlertKpiRow />
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-start items-start">
          <LatestAlertsCard />
          <div className="box-border flex-1 min-w-0 h-fit flex flex-col gap-[16px] justify-start items-start">
            <SeverityBreakdownCard />
            <ChannelDeliveryCard />
            <EscalationTimelineCard />
          </div>
        </div>
      </main>
    </>
  );
}
