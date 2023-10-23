import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Card.module.scss";
import globalStyles from "../../styles/GlobalClaasses.module.scss";
import ButtonEdit from "../common/ButtonsIcon/ButtonEdit/ButtonEdit";
import CardEdit from "./CardEdit";
import { CardTypes, ICard } from "../services/types/types";

const Card: React.FC<ICard> = ({ card }) => {
  const [type, setType] = useState(CardTypes.front);
  const [isEditing, setIsEditing] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardHeightRef = useRef<HTMLDivElement>(null);
  const [biggerHeight, setBiggerHeight] = useState(0);

  const handleCardRevert = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (isEditing || (e.target as HTMLElement).classList.contains("btnIcon")) return;
    setType(type === CardTypes.front ? CardTypes.back : CardTypes.front);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const handleSwitchEdit = () => {
    setIsEditing(!isEditing);
  };

  const { front, back } = card;

  const setCardHeight = async () => {
    if (cardHeightRef.current) {
      const currentCardHeight = cardHeightRef.current.clientHeight;
      if (currentCardHeight > biggerHeight) {
        setBiggerHeight(currentCardHeight);
      }
      console.log(biggerHeight);
    }
  };

  useEffect(() => {
    setCardHeight();
  }, []);

  return (
    <>
      {isEditing ? (
        <CardEdit handleSwitchEdit={handleSwitchEdit} type={type} card={card} />
      ) : (
        <article
          className={`${styles?.cardContainer} ${isAnimating ? styles.cardAnimation : styles.cardAnimationNone}`}
          onClick={handleCardRevert}
          data-testid={`card-${card._id}`}
          ref={cardHeightRef}
          style={{ height: biggerHeight === 0 ? "auto" : biggerHeight }}
        >
          <p className={styles?.cardText} data-testid="card-text">
            {type === CardTypes.front ? front : back}
          </p>

          <button className={globalStyles?.btnIcon} onClick={handleSwitchEdit}>
            <ButtonEdit />
          </button>
        </article>
      )}
    </>
  );
};

export default Card;
