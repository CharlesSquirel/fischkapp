import React, { useState } from "react";
import styles from "./Card.module.scss";
import ButtonEdit from "../common/ButtonsIcon/ButtonEdit/ButtonEdit";
import EditCard from "./EditCard";

const Card: React.FC = () => {
  const [isCardReversed, setIsCardReversed] = useState(false);
  const [content, setContet] = useState({
    frontText: "front text",
    backText: "back text",
  });
  const [isEditing, setIsEditing] = useState(false);
  const text = isCardReversed ? content.backText : content.frontText;

  return (
    <>
      {!isEditing && (
        <article className={styles.cardContainer}>
          <p>{isCardReversed ? content.frontText : content.backText}</p>
          <ButtonEdit />
        </article>
      )}
      {isEditing && <EditCard text={text} />}
    </>
  );
};

export default Card;
