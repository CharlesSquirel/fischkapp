import React from "react";
import styles from "../../styles/CardList.module.scss";
import { PropsWithChildren } from "../services/types/types";

const CardList: React.FC<PropsWithChildren> = ({ children }) => {
  return <section className={styles.cardListContainer}>{children}</section>;
};

export default CardList;
