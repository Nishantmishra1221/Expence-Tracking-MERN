import React, { useEffect, useRef } from "react";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  const hamburger = useRef(null);
  const navbar = useRef(null);
  useEffect(() => {
    const handleToggle = () => {
      navbar.current.classList.toggle("active");
    };
    hamburger.current.addEventListener("click", handleToggle);

    return () => {
      hamburger.current.removeEventListener("click", handleToggle);
    };
  }, []);
  return (
    <>
      {" "}
      <div
        ref={navbar}
        className={styles.navbar}>
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
      <div
        ref={hamburger}
        className={styles.hamburger}>
        <img
          src="/menu.png"
          className={styles.hamburger_bar}
        />
      </div>
    </>
  );
};

export default Navbar;
