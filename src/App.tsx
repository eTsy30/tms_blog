import "./App.css";
import { Header } from "../src/components/Header";
import { GeneralPage } from "./components/GeneralPage/GeneralPage";
import { CardPage } from "./Pages/CardPage/CardPage";
import { cardsServer } from "../src/ServerTemp/server";
import "./App.css";
function App() {
  return (
    <div className="App">
      <CardPage cards={cardsServer} />
    </div>
  );
}

export default App;
