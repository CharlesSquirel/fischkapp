import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardSide from "./CardSide";

type ICardType = "front" | "back";

const Card: React.FC = () => {
  const [type, setType] = useState<ICardType>("front");
  const [isEditing, setIsEditing] = useState(false);
  const handleCardRevert = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (isEditing || (e.target as HTMLElement).classList.contains("btnIcon")) return;
    setType(type === "front" ? "back" : "front");
  };
  return (
    <div onClick={handleCardRevert}>
      <CardSide type={type} isEditing={isEditing} setIsEditing={setIsEditing} />
    </div>
  );
};

export default Card;
