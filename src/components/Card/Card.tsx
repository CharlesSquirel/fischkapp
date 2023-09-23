import React, { useState } from "react";
import styles from "./Card.module.scss";
import globalStyles from "../../styles/GlobalClaasses.module.scss";
import ButtonEdit from "../common/ButtonsIcon/ButtonEdit/ButtonEdit";
import CardEdit from "./CardEdit";
import { CardTypes, ICard } from "../services/types/types";

const Card: React.FC<ICard> = ({ card }) => {
  const [type, setType] = useState(CardTypes.frontType);
  const [isEditing, setIsEditing] = useState(false);

  const handleCardRevert = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (isEditing || (e.target as HTMLElement).classList.contains("btnIcon")) return;
    setType(type === CardTypes.frontType ? CardTypes.backType : CardTypes.frontType);
  };

  const handleSwitchEdit = () => {
    setIsEditing(!isEditing);
  };

  const { front, back } = card;

  return (
    <>
      {isEditing ? (
        <CardEdit handleSwitchEdit={handleSwitchEdit} type={type} card={card} />
      ) : (
        <article className={styles.cardContainer} onClick={handleCardRevert}>
          <p className={styles.cardText}>{type === "front" ? front : back}</p>
          <button className={globalStyles.btnIcon} onClick={handleSwitchEdit}>
            <ButtonEdit />
          </button>
        </article>
      )}
    </>
  );
};

export default Card;
