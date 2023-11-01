import React, { useContext, useRef, useState } from "react";
import styles from "../../styles/Card.module.scss";
import ButtonDelete from "../common/ButtonsIcon/ButtonDelete/ButtonDelete";
import InputCard from "../common/InputCard/InputCard";
import globalStyles from "../../styles/GlobalClaasses.module.scss";
import { Context } from "../../App";
import { CardTextsProps, ICardEdit, InputTypes, initialCardText } from "../services/types/types";
import { deleteCard, updateCard } from "../services/api/api";

const CardEdit: React.FC<ICardEdit> = ({ handleSwitchEdit, type, card }) => {
  const context = useContext(Context);
  const { getAllCards, setNewCardTexts } = context;

  const [textToEdit, setTextToEdit] = useState<CardTextsProps>({
    front: card.front || "",
    back: card.back || "",
  });

  const handleSave = async () => {
    await updateCard(card, textToEdit);
    await getAllCards();
    await handleSwitchEdit();
  };

  const handleDelete = async () => {
    await deleteCard(card);
    handleSwitchEdit();
    await getAllCards();
    setNewCardTexts(initialCardText);
  };

  return (
    <article className={styles?.cardEditContainer} data-testid="edit-card">
      <InputCard textToEdit={textToEdit} setTextToEdit={setTextToEdit} type={type} inputType={InputTypes.edit} />
      <div className={globalStyles?.btnBox}>
        <button className={globalStyles?.btnLight} onClick={handleSwitchEdit}>
          Cancel
        </button>
        <button className={globalStyles?.btnDark} onClick={handleSave} disabled={!textToEdit.front || !textToEdit.back}>
          Save
        </button>
      </div>
      <div className={globalStyles?.btnIcon} onClick={handleDelete}>
        <ButtonDelete />
      </div>
    </article>
  );
};

export default CardEdit;
