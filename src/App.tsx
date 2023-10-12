import * as React from "react";
import { AppHeader } from "./components/Header/AppHeader";
import { AppLayout } from "./components/AppLayout";
import "./styles/App.scss";
import CardList from "./components/CardList/CardList";
import { ReactNode, useEffect, useRef, useState } from "react";
import NewCard from "./components/NewCard/NewCard";
import { CardTextsProps, ContextProps, IFlashcard, initialCardText } from "./components/services/types/types";
import Card from "./components/Card/Card";
import { getCards } from "./components/services/api/api";

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
  // dummy pr
  const [isNewCardshowed, setIsNewCardShowed] = useState(false);
  const [newCardTexts, setNewCardTexts] = useState<CardTextsProps>(initialCardText);
  const [flashCards, setFlashCards] = useState<IFlashcard[]>([]);
  const scrollContainerRef = useRef(null);
  
  const getAllCards = async () => {
    try {
      const cards = await getCards();
      setFlashCards(cards ? cards : []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <Context.Provider
      value={{ isNewCardshowed, setIsNewCardShowed, newCardTexts, setNewCardTexts, flashCards, setFlashCards, scrollContainerRef, getAllCards }}
    >
      <AppLayout>
        <AppHeader />
        <CardList>
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
