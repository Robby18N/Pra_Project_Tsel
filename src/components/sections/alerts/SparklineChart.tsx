"use client";

import ReactECharts from "echarts-for-react";

interface SparklineChartProps {
  data: number[];
  labels: string[];
  color: string;
  height?: number;
}

/** Minimal ECharts line chart — axes hidden, smoothed line + soft area fill, hover tooltip. */
export function SparklineChart({ data, labels, color, height = 72 }: SparklineChartProps) {
  const option = {
    grid: { left: 0, right: 0, top: 6, bottom: 0, containLabel: false },
    xAxis: { type: "category", data: labels, show: false, boundaryGap: false },
    yAxis: { type: "value", show: false, scale: true },
    tooltip: {
      trigger: "axis",
      confine: true,
      appendToBody: true,
      backgroundColor: "#0f172a",
      borderWidth: 0,
      textStyle: { color: "#f8fafc", fontSize: 12 },
      formatter: (params: unknown) => {
        const [point] = params as Array<{ axisValue: string; value: number }>;
        return `${point.axisValue}: ${point.value}`;
      },
    },
    series: [
      {
        type: "line",
        data,
        smooth: 0.35,
        symbol: "none",
        lineStyle: { width: 2, color },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: `${color}33` },
              { offset: 1, color: `${color}00` },
            ],
          },
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ width: "100%", height }} opts={{ renderer: "svg" }} />;
}
