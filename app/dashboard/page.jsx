import React from "react";
import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/card/card.module.css";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
