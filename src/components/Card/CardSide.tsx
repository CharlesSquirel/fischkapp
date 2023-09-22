import React, { useContext, useRef } from "react";
import styles from "./Card.module.scss";
import globalStyles from "../../styles/GlobalClaasses.module.scss";
import ButtonEdit from "../common/ButtonsIcon/ButtonEdit/ButtonEdit";
import CardEdit from "./CardEdit";
import { Context } from "../../App";

interface ICard {
  type: string;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardSide: React.FC<ICard> = ({ type, isEditing, setIsEditing }) => {
  const context = useContext(Context);
  const { cardTextsToEdit, setCardTextsToEdit } = context;
  const isType = (typeToCheck: string) => typeToCheck === type;
  const handleSwitchEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      {isEditing ? (
        <CardEdit handleSwitchEdit={handleSwitchEdit} type={type} />
      ) : (
        <article className={styles.cardContainer}>
          <p className={styles.cardText}>{type === "front" ? cardTextsToEdit.frontText : cardTextsToEdit.backText}</p>
          <button className={globalStyles.btnIcon} onClick={handleSwitchEdit}>
            <ButtonEdit />
          </button>
        </article>
      )}
    </>
  );
};

export default CardSide;
