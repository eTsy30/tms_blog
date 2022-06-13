import React, { useState } from "react";
import "./Header.css";
import { ReactComponent as MenuBurgerIMJ } from "../image/MenuBurger.svg";
import { ReactComponent as SearchButton } from "../image/SearchButton.svg";
import { ReactComponent as CancelButton } from "../image/Icon-Cancel1.svg";
import { ReactComponent as UserIcon } from "../image/headerIcon.svg";
import { MenuBurger } from "./MenuBurger/MenuBurger";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchPost } from "Redux/searchPosts/SearchPosts";

const items = [
  { value: "Home", href: "/" },
  { value: "Add Card", href: "/addPostPage" },
];

export const Header = () => {
  const [inputActive, setinputActive] = useState(false);
  const [menuActive, setmenuActive] = useState(false);
  const [search, setsearch] = useState("");

  const user = useSelector((state: any) => state.userInfo.user);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const ActiveSearch = () => {
    navigate("/search-page");
    setinputActive(!inputActive);
  };
  const searchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsearch(event.target.value);
    dispatch(searchPost(search));
  };

  return (
    <div className="header">
      <div className="header-Left-Menu">
        <button
          className="header--button--berger"
          onClick={() => setmenuActive(!menuActive)}
        >
          {menuActive ? <CancelButton /> : <MenuBurgerIMJ />}
        </button>
      </div>
      <div className="header-Search" onClick={() => setmenuActive(false)}>
        {inputActive && (
          <input
            className="header-Search--input"
            type="search"
            onChange={searchValue}
            value={search}
          />
        )}
      </div>
      <div
        className="header-Button-Search"
        onClick={() => {
          setmenuActive(false);
        }}
      >
        <SearchButton onClick={ActiveSearch}></SearchButton>
      </div>
      {user?.username ? (
        <div className="header-User" onClick={() => setmenuActive(false)}>
          <div className="header-Logo" onClick={() => setmenuActive(false)}>
            <span className="header-Logo-Text textStyle">AG</span>
          </div>
          <span className="header-NameUser textStyle">{user.username}</span>
        </div>
      ) : (
        <div className="header-User" onClick={() => setmenuActive(false)}>
          <UserIcon />
          <span className="header-NameUser textStyle">{}</span>
        </div>
      )}
      <MenuBurger
        userName="Bla Blanov"
        active={menuActive}
        setActive={setmenuActive}
        items={items}
      />
    </div>
  );
};
