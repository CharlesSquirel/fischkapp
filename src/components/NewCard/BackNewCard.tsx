import React, { useContext } from "react";
import styles from "../../styles/NewCard.module.scss";
import globalStyles from "../../styles/GlobalClaasses.module.scss";
import InputCard from "../common/InputCard/InputCard";
import ButtonDelete from "../common/ButtonsIcon/ButtonDelete/ButtonDelete";
import { CardTypes, INewCard, InputTypes } from "../services/types/types";
import { Context } from "../../App";
import { addCard, getCards } from "../services/api/api";

const BackNewCard: React.FC<INewCard> = ({ handleFlip }) => {
  const context = useContext(Context);
  const { isNewCardshowed, setIsNewCardShowed, newCardTexts, setFlashCards } = context;

  const handleDelete = () => {
    setIsNewCardShowed(!isNewCardshowed);
  };

  const handleSave = async () => {
    await addCard(newCardTexts);
    setIsNewCardShowed(!isNewCardshowed);
    getCards(setFlashCards);
  };

  return (
    <article className={styles?.cardBackContainer} data-testid="back-new-card">
      <div className={styles?.inputBox}>
        <p className={styles?.text}>{newCardTexts.front}</p>
        <InputCard type={CardTypes.back} inputType={InputTypes.add} />
      </div>
      <div className={globalStyles?.btnBox}>
        <button className={globalStyles?.btnLight} onClick={handleFlip}>
          Back
        </button>
        <button className={globalStyles?.btnDark} onClick={handleSave} disabled={Boolean(!newCardTexts.back)}>
          Save
        </button>
      </div>
      <button className={globalStyles?.btnIcon} onClick={handleDelete}>
        <ButtonDelete />
      </button>
    </article>
  );
};

export default BackNewCard;
