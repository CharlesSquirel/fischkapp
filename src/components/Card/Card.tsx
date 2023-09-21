import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardSide from "./CardSide";

type ICardType = "front" | "back";

const Card: React.FC = () => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [type, setType] = useState<ICardType>("front");
  const handleCardRevert = () => {
    type === "front" ? setType("back") : setType("front")
  }
  return (
    <div onClick={handleCardRevert}>
      <CardSide type={type} />
    </div>
  );
};

export default Card;
