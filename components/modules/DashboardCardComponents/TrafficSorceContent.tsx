"use client";
import { Line } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import "@/chart-config";

const TrafficSourceContent: React.FC = () => {
  const areaDataFunc = (data: number[], isUp: boolean = false) => {
    const backgroundColor = isUp
      ? "rgba(192,208,97,0.15)"
      : "rgba(255,124,124,0.15)";
    const borderColor = isUp ? "rgba(192,208,97,1)" : "rgba(255,124,124,1)";
    const areaData = {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Orders",
          data: data,
          fill: true,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          tension: 0.25,
          pointRadius: 0,
        },
      ],
    };
    //[500, 800, 650, 1300, 570, 2450, 1560, 2670]
    return areaData;
  };

  const trafficSourcesData = [
    {
      source: "Amazon",
      percentageChange: 27,
      previousWeekPercentage: 12,
      data: [500, 800, 650, 1300, 570, 2450, 1560, 2670],
    },
    {
      source: "S Apparel",
      percentageChange: 23,
      previousWeekPercentage: 32,
      data: [2450, 2670, 800, 1300, 1560, 650, 570, 500],
    },
    {
      source: "OG Soronko",
      percentageChange: 18,
      previousWeekPercentage: 12,
      data: [500,1300,800, 650, 570, 2450, 1560, 2670],
    },
    {
      source: "Etsy",
      percentageChange: 30,
      previousWeekPercentage: 45,
      data: [2670, 2450, 800, 1300, 1560, 500, 570, 650],
    },
  ];

  const areaOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: 0 },
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false, grid: { display: false } },
      y: {
        display: false,
        grid: { display: false },
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
    <ul className="h-full flex flex-col justify-around">
      {trafficSourcesData.map((item, index) => (
        <li key={index} className="flex">
          <div className="flex flex-col justify-between w-2/5">
            <p className="font-bold text-sm">{item.source}</p>
            <p className="font-bold text-xl">{item.percentageChange}</p>
            <p className="font-bold text-[10px] text-gray-400">
              {item.previousWeekPercentage}
            </p>
          </div>
          <div className="w-3/5 h-[100px]">
            {" "}
            <Line
              data={areaDataFunc(
                item.data,
                item.percentageChange > item.previousWeekPercentage
                  ? true
                  : false
              )}
              options={areaOptions}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TrafficSourceContent;
