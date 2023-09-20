import React, { useState } from "react";
import styles from "./styles/NewCard.module.scss";
import FrontNewCard from "./FrontNewCard";
import BackNewCard from "./BackNewCard";

const NewCard: React.FC = () => {
  const [isCardReversed, setIsCardReversed] = useState(false)
  const handleReverseCard = () => {
    setIsCardReversed(!isCardReversed)
  }
  return (
    <div className={styles.cardContainerMain}>
      {!isCardReversed && <FrontNewCard handleReverseCard = {handleReverseCard}/>}
      {isCardReversed && <BackNewCard handleReverseCard = {handleReverseCard}/>}
    </div>
  );
};

export default NewCard;
