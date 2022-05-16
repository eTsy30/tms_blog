import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tabs } from "./components/Tabs";
import { useState } from "react";
import { setTheme } from "./components/redux/theme";

const items = [
  { title: "All", content: "All content" },
  { title: "My favorites", content: " My favorites content" },
  { title: "Popular", content: " Popular content" },
];
function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <div className={`App theme--${theme}`}>
      <Tabs items={items} onClick={toggleTheme} />

      <button onClick={toggleTheme}>dfhfghfghfg</button>
    </div>
  );
}

export default App;
