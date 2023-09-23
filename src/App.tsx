import { AppHeader } from "./components/Header/AppHeader";
import { AppLayout } from "./components/AppLayout";
import "./styles/App.scss";
import CardList from "./components/common/CardList/CardList";
import React, { useEffect, useState } from "react";
import NewCard from "./components/NewCard/NewCard";
import { CardTextsProps, initialCardText } from "./components/services/types/types";
import Card from "./components/Card/Card";

type StateFunctionProps = React.Dispatch<React.SetStateAction<boolean>>;
type ObjectFunctionProps = React.Dispatch<React.SetStateAction<CardTextsProps>>;
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

  const fetchProducts = async () => {
    const res = await fetch("https://training.nerdbord.io/api/v1/fischkapp/flashcards");
    const data = await res.json();
    setFlashCards(data);
  };
  useEffect(() => {
    (async () => {
      await fetchProducts();
    })();
    console.log(flashCards);
  }, []);

  return (
    <Context.Provider value={{ isNewCardshowed, setIsNewCardShowed, newCardTexts, setNewCardTexts, cardTextsToEdit, setCardTextsToEdit, isCardShowed, setIsCardShowed, flashCards, setFlashCards }}>
      <AppLayout>
        <AppHeader />
        <CardList>
          {isNewCardshowed && <NewCard />}
          {isCardShowed && <Card />}
        </CardList>
      </AppLayout>
    </Context.Provider>
  );
}

export default App;
