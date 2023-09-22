import React from "react";
import btnEdit from "../../../../assets/button-edit.svg";
import { IButtonIcon } from "../../../services/types/types";

const ButtonEdit: React.FC<IButtonIcon> = () => {
  return <img src={btnEdit} alt="Button edit" className="btnIcon" />;
};

export default ButtonEdit;
