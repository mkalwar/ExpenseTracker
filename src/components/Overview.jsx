import React from "react";
import styles from "./Overview.module.css";
import Wallet from "./Wallet";
import Expenses from "./Expenses";
import ExpenseCategoryChart from "./ExpenseCategoryChart";

const Overview = () => {
  return (
    <div className={styles.overviewContainer}>
      <div>
        <Wallet />
      </div>
      <div>
        <Expenses />
      </div>
      <div>
        <ExpenseCategoryChart />
      </div>
    </div>
  );
};

export default Overview;
