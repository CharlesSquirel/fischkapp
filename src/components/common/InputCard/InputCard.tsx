import React from "react";
import styles from "./InputCard.module.scss";

const InputCard: React.FC = () => {
  return <input type="text" className={styles.inputCard} />;
};

export default InputCard;
