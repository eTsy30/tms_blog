import "./App.css";
import { Header } from "../src/components/Header";
import { GeneralPage } from "./components/GeneralPage/GeneralPage";
import { CardPage } from "./Pages/CardPage/CardPage";
import { cardsServer } from "../src/ServerTemp/server";
import "./App.css";
import { AllContent } from "./components/AllContent/AllContent";
function App() {
  return (
    <div className="App">
      <CardPage />
    </div>
  );
}

export default App;
