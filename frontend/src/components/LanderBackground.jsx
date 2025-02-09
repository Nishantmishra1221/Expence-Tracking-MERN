import React from "react";
import styles from "../styles/Background.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const LanderBackground = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
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
    <div className={styles.background}>
      <div className={styles.lander}>
        <h1>
          Beware of little expenses;
          <br /> a small leak will sink a great ship
        </h1>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320">
        <path
          fill="#caf0f8"
          fillOpacity="1"
          d="M0,64L48,106.7C96,149,192,235,288,261.3C384,288,480,256,576,234.7C672,213,768,203,864,192C960,181,1056,171,1152,186.7C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </div>
  );
};

export default LanderBackground;
