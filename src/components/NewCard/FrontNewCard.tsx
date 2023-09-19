import React from "react";
import styles from "./styles/NewCard.module.scss";

const FrontNewCard: React.FC = () => {
  return (
    <article>
      <input type="text" />
      <div className={styles.buttonBox}>
        <button></button>
        <button></button>
      </div>
    </article>
  );
};

export default FrontNewCard;
