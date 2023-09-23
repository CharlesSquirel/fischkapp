import React, { useState } from "react";
import CardSide from "./CardSide";
import { CardTextsProps } from "../services/types/types";

type ICardType = "front" | "back";

interface ICard {
  card: CardTextsProps;
}

const Card: React.FC<ICard> = ({ card }) => {
  const [type, setType] = useState<ICardType>("front");
  const [isEditing, setIsEditing] = useState(false);
  const handleCardRevert = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (isEditing || (e.target as HTMLElement).classList.contains("btnIcon")) return;
    setType(type === "front" ? "back" : "front");
  };
  return (
    <div onClick={handleCardRevert}>
      <CardSide type={type} isEditing={isEditing} setIsEditing={setIsEditing} card={card} />
    </div>
  );
};

export default Card;
