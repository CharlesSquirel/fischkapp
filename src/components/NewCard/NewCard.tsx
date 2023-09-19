import React from 'react'
import styles from "./styles/NewCard.module.scss"
import FrontNewCard from './FrontNewCard'
import BackNewCard from './BackNewCard'

const NewCard:React.FC = () => {
  return (
    <div className={styles.cardContainer}>
        <FrontNewCard/>
        <BackNewCard/>
    </div>
  )
}

export default NewCard