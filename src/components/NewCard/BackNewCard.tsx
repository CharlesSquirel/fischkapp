import React, { useContext } from "react";
import styles from "./styles/NewCard.module.scss";
import globalStyles from "../../styles/GlobalClaasses.module.scss";
import InputCard from "../common/InputCard/InputCard";
import ButtonDelete from "../common/ButtonsIcon/ButtonDelete/ButtonDelete";
import { INewCard } from "../services/types/types";
import { Context } from "../../App";
import { addCard } from "../services/api/api";

const BackNewCard: React.FC<INewCard> = ({ handleFlip }) => {
  const context = useContext(Context);
  const { isNewCardshowed, setIsNewCardShowed, newCardTexts, setNewCardTexts } = context;
  const handleDelete = () => {
    setIsNewCardShowed(!isNewCardshowed);
  };

  const handleSave = () => {
    addCard(newCardTexts);
  };
  return (
    <article className={styles.cardBackContainer}>
      <div className={styles.inputBox}>
        <p className={styles.text}>{newCardTexts.front}</p>
        <InputCard type="back" />
      </div>
      <div className={globalStyles.btnBox}>
        <button className={globalStyles.btnLight} onClick={handleFlip}>
          Back
        </button>
        <button className={globalStyles.btnDark} onClick={handleSave}>
          Save
        </button>
      </div>
      <button className={globalStyles.btnIcon} onClick={handleDelete}>
        <ButtonDelete />
      </button>
    </article>
  );
};

export default BackNewCard;
