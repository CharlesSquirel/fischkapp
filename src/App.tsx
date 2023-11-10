import * as React from "react";
import { AppHeader } from "./components/Header/AppHeader";
import { AppLayout } from "./components/AppLayout";
import "./styles/App.scss";
import styles from "./styles/CardList.module.scss";
import CardList from "./components/CardList/CardList";
import { ReactNode, useEffect, useRef, useState } from "react";
import NewCard from "./components/NewCard/NewCard";
import { CardTextsProps, ContextProps, IFlashcard, initialCardText } from "./components/services/types/types";
import Card from "./components/Card/Card";
import { getCards } from "./components/services/api/api";
// dummy PR

export const Context = React.createContext<ContextProps>({
  isNewCardshowed: false,
  setIsNewCardShowed: () => {},
  newCardTexts: initialCardText,
  setNewCardTexts: () => {},
  flashCards: [],
  setFlashCards: () => {},
  scrollContainerRef: null,
  getAllCards: () => {},
});

function App() {
  const [isNewCardshowed, setIsNewCardShowed] = useState(false);
  const [newCardTexts, setNewCardTexts] = useState<CardTextsProps>(initialCardText);
  const [flashCards, setFlashCards] = useState<IFlashcard[]>([]);
  const scrollContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const createFormattedData = (cardData: string) => {
    const date = cardData;
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const year = date.slice(0, 4);
    const hours = date.slice(11, 13);
    const minutes = date.slice(14, 16);
    const seconds = date.slice(17, 19);
    const formattedData = year.concat(month, day, hours, minutes, seconds);
    return formattedData;
  };

  const sortCards = (cards: IFlashcard[]) => {
    cards.sort((a, b) => +createFormattedData(b.createdAt) - +createFormattedData(a.createdAt));
  };

  const getAllCards = async () => {
    try {
      setIsLoading(true);
      const cards = await getCards();
      sortCards(cards ? cards : []);
      setFlashCards(cards ? cards : []);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <Context.Provider value={{ isNewCardshowed, setIsNewCardShowed, newCardTexts, setNewCardTexts, flashCards, setFlashCards, scrollContainerRef, getAllCards }}>
      <AppLayout>
        <AppHeader />
        <CardList>
          {flashCards.length === 0 && !isNewCardshowed && !isLoading && <p className={styles.emptyCardDescription}>Add your first flashcard</p>}
          {isNewCardshowed && <NewCard />}
          {flashCards.map((card, index: number): ReactNode => {
            return <Card key={index} card={card} />;
          })}
        </CardList>
      </AppLayout>
    </Context.Provider>
  );
}

export default App;
