import { AppHeader } from "./components/Header/AppHeader";
import { AppLayout } from "./components/AppLayout";
import "./styles/App.scss";
import CardList from "./components/common/CardList/CardList";
import Card from "./components/Card/Card";

function App() {
  return (
    <AppLayout>
      <AppHeader />
      <CardList>
        <Card />
      </CardList>
    </AppLayout>
  );
}

export default App;
