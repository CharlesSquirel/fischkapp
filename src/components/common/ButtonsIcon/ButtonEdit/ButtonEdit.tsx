import React from "react";
import styles from "../ButtonsIcon.module.scss";
import buttonEdit from "../../../../assets/button-edit.svg";

const ButtonEdit: React.FC = () => {
  return (
    <button className={styles.btnEdit} >
      <img src={buttonEdit} alt="Button edit" />
    </button>
  );
};

export default ButtonEdit;
