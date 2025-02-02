import React from "react";
import LanderBackground from "../components/LanderBackground";
import styles from "../styles/Lander.module.css";
import Navbar from "../components/Navbar";
const Lander = () => {
  return (
    <>
      <Navbar />
      <LanderBackground />
      <button className={styles.landerButton}>Go To Dashboard</button>
    </>
  );
};

export default Lander;
