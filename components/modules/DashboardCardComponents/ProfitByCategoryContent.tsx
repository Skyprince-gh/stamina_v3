"use client";
// ...existing code...
import { Doughnut } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import "@/chart-config";
import { Square } from "lucide-react";

const ProfitByCategoryContent = () => {
  const categoryStats = [
    { categoryName: "Womens Clothing", percentage: 30, amount: 400000 },
    { categoryName: "Accessories", percentage: 25, amount: 200000 },
    { categoryName: "Mens Clothing", percentage: 15, amount: 300000 },
    { categoryName: "Footwear", percentage: 5, amount: 100000 },
    { categoryName: "Children's Clothing", percentage: 20, amount: 600000 },
  ];
  const data = {
    labels: [],//["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        data: [35, 25, 15, 5, 20],
        backgroundColor: [
          "rgba(0, 0,0)",
          "rgba(199, 216, 56)",
          "rgba(184, 250, 78)",
          "rgba(219, 218, 218)",
          "rgba(243, 255, 135)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false, // allow chart to fill parent container
    cutout: "70%", // adjust the cutout size as needed
    layout: { padding: 0 }, // remove Chart.js internal padding
    plugins: {
      legend: {
        position: "top",
        labels: { padding: 0 }, // reduce legend label spacing if needed
      },
    },
    elements: {
      arc: { borderWidth: 0 }, // remove arc border to avoid extra visual spacing
    },
  };

  return (
    // give the parent a concrete height (px or rem) and zero padding/margin
    <div className="flex">
      <div className="w-5/12 h-[300px] p-0 m-0">
        <Doughnut data={data} options={options} />
      </div>
      <div className="w-7/12 flex flex-col">
        <div className="border-b-2 flex flex-col gap-3 items-end font-bold">
          <h3 className="text-gray-400">Total Annual Profit</h3>
          <p className="text-3xl ">$1,000,000</p>
        </div>
        <div>
          <ul className="flex flex-col gap-3 mt-5">
            {categoryStats.map((category, index) => (
              <li key={index} className="flex justify-between">
                <div className="flex gap-2 font-semibold">
                  <Square stroke="#99a1af" fill="#99a1af" />
                  {category.categoryName}
                  <span className="text-gray-500">
                    {category.percentage}%
                  </span>{" "}
                </div>
                <div className="text-gray-400">${category.amount}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfitByCategoryContent;
