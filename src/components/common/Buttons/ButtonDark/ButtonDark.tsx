import React from "react";
import styles from "../Buttons.module.scss";

interface IButtonDark {
  text: string;
}

const ButtonDark: React.FC<IButtonDark> = ({ text }) => {
  return <button className={styles.btnDark}>{text}</button>;
};

export default ButtonDark;
