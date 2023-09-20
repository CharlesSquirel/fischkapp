import React from "react";
import styles from "./Card.module.scss";
import ButtonEdit from "../common/ButtonsIcon/ButtonEdit/ButtonEdit";

const Card: React.FC = () => {
  return (
    <article className={styles.cardContainer}>
      <p>Il pesce</p>
      <ButtonEdit />
    </article>
  );
};

export default Card;
