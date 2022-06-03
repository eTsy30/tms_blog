import "./App.css";

import { CardPage } from "./Pages/CardPage/CardPage";
import "./App.css";
import { ContentPage } from "Pages/OnePostContent/ContentPage";
import { AddPostPage } from "Pages/AddPostPage/AddPostPage";
import { SingIn } from "Pages/SingIn/SingIn";

function App() {
  return (
    <div className="App">
      {/* <CardPage /> */}
      <AddPostPage />
      {/* <SingIn /> */}
    </div>
  );
}

export default App;
