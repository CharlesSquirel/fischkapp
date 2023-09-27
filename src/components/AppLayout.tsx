import { useContext } from "react";
import styles from "../styles/AppLayout.module.scss";
import { PropsWithChildren } from "./services/types/types";
import { Context } from "../App";

export const AppLayout = ({ children }: PropsWithChildren) => {
  const context = useContext(Context);
  const { scrollContainerRef } = context;
  return <div className={styles?.layout} ref={scrollContainerRef}>{children}</div>;
};
