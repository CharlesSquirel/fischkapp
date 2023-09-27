import React, { useState } from "react";
import styles from "../../styles/Card.module.scss";
import globalStyles from "../../styles/GlobalClaasses.module.scss";
import ButtonEdit from "../common/ButtonsIcon/ButtonEdit/ButtonEdit";
import CardEdit from "./CardEdit";
import { CardTypes, ICard } from "../services/types/types";

const Card: React.FC<ICard> = ({ card }) => {
  const [type, setType] = useState(CardTypes.front);
  const [isEditing, setIsEditing] = useState(false);

  const handleCardRevert = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (isEditing || (e.target as HTMLElement).classList.contains("btnIcon")) return;
    setType(type === CardTypes.front ? CardTypes.back : CardTypes.front);
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
        <article className={styles?.cardContainer} onClick={handleCardRevert} data-testid="card">
          <p className={styles?.cardText}>{type === CardTypes.front ? front : back}</p>
          <button className={globalStyles?.btnIcon} onClick={handleSwitchEdit}>
            <ButtonEdit />
          </button>
        </article>
      )}
    </>
  );
};

export default Card;
