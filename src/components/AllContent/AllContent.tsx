import React, { useEffect, useState } from "react";
import { Card } from "../Cards";
import "../../Pages/CardPage/CardPage.css";
interface ICard {
  id: number;
  label: string;
  content: string;
  image: string;
  date: string;
}
export const AllContent = (props: any) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setPosts(props.cards);
    }, 1000);
  }, []);
  return (
    <div className="parent">
      {posts.map((element: ICard, index) => (
        <div key={index.toString()} className={`div${index}`}>
          <>
            {index === 0 && (
              <Card
                type="large"
                title={element.label}
                date={element.date}
                image={element.image}
                content={element.content}
              />
            )}
            {index >= 1 && index < 5 && (
              <Card
                type="medium"
                title={element.label}
                date={element.date}
                image={element.image}
                content={element.content}
              />
            )}
            {index >= 5 && (
              <Card
                type="small"
                title={element.label}
                date={element.date}
                image={element.image}
                content={element.content}
              />
            )}
          </>
        </div>
      ))}
    </div>
  );
};
