import React from "react";
import styles from "../../styles/AppHeader.module.scss";
import { ICardsCounter } from "../services/types/types";

const CardsCounter: React.FC<ICardsCounter> = ({ count }) => {
  return <p className={styles.counter}>Cards: {count}</p>;
};

export default CardsCounter;
