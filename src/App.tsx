import * as React from "react";
import "./styles/App.scss";
import styles from "./styles/CardList.module.scss";
import Card from "./components/Card/Card";
import CardList from "./components/CardList/CardList";
import NewCard from "./components/NewCard/NewCard";
import { AppHeader } from "./components/Header/AppHeader";
import { AppLayout } from "./components/AppLayout";
import { ReactNode, useEffect, useRef, useState } from "react";
import { CardTextsProps, ContextProps, IFlashcard, initialCardText } from "./components/services/types/types";
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
    <Context.Provider value={{ isNewCardshowed, setIsNewCardShowed, newCardTexts, setNewCardTexts, flashCards, setFlashCards, scrollContainerRef, getAllCards }}>
      <AppLayout>
        <AppHeader />
        <CardList>
          {!isNewCardshowed && <p className={styles.emptyCardDescription}>Add your first flaschcard</p>}
          {isNewCardshowed && <NewCard />}
          {flashCards.map((card, index): ReactNode => {
            return <Card key={index} card={card} />;
          })}
        </CardList>
      </AppLayout>
    </Context.Provider>
  );
}

export default App;
