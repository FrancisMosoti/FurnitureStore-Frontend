import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Total Clients",
      data: [
        900, 950, 980, 1000, 1050, 1100, 1150, 1170, 1180, 1190, 1200, 1200,
      ],
      backgroundColor: "#8FAEA2",
      borderColor: "#365A4C",
      type: "bar",
    },
    {
      label: "New Clients",
      data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 150],
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      borderColor: "#FEC020",
      type: "bar",
    },
    {
      label: "Active Clients",
      data: [500, 900, 550, 270, 100, 250, 210, 1120, 1130, 1140, 1150, 1150],
      backgroundColor: "#365A4C",
      borderColor: "#365A4C",
      type: "line",
      fill: false,
    },
  ],
};

export function BarLine() {
  return (
    <div className="w-full sm:w-3/4 md:w-1/2 mx-auto   overflow-auto">
      <Chart type="bar" data={data} />
    </div>
  );
}

export default BarLine;
