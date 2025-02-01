import React from "react";
import styles from "../styles/SmallGraph.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const SmallGraph = ({ label, data }) => {
  const color =
    data.type === "Weekly Expenses"
      ? "#48CAE4"
      : data.type === "Monthly Expenses"
      ? "#0077B6"
      : data.type === "Monthly Savings"
      ? "#023E8A"
      : "#CAF0F8";
  const datas = {
    labels: label,
    datasets: [
      {
        data: data.info,
        backgroundColor: `white`,
        borderColor: `${color}`,
        pointBorderWidth: 0,
        pointRadius: 0,
        tension: 0.5,
      },
    ],
  };

  const options = {
    animation: {
      easing: "easeInOut",
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className={styles.container}>
      <span>{data.type}</span>
      <Line
        data={datas}
        options={options}
        style={{ width: "100%", padding: "0.5rem" }}
      />
    </div>
  );
};

export default SmallGraph;
