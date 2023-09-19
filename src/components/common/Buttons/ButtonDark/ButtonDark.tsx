import React from 'react'
import styles from "../Buttons.module.scss";

interface IButtonDark {
  text: string,
}

const ButtonDark:React.FC<IButtonDark> = ({text}) => {
  return (
    <div className={styles.btnDark}>{text}</div>
  )
}

export default ButtonDark