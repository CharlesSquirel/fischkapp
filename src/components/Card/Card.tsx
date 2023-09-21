import React from "react";
import styles from "./Card.module.scss";
import ButtonEdit from "../common/ButtonsIcon/ButtonEdit/ButtonEdit";
import InputCard from "../common/InputCard/InputCard";
import ButtonDelete from "../common/ButtonsIcon/ButtonDelete/ButtonDelete";
import ButtonLight from "../common/Buttons/ButtonLight/ButtonLight";
import ButtonDark from "../common/Buttons/ButtonDark/ButtonDark";

interface ICard {
  text: string;
  type: "front" | "back" | "editfront" | "editback";
}

const Card: React.FC<ICard> = ({ text, type}) => {
  const isType = (typeToCheck: string): boolean => type === typeToCheck;
  return (
    <>
      <article className={styles.cardContainer}>
        {isType("front") || isType("back") ? <p>{text}</p> : null}
        {isType("editfront") || (isType("editback") ? <InputCard /> : null)}
        {isType("editfront") || isType("editback") ? (
          <>
            <div className={styles.btnBox}>
              <ButtonLight text="cancel" />
              <ButtonDark text="save" />
            </div>
          </>
        ) : null}
        {isType("front") || isType("back") ? <ButtonEdit/> : null}
        {isType("editfront") || isType("editback") ? <ButtonDelete /> : null}
      </article>
    </>
  );
};

export default Card;
