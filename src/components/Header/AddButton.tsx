import React, { useContext } from "react";
import styles from "./styles/AppHeader.module.scss";
import plusIcon from "../../assets/plus-icon.svg";
import { Context } from "../../App";

interface IAddButton {
  onClick?: () => void;
}

const AddButton: React.FC<IAddButton> = () => {
  const context = useContext(Context);
  const { isNewCardshowed, setIsNewCardShowed } = context;
  const handleAddNewCard = () => {
    setIsNewCardShowed(!isNewCardshowed);
  };
  return (
    <button className={styles.addbtn} onClick={handleAddNewCard}>
      <img src={plusIcon} alt="plus icon" />
    </button>
  );
};

export default AddButton;
