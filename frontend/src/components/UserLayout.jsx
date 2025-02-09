import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UserLayout = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCookie = async () => {
      try {
        const cookie = await axios.get("http://localhost:5002/get-cookie", {
          withCredentials: true,
        });
        if (!cookie?.data?.sessionId) {
          navigate("/login");
          return;
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
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
};

export default UserLayout;
