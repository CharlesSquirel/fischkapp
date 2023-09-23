import { AppHeader } from "./components/Header/AppHeader";
import { AppLayout } from "./components/AppLayout";
import "./styles/App.scss";
import CardList from "./components/common/CardList/CardList";
import React, { ReactNode, useEffect, useState } from "react";
import NewCard from "./components/NewCard/NewCard";
import { CardTextsProps, ObjectFunctionProps, StateFunctionProps, initialCardText } from "./components/services/types/types";
import Card from "./components/Card/Card";
import { getCards } from "./components/services/api/api";

export const Context = React.createContext<{
  isNewCardshowed: boolean;
  setIsNewCardShowed: StateFunctionProps;
  newCardTexts: CardTextsProps;
  setNewCardTexts: ObjectFunctionProps;
  cardTextsToEdit: CardTextsProps;
  setCardTextsToEdit: ObjectFunctionProps;
  isCardShowed: boolean;
  setIsCardShowed: StateFunctionProps;
  flashCards: object;
  setFlashCards: React.Dispatch<React.SetStateAction<any>>;
}>({
  isNewCardshowed: false,
  setIsNewCardShowed: () => {},
  newCardTexts: initialCardText,
  setNewCardTexts: () => {},
  cardTextsToEdit: initialCardText,
  setCardTextsToEdit: () => {},
  isCardShowed: true,
  setIsCardShowed: () => {},
  flashCards: [],
  setFlashCards: () => {},
});

function App() {
  const [isNewCardshowed, setIsNewCardShowed] = useState(false);
  const [newCardTexts, setNewCardTexts] = useState<CardTextsProps>(initialCardText);
  const [cardTextsToEdit, setCardTextsToEdit] = useState<CardTextsProps>(initialCardText);
  const [isCardShowed, setIsCardShowed] = useState(false);
  const [flashCards, setFlashCards] = useState([]);

  useEffect(() => {
    (async () => {
      await getCards(setFlashCards);
      console.log(flashCards);
    })();
  }, []);

  return (
    <Context.Provider value={{ isNewCardshowed, setIsNewCardShowed, newCardTexts, setNewCardTexts, cardTextsToEdit, setCardTextsToEdit, isCardShowed, setIsCardShowed, flashCards, setFlashCards }}>
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
