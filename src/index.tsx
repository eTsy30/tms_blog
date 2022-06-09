import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SingUp } from "./Pages/SingUpPage/SiugUp";
import { SingIn } from "./Pages/SingInPaga/SingIn";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ContentPage } from "./Pages/OnePostContent/ContentPage";
import { Verify } from "./Pages/VerifyPage/Verify";
import { ResetPassword } from "Pages/ResetPasswordPage/ResetPassword";
import NewPasswordPage from "Pages/NewPasswordPage/NewPasswordPage";
import { SearchPage } from "Pages/SearchPage/SearchPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/singin" element={<SingIn />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/fogotPassword" element={<ResetPassword />} />
          <Route path="/blogs/:id" element={<ContentPage />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/newPassword" element={<NewPasswordPage />} />
          <Route path="/searchPage" element={<SearchPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Not Found</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
