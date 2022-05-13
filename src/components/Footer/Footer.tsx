import React from "react";
import './Footer.css'
export const Footer=()=>{
    return (

<div className=" footer GeneralPage-Footer-Wrapper">
                <div className="footer_text">©{new Date().getFullYear().toString()} Blogfolio</div>
                <div className="footer_text">All rights reserved</div>
</div>

    )
}