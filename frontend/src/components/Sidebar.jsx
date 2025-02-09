import React from "react";
import styles from "../styles/Sidebar.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();

  const logout = async (e) => {
    e.preventDefault();
    console.log("Before Logout:", document.cookie);
    await axios.get("http://localhost:5002/logout", {
      withCredentials: true,
    });
    document.cookie =
      "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log("After Logout:", document.cookie);

    navigate("/login");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>EXSPENT</span>
        <div className={styles.sidebar}>
          <ul>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/expenses">Expenses</a>
            </li>
            <li>Goals</li>
          </ul>
        </div>
        <h3 onClick={logout}>Logout</h3>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
