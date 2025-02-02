import React from "react";
import { useState } from "react";
import styles from "../styles/Expense.module.css";
import Sidebar from "../components/Sidebar";
import ExpenseCard from "../components/ExpenseCard";
const Expense = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      amount: 500,
      date: "2024-02-01",
      description: "Lunch",
      category: "Food",
      paymentMethod: "Cash",
    },
    {
      id: 2,
      amount: 2000,
      date: "2024-02-02",
      description: "Flight Ticket",
      category: "Travel",
      paymentMethod: "Credit Card",
    },
  ]);
  const headings = {
    id: 0,
    amount: "Amount",
    date: "Date",
    description: "Description",
    category: "Category",
    paymentMethod: "Payment Method",
  };
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    category: "",
    paymentMethod: "",
    timePeriod: "",
  });
  const [sortKey, setSortKey] = useState("date");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSortChange = (e) => {
    setSortKey(e.target.value);
  };

  const filterByTimePeriod = (expense) => {
    const now = new Date();
    const expenseDate = new Date(expense.date);
    switch (filter.timePeriod) {
      case "daily":
        return expenseDate.toDateString() === now.toDateString();
      case "weekly":
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);
        return expenseDate >= oneWeekAgo;
      case "monthly":
        return (
          expenseDate.getMonth() === now.getMonth() &&
          expenseDate.getFullYear() === now.getFullYear()
        );
      default:
        return true;
    }
  };

  const filteredExpenses = expenses
    .filter(
      (expense) =>
        expense.description.toLowerCase().includes(search.toLowerCase()) &&
        (filter.category ? expense.category === filter.category : true) &&
        (filter.paymentMethod
          ? expense.paymentMethod === filter.paymentMethod
          : true) &&
        filterByTimePeriod(expense)
    )
    .sort((a, b) =>
      sortKey === "amount"
        ? a.amount - b.amount
        : new Date(a.date) - new Date(b.date)
    );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>EXPENSES</h1>
      </div>
      <div className={styles.filter}>
        <span className={styles.add_btn}>+</span>
        <div className={styles.filter_section}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          />
          <select
            name="category"
            onChange={handleFilterChange}>
            <option value="">All Categories</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
          </select>
          <select
            name="timePeriod"
            onChange={handleFilterChange}>
            <option value="">All Time Periods</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <select
            name="paymentMethod"
            onChange={handleFilterChange}>
            <option value="">All Payment Methods</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
          </select>
          <select onChange={handleSortChange}>
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
          </select>
        </div>
      </div>
      <div className={styles.expenses}>
        <ExpenseCard data={headings} />
        {filteredExpenses.map((expense) => (
          <ExpenseCard
            key={expense.id}
            data={expense}
          />
        ))}
      </div>
    </div>
  );
};

export default Expense;
