import styles from "../styles/AppLayout.module.scss";
import { PropsWithChildren } from "./services/types/types";

export const AppLayout = ({ children }: PropsWithChildren) => <div className={styles.layout}>{children}</div>;
