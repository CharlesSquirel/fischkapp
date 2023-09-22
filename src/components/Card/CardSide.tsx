import React, { useState } from "react";
import styles from "./Card.module.scss";
import ButtonEdit from "../common/ButtonsIcon/ButtonEdit/ButtonEdit";
import CardEdit from "./CardEdit";

interface ICard {
  type: string;
}

interface ContentProps {
  front: string;
  back: string;
}

const CardSide: React.FC<ICard> = ({ type }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState<ContentProps>({
    front: "front text",
    back: "back text",
  });
  const isType = (typeToCheck: string) => typeToCheck === type;
  const handleSwitchEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      {isEditing ? (
        <CardEdit handleSwitchEdit={handleSwitchEdit} content={type === "front" ? content.front : content.back} />
      ) : (
        <article className={styles.cardContainer}>
          <p className={styles.cardText}>{type === "front" ? content.front : content.back}</p>

          <ButtonEdit handleSwitchEdit={handleSwitchEdit} />
        </article>
      )}
    </>
  );
};

export default CardSide;
