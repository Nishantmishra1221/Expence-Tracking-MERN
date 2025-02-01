import React from "react";
import styles from "../styles/Sidebar.module.css";
const Sidebar = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>EXSPENT</h1>
        <div className={styles.sidebar}>
          <ul>
            <li>Dashboard</li>
            <li>Expenses</li>
            <li>Category Wise</li>
            <li>Goals</li>
          </ul>
        </div>
        <h3>Logout</h3>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Sidebar;
