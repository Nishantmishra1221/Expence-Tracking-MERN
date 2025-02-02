import React from "react";
import styles from "../styles/ExpenseCard.module.css";
const ExpenseCard = ({ data }) => {
  return (
    <div className={styles.expenseCard}>
      <ul className={data.id === 0 ? styles.zeroId : ""}>
        <li>{data.amount}</li>
        <li>{data.date}</li>
        <li style={{width: "20%"}}>{data.description}</li>
        <li>{data.category}</li>
        <li>{data.paymentMethod}</li>
        {data.id !== 0 ? (
          <li>
            <img src="/edit.png" />
            <img src="/delete.png" />
          </li>
        ) : (
          <li></li>
        )}
      </ul>
    </div>
  );
};

export default ExpenseCard;
