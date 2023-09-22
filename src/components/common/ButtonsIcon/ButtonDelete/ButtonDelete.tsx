import React from "react";
import btnDelete from "../../../../assets/button-delete.svg";
import { IButtonIcon } from "../../../services/types/types";

const ButtonDelete: React.FC<IButtonIcon> = () => {
  return <img src={btnDelete} alt="Delete button" />;
};

export default ButtonDelete;
