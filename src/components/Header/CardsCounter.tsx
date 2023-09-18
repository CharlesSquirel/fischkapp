import React from "react";
import styles from "./styles/AppHeader.module.css";

interface ICardsCounter {
  count: string;
}

const CardsCounter: React.FC<ICardsCounter> = ({ count }) => {
  return <p className={styles.counter}>Cards: {count}</p>;
};

export default CardsCounter;
