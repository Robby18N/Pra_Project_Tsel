"use client";

import ReactECharts from "echarts-for-react";
import { DONUT_SEGMENTS } from "./device-status-chart-data";

/** Minimal ECharts donut — no labels/legend of its own; the surrounding card renders the center text and legend. */
export function DeviceStatusDonutChart() {
  const option = {
    tooltip: {
      trigger: "item",
      confine: true,
      appendToBody: true,
      backgroundColor: "#0f172a",
      borderWidth: 0,
      textStyle: { color: "#f8fafc", fontSize: 12 },
      formatter: (params: unknown) => {
        const p = params as { name: string; value: number; percent: number };
        return `${p.name}: ${p.value.toLocaleString()} (${p.percent}%)`;
      },
    },
    series: [
      {
        type: "pie",
        radius: ["68%", "88%"],
        avoidLabelOverlap: false,
        label: { show: false },
        labelLine: { show: false },
        itemStyle: { borderColor: "#fff", borderWidth: 2 },
        data: DONUT_SEGMENTS.map((s) => ({ name: s.label, value: s.value, itemStyle: { color: s.color } })),
      },
    ],
  };

  return <ReactECharts option={option} style={{ width: "100%", height: 160 }} opts={{ renderer: "svg" }} />;
}
