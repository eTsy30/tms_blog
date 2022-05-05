import React from "react";
import space from '../../../image/DicktopBlokElement.png'
import{LikeBar} from '../../../Likebar/LikeBar'
import './MediumCard.css'
type Pcard={
    label: string;
    image: string;
    date: any;

}

export  const MediumCard=({date,label,image}:Pcard) =>{
    return(
        <div className="MediumCard_wrapper" >
            <div className="MediumCard_top">
            <img  className="MediumCard_img" src={image} alt={image} />
            <p className="MediumCard_Date genegal_text">{date}</p> 
            <h2 className="MediumCard_lable genegal_text">{label}</h2>
            </div>
            <div className="MediumCard_likeBar">
            <LikeBar/>
            </div>

        </div>

      
    )
}