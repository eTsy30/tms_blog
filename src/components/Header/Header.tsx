import React from "react";
import './Header.css'
import { ReactComponent as MenuBurger } from "../image/MenuBurger.svg";
import { ReactComponent as SearchButton } from "../image/SearchButton.svg";

export const Header=()=>{
    return(
<div className="HeaderMAinWrapper">
<div className="Header-Left-Menu"><MenuBurger/></div>
<div className="Header-Search"></div>
<div className="Header-Button-Search"><SearchButton/></div>
<div className="Header-User">
    <div className="Header-Logo"><span className="Header-Logo-Text">AG</span></div>
    <span className="Header-NameUser">Artem Grkdjt</span>
</div>
</div>
    )
}