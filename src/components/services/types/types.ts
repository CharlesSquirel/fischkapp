export interface IButton {
  text: string;
  handleReverseCard?: () => void;
}

export interface INewCard {
  handleReverseCard: () => void;
}
