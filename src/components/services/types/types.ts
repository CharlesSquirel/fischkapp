import { ReactNode } from "react";

export interface IButton {
  text: string;
  handleReverseCard?: () => void;
  handleSwitchEdit?: () => void;
  cancelAdding?: () => void;
}

export interface INewCard {
  handleFlip?: () => void;
}

export type PropsWithChildren = {
  children: ReactNode;
};

export interface IButtonIcon {
  handleSwitchEdit?: () => void;
}

export interface CardTextsProps {
  frontText: string;
  backText: string;
}

export const initialNewCardText: CardTextsProps = {
  frontText: "",
  backText: "",
};
