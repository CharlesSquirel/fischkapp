import { AppHeader } from "./components/Header/AppHeader";
import { AppLayout } from "./components/AppLayout";
import "./styles/App.scss";
import CardList from "./components/common/CardList/CardList";
import CardBox from "./components/Card/CardBox";

function App() {
  return (
    <AppLayout>
      <AppHeader />
      <CardList>
        <CardBox/>
      </CardList>
    </AppLayout>
  );
}

export default App;
