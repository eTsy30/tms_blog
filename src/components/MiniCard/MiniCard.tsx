import React from "react";
import space from '../image/DicktopBlokElement.png'
import{LikeBar} from '../Likebar/LikeBar'
import './MiniCard.css'
type Pcard={
    date?:string,
    label?:string
}

export  const MiniCard=(props:Pcard) =>{
    return(
        <div className="MiniCardMainWrapper" >
<img  className="MiniCardimgspace" src={space} alt="#" />
<p className="MiniCardpDate">Date</p> 
<h2 className="MiniCardmainTitle">Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...</h2>
<div className="MiniCardwraperLibeBar">
<LikeBar/>
</div>

        </div>

      
    )
}