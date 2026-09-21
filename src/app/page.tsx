"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import type { PageId } from "@/components/layout/Sidebar/nav-items";
import { NAV_ITEMS } from "@/components/layout/Sidebar/nav-items";
import { ExecutiveDashboard } from "@/components/pages/executive/ExecutiveDashboard";
import { NocOperationsPage } from "@/components/pages/noc-operations/NocOperationsPage";
import { AlertMonitoringPage } from "@/components/pages/alert-monitoring/AlertMonitoringPage";
import { HelpdeskPage } from "@/components/pages/helpdesk/HelpdeskPage";
import { RootCausePage } from "@/components/pages/root-cause/RootCausePage";
import { ComingSoonPage } from "@/components/pages/coming-soon/ComingSoonPage";

const IMPLEMENTED_PAGES: PageId[] = ["executive", "noc-operations", "alert-monitoring", "helpdesk", "root-cause"];

export default function Home() {
  const [activePage, setActivePage] = useState<PageId>("executive");

  return (
    <AppShell activePage={activePage} onNavigate={setActivePage}>
      {activePage === "executive" && <ExecutiveDashboard />}
      {activePage === "noc-operations" && <NocOperationsPage />}
      {activePage === "alert-monitoring" && <AlertMonitoringPage />}
      {activePage === "helpdesk" && <HelpdeskPage />}
      {activePage === "root-cause" && <RootCausePage />}
      {!IMPLEMENTED_PAGES.includes(activePage) && (
        <ComingSoonPage title={NAV_ITEMS.find((item) => item.id === activePage)?.label ?? ""} />
      )}
    </AppShell>
  );
}
