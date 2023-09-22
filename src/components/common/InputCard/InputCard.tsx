import React, { useRef } from "react";
import styles from "./InputCard.module.scss";

interface IInputCard {
  value?: string;
}

const InputCard: React.FC<IInputCard> = ({ value }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const adjustTextareaHeight = (): void => {
    if (textareaRef.current) {
      textareaRef.current.style.minHeight = "40px";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };

  return <textarea className={styles.inputCard} ref={textareaRef} onInput={adjustTextareaHeight} value={value}></textarea>;
};

export default InputCard;
