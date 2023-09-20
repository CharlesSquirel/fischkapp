import React from "react";
import styles from "./Card.module.scss";
import InputCard from "../common/InputCard/InputCard";
import ButtonDelete from "../common/ButtonsIcon/ButtonDelete/ButtonDelete";
import ButtonLight from "../common/Buttons/ButtonLight/ButtonLight";
import ButtonDark from "../common/Buttons/ButtonDark/ButtonDark";

interface IEditCard {
  text: string;
}

const EditCard: React.FC<IEditCard> = ({ text }) => {
  return (
    <article className={styles.cardEditContainer}>
      <InputCard value={text}></InputCard>
      <ButtonDelete />
      <div className={styles.btnBox}>
        <ButtonLight text="cancel" />
        <ButtonDark text="save" />
      </div>
    </article>
  );
};

export default EditCard;
