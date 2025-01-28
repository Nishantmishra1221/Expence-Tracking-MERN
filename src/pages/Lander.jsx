import React from "react";
import LanderBackground from "../components/LanderBackground";
import styles from "../styles/Lander.module.css";

const Lander = () => {
  return (
    <>
      <LanderBackground />
      <button className={styles.landerButton}>Go To Dashboard</button>
    </>
  );
};

export default Lander;
