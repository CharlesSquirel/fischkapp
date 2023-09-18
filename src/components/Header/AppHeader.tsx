import styles from "./styles/AppHeader.module.css";
import AddButton from "./AddButton";
import CardsCounter from "./CardsCounter";
import Logo from "./Logo";

export const AppHeader:React.FC  = () => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <Logo/>
      <CardsCounter count="0"/>
    </div>
    <AddButton/>
  </header>
);
