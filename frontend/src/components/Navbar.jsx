import React, { useEffect, useRef } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const hamburger = useRef(null);
  const navbar = useRef(null);
  const close = useRef(null);

  useEffect(() => {
    const handleToggle = () => {
      if (navbar.current) {
        navbar.current.classList.toggle(styles.active);
      }
    };

    if (hamburger.current) {
      hamburger.current.addEventListener("click", handleToggle);
    }

    if (close.current) {
      close.current.addEventListener("click", handleToggle);
    }

    return () => {
      if (hamburger.current) {
        hamburger.current.removeEventListener("click", handleToggle);
      }
      if (close.current) {
        close.current.removeEventListener("click", handleToggle);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={navbar}
        className={styles.navbar}>
        <span
          ref={close}
          className={styles.close}>
          X
        </span>
        <h1>Exspent</h1>
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
          alt="Menu"
        />
        <h2>Exspent</h2>
      </div>
    </>
  );
};

export default Navbar;
