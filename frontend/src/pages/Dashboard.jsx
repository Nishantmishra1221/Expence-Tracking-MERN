import React from "react";
import styles from "../styles/Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import SmallGraph from "../components/SmallGraph";
import DashboardGoal from "../components/DashboardGoal";
import BalanceGraph from "../components/BalanceGraph";
import Recent from "../components/Recent";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const email = location.state;
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const monthlySavings = Array.from({ length: 31 }, () =>
    Math.floor(Math.random() * 5000)
  );
  const weeklyExpenses = Array.from({ length: 7 }, () =>
    Math.floor(Math.random() * 1000)
  );
  const monthlyExpenses = Array.from({ length: 31 }, () =>
    Math.floor(Math.random() * 7000)
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>DASHBOARD</h1>
        <div className={styles.profile}>
          <img
            className={styles.notification}
            src="/notification.png"
            alt="notification"
          />
          <img
            src="https://pbs.twimg.com/profile_images/1131624264405327873/1YpVVtxD_400x400.jpg"
            className={styles.profilepic}
            alt="profilepic"
          />
          <div className={styles.profileinfo}>
            <p className={styles.name}>Arnab Jena</p>
            <p className={styles.email}>{email}</p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.balance}>Total Balance: ₹10,000</h1>
        <div className={styles.graphs}>
          <SmallGraph
            label={daysOfWeek}
            data={{ info: weeklyExpenses, type: "Weekly Expenses" }}
          />
          <SmallGraph
            label={days}
            data={{ info: monthlyExpenses, type: "Monthly Expenses" }}
          />
          <SmallGraph
            label={days}
            data={{ info: monthlySavings, type: "Monthly Savings" }}
          />
        </div>
      </div>
      <div className={styles.extra}>
        <div className={styles.extra1}>
          <div className={styles.goals}>
            <h2>Goals</h2>
            <div className={styles.goal}>
              <DashboardGoal />
              <DashboardGoal />
            </div>
          </div>
          <div className={styles.balancegraph}>
            <h2>Balance Graph</h2>
            <BalanceGraph />
          </div>
        </div>
        <div className={styles.recent}>
          <h2>Recent Updates</h2>
          <div className={styles.recentUpdates}>
            <Recent />
            <Recent />
            <Recent />
            <Recent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
