"use client";

import ReactECharts from "echarts-for-react";
import { AVAILABILITY_LABELS, AVAILABILITY_DATA } from "./availability-chart-data";

const GREEN = "#22c55e";

/** Labeled ECharts line chart for the "Availability, last 24 hours" card — green gradient area, 98-100% axis. */
export function AvailabilityChart() {
  const option = {
    grid: { left: 32, right: 8, top: 12, bottom: 20, containLabel: false },
    xAxis: {
      type: "category",
      data: AVAILABILITY_LABELS,
      boundaryGap: false,
      axisLine: { lineStyle: { color: "#e2e8f0" } },
      axisTick: { show: false },
      axisLabel: { color: "#94a3b8", fontSize: 10, interval: 1 },
    },
    yAxis: {
      type: "value",
      min: 98,
      max: 100,
      splitLine: { lineStyle: { color: "#f1f5f9" } },
      axisLabel: { color: "#94a3b8", fontSize: 10, formatter: "{value}%" },
    },
    tooltip: {
      trigger: "axis",
      confine: true,
      appendToBody: true,
      backgroundColor: "#0f172a",
      borderWidth: 0,
      textStyle: { color: "#f8fafc", fontSize: 12 },
      formatter: (params: unknown) => {
        const [point] = params as Array<{ axisValue: string; value: number }>;
        return `${point.axisValue}: ${point.value}%`;
      },
    },
    series: [
      {
        type: "line",
        data: AVAILABILITY_DATA,
        smooth: 0.3,
        symbol: "none",
        lineStyle: { width: 2, color: GREEN },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: `${GREEN}33` },
              { offset: 1, color: `${GREEN}00` },
            ],
          },
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ width: "100%", height: 160 }} opts={{ renderer: "svg" }} />;
}
