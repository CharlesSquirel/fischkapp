import { AppHeader } from "./components/Header/AppHeader";
import { AppLayout } from "./components/AppLayout";
import "./App.scss";
import CardList from "./components/common/CardList/CardList";
import NewCard from "./components/NewCard/NewCard";

function App() {
  return (
    <AppLayout>
      <AppHeader />
      <CardList>
        <NewCard />
      </CardList>
    </AppLayout>
  );
}

export default App;
