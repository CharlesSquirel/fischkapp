import React, { useContext } from "react";
import styles from "../../styles/AppHeader.module.scss";
import { Context } from "../../App";

const CardsCounter: React.FC = () => {
  const context = useContext(Context);
  const { flashCards} = context;
  return <p className={styles?.counter}>Cards: {flashCards.length}</p>;
};

export default CardsCounter;
