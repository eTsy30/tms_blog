import React, { useState } from "react";
import "./Header.css";
import { ReactComponent as MenuBurgerIMJ } from "../image/MenuBurger.svg";
import { ReactComponent as SearchButton } from "../image/SearchButton.svg";
import { ReactComponent as CancelButton } from "../image/Icon-Cancel1.svg";
import { MenuBurger } from "./MenuBurger/MenuBurger";
const items = [
  { value: "Home", href: "#" },
  { value: "addCard", href: "#" },
  { value: "addCard", href: "#" },
];
export const Header = () => {
  const [inputActive, useinputActive] = useState(false);
  const ActiveSearch = () => {
    useinputActive(true);
  };
  const [menuActive, usemenuActive] = useState(false);
  return (
    <div className="header">
      <div className="header-Left-Menu">
        <button
          className="header--button--berger"
          onClick={() => usemenuActive(!menuActive)}
        >
          {menuActive ? <CancelButton /> : <MenuBurgerIMJ />}
        </button>
      </div>
      <div className="header-Search" onClick={() => usemenuActive(false)}>
        {inputActive && (
          <input className="header-Search--input" type="search" />
        )}
      </div>
      <div
        className="header-Button-Search"
        onClick={() => usemenuActive(false)}
      >
        <SearchButton onClick={ActiveSearch} />
      </div>
      <div className="header-User" onClick={() => usemenuActive(false)}>
        <div className="header-Logo" onClick={() => usemenuActive(false)}>
          <span className="header-Logo-Text textStyle">AG</span>
        </div>
        <span className="header-NameUser textStyle">Artem Grkdjt</span>
      </div>
      <MenuBurger
        userName="Bla Blanov"
        active={menuActive}
        setActive={usemenuActive}
        items={items}
      />
    </div>
  );
};
