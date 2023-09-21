import React from "react";
import styles from "./Card.module.scss";
import ButtonDelete from "../common/ButtonsIcon/ButtonDelete/ButtonDelete";
import InputCard from "../common/InputCard/InputCard";

interface ICardEdit {
  handleSwitchEdit: () => void;
  content: string
}

const CardEdit: React.FC<ICardEdit> = ({ handleSwitchEdit, content }) => {
  return (
    <article className={styles.cardContainer}>
      <InputCard value={content}/>
      <ButtonDelete handleSwitchEdit={handleSwitchEdit} />
    </article>
  );
};

export default CardEdit;
