import React from "react";
import './Header.css'
import { ReactComponent as MenuBurger } from "../image/MenuBurger.svg";
import { ReactComponent as SearchButton } from "../image/SearchButton.svg";

export const Header=()=>{
    return(
<div className="header">
<div className="header-Left-Menu"><MenuBurger/></div>
<div className="header-Search"></div>
<div className="header-Button-Search"><SearchButton/></div>
<div className="header-User">
    <div className="header-Logo">
        <span className="header-Logo-Text textStyle">AG</span>
        </div>
    <span className="header-NameUser textStyle">Artem Grkdjt</span>
    
</div>
</div>
    )
}