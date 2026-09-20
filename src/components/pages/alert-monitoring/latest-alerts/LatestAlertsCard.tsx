"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AlertRow } from "./AlertRow";
import { LATEST_ALERTS, type AlertStatus } from "./alerts-data";

const TABS: AlertStatus[] = ["Open", "Progress", "Escalated"];

/** "Latest alerts" panel: status tabs + the scrollable feed of recent alert events. */
export function LatestAlertsCard() {
  const [activeTab, setActiveTab] = useState<AlertStatus>("Open");

  return (
    <Card className="[flex:2_2_0%] min-w-0 rounded-[12px] flex flex-col gap-0 justify-start items-start overflow-hidden">
      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] p-[16px] justify-between items-start">
        <SectionHeading title="Latest alerts" subtitle={`${LATEST_ALERTS.length} alerts in the current view`} />
      </div>

      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] p-[16px] justify-start items-center bg-[#f8fafcff] border-y border-[#e2e8f0]">
        <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[10px] justify-start items-center">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`box-border w-fit shrink-0 h-[26px] flex flex-row gap-[6px] p-[4px_10px] justify-center items-center bg-white border border-[#e2e8f0] rounded-[9999px] text-[12px]/[20px] font-normal whitespace-nowrap ${
                activeTab === tab ? "text-[#334155ff]" : "text-[#475569ff]"
              }`}
            >
              {tab}
            </button>
          ))}
          <button type="button" className="text-[12px]/[16px] box-border text-[#2f5ee2ff] font-normal text-left whitespace-nowrap">
            Select all
          </button>
        </div>
      </div>

      <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[10px] p-[16px] justify-start items-start">
        {LATEST_ALERTS.map((alert, index) => (
          <AlertRow key={`${alert.deviceId}-${alert.time}-${index}`} {...alert} />
        ))}
      </div>
    </Card>
  );
}
