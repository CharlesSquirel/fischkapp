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

export interface ICard {
  card: CardTextsProps;
}

export interface ICardEdit {
  handleSwitchEdit: () => void;
  type: string;
}

export interface ICardSide {
  type: string;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  card: CardTextsProps;
}

export type StateFunctionProps = React.Dispatch<React.SetStateAction<boolean>>;
export type ObjectFunctionProps = React.Dispatch<React.SetStateAction<CardTextsProps>>;
