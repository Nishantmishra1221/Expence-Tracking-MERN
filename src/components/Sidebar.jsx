import React from "react";
import styles from "../styles/Sidebar.module.css";
const Sidebar = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>EXSPENT</span>
        <div className={styles.sidebar}>
          <ul>
            <li>
              <a href="/loggedIn/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/loggedIn/expenses">Expenses</a>
            </li>
            <li>Category Wise</li>
            <li>Goals</li>
          </ul>
        </div>
        <h3>Logout</h3>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
