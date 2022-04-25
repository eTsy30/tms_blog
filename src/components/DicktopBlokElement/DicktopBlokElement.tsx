import React from "react";
import space from '../image/DicktopBlokElement.png'
import './DicktopBlokElement.css'
import{LikeBar} from '../Likebar/LikeBar'
type BlElement={
    className?:string,
    label?:string,
    text?:string,
    pictyre?:string}
export const DicktopBlokElement =(props:BlElement) =>{
    return(<div className="BigDicktopBlokElement">
        <div className={props.className}>
<div className="textspase"> 
   <p className="pDate">Date</p> 
   <h2 className="mainTitle">Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...</h2>
   <p className="pText">Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.</p>
</div>
<div className="imgWrapper"><img  className="imgspace" src={space} alt="#" /></div>

        </div>
        <div className="heightLike"><LikeBar/></div>
       
       
        </div>
    )
}