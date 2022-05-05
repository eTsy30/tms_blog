import React from "react";
import space from "../../../image/DicktopBlokElement.png";
import "../LargeCard/LargeCard.css";
import { LikeBar } from "../../../Likebar/LikeBar";
type BlElement = {
  label: string;
  content?: string;
  image: string;
  date: any;
};
export const LargeCard = ({ label, content, image, date }: BlElement) => {
  return (<div className="LargeCard_wrapper">
  <div  className="LargeCard_wrapper_In">
          <div className='LargeCard_left'>
              <p className="LargeCard_date general_text ">{date}</p> 
              <p className="LargeCard_mainTitle general_text ">{label}</p>
              <p className="LargeCard_label general_text ">{content}</p>
          </div>
  <div className="LargeCard_right">  
      <img  className="LargeCard_logo" src={image} alt="#" />
  </div>
  </div>
      <div className="heightLike"><LikeBar/></div>
  </div>
    
// {/*  */}
        
  )
};


