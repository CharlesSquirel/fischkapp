import React from "react";
import styles from "../Buttons.module.scss";

interface IButtonDark {
  text: string;
  handleReverseCard?: () => void;
}

const ButtonDark: React.FC<IButtonDark> = ({ text, handleReverseCard }) => {
  return (
    <button className={styles.btnDark} onClick={handleReverseCard}>
      {text}
    </button>
  );
};

export default ButtonDark;
