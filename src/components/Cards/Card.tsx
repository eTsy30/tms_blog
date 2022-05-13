import React from "react";
import './Card.css'
type CardProps = {
    date: string;
    title: string;
    context?: string;
    img: string;
    type: 'large'|'medium'|'small';
    className?: string;
  };
export const Card=({date,title,context,img,type,className}:CardProps)=>{
    return (
        <div className={`${type}--Card Card` }>
          <div className={`${type}--Content`}>
            <div >
              <h4 className='time'>{date}</h4>
              <h1 className={`${type}--Name`}>{title}</h1>
             {type === 'large' && <p className={`${type}--Text`}>{context}</p>} 
            </div>
            <img src={img} alt="no" className={`${type}--Img`} />
          </div>
          {/* <LikeBar /> */}block LikeBar
        </div>
      );
    };
