import React from "react";
import space from '../image/DicktopBlokElement.png'
import{LikeBar} from '../Likebar/LikeBar'
import './PromoCard.css'
type PCard={
    className?:string,
    label?:string,
    text?:string,
    pictyre?:string}
export const PromoCard =(props:PCard) =>{
    return(<div className="PromoCardElement">
        <div className={props.className}>
<div className="PromoCardElementtextspase"> 
   <p className="PromoCardElementpDate">Date</p> 
   <h2 className="PromoCardElementmainTitle">Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...</h2>
   
</div>
<div className="PromoCardElementimgWrapper"><img  className="PromoCardElementimgspace" src={space} alt="#" /></div>

        </div>
        <LikeBar/>
        <div className="PromoCardElementfooterHeight"></div>
        </div>
    )
}