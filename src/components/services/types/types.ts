import { ReactNode } from "react";

export type StateFunctionProps = React.Dispatch<React.SetStateAction<boolean>>;
export type ObjectFunctionProps = React.Dispatch<React.SetStateAction<CardTextsProps>>;

export type PropsWithChildren = {
  children: ReactNode;
};

export enum CardTypes {
  front = "front",
  back = "back",
}

export interface IButton extends IButtonIcon {
  text: string;
  handleReverseCard?: () => void;
  cancelAdding?: () => void;
}

export interface IButtonIcon {
  handleSwitchEdit?: () => void;
}

export interface IAddButton {
  onClick?: () => void;
}

export interface INewCard {
  handleFlip?: () => void;
}

export interface CardTextsProps {
  front: string;
  back: string;
  _id?: string;
}

export const initialCardText: CardTextsProps = {
  front: "front text",
  back: "back text",
};

export interface ICardEdit extends ICard {
  handleSwitchEdit: () => void;
  type: CardTypes;
}

export interface ICard {
  card: CardTextsProps;
}

export interface IInputCard {
  type?: CardTypes;
  textToEdit?: CardTextsProps;
  setTextToEdit?: React.Dispatch<React.SetStateAction<any>>;
}

export interface ICardsCounter {
  count: string;
}

export interface ContextProps {
  isNewCardshowed: boolean;
  setIsNewCardShowed: StateFunctionProps;
  newCardTexts: CardTextsProps;
  setNewCardTexts: ObjectFunctionProps;
  flashCards: object;
  setFlashCards: React.Dispatch<React.SetStateAction<any>>;
}
