import "./App.css";

import { CardPage } from "./Pages/CardPage/CardPage";
import "./App.css";
import { ContentPage } from "Pages/OnePostContent/ContentPage";
import { AddPostPage } from "Pages/AddPostPage/AddPostPage";
import { SingIn } from "Pages/SingInPaga/SingIn";
import { customFetch } from "components/Utils/CustomFetch";
import { SetStateAction, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { Pagination } from "Pagination/Pagination";

function App() {
  return (
    <div className="App">
      <CardPage />
      {/* <AddPostPage /> */}
      {/* <SingIn /> */}
    </div>
  );
}

export default App;
