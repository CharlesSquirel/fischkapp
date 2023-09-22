import { AppHeader } from "./components/Header/AppHeader";
import { AppLayout } from "./components/AppLayout";
import "./styles/App.scss";
import CardList from "./components/common/CardList/CardList";
import React, { useState } from "react";
import NewCard from "./components/NewCard/NewCard";
import { CardTextsProps, initialNewCardText } from "./components/services/types/types";

type StateFunctionProps = React.Dispatch<React.SetStateAction<boolean>>;
type ObjectFunctionProps = React.Dispatch<React.SetStateAction<CardTextsProps>>;
export const Context = React.createContext<{
  isNewCardshowed: boolean;
  setIsNewCardShowed: StateFunctionProps;
  newCardTexts: CardTextsProps;
  setNewCardTexts: ObjectFunctionProps;
}>({
  isNewCardshowed: false,
  setIsNewCardShowed: () => {},
  newCardTexts: initialNewCardText,
  setNewCardTexts: () => {},
});

function App() {
  const [isNewCardshowed, setIsNewCardShowed] = useState(false);
  const [newCardTexts, setNewCardTexts] = useState<CardTextsProps>(initialNewCardText);

  return (
    <Context.Provider value={{ isNewCardshowed, setIsNewCardShowed, newCardTexts, setNewCardTexts }}>
      <AppLayout>
        <AppHeader />
        <CardList>{isNewCardshowed && <NewCard />}</CardList>
      </AppLayout>
    </Context.Provider>
  );
}

export default App;
