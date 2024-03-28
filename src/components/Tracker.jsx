import React from "react";
import styles from "./Tracker.module.css";
import Overview from "./Overview";

function Tracker() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Expense Tracker</div>
      <div className={styles.container}>
        <div>
          <Overview />
        </div>
        <div>2 Transaction Details</div>
      </div>
    </div>
  );
}

export default Tracker;
