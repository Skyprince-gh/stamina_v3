"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import "@/chart-config";

const OrderSummaryContent: React.FC = () => {
  const areaData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Orders",
        data: [500, 800, 650, 1300, 570, 2450, 1560, 2670],
        fill: true,
        backgroundColor: "rgba(192,208,97,0.15)",
        borderColor: "rgba(192,208,97,1)",
        tension: 0.25,
        pointRadius: 0,
      },
    ],
  };

  const areaOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: true,
    layout: { padding: 0 },
    plugins: { legend: { display: false } },
    scales: {
      x: { display: true, grid: { display: false } },
      y: {
        display: true,
        grid: { display: true },
        ticks: {
          // format ticks as short currency (e.g. $65k, $1.2M)
          callback: (val: any) => {
            const n = Number(val);
            if (Number.isNaN(n)) return String(val);
            if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
            if (n >= 1_000) return `$${(n / 1000).toFixed(1)}k`;
            return `$${n}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="flex justify-start items-end gap-3">
        <span className="font-bold text-3xl leading-8">$8674</span>
        <span className="text-gray-400 font-semibold text-[10px]">
          Total Profit
        </span>
      </div>

      <div className="w-full h-full">
        <Line data={areaData} options={areaOptions} />
      </div>
    </div>
  );
};

export default OrderSummaryContent;
