import "./App.css";

import { CardPage } from "./Pages/CardPage/CardPage";
import "./App.css";
import { AllContent } from "./components/AllContent/AllContent";
import { DoubleMainPage } from "./Pages/DoubleMainPage";
import { SearchPage } from "./Pages/SearchPage/SearchPage";
import { SingUp } from "./Pages/SingUp/SiugUp";
import { ResetPassword } from "./Pages/ResetPassword/ResetPassword";
function App() {
  return (
    <div className="App">
      <CardPage />
      {/* <SearchPage /> */}
      <ResetPassword />
    </div>
  );
}

export default App;
