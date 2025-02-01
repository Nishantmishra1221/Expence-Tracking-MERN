import React from "react";
import styles from "../styles/Recent.module.css";

const Recent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src="/home.png" />
        <div className={styles.writtenInfo}>
          <span>House Rent</span>
          <p>22 February 2025</p>
        </div>
      </div>
      <span>+$100</span>
    </div>
  );
};

export default Recent;
