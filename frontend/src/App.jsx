import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Lander from "./pages/Lander.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Expense from "./pages/Expense.jsx";
import Login from "./pages/Login.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserLayout from "./components/UserLayout.jsx";
import SignUp from "./pages/SignUp.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Lander />}
        />{" "}
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        {/* Default to Dashboard */}
        <Route
          path="/"
          element={<UserLayout />}>
          <Route
            path="dashboard"
            element={<Dashboard />}
          />
          <Route
            path="expenses"
            element={<Expense />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
