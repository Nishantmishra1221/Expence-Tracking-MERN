import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Lander from "./pages/Lander.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Expense from "./pages/Expense.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserLayout from "./components/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Lander />}
        />{" "}
        {/* Default to Dashboard */}
        <Route
          path="/loggedIn"
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
