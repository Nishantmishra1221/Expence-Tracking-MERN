import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Lander from "./pages/Lander.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";

const App = () => {
  return (
    <>
      {/* <Dashboard /> */}
      <AdminLogin/>
    </>
  );
};

export default App;
