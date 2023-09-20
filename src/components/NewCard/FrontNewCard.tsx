import React from "react";
import styles from "./styles/NewCard.module.scss";
import InputCard from "../common/InputCard/InputCard";
import ButtonLight from "../common/Buttons/ButtonLight/ButtonLight";
import ButtonDark from "../common/Buttons/ButtonDark/ButtonDark";

interface IFrontNewCard {
  handleReverseCard: () => void;
}

const FrontNewCard: React.FC<IFrontNewCard> = ({handleReverseCard}) => {
  return (
    <article className={styles.cardFrontContainer}>
      <InputCard />
      <div className={styles.btnBox}>
        <ButtonLight text="cancel" />
        <ButtonDark text="next" handleReverseCard={handleReverseCard}/>
      </div>
    </article>
  );
};

export default FrontNewCard;
