import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "../../../styles/InputCard.module.scss";
import { CardTypes, IInputCard, InputTypes } from "../../services/types/types";
import { Context } from "../../../App";

const InputCard: React.FC<IInputCard> = ({ type, textToEdit, setTextToEdit, inputType }) => {
  const context = useContext(Context);
  const { newCardTexts, setNewCardTexts } = context;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = (): void => {
    if (textareaRef.current) {
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const value = e.target.value;
    if (inputType === InputTypes.edit && setTextToEdit) {
      if (type === CardTypes.front) {
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
    } else {
      if (type === CardTypes.front) {
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
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 700;
    const textArea = textareaRef.current;
    if (textArea) {
      textArea.focus();
      if (isMobile) {
        textArea.setSelectionRange(textArea.value.length, textArea.value.length);
      }
    }
  }, []);

  let inputValue;
  inputValue =
    type === CardTypes.front && inputType === InputTypes.edit
      ? textToEdit?.front
      : type === CardTypes.back && inputType === InputTypes.edit
      ? textToEdit?.back
      : type === CardTypes.front && inputType === InputTypes.add
      ? newCardTexts.front
      : newCardTexts.back;

  return <textarea id="text" className={styles?.inputCard} ref={textareaRef} onInput={adjustTextareaHeight} onChange={handleInputChange} value={inputValue}></textarea>;
};

export default InputCard;
