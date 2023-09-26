import React, { useState } from "react";
import styles from "../../styles/NewCard.module.scss";
import FrontNewCard from "./FrontNewCard";
import BackNewCard from "./BackNewCard";

const NewCard: React.FC = () => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleFlip = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  return (
    <div className={styles?.cardContainerMain} data-testid="new-card">
      {!isCardFlipped && <FrontNewCard handleFlip={handleFlip} />}
      {isCardFlipped && <BackNewCard handleFlip={handleFlip} />}
    </div>
  );
};

export default NewCard;
