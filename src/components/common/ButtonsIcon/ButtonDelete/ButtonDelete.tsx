import React from "react";
import styles from "../ButtonsIcon.module.scss";
import buttonDelete from "../../../../assets/button-delete.svg";

const ButtonDelete: React.FC = () => {
  return (
    <button className={styles.btnDelete}>
      <img src={buttonDelete} alt="Delete button" />
    </button>
  );
};

export default ButtonDelete;
