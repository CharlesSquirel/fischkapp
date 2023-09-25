import React, { useContext } from "react";
import styles from "../../styles/NewCard.module.scss";
import globalStyles from "../../styles/GlobalClaasses.module.scss";
import InputCard from "../common/InputCard/InputCard";
import { CardTypes, INewCard } from "../services/types/types";
import { Context } from "../../App";

const FrontNewCard: React.FC<INewCard> = ({ handleFlip }) => {
  const context = useContext(Context);
  const { isNewCardshowed, setIsNewCardShowed } = context;

  const handleCancel = () => {
    setIsNewCardShowed(!isNewCardshowed);
  };

  return (
    <article className={styles.cardFrontContainer}>
      <InputCard type={CardTypes.front} />
      <div className={globalStyles.btnBox}>
        <button className={globalStyles.btnLight} onClick={handleCancel}>
          Cancel
        </button>
        <button className={globalStyles.btnDark} onClick={handleFlip}>
          Next
        </button>
      </div>
    </article>
  );
};

export default FrontNewCard;
