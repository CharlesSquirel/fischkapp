import React, { useContext, useRef } from "react";
import styles from "./InputCard.module.scss";
import { Context } from "../../../App";

interface IInputCard {
  type?: "front" | "back";
}

const InputCard: React.FC<IInputCard> = ({ type }) => {
  const context = useContext(Context);
  const { newCardTexts, setNewCardTexts } = context;
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
        frontText: value,
      });
    } else {
      setNewCardTexts({
        ...newCardTexts,
        backText: value,
      });
    }
  };

  return (
    <textarea
      id="text"
      className={styles.inputCard}
      ref={textareaRef}
      onInput={adjustTextareaHeight}
      onChange={handleInputChange}
      value={type === "front" ? newCardTexts.frontText : newCardTexts.backText}
    ></textarea>
  );
};

export default InputCard;
