import React, { useContext } from "react";
import styles from "../../styles/AppHeader.module.scss";
import plusIcon from "../../assets/plus-icon.svg";
import { Context } from "../../App";
import { IAddButton } from "../services/types/types";

const AddButton: React.FC<IAddButton> = () => {
  const context = useContext(Context);
  const { isNewCardshowed, setIsNewCardShowed, scrollContainerRef, newCardTexts } = context;

  const scrollToTop = () => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  const handleAddNewCard = () => {
    setIsNewCardShowed(!isNewCardshowed);
    scrollToTop();
  };

  return (
    <button className={styles?.addbtn} onClick={handleAddNewCard}>
      <img src={plusIcon} alt="plus icon" />
    </button>
  );
};

export default AddButton;
