import React from "react";
import styles from "../styles/SmallGraph.module.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const BalanceGraph = () => {
  const category = ["Food", "Travel", "Entertainment", "Others"];
  const monthlyData = Array.from({ length: 31 }, () =>
    Math.floor(Math.random() * 7000)
  );

  const data = {
    labels: category,
    datasets: [
      {
        data: monthlyData,
        backgroundColor: "#0077B6",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      easing: "easeInOut",
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.finalGraph}>
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
};

export default BalanceGraph;
