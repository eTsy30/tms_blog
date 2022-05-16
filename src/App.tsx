import React from "react";

import "./App.css";
import { Header } from "../src/components/Header";
import { GeneralPage } from "./components/GeneralPage/GeneralPage";
import { CardPage } from "./Pages/CardPage/CardPage";
import { cardsServer } from "../src/ServerTemp/server";
import { SingIn } from "./Pages/SingIn/SingIn";
import { SingUp } from "./Pages/SingUp/SiugUp";
function App() {
  return (
    <div className="App">
      <CardPage cards={cardsServer} />
      {/* <SingIn /> */}
      {/* <SingUp /> */}
    </div>
  );
}

export default App;
