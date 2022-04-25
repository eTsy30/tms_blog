import React from "react";
import { ReactComponent as Like } from '../image/like.svg'
import { ReactComponent as SvgBwi } from '../image/buttonWithIcon.svg'
import './LikeBar.css'

export  const LikeBar=()=>{
    return(
<div className="footerspase">
    <div className="leftspace">
        <Like className="LlikeBar" />
        <span>20</span>
        <Like />
    </div>

    <div className="rightspace">
        <SvgBwi/>  
        <span></span>
        <a>...</a> 
    </div>
    
    
</div>
    )
}
