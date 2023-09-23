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
  front: string;
  back: string;
}

export const initialCardText: CardTextsProps = {
  front: "front text",
  back: "back text",
};
