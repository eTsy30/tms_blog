import { info, log } from "console";
import React from "react";
import { LikeBar } from "../Likebar/LikeBar";
import "./Card.css";

type CardProps = {
  type: "large" | "medium" | "small";
  info: any;
};

export const Card = ({ type, info }: CardProps) => {
  return (
    <div className={`${type}--Card Card`}>
      <div className={`${type}--Content`}>
        <div>
          <h4 className="time">{info.date}</h4>
          <h1 className={`${type}--Name`}>{info.title}</h1>
          {type === "large" && (
            <p className={`${type}--Text`}>{info.content}</p>
          )}
        </div>
        <div className="Card--wrapper--image">
          <img src={info.image} alt="no" className={`${type}--Img`} />
        </div>
      </div>
      <LikeBar
        id={info.id}
        favorit={info.favorit}
        dislike={info.dislike}
        like={info.like}
      />
    </div>
  );
};
