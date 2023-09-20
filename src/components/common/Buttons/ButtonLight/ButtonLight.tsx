import React from "react";
import styles from "../Buttons.module.scss";

interface IButtonLight {
  text: string;
  handleReverseCard?: () => void; 
}

const ButtonLight: React.FC<IButtonLight> = ({ text, handleReverseCard }) => {
  return <button className={styles.btnLight} onClick={handleReverseCard}>{text}</button>;
};

export default ButtonLight;
