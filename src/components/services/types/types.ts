import { ReactNode } from "react";

export interface IButton {
  text: string;
  handleReverseCard?: () => void;
}

export interface INewCard {
  handleReverseCard: () => void;
}

export type PropsWithChildren = {
  children: ReactNode;
};

export interface IButtonIcon {
  handleSwitchEdit: () => void
}
