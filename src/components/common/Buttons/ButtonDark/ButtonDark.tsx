import React from "react";
import styles from "../Buttons.module.scss";
import { IButton } from "../../../services/types/types";

const ButtonDark: React.FC<IButton> = ({ text, handleReverseCard }) => {
  return (
    <button className={styles.btnDark} onClick={handleReverseCard}>
      {text}
    </button>
  );
};

export default ButtonDark;
