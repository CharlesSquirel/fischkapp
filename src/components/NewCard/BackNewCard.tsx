import React, { useContext } from "react";
import styles from "./styles/NewCard.module.scss";
import globalStyles from "../../styles/GlobalClaasses.module.scss";
import InputCard from "../common/InputCard/InputCard";
import ButtonDelete from "../common/ButtonsIcon/ButtonDelete/ButtonDelete";
import { INewCard } from "../services/types/types";
import { Context } from "../../App";

const BackNewCard: React.FC<INewCard> = ({ handleFlip }) => {
  const context = useContext(Context);
  const { isNewCardshowed, setIsNewCardShowed } = context;
  const handleDelete = () => {
    setIsNewCardShowed(!isNewCardshowed);
  };
  return (
    <article className={styles.cardBackContainer}>
      <div className={styles.inputBox}>
        <p className={styles.text}>Il pesce</p>
        <InputCard />
      </div>
      <div className={globalStyles.btnBox}>
        <button className={globalStyles.btnLight} onClick={handleFlip}>
          Back
        </button>
        <button className={globalStyles.btnDark}>Save</button>
      </div>
      <button className={globalStyles.btnIcon} onClick={handleDelete}>
        <ButtonDelete />
      </button>
    </article>
  );
};

export default BackNewCard;
