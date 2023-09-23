import React, { useContext, useRef } from "react";
import styles from "./Card.module.scss";
import globalStyles from "../../styles/GlobalClaasses.module.scss";
import ButtonEdit from "../common/ButtonsIcon/ButtonEdit/ButtonEdit";
import CardEdit from "./CardEdit";
import { Context } from "../../App";
import { ICardSide } from "../services/types/types";

const CardSide: React.FC<ICardSide> = ({ type, isEditing, setIsEditing, card }) => {
  const context = useContext(Context);
  const { cardTextsToEdit, setCardTextsToEdit } = context;

  const handleSwitchEdit = () => {
    setIsEditing(!isEditing);
  };

  const isType = (typeToCheck: string) => typeToCheck === type;
  const { front, back } = card;

  return (
    <>
      {isEditing ? (
        <CardEdit handleSwitchEdit={handleSwitchEdit} type={type} />
      ) : (
        <article className={styles.cardContainer}>
          <p className={styles.cardText}>{type === "front" ? front : back}</p>
          <button className={globalStyles.btnIcon} onClick={handleSwitchEdit}>
            <ButtonEdit />
          </button>
        </article>
      )}
    </>
  );
};

export default CardSide;
