import React from "react";
import styles from "../ButtonsIcon.module.scss";
import btnDelete from "../../../../assets/button-delete.svg";
import { IButtonIcon } from "../../../services/types/types";

const ButtonDelete: React.FC<IButtonIcon> = ({handleSwitchEdit}) => {
  return (
    <button className={styles.btnIcon} onClick={handleSwitchEdit}>
      <img src={btnDelete} alt="Delete button" />
    </button>
  );
};

export default ButtonDelete;
