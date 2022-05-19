import React from "react";
import { LikeBar } from "../Likebar/LikeBar";
import "./Card.css";

type CardProps = {
  date: string;
  title: string;
  content?: string;
  image: string;
  type: "large" | "medium" | "small";
  className?: string;
};
export const Card = ({
  date,
  title,
  content,
  image,
  type,
  className,
}: CardProps) => {
  return (
    <div className={`${type}--Card Card`}>
      <div className={`${type}--Content`}>
        <div>
          <h4 className="time">{date}</h4>
          <h1 className={`${type}--Name`}>{title}</h1>
          {type === "large" && <p className={`${type}--Text`}>{content}</p>}
        </div>
        <img src={image} alt="no" className={`${type}--Img`} />
      </div>
      <LikeBar />
    </div>
  );
};
