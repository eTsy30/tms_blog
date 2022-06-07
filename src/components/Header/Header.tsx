import React, { useState } from "react";
import "./Header.css";
import { ReactComponent as MenuBurgerIMJ } from "../image/MenuBurger.svg";
import { ReactComponent as SearchButton } from "../image/SearchButton.svg";
import { ReactComponent as CancelButton } from "../image/Icon-Cancel1.svg";
import { ReactComponent as UserIcon } from "../image/headerIcon.svg";
import { MenuBurger } from "./MenuBurger/MenuBurger";
import { useSelector } from "react-redux";
const items = [
  { value: "Home", href: "/" },
  { value: "Add Card", href: "#" },
];
export const Header = () => {
  const user = useSelector((state: any) => state.userInfo.user);

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
      {user?.username ? (
        <div className="header-User" onClick={() => usemenuActive(false)}>
          <div className="header-Logo" onClick={() => usemenuActive(false)}>
            <span className="header-Logo-Text textStyle">AG</span>
          </div>
          <span className="header-NameUser textStyle">{user.username}</span>
        </div>
      ) : (
        <div className="header-User" onClick={() => usemenuActive(false)}>
          <UserIcon />
          <span className="header-NameUser textStyle">{}</span>
        </div>
      )}
      <MenuBurger
        userName="Bla Blanov"
        active={menuActive}
        setActive={usemenuActive}
        items={items}
      />
    </div>
  );
};
