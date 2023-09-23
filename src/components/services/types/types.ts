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
  _id?: string;
}

export const initialCardText: CardTextsProps = {
  front: "front text",
  back: "back text",
};

export interface ICardEdit {
  handleSwitchEdit: () => void;
  type: "front" | "back";
  card: CardTextsProps;
}

export interface ICard {
  card: CardTextsProps;
}

export enum CardTypes {
  frontType = "front",
  backType = "back",
}

export interface IInputCard {
  type?: "front" | "back";
  textToEdit?: CardTextsProps;
  setTextToEdit?: React.Dispatch<React.SetStateAction<any>>;
}

export type StateFunctionProps = React.Dispatch<React.SetStateAction<boolean>>;
export type ObjectFunctionProps = React.Dispatch<React.SetStateAction<CardTextsProps>>;
