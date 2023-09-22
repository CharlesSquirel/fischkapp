import React from "react";
import styles from "./Card.module.scss";
import ButtonDelete from "../common/ButtonsIcon/ButtonDelete/ButtonDelete";
import InputCard from "../common/InputCard/InputCard";
import ButtonLight from "../common/Buttons/ButtonLight/ButtonLight";
import ButtonDark from "../common/Buttons/ButtonDark/ButtonDark";

interface ICardEdit {
  handleSwitchEdit: () => void;
  content: string;
}

const CardEdit: React.FC<ICardEdit> = ({ handleSwitchEdit, content }) => {
  return (
    <article className={styles.cardContainer}>
      <InputCard value={content} />
      <div className={styles.btnBox}>
        <ButtonLight text="cancel" handleSwitchEdit={handleSwitchEdit} />
        <ButtonDark text="save" />
      </div>
      <ButtonDelete handleSwitchEdit={handleSwitchEdit} />
    </article>
  );
};

export default CardEdit;
