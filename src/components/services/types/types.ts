import { ReactNode } from "react";

export interface IButton {
  text: string;
  handleReverseCard?: () => void;
  handleCancel?: () => void;
  switchEditCard?: () => void;
}

export interface INewCard {
  handleReverseCard: () => void;
}

export type PropsWithChildren = {
  children: ReactNode;
};
