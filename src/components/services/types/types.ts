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

export enum InputTypes {
  add = "add",
  edit = "edit",
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
  front: "",
  back: "",
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
  inputType: InputTypes;
}

export interface ContextProps {
  isNewCardshowed: boolean;
  setIsNewCardShowed: StateFunctionProps;
  newCardTexts: CardTextsProps;
  setNewCardTexts: ObjectFunctionProps;
  flashCards: IFlashcard[];
  setFlashCards: React.Dispatch<React.SetStateAction<any>>;
  scrollContainerRef: React.RefObject<HTMLDivElement> | null;
  getAllCards: () => void;
  setCardCurrentHeight: React.Dispatch<React.SetStateAction<number>>;
  cardCurrentHeight: number;
}

export interface IFlashcard {
  _id: string;
  _v: number;
  back: string;
  front: string;
  uptadetAt: string;
  createdAt: string;
}
