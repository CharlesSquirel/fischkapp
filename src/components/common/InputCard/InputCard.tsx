import React, { useContext, useRef, useState } from "react";
import styles from "./InputCard.module.scss";
import { Context } from "../../../App";
import { IInputCard } from "../../services/types/types";

const InputCard: React.FC<IInputCard> = ({ type, textToEdit, setTextToEdit }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = (): void => {
    if (textareaRef.current) {
      textareaRef.current.style.minHeight = "40px";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const value = e.target.value;
    if (setTextToEdit) {
      if (type === "front") {
        setTextToEdit({
          ...textToEdit,
          front: value,
        });
      } else {
        setTextToEdit({
          ...textToEdit,
          back: value,
        });
      }
    }
  };

  if (!textToEdit) {
    return <div>Brak danych do edycji.</div>;
  }

  return (
    <textarea
      id="text"
      className={styles.inputCard}
      ref={textareaRef}
      onInput={adjustTextareaHeight}
      onChange={handleInputChange}
      value={type === "front" ? textToEdit.front : textToEdit.back}
    ></textarea>
  );
};

export default InputCard;
