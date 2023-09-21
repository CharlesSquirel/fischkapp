import React, { useState } from "react";
import Card from "./Card";

const CardBox: React.FC = () => {
  const [isCardFrontActive, setIsCardFrontActive] = useState(true);
  const [isCardBackActive, setIsCardBackActive] = useState(false);
  const [content, setContent] = useState({
    frontText: "front text",
    backText: "back text",
  });
  const [isEditFrontActive, setIsEditFrontActive] = useState(false);
  const [isEditBackActive, setIsEditBackActive] = useState(false);
  const text = isCardBackActive ? content.backText : content.frontText;
  const handleEditButton = (type:string) => {
    if (type === "front") {
        setIsCardFrontActive(false)
        setIsEditFrontActive(true)
    }
    else {
        setIsCardBackActive(false)
        setIsEditBackActive(true)
    }
  }

  return (
    <>
      {((isCardFrontActive && !isCardBackActive) || (isEditFrontActive && !isEditBackActive)) && (
        <Card text={text} type={isEditFrontActive ? "editfront" : "front"} />
      )}
      {((isCardBackActive && !isCardFrontActive) || (isEditBackActive && !isEditFrontActive)) && (
        <Card text={text} type={isEditBackActive ? "editback" : "back"} />
      )}
    </>
  );
};

export default CardBox;
