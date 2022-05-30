import { info, log } from "console";
import React from "react";
import { Link } from "react-router-dom";
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
          <Link to={`/blogs/${info.id}`}>
            <h1 className={`${type}--Name`}>{info.title}</h1>
          </Link>
          {type === "large" && <p className={`${type}--Text`}>{info.text}</p>}
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
