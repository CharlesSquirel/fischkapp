import React from "react";
import styles from "../Buttons.module.scss";
import { IButton } from "../../../services/types/types";

const ButtonLight: React.FC<IButton> = ({ text, handleReverseCard }) => {
  return (
    <button className={styles.btnLight} onClick={handleReverseCard}>
      {text}
    </button>
  );
};

export default ButtonLight;
