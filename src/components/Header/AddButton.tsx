import React from "react";
import styles from "./styles/AppHeader.module.scss";
import plusIcon from "../../assets/plus-icon.svg";

const AddButton: React.FC = () => {
  return (
    <button className={styles.addbtn}>
      <img src={plusIcon} alt="plus icon" />
    </button>
  );
};

export default AddButton;
