import React from "react";
import styles from "./Wallet.module.css";

const Wallet = () => {
  return (
    <div className={styles.walletContainer}>
      <span className={styles.text}>Wallet Balance:</span>
      <span className={styles.balance}>&#8377;{4500}</span>
      <button className={styles.addBtn}>+ Add Balance</button>
    </div>
  );
};

export default Wallet;
