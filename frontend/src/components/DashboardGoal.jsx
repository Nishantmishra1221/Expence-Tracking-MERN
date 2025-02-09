import React from "react";
import styles from "../styles/Goals.module.css";
const DashboardGoal = () => {
  return (
    <div className={styles.container}>
      <h3>Food</h3>
      <div className={styles.goal}>
        <div className={styles.progress}></div>
      </div>
    </div>
  );
};

export default DashboardGoal;
