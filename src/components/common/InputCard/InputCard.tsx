import React, { useContext, useRef } from "react";
import styles from "./InputCard.module.scss";
import { Context } from "../../../App";

interface IInputCard {
  type?: "front" | "back";
  content?: string;
}

const InputCard: React.FC<IInputCard> = ({ type, content }) => {
  const context = useContext(Context);
  const { newCardTexts, setNewCardTexts, cardTextsToEdit, setCardTextsToEdit } = context;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = (): void => {
    if (textareaRef.current) {
      textareaRef.current.style.minHeight = "40px";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const value = e.target.value;
    if (type === "front") {
      setNewCardTexts({
        ...newCardTexts,
        front: value,
      });
    } else {
      setNewCardTexts({
        ...newCardTexts,
        back: value,
      });
    }
  };

  return <textarea id="text" className={styles.inputCard} ref={textareaRef} onInput={adjustTextareaHeight} onChange={handleInputChange} value={content}></textarea>;
};

export default InputCard;
