import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./styles/AppHeader.module.css";

const Logo: React.FC = () => {
  return <img className={styles.logo} src={logo} alt="logo" />;
};

export default Logo;
