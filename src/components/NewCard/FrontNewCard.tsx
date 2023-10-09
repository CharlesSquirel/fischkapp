import React, { useContext } from "react";
import styles from "../../styles/NewCard.module.scss";
import globalStyles from "../../styles/GlobalClaasses.module.scss";
import InputCard from "../common/InputCard/InputCard";
import { CardTypes, INewCard, InputTypes } from "../services/types/types";
import { Context } from "../../App";

const FrontNewCard: React.FC<INewCard> = ({ handleFlip }) => {
  const context = useContext(Context);
  const { isNewCardshowed, setIsNewCardShowed, newCardTexts } = context;

  const handleCancel = () => {
    setIsNewCardShowed(!isNewCardshowed);
  };
  return (
    <article className={styles?.cardFrontContainer} data-testid="front-new-card">
      <InputCard type={CardTypes.front} inputType={InputTypes.add} />
      <div className={globalStyles?.btnBox}>
        <button className={globalStyles?.btnLight} onClick={handleCancel}>
          Cancel
        </button>
        <button name="next" className={globalStyles?.btnDark} onClick={handleFlip} disabled={Boolean(!newCardTexts.front)}>
          Next
        </button>
      </div>
    </article>
  );
};

export default FrontNewCard;
