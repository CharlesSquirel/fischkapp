import React from "react";
import styles from "./Card.module.scss";
import ButtonDelete from "../common/ButtonsIcon/ButtonDelete/ButtonDelete";
import InputCard from "../common/InputCard/InputCard";
import globalStyles from "../../styles/GlobalClaasses.module.scss";

interface ICardEdit {
  handleSwitchEdit: () => void;
  content: string;
}

const CardEdit: React.FC<ICardEdit> = ({ handleSwitchEdit, content }) => {
  return (
    <article className={styles.cardContainer}>
      <InputCard value={content} />
      <div className={globalStyles.btnBox}>
        <button className={globalStyles.btnLight}>Cancel</button>
        <button className={globalStyles.btnDark}>Save</button>
      </div>
      <ButtonDelete handleSwitchEdit={handleSwitchEdit} />
    </article>
  );
};

export default CardEdit;
