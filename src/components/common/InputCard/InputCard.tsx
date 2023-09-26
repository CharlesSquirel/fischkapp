import React, { useContext, useRef } from "react";
import styles from "../../../styles/InputCard.module.scss";
import { CardTypes, IInputCard, InputTypes } from "../../services/types/types";
import { Context } from "../../../App";

const InputCard: React.FC<IInputCard> = ({ type, textToEdit, setTextToEdit, inputType }) => {
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
    if ((inputType === InputTypes.edit)) {
      if (setTextToEdit) {
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
      }
    }
    else   {
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

  return (
    <textarea
      id="text"
      className={styles?.inputCard}
      ref={textareaRef}
      onInput={adjustTextareaHeight}
      onChange={handleInputChange}
      value={CardTypes.front ? textToEdit?.front : CardTypes.back ? textToEdit?.back : ""}
    ></textarea>
  );
};

export default InputCard;
