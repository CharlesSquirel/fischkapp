import { AppHeader } from "./components/Header/AppHeader";
import { AppLayout } from "./components/AppLayout";
import "./styles/App.scss";
import CardList from "./components/CardList/CardList";
import React, { ReactNode, useEffect, useState } from "react";
import NewCard from "./components/NewCard/NewCard";
import { CardTextsProps, ContextProps, initialCardText } from "./components/services/types/types";
import Card from "./components/Card/Card";
import { getCards } from "./components/services/api/api";

export const Context = React.createContext<ContextProps>({
  isNewCardshowed: false,
  setIsNewCardShowed: () => {},
  newCardTexts: initialCardText,
  setNewCardTexts: () => {},
  flashCards: [],
  setFlashCards: () => {},
});

function App() {
  const [isNewCardshowed, setIsNewCardShowed] = useState(false);
  const [newCardTexts, setNewCardTexts] = useState<CardTextsProps>(initialCardText);
  const [flashCards, setFlashCards] = useState([]);

  useEffect(() => {
    getCards(setFlashCards);
  }, []);

  return (
    <Context.Provider value={{ isNewCardshowed, setIsNewCardShowed, newCardTexts, setNewCardTexts, flashCards, setFlashCards }}>
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
