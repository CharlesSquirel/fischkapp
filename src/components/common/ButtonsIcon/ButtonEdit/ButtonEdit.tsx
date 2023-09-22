import React from 'react'
import btnEdit from "../../../../assets/button-edit.svg";
import styles from "../ButtonsIcon.module.scss";
import { IButtonIcon } from '../../../services/types/types';


const ButtonEdit:React.FC<IButtonIcon> = ({handleSwitchEdit}) => {
  return (
    <button className={styles.btnIcon} onClick={handleSwitchEdit}>
        <img src={btnEdit} alt="Button edit" />
    </button>
  )
}

export default ButtonEdit