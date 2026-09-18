import { Header } from "@/components/sections/header/Header";
import { FilterBar } from "@/components/sections/filter-bar/FilterBar";
import { KeyFiguresSection } from "@/components/sections/key-figures/KeyFiguresSection";
import { AlertsSection } from "@/components/sections/alerts/AlertsSection";
import { ServiceHealthCard } from "@/components/sections/service-health/ServiceHealthCard";
import { CustomerAvailabilityCard } from "@/components/sections/customer-availability/CustomerAvailabilityCard";
import { AttentionCard } from "@/components/sections/attention/AttentionCard";

/** "Executive" nav destination — the original dashboard: KPIs, alerts, service health/customer/attention row. */
export function ExecutiveDashboard() {
  return (
    <>
      <Header title="Executive dashboard" subtitle="Service reliability across every managed customer" />
      <FilterBar />
      <main className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] p-[20px] justify-start items-start">
        <KeyFiguresSection />
        <AlertsSection />
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[12px] justify-start items-stretch">
          <ServiceHealthCard />
          <CustomerAvailabilityCard />
          <AttentionCard />
        </div>
      </main>
    </>
  );
}
