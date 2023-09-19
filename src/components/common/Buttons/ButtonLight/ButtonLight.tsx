import React from "react";
import styles from "../Buttons.module.scss";

interface IButtonLight {
  text: string;
}

const ButtonLight: React.FC<IButtonLight> = ({ text }) => {
  return <button className={styles.btnLight}>{text}</button>;
};

export default ButtonLight;
