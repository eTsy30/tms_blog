import React from "react";
import space from '../../../image/DicktopBlokElement.png'
import{LikeBar} from '../../../Likebar/LikeBar'
import './SmallCard.css'
type PCard={
    label?:string,
    date?:any,
    image?:string}

export const SmallCard =({label,date,image}:PCard) =>{
    return(<div className="SmalCard_wrapper">
    <div  className="SmalCard_wrapper_In">
            <div className='SmalCard_left'>
                <p className="SmalCard_date general_text ">{date}</p> 
                <p className="SmalCard_label general_text ">{label}</p>
            </div>
    <div className="SmalCard_right">  
        <img  className="SmalCard_logo" src={image} alt="#" />
    </div>
    </div>
        <div className="heightLike"><LikeBar/></div>
    </div>
    )
}