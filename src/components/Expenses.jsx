import React from "react";
import styles from "./Expenses.module.css";

const Expenses = () => {
  return (
    <div className={styles.expensesContainer}>
      <span className={styles.text}>Expenses:</span>
      <span className={styles.expenses}>&#8377;{500}</span>
      <button className={styles.addBtn}>+ Add Expense</button>
    </div>
  );
};

export default Expenses;
