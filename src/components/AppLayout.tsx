import { ReactNode } from "react";
import styles from "./AppLayout.module.scss";

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => <div className={styles.layout}>{children}</div>;
