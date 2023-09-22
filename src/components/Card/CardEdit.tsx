import React, { useContext } from "react";
import styles from "./Card.module.scss";
import ButtonDelete from "../common/ButtonsIcon/ButtonDelete/ButtonDelete";
import InputCard from "../common/InputCard/InputCard";
import globalStyles from "../../styles/GlobalClaasses.module.scss";
import { Context } from "../../App";

interface ICardEdit {
  handleSwitchEdit: () => void;
  type: string;
}

const CardEdit: React.FC<ICardEdit> = ({ handleSwitchEdit, type }) => {
  const context = useContext(Context);
  const { cardTextsToEdit, setCardTextsToEdit, setIsCardShowed } = context;
  const handleSave = () => {
    console.log(cardTextsToEdit);
  };
  const handleDelete = () => {
    setIsCardShowed(false);
  };
  return (
    <article className={styles.cardContainer}>
      <InputCard content={type === "front" ? cardTextsToEdit.frontText : cardTextsToEdit.backText} />
      <div className={globalStyles.btnBox}>
        <button className={globalStyles.btnLight} onClick={handleSwitchEdit}>
          Cancel
        </button>
        <button className={globalStyles.btnDark} onClick={handleSave}>
          Save
        </button>
      </div>
      <div className={globalStyles.btnIcon} onClick={handleDelete}>
        <ButtonDelete />
      </div>
    </article>
  );
};

export default CardEdit;
