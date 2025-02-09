import React from "react";
import LanderBackground from "../components/LanderBackground";
import styles from "../styles/Auth.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email.trim(),
      password: password.trim(),
    };
    try {
      const response = await axios.post("http://localhost:5002/signup", data);

      if (response.status === 400) {
        alert(response.data.message);
        setEmail("");
        setPassword("");
        return;
      }

      setEmail("");
      setPassword("");
      alert(response.data.message);
      navigate("/dashboard", { state: data });
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <LanderBackground />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Sign-Up</h1>
          <div className={styles.form}>
            <div className={styles.input}>
              <label>Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button onClick={(e) => handleSubmit(e)}>Sign-Up</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
