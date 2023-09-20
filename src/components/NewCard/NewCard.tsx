import React, { useState } from "react";
import styles from "./styles/NewCard.module.scss";
import FrontNewCard from "./FrontNewCard";
import BackNewCard from "./BackNewCard";

const NewCard: React.FC = () => {
  const [isCardReversed, setIsCardReversed] = useState(false)
  return (
    <div className={styles.cardContainerMain}>
      <FrontNewCard />
      {isCardReversed && <BackNewCard />}
    </div>
  );
};

export default NewCard;
