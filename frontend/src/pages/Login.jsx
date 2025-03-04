import React from "react";
import LanderBackground from "../components/LanderBackground";
import styles from "../styles/Auth.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email: email.trim(),
        password: password.trim(),
      };
      const response = await axios.get("http://localhost:5002/signin", {
        params: data,
        withCredentials: true,
      });

      console.log(response);

      if (!response) {
        alert(response.data.message);
        return;
      }

      setEmail("");
      setPassword("");
      alert(response.data.message);
      navigate("/dashboard", { state: data.email });
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };
  useEffect(() => {
    const fetchCookie = async () => {
      try {
        const cookie = await axios.get("http://localhost:5002/get-cookie", {
          withCredentials: true,
        });
        if (cookie?.data?.sessionId) {
          navigate("/dashboard", { state: cookie.data.email });
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching cookie:", error);
        setLoading(false);
      }
    };

    fetchCookie();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />
      <LanderBackground />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Login</h1>
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
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
