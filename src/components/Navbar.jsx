import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Expence Tracker</h1>
      <ul className={styles.navbarList}>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/manager">Manager</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Signup</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
