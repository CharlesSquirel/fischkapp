import React from "react";
import styles from "./styles/NewCard.module.scss";
import ButtonLight from "../common/Buttons/ButtonLight/ButtonLight";
import ButtonDark from "../common/Buttons/ButtonDark/ButtonDark";
import InputCard from "../common/InputCard/InputCard";
import ButtonDelete from "../common/ButtonsIcon/ButtonDelete/ButtonDelete";

interface IBackNewCard {
  handleReverseCard: () => void;
}

const BackNewCard: React.FC<IBackNewCard> = ({handleReverseCard}) => {
  return (
    <article className={styles.cardBackContainer}>
      <div className={styles.inputBox}>
        <p className={styles.text}>Il pesce</p>
        <InputCard />
      </div>
      <div className={styles.btnBox}>
        <ButtonLight text="back" handleReverseCard={handleReverseCard}/>
        <ButtonDark text="save" />
      </div>
      <ButtonDelete />
    </article>
  );
};

export default BackNewCard;
