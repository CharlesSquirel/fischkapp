import React, { useState } from "react";
import CardSide from "./CardSide";
import { ICard } from "../services/types/types";
import { CardTypes } from "../services/api/api";

const Card: React.FC<ICard> = ({ card }) => {
  const [type, setType] = useState(CardTypes.frontType);
  const [isEditing, setIsEditing] = useState(false);

  const handleCardRevert = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (isEditing || (e.target as HTMLElement).classList.contains("btnIcon")) return;
    setType(type === CardTypes.frontType ? CardTypes.backType : CardTypes.frontType);
  };

  return (
    <div onClick={handleCardRevert}>
      <CardSide type={type} isEditing={isEditing} setIsEditing={setIsEditing} card={card} />
    </div>
  );
};

export default Card;
