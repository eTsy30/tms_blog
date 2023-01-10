import React from "react";
import './Tabs.css'

export const Tabs =()=>{
    return(
        <div className="Tabs__wrapper">
          <a className="Tab__block--link" href="#" >All</a>
          <a className="Tab__block--link" href="#" >My favorites</a>
          <a className="Tab__block--link" href="#">Popular</a>
        </div>

    )
}