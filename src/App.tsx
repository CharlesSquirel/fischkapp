import { AppHeader } from "./components/Header/AppHeader";
import { AppLayout } from "./components/AppLayout";
import "./App.scss";
import NewCard from "./components/NewCard/NewCard";

function App() {
  return (
    <AppLayout>
      <AppHeader />
      <NewCard />
    </AppLayout>
  );
}

export default App;
