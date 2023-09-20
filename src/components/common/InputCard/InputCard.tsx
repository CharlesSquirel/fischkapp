import React, { useRef } from "react";
import styles from "./InputCard.module.scss";

const InputCard: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const adjustTextareaHeight = (): void => {
    if (textareaRef.current) {
      textareaRef.current.style.minHeight = "40px";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };

  return <textarea className={styles.inputCard} ref={textareaRef} onInput={adjustTextareaHeight}></textarea>;
};

export default InputCard;
