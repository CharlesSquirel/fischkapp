import { AppHeader } from "./components/Header/AppHeader";
import { AppLayout } from "./components/AppLayout";
import "./styles/App.scss";
import CardList from "./components/common/CardList/CardList";
import React, { useState } from "react";
import NewCard from "./components/NewCard/NewCard";

type StateFunctionProps = React.Dispatch<React.SetStateAction<boolean>>;

export const Context = React.createContext<{
  isNewCardshowed: boolean;
  setIsNewCardShowed: StateFunctionProps;
}>({
  isNewCardshowed: false,
  setIsNewCardShowed: () => {},
});

function App() {
  const [isNewCardshowed, setIsNewCardShowed] = useState(false);

  return (
    <Context.Provider value={{ isNewCardshowed, setIsNewCardShowed }}>
      <AppLayout>
        <AppHeader />
        <CardList>{isNewCardshowed && <NewCard />}</CardList>
      </AppLayout>
    </Context.Provider>
  );
}

export default App;
