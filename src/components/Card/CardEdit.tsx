import React, { useContext, useState } from "react";
import styles from "../../styles/Card.module.scss";
import ButtonDelete from "../common/ButtonsIcon/ButtonDelete/ButtonDelete";
import InputCard from "../common/InputCard/InputCard";
import globalStyles from "../../styles/GlobalClaasses.module.scss";
import { Context } from "../../App";
import { CardTextsProps, ICardEdit } from "../services/types/types";
import { deleteCard, getCards, updateCard } from "../services/api/api";

const CardEdit: React.FC<ICardEdit> = ({ handleSwitchEdit, type, card }) => {
  const context = useContext(Context);
  const { setFlashCards } = context;

  const [textToEdit, setTextToEdit] = useState<CardTextsProps>({
    front: card?.front || "",
    back: card?.back || "",
  });

  const handleSave = () => {
    updateCard(card, textToEdit);
    handleSwitchEdit();
    getCards(setFlashCards);
  };

  const handleDelete = () => {
    deleteCard(card);
    handleSwitchEdit();
    getCards(setFlashCards);
  };

  return (
    <article className={styles.cardContainer}>
      <InputCard textToEdit={textToEdit} setTextToEdit={setTextToEdit} type={type} />
      <div className={globalStyles.btnBox}>
        <button className={globalStyles.btnLight} onClick={handleSwitchEdit}>
          Cancel
        </button>
        <button className={globalStyles.btnDark} onClick={handleSave}>
          Save
        </button>
      </div>
      <div className={globalStyles.btnIcon} onClick={handleDelete}>
        <ButtonDelete />
      </div>
    </article>
  );
};

export default CardEdit;
